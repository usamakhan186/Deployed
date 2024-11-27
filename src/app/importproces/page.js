import React from 'react';
import { FileText, Download, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import AppBar from '@/components/AppBar2';


const ImportProcessPage = () => {
    return (
        <div className="min-h-screen bg-white">
           <AppBar/>
            {/* Header with navigation */}
            <div className="border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center">
                        <ChevronLeft className="h-5 w-5 text-gray-400 mr-2" />
                        <h1 className="text-2xl font-bold text-red-500">Import Process Documentation</h1>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-4">
                            {/* Search */}
                            <div className="relative mb-6">
                                <input 
                                    type="text" 
                                    placeholder="Search in document"
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-500 outline-none"
                                />
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            </div>

                            {/* Table of contents */}
                            <nav className="space-y-1">
                                <h2 className="font-semibold text-gray-900 mb-2">Table of Contents</h2>
                                <a href="#overview" className="block px-3 py-2 text-red-500 bg-red-50 rounded-lg">Overview</a>
                                <a href="#requirements" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">Requirements</a>
                                <a href="#process" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">Import Process</a>
                                <a href="#documentation" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">Required Documentation</a>
                                <a href="#timeline" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">Timeline</a>
                                <a href="#costs" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">Costs & Fees</a>
                            </nav>

                            {/* Download button */}
                            <button className="mt-6 w-full flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                <Download className="h-5 w-5 mr-2" />
                                Download PDF
                            </button>
                        </div>
                    </div>

                    {/* PDF viewer */}
                    <div className="lg:col-span-3 bg-gray-50 rounded-lg min-h-[800px] p-8">
                        <div className="bg-white shadow-lg rounded-lg p-6 min-h-[700px]">
                            {/* PDF content goes here */}
                            <div className="prose max-w-none">
                                {/* Replace with actual PDF viewer component */}
                                <h2 id="overview" className="text-xl font-bold text-gray-900 mb-4">Overview</h2>
                                <p className="text-gray-600 mb-6">Your PDF content will be displayed here...</p>
                            </div>
                        </div>

                        {/* Navigation buttons */}
                        <div className="flex justify-between mt-6">
                            <button className="flex items-center px-4 py-2 text-gray-600 hover:text-red-500">
                                <ChevronLeft className="h-5 w-5 mr-1" />
                                Previous
                            </button>
                            <button className="flex items-center px-4 py-2 text-gray-600 hover:text-red-500">
                                Next
                                <ChevronRight className="h-5 w-5 ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImportProcessPage;