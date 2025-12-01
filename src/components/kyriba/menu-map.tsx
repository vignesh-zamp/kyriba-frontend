'use client';

import { menuCategories } from '@/lib/kyriba-menu-data';
import MenuNode from './menu-node';
import type { MenuItem } from '@/lib/kyriba-menu-data';

interface MenuMapProps {
  searchTerm: string;
}

const CategoryGroup = ({
  name,
  items,
  searchTerm,
}: {
  name: string;
  items: MenuItem[];
  searchTerm: string;
}) => (
  <div className="flex flex-col items-center gap-4">
    <h2 className="text-lg font-semibold text-foreground/80">{name}</h2>
    <div className="flex flex-col items-center gap-8">
      {items.map((item) => (
        <MenuNode key={item.id} item={item} searchTerm={searchTerm} />
      ))}
    </div>
  </div>
);

export default function MenuMap({ searchTerm }: MenuMapProps) {
  const lowercasedSearchTerm = searchTerm.toLowerCase();

  return (
    <div className="relative w-full max-w-7xl">
      <div className="absolute inset-0 z-0">
        {/* Central Vertical Line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 -translate-x-1/2 bg-border"></div>
        
        {/* Top Horizontal Line */}
        <div className="absolute top-[180px] left-[15%] right-[15%] h-0.5 bg-border"></div>
        {/* Bottom Horizontal Line */}
        <div className="absolute bottom-[240px] left-[25%] right-[25%] h-0.5 bg-border"></div>

        {/* Connector lines to categories */}
        <div className="absolute top-[180px] left-[16.66%] h-[80px] w-0.5 bg-border"></div>
        <div className="absolute top-[180px] left-1/2 -translate-x-1/2 h-[120px] w-0.5 bg-border"></div>
        <div className="absolute top-[180px] right-[16.66%] h-[80px] w-0.5 bg-border"></div>

        <div className="absolute bottom-[240px] left-[33.33%] h-[150px] w-0.5 bg-border transform -translate-y-full"></div>
        <div className="absolute bottom-[240px] right-[33.33%] h-[150px] w-0.5 bg-border transform -translate-y-full"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-20">
        <div className="grid w-full grid-cols-3 gap-8 text-center">
          <CategoryGroup name="Cash & Liquidity" items={menuCategories[0].items} searchTerm={searchTerm} />
          <CategoryGroup name="Payments" items={menuCategories[1].items} searchTerm={searchTerm} />
          <CategoryGroup name="Financial Transactions" items={menuCategories[2].items} searchTerm={searchTerm} />
        </div>

        <div className="flex items-center justify-center rounded-full bg-primary p-6 shadow-lg">
           <h1 className="text-3xl font-bold text-primary-foreground">KYRIBA</h1>
        </div>

        <div className="grid w-full grid-cols-3 gap-8 text-center">
           {/* Empty div for spacing */}
           <div></div>
           <CategoryGroup name="Connectivity" items={menuCategories[3].items} searchTerm={searchTerm} />
           {/* Empty div for spacing */}
           <div></div>
        </div>

        <div className="grid w-full grid-cols-2 gap-8 text-center">
            <CategoryGroup name="Supply Chain Finance" items={menuCategories[4].items} searchTerm={searchTerm} />
            <CategoryGroup name="Working Capital" items={menuCategories[5].items} searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
}
