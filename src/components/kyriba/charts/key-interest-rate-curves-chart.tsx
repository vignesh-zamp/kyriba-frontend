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

const data = [
    { name: 'O/N', eur: 5.2, gbp: 5.1, usd: 5.3 },
    { name: 'T/N', eur: 5.25, gbp: 5.15, usd: 5.35 },
    { name: '1W', eur: 5.3, gbp: 5.2, usd: 5.4 },
    { name: '1M', eur: 5.4, gbp: 5.3, usd: 5.5 },
    { name: '2M', eur: 5.35, gbp: 5.25, usd: 5.45 },
    { name: '3M', eur: 5.3, gbp: 5.2, usd: 5.4 },
    { name: '6M', eur: 5.1, gbp: 5.0, usd: 5.2 },
    { name: '9M', eur: 4.9, gbp: 4.8, usd: 5.0 },
    { name: '1Y', eur: 4.7, gbp: 4.6, usd: 4.8 },
    { name: '15M', eur: 4.6, gbp: 4.5, usd: 4.7 },
    { name: '18M', eur: 4.5, gbp: 4.4, usd: 4.6 },
    { name: '21M', eur: 4.4, gbp: 4.3, usd: 4.5 },
    { name: '2Y', eur: 4.3, gbp: 4.2, usd: 4.4 },
    { name: '3Y', eur: 4.1, gbp: 4.0, usd: 4.2 },
    { name: '4Y', eur: 4.0, gbp: 3.9, usd: 4.1 },
    { name: '5Y', eur: 3.9, gbp: 3.8, usd: 4.0 },
    { name: '6Y', eur: 3.85, gbp: 3.75, usd: 3.95 },
    { name: '7Y', eur: 3.8, gbp: 3.7, usd: 3.9 },
    { name: '8Y', eur: 3.75, gbp: 3.65, usd: 3.85 },
    { name: '9Y', eur: 3.7, gbp: 3.6, usd: 3.8 },
    { name: '10Y', eur: 3.65, gbp: 3.55, usd: 3.75 },
];

const CustomXAxisTick = (props: any) => {
    const { x, y, payload } = props;
    const isSpecial = ['1W', '1M', '3M', '6M', '1Y'].includes(payload.value);
    
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill={isSpecial ? '#f472b6' : '#666'} transform="rotate(-35)">
          {payload.value}
        </text>
      </g>
    );
  };
  

export default function KeyInterestRateCurvesChart() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 40, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0} tick={<CustomXAxisTick />} />
          <YAxis domain={[1, 6]} tickFormatter={(tick) => tick.toFixed(2)} />
          <Tooltip />
          <Legend verticalAlign="bottom" wrapperStyle={{ paddingTop: '50px', fontSize: '12px' }} payload={[
              { value: 'EUR Zero Coupon Curve - 12/01/2023 (Bid Zero coupon)', type: 'line', color: 'hsl(220 8% 70%)' },
              { value: 'GBP Zero Coupon Curve - 12/01/2023 (Bid Zero coupon)', type: 'line', color: 'hsl(220 8% 40%)' },
              { value: 'USD Zero Coupon Curve - 12/01/2023 (Bid Zero coupon)', type: 'line', color: '#f472b6' }
          ]} />
          <Line type="monotone" dataKey="eur" stroke="hsl(220 8% 70%)" dot={false} name="EUR Zero Coupon Curve - 12/01/2023 (Bid Zero coupon)" />
          <Line type="monotone" dataKey="gbp" stroke="hsl(220 8% 40%)" dot={false} name="GBP Zero Coupon Curve - 12/01/2023 (Bid Zero coupon)" />
          <Line type="monotone" dataKey="usd" stroke="#f472b6" dot={false} name="USD Zero Coupon Curve - 12/01/2023 (Bid Zero coupon)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
