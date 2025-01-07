'use client';

import '../globals.css'; // Correct path to import globals.css
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

// NavLink Component
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <Link href={href} className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">
    {children}
  </Link>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 text-gray-300">
    <div className="max-w-7xl mx-auto px-4 py-6 text-center">
      {/* <p>&copy; 2024 SecondBrand.co. All rights reserved.</p> */}
    </div>
  </footer>
);

// RootLayout Component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hydration, setHydration] = useState(false);

  useEffect(() => {
    setHydration(true);
  }, []);

  if (!hydration) return null;

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white-900 text-black">
          <div className="p-4 text-lg font-bold">Admin SecondBrand</div>
          <nav>
            <ul className="space-y-5">
              <li>
                <NavLink href="./admin">🕒 Dashboard</NavLink>
              </li>
              <li>
                <NavLink href="./admin/products">📦 Products</NavLink>
              </li>
              <li>
                <NavLink href="#">🛒 Orders</NavLink>
              </li>
              <li>
                <NavLink href="./admin/admin_management">👥 Admin</NavLink>
              </li>
              <li>
                <NavLink href="./admin/testimonials">💬 Testimonials</NavLink>
              </li>
              <li>
                <NavLink href="./admin/settings">⚙ Settings</NavLink>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Layout */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                  SecondBrand.co
                </h1>
                <div className="flex items-center space-x-4">
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                    <Search className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                    <ShoppingBag className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    {isMenuOpen ? (
                      <X className="w-5 h-5 text-gray-600" />
                    ) : (
                      <Menu className="w-5 h-5 text-gray-600" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </nav>

    
          {/* Content */}
          <main className="flex-1 p-6 mt-16">{children}</main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
