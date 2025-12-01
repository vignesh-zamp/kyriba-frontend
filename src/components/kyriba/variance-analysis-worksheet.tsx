'use client';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Calendar as CalendarIcon, Star } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
import { Calendar } from '../ui/calendar';
import { cn } from '@/lib/utils';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { useState } from 'react';

const DatePicker = ({ date, setDate }: { date?: Date, setDate: (date?: Date) => void }) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[120px] justify-start text-left font-normal h-8 bg-white text-xs",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? date.toLocaleDateString() : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
};

export default function VarianceAnalysisWorksheet({ onClose, onApply }: { onClose: () => void; onApply: () => void; }) {
    const [startDate1, setStartDate1] = useState<Date | undefined>(new Date(2023, 6, 21));
    const [endDate1, setEndDate1] = useState<Date | undefined>(new Date(2023, 9, 20));
    const [startDate2, setStartDate2] = useState<Date | undefined>(new Date(2023, 6, 20));
    const [endDate2, setEndDate2] = useState<Date | undefined>(new Date(2023, 9, 20));

    const handleApply = () => {
        onClose();
        onApply();
    };


    return (
        <div className="bg-white rounded-lg shadow-xl text-xs flex flex-col h-full">
            <div className="p-4 border-b flex items-center gap-2">
                <Star className="h-4 w-4" />
                <h2 className="text-sm font-semibold">Variance analysis worksheet</h2>
            </div>

            <div className='flex-grow p-4'>
                <Tabs defaultValue="characteristics" className='flex gap-4'>
                    <TabsList className='flex-col h-auto bg-transparent p-0 border-r pr-4'>
                        <TabsTrigger value="characteristics" className="w-full justify-start data-[state=active]:bg-gray-100">Characteristics</TabsTrigger>
                        <TabsTrigger value="presentation" className="w-full justify-start data-[state=active]:bg-gray-100">Presentation</TabsTrigger>
                    </TabsList>

                    <TabsContent value="characteristics" className='mt-0 flex-grow'>
                        <div className='flex gap-4'>
                            <div className="flex flex-col space-y-4">
                                <div className="font-semibold">Data set 1</div>
                                <div className="font-semibold">Data set 2</div>
                                <div className="font-semibold">Participants</div>
                            </div>
                            <div className='flex-grow space-y-4'>
                                <div className="grid grid-cols-6 gap-2 items-center">
                                    <Select defaultValue="a-monthly"><SelectTrigger className='h-8 text-xs'><SelectValue/></SelectTrigger><SelectContent><SelectItem value="a-monthly">a-Monthly</SelectItem></SelectContent></Select>
                                    <Select defaultValue="july-2023-v1"><SelectTrigger className='h-8 text-xs'><SelectValue/></SelectTrigger><SelectContent><SelectItem value="july-2023-v1">July 2023 - V1</SelectItem></SelectContent></Select>
                                    <DatePicker date={startDate1} setDate={setStartDate1} />
                                    <DatePicker date={endDate1} setDate={setEndDate1} />
                                    <Select defaultValue="actual-intraday"><SelectTrigger className='h-8 text-xs'><SelectValue/></SelectTrigger><SelectContent><SelectItem value="actual-intraday">Actual,Intraday,Confirmed for...</SelectItem></SelectContent></Select>
                                    <Select defaultValue="working-capital"><SelectTrigger className='h-8 text-xs'><SelectValue/></SelectTrigger><SelectContent><SelectItem value="working-capital">Working Capital Strategy</SelectItem></SelectContent></Select>
                                </div>
                                <div className="grid grid-cols-6 gap-2 items-center">
                                    <Select defaultValue="a-monthly"><SelectTrigger className='h-8 text-xs'><SelectValue/></SelectTrigger><SelectContent><SelectItem value="a-monthly">a-Monthly</SelectItem></SelectContent></Select>
                                    <Select defaultValue="ytd-actuals"><SelectTrigger className='h-8 text-xs'><SelectValue/></SelectTrigger><SelectContent><SelectItem value="ytd-actuals">YTD Actuals</SelectItem></SelectContent></Select>
                                    <DatePicker date={startDate2} setDate={setStartDate2} />
                                    <DatePicker date={endDate2} setDate={setEndDate2} />
                                    <Select defaultValue="actual-intraday"><SelectTrigger className='h-8 text-xs'><SelectValue/></SelectTrigger><SelectContent><SelectItem value="actual-intraday">Actual,Intraday,Confirmed for...</SelectItem></SelectContent></Select>
                                    <Select defaultValue="base-plan"><SelectTrigger className='h-8 text-xs'><SelectValue/></SelectTrigger><SelectContent><SelectItem value="base-plan">Base plan</SelectItem></SelectContent></Select>
                                </div>
                                <div>
                                    <Label className='font-semibold'>Companies:</Label>
                                    <RadioGroup defaultValue="all" className="flex items-center gap-4 mt-2">
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="all" id="all" />
                                            <Label htmlFor="all">All</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="multiple" id="multiple" />
                                            <Label htmlFor="multiple">Multiple</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="except" id="except" />
                                            <Label htmlFor="except">Except</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="presentation" className='mt-0'>
                        <div>Presentation content goes here.</div>
                    </TabsContent>
                </Tabs>
            </div>

            <div className="flex justify-end items-center p-4 border-t mt-auto gap-2">
                <Button onClick={handleApply} variant="default">Apply</Button>
                <Button onClick={onClose} variant="outline">Cancel</Button>
            </div>
        </div>
    );
}