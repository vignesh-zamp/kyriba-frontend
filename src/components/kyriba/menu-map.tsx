'use client';

import {
    AblDrawdownsIcon,
    ActiveForecastIcon,
    AutoPoolCashIcon,
    BankActualIntegrationIcon,
    CashFlowReliabilityCheckIcon,
    CashPositionIcon,
    CostOfDebtForecastIcon,
    ForecastedInvoicesIcon,
    GlobalLiquidityIcon,
    HistoricalPredictiveModelingIcon,
    ManageExtendedPaymentsIcon,
    RequestDrawdownIcon,
    SellInvoicesIcon,
    TrackEarlyPaymentIcon,
    TrackPayablesIcon,
} from '@/components/kyriba/icons';
import { ArrowRight, ChevronDown, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import { Input } from '../ui/input';
  
  const categories = [
    {
      title: 'Cash Management',
      items: [
        { icon: BankActualIntegrationIcon, label: 'Bank Actual Integration' },
        { icon: CashPositionIcon, label: 'Cash Position' },
        { icon: AutoPoolCashIcon, label: 'Auto Pool Cash' },
      ],
    },
    {
      title: 'Liquidity Planning',
      items: [
        { icon: ActiveForecastIcon, label: 'Active Forecast' },
        { icon: HistoricalPredictiveModelingIcon, label: 'Historical Predictive Modeling' },
        { icon: ForecastedInvoicesIcon, label: 'Forecasted Invoices' },
      ],
    },
    {
      title: 'Receivables Financing',
      items: [
        { icon: SellInvoicesIcon, label: 'Sell Invoices' },
        { icon: RequestDrawdownIcon, label: 'Request Drawdown & Early Payment from Funder' },
        { icon: AblDrawdownsIcon, label: 'ABL Drawdowns' },
      ],
    },
    {
        title: 'Supply Chain Financing',
        items: [
          { icon: TrackPayablesIcon, label: 'Track Payables' },
          { icon: TrackEarlyPaymentIcon, label: 'Track Early Payment Request Funding from Bank' },
          { icon: ManageExtendedPaymentsIcon, label: 'Manage Extended Payments to Funder' },
        ],
      },
      {
        title: 'Accuracy Tracking',
        items: [
          { icon: CashFlowReliabilityCheckIcon, label: 'Cash Flow Reliability Check' },
          { icon: CostOfDebtForecastIcon, label: 'Cost of Debt Forecast' },
          { icon: GlobalLiquidityIcon, label: 'Global Liquidity' },
        ],
      },
  ];
  
  export default function MenuMap() {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="relative w-72">
                    <Input defaultValue="Bank statements" className="pr-10" />
                    <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>
                <Button variant="outline" className="text-muted-foreground">Search</Button>
            </div>
            <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-muted-foreground" />
                <label htmlFor="bookmarks" className="text-sm font-medium">Only Bookmarks</label>
            </div>
        </div>

        <Card className="p-4">
            <h2 className="text-sm font-semibold text-primary">Cash Conversion Cycle</h2>
        </Card>

        <div className="grid grid-cols-5 gap-4 items-start">
          {categories.map((category, index) => (
            <div key={category.title} className="flex items-start gap-4">
              <div className="flex flex-col items-center gap-4">
                <Button className="w-full bg-blue-100 text-blue-800 hover:bg-blue-200 justify-center">{category.title}</Button>
                <div className="space-y-2 w-full">
                  {category.items.map((item) => (
                    <Card key={item.label} className="p-3 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="flex flex-col items-center text-center gap-2">
                        <item.icon className="h-8 w-8 text-blue-600" />
                        <p className="text-xs font-medium">{item.label}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
              {index < categories.length - 1 && (
                 <div className="flex-shrink-0 pt-4">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  
  