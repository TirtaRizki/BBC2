// app/admin/layout.tsx
'use client';

import React from 'react';

export default function AdminLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <div>
      {children}
    </div>
  );
}