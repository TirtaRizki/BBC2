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

            {/* Story Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-700">Our Story</h2>
                        <div className="space-y-4 text-gray-600">
                            <p>Founded in 2023, SecondBrand.co emerged from a simple vision: to make premium footwear accessible while promoting sustainable fashion choices.</p>
                            <p>What started as a small passion project has grown into Indonesia's trusted marketplace for authenticated pre-loved branded shoes.</p>
                            <p>Every pair we sell tells a story, and we're proud to help these stories continue with new owners.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutPage;