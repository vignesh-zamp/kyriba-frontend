import type { SVGProps } from 'react';

export const KyribaLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg width="100" height="28" viewBox="0 0 100 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text x="0" y="20" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="hsl(var(--primary))">
      Kyriba
    </text>
  </svg>
);

export const BankReconciliationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2Z" />
    <path d="M16 2v4" />
    <path d="M8 2v4" />
    <path d="M2 10h20" />
    <path d="m9 16 2 2 4-4" />
  </svg>
);

export const CashForecastingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>
);

export const NettingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2v20" />
    <path d="M2 12h20" />
    <path d="M17 7l-5 5-5-5" />
    <path d="M17 17l-5-5-5 5" />
  </svg>
);

export const InHouseBankingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 21v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2" />
    <path d="M12 11a4 4 0 1 1-4-4 4 4 0 0 1 4 4z" />
    <path d="m21 21-1.5-1.5" />
    <path d="m3 21 1.5-1.5" />
    <path d="M12 3V1" />
    <path d="M12 13v-2" />
  </svg>
);
