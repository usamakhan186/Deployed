"use client";

import React, { useState, useRef, useEffect } from 'react';

import {
    ChevronLeft,
    ChevronRight,
    Heart,
    Share,
    Route,
    Calendar,
    Gauge,
    Settings,
    Fuel,
    X,
    Check,
    TrendingDown,
    ChevronDown,
    CreditCard,
    ShoppingCart,
    Info,
    Eye,
    EyeOff,
    Phone,

} from 'lucide-react';


// New Checkout Sidebar Component


const GuaranteeCard = () => {
    return (
        <div className="lg:w-[65%] py-8 pb-3 px-6">
            <div className="bg-red-100/50 rounded-xl p-8 relative overflow-hidden">
                {/* Circular gradient overlay */}
                <div className="absolute right-0 top-36 w-1/4 h-full bg-gray-50 bg-opacity-80 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative ">
                    {/* 14 days return policy */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="bg-orange-500 rounded-lg p-1">
                                <Check className="text-white w-5 h-5" />
                            </div>
                            <h3 className="text-[#1e2b4d] text-lg font-bold ml-3">14 days return policy</h3>
                        </div>
                        <p className="text-[#4a5578] text-base hidden lg:block">
                            If you don't fall in love with the car, simply return it to us.
                        </p>
                    </div>

                    {/* Risk-free purchase */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="bg-orange-500 rounded-lg p-1">
                                <Check className="text-white w-5 h-5" />
                            </div>
                            <h3 className="text-[#1e2b4d] text-lg font-bold ml-3">Risk-free purchase</h3>
                        </div>
                        <p className="text-[#4a5578] text-base hidden lg:block">
                            We are liable for the technical condition of each sold car.
                        </p>
                    </div>

                    {/* 6 months warranty */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="bg-orange-500 rounded-lg p-1">
                                <Check className="text-white w-5 h-5" />
                            </div>
                            <h3 className="text-[#1e2b4d] text-lg font-bold ml-3">6 months warranty</h3>
                        </div>
                        <p className="text-[#4a5578] text-base hidden lg:block">
                            In addition, with every car you receive an extended warranty.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};



const CheckoutSidebar = () => {
    const [isServicesExpanded, setIsServicesExpanded] = useState(false);
    const [isFinancingModalOpen, setIsFinancingModalOpen] = useState(false)
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        surname: '',
        countryCode: '+34',
        phone: '',
        country: '',
        postalCode: '',
        agreeToTerms: false
    });

    const handleSignup = (e) => {
        e.preventDefault();
        // Handle signup logic here
        setIsLoggedIn(true);
        setShowSignupModal(false);
    };

    const handleBuyClick = () => {
        if (!isLoggedIn) {
            setShowSignupModal(true);
        } else {
            // Handle purchase logic
            console.log('Proceeding with purchase...');
        }
    };
    const FinancingModal = ({ isOpen, onClose }) => {
        const [selectedOption, setSelectedOption] = useState('lowInstallment');
        const [monthsRange, setMonthsRange] = useState(48);
        const [downPayment, setDownPayment] = useState(0);

        return (
            <div
                className={`fixed inset-0 flex z-50 items-center justify-center ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    } transition-opacity duration-300`}
            >
                <div
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={onClose}
                />

                <div className="relative bg-white rounded-lg w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
                    <div className="p-4">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold text-gray-900">Financing</h2>
                            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Options Toggle */}
                        <div className="grid grid-cols-2 gap-3 mb-4"> {/* Reduced gap and margin */}
                            <div
                                className={`relative rounded-lg p-3 cursor-pointer ${selectedOption === 'lowInstallment' ? 'bg-red-500' : 'bg-gray-100'
                                    }`}
                                onClick={() => setSelectedOption('lowInstallment')}
                            >
                                <div className="flex items-center mb-1">
                                    <span className={`text-sm font-medium ${selectedOption === 'lowInstallment' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        Low installment
                                    </span>
                                    <span className="ml-1 px-1 text-xs bg-orange-500 text-white rounded">NEW</span>
                                </div>
                                <span className={`text-xs ${selectedOption === 'lowInstallment' ? 'text-white/80' : 'text-gray-600'
                                    }`}>
                                    €14.4 % choose low payments
                                </span>
                            </div>

                            {/* Regular loan option similar adjustments */}
                            <div
                                className={`relative rounded-lg p-3 cursor-pointer ${selectedOption === 'regularLoan' ? 'bg-red-500' : 'bg-gray-100'
                                    }`}
                                onClick={() => setSelectedOption('regularLoan')}
                            >
                                <div className="flex items-center mb-1">
                                    <span className={`text-sm font-medium ${selectedOption === 'regularLoan' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        Regular loan
                                    </span>
                                </div>
                                <span className={`text-xs ${selectedOption === 'regularLoan' ? 'text-white/80' : 'text-gray-600'
                                    }`}>
                                    8.8 % choose to avoid an increased final payment
                                </span>
                            </div>
                        </div>

                        {/* Sliders Section */}
                        <div className="space-y-4"> {/* Reduced spacing */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Payback period
                                </label>
                                <div className="flex items-center justify-between text-xs text-gray-600">
                                    <span>12 months</span>
                                    <span>60 months</span>
                                </div>
                                <input
                                    type="range"
                                    min="12"
                                    max="60"
                                    step="12"
                                    value={monthsRange}
                                    onChange={(e) => setMonthsRange(e.target.value)}
                                    className="w-full accent-red-500 mt-1"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Down payment (%) <span className="text-gray-500">0 % = ?</span>
                                </label>
                                <div className="flex justify-between text-xs text-gray-600">
                                    <span>10%</span>
                                    <span>60%</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="60"
                                    step="10"
                                    value={downPayment}
                                    onChange={(e) => setDownPayment(e.target.value)}
                                    className="w-full accent-red-500 mt-1"
                                />
                            </div>
                        </div>

                        {/* Payment Details */}
                        <div className="bg-gray-50 rounded-lg p-3 my-4"> {/* Adjusted padding and margin */}
                            <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                                <div>
                                    <div className="text-gray-600">DOWN PAYMENT (%) %</div>
                                    <div className="font-medium">€3,000</div>
                                </div>
                                <div>
                                    <div className="text-gray-600">INSTALLMENT</div>
                                    <div className="font-medium">48</div>
                                </div>
                                <div>
                                    <div className="text-gray-600">INTEREST RATE / APR</div>
                                    <div className="font-medium">7.79% / 8.01%</div>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-gray-600 text-xs">MONTHLY</div>
                                <div className="text-lg font-medium">€170</div>
                            </div>
                        </div>

                        {/* Info Link */}
                        <button className="w-full text-center text-sm text-red-500 hover:text-red-600 mb-4">
                            How does a regular loan work?
                        </button>

                        {/* Action Button */}
                        <button className="w-full bg-red-500 text-white py-2.5 rounded-lg flex items-center justify-center hover:bg-red-600">
                            <span>Next</span>
                            <ChevronRight className="w-4 h-4 ml-1" />
                        </button>

                        {/* Help Section */}
                        <div className="mt-4 text-center text-sm">
                            <div className="text-gray-600 mb-1">Need some advice?</div>
                            <a href="tel:+420244034700" className="flex items-center justify-center text-red-500 hover:text-red-600">
                                <Phone className="w-4 h-4 mr-1" />
                                +420 244 034 700
                            </a>
                        </div>

                        {/* Disclaimer */}
                        <p className="mt-3 text-xs text-gray-500 text-center">
                            The calculated amount is only a ballpark figure and does not represent a binding commercial quote.
                            The exact installment amount and interest rate may between providers depending on the final calculation.
                        </p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="relative">
            <div className="bg-white rounded-lg shadow-lg p-6">
                {/* Price Section */}
                <div className="mb-6">
                    <div className="flex justify-between items-start">
                        <span className="text-gray-600 font-bold text-2xl">Car price</span>
                        <div className="text-right">
                            <div className="text-2xl font-bold">€27,299</div>
                            <div className="text-sm text-gray-500">Price without VAT €22,561</div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <button
                    className="w-full bg-red-500 text-white py-3 rounded-lg mb-3 flex items-center justify-center hover:bg-red-600"
                    onClick={handleBuyClick}
                >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy
                </button>
                <button
                    onClick={() => setIsFinancingModalOpen(true)}
                    className="w-full border border-gray-200 py-3 rounded-lg mb-6 flex items-center justify-center hover:bg-gray-50"
                >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Financing €170/mo
                </button>

                {/* Financing Modal */}
                <FinancingModal
                    isOpen={isFinancingModalOpen}
                    onClose={() => setIsFinancingModalOpen(false)}
                />


                {/* Services Section */}
                <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Services total</span>
                        <div className="flex items-center">
                            <span className="font-bold">€364</span>
                            <ChevronDown
                                className={`w-5 h-5 ml-2 cursor-pointer transform transition-transform ${isServicesExpanded ? 'rotate-180' : ''}`}
                                onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                            />
                        </div>
                    </div>

                    {isServicesExpanded && (
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span>CarAudit™</span>
                                <span>€79</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <span>Car registration</span>
                                    <Info className="w-4 h-4 ml-1 text-gray-400" />
                                </div>
                                <span>€80</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <span>Administration Fee</span>
                                    <Info className="w-4 h-4 ml-1 text-gray-400" />
                                </div>
                                <span>€30</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <span>Import MOT</span>
                                    <Info className="w-4 h-4 ml-1 text-gray-400" />
                                </div>
                                <span>€175</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Total Price */}
                <div className="border-t mt-6 pt-4">
                    <div className="flex justify-between">
                        <div>
                            <div className="font-bold text-lg">Total price</div>
                            <div className="text-sm text-gray-500">Total price excluding VAT</div>
                        </div>
                        <div className="text-right">
                            <div className="font-bold text-lg">€27,663</div>
                            <div className="text-sm text-gray-500">€22,847</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Signup Modal */}
            <div
                className={`fixed inset-0 flex z-50 items-center justify-center ${showSignupModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    } transition-opacity duration-300`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={() => setShowSignupModal(false)}
                />

                {/* Modal */}
                <div
                    className={`relative bg-red-50/85 rounded-lg w-full max-w-md max-h-[90vh] transform transition-all duration-300 ${showSignupModal ? 'scale-100' : 'scale-95'
                        }`} // Changed bg-red-50/85 to bg-white
                >
                    <div className="px-8 pt-8 pb-6 max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-red-500">Create Account</h2> {/* Changed text color */}
                            <button
                                onClick={() => setShowSignupModal(false)}
                                className="text-gray-400 hover:text-gray-500 transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="text-sm text-gray-600">
                                Already have an account?{' '}
                                <button
                                    onClick={() => {
                                        setShowSignupModal(false);
                                        setShowLoginModal(true);
                                    }}
                                    className="text-red-500 hover:text-red-600 font-semibold"
                                >
                                    Login here
                                </button>
                            </div>

                            {/* Social Signup Buttons */}
                            <div className="grid grid-cols-2 gap-4 mb-2">
                                <button className="flex items-center justify-center px-4 py-2.5 border border-red-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
                                    <span className="text-sm font-medium text-gray-600">Google</span>
                                </button>
                                <button className="flex items-center justify-center px-4 py-2.5 border border-red-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-5 h-5 mr-2" />
                                    <span className="text-sm font-medium text-gray-600">Facebook</span>
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    {!showForm && (
                                        <button
                                            onClick={() => setShowForm(true)}
                                            className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 focus:outline-none rounded-md"
                                        >
                                            Sign up with email
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Signup Form */}
                            {showForm && (
                                <form onSubmit={handleSignup} className="space-y-4">
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="Email"
                                        className="w-full px-4 py-3 bg-red-50/30 border border-red-100 rounded-lg focus:ring-1 focus:ring-red-200 focus:border-red-200 outline-none transition-all"
                                    />

                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            value={formData.password}
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                            placeholder="Password (min. 8 characters)"
                                            className="w-full px-4 py-3 bg-red-50/30 border border-red-100 rounded-lg focus:ring-1 focus:ring-red-200 focus:border-red-200 outline-none transition-all"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Name"
                                            className="px-4 py-3 bg-red-50/30 border border-red-100 rounded-lg focus:ring-1 focus:ring-red-200 focus:border-red-200 outline-none transition-all"
                                        />
                                        <input
                                            type="text"
                                            value={formData.surname}
                                            onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                                            placeholder="Surname"
                                            className="px-4 py-3 bg-red-50/30 border border-red-100 rounded-lg focus:ring-1 focus:ring-red-200 focus:border-red-200 outline-none transition-all"
                                        />
                                    </div>

                                    <div className="flex gap-4">
                                        <select
                                            className="w-24 px-3 py-3 bg-red-50/30 border border-red-100 rounded-lg focus:ring-1 focus:ring-red-200 focus:border-red-200 outline-none transition-all"
                                            value={formData.countryCode}
                                            onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                                        >
                                            <option>+34</option>
                                        </select>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="Telephone number"
                                            className="flex-1 px-4 py-3 bg-red-50/30 border border-red-100 rounded-lg focus:ring-1 focus:ring-red-200 focus:border-red-200 outline-none transition-all"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <select
                                            className="px-4 py-3 bg-red-50/30 border border-red-100 rounded-lg focus:ring-1 focus:ring-red-200 focus:border-red-200 outline-none transition-all"
                                            value={formData.country}
                                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                        >
                                            <option value="">Select country</option>
                                        </select>
                                        <input
                                            type="text"
                                            value={formData.postalCode}
                                            onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                                            placeholder="Postal code"
                                            className="px-4 py-3 bg-red-50/30 border border-red-100 rounded-lg focus:ring-1 focus:ring-red-200 focus:border-red-200 outline-none transition-all"
                                        />
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <input
                                            type="checkbox"
                                            id="terms"
                                            checked={formData.agreeToTerms}
                                            onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                                            className="mt-1 rounded border-red-200 text-red-500 focus:ring-red-200"
                                        />
                                        <label htmlFor="terms" className="text-sm text-gray-600">
                                            I agree to the processing of{' '}
                                            <a href="#" className="text-red-500 hover:text-red-600">
                                                personal data
                                            </a>
                                            .
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full px-4 py-3 text-white bg-red-500 hover:bg-red-600 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                    >
                                        Register
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



const CarDetailPage = () => {
    const scrollRef = useRef(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const specs = [
        { icon: <Route className="w-[18px] h-[18px] stroke-[1.5]" />, text: "5 km" },
        { icon: <Calendar className="w-[18px] h-[18px] stroke-[1.5]" />, text: "10/2024" },
        { icon: <Gauge className="w-[18px] h-[18px] stroke-[1.5]" />, text: "95 kW (129 hp)" },
        { icon: <Settings className="w-[18px] h-[18px] stroke-[1.5]" />, text: "Manual" },
        { icon: <Fuel className="w-[18px] h-[18px] stroke-[1.5]" />, text: "Petrol" }
    ];

    const features = [
        "Keyless entry", "Apple CarPlay", "Android auto", "Heated front seats",
        "Blind spot assist", "Electrically heated side mirrors", "Alarm", "USB"
    ];

    const images = Array(8).fill('https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1lcmNlZGVzJTIwZTUzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60');

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'ArrowLeft') {
                scroll('left');
            } else if (event.key === 'ArrowRight') {
                scroll('right');
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const checkScroll = () => {
            setShowLeftArrow(container.scrollLeft > 0);
            setShowRightArrow(
                container.scrollLeft < container.scrollWidth - container.clientWidth - 1
            );
        };

        container.addEventListener('scroll', checkScroll);
        checkScroll();
        window.addEventListener('resize', checkScroll);

        return () => {
            container.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
        };
    }, []);

    const scroll = (direction) => {
        const container = scrollRef.current;
        if (container) {
            // Calculate the width of one image including margin
            const imageWidth = container.querySelector('div').offsetWidth + 4; // 4px for margin

            container.scrollTo({
                left: direction === 'left'
                    ? container.scrollLeft - imageWidth
                    : container.scrollLeft + imageWidth,
                behavior: 'smooth'
            });
        }
    };


    const openModal = (index) => {
        setSelectedImage(index);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    const navigateImage = (direction) => {
        if (direction === 'next') {
            setSelectedImage((prev) => (prev + 1) % images.length);
        } else {
            setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    return (
        <div className='bg-white'>
            {/* Mobile/Tablet Header */}
            <div className="md:hidden relative">
                <div className="absolute top-4 left-4 z-10">
                    <button onClick={() => window.location.href = '/cars'} className="p-2 bg-white/90 rounded-lg shadow-lg">
                        <ChevronLeft className="h-6 w-6 text-[#1a224f] stroke-[1.5]" />
                    </button>
                </div>
                <div className="absolute top-4 right-4 z-10">
                    <button className="p-2 bg-white/90 rounded-lg shadow-lg ml-2">
                        <Share className="h-6 w-6 text-[#1a224f] stroke-[1.5]" />
                    </button>
                </div>
            </div>

            {/* Desktop Header Section */}
            <div className="hidden md:block max-w-7xl mx-auto px-8 py-4">
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center">
                        <ChevronLeft className="h-6 w-6 text-[#1a224f] stroke-[1.5] mr-1" />
                        <h1 className="text-[28px] font-bold text-red-600/70 tracking-[-0.5px]">
                            Suzuki SX4 S-Cross 95 kW
                        </h1>
                    </div>
                    <div className="flex items-center space-x-6">
                        <button className="flex items-center text-red-500 hover:text-red-600">
                            <Heart className="h-5 w-5 mr-1.5 stroke-[1.5]" />
                            <span className="text-[14px] font-medium underline underline-offset-2">Favorites</span>
                        </button>
                        <button className="flex items-center text-red-500 hover:text-red-600">
                            <Share className="h-5 w-5 mr-1.5 stroke-[1.5]" />
                            <span className="text-[14px] font-medium underline underline-offset-2">Share</span>
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 mb-4">
                    {specs.map((spec, index) => (
                        <div key={index} className="flex items-center text-[#4a5578]">
                            <span className="mr-1.5 size-4">{spec.icon}</span>
                            <span className="text-[14px] font-bold">{spec.text}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                    {features.map((feature, index) => (
                        <span
                            key={index}
                            className="px-3 py-1.5 bg-red-100/70 text-red-600/80 rounded-lg text-[14px] font-medium"
                        >
                            {feature}
                        </span>
                    ))}
                </div>
            </div>

            {/* Image Slider Section */}
            <div className="relative w-full p-2">
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => openModal(index)}
                            className={`relative flex-shrink-0 w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-12px)] snap-start cursor-pointer ${index === 0 ? 'ml-0' : 'ml-4'
                                }`}
                            style={{ aspectRatio: '4/3' }}
                        >
                            <img
                                src={image}
                                alt={`Car view ${index + 1}`}
                                className="w-full h-full object-cover hover:opacity-90 transition-opacity rounded-lg"
                            />
                        </div>
                    ))}
                </div>

                {showLeftArrow && (
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>
                )}

                {showRightArrow && (
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>
                )}
            </div>
            {/* Mobile/Tablet Content Section */}
            <div className="md:hidden px-4 py-6">
                <h1 className="text-2xl font-bold text-red-600/70 tracking-[-0.5px] mb-4">
                    Suzuki SX4 S-Cross 95 kW
                </h1>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                    {specs.map((spec, index) => (
                        <div key={index} className="flex items-center text-[#4a5578]">
                            <span className="mr-1.5 size-4">{spec.icon}</span>
                            <span className="text-[14px] font-bold">{spec.text}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2">
                    {features.map((feature, index) => (
                        <span
                            key={index}
                            className="px-3 py-1.5 bg-red-100/70 text-red-600/80 rounded-lg text-[14px] font-medium"
                        >
                            {feature}
                        </span>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <GuaranteeCard />

                {/* New flexbox container for main content and sidebar */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main content area */}
                    <div className="flex-1">
                        {/* <AppBar /> */}

                        {/* Details Section */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {specs.map((spec, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-100">
                                        <div className="text-gray-400">{spec.icon}</div>
                                        <span className="text-gray-700">{spec.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Features Section */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                                        <Check className="w-5 h-5 text-green-500" />
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Checkout Sidebar */}
                    <div className="lg:w-[380px]">
                        <div className="sticky top-24">
                            <CheckoutSidebar />
                        </div>
                    </div>
                </div>
            </div>




            {/* Modal Viewer */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
                    <button
                        onClick={closeModal}
                        className="absolute right-4 top-4 text-white hover:text-gray-300 z-50"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div className="h-full flex items-center justify-center relative w-full">
                        <img
                            src={images[selectedImage]}
                            alt={`Car view ${selectedImage + 1}`}
                            className="max-h-[85vh] max-w-[85vw] object-contain"
                        />

                        <div className="absolute bottom-4 right-4 bg-black/50 px-4 py-2 rounded-lg">
                            <span className="text-white text-sm">
                                {selectedImage + 1} / {images.length}
                            </span>
                        </div>

                        <button
                            onClick={() => navigateImage('prev')}
                            className="absolute left-4 p-2 bg-white/10 rounded-lg hover:bg-white/20"
                        >
                            <ChevronLeft className="w-8 h-8 text-white" />
                        </button>

                        <button
                            onClick={() => navigateImage('next')}
                            className="absolute right-4 p-2 bg-white/10 rounded-lg hover:bg-white/20"
                        >
                            <ChevronRight className="w-8 h-8 text-white" />
                        </button>
                    </div>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${selectedImage === index ? 'bg-white' : 'bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            )}

            <style>
                {`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    `}
            </style>
            {/* <GuaranteeCard />
            <AppBar /> */}
        </div>
    );
};

export default CarDetailPage;