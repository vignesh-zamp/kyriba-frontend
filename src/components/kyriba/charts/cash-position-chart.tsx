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

const formatYAxis = (tickItem: number) => {
    if (tickItem === 0) return '0';
    return `${(tickItem / 1000000).toFixed(0)}M`;
};

interface ChartData {
  name: string;
  'Initial/Final': number;
}

interface CashPositionChartProps {
  data: ChartData[];
}

export default function CashPositionChart({ data }: CashPositionChartProps) {
  const yDomain = useMemo(() => {
    if (!data || data.length === 0) return [0, 30000000];
    const values = data.map(item => item['Initial/Final']);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const buffer = (max - min) * 0.1;
    return [Math.floor(min - buffer), Math.ceil(max + buffer)];
  }, [data]);

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 30, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis 
            tickFormatter={formatYAxis} 
            tick={{ fontSize: 12 }} 
            domain={yDomain}
            allowDataOverflow={true}
            label={{ value: 'Initial/Final', angle: -90, position: 'insideLeft', offset: -20, style: { textAnchor: 'middle', fontSize: '12px' } }}
          />
          <Tooltip formatter={(value: number) => [`${value.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`, 'Final Balance']} />
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

    