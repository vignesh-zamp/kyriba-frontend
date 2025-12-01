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
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  FilePen,
  ListFilter,
  MoreVertical,
  Play,
  Printer,
  Plus,
  Star,
  Filter as FilterIcon,
  Info,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';

const data = [
  { supplier: 'SUPPLIER1', supplierName: 'Supplier 1', batchId: '', type: 'Invoice', amount: '53,095.00', status: 'Payment prepared', invoiceDate: '02/12/2023', buyerName: 'Kyriba Technology US1 Corp (US1)' },
  { supplier: 'SUPPLIER1', supplierName: 'Supplier 1', batchId: '', type: 'Invoice', amount: '50,248.00', status: 'Approved', invoiceDate: '01/29/2023', buyerName: 'Kyriba Technology US2 Corp. (US2)' },
  { supplier: 'SUPPLIER1', supplierName: 'Supplier 1', batchId: '', type: 'Invoice', amount: '53,905.00', status: 'Approved', invoiceDate: '02/23/2023', buyerName: 'Kyriba Technology US1 Corp (US1)' },
  { supplier: 'SUPPLIER1', supplierName: 'Supplier 1', batchId: '', type: 'Invoice', amount: '40,201.00', status: 'Early payment settlement prepared', invoiceDate: '02/23/2023', buyerName: 'Kyriba Technology US2 Corp. (US2)' },
  { supplier: 'SUPPLIER1', supplierName: 'Supplier 1', batchId: '', type: 'Invoice', amount: '65,652.00', status: 'Early payment requested', invoiceDate: '02/06/2023', buyerName: 'Kyriba Technology US2 Corp. (US2)' },
  { supplier: 'SUPPLIER1', supplierName: 'Supplier 1', batchId: '', type: 'Invoice', amount: '110,011.00', status: 'Early payment settlement prepared', invoiceDate: '03/27/2023', buyerName: 'Kyriba Technology US1 Corp (US1)' },
  { supplier: 'SUPPLIER1', supplierName: 'Supplier 1', batchId: '', type: 'Invoice', amount: '10,911.00', status: 'Payment prepared', invoiceDate: '01/27/2023', buyerName: 'Kyriba Technology US1 Corp (US1)' },
  { supplier: 'SUPPLIER1', supplierName: 'Supplier 1', batchId: '', type: 'Invoice', amount: '40,410.00', status: 'Approved', invoiceDate: '03/29/2023', buyerName: 'Kyriba Technology US2 Corp. (US2)' },
  { supplier: 'SUPPLIER1', supplierName: 'Supplier 1', batchId: '', type: 'Invoice', amount: '40,420.00', status: 'Approved', invoiceDate: '03/29/2023', buyerName: 'Kyriba Technology US2 Corp. (US2)' },
  { supplier: 'SUPPLIER1', supplierName: 'Supplier 1', batchId: '', type: 'Invoice', amount: '44,092.00', status: 'Early payment settlement prepared', invoiceDate: '02/23/2023', buyerName: 'Kyriba Technology US1 Corp (US1)' },
  { supplier: 'SUPPLIER1', supplierName: 'Supplier 1', batchId: '', type: 'Invoice', amount: '53,032.00', status: 'Approved', invoiceDate: '03/24/2023', buyerName: 'Kyriba Technology US2 Corp. (US2)' },
  { supplier: 'SUPPLIER1', supplierName: 'Supplier 1', batchId: '', type: 'Invoice', amount: '402,401.00', status: 'Early payment settlement prepared', invoiceDate: '02/15/2023', buyerName: 'Kyriba Technology US1 Corp (US1)' },
  { supplier: 'SUPPLIER1', supplierName: 'Supplier 1', batchId: '', type: 'Invoice', amount: '100,391.00', status: 'Early payment settlement prepared', invoiceDate: '04/01/2023', buyerName: 'Kyriba Technology US1 Corp (US1)' },
  { supplier: 'SUPPLIERD', supplierName: 'Supplier D', batchId: '10JULA', type: 'Invoice', amount: '1,607.00', status: 'Payment prepared', invoiceDate: '06/23/2023', buyerName: 'Kyriba International Finance Ltd' },
  { supplier: 'SUPPLIERD', supplierName: 'Supplier D', batchId: '10JULA', type: 'Invoice', amount: '1,858.00', status: 'Payment prepared', invoiceDate: '07/01/2023', buyerName: 'Kyriba International Finance Ltd' },
  { supplier: 'SUPPLIERD', supplierName: 'Supplier D', batchId: '10JULA', type: 'Invoice', amount: '2,561.00', status: 'Payment prepared', invoiceDate: '06/17/2023', buyerName: 'Kyriba International Finance Ltd' },
  { supplier: 'SUPPLIERD', supplierName: 'Supplier D', batchId: '10JULA', type: 'Invoice', amount: '3,065.00', status: 'Payment prepared', invoiceDate: '06/27/2023', buyerName: 'Kyriba International Finance Ltd' },
  { supplier: 'SUPPLIERD', supplierName: 'Supplier D', batchId: '10JULA', type: 'Invoice', amount: '7,281.00', status: 'Payment prepared', invoiceDate: '06/20/2023', buyerName: 'Kyriba International Finance Ltd' },
  { supplier: 'SUPPLIERD', supplierName: 'Supplier D', batchId: '10JULA', type: 'Invoice', amount: '8,171.00', status: 'Payment prepared', invoiceDate: '06/29/2023', buyerName: 'Kyriba International Finance Ltd' },
  { supplier: 'SUPPLIERD', supplierName: 'Supplier D', batchId: '10JULA', type: 'Invoice', amount: '9,704.00', status: 'Payment prepared', invoiceDate: '06/25/2023', buyerName: 'Kyriba International Finance Ltd' },
  { supplier: 'SUPPLIERC', supplierName: 'Supplier C', batchId: '10JULA', type: 'Invoice', amount: '5,498.00', status: 'Payment prepared', invoiceDate: '06/29/2023', buyerName: 'Kyriba International Finance Ltd' },
  { supplier: 'SUPPLIERC', supplierName: 'Supplier C', batchId: '10JULA', type: 'Invoice', amount: '4,260.00', status: 'Payment prepared', invoiceDate: '06/09/2023', buyerName: 'Kyriba International Finance Ltd' },
  { supplier: 'SUPPLIERE', supplierName: 'Supplier E', batchId: '10JULA', type: 'Invoice', amount: '5,303.00', status: 'Payment prepared', invoiceDate: '07/08/2023', buyerName: 'Kyriba International Finance Ltd' },
  { supplier: 'SUPPLIERA', supplierName: 'Supplier A', batchId: '10JULA', type: 'Invoice', amount: '8,695.00', status: 'Payment prepared', invoiceDate: '07/02/2023', buyerName: 'Kyriba International Finance Ltd' },
  { supplier: 'SUPPLIERC', supplierName: 'Supplier C', batchId: '10JULA', type: 'Invoice', amount: '9,265.00', status: 'Payment prepared', invoiceDate: '06/17/2023', buyerName: 'Kyriba International Finance Ltd' },
  { supplier: 'SUPPLIERC', supplierName: 'Supplier C', batchId: '10JULA', type: 'Invoice', amount: '9,574.00', status: 'Payment prepared', invoiceDate: '06/09/2023', buyerName: 'Kyriba International Finance Ltd' },
  { supplier: 'SUPPLIER1', supplierName: 'Supplier 1', batchId: '', type: 'Invoice', amount: '42,411.00', status: 'Payment prepared', invoiceDate: '06/18/2023', buyerName: 'Kyriba Technology US1 Corp (US1)' },
];

const StatusIndicator = ({ status }: { status: string }) => {
  let color = 'bg-gray-400';
  if (status.includes('prepared')) color = 'bg-yellow-400';
  if (status.includes('Approved')) color = 'bg-green-400';
  if (status.includes('requested')) color = 'bg-blue-400';
  
  return <div className={`h-2.5 w-2.5 rounded-full ${color}`} />;
}

export default function TrackPayables() {
  return (
    <div className="bg-background text-foreground h-full flex flex-col text-xs">
      <div className="border-b">
        <div className="px-6 py-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <h2 className="text-sm font-semibold">
                    Documents - (Ledger of SCF Invoices)
                </h2>
            </div>
            <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className='h-7'>Approve</Button>
                <div className="flex items-center gap-2 text-muted-foreground">
                    <FilePen className="h-4 w-4 cursor-pointer" />
                    <ListFilter className="h-4 w-4 cursor-pointer" />
                    <Info className="h-4 w-4 cursor-pointer" />
                    <Printer className="h-4 w-4 cursor-pointer" />
                    <MoreVertical className="h-4 w-4 cursor-pointer" />
                </div>
            </div>
        </div>
        <div className="px-6 pb-2 flex items-center justify-between text-xs">
            <div className='flex items-center gap-2'>
                <Button variant="outline" size="sm" className="bg-white h-7">
                    Menu <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
                <Button variant="outline" size="sm" className="bg-white h-7">
                    <Plus className="h-4 w-4 mr-2" /> Add
                </Button>
                <div className='flex items-center gap-1'><Play className="h-4 w-4" /> Filter: none</div>
            </div>
            <div className='flex items-center gap-2'>
                View all
                <ChevronsLeft className="h-4 w-4 text-muted-foreground" />
                <ChevronLeft className="h-4 w-4 text-muted-foreground" />
                <span>1 - 63 / 63</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <ChevronsRight className="h-4 w-4 text-muted-foreground" />
            </div>
        </div>
      </div>
      <div className="flex-grow overflow-auto">
        <Table className="w-full text-xs">
          <TableHeader>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableHead className="w-12 py-1"><Checkbox /></TableHead>
              <TableHead className="py-1">Supplier</TableHead>
              <TableHead className="py-1">Supplier name</TableHead>
              <TableHead className="py-1">Batch Id</TableHead>
              <TableHead className="py-1">Type</TableHead>
              <TableHead className="text-right py-1">Amount</TableHead>
              <TableHead className="py-1">Status</TableHead>
              <TableHead className="py-1">Invoice date</TableHead>
              <TableHead className="py-1">Buyer name</TableHead>
              <TableHead className="py-1"><div className='flex items-center gap-1'><Info className='h-3 w-3' /><FilterIcon className="h-3 w-3" /></div></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} className="odd:bg-white even:bg-gray-50">
                <TableCell className="py-1"><Checkbox /></TableCell>
                <TableCell className="py-1">{row.supplier}</TableCell>
                <TableCell className="py-1">{row.supplierName}</TableCell>
                <TableCell className="py-1">{row.batchId}</TableCell>
                <TableCell className="py-1">{row.type}</TableCell>
                <TableCell className="text-right py-1">{row.amount}</TableCell>
                <TableCell className="py-1">{row.status}</TableCell>
                <TableCell className="py-1">
                    <div className='flex items-center gap-2'>
                        <StatusIndicator status={row.status} />
                        {row.invoiceDate}
                    </div>
                </TableCell>
                <TableCell className="py-1">{row.buyerName}</TableCell>
                <TableCell className="py-1"></TableCell>
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
