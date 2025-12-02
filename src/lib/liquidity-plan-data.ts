const months = ['Dec 2023', 'Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024', 'Jul 2024', 'Aug 2024', 'Sep 2024', 'Oct 2024', 'Nov 2024', 'Dec 2024'];

const generateRandomData = (base: number, length: number) => {
    const data: number[] = [];
    let current = base;
    for (let i = 0; i < length; i++) {
        current += current * (Math.random() - 0.5) * 0.4; // Fluctuate by +/- 20%
        data.push(Math.round(current));
    }
    return data;
};

const zipObject = (keys: string[], values: number[]) => {
    return keys.reduce((acc, key, i) => {
        acc[key] = values[i];
        return acc;
    }, {} as { [key: string]: number });
};

const seriesData = {
    "Final balance": [-3095854, -5519143, -3088736, -1661462, -13225, 3173570, 1419322, 2761393, 2200000, 1800000, 2500000, 3000000, 2800000],
    "CASH MOVEMENT": generateRandomData(500000, 13),
    "LIQUIDITY": [-3095854, -5519143, -3088736, -1661462, -13225, 3173570, 1419322, 2761393, 2200000, 1800000, 2500000, 3000000, 2800000].map(v => v * 0.8 + 1000000),
    "Surplus / Defecit": generateRandomData(200000, 13),
    "TARGET": Array(13).fill(0),
    "TOTAL AVAILABLE FUNDING": generateRandomData(4000000, 13),
    "TOTAL FINANCIAL FLOWS": generateRandomData(100000, 13),
    "TOTAL INVESTMENT FLOWS": [0, 0, 0, 100000, 90000, 500000, -2000000, -100000, -3000000, -1500000, -500000, 1000000, 2000000],
    "TOTAL OPERATING FLOWS": [-2176179, -1545073, 3067542, 1288644, 1654847, 3242855, 624180, 1873808, 1962709, 2100000, 1800000, 2200000, 2500000],
};


export const liquidityPlanData = {
    months,
    series: {
        "Final balance": zipObject(months, seriesData["Final balance"]),
        "CASH MOVEMENT": zipObject(months, seriesData["CASH MOVEMENT"]),
        "LIQUIDITY": zipObject(months, seriesData["LIQUIDITY"]),
        "Surplus / Defecit": zipObject(months, seriesData["Surplus / Defecit"]),
        "TARGET": zipObject(months, seriesData["TARGET"]),
        "TOTAL AVAILABLE FUNDING": zipObject(months, seriesData["TOTAL AVAILABLE FUNDING"]),
        "TOTAL FINANCIAL FLOWS": zipObject(months, seriesData["TOTAL FINANCIAL FLOWS"]),
        "TOTAL INVESTMENT FLOWS": zipObject(months, seriesData["TOTAL INVESTMENT FLOWS"]),
        "TOTAL OPERATING FLOWS": zipObject(months, seriesData["TOTAL OPERATING FLOWS"]),
    },
    tableRows: [
        { 
            label: "Initial balance", 
            values: zipObject(months, [0, -3095854, -5519143, -3088736, -1661462, -13225, 3173570, 1419322, 2761393, 2300000, 1900000, 2600000, 3100000]), 
            showLoad: true 
        },
        { 
            label: "Final balance", 
            values: zipObject(months, seriesData["Final balance"]), 
            isGroup: true, 
            isBold: true, 
            bgColor: 'bg-blue-100' 
        },
        { 
            label: "CASH MOVEMENT", 
            values: zipObject(months, seriesData["CASH MOVEMENT"]), 
            isGroup: true, 
            isBold: true, 
            bgColor: 'bg-blue-100' 
        },
        {
            label: 'TOTAL OPERATING FLOWS',
            values: zipObject(months, seriesData["TOTAL OPERATING FLOWS"]),
            isSigma: true, isBold: true, bgColor: 'bg-blue-800', textColor: 'text-white'
        },
        { label: 'Operating Inflows', values: zipObject(months, [1403669, 1711913, 4965897, 4160413, 4289654, 6203582, 3276281, 4608330, 3962108, 4100000, 3900000, 4300000, 4500000]), isSigma: true, indent: 1, isBold: true, bgColor: 'bg-blue-600', textColor: 'text-white' },
        { label: 'Customer Receipts (AR)', values: zipObject(months, [58237, 1056438, 830000, 1085838, 791397, 1233019, 806241, 1022679, 1224309, 1300000, 1100000, 1400000, 1500000]), showLoad: true, indent: 2 },
        { label: 'Other / Dividends', values: zipObject(months, [40000, 174002, 1837156, 1121685, 2055498, 2422557, 491553, 2150205, 1120088, 1200000, 1000000, 1300000, 1400000]), showLoad: true, indent: 2 },
        { label: 'Repayment of ESOP Loan', values: zipObject(months, [1184033, 316419, 2158707, 1935988, 1372032, 2322357, 1824627, 1394325, 1446824, 1500000, 1300000, 1600000, 1700000]), showLoad: true, indent: 2 },
        { label: 'VAT Collected', values: zipObject(months, [121399, 165054, 140034, 16902, 70727, 225649, 153860, 41121, 170887, 100000, 50000, 0, -100000]), showLoad: true, indent: 2 },
        { label: 'Operating Outflows', values: zipObject(months, [-3579848, -3256986, -1898355, -2871769, -2634807, -2960727, -2652101, -2734522, -1999399, -2000000, -2100000, -2100000, -2000000]), isSigma: true, indent: 1, isBold: true, bgColor: 'bg-blue-600', textColor: 'text-white' },
        { label: 'AP Invoices', values: zipObject(months, [-1907726, -1759272, -1150644, -1890191, -497537, -1287531, -519105, -1214425, -1006481, -1100000, -1200000, -1100000, -1000000]), showLoad: true, indent: 2 },
        { label: 'Payroll', values: zipObject(months, [-276348, -105424, -348535, -320802, -755037, -302830, -668403, -306693, -259162, -300000, -300000, -300000, -300000]), showLoad: true, indent: 2 },
        { label: 'Other Operating Expenses', values: zipObject(months, [-751673, -768464, -190816, -504760, -538507, -509484, -924177, -587589, -190037, -200000, -200000, -300000, -300000]), showLoad: true, indent: 2 },
        { label: 'Taxes', values: zipObject(months, [-644101, -623826, -208360, -156016, -843726, -860882, -540416, -625815, -543719, -400000, -400000, -400000, -400000]), showLoad: true, indent: 2 },
        { label: 'Loan to ESOP', values: zipObject(months, [0,0,0,0,0,0,0,0,0,0,0,0,0]), showLoad: true, indent: 2 },
        {
            label: 'TOTAL INVESTMENT FLOWS',
            values: zipObject(months, seriesData["TOTAL INVESTMENT FLOWS"]),
            isSigma: true, isBold: true, bgColor: 'bg-blue-800', textColor: 'text-white'
        },
        { label: 'Investment Inflows', values: zipObject(months, [0, 0, 0, 100000, 90000, 500000, 0, 0, 0, 0, 500000, 1000000, 2000000]), isSigma: true, indent: 1, isBold: true, bgColor: 'bg-blue-600', textColor: 'text-white' },
        { label: 'Capital Increase', values: zipObject(months, [0, 0, 0, 100000, 0, 500000, 0, 0, 0, 0, 500000, 1000000, 2000000]), showLoad: true, indent: 2 },
        { label: 'Sales of Fixed Assets', values: zipObject(months, [0, 0, 0, 0, 90000, 0, 0, 0, 0, 0, 0, 0, 0]), showLoad: true, indent: 2 },
        { label: 'Investment Outflows', values: zipObject(months, [0, 0, 0, 0, 0, 0, -2000000, -100000, -3000000, -1500000, -1000000, 0, 0]), isSigma: true, indent: 1, isBold: true, bgColor: 'bg-blue-600', textColor: 'text-white' },
        { 
            label: "LIQUIDITY", 
            values: zipObject(months, seriesData["LIQUIDITY"]), 
            isGroup: true, 
            isBold: true, 
            bgColor: 'bg-blue-100' 
        },
        { 
            label: "Surplus / Defecit", 
            values: zipObject(months, seriesData["Surplus / Defecit"]), 
            isGroup: true, 
            isBold: true, 
            bgColor: 'bg-blue-100' 
        },
        { 
            label: "TARGET", 
            values: zipObject(months, seriesData["TARGET"]), 
            isGroup: true, 
            isBold: true, 
            bgColor: 'bg-blue-100' 
        },
        { 
            label: "TOTAL AVAILABLE FUNDING", 
            values: zipObject(months, seriesData["TOTAL AVAILABLE FUNDING"]), 
            isGroup: true, 
            isBold: true, 
            bgColor: 'bg-blue-100' 
        },
        { 
            label: "TOTAL FINANCIAL FLOWS", 
            values: zipObject(months, seriesData["TOTAL FINANCIAL FLOWS"]), 
            isGroup: true, 
            isBold: true, 
            bgColor: 'bg-blue-100' 
        },
    ]
};
