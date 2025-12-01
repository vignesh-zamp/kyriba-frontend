'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import type { MenuItem } from '@/lib/kyriba-menu-data';
import { cn } from '@/lib/utils';

interface MenuNodeProps {
  item: MenuItem;
  searchTerm: string;
}

export default function MenuNode({ item, searchTerm }: MenuNodeProps) {
  const isMatch = searchTerm.length === 0 || item.title.toLowerCase().includes(searchTerm.toLowerCase());

  const slug = item.id;
  const Icon = item.icon;

  return (
    <Link href={`/feature/${slug}`} className="w-full max-w-[200px]">
      <Card
        className={cn(
          'w-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50',
          !isMatch && 'opacity-30 blur-[2px] scale-90'
        )}
      >
        <CardContent className="flex flex-col items-center gap-3 p-4 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <p className="font-medium text-sm text-card-foreground">{item.title}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
