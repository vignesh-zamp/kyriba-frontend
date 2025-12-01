'use client';
import { useState } from 'react';
import { Star, MoreVertical, Printer, RefreshCw, Settings2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CreditFacilityReportChart from './charts/credit-facility-report-chart';
import DebtMaturitiesLadderChart from './charts/debt-maturities-ladder-chart';
import KeyInterestRateCurvesChart from './charts/key-interest-rate-curves-chart';
import FixedVsFloatDebtChart from './charts/fixed-vs-float-debt-chart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';


const ChartHeader = ({ title, subTitle }: { title: string; subTitle?: string }) => (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        {subTitle && <p className="text-xs text-muted-foreground">{subTitle}</p>}
      </div>
      <div className="flex items-center gap-2 text-muted-foreground">
        <Printer className="h-4 w-4 cursor-pointer" />
        <RefreshCw className="h-4 w-4 cursor-pointer" />
        <Settings2 className="h-4 w-4 cursor-pointer" />
        <MoreVertical className="h-4 w-4 cursor-pointer" />
      </div>
    </div>
  );

export default function HomeDashboard() {
  const [activeTab, setActiveTab] = useState('cfo-cockpit');

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
            <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-muted-foreground" />
                <h2 className="text-sm font-semibold">Reporting dashboard</h2>
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-2">
                <TabsList className="bg-transparent p-0">
                    <TabsTrigger value="banking-dashboard" className="rounded-none px-3 py-1.5 text-sm font-medium text-muted-foreground data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none">Banking Dashboard</TabsTrigger>
                    <TabsTrigger value="liquidity-dashboard" className="rounded-none px-3 py-1.5 text-sm font-medium text-muted-foreground data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none">Liquidity Dashboard</TabsTrigger>
                    <TabsTrigger value="cfo-cockpit" className="rounded-none px-3 py-1.5 text-sm font-medium text-muted-foreground data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none">CFO Cockpit</TabsTrigger>
                    <TabsTrigger value="treasurer-cockpit" className="rounded-none px-3 py-1.5 text-sm font-medium text-muted-foreground data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none">Treasurer Cockpit</TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
        <Button variant="outline" size="sm" className="self-center">Basic version</Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="col-span-1">
            <CardHeader>
                <ChartHeader title="Credit Facility Report (CF_REPORT)" subTitle="2024-03-05 - 2024-03-05" />
            </CardHeader>
            <CardContent>
                <CreditFacilityReportChart />
            </CardContent>
        </Card>
        <Card className="col-span-1">
            <CardHeader>
                <ChartHeader title="Debt Maturities Ladder (DEBT-SETTLEMENT)" />
            </CardHeader>
            <CardContent>
                <DebtMaturitiesLadderChart />
            </CardContent>
        </Card>
        <Card className="col-span-1">
            <CardHeader>
                <ChartHeader title="Key Interest Rate Curves (MARKET_CURVES)" />
            </CardHeader>
            <CardContent>
                <KeyInterestRateCurvesChart />
            </CardContent>
        </Card>
        <Card className="col-span-1">
            <CardHeader>
                <ChartHeader title="Fixed vs. Float Debt (DEBT-ALLOCATION)" />
            </CardHeader>
            <CardContent>
                <FixedVsFloatDebtChart />
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
