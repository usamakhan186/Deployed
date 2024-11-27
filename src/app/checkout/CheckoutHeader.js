// app/checkout/components/CheckoutHeader.jsx
"use client";

import React from 'react';
import { ChevronLeft, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const CheckoutHeader = () => {
    const router = useRouter();

    return (
        <div className="w-full">
            {/* Upper Header */}
            <div className="border-b bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        {/* Left side with back button and car info */}
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={() => router.back()}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <Link href="/" className="text-red-500 hover:text-red-700">Fast.</Link>
                            <div className="flex items-center text-gray-600">
                                <ChevronLeft className="h-4 w-4" />
                                <span>Buy a car</span>
                                <span className="text-gray-900 font-medium ml-1">Mercedes-Benz A 200</span>
                            </div>
                        </div>

                        {/* Right side with contact info */}
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-4 bg-red-50 rounded-lg p-4">
                                <div>
                                    <div className="text-sm text-gray-600">Do you need advice?</div>
                                    <a href="tel:+420246034700" className="text-red-500 font-medium">+420 246 034 700</a>
                                </div>
                                <div className="text-sm text-gray-500">Mo–Su 8 am-8 pm</div>
                            </div>
                        </div>
                    </div>

                    {/* Car Details */}
                    <div className="mt-2">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>148,800 km</span>
                            <span>04/2019</span>
                            <div>
                                <span className="text-gray-400">The usual delivery time is</span>
                                <span className="ml-1">20 working days.</span>
                                <span className="text-gray-400 ml-1">We will let you know the exact date during the order process.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Progress Steps */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-8">
                        {[
                            { number: 1, label: 'Payment method' },
                            { number: 2, label: 'Car condition check' },
                            { number: 3, label: 'Delivery' },
                            { number: 4, label: 'Payment' }
                        ].map((step, index) => (
                            <div 
                                key={step.number}
                                className="flex items-center gap-2"
                            >
                                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 
                                    ${index === 0 ? 'bg-red-500 border-red-500 text-white' : 'border-gray-300 text-gray-400'}`}>
                                    {step.number}
                                </div>
                                <span className={`font-medium ${index === 0 ? 'text-red-500' : 'text-gray-400'}`}>
                                    {step.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutHeader;