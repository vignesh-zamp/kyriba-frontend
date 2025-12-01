import { format, eachDayOfInterval, startOfMonth, lastDayOfMonth } from 'date-fns';

const accountTemplates = [
    { type: 'group', account: 'AU-AUD-HSBC', description: 'AU AUD Bank Account at HSBC', baseValue: 0 },
    { type: 'item', account: 'KYRIBA-AU', description: 'Kyriba Technology Inc. Australia (AUS)', parent: 'AU-AUD-HSBC', color: 'bg-blue-900', textColor: 'text-white', baseValue: 0 },
    { type: 'group', account: 'CAN-RBCA-CAD', description: 'CAN account at RBC-TOR in CAD', baseValue: 538000 },
    { type: 'item', account: 'CAN-RBCB-CAD', description: 'CAN Account at RBC-TOR in CAD (Bank Reporting)', parent: 'CAN-RBCA-CAD', color: 'bg-pink-200', baseValue: -35000 },
    { type: 'item', account: 'KYRIBA-CA', description: 'Kyriba Ltd. Canada (CAN)', parent: 'CAN-RBCA-CAD', color: 'bg-blue-900', textColor: 'text-white', baseValue: 503000 },
    { type: 'group', account: 'DDA-A', description: 'DDA Account A', baseValue: 500 },
    { type: 'group', account: 'DDA-B', description: 'DDA Account B', baseValue: 450 },
    { type: 'group', account: 'HQ-CITI-AUD', description: 'HQ AUD Account at CITI (BRP)', color: 'bg-pink-200', baseValue: -47 },
    { type: 'group', account: 'HQ-CITI-CAD', description: 'HA Account with Citi CAD (BRP)', color: 'bg-pink-200', baseValue: -5 },
    { type: 'group', account: 'HQ-CITI-EUR', description: 'HQ EUR Account at CITI (BRP)', color: 'bg-pink-200', baseValue: -55 },
    { type: 'group', account: 'HQ-CITI-JPY', description: 'HQ JPY Account at CITI (BRP)', color: 'bg-green-200', baseValue: 35590 },
    { type: 'group', account: 'HQ-CITI-USD', description: 'HQ USD Account at Citi (BRP)', color: 'bg-pink-200', baseValue: -354 },
    { type: 'group', account: 'HQ1-BOFA-USD', description: 'HQ1 account at BOFA in USD', expandable: true, color: 'bg-pink-200', baseValue: -34438 },
    { type: 'group', account: 'HQI-CITI-MXN', description: 'HQ1 account at CITI-NYC in MXN', color: 'bg-green-200', baseValue: 127922 },
    { type: 'group', account: 'HQI-CITI-PLN', description: 'HQ1 Account at CITI-PL in PLN', color: 'bg-pink-200', baseValue: -4 },
    { type: 'group', account: 'HQI-CITIBE-E', description: 'HQ1 Account at CITI-BE in EUR', color: 'bg-pink-200', baseValue: -21674 },
];

export function generateCashPositionData(date: Date) {
    const startDate = startOfMonth(date);
    const endDate = lastDayOfMonth(date);
    const days = eachDayOfInterval({ start: startDate, end: endDate });

    const accounts = accountTemplates.map(template => {
        const dailyValues: { [key: string]: number } = {};
        let currentValue = template.baseValue;
        days.forEach(day => {
            const dateKey = format(day, 'yyyy-MM-dd');
            // Fluctuate the value by a small random percentage
            const fluctuation = currentValue * (Math.random() - 0.5) * 0.01; // +/- 0.5%
            currentValue += fluctuation;
            dailyValues[dateKey] = parseFloat(currentValue.toFixed(2));
        });
        return {
            ...template,
            values: dailyValues,
        };
    });

    const finalBalance: { [key: string]: number } = {};
    let currentBalance = 25200000;
    days.forEach(day => {
        const dateKey = format(day, 'yyyy-MM-dd');
        // Fluctuate by a random amount
        const fluctuation = Math.random() * 40000 - 10000; // -10k to +30k
        currentBalance += fluctuation;
        finalBalance[dateKey] = parseFloat(currentBalance.toFixed(2));
    });

    return { accounts, finalBalance };
}

    