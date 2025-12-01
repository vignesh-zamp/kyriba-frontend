'use client';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChevronDown, Star } from 'lucide-react';

const data = [
    { category: 'TOTAL OPERATING FLOWS', isTotal: true, data1: -1820627, data2: 694320, varAmount: -2514947, varPercent: -362.22, data1_2: 2304819, data2_2: 1170100 },
    { category: 'Operating Inflows', indent: 1, isSubtotal: true, data1: 2933387, data2: 3952331, varAmount: -1018944, varPercent: -25.78, data1_2: 4796733, data2_2: 2941000 },
    { category: 'Customer Receipts (AR)', indent: 2, data1: 1135464, data2: 979447, varAmount: 156017, varPercent: 15.93, data1_2: 1117210, data2_2: 927000 },
    { category: 'Other / Dividends', indent: 2, data1: 699049, data2: 1481785, varAmount: -782736, varPercent: -52.82, data1_2: 1646928, data2_2: 1054000 },
    { category: 'Repayment of ESOP Loan', indent: 2, data1: 916568, data2: 1360174, varAmount: -443606, varPercent: -32.61, data1_2: 1919896, data2_2: 884500 },
    { category: 'VAT Collected', indent: 2, data1: 182306, data2: 130925, varAmount: 51381, varPercent: 39.24, data1_2: 112699, data2_2: 74300 },
    { category: 'Operating Outflows', indent: 1, isSubtotal: true, data1: -4754014, data2: -3258011, varAmount: -1496003, varPercent: -45.92, data1_2: -2491914, data2_2: -1770000 },
    { category: 'AP Invoices', indent: 2, data1: -1759272, data2: -1017439, varAmount: -741833, varPercent: -72.91, data1_2: -1150644, data2_2: -628000 },
    { category: 'Payroll', indent: 2, data1: -388342, data2: -504706, varAmount: 116364, varPercent: 23.06, data1_2: -584190, data2_2: -287000 },
    { category: 'Other Operating Expenses', indent: 2, data1: -1420880, data2: -606992, varAmount: -813888, varPercent: -134.09, data1_2: -418571, data2_2: -491000 },
    { category: 'Taxes', indent: 2, data1: -1185520, data2: -1128875, varAmount: -56645, varPercent: -5.02, data1_2: -338510, data2_2: -363500 },
    { category: 'Loan to ESOP', indent: 2, data1: 0, data2: 0, varAmount: 0, varPercent: null, data1_2: 0, data2_2: 0 },
    { category: 'TOTAL INVESTMENT FLOWS', isTotal: true, data1: 0, data2: -2186500, varAmount: 2186500, varPercent: 100, data1_2: 15000, data2_2: -1951000 },
    { category: 'Investment Inflows', indent: 1, isSubtotal: true, data1: 0, data2: 0, varAmount: 0, varPercent: null, data1_2: 15000, data2_2: 85000 },
    { category: 'Capital Increase', indent: 2, data1: 0, data2: 0, varAmount: 0, varPercent: null, data1_2: 15000, data2_2: 77500 },
    { category: 'Sales of Fixed Assets', indent: 2, data1: 0, data2: 0, varAmount: 0, varPercent: null, data1_2: 0, data2_2: 7200 },
    { category: 'Investment Outflows', indent: 1, isSubtotal: true, data1: 0, data2: -2186500, varAmount: 2186500, varPercent: 100, data1_2: 0, data2_2: -2036000 },
    { category: 'Other Investment Expenses', indent: 2, data1: 0, data2: -2166000, varAmount: 2166000, varPercent: 100, data1_2: 0, data2_2: -2008000 },
    { category: 'Capital Expenditures', indent: 2, data1: 0, data2: -20500, varAmount: 20500, varPercent: 100, data1_2: 0, data2_2: -28000 },
    { category: 'TOTAL FINANCIAL FLOWS', isTotal: true, data1: -1218172, data2: -760624, varAmount: -457548, varPercent: -60.15, data1_2: -577914, data2_2: -609000 },
    { category: 'Financial Inflows', indent: 1, isSubtotal: true, data1: 0, data2: 0, varAmount: 0, varPercent: null, data1_2: 112500, data2_2: 54000 },
    { category: 'Interest Income', indent: 2, data1: 0, data2: 0, varAmount: 0, varPercent: null, data1_2: 0, data2_2: 39000 },
    { category: 'Debt Principal Collection', indent: 2, data1: 0, data2: 0, varAmount: 0, varPercent: null, data1_2: 112500, data2_2: 15000 },
    { category: 'Financial Outflows', indent: 1, isSubtotal: true, data1: -1218172, data2: -760624, varAmount: -457548, varPercent: -60.15, data1_2: -690414, data2_2: -664000 },
    { category: 'Debt Interest Payments', indent: 2, data1: -456182, data2: -354652, varAmount: -101530, varPercent: -28.63, data1_2: -203174, data2_2: -252000 },
    { category: 'Debt Principal Repayments', indent: 2, data1: -481441, data2: -142120, varAmount: -339321, varPercent: -238.76, data1_2: -349525, data2_2: -176000 },
    { category: 'Dividends Paid', indent: 2, data1: -280549, data2: -263852, varAmount: -16697, varPercent: -6.33, data1_2: -137715, data2_2: -235500 },
    { category: 'TOTAL AVAILABLE FUNDING', isTotal: true, data1: 115000, data2: 0, varAmount: 115000, varPercent: null, data1_2: 85000, data2_2: 0 },
    { category: 'Available Overdraft', indent: 1, isSubtotal: true, data1: 115000, data2: 0, varAmount: 115000, varPercent: null, data1_2: 85000, data2_2: 0 },
];

const formatNumber = (num: number) => num.toLocaleString('en-US');

const VarAmountChart = ({ value, min, max }: { value: number, min: number, max: number }) => {
    const range = max - min;
    const position = ((value - min) / range) * 100;
    const isPositive = value >= 0;
  
    return (
      <div className="w-full h-4 bg-gray-200 relative">
        <div className="absolute top-0 bottom-0 w-px bg-gray-400" style={{ left: `${((0 - min) / range) * 100}%` }}></div>
        <div
          className={`absolute top-0 bottom-0 h-4 ${isPositive ? 'bg-green-500' : 'bg-red-500'}`}
          style={{
            left: `${isPositive ? ((0 - min) / range) * 100 : position}%`,
            width: `${Math.abs(position - ((0 - min) / range) * 100)}%`,
          }}
        />
      </div>
    );
};

const getVarIndicatorColor = (varPercent: number | null) => {
    if (varPercent === null) return 'bg-gray-200';
    if (varPercent < -50) return 'bg-red-500';
    if (varPercent < 0) return 'bg-orange-500';
    if (varPercent < 50) return 'bg-green-400';
    return 'bg-green-600';
};
  

export default function VarianceAnalysisResult({ onBack }: { onBack: () => void }) {
    const varAmounts = data.map(d => d.varAmount);
    const minVar = Math.min(...varAmounts);
    const maxVar = Math.max(...varAmounts);

    return (
        <div className="bg-white rounded-lg shadow-xl text-xs flex flex-col h-full">
            <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    <h2 className="text-sm font-semibold">Variance analysis worksheet</h2>
                </div>
                <Button onClick={onBack} variant="outline">Back</Button>
            </div>

            <div className="flex-grow overflow-auto">
                <Table className="w-full whitespace-nowrap">
                    <TableHeader className="sticky top-0 bg-gray-100 z-10">
                        <TableRow>
                            <TableHead className='w-[250px]'>
                                <div className='text-right'>Aug 2023</div>
                                <div>Summary currency: USD</div>
                            </TableHead>
                            <TableHead>Comments</TableHead>
                            <TableHead className='text-right'>Data set 1</TableHead>
                            <TableHead className='text-right'>Data set 2</TableHead>
                            <TableHead className='text-right'>Var. Amount</TableHead>
                            <TableHead className='w-[100px]'>Var. Amount chart</TableHead>
                            <TableHead className='text-right'>Var. %</TableHead>
                            <TableHead className='w-[100px]'>% Var indicator</TableHead>
                            <TableHead>Comments</TableHead>
                            <TableHead className='text-right'>Data set 1</TableHead>
                            <TableHead className='text-right'>Data set 2</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((row, i) => (
                            <TableRow key={i} className={row.isTotal ? 'bg-blue-800 text-white' : row.isSubtotal ? 'bg-blue-600 text-white' : 'odd:bg-white even:bg-gray-50'}>
                                <TableCell className="font-medium" style={{ paddingLeft: `${1 + (row.indent || 0) * 1.5}rem`}}>
                                    <div className='flex items-center gap-2'>
                                        {(row.isTotal || row.isSubtotal) && <ChevronDown className='h-4 w-4'/>}
                                        {row.category}
                                    </div>
                                </TableCell>
                                <TableCell></TableCell>
                                <TableCell className='text-right'>{formatNumber(row.data1)}</TableCell>
                                <TableCell className='text-right'>{formatNumber(row.data2)}</TableCell>
                                <TableCell className='text-right'>{formatNumber(row.varAmount)}</TableCell>
                                <TableCell>
                                    <VarAmountChart value={row.varAmount} min={minVar} max={maxVar} />
                                </TableCell>
                                <TableCell className='text-right'>{row.varPercent !== null ? `${row.varPercent.toFixed(2)}%` : 'N/A'}</TableCell>
                                <TableCell className='p-0'>
                                    <div className={cn("h-full w-full", getVarIndicatorColor(row.varPercent))}></div>
                                </TableCell>
                                <TableCell></TableCell>
                                <TableCell className='text-right'>{formatNumber(row.data1_2)}</TableCell>
                                <TableCell className='text-right'>{formatNumber(row.data2_2)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}