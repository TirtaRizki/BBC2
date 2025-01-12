'use client';

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage = () => {
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Tambahkan logika pengiriman formulir di sini
    alert('Form submitted');
  };

  return (
    <div className="min-h-screen bg-gray-400 pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12"></div>
        <div>
            <h2 className="text-3xl font-bold mb-8 text-black">Dapatkan Informasinya!</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 ">Nama</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Pesan</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                Kirim Pesan
              </button>
            </form>
          </div>


            </div>
         </div>

    );
};

export default ContactPage;