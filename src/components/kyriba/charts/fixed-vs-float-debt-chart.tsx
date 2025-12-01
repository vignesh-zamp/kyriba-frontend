'use client';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
    { name: 'Fixed', value: 8833.90 },
    { name: 'Floating', value: 385.00 },
];
  
const COLORS = ['hsl(220 8% 85%)', 'hsl(220 8% 60%)'];

export default function FixedVsFloatDebtChart() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            innerRadius={70}
            fill="#8884d8"
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number, name: string) => [`${value.toFixed(2)}`, name]} />
          <Legend 
            verticalAlign="bottom" 
            align="center"
            wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }}
            formatter={(value, entry) => {
              const item = data.find(d => d.name === value);
              return `${value} = ${item?.value.toFixed(2)}`;
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
