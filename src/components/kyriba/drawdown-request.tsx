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
  Printer,
  Star,
  Filter as FilterIcon,
  Info,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';

const data = [
  { seller: 'KYRIBA-US2', sellerName: 'Kyriba US 2 Suppliers', type: 'Drawdown', reference: 'DRAW-51', status: 'To be approved by the funder', drawdownAmount: '3,608,419.00', currency: 'USD', interest: '0.00', fee: '0.00', netAmount: '3,608,419.00', rate: '0.0000' },
  { seller: 'KYRIBA-US2', sellerName: 'Kyriba US 2 Suppliers', type: 'Repayment', reference: 'REPAY-3', status: 'Approved', drawdownAmount: '', currency: 'USD', interest: '', fee: '', netAmount: '', rate: '0.0000' },
  { seller: 'KYRIBA-US2', sellerName: 'Kyriba US 2 Suppliers', type: 'Drawdown', reference: 'DRAW-1', status: 'Approved', drawdownAmount: '50,011.00', currency: 'USD', interest: '0.00', fee: '0.00', netAmount: '50,011.00', rate: '0.0000' },
  { seller: 'KYRIBA-US2', sellerName: 'Kyriba US 2 Suppliers', type: 'Drawdown', reference: 'DRAW-7', status: 'Approved', drawdownAmount: '55,555.00', currency: 'USD', interest: '0.00', fee: '0.00', netAmount: '0.00', rate: '0.0000' },
  { seller: 'KYRIBA-US2', sellerName: 'Kyriba US 2 Suppliers', type: 'Drawdown', reference: 'DRAW-8', status: 'Approved', drawdownAmount: '53,301.00', currency: 'USD', interest: '0.00', fee: '0.00', netAmount: '53,301.00', rate: '0.0000' },
  { seller: 'KYRIBA-US2', sellerName: 'Kyriba US 2 Suppliers', type: 'Repayment', reference: 'REPAY-17', status: 'To be approved by the funder', drawdownAmount: '53,020.00', currency: 'USD', interest: '', fee: '', netAmount: '53,020.00', rate: '0.0000' },
  { seller: 'KYRIBA-US2', sellerName: 'Kyriba US 2 Suppliers', type: 'Drawdown', reference: 'DRAW-2', status: 'Approved', drawdownAmount: '', currency: 'USD', interest: '', fee: '', netAmount: '', rate: '0.0000' },
  { seller: 'KYRIBA-US2', sellerName: 'Kyriba US 2 Suppliers', type: 'Drawdown', reference: 'DRAW-4', status: 'To be approved by the funder', drawdownAmount: '55,555.00', currency: 'USD', interest: '0.00', fee: '0.00', netAmount: '0.00', rate: '0.0000' },
  { seller: 'KYRIBA-US2', sellerName: 'Kyriba US 2 Suppliers', type: 'Drawdown', reference: 'DRAW-5', status: 'To be approved by the funder', drawdownAmount: '24,242.00', currency: 'USD', interest: '0.00', fee: '0.00', netAmount: '24,242.00', rate: '0.0000' },
  { seller: 'KYRIBA-US2', sellerName: 'Kyriba US 2 Suppliers', type: 'Drawdown', reference: 'DRAW-5', status: 'To be approved by the funder', drawdownAmount: '13,131.00', currency: 'USD', interest: '0.00', fee: '0.00', netAmount: '13,131.00', rate: '0.0000' },
];

export default function DrawdownRequest() {
  return (
    <div className="bg-background text-foreground h-full flex flex-col text-xs">
      <div className="border-b">
        <div className="px-6 py-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <h2 className="text-sm font-semibold">
                    Drawdown Request - (Drawdown Request)
                </h2>
            </div>
            <div className="flex items-center gap-4">
                <div className='flex items-center gap-1'>
                    <Button variant="outline" size="sm" className='h-7'>Approve</Button>
                    <Button variant="outline" size="sm" className='h-7'>Reject</Button>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                    <FilePen className="h-4 w-4 cursor-pointer" />
                    <ListFilter className="h-4 w-4 cursor-pointer" />
                    <Info className="h-4 w-4 cursor-pointer" />
                    <Printer className="h-4 w-4 cursor-pointer" />
                    <History className="h-4 w-4 cursor-pointer" />
                    <MoreVertical className="h-4 w-4 cursor-pointer" />
                </div>
            </div>
        </div>
        <div className="px-6 pb-2 flex items-center justify-between text-xs">
            <div className='flex items-center gap-4'>
                <Button variant="outline" size="sm" className="bg-white h-7">
                    Menu <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
                <div>Filter: none</div>
            </div>
            <div>
                View all | 1-10 / 10
            </div>
        </div>
      </div>
      <div className="flex-grow overflow-auto">
        <Table className="w-full text-xs">
          <TableHeader>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableHead className="w-12 py-1"><Checkbox /></TableHead>
              <TableHead className="py-1">Seller</TableHead>
              <TableHead className="py-1">Seller name</TableHead>
              <TableHead className="py-1">Type</TableHead>
              <TableHead className="py-1">Reference</TableHead>
              <TableHead className="py-1">Status</TableHead>
              <TableHead className="text-right py-1">Drawdown amount</TableHead>
              <TableHead className="py-1">Currency</TableHead>
              <TableHead className="text-right py-1">Interest</TableHead>
              <TableHead className="text-right py-1">Fee</TableHead>
              <TableHead className="text-right py-1">Net amount</TableHead>
              <TableHead className="py-1"><FilterIcon className="h-4 w-4" /></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} className="odd:bg-white even:bg-gray-50">
                <TableCell className="py-1"><Checkbox /></TableCell>
                <TableCell className="py-1">{row.seller}</TableCell>
                <TableCell className="py-1">{row.sellerName}</TableCell>
                <TableCell className="py-1">{row.type}</TableCell>
                <TableCell className="py-1">{row.reference}</TableCell>
                <TableCell className="py-1">{row.status}</TableCell>
                <TableCell className="text-right py-1">{row.drawdownAmount}</TableCell>
                <TableCell className="py-1">{row.currency}</TableCell>
                <TableCell className="text-right py-1">{row.interest}</TableCell>
                <TableCell className="text-right py-1">{row.fee}</TableCell>
                <TableCell className="text-right py-1">{row.netAmount}</TableCell>
                <TableCell className="text-right py-1">{row.rate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-end p-4">
        <Button className="bg-pink-600 text-white hover:bg-pink-700">Ready for a Live Demo?</Button>
      </div>
    </div>
  );
}
