"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye, EyeOff, User, FileText, Lock, Bell } from 'lucide-react';

const ProfileSection = ({ title, icon, children, isOpen, onToggle }) => {
  return (
    <div className="mb-4 bg-white rounded-lg shadow-sm">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-semibold text-gray-800">{title}</span>
        </div>
        {isOpen ? 
          <ChevronUp className="text-red-500" size={20} /> : 
          <ChevronDown className="text-red-500" size={20} />
        }
      </button>
      {isOpen && (
        <div className="p-4 border-t border-gray-100">{children}</div>
      )}
    </div>
  );
};

const Input = ({ label, type = "text", value = "", onChange, icon, ...props }) => (
  <div className="mb-4">
    <label className="block text-xs uppercase text-gray-600 mb-2">{label}</label>
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        {...props}
      />
      {icon && <span className="absolute right-2 top-1/2 -translate-y-1/2 text-red-500">{icon}</span>}
    </div>
  </div>
);

const Toggle = ({ label, description, checked, onChange }) => (
  <div className="flex items-center justify-between p-4 border-b border-gray-100 last:border-0">
    <div>
      <h3 className="font-medium text-gray-800">{label}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={onChange}
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-red-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
    </label>
  </div>
);

const UserProfile = () => {
  // Section toggle state
  const [sections, setSections] = useState({
    contact: false,
    billing: false,
    password: false,
    notifications: false
  });
  
  // Form states
  const [contactInfo, setContactInfo] = useState({
    name: '',
    surname: '',
    telephone: ''
  });

  const [billingInfo, setBillingInfo] = useState({
    street: '',
    houseNumber: '',
    postalCode: '',
    city: '',
    country: 'Czech Republic'
  });

  const [passwordInfo, setPasswordInfo] = useState({
    currentPassword: '',
    newPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    favorites: false,
    searches: false
  });

  const toggleSection = (section) => {
    setSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleContactChange = (field) => (e) => {
    setContactInfo(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleBillingChange = (field) => (e) => {
    setBillingInfo(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handlePasswordChange = (field) => (e) => {
    setPasswordInfo(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <div className=" p-10 w-[60%] mx-auto  min-h-[70vh]">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My profile</h1>

      <ProfileSection
        title="Contact information"
        icon={<User size={20} className="text-red-500" />}
        isOpen={sections.contact}
        onToggle={() => toggleSection('contact')}
      >
        <div className="grid md:grid-cols-2 gap-8">
          <Input 
            label="NAME" 
            placeholder="Name" 
            value={contactInfo.name}
            onChange={handleContactChange('name')}
          />
          <Input 
            label="SURNAME" 
            placeholder="Surname"
            value={contactInfo.surname}
            onChange={handleContactChange('surname')}
          />
        </div>
        <Input 
          label="TELEPHONE NUMBER"
          placeholder="+420 123456789"
          type="tel"
          value={contactInfo.telephone}
          onChange={handleContactChange('telephone')}
        />
        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-4">
          Save
        </button>
      </ProfileSection>

      <ProfileSection
        title="Billing information"
        icon={<FileText size={20} className="text-red-500" />}
        isOpen={sections.billing}
        onToggle={() => toggleSection('billing')}
      >
        <div className="flex gap-4 mb-6">
          <button className="flex-1 py-2 px-4 bg-red-500 text-white rounded">
            Consumer
          </button>
          <button className="flex-1 py-2 px-4 bg-gray-100 text-gray-600 rounded">
            Company
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Input 
            label="STREET" 
            placeholder="Street"
            value={billingInfo.street}
            onChange={handleBillingChange('street')}
          />
          <Input 
            label="HOUSE NUMBER" 
            placeholder="House number"
            value={billingInfo.houseNumber}
            onChange={handleBillingChange('houseNumber')}
          />
          <Input 
            label="POSTAL CODE" 
            placeholder="232 00"
            value={billingInfo.postalCode}
            onChange={handleBillingChange('postalCode')}
          />
          <Input 
            label="CITY" 
            placeholder="City"
            value={billingInfo.city}
            onChange={handleBillingChange('city')}
          />
          <Input 
            label="COUNTRY" 
            placeholder="Czech Republic"
            value={billingInfo.country}
            onChange={handleBillingChange('country')}
          />
        </div>
        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-4">
          Save
        </button>
      </ProfileSection>

      <ProfileSection
        title="Change password"
        icon={<Lock size={20} className="text-red-500" />}
        isOpen={sections.password}
        onToggle={() => toggleSection('password')}
      >
        <Input
          label="CURRENT PASSWORD"
          type={showPassword ? "text" : "password"}
          value={passwordInfo.currentPassword}
          onChange={handlePasswordChange('currentPassword')}
          icon={
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 
                <EyeOff size={20} className="text-red-500" /> : 
                <Eye size={20} className="text-red-500" />
              }
            </button>
          }
        />
        <Input
          label="NEW PASSWORD"
          type={showPassword ? "text" : "password"}
          value={passwordInfo.newPassword}
          onChange={handlePasswordChange('newPassword')}
          icon={
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 
                <EyeOff size={20} className="text-red-500" /> : 
                <Eye size={20} className="text-red-500" />
              }
            </button>
          }
        />
        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-4">
          Save
        </button>
      </ProfileSection>

      <ProfileSection
        title="Notification settings"
        icon={<Bell size={20} className="text-red-500" />}
        isOpen={sections.notifications}
        onToggle={() => toggleSection('notifications')}
      >
        <Toggle
          label="Favourite vehicles"
          description="Send notifications about discounts on favourite vehicles"
          checked={notifications.favorites}
          onChange={() => setNotifications(prev => ({
            ...prev,
            favorites: !prev.favorites
          }))}
        />
        <Toggle
          label="Saved searches"
          description="Send notifications of new offers based on saved search filters"
          checked={notifications.searches}
          onChange={() => setNotifications(prev => ({
            ...prev,
            searches: !prev.searches
          }))}
        />
      </ProfileSection>
    </div>
  );
};

export default UserProfile;