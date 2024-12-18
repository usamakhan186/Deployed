"use client"
import React from 'react';
import { Car, Plus } from 'lucide-react';
import Link from "next/link";

const OrdersInProgress = () => {
    // You can replace this with actual order data later
    const hasOrders = false;
    const totalOffers = "1 139 268";

    return (
        <div className="w-full min-h-screen ">
            {/* Header */}
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-6 pb-12">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Orders in progress
                </h1>

                {/* Empty State */}
                {!hasOrders && (
                    <div className="bg-grey-50 rounded-lg shadow-b p-8 flex flex-col items-center justify-center text-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
                        {/* Custom Car Icon with Plus Signs */}
                        <div className="relative w-48 h-32 mb-6">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <Car size={120} className="text-red-500/20" />
                                <Plus size={24} className="text-red-500/40 absolute -top-4 -left-4" />
                                <Plus size={24} className="text-red-500/40 absolute -bottom-4 -right-4" />
                            </div>
                        </div>

                        <p className="text-gray-600 mb-4">
                            Here you will see cars in transaction process.
                        </p>

                        {/* Offers Counter */}
                        <div className="w-full max-w-sm">
                        <Link href="/cars">
                            <button href="/cars"  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg transition-colors">
                                {totalOffers} Offers
                            </button>
                         </Link>
                        </div>
                    </div>
                )}

                {/* Popular Categories Section */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Categories */}
                    <div>
                        <h2 className="font-semibold text-gray-800 mb-4">Popular categories</h2>
                        <div className="space-y-2">
                            <CategoryLink label="SUV" count="234,567" />
                            <CategoryLink label="Estate" count="123,456" />
                            <CategoryLink label="Luxury" count="45,678" />
                            <CategoryLink label="Sport" count="78,901" />
                        </div>
                    </div>

                    {/* Selected Makes */}
                    <div>
                        <h2 className="font-semibold text-gray-800 mb-4">Selected makes</h2>
                        <div className="space-y-2">
                            <CategoryLink label="Volkswagen" count="98,765" />
                            <CategoryLink label="BMW" count="87,654" />
                            <CategoryLink label="Mercedes-Benz" count="76,543" />
                            <CategoryLink label="Audi" count="65,432" />
                        </div>
                    </div>

                    {/* Selected Models */}
                    <div>
                        <h2 className="font-semibold text-gray-800 mb-4">Selected models</h2>
                        <div className="space-y-2">
                            <CategoryLink label="Golf" count="54,321" />
                            <CategoryLink label="3 Series" count="43,210" />
                            <CategoryLink label="A4" count="32,109" />
                            <CategoryLink label="C-Class" count="21,098" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper component for category links
const CategoryLink = ({ label, count }) => (
    <div className="flex items-center justify-between group cursor-pointer">
        <span className="text-gray-600 group-hover:text-red-500 transition-colors">
            {label}
        </span>
        <span className="text-gray-400 text-sm">
            {count}
        </span>
    </div>
);

export default OrdersInProgress;