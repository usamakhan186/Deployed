"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const PaymentMethod = () => {
    return (
        <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
            {/* Step 1 */}
            <div id="payment-method">
                <div className="mb-2 text-gray-500 text-sm">STEP 1</div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 sm:mb-4">Payment method</h2>
                <div className="bg-white rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Payment method</h3>

                    {/* Financing Info Section */}
                    <div className="mb-6 sm:mb-8">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-4 w-4 rounded-full bg-red-500" />
                            <span className="font-medium">Financing or wire transfer?</span>
                        </div>
                        <p className="text-gray-600 mb-4 pl-4 sm:pl-6 text-sm sm:text-base">
                            Before we get into the CarAudit, we need to choose a financing method. If you would like to
                            purchase your car with a loan, please fill out the loan request that sent us will process you with
                            the best possible offer. Or simply go back and choose "Pay by bank transfer" and skip the
                            CarAudit order form.
                        </p>
                    </div>

                    {/* Benefits Section */}
                    <div className="mb-6 sm:mb-8">
                        <h4 className="font-medium mb-4">Are you considering financing?</h4>
                        <div className="space-y-3">
                            {/* Benefits items with responsive text */}
                            <div className="flex items-start gap-2">
                                <div className="mt-1">
                                    <div className="w-4 h-4 rounded-full border-2 border-green-500 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                    </div>
                                </div>
                                <span className="text-sm sm:text-base">We are the only ones able to finance cars from abroad</span>
                            </div>
                            {/* Repeat for other benefit items... */}
                        </div>
                    </div>

                    {/* Example Section */}
                    <div className="mb-6 sm:mb-8">
                        <h4 className="font-medium mb-4">A representative EXAMPLE</h4>
                        <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm">
                                <div>
                                    <div className="text-gray-500 mb-1">Price</div>
                                    <div className="font-medium">CZK 164,714</div>
                                </div>
                                <div>
                                    <div className="text-gray-500 mb-1">48</div>
                                    <div className="font-medium">installments</div>
                                </div>
                                <div>
                                    <div className="text-gray-500 mb-1">7.79 % / 8.01 %</div>
                                    <div className="font-medium">interest rate / APR</div>
                                </div>
                                <div>
                                    <div className="text-gray-500 mb-1">CZK 4,437</div>
                                    <div className="font-medium">monthly</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <button className="w-full sm:flex-1 px-4 py-3 border border-red-500 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
                            No, I'm interested
                        </button>
                        <button className="w-full sm:flex-1 px-4 py-3 border border-red-500 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
                            Yes, I want to pay by bank transfer
                        </button>
                    </div>
                </div>
            </div>

            {/* Step 2 */}
            <div id="car-condition">
                <div className="mb-2 text-gray-500 text-sm">STEP 2</div>
                <h2 className="text-xl sm:text-3xl font-semibold text-gray-700 mb-3 sm:mb-4">Car condition check</h2>
                <div className="bg-white rounded-lg p-3 sm:p-4">
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                            <Check className="w-4 h-4 text-gray-400" />
                        </div>
                        <span className="text-gray-600 text-sm sm:text-base">CarAudit™ vehicle inspection</span>
                    </div>
                </div>
            </div>

            {/* Step 3 */}
            <div id="delivery">
                <div className="mb-2 text-gray-500 text-sm">STEP 3</div>
                <h2 className="text-xl sm:text-3xl font-semibold text-gray-700 mb-3 sm:mb-4">Delivery</h2>
                <div className="space-y-2">
                    {/* Individual delivery items with responsive text */}
                    <div className="bg-white rounded-lg p-3 sm:p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                                <Check className="w-4 h-4 text-gray-400" />
                            </div>
                            <span className="text-gray-600 text-sm sm:text-base">Delivery</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-3 sm:p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                                <Check className="w-4 h-4 text-gray-400" />
                            </div>
                            <span className="text-gray-600 text-sm sm:text-base">Additional Services</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-3 sm:p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                                <Check className="w-4 h-4 text-gray-400" />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-600 text-sm sm:text-base">Fast Guard</span>
                                <span className="text-xs text-red-500 bg-red-50 px-2 py-0.5 rounded">
                                    RECOMMENDED
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Step 4 */}
            <div id="payment">
                <div className="mb-2 text-gray-500 text-sm">STEP 4</div>
                <h2 className="text-xl sm:text-3xl font-semibold text-gray-700 mb-3 sm:mb-4">Payment</h2>
                <div className="bg-white rounded-lg p-3 sm:p-4">
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                            <Check className="w-4 h-4 text-gray-400" />
                        </div>
                        <span className="text-gray-600 text-sm sm:text-base">Payment</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;