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
  Download,
  Upload,
  Sigma,
  Play,
  Star,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import LiquidityPlanChart from './charts/liquidity-plan-chart';
import React, { useState, useMemo, useEffect } from 'react';
import { liquidityPlanData as staticData } from '@/lib/liquidity-plan-data';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import AIPredictionModal from './ai-prediction-modal';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';

const initialVisibleLines: { [key: string]: boolean } = {
  'Final balance': true,
  LIQUIDITY: true,
  TARGET: true,
  'TOTAL AVAILABLE FUNDING': false,
  'TOTAL FINANCIAL FLOWS': false,
  'TOTAL INVESTMENT FLOWS': false,
  'TOTAL OPERATING FLOWS': false,
  'Payroll': false,
  'Taxes': false,
  'VAT Collected': false,
};

const editableRows = ['Payroll', 'Taxes', 'VAT Collected'];

export default function LiquidityPlan() {
  const [visibleLines, setVisibleLines] = useState(initialVisibleLines);
  const [isAIPredictionOpen, setIsAIPredictionOpen] = useState(false);
  const [tableData, setTableData] = useState(staticData.tableRows);
  const [editingCell, setEditingCell] = useState<{ rowIndex: number, month: string } | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [dirtyRows, setDirtyRows] = useState<{ [key: number]: boolean }>({});

  const series = useMemo(() => {
    const newSeries: { [key: string]: { [key: string]: number } } = {};
    tableData.forEach(row => {
        if (row.label in staticData.series || editableRows.includes(row.label)) {
            newSeries[row.label] = row.values;
        }
    });
    // Fill missing series from static data to avoid crashes if a row is not in tableData
    Object.keys(staticData.series).forEach(key => {
        if (!newSeries[key]) {
            newSeries[key] = staticData.series[key as keyof typeof staticData.series];
        }
    })
    return newSeries;
  }, [tableData]);

  const chartData = useMemo(() => {
    return staticData.months.map(month => {
      const monthData: { [key: string]: string | number } = { name: month };
      Object.keys(visibleLines).forEach(line => {
        if (visibleLines[line]) {
          monthData[line] = series[line as keyof typeof series]?.[month] || 0;
        }
      });
      return monthData;
    });
  }, [visibleLines, series]);

  const handleCheckboxChange = (line: string, checked: boolean) => {
    setVisibleLines(prev => ({ ...prev, [line]: checked }));
  };

  const handleCellClick = (rowIndex: number, month: string, currentValue: number) => {
    if (editableRows.includes(tableData[rowIndex].label)) {
        setEditingCell({ rowIndex, month });
        setInputValue(currentValue.toString());
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    if (editingCell) {
        const { rowIndex, month } = editingCell;
        const newValue = parseFloat(inputValue);
        if (!isNaN(newValue) && tableData[rowIndex].values[month] !== newValue) {
            const newData = [...tableData];
            newData[rowIndex].values[month] = newValue;
            setTableData(newData);
            setDirtyRows(prev => ({ ...prev, [rowIndex]: true }));
        }
        setEditingCell(null);
    }
  };
  
  const handleApplyChanges = (rowIndex: number) => {
    // In a real app, you might persist this change
    setDirtyRows(prev => ({ ...prev, [rowIndex]: false }));
  };

  return (
    <div className="bg-background text-foreground h-full flex flex-col text-xs">
      <div className="border-b">
        <div className="px-6 py-2 flex justify-between items-center">
          <div className='flex items-center gap-2'>
            <Star className="h-4 w-4" />
            <h2 className="text-sm font-semibold">
              Liquidity plan
            </h2>
            <Button size="sm" className="bg-black text-white hover:bg-gray-800" onClick={() => setIsAIPredictionOpen(true)}>AI Prediction</Button>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Download className="h-4 w-4 cursor-pointer" />
            <Upload className="h-4 w-4 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="px-6 py-1">
        <LiquidityPlanChart data={chartData} visibleLines={visibleLines} />
      </div>
      <div className="px-6 pb-2 flex items-end gap-2 text-xs border-b">
            <div className="flex flex-col">
                <label className='mb-1'>Periodicity:</label>
                <Select defaultValue="monthly">
                    <SelectTrigger className="h-8 w-[100px] bg-white"><SelectValue/></SelectTrigger>
                    <SelectContent><SelectItem value="monthly">Monthly</SelectItem></SelectContent>
                </Select>
            </div>
            <div className="flex flex-col">
                <label className='mb-1'>Group 1 by:</label>
                <Select defaultValue="participant">
                    <SelectTrigger className="h-8 w-[100px] bg-white"><SelectValue/></SelectTrigger>
                    <SelectContent><SelectItem value="participant">Participant</SelectItem></SelectContent>
                </Select>
            </div>
            <div className="flex flex-col">
                <label className='mb-1'>Group 2 by:</label>
                <Select defaultValue="currency">
                    <SelectTrigger className="h-8 w-[100px] bg-white"><SelectValue/></SelectTrigger>
                    <SelectContent><SelectItem value="currency">Currency</SelectItem></SelectContent>
                </Select>
            </div>
            <div className="flex flex-col">
                <label className='mb-1'>Group 3 by:</label>
                <Select defaultValue="budget-code">
                    <SelectTrigger className="h-8 w-[100px] bg-white"><SelectValue/></SelectTrigger>
                    <SelectContent><SelectItem value="budget-code">Budget code</SelectItem></SelectContent>
                </Select>
            </div>
            <div className="flex flex-col">
                <label className='mb-1'>Conversion currency:</label>
                <Select defaultValue="flow-currency">
                    <SelectTrigger className="h-8 w-[100px] bg-white"><SelectValue/></SelectTrigger>
                    <SelectContent><SelectItem value="flow-currency">Flow currency</SelectItem></SelectContent>
                </Select>
            </div>
            <div className="flex flex-col">
                <label className='mb-1'>Summary cur:</label>
                <Select defaultValue="usd">
                    <SelectTrigger className="h-8 w-[70px] bg-white"><SelectValue/></SelectTrigger>
                    <SelectContent><SelectItem value="usd">USD</SelectItem></SelectContent>
                </Select>
            </div>
            <div className="flex flex-col">
                <label className='mb-1'>Entry mode:</label>
                <Select defaultValue="fast">
                    <SelectTrigger className="h-8 w-[80px] bg-white"><SelectValue/></SelectTrigger>
                    <SelectContent><SelectItem value="fast">Fast</SelectItem></SelectContent>
                </Select>
            </div>
            <div className="flex flex-col">
                <label className='mb-1'>Status to include:</label>
                <Select defaultValue="intraday">
                    <SelectTrigger className="h-8 w-[150px] bg-white"><SelectValue/></SelectTrigger>
                    <SelectContent><SelectItem value="intraday">Intraday,Confirmed for...</SelectItem></SelectContent>
                </Select>
            </div>
            <div className="flex flex-col">
                <label className='mb-1'>Top section:</label>
                <Select defaultValue="summary-chart">
                    <SelectTrigger className="h-8 w-[120px] bg-white"><SelectValue/></SelectTrigger>
                    <SelectContent><SelectItem value="summary-chart">Summary chart</SelectItem></SelectContent>
                </Select>
            </div>
            <div className="flex flex-col">
                <label className='mb-1'>Scenarios:</label>
                <Select defaultValue="best-case">
                    <SelectTrigger className="h-8 w-[100px] bg-white"><SelectValue/></SelectTrigger>
                    <SelectContent><SelectItem value="best-case">Best Case</SelectItem></SelectContent>
                </Select>
            </div>
            <Button size="sm" className='bg-gray-200 text-black hover:bg-gray-300'>Apply</Button>
      </div>
      <div className="px-6 py-1 flex items-center justify-end gap-4 flex-wrap">
        {Object.keys(initialVisibleLines).map(line => (
          <div key={line} className="flex items-center gap-1">
            <Checkbox
              id={line}
              checked={visibleLines[line]}
              onCheckedChange={(checked) => handleCheckboxChange(line, !!checked)}
            />
            <label htmlFor={line} className="text-xs">{line}</label>
          </div>
        ))}
      </div>
      <div className="flex-grow overflow-auto px-6">
        <Table className="w-full whitespace-nowrap">
          <TableHeader className="sticky top-0 z-10">
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableHead className="py-2 text-xs w-[250px]"></TableHead>
              <TableHead className="py-2 text-xs w-[100px]"></TableHead>
              {staticData.months.map(month => <TableHead key={month} className="text-right py-2">{month}</TableHead>)}
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index} className={row.bgColor || 'odd:bg-white even:bg-gray-50'}>
                <TableCell className={`py-1 ${row.textColor || ''}`}>
                  <div className="flex items-center gap-2" style={{ paddingLeft: `${row.indent || 0}rem`}}>
                    {row.isGroup && <Play className="h-3 w-3 fill-current text-gray-500" />}
                    {row.isSigma && <Sigma className="h-3 w-3" />}
                    <span className={`${row.isBold ? 'font-bold' : ''}`}>{row.label}</span>
                    {dirtyRows[index] && <Button size="sm" className="h-6 text-xs ml-2" onClick={() => handleApplyChanges(index)}>Apply</Button>}
                  </div>
                </TableCell>
                <TableCell className={`py-1 text-center ${row.textColor || ''}`}>
                    {row.showLoad && <Button variant='outline' size='sm' className='h-6 text-xs bg-gray-200'>Load</Button>}
                </TableCell>
                {staticData.months.map(month => {
                    const isEditing = editingCell?.rowIndex === index && editingCell?.month === month;
                    const isEditable = editableRows.includes(row.label);
                    const currentValue = row.values[month] || 0;
                    
                    return (
                        <TableCell 
                            key={month} 
                            className={`text-right py-1 ${row.textColor || ''} ${row.isBold ? 'font-bold' : ''} ${isEditable ? 'cursor-pointer hover:bg-yellow-100' : ''}`}
                            onClick={() => handleCellClick(index, month, currentValue)}
                        >
                            {isEditing ? (
                                <Input
                                    type="text"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                                    onKeyDown={(e) => e.key === 'Enter' && handleInputBlur()}
                                    autoFocus
                                    className="h-6 text-right text-xs"
                                />
                            ) : (
                                currentValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                            )}
                        </TableCell>
                    );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-end p-4 mt-auto">
        <Button className="bg-pink-600 text-white hover:bg-pink-700">Ready for a Live Demo?</Button>
      </div>

      <Dialog open={isAIPredictionOpen} onOpenChange={setIsAIPredictionOpen}>
        <DialogContent className="max-w-4xl h-[95vh] p-0 flex flex-col">
            <DialogHeader className="p-0">
              <DialogTitle className="sr-only">AI Prediction</DialogTitle>
            </DialogHeader>
            <AIPredictionModal onClose={() => setIsAIPredictionOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
