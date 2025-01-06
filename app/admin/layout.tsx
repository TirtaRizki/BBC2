// app/admin/layout.tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function AdminLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <div>
         {/* Sidebar */}
      <aside className="w-64 bg-white border-r">
        <div className="p-4">
          <h1 className="text-xl font-bold text-black">SecondBrand.co</h1>
        </div>
      </aside>
      {children}
    </div>
  );
}