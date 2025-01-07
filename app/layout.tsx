'use client';


import './globals.css';
import Link from 'next/link';
import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

// NavLink Component
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <Link
    href={href}
    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
  >
    {children}
  </Link>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 text-gray-300">
    <div className="max-w-7xl mx-auto px-4 py-6 text-center">
      <p>&copy; 2024 SecondBrand.co. All rights reserved.</p>
    </div>
  </footer>
);

// RootLayout Component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="min-h-screen bg-white flex">

        {/* Main Layout */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                  SecondBrand.co
                </h1>
                <div className="hidden md:flex items-center space-x-8">
                  <NavLink href="/">Home</NavLink>
                  <NavLink href="/products">Products</NavLink>
                  <NavLink href="/categories">Categories</NavLink>
                  <NavLink href="/about">About</NavLink>
                  <NavLink href="/contact">Contact</NavLink>
                </div>
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

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-40 bg-white md:hidden">
              <div className="pt-20 pb-6 px-4">
                <div className="flex flex-col space-y-4">
                  <NavLink href="/">Home</NavLink>
                  <NavLink href="/products">Products</NavLink>
                  <NavLink href="/categories">Categories</NavLink>
                  <NavLink href="/about">About</NavLink>
                  <NavLink href="/contact">Contact</NavLink>
                </div>
              </div>
            </div>
          )}

          {/* Content */}
          <main className="flex-1 p-6 mt-16">{children}</main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
