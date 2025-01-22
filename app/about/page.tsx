import React from 'react';
import { Award, Users, ShoppingBag, Heart } from 'lucide-react';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-16">
            {/* Hero Section */}
            <div className="relative bg-gray-900 text-white">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                <div className="max-w-7xl mx-auto px-4 py-24 relative">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-bold mb-6">Redefining Second-Hand Fashion</h1>
                        <p className="text-xl text-gray-300">Building a sustainable future through pre-loved premium footwear.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;