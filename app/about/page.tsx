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
                    {/* Statistic Cards */}
                    <div className="grid grid-cols-2 gap-4 text-blue-700">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-3xl mb-2">5000+</h3>
                            <p className="text-gray-600">Happy Customers</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-3xl mb-2">1200+</h3>
                            <p className="text-gray-600">Products Sold</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-3xl mb-2">98%</h3>
                            <p className="text-gray-600">Satisfaction Rate</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-3xl mb-2">50+</h3>
                            <p className="text-gray-600">Brand Partners</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-500">Our Values</h2>
                    <div className="grid md:grid-cols-4 gap-8 text-gray-500">
                        {[
                            { icon: Award, title: 'Authenticity', desc: 'Every item thoroughly verified' },
                            { icon: Users, title: 'Community', desc: 'Building trusted relationships' },
                            { icon: ShoppingBag, title: 'Quality', desc: 'Premium selection process' },
                            { icon: Heart, title: 'Sustainability', desc: 'Promoting circular fashion' }
                        ].map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="text-center">
                                <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
                                    <Icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="font-bold mb-2">{title}</h3>
                                <p className="text-gray-600">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-500">Meet Our Team</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((member) => (
                        <div key={member} className="bg-white rounded-xl shadow-sm overflow-hidden">
                            <div className="aspect-square bg-gray-100"></div>
                            <div className="p-6">
                                <h3 className="font-bold mb-1 text-gray-500">John Doe</h3>
                                <p className="text-gray-600 mb-4">Co-founder & CEO</p>
                                <p className="text-sm text-gray-500">Passionate about sustainable fashion and technology.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
                    <p className="mb-8 text-lg">Be part of the sustainable fashion movement</p>
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;