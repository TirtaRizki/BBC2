'use client';

import React from 'react';
import { LogOut } from 'lucide-react'; // Pastikan ini adalah path yang benar untuk ikon LogOut Anda
import { useRouter } from 'next/router';

const LogoutButton: React.FC = () => {
    const router = useRouter(); // Menggunakan useRouter untuk navigasi

    const handleLogout = () => {
        // Logika logout Anda di sini (misalnya, menghapus token, dll.)
        
        // Setelah logout, arahkan ke halaman login
        router.push('/login'); // Menggunakan router.push untuk navigasi
    };

    return (
        <div className="flex justify-end">
            <button 
                onClick={handleLogout} 
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 text-red-600"
            >
                Logout
                <LogOut className="w-5 h-5 text-red-600" />
            </button>
        </div>
    );
};

export default LogoutButton;