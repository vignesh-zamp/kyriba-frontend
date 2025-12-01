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
  Info
} from 'lucide-react';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';

const data = [
    { bank: 'ANZ', company: 'KYRIBA-AU', reportingType: 'End of day', balanceReported: '100%', cur: 'USD', bankStatement: '80 416.48', bankLedger: '80 416.48', flowLedger: '367 064.37' },
    { bank: 'BARCLAYS', reportingType: 'End of day', balanceReported: '100%', cur: 'USD', bankStatement: '96 502.30', bankLedger: '96 502.30', flowLedger: '1 570 041.95' },
    { bank: 'BBVA', reportingType: 'End of day', balanceReported: '100%', cur: 'USD', bankStatement: '-22 144.37', bankLedger: '-22 144.37', flowLedger: '1 019 300.37' },
    { bank: 'BNP', company: 'KYRIBA-FR', reportingType: 'End of day', bankAccount: 'FR-EUR-2002', accountNumber: '8684302002', balanceReported: '100%', cur: 'USD', bankStatement: '-22 368.45', bankLedger: '-22 368.45', flowLedger: '194 911.45' },
    { bank: 'BOA', reportingType: 'End of day', balanceReported: '100%', cur: 'USD', bankStatement: '-282 600.05', bankLedger: '-282 600.05', flowLedger: '2 967 253.83' },
    { bank: 'BOC', company: 'KYRIBA-CN', reportingType: 'End of day', balanceReported: '100%', cur: 'USD', bankStatement: '25 586.87', bankLedger: '25 586.87', flowLedger: '143 052.11' },
    { bank: 'DANSKE', reportingType: 'End of day', balanceReported: '100%', cur: 'USD', bankStatement: '-100 355.25', bankLedger: '-100 355.25', flowLedger: '188 341.23' },
    { bank: 'DBS', company: 'KYRIBA-SG', reportingType: 'End of day', balanceReported: '100%', cur: 'USD', bankStatement: '28 509.32', bankLedger: '28 509.32', flowLedger: '595 327.26' },
    { bank: 'DEUTSCHE', reportingType: 'End of day', balanceReported: '100%', cur: 'USD', bankStatement: '134 469.22', bankLedger: '134 469.22', flowLedger: '421 845.20' },
    { bank: 'DNB', reportingType: 'End of day', balanceReported: '100%', cur: 'USD', bankStatement: '242 009.12', bankLedger: '242 009.12', flowLedger: '783 590.86' },
    { bank: 'ICBC', company: 'KYRIBA-CN', reportingType: 'End of day', balanceReported: '100%', cur: 'USD', bankStatement: '4 015.93', bankLedger: '4 015.93', flowLedger: '-36 792.09' },
    { bank: 'ICICI', company: 'KYRIBA-IN', reportingType: 'End of day', balanceReported: '100%', cur: 'USD', bankStatement: '73 292.66', bankLedger: '73 292.66', flowLedger: '1 010 739.84' },
    { bank: 'ING', company: 'KYRIBA-NL', reportingType: 'End of day', balanceReported: '100%', cur: 'USD', bankStatement: '-355 307.03', bankLedger: '-355 307.03', flowLedger: '1 441 767.35' },
    { bank: 'INTESA', company: 'KYRIBA-IT', reportingType: 'End of day', balanceReported: '100%', cur: 'USD', bankStatement: '1 745 120.35', bankLedger: '1 745 120.35', flowLedger: '7 834 351.85' },
    { bank: 'MIZUHO', company: 'KYRIBA-JP', reportingType: 'End of day', bankAccount: 'JP-JPY-4306', accountNumber: '5577344306', balanceReported: '100%', cur: 'USD', bankStatement: '-668.23', bankLedger: '-668.23', flowLedger: '95 132.42' },
    { bank: 'MUFG', reportingType: 'End of day', balanceReported: '100%', cur: 'USD', bankStatement: '-146 019.21', bankLedger: '-146 019.21', flowLedger: '2 196 510.16' },
    { bank: 'SCB', company: 'KYRIBA-SG', reportingType: 'End of day', balanceReported: '100%', cur: 'USD', bankStatement: '15 581.77', bankLedger: '15 581.77', flowLedger: '934 876.33' },
    { bank: 'SEB', company: 'KYRIBA-SE', reportingType: 'End of day', balanceReported: '100%', cur: 'USD', bankStatement: '196 355.41', bankLedger: '196 355.41', flowLedger: '410 345.83' },
    { bank: 'SOCGEN', reportingType: 'End of day', balanceReported: '100%', cur: 'USD', bankStatement: '-223 494.94', bankLedger: '-223 494.94', flowLedger: '-25 463.73' },
    { bank: 'WESTPAC', company: 'KYRIBA-AU', reportingType: 'End of day', balanceReported: '100%', cur: 'USD', bankStatement: '-22 147.49', bankLedger: '-22 147.49', flowLedger: '118 592.16' },
  ];

const total = {
  bankStatement: '1 466 754.39',
  bankLedger: '1 466 754.39',
  flowLedger: '22 230 788.74',
};

export default function BankConnectivityCockpit() {
  return (
    <div className="bg-background text-foreground h-full flex flex-col">
      <div className="border-b">
        <div className="px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold">
              Bank connectivity cockpit - Bank connectivity cockpit
            </h2>
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
        <div className="px-6 pb-2">
            <Button variant="outline" size="sm" className="bg-white">
                Menu <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
        </div>
      </div>
      <div className="flex-grow overflow-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableHead className="w-12"><Checkbox /></TableHead>
              <TableHead>Bank</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Reporting type</TableHead>
              <TableHead>Bank account</TableHead>
              <TableHead>Account number</TableHead>
              <TableHead>Balance reported today</TableHead>
              <TableHead>Cur.</TableHead>
              <TableHead className="text-right">Bank statement balance</TableHead>
              <TableHead className="text-right">Bank ledger balance</TableHead>
              <TableHead className="text-right">Flow ledger balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} className="odd:bg-white even:bg-gray-50">
                <TableCell>
                  <div className="flex items-center">
                    <Play className="h-4 w-4 fill-current text-gray-500 mr-2" />
                    <Checkbox />
                  </div>
                </TableCell>
                <TableCell>{row.bank}</TableCell>
                <TableCell>{row.company || ''}</TableCell>
                <TableCell>{row.reportingType}</TableCell>
                <TableCell>{row.bankAccount || ''}</TableCell>
                <TableCell>{row.accountNumber || ''}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
                        <div className="h-2 bg-green-500 rounded-full" style={{ width: row.balanceReported }}></div>
                    </div>
                    {row.balanceReported}
                  </div>
                </TableCell>
                <TableCell>{row.cur}</TableCell>
                <TableCell className="text-right">{row.bankStatement}</TableCell>
                <TableCell className="text-right">{row.bankLedger}</TableCell>
                <TableCell className="text-right">{row.flowLedger}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <tfoot>
            <TableRow className="bg-blue-600 text-white hover:bg-blue-700">
                <TableCell colSpan={8}></TableCell>
                <TableCell className="text-right font-bold">{total.bankStatement}</TableCell>
                <TableCell className="text-right font-bold">{total.bankLedger}</TableCell>
                <TableCell className="text-right font-bold">{total.flowLedger}</TableCell>
            </TableRow>
          </tfoot>
        </Table>
      </div>
      <div className="flex justify-end p-4">
        <Button className="bg-pink-600 text-white hover:bg-pink-700">Ready for a Live Demo?</Button>
      </div>
    </div>
  );
}

    