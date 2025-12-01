import {
  ArrowLeftRight,
  Briefcase,
  DollarSign,
  FileText,
  GanttChartSquare,
  Landmark,
  Network,
  Scale,
  Settings,
  ShieldCheck,
  TrendingUp,
  Wallet,
  Warehouse,
  Banknote,
  LifeBuoy
} from 'lucide-react';
import { 
  BankReconciliationIcon, 
  CashForecastingIcon, 
  InHouseBankingIcon, 
  NettingIcon 
} from '@/components/kyriba/icons';
import type { ComponentType } from 'react';

export type MenuItem = {
  id: string;
  title: string;
  icon: ComponentType<{ className?: string }>;
  category: string;
};

export const menuCategories: { name: string; items: MenuItem[] }[] = [
  {
    name: 'Cash & Liquidity',
    items: [
      { id: 'bank-reconciliation', title: 'Bank Reconciliation', icon: BankReconciliationIcon, category: 'Cash & Liquidity' },
      { id: 'cash-forecasting', title: 'Cash Forecasting', icon: CashForecastingIcon, category: 'Cash & Liquidity' },
      { id: 'in-house-banking', title: 'In-house Banking', icon: InHouseBankingIcon, category: 'Cash & Liquidity' },
      { id: 'cash-pooling', title: 'Cash Pooling', icon: Wallet, category: 'Cash & Liquidity' },
    ],
  },
  {
    name: 'Payments',
    items: [
      { id: 'payments', title: 'Payments', icon: ArrowLeftRight, category: 'Payments' },
      { id: 'bank-statement', title: 'Bank Statement', icon: FileText, category: 'Payments' },
      { id: 'financial-status', title: 'Financial Status', icon: TrendingUp, category: 'Payments' },
      { id: 'multilateral-netting', title: 'Multilateral Netting', icon: NettingIcon, category: 'Payments' },
    ],
  },
  {
    name: 'Financial Transactions',
    items: [
      { id: 'bank-account-management', title: 'Bank Account Management', icon: Settings, category: 'Financial Transactions' },
      { id: 'fx-risk-management', title: 'FX Risk Management', icon: DollarSign, category: 'Financial Transactions' },
      { id: 'debt-and-investment', title: 'Debt & Investment', icon: Landmark, category: 'Financial Transactions' },
    ],
  },
  {
    name: 'Connectivity',
    items: [
      { id: 'internal-controls', title: 'Internal Controls', icon: ShieldCheck, category: 'Connectivity' },
      { id: 'open-api', title: 'Open API', icon: Network, category: 'Connectivity' },
    ],
  },
  {
    name: 'Supply Chain Finance',
    items: [
      { id: 'trade-finance', title: 'Trade Finance', icon: Scale, category: 'Supply Chain Finance' },
      { id: 'dynamic-discounting', title: 'Dynamic Discounting', icon: Banknote, category: 'Supply Chain Finance' },
    ],
  },
  {
    name: 'Working Capital',
    items: [
      { id: 'receivables-finance', title: 'Receivables Finance', icon: Briefcase, category: 'Working Capital' },
      { id: 'payables-finance', title: 'Payables Finance', icon: Warehouse, category: 'Working Capital' },
    ],
  },
];

export const allMenuItems: MenuItem[] = menuCategories.flatMap(category => category.items);
