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
  MoreVertical,
  Play,
  Printer,
  Info,
  Sigma,
  Star,
  Calendar,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import CashPositionChart from './charts/cash-position-chart';
import React, { useState, useMemo } from 'react';
import { generateCashPositionData } from '@/lib/kyriba-data-generator';
import { format, eachDayOfInterval, lastDayOfMonth, startOfMonth, parse, addDays, eachWeekOfInterval, endOfWeek, startOfWeek } from 'date-fns';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const fullMonthData = generateCashPositionData(new Date(2024, 2, 1));
const march2024 = new Date(2024, 2, 15);
const startDateOfMonth = startOfMonth(march2024);
const endDateOfMonth = lastDayOfMonth(march2024);

export default function CashPositionWorksheet() {
  const [startDate, setStartDate] = useState<Date>(new Date(2024, 2, 5));
  const [endDate, setEndDate] = useState<Date>(new Date(2024, 2, 12));
  const [step, setStep] = useState<'Day' | 'Week'>('Day');

  const { dates, tableData, finalBalance, chartData } = useMemo(() => {
    const validStartDate = startDate > endDateOfMonth ? endDateOfMonth : startDate;
    const validEndDate = endDate < startDateOfMonth ? startDateOfMonth : endDate;

    let dateArray: Date[] = [];
    if (step === 'Day') {
      dateArray = eachDayOfInterval({ start: validStartDate, end: validEndDate });
    } else { // Week
      const fridays: Date[] = [];
      const interval = { start: validStartDate, end: validEndDate };
      const weeks = eachWeekOfInterval(interval, { weekStartsOn: 1 /* Monday */ });
      
      weeks.forEach(weekStart => {
        const friday = addDays(weekStart, 4);
        if (friday >= validStartDate && friday <= validEndDate) {
          fridays.push(friday);
        }
      });
      dateArray = fridays;
    }


    const dateStrings = dateArray.map(d => format(d, 'yyyy-MM-dd'));

    const filteredTableData = fullMonthData.accounts.map(account => {
      const values = dateStrings.map(dateStr => account.values[dateStr] || 0);
      const total = values.reduce((acc, val) => acc + val, 0);
      return { ...account, values, total };
    });

    const filteredFinalBalance = dateStrings.map(dateStr => fullMonthData.finalBalance[dateStr] || 0);

    const formattedDates = dateArray.map(d => format(d, 'EEE MM/dd/yyyy'));

    const chartData = dateArray.map((date, index) => ({
      name: format(date, 'd. MMM'),
      'Initial/Final': filteredFinalBalance[index],
    }));

    return { dates: formattedDates, tableData: filteredTableData, finalBalance: filteredFinalBalance, chartData };
  }, [startDate, endDate, step]);
  

  const handleApply = () => {
    // This function is to re-trigger memoization if inputs were statefully complex.
    // For now, simple state change is enough.
  };

  const handleDateChange = (setter: React.Dispatch<React.SetStateAction<Date>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
        const parsedDate = parse(e.target.value, 'MM/dd/yyyy', new Date());
        if (!isNaN(parsedDate.getTime())) {
            setter(parsedDate);
        }
    } catch (error) {
        console.error("Invalid date format");
    }
  }


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
                    <Input 
                        value={format(startDate, 'MM/dd/yyyy')}
                        onChange={handleDateChange(setStartDate)}
                        className="border-none h-8" 
                    />
                    <Calendar className="h-4 w-4 mr-2" />
                </div>
            </div>
            <div className="flex flex-col">
                <label>End:</label>
                <div className="flex items-center border rounded-md">
                    <Input 
                        value={format(endDate, 'MM/dd/yyyy')}
                        onChange={handleDateChange(setEndDate)}
                        className="border-none h-8" 
                    />
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
                <Select value={step} onValueChange={(value: 'Day' | 'Week') => setStep(value)}>
                    <SelectTrigger className="h-8 w-[80px]">
                        <SelectValue placeholder="Step" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Day">Day</SelectItem>
                        <SelectItem value="Week">Week</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Button size="sm" onClick={handleApply}>Apply</Button>
        </div>
      </div>
      <div className="px-6 py-4">
        <CashPositionChart data={chartData} />
      </div>
      <div className="flex-grow overflow-auto px-6">
        <Table className="w-full whitespace-nowrap">
          <TableHeader>
            <TableRow className="bg-gray-100 hover:bg-gray-100 sticky top-0">
              <TableHead className="py-2 text-xs w-1/4">{format(startDate, 'MM/dd/yyyy')} - {format(endDate, 'MM/dd/yyyy')}</TableHead>
              <TableHead className="py-2 text-xs w-1/4">Account description</TableHead>
              {dates.map(date => <TableHead key={date} className="text-right py-2">{date}</TableHead>)}
              <TableHead className="text-right py-2">Tot.</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row, index) => (
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
                <TableCell className={`text-right py-1 font-bold ${row.textColor || ''}`}>
                  {row.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </TableCell>
              </TableRow>
            ))}
            <TableRow className="bg-blue-600 text-white hover:bg-blue-700">
                <TableCell colSpan={2} className="py-1 font-bold">Final Balance</TableCell>
                {finalBalance.map((value, i) => (
                    <TableCell key={i} className="text-right py-1 font-bold">
                        {value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </TableCell>
                ))}
                <TableCell className="text-right py-1 font-bold">
                  {finalBalance.reduce((a, b) => a + b, 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </TableCell>
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

    