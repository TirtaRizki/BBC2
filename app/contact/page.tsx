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


            </div>
         </div>

    );
};

export default ContactPage;