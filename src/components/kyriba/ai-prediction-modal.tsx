'use client';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import AIPredictionChart from './charts/ai-prediction-chart';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { ScrollArea } from '../ui/scroll-area';

const comparisonData = [
    { date: '06/28/2024', val1: '20,600.25', val2: '20,600.25', val3: '', val4: '0%' },
    { date: '06/29/2024', val1: '-9,496.71', val2: '-151,774.96', val3: '142,278.24', val4: '-93.74%' },
    { date: '06/30/2024', val1: '62,192.67', val2: '62,192.67', val3: '0', val4: '0%' },
    { date: '07/01/2024', val1: '9,505.29', val2: '9,505.29', val3: '0', val4: '0%' },
    { date: '07/02/2024', val1: '-2,603.15', val2: '-2,603.15', val3: '0', val4: '0%' },
    { date: '07/03/2024', val1: '58,373.32', val2: '58,373.32', val3: '0', val4: '0%' },
    { date: '07/04/2024', val1: '6,205.85', val2: '6,205.85', val3: '0', val4: '0%' },
    { date: '07/05/2024', val1: '1,904.91', val2: '1,904.91', val3: '0', val4: '0%' },
    { date: '07/06/2024', val1: '58,447.69', val2: '58,447.69', val3: '0', val4: '0%' },
    { date: '07/07/2024', val1: '9,039.97', val2: '9,039.97', val3: '0', val4: '0%' },
];

export default function AIPredictionModal({ onClose }: { onClose: () => void }) {
    return (
        <div className="bg-white rounded-lg shadow-xl text-xs flex flex-col h-full">
            <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">AI Prediction</h2>
            </div>
            
            <ScrollArea className="flex-grow">
                <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                        <div className='flex flex-col'>
                            <label className='mb-1'>Periods to forecast:</label>
                            <Input defaultValue="365" />
                        </div>
                        <div className='flex flex-col'>
                            <label className='mb-1'>Forecast periodicity:</label>
                            <Select defaultValue="daily">
                                <SelectTrigger><SelectValue /></SelectTrigger>
                                <SelectContent><SelectItem value="daily">Daily</SelectItem></SelectContent>
                            </Select>
                        </div>
                        <div className='flex flex-col'>
                            <label className='mb-1'>Change factor:</label>
                            <Input defaultValue="15" />
                        </div>
                        <div className='flex flex-col'>
                            <label className='mb-1'>Change type:</label>
                            <Select defaultValue="additive">
                                <SelectTrigger><SelectValue /></SelectTrigger>
                                <SelectContent><SelectItem value="additive">Additive</SelectItem></SelectContent>
                            </Select>
                        </div>
                        <Button className="bg-gray-200 text-black hover:bg-gray-300">Apply</Button>
                    </div>

                    <div>
                        <AIPredictionChart />
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Comparison</h3>
                        <div className="overflow-x-auto border">
                            <Table className='whitespace-nowrap'>
                                <TableHeader>
                                    <TableRow className='bg-gray-100'>
                                        <TableHead className='py-1'>Date</TableHead>
                                        <TableHead className='text-right py-1'>Actuals</TableHead>
                                        <TableHead className='text-right py-1'>Existing Forecast</TableHead>
                                        <TableHead className='text-right py-1'>AI Prediction</TableHead>
                                        <TableHead className='text-right py-1'>% Variance</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {comparisonData.map((row, i) => (
                                        <TableRow key={i} className='odd:bg-white even:bg-gray-50'>
                                            <TableCell className='py-1'>{row.date}</TableCell>
                                            <TableCell className='text-right py-1'>{row.val1}</TableCell>
                                            <TableCell className='text-right py-1'>{row.val2}</TableCell>
                                            <TableCell className='text-right py-1'>{row.val3}</TableCell>
                                            <TableCell className={`text-right py-1 ${row.val4.startsWith('-') ? 'text-red-600' : ''}`}>{row.val4}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Forecast generation</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className='flex flex-col'>
                                <label className='mb-1'>Generation mode:</label>
                                <Select defaultValue="replace">
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="replace">Replace the existing forecast by the prediction</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className='flex flex-col'>
                                <label className='mb-1'>Scenario to use:</label>
                                <Select>
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                    <SelectContent />
                                </Select>
                            </div>
                            <div className='flex flex-col'>
                                <label className='mb-1'>Status:</label>
                                <Select>
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                    <SelectContent />
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollArea>

            <div className="flex justify-between items-center p-6 border-t mt-auto">
                <Button variant="outline">Backtest</Button>
                <div className='flex gap-2'>
                    <Button onClick={onClose} variant="outline" className="bg-black text-white">Generate forecasts</Button>
                    <Button onClick={onClose} variant="outline">Cancel</Button>
                </div>
            </div>
        </div>
    );
}
