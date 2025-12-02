'use client';
import {
  LineChart,
  Line,
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

const lineColors: { [key: string]: string } = {
    'Final balance': '#4f46e5',
    'CASH MOVEMENT': '#22c55e',
    'LIQUIDITY': '#3b82f6',
    'Surplus / Defecit': '#ef4444',
    'TARGET': '#f97316',
    'TOTAL AVAILABLE FUNDING': '#a855f7',
    'TOTAL FINANCIAL FLOWS': '#14b8a6',
    'TOTAL INVESTMENT FLOWS': '#facc15',
    'TOTAL OPERATING FLOWS': '#ec4899',
    'Payroll': '#8b5cf6',
    'Taxes': '#d946ef',
    'VAT Collected': '#db2777',
  };
  

interface ChartData {
  name: string;
  [key: string]: any;
}

interface LiquidityPlanChartProps {
  data: ChartData[];
  visibleLines: { [key: string]: boolean };
}

export default function LiquidityPlanChart({ data, visibleLines }: LiquidityPlanChartProps) {
  const activeLines = Object.keys(visibleLines).filter(key => visibleLines[key]);

  return (
    <div style={{ width: '100%', height: 200 }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis 
            tickFormatter={formatYAxis} 
            tick={{ fontSize: 12 }} 
            domain={[-7500000, 5000000]}
            allowDataOverflow={true}
          />
          <Tooltip formatter={(value: number) => `${value.toLocaleString()}M`} />
          <Legend 
            verticalAlign="top"
            align="right"
            wrapperStyle={{ fontSize: '10px', paddingBottom: '20px' }}
          />
          {activeLines.map(line => (
             <Line key={line} type="monotone" dataKey={line} stroke={lineColors[line]} dot={false} strokeWidth={2} name={line} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
