'use client';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const data = [
    { date: '06/05/2024', Bond: -500, ECA: -300, 'Senior Note': -200, 'Term Loan': -100 },
    { date: '09/05/2024', Bond: -600, ECA: -400, 'Senior Note': -250, 'Term Loan': -150 },
    { date: '03/05/2025', Bond: -700, ECA: -500, 'Senior Note': -300, 'Term Loan': -200 },
    { date: '03/05/2026', Bond: -800, ECA: -550, 'Senior Note': -1800, 'Term Loan': -250 },
    { date: '03/05/2027', Bond: -900, ECA: -600, 'Senior Note': -4200, 'Term Loan': -1200 },
    { date: '03/05/2029', Bond: -1000, ECA: -650, 'Senior Note': -400, 'Term Loan': -800 },
    { date: '03/05/2034', Bond: -1100, ECA: -700, 'Senior Note': -2200, 'Term Loan': -500 },
    { date: '+03/05/2034', Bond: -1200, ECA: -750, 'Senior Note': -1000, 'Term Loan': -600 },
  ];

const formatYAxis = (tickItem: number) => {
    return `${(tickItem / 1000).toFixed(2)}k`;
};

const formatTooltipValue = (value: number) => {
    return `${(value / 1000).toFixed(2)}k`;
}

export default function DebtMaturitiesLadderChart() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis tickFormatter={formatYAxis} domain={[-5000, 0]}/>
          <Tooltip formatter={formatTooltipValue}/>
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Bar dataKey="Bond" stackId="a" fill="hsl(220 8% 92%)" />
          <Bar dataKey="ECA" stackId="a" fill="hsl(220 8% 80%)" />
          <Bar dataKey="Senior Note" stackId="a" fill="#f472b6" />
          <Bar dataKey="Term Loan" stackId="a" fill="#fde047" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
