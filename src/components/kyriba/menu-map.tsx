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
import { Input } from '../ui/input';
  
  const categories = [
    {
      title: 'Cash Management',
      id: 'cash-management',
      items: [
        { id: 'bank-actual-integration', icon: BankActualIntegrationIcon, label: 'Bank Actual Integration' },
        { id: 'cash-position', icon: CashPositionIcon, label: 'Cash Position' },
        { id: 'auto-pool-cash', icon: AutoPoolCashIcon, label: 'Auto Pool Cash' },
      ],
    },
    {
      title: 'Liquidity Planning',
      id: 'liquidity-planning',
      items: [
        { id: 'active-forecast', icon: ActiveForecastIcon, label: 'Active Forecast' },
        { id: 'historical-predictive-modeling', icon: HistoricalPredictiveModelingIcon, label: 'Historical Predictive Modeling' },
        { id: 'forecasted-invoices', icon: ForecastedInvoicesIcon, label: 'Forecasted Invoices' },
      ],
    },
    {
      title: 'Receivables Financing',
      id: 'receivables-financing',
      items: [
        { id: 'sell-invoices', icon: SellInvoicesIcon, label: 'Sell Invoices' },
        { id: 'request-drawdown', icon: RequestDrawdownIcon, label: 'Request Drawdown & Early Payment from Funder' },
        { id: 'abl-drawdowns', icon: AblDrawdownsIcon, label: 'ABL Drawdowns' },
      ],
    },
    {
        title: 'Supply Chain Financing',
        id: 'supply-chain-financing',
        items: [
          { id: 'track-payables', icon: TrackPayablesIcon, label: 'Track Payables' },
          { id: 'track-early-payment', icon: TrackEarlyPaymentIcon, label: 'Track Early Payment Request Funding from Bank' },
          { id: 'manage-extended-payments', icon: ManageExtendedPaymentsIcon, label: 'Manage Extended Payments to Funder' },
        ],
      },
      {
        title: 'Accuracy Tracking',
        id: 'accuracy-tracking',
        items: [
          { id: 'cash-flow-reliability-check', icon: CashFlowReliabilityCheckIcon, label: 'Cash Flow Reliability Check' },
          { id: 'cost-of-debt-forecast', icon: CostOfDebtForecastIcon, label: 'Cost of Debt Forecast' },
          { id: 'global-liquidity', icon: GlobalLiquidityIcon, label: 'Global Liquidity' },
        ],
      },
  ];
  
  type ActiveView = 'menu-map' | 'home' | 'bank-connectivity' | 'cash-position' | 'liquidity-plan' | 'variance-analysis' | 'drawdown-request' | 'track-payables';

  export default function MenuMap({ onViewChange }: { onViewChange: (view: ActiveView) => void }) {
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

        <Card className="p-4 w-fit">
            <h2 className="text-sm font-semibold text-black">Cash Conversion Cycle</h2>
        </Card>

        <div className="grid grid-cols-5 gap-4 items-start">
          {categories.map((category, index) => (
            <div key={category.title} className="flex items-start gap-4">
              <div className="flex flex-col items-center gap-4">
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 justify-center h-[96px] text-center flex items-center px-2">{category.title}</Button>
                <div className="space-y-2 w-full">
                  {category.items.map((item) => (
                    <Card 
                      key={item.label} 
                      className="p-3 shadow-md hover:shadow-lg transition-shadow cursor-pointer h-[96px] flex flex-col items-center justify-center"
                      onClick={() => {
                        if (item.id === 'bank-actual-integration') {
                          onViewChange('bank-connectivity');
                        }
                        if (item.id === 'cash-position') {
                          onViewChange('cash-position');
                        }
                        if (item.id === 'active-forecast') {
                            onViewChange('liquidity-plan');
                        }
                        if (item.id === 'cash-flow-reliability-check') {
                            onViewChange('variance-analysis');
                        }
                        if (item.id === 'request-drawdown') {
                            onViewChange('drawdown-request');
                        }
                        if (item.id === 'track-payables') {
                            onViewChange('track-payables');
                        }
                      }}
                    >
                      <div className="flex flex-col items-center text-center gap-2">
                        <item.icon className="h-8 w-8 text-blue-600" />
                        <p className="text-xs font-medium">{item.label}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
              {index < categories.length - 1 && (
                 <div className="flex-shrink-0 h-[96px] flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  
  
