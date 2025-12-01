'use client';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const data = [
    { name: '5. Mar', 'Initial/Final': 10000000 },
    { name: '6. Mar', 'Initial/Final': 12000000 },
    { name: '7. Mar', 'Initial/Final': 15000000 },
    { name: '8. Mar', 'Initial/Final': 18000000 },
    { name: '9. Mar', 'Initial/Final': 20000000 },
    { name: '10. Mar', 'Initial/Final': 22000000 },
    { name: '11. Mar', 'Initial/Final': 25000000 },
    { name: '12. Mar', 'Initial/Final': 28000000 },
];

const formatYAxis = (tickItem: number) => {
    return `${(tickItem / 1000000).toFixed(0)}M`;
};

export default function CashPositionChart() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 30, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis 
            tickFormatter={formatYAxis} 
            tick={{ fontSize: 12 }} 
            domain={[0, 30000000]}
            label={{ value: 'Initial/Final', angle: -90, position: 'insideLeft', offset: -20, style: { textAnchor: 'middle', fontSize: '12px' } }}
          />
          <Tooltip formatter={(value: number) => [`${value.toLocaleString()}`, 'Final Balance']} />
          <Legend 
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }}
            payload={[{ value: 'Final Balance', type: 'line', id: 'ID01', color: '#facc15' }]}
          />
          <Area type="monotone" dataKey="Initial/Final" stroke="#facc15" fill="#fef9c3" name="Final Balance" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}