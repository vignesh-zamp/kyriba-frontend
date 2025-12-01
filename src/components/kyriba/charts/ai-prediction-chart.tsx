'use client';

import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  Area,
} from 'recharts';
import { eachDayOfInterval, format, addDays, subDays } from 'date-fns';

const generateData = () => {
    const startDate = new Date(2023, 11, 31); // Dec 31, 2023
    const endDate = new Date(2024, 11, 28); // Dec 28, 2024
    const days = eachDayOfInterval({ start: startDate, end: endDate });

    let lastActual = 100000;
    const data = days.map((day, i) => {
        const isActualsRange = i < days.length / 2;
        
        lastActual += (Math.random() - 0.5) * 40000;
        const actual = isActualsRange ? lastActual : null;
        
        const prediction = lastActual + (Math.random() - 0.5) * 80000 + (i - days.length/2)*500;
        
        const existing = prediction + (Math.random() - 0.5) * 60000;

        return {
            date: format(day, 'MM/dd/yyyy'),
            Actuals: actual,
            'AI Prediction': prediction,
            'Existing forecast': existing,
        }
    });

    return data;
}

const data = generateData();

const formatYAxis = (tickItem: number) => {
    if (tickItem === 0) return '0';
    return `${(tickItem / 1000).toFixed(0)}k`;
};

const formatTooltipValue = (value: number) => value.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

export default function AIPredictionChart() {
  return (
    <div style={{ width: '100%', height: 250 }}>
      <ResponsiveContainer>
        <ComposedChart data={data} margin={{ top: 5, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 10 }}
            interval={30}
            tickFormatter={(str) => {
                const date = new Date(str);
                return format(date, 'MM/dd/yyyy');
            }}
          />
          <YAxis tickFormatter={formatYAxis} tick={{ fontSize: 10 }} />
          <Tooltip formatter={formatTooltipValue} labelStyle={{ fontSize: 12 }} wrapperStyle={{ fontSize: 12 }} />
          <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '10px' }} />
          <Area type="monotone" dataKey="Actuals" fill="#a7f3d0" stroke="#10b981" name="Actuals" />
          <Area type="monotone" dataKey="AI Prediction" fill="#fef08a" stroke="#f59e0b" name="AI Prediction" />
          <Line type="monotone" dataKey="Existing forecast" stroke="#60a5fa" strokeWidth={2} dot={false} name="Existing forecast" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
