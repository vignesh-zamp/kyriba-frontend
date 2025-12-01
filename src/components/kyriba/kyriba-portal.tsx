'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import MenuMap from '@/components/kyriba/menu-map';

export default function KyribaPortal() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="flex flex-1 flex-col items-center justify-center p-4 md:p-8">
        <MenuMap searchTerm={searchTerm} />
      </main>
    </>
  );
}
