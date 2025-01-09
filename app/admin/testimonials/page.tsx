"use client"

import { Search } from "lucide-react";
import React from "react"

const TestimonialPage = () => {
    return (
        <main className="min-h-screen p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-black">Testimonials</h1>
            </div>
            {/* Search */}
            <div className="mb-6">
                <div className="relative max-w-md">
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search testimonials..."
                        className="pl-10 pr-4 py-2 w-full rounded-lg border-0 ring-1 ring-gray-200"
                    />
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between mb-4">
                <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
          </div>
                </div>
            </div>
        </main>
    )
};

export default TestimonialPage;

