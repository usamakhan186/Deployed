
"use client";

import React from 'react';



import PaymentMethod from './PaymentMethod';
import Purchaseinfo from './Purchaseinfo';

import CheckoutHeader from './CheckoutHeader';
import AppBar from '@/components/AppBar2';
import PriceSummary from './pricesum';

const CheckoutPage = () => {
    

    return (
        <div className="min-h-screen bg-gray-50">
            <AppBar />
            <CheckoutHeader />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-3 gap-8">
                    {/* Left Content */}
                    <div className="col-span-2">
                        <Purchaseinfo />
                        <PaymentMethod />
                    </div>

                    {/* Right Sidebar */}
                    <div className="col-span-1">
                    <PriceSummary/>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default CheckoutPage;