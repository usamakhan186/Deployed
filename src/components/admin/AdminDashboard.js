'use client';

import React, { useState, useEffect } from 'react';
import {
    Car, Package, Settings, Users, DollarSign,
    Plus, Edit3, Trash2, RefreshCcw, X,
    ChevronDown, Search, Bell, AlertCircle,
    FileText, Calendar, PlusCircle, Filter,
    ChevronLeft, ChevronRight, Power, Fuel, Image as ImageIcon,
} from 'lucide-react';
import { useAuth } from './auth-components';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('vehicles');
    const [showPriceModal, setShowPriceModal] = useState(false);
    const [showAddVehicleModal, setShowAddVehicleModal] = useState(false);
    const [showServiceModal, setShowServiceModal] = useState(false);
    const { user, logout } = useAuth();
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [vehicles, setVehicles] = useState([
        {
            id: 1,
            name: "Mercedes-Benz A 200 d",
            power: "110 kW",
            basePrice: 634490,
            priceWithoutVAT: 447915,
            services: {
                carAudit: 1990,
                homeDelivery: 15005,
                fuel: 0,
                importMOT: 4490,
                adminFee: 800,
                registration: 1990,
                warranty: 0
            }
        }
    ]);

    const [orders, setOrders] = useState([
        {
            id: "ORD-2024-001",
            vehicle: "Mercedes-Benz A 200 d",
            customer: "John Doe",
            status: "Pending",
            totalPrice: 647765,
            services: ["Home Delivery", "Import MOT"],
            date: "2024-03-20"
        }
    ]);

    // Statistics for dashboard
    const [stats, setStats] = useState({
        totalVehicles: 194475,
        activeOrders: 45,
        totalRevenue: 15789650,
        pendingDeliveries: 12
    });

    const handleUpdateVehicle = (vehicleId, updates) => {
        setVehicles(prevVehicles =>
            prevVehicles.map(vehicle =>
                vehicle.id === vehicleId
                    ? { ...vehicle, ...updates }
                    : vehicle
            )
        );
    };

    const handleDeleteVehicle = (vehicleId) => {
        setVehicles(prevVehicles =>
            prevVehicles.filter(vehicle => vehicle.id !== vehicleId)
        );
    };

    // Modal Components
    const PriceModal = ({ isOpen, onClose, vehicle, onUpdate }) => {
        const [basePrice, setBasePrice] = useState(vehicle?.basePrice || 0);
        const [vat, setVat] = useState(21); // Default VAT rate

        const handleSave = () => {
            // Calculate new price without VAT
            const priceWithoutVAT = Math.round(basePrice / (1 + (vat / 100)));

            // Call the update function passed from parent
            onUpdate(vehicle.id, {
                basePrice: Number(basePrice),
                priceWithoutVAT,
                vat
            });

            onClose();
        };

        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white rounded-lg p-6 w-full max-w-lg">
                    <h3 className="text-lg font-bold mb-4">Edit Price Details</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Base Price (CZK)</label>
                            <input
                                type="number"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                                value={basePrice}
                                onChange={(e) => setBasePrice(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">VAT (%)</label>
                            <input
                                type="number"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                                value={vat}
                                onChange={(e) => setVat(e.target.value)}
                            />
                        </div>
                        <div className="pt-4 flex justify-end space-x-3">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 text-gray-600 hover:text-gray-800"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const ServiceModal = ({ isOpen, onClose, services }) => {
        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white rounded-lg p-6 w-full max-w-lg">
                    <h3 className="text-lg font-bold mb-4">Service Details</h3>
                    <div className="space-y-4">
                        {Object.entries(services).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center">
                                <span className="text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                <span className="font-medium">CZK {value.toLocaleString()}</span>
                            </div>
                        ))}
                        <div className="pt-4 border-t">
                            <span className="font-bold">Total Services:</span>
                            <span className="float-right font-bold">
                                CZK {Object.values(services).reduce((a, b) => a + b, 0).toLocaleString()}
                            </span>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-full mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const AddVehicleModal = ({ isOpen, onClose, setVehicles }) => {
        const [images, setImages] = useState([]);
        const [imagesPreviews, setImagesPreviews] = useState([]);
        const [features, setFeatures] = useState(['Digital cockpit', 'Keyless entry', 'Apple CarPlay', 'Navigation system']);
        const [newFeature, setNewFeature] = useState('');
        const [showFeatureInput, setShowFeatureInput] = useState(false);
        const [vehicleData, setVehicleData] = useState({
            name: '',
            power: '',
            basePrice: '',
            priceWithoutVAT: '',
            manufactureDate: '',
            transmission: 'automatic',
            fuelType: 'petrol',
            mileage: ''
        });

        if (!isOpen) return null;

        const handleImageUpload = (e) => {
            const files = Array.from(e.target.files);
            setImages(files);

            // Create previews
            const previews = files.map(file => URL.createObjectURL(file));
            setImagesPreviews(previews);
        };

        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setVehicleData(prev => ({
                ...prev,
                [name]: value
            }));
        };

        const handleRemoveFeature = (featureToRemove) => {
            setFeatures(features.filter(feature => feature !== featureToRemove));
        };

        const handleAddFeature = () => {
            if (newFeature.trim()) {
                setFeatures([...features, newFeature.trim()]);
                setNewFeature('');
                setShowFeatureInput(false);
            }
        };

        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                handleAddFeature();
            }
        };

        const handleSubmit = () => {
            // Create new vehicle object
            const newVehicle = {
                id: Date.now(), // temporary ID for demo
                name: vehicleData.name,
                power: vehicleData.power + " kW",
                basePrice: parseFloat(vehicleData.basePrice),
                priceWithoutVAT: parseFloat(vehicleData.basePrice) / 1.21,
                services: {
                    carAudit: 1990,
                    homeDelivery: 15005,
                    fuel: 0,
                    importMOT: 4490,
                    adminFee: 800,
                    registration: 1990,
                    warranty: 0
                },
                features: features,
                images: imagesPreviews // In real app, you'd upload these to a server
            };

            // Add to vehicles list
            setVehicles(prev => [...prev, newVehicle]);
            onClose();
        };

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-y-auto">
                <div className="bg-white rounded-lg w-full max-w-4xl m-4">
                    {/* Header */}
                    <div className="border-b p-6 flex justify-between items-center">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <Car className="w-6 h-6" />
                            Add New Vehicle
                        </h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="p-6 space-y-6">
                        {/* Image Upload Section */}
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                            <div className="flex flex-col items-center">
                                <ImageIcon className="w-12 h-12 text-gray-400 mb-4" />
                                <p className="text-gray-600 mb-2">Drag and drop vehicle images here</p>
                                <label className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
                                    Browse Files
                                    <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" multiple />
                                </label>
                            </div>
                        </div>

                        {/* Image Preview Section */}
                        <div className="mt-4 flex flex-wrap gap-4">
                            {imagesPreviews.map((preview, index) => (
                                <div key={index} className="relative">
                                    <img
                                        src={preview}
                                        alt={`Preview ${index + 1}`}
                                        className="w-24 h-24 object-cover rounded-lg"
                                    />
                                    <button
                                        onClick={() => {
                                            setImagesPreviews(prev => prev.filter((_, i) => i !== index));
                                            setImages(prev => prev.filter((_, i) => i !== index));
                                        }}
                                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Vehicle Details Form */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Basic Information */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 mb-1">Brand & Model</label>
                                    <div className="relative">
                                        <Car className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={vehicleData.name}
                                            onChange={handleInputChange}
                                            className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                                            placeholder="e.g., BMW Cooper"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-1">Manufacturing Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <input
                                            type="month"
                                            name="manufactureDate"
                                            value={vehicleData.manufactureDate}
                                            onChange={handleInputChange}
                                            className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-1">Power (kW)</label>
                                    <div className="relative">
                                        <Power className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <input
                                            type="number"
                                            name="power"
                                            value={vehicleData.power}
                                            onChange={handleInputChange}
                                            className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                                            placeholder="e.g., 100"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-1">Base Price (CZK)</label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <input
                                            type="number"
                                            name="basePrice"
                                            value={vehicleData.basePrice}
                                            onChange={handleInputChange}
                                            className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                                            placeholder="e.g., 634490"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Additional Details */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 mb-1">Transmission</label>
                                    <div className="relative">
                                        <Settings className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <select
                                            name="transmission"
                                            value={vehicleData.transmission}
                                            onChange={handleInputChange}
                                            className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none appearance-none bg-white"
                                        >
                                            <option value="automatic">Automatic</option>
                                            <option value="manual">Manual</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-1">Fuel Type</label>
                                    <div className="relative">
                                        <Fuel className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <select
                                            name="fuelType"
                                            value={vehicleData.fuelType}
                                            onChange={handleInputChange}
                                            className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none appearance-none bg-white"
                                        >
                                            <option value="petrol">Petrol</option>
                                            <option value="diesel">Diesel</option>
                                            <option value="electric">Electric</option>
                                            <option value="hybrid">Hybrid</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-1">Mileage (km)</label>
                                    <div className="relative">
                                        <Car className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <input
                                            type="number"
                                            name="mileage"
                                            value={vehicleData.mileage}
                                            onChange={handleInputChange}
                                            className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                                            placeholder="e.g., 18496"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Features Section */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Features</h3>
                            <div className="flex flex-wrap gap-2">
                                {features.map((feature) => (
                                    <span key={feature} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                                        {feature}
                                        <button
                                            onClick={() => handleRemoveFeature(feature)}
                                            className="text-gray-500 hover:text-gray-700"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </span>
                                ))}

                                {showFeatureInput ? (
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="text"
                                            value={newFeature}
                                            onChange={(e) => setNewFeature(e.target.value)}
                                            onKeyPress={handleKeyPress}
                                            placeholder="Enter feature name"
                                            className="px-3 py-1 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                                            autoFocus
                                        />
                                        <button
                                            onClick={handleAddFeature}
                                            className="text-green-600 hover:text-green-700"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => {
                                                setShowFeatureInput(false);
                                                setNewFeature('');
                                            }}
                                            className="text-red-500 hover:text-red-600"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => setShowFeatureInput(true)}
                                        className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-red-200"
                                    >
                                        <Plus className="w-4 h-4" /> Add Feature
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end pt-4">
                            <button
                                onClick={onClose}
                                className="mr-3 px-4 py-2 text-gray-600 hover:text-gray-800"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors flex items-center gap-2"
                            >
                                <Plus className="w-5 h-5" />
                                Add Vehicle
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Dashboard Overview Section
    const DashboardOverview = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-gray-500 text-sm">Total Vehicles</p>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">{stats.totalVehicles.toLocaleString()}</h3>
                    </div>
                    <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                        <Car className="w-6 h-6" />
                    </span>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-gray-500 text-sm">Active Orders</p>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">{stats.activeOrders}</h3>
                    </div>
                    <span className="p-2 bg-green-50 text-green-600 rounded-lg">
                        <Package className="w-6 h-6" />
                    </span>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-gray-500 text-sm">Total Revenue</p>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">
                            CZK {stats.totalRevenue.toLocaleString()}
                        </h3>
                    </div>
                    <span className="p-2 bg-yellow-50 text-yellow-600 rounded-lg">
                        <DollarSign className="w-6 h-6" />
                    </span>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-gray-500 text-sm">Pending Deliveries</p>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">{stats.pendingDeliveries}</h3>
                    </div>
                    <span className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                        <Calendar className="w-6 h-6" />
                    </span>
                </div>
            </div>
        </div>
    );

    // Recent Activity Component
    const RecentActivity = () => (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
                {orders.slice(0, 5).map((order, index) => (
                    <div key={index} className="flex items-start space-x-3">
                        <div className="p-2 bg-gray-50 rounded-full">
                            <FileText className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-900">New order #{order.id}</p>
                            <p className="text-xs text-gray-500">{order.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top Navigation */}
            <div className="bg-white border-b border-gray-200">
                <div className="flex justify-between items-center px-6 py-3">
                    <div className="flex items-center space-x-4">
                        <img src="/Logo/logo.png.png" alt="Logo" className="h-12" />
                        <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="relative p-2 rounded-full hover:bg-gray-100">
                            <Bell className="w-5 h-5 text-gray-600" />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <div className="flex items-center space-x-2">
                            <img
                                src="/api/placeholder/32/32"
                                alt="Admin"
                                className="w-8 h-8 rounded-full"
                            />
                            <span className="text-sm font-medium text-gray-700">
                                {user?.email || 'Admin'}
                            </span>
                            <button
                                onClick={logout}
                                className="text-sm text-red-500 hover:text-red-600"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex">
                {/* Sidebar */}
                <div className="w-64 bg-white h-[calc(100vh-4rem)] border-r border-gray-200">
                    <nav className="p-4">
                        <div className="space-y-1">
                            {[
                                { id: 'dashboard', icon: Car, label: 'Dashboard' },
                                { id: 'vehicles', icon: Car, label: 'Vehicles' },
                                { id: 'orders', icon: Package, label: 'Orders' },

                                { id: 'pricing', icon: DollarSign, label: 'Pricing' },

                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === item.id
                                        ? 'bg-red-50 text-red-600'
                                        : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </nav>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-8">
                    {/* Dashboard Overview */}
                    {activeTab === 'dashboard' && (
                        <div className="space-y-6">
                            <DashboardOverview />
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2">
                                    {/* Recent Orders */}
                                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Orders</h3>
                                        <table className="w-full">
                                            <thead>
                                                <tr className="text-left text-sm text-gray-500">
                                                    <th className="pb-3 font-medium">Order ID</th>
                                                    <th className="pb-3 font-medium">Customer</th>
                                                    <th className="pb-3 font-medium">Status</th>
                                                    <th className="pb-3 font-medium">Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orders.map((order) => (
                                                    <tr key={order.id} className="border-t border-gray-100">
                                                        <td className="py-3 text-sm">{order.id}</td>
                                                        <td className="py-3 text-sm">{order.customer}</td>
                                                        <td className="py-3 text-sm">
                                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${order.status === 'Pending' ? 'bg-yellow-50 text-yellow-600' :
                                                                order.status === 'Completed' ? 'bg-green-50 text-green-600' :
                                                                    'bg-gray-50 text-gray-600'
                                                                }`}>
                                                                {order.status}
                                                            </span>
                                                        </td>
                                                        <td className="py-3 text-sm">CZK {order.totalPrice.toLocaleString()}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div>
                                    <RecentActivity />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Vehicles Tab Content */}
                    {activeTab === 'vehicles' && (
                        <div className="bg-white rounded-lg shadow">
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="relative">
                                            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="Search vehicles..."
                                                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            />
                                        </div>
                                        <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                                            <option>All Brands</option>
                                            <option>Mercedes-Benz</option>
                                            <option>BMW</option>
                                            <option>Audi</option>
                                        </select>
                                    </div>
                                    <button
                                        onClick={() => setShowAddVehicleModal(true)}  // This is the correct handler
                                        className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                                    >
                                        <Plus className="w-5 h-5" />
                                        <span>Add Vehicle</span>
                                    </button>
                                </div>

                                {/* Vehicles Table */}
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="text-left text-sm text-gray-500 border-b border-gray-200">
                                                <th className="pb-3 font-medium">Vehicle</th>
                                                <th className="pb-3 font-medium">Base Price</th>
                                                <th className="pb-3 font-medium">Price Without VAT</th>
                                                <th className="pb-3 font-medium">Services</th>
                                                <th className="pb-3 font-medium">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {vehicles.map(vehicle => (
                                                <tr key={vehicle.id} className="border-b border-gray-100">
                                                    <td className="py-4">
                                                        <div>
                                                            <div className="font-medium text-gray-800">{vehicle.name}</div>
                                                            <div className="text-sm text-gray-500">{vehicle.power}</div>
                                                        </div>
                                                    </td>
                                                    <td className="py-4">
                                                        <div className="text-gray-800">CZK {vehicle.basePrice.toLocaleString()}</div>
                                                    </td>
                                                    <td className="py-4">
                                                        <div className="text-gray-800">CZK {vehicle.priceWithoutVAT.toLocaleString()}</div>
                                                    </td>
                                                    <td className="py-4">
                                                        <button
                                                            onClick={() => {
                                                                setShowServiceModal(true);
                                                            }}
                                                            className="text-sm text-red-500 hover:text-red-600"
                                                            disabled={vehicles.length === 0}
                                                        >
                                                            View Services
                                                        </button>
                                                    </td>
                                                    <td className="py-4">
                                                        <div className="flex space-x-2">
                                                            <button
                                                                onClick={() => {
                                                                    setSelectedVehicle(vehicle);  // Set the selected vehicle before opening modal
                                                                    setShowPriceModal(true);
                                                                }}
                                                                className="p-2 text-gray-400 hover:text-gray-600"
                                                            >
                                                                <Edit3 className="w-5 h-5" />
                                                            </button>
                                                            <button
                                                                onClick={() => handleDeleteVehicle(vehicle.id)}  // Add delete functionality
                                                                className="p-2 text-gray-400 hover:text-red-500"
                                                            >
                                                                <Trash2 className="w-5 h-5" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Orders Tab Content */}
                    {activeTab === 'orders' && (
                        <div className="bg-white rounded-lg shadow">
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="relative">
                                            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="Search orders..."
                                                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                            />
                                        </div>
                                        <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                                            <option>All Status</option>
                                            <option>Pending</option>
                                            <option>Processing</option>
                                            <option>Completed</option>
                                            <option>Cancelled</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Orders Table */}
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="text-left text-sm text-gray-500 border-b border-gray-200">
                                                <th className="pb-3 font-medium">Order ID</th>
                                                <th className="pb-3 font-medium">Vehicle</th>
                                                <th className="pb-3 font-medium">Customer</th>
                                                <th className="pb-3 font-medium">Total Price</th>
                                                <th className="pb-3 font-medium">Status</th>
                                                <th className="pb-3 font-medium">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map(order => (
                                                <tr key={order.id} className="border-b border-gray-100">
                                                    <td className="py-4">
                                                        <div className="font-medium text-gray-800">{order.id}</div>
                                                    </td>
                                                    <td className="py-4">
                                                        <div className="text-gray-800">{order.vehicle}</div>
                                                    </td>
                                                    <td className="py-4">
                                                        <div className="text-gray-800">{order.customer}</div>
                                                    </td>
                                                    <td className="py-4">
                                                        <div className="text-gray-800">CZK {order.totalPrice.toLocaleString()}</div>
                                                    </td>
                                                    <td className="py-4">
                                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-yellow-50 text-yellow-600">
                                                            {order.status}
                                                        </span>
                                                    </td>
                                                    <td className="py-4">
                                                        <div className="flex space-x-2">
                                                            <button
                                                                className="p-2 text-gray-400 hover:text-blue-500"
                                                            >
                                                                <RefreshCcw className="w-5 h-5" />
                                                            </button>
                                                            <button
                                                                className="p-2 text-gray-400 hover:text-red-500"
                                                            >
                                                                <X className="w-5 h-5" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Pricing Tab Content */}
                    {activeTab === 'pricing' && (
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-bold mb-4">Service Pricing</h3>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {Object.entries(vehicles[0].services).map(([service, price]) => (
                                        <div key={service} className="p-4 border rounded-lg">
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-700 capitalize">
                                                    {service.replace(/([A-Z])/g, ' $1').trim()}
                                                </span>
                                                <span className="font-medium">CZK {price.toLocaleString()}</span>
                                            </div>
                                            <button
                                                className="mt-2 text-sm text-red-500 hover:text-red-600"
                                                onClick={() => setShowPriceModal(true)}
                                            >
                                                Edit Price
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Modals */}
            <PriceModal
                isOpen={showPriceModal}
                onClose={() => {
                    setShowPriceModal(false);
                    setSelectedVehicle(null);
                }}
                vehicle={selectedVehicle}
                onUpdate={handleUpdateVehicle}
            />

            <AddVehicleModal
                isOpen={showAddVehicleModal}
                onClose={() => setShowAddVehicleModal(false)}
                setVehicles={setVehicles}  // Add this line
            />

            <ServiceModal
                isOpen={showServiceModal}
                onClose={() => setShowServiceModal(false)}
                services={vehicles.length > 0 ? vehicles[0].services : {
                    carAudit: 0,
                    homeDelivery: 0,
                    fuel: 0,
                    importMOT: 0,
                    adminFee: 0,
                    registration: 0,
                    warranty: 0
                }}
            />
        </div>
    );
};

export default AdminDashboard;