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
} from 'recharts';

const data = [
  { name: 'KYRIBA-CAP', Available: 125, 'Unused %': 40, 'Used %': 60 },
  { name: 'KYRIBA-CORP', Available: 250, 'Unused %': 80, 'Used %': 20 },
  { name: 'KYRIBA-US1', Available: 50, 'Unused %': 25, 'Used %': 75 },
];

const formatYAxis = (tickItem: number) => {
    return `${tickItem.toFixed(2)}M`;
};

const formatTooltipValue = (value: number, name: string) => {
    if (name === 'Available') {
        return `${value.toFixed(2)}M`;
    }
    return `${value.toFixed(2)}`;
}

export default function CreditFacilityReportChart() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <ComposedChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 20 }}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" tickFormatter={formatYAxis} />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" domain={[0, 100]} />
          <Tooltip formatter={formatTooltipValue} />
          <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }} />
          <Bar dataKey="Available" yAxisId="left" barSize={50} fill="hsl(220 8% 92%)" />
          <Line type="monotone" dataKey="Unused %" yAxisId="right" stroke="hsl(240 10% 3.9%)" />
          <Line type="monotone" dataKey="Used %" yAxisId="right" stroke="#f472b6" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
