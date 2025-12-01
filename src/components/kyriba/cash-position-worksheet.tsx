'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  ChevronDown,
  FilePen,
  History,
  ListFilter,
  MoreVertical,
  Play,
  Printer,
  RefreshCw,
  Info,
  Sigma,
  Star,
  Calendar,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import CashPositionChart from './charts/cash-position-chart';

const data = [
    { type: 'group', account: 'AU-AUD-HSBC', description: 'AU AUD Bank Account at HSBC', values: [0.00, 0.00, 0.00, 0.00, 0.00, 0.00] },
    { type: 'item', account: 'KYRIBA-AU', description: 'Kyriba Technology Inc. Australia (AUS)', values: [0.00, 0.00, 0.00, 0.00, 0.00, 0.00], parent: 'AU-AUD-HSBC', color: 'bg-blue-900', textColor: 'text-white' },
    { type: 'group', account: 'CAN-RBCA-CAD', description: 'CAN account at RBC-TOR in CAD', values: [538376.66, 538376.66, 538376.66, 538374.02, 538374.02, 538374.02] },
    { type: 'item', account: 'CAN-RBCB-CAD', description: 'CAN Account at RBC-TOR in CAD (Bank Reporting)', values: [-35087.12, -35087.12, -35087.12, -35087.12, -35087.12, -35087.12], parent: 'CAN-RBCA-CAD', color: 'bg-pink-200' },
    { type: 'item', account: 'KYRIBA-CA', description: 'Kyriba Ltd. Canada (CAN)', values: [503289.54, 503289.54, 503289.54, 503286.90, 503286.90, 503286.90], parent: 'CAN-RBCA-CAD', color: 'bg-blue-900', textColor: 'text-white' },
    { type: 'group', account: 'DDA-A', description: 'DDA Account A', values: [500.00, 500.00, 500.00, 500.00, 500.00, 500.00] },
    { type: 'group', account: 'DDA-B', description: 'DDA Account B', values: [450.00, 450.00, 450.00, 450.00, 450.00, 450.00] },
    { type: 'group', account: 'HQ-CITI-AUD', description: 'HQ AUD Account at CITI (BRP)', values: [-47.32, -47.32, -47.32, -47.32, -47.32, -47.32], color: 'bg-pink-200' },
    { type: 'group', account: 'HQ-CITI-CAD', description: 'HA Account with Citi CAD (BRP)', values: [-5.78, -5.78, -5.78, -5.78, -5.78, -5.78], color: 'bg-pink-200' },
    { type: 'group', account: 'HQ-CITI-EUR', description: 'HQ EUR Account at CITI (BRP)', values: [-55.28, -55.28, -55.28, -55.28, -55.28, -55.28], color: 'bg-pink-200' },
    { type: 'group', account: 'HQ-CITI-JPY', description: 'HQ JPY Account at CITI (BRP)', values: [35590.46, 35590.46, 35590.46, 35590.46, 35590.46, 35590.46], color: 'bg-green-200' },
    { type: 'group', account: 'HQ-CITI-USD', description: 'HQ USD Account at Citi (BRP)', values: [-354.19, -354.19, -354.19, -354.19, -354.19, -354.19], color: 'bg-pink-200' },
    { type: 'group', account: 'HQ1-BOFA-USD', description: 'HQ1 account at BOFA in USD', values: [-34438.20, -34438.97, -34453.67, -34495.08, -34539.27, -34539.27], expandable: true, color: 'bg-pink-200' },
    { type: 'group', account: 'HQI-CITI-MXN', description: 'HQ1 account at CITI-NYC in MXN', values: [127922.86, 127922.93, 127923.00, 127923.08, 127923.14, 127923.20], color: 'bg-green-200' },
    { type: 'group', account: 'HQI-CITI-PLN', description: 'HQ1 Account at CITI-PL in PLN', values: [-4.22, -4.22, -4.22, -4.22, -4.22, -4.22], color: 'bg-pink-200' },
    { type: 'group', account: 'HQI-CITIBE-E', description: 'HQ1 Account at CITI-BE in EUR', values: [-21674.16, -21674.16, -21674.16, -21674.16, -21674.16, -21674.16], color: 'bg-pink-200' },
];

const dates = ['Tue 03/05/2024', 'Wed 03/06/2024', 'Thu 03/07/2024', 'Fri 03/08/2024', 'Mon 03/11/2024', 'Tue 03/12/2024'];
const finalBalance = [25213916.40, 25231959.69, 25249989.45, 25304070.36, 25322069.43, 25340113.08];

export default function CashPositionWorksheet() {
  return (
    <div className="bg-background text-foreground h-full flex flex-col">
      <div className="border-b">
        <div className="px-6 py-2 flex justify-between items-center">
            <div className='flex items-center gap-2'>
                <Star className="h-4 w-4" />
                <h2 className="text-sm font-semibold">
                    Cash position worksheet with chart - (Cash Balances - Chart)
                </h2>
            </div>
          <div className="flex items-center gap-2 text-muted-foreground">
              <FilePen className="h-4 w-4 cursor-pointer" />
              <Info className="h-4 w-4 cursor-pointer" />
              <Printer className="h-4 w-4 cursor-pointer" />
              <History className="h-4 w-4 cursor-pointer" />
              <MoreVertical className="h-4 w-4 cursor-pointer" />
          </div>
        </div>
        <div className="px-6 pb-4 flex items-end gap-4 text-xs">
            <div>
                <Button variant="outline" size="sm" className="bg-white">
                    Menu <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
            </div>
            <div className="flex flex-col">
                <label>By balance</label>
            </div>
            <div className="flex flex-col">
                <label>Line totals:</label>
                <div className="flex items-center border rounded-md">
                    <Input defaultValue="Company" className="border-none h-8" />
                    <ChevronDown className="h-4 w-4 mr-2" />
                </div>
            </div>
            <div className="flex flex-col">
                <label>Line totals 2:</label>
                <div className="flex items-center border rounded-md">
                    <Input defaultValue="Account" className="border-none h-8" />
                    <ChevronDown className="h-4 w-4 mr-2" />
                </div>
            </div>
            <div className="flex flex-col">
                <label>Start:</label>
                <div className="flex items-center border rounded-md">
                    <Input defaultValue="03/05/2024" className="border-none h-8" />
                    <Calendar className="h-4 w-4 mr-2" />
                </div>
            </div>
            <div className="flex flex-col">
                <label>End:</label>
                <div className="flex items-center border rounded-md">
                    <Input defaultValue="03/12/2024" className="border-none h-8" />
                    <Calendar className="h-4 w-4 mr-2" />
                </div>
            </div>
            <div className="flex flex-col">
                <label>Cur.:</label>
                <div className="flex items-center border rounded-md">
                    <Input defaultValue="USD" className="border-none h-8" />
                    <MoreVertical className="h-4 w-4 mr-2" />
                </div>
            </div>
            <div className="flex flex-col">
                <label>Step:</label>
                <div className="flex items-center border rounded-md">
                    <Input defaultValue="Day" className="border-none h-8" />
                    <ChevronDown className="h-4 w-4 mr-2" />
                </div>
            </div>
            <Button size="sm">Apply</Button>
        </div>
      </div>
      <div className="px-6 py-4">
        <CashPositionChart />
      </div>
      <div className="flex-grow overflow-auto px-6">
        <Table className="w-full whitespace-nowrap">
          <TableHeader>
            <TableRow className="bg-gray-100 hover:bg-gray-100 sticky top-0">
              <TableHead className="py-2 text-xs w-1/4">03/05/2024 - 03/12/2024</TableHead>
              <TableHead className="py-2 text-xs w-1/4">Account description</TableHead>
              {dates.map(date => <TableHead key={date} className="text-right py-2">{date}</TableHead>)}
              <TableHead className="text-right py-2">Tot.</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} className={row.color ? row.color : 'odd:bg-white even:bg-gray-50'}>
                <TableCell className={`py-1 ${row.textColor || ''}`}>
                  <div className="flex items-center gap-2">
                    {row.type === 'group' && <Sigma className="h-4 w-4" />}
                    {row.expandable && <Play className="h-4 w-4 fill-current text-gray-500" />}
                    <span className={row.parent ? 'pl-6' : ''}>{row.account}</span>
                  </div>
                </TableCell>
                <TableCell className={`py-1 ${row.textColor || ''}`}>{row.description}</TableCell>
                {row.values.map((value, i) => (
                    <TableCell key={i} className={`text-right py-1 ${row.textColor || ''}`}>
                        {value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </TableCell>
                ))}
                <TableCell className="text-right py-1"></TableCell>
              </TableRow>
            ))}
            <TableRow className="bg-blue-600 text-white hover:bg-blue-700">
                <TableCell colSpan={2} className="py-1 font-bold">Final Balance</TableCell>
                {finalBalance.map((value, i) => (
                    <TableCell key={i} className="text-right py-1 font-bold">
                        {value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </TableCell>
                ))}
                <TableCell className="text-right py-1"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-end p-4">
        <Button className="bg-pink-600 text-white hover:bg-pink-700">Ready for a Live Demo?</Button>
      </div>
    </div>
  );
}
