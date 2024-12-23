"use client";
import React, { useState, useCallback, memo } from 'react';
import { ChevronLeft, ChevronRight, Check, ChevronDown, X, Info } from 'lucide-react';





const FinancingOptions = () => {
  // Primary form state
  const [loanAmount, setLoanAmount] = useState(45.3);
  const [period, setPeriod] = useState(36);
  const [downPayment, setDownPayment] = useState(4);
  const [showFinancingForm, setShowFinancingForm] = useState(false);
  const [formType, setFormType] = useState('consumer');

  // Form data state
  const [consumerFormData, setConsumerFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    street: '',
    streetNumber: '',
    postalCode: '',
    city: '',
    country: 'Czech Republic',
    citizenship: 'Czech Republic',
    birthPlace: '',
    idType: 'ID card',
    idNumber: '',
    idValidity: '',
    drivingLicense: '',
    dlNumber: '',
    dlValidity: '',
    maritalStatus: '',
    dependentRelatives: '',
    wayOfLiving: '',
    education: '',
    employmentType: '',
    startDate: '',
    companyName: '',
    companyId: '',
    companyPhone: '',
    monthlyIncome: '',
    householdIncome: '',
    otherInstallments: '',
    otherExpenses: ''
  });


  const [companyFormData, setCompanyFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    companyName: '',
    isVatPayer: false,
    companyRegNumber: '',
    street: '',
    streetNumber: '',
    postalCode: '',
    city: '',
    country: 'Czech Republic',
    sameAsContact: false,
    citizenship: 'Czech Republic',
    personalId: '',
    idType: 'ID card',
    idNumber: '',
    idValidity: '',
    docType2: 'Driving license',
    docNumber2: '',
    docValidity2: '',
    totalIncome: ''
  });



  // Memoized handlers
  const handleInputChange = (formType, field, value) => {
    if (formType === 'consumer') {
      setConsumerFormData(prev => ({ ...prev, [field]: value }));
    } else {
      setCompanyFormData(prev => ({ ...prev, [field]: value }));
    }
  };
  const handleIWantFinancing = useCallback(() => {
    setShowFinancingForm(true);
  }, []);

  // Memoized form components
  const FormInput = memo(({
    label,
    type = "text",
    field,
    value,
    placeholder,
    className = "",
    error,
    hint,
    prefix,
    suffix,
    formType
  }) => {
    const inputClassName = `w-full p-3 border rounded-lg text-sm ${suffix ? 'pr-12' : ''} ${className}`;

    // Remove useCallback from here
    return (
      <div className="space-y-1">
        {label && <label className="block text-xs text-gray-500">{label}</label>}
        <div className="relative">
          {prefix && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">{prefix}</div>}
          <input
            type={type}
            value={value || ''}
            // Simplified onChange handler
            onChange={(e) => handleInputChange(formType, field, e.target.value)}
            className={inputClassName}
            placeholder={placeholder}
          />
          {suffix && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">{suffix}</span>}
        </div>
        {error && <div className="text-red-500 text-xs">{error}</div>}
        {hint && <div className="text-xs text-gray-400">{hint}</div>}
      </div>
    );
  });

  const FormSelect = memo(({
    label,
    field,
    value,
    options,
    className = "",
    formType
  }) => {
    return (
      <div className="space-y-1">
        {label && <label className="block text-xs text-gray-500">{label}</label>}
        <div className="relative">
          <select
            value={value || ''}
            // Simplified onChange handler
            onChange={(e) => handleInputChange(formType, field, e.target.value)}
            className={`w-full p-3 border rounded-lg text-sm appearance-none ${className}`}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        </div>
      </div>
    );
  });



  const ConsumerForm = memo(() => {
    return (
      <div className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <FormInput
            label="NAME"
            field="name"
            value={consumerFormData.name}
            placeholder="Name"
            formType="consumer"
          />

          <FormInput
            label="SURNAME"
            field="surname"
            value={consumerFormData.surname}
            placeholder="Surname"
            formType="consumer"
          />

          <div className="space-y-1">
            <label className="block text-xs text-gray-500">TELEPHONE NUMBER</label>
            <div className="flex gap-2">
              <FormSelect
                options={[{ value: '+420', label: '+420' }]}
                className="w-24"
                formType="consumer"
                field="phonePrefix"
              />
              <FormInput
                field="phone"
                value={consumerFormData.phone}
                placeholder="674193684"
                className="flex-1"
                formType="consumer"
              />
            </div>
          </div>

          <FormInput
            label="EMAIL"
            type="email"
            field="email"
            value={consumerFormData.email}
            placeholder="Email"
            formType="consumer"
          />
        </div>

        {/* Permanent Address */}
        <div className="mb-6">
          <h3 className="text-red-500 font-medium mb-4">Permanent address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="STREET"
              field="street"
              value={consumerFormData.street}
              placeholder="Street"
              formType="consumer"
            />

            <div className="grid grid-cols-2 gap-4">
              <FormInput
                label="STREET NUMBER"
                field="streetNumber"
                value={consumerFormData.streetNumber}
                placeholder="Street number"
                formType="consumer"
              />
              <FormInput
                label="POSTAL CODE"
                field="postalCode"
                value={consumerFormData.postalCode}
                placeholder="22200"
                formType="consumer"
              />
            </div>

            <FormInput
              label="CITY"
              field="city"
              value={consumerFormData.city}
              placeholder="City"
              formType="consumer"
            />

            <FormSelect
              label="COUNTRY"
              field="country"
              value={consumerFormData.country}
              options={[{ value: 'Czech Republic', label: 'Czech Republic' }]}
              formType="consumer"
            />
          </div>
        </div>

        {/* Identification */}
        <div className="mb-6">
          <h3 className="text-red-500 font-medium mb-4">Identification</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormSelect
              label="CITIZENSHIP"
              field="citizenship"
              value={consumerFormData.citizenship}
              options={[{ value: 'Czech Republic', label: 'Czech Republic' }]}
              formType="consumer"
            />

            <FormInput
              label="PERSONAL IDENTIFICATION NUMBER"
              field="idNumber"
              value={consumerFormData.idNumber}
              placeholder="Personal identification number"
              formType="consumer"
            />

            <FormInput
              label="PLACE OF BIRTH"
              field="birthPlace"
              value={consumerFormData.birthPlace}
              placeholder="Place of birth"
              formType="consumer"
            />
          </div>
        </div>

        {/* Documents */}
        <div className="mb-6">
          <h3 className="text-red-500 font-medium mb-4">Documents</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormSelect
              label="TYPE OF THE 1ST DOCUMENT"
              field="idType"
              value={consumerFormData.idType}
              options={[
                { value: 'ID card', label: 'ID card' },
                { value: 'Passport', label: 'Passport' }
              ]}
              formType="consumer"
            />

            <FormInput
              label="VALIDITY OF THE 1ST DOCUMENT"
              type="date"
              field="idValidity"
              value={consumerFormData.idValidity}
              formType="consumer"
            />

            <FormSelect
              label="TYPE OF THE 2ND DOCUMENT"
              field="drivingLicense"
              value={consumerFormData.drivingLicense}
              options={[{ value: 'Driving license', label: 'Driving license' }]}
              formType="consumer"
            />

            <FormInput
              label="VALIDITY OF THE 2ND DOCUMENT"
              type="date"
              field="dlValidity"
              value={consumerFormData.dlValidity}
              formType="consumer"
            />
          </div>
        </div>

        {/* Personal state */}
        <div className="mb-6">
          <h3 className="text-red-500 font-medium mb-4">Personal state</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormSelect
              label="MARITAL STATUS"
              field="maritalStatus"
              value={consumerFormData.maritalStatus}
              options={[
                { value: '', label: 'Select marital status' },
                { value: 'Single', label: 'Single' },
                { value: 'Married', label: 'Married' },
                { value: 'Divorced', label: 'Divorced' }
              ]}
              formType="consumer"
            />

            <FormInput
              label="NUMBER OF DEPENDENT RELATIVES"
              type="number"
              field="dependentRelatives"
              value={consumerFormData.dependentRelatives}
              placeholder="Number of dependent relatives"
              formType="consumer"
            />

            <FormSelect
              label="WAY OF LIVING"
              field="wayOfLiving"
              value={consumerFormData.wayOfLiving}
              options={[
                { value: '', label: 'Select way of living' },
                { value: 'Own house', label: 'Own house' },
                { value: 'Rent', label: 'Rent' },
                { value: 'With parents', label: 'With parents' }
              ]}
              formType="consumer"
            />

            <FormSelect
              label="EDUCATION"
              field="education"
              value={consumerFormData.education}
              options={[
                { value: '', label: 'Select education' },
                { value: 'High school', label: 'High school' },
                { value: 'Bachelor', label: 'Bachelor' },
                { value: 'Master', label: 'Master' }
              ]}
              formType="consumer"
            />
          </div>
        </div>

        {/* Employment */}
        <div className="mb-6">
          <h3 className="text-red-500 font-medium mb-4">Employment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormSelect
              label="TYPE OF EMPLOYMENT"
              field="employmentType"
              value={consumerFormData.employmentType}
              options={[
                { value: '', label: 'Select employment type' },
                { value: 'Full-time', label: 'Full-time' },
                { value: 'Part-time', label: 'Part-time' },
                { value: 'Self-employed', label: 'Self-employed' }
              ]}
              formType="consumer"
            />

            <FormInput
              label="START DATE"
              type="date"
              field="startDate"
              value={consumerFormData.startDate}
              formType="consumer"
            />
          </div>
        </div>

        {/* Employer */}
        <div className="mb-6">
          <h3 className="text-red-500 font-medium mb-4">Employer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="COMPANY NAME"
              field="companyName"
              value={consumerFormData.companyName}
              placeholder="Company name"
              formType="consumer"
            />

            <FormInput
              label="COMPANY ID"
              field="companyId"
              value={consumerFormData.companyId}
              placeholder="Company ID"
              formType="consumer"
            />

            <div className="space-y-1">
              <label className="block text-xs text-gray-500">TELEPHONE NUMBER</label>
              <div className="flex gap-2">
                <FormSelect
                  options={[{ value: '+420', label: '+420' }]}
                  className="w-24"
                  formType="consumer"
                  field="companyPhonePrefix"
                />
                <FormInput
                  field="companyPhone"
                  value={consumerFormData.companyPhone}
                  placeholder="Company phone number"
                  className="flex-1"
                  formType="consumer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Incomes and expenses */}
        <div className="mb-6">
          <h3 className="text-red-500 font-medium mb-4">Incomes and expenses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="NET MONTHLY INCOME"
              type="number"
              field="monthlyIncome"
              value={consumerFormData.monthlyIncome}
              placeholder="Net monthly income"
              suffix="Kč"
              formType="consumer"
            />

            <FormInput
              label="NET MONTHLY HOUSEHOLD INCOME"
              type="number"
              field="householdIncome"
              value={consumerFormData.householdIncome}
              placeholder="Net monthly household income"
              suffix="Kč"
              formType="consumer"
            />

            <FormInput
              label="OTHER MONTHLY INSTALLMENTS"
              type="number"
              field="otherInstallments"
              value={consumerFormData.otherInstallments}
              placeholder="Other monthly installments"
              suffix="Kč"
              formType="consumer"
            />

            <FormInput
              label="OTHER MONTHLY EXPENSES"
              type="number"
              field="otherExpenses"
              value={consumerFormData.otherExpenses}
              placeholder="Other monthly expenses"
              suffix="Kč"
              formType="consumer"
            />
          </div>
        </div>

        {/* Success and Info Messages */}
        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <div className="flex items-start gap-2 text-green-800">
            <Check size={20} className="mt-1" />
            <div>
              <p className="font-medium">Thank you for completing the form</p>
              <p className="text-sm">Do not forget to give us your consent before submitting it, so that we can pass your data onto the provider.</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="text-sm text-blue-800">
            On business days (9 a.m. - 6 p.m.), we are usually able to obtain approval within 30 minutes.
            It is entirely up to you to decide whether you will take advantage of the financing; you can
            decide after receiving information about approval.
          </p>
        </div>

        {/* Consent and Buttons */}
        <div className="space-y-4">
          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              className="mt-1 rounded border-gray-300"
            />
            <span className="text-sm text-gray-700">
              I agree with the processing of the personal data for the purpose of arranging financing at financial-service provider.
            </span>
          </label>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition-colors text-sm">
              Check the financing options (non-binding)
            </button>
            <button className="flex-1 text-gray-700 py-3 px-6 rounded-lg border hover:bg-gray-50 transition-colors text-sm">
              Thank you, I'm not interested anymore
            </button>
          </div>
        </div>
      </div>
    );
  });

  const CompanyForm = memo(() => {
    return (
      <div className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-2 gap-4">
          <FormInput
            label="NAME"
            field="name"
            value={companyFormData.name}
            placeholder="Name"
            error="Name required"
            formType="company"
          />

          <FormInput
            label="SURNAME"
            field="surname"
            value={companyFormData.surname}
            placeholder="Surname"
            error="Surname required"
            formType="company"
          />

          <div className="space-y-1">
            <label className="block text-xs text-gray-500">TELEPHONE NUMBER</label>
            <div className="flex gap-2">
              <FormSelect
                options={[{ value: '+420', label: '+420' }]}
                className="w-24"
                formType="company"
                field="phonePrefix"
              />
              <FormInput
                field="phone"
                value={companyFormData.phone}
                placeholder="Telephone number"
                className="flex-1"
                hint="You must enter at least 9 characters"
                formType="company"
              />
            </div>
          </div>

          <FormInput
            label="EMAIL"
            type="email"
            field="email"
            value={companyFormData.email}
            placeholder="Email"
            error="Email address is required"
            formType="company"
          />
        </div>

        {/* Company Information */}
        <div className="space-y-4">
          <FormInput
            label="COMPANY NAME"
            field="companyName"
            value={companyFormData.companyName}
            placeholder="Company name (if you are self-employed, your first and last names)"
            formType="company"
          />

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="rounded border-gray-300"
              checked={companyFormData.isVatPayer}
              onChange={(e) => handleInputChange('company', 'isVatPayer', e.target.checked)}
            />
            <span className="text-sm">I'm a VAT payer</span>
          </label>

          <FormInput
            label="COMPANY REGISTRATION NUMBER"
            field="companyRegNumber"
            value={companyFormData.companyRegNumber}
            placeholder="Company registration number"
            formType="company"
          />
        </div>

        {/* Permanent Address */}
        <div>
          <h3 className="text-purple-600 font-medium mb-4">Permanent address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="STREET"
              field="street"
              value={companyFormData.street}
              placeholder="Street"
              formType="company"
            />

            <div className="grid grid-cols-2 gap-4">
              <FormInput
                label="STREET NUMBER"
                field="streetNumber"
                value={companyFormData.streetNumber}
                placeholder="Street number"
                formType="company"
              />
              <FormInput
                label="POSTAL CODE"
                field="postalCode"
                value={companyFormData.postalCode}
                placeholder="22200"
                formType="company"
              />
            </div>

            <FormInput
              label="CITY"
              field="city"
              value={companyFormData.city}
              placeholder="City"
              formType="company"
            />

            <FormSelect
              label="COUNTRY"
              field="country"
              value={companyFormData.country}
              options={[{ value: 'Czech Republic', label: 'Czech Republic' }]}
              formType="company"
            />
          </div>

          <div className="mt-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-gray-300"
                checked={companyFormData.sameAsContact}
                onChange={(e) => handleInputChange('company', 'sameAsContact', e.target.checked)}
              />
              <span className="text-sm text-indigo-600">The contact address is the same as the permanent one</span>
            </label>
          </div>
        </div>

        {/* Identification */}
        <div>
          <h3 className="text-purple-600 font-medium mb-4">Identification</h3>
          <div className="grid grid-cols-2 gap-4">
            <FormSelect
              label="CITIZENSHIP"
              field="citizenship"
              value={companyFormData.citizenship}
              options={[{ value: 'Czech Republic', label: 'Czech Republic' }]}
              formType="company"
            />

            <FormInput
              label="PERSONAL IDENTIFICATION NUMBER"
              field="personalId"
              value={companyFormData.personalId}
              placeholder="Personal identification number"
              formType="company"
            />
          </div>
        </div>

        {/* Documents */}
        <div>
          <h3 className="text-purple-600 font-medium mb-4">Documents</h3>
          <div className="grid grid-cols-3 gap-4">
            <FormSelect
              label="TYPE OF THE 1ST DOCUMENT"
              field="idType"
              value={companyFormData.idType}
              options={[{ value: 'ID card', label: 'ID card' }]}
              formType="company"
            />

            <FormInput
              label="NUMBER OF THE 1ST DOCUMENT"
              field="idNumber"
              value={companyFormData.idNumber}
              placeholder="Number of the 1st document"
              formType="company"
            />

            <FormInput
              label="VALIDITY OF THE 1ST DOCUMENT"
              field="idValidity"
              value={companyFormData.idValidity}
              placeholder="dd.mm.yyyy"
              formType="company"
            />

            <FormSelect
              label="TYPE OF THE 2ND DOCUMENT"
              field="docType2"
              value={companyFormData.docType2}
              options={[{ value: 'Driving license', label: 'Driving license' }]}
              formType="company"
            />

            <FormInput
              label="NUMBER OF THE 2ND DOCUMENT"
              field="docNumber2"
              value={companyFormData.docNumber2}
              placeholder="Number of the 2nd document"
              formType="company"
            />

            <FormInput
              label="VALIDITY OF THE 2ND DOCUMENT"
              field="docValidity2"
              value={companyFormData.docValidity2}
              placeholder="dd.mm.yyyy"
              formType="company"
            />
          </div>
        </div>

        {/* Financial Information */}
        <div>
          <h3 className="text-purple-600 font-medium mb-4">Financial information</h3>
          <div className="text-sm text-gray-500 mb-4">
            These details are not mandatory. If they are not entered the loan provider may ask for a late return.
          </div>
          <FormInput
            label="TOTAL INCOME"
            field="totalIncome"
            value={companyFormData.totalIncome}
            placeholder="Total income"
            suffix="Kč"
            formType="company"
          />
        </div>

        {/* Success Message */}
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-start gap-2 text-green-800">
            <Check size={20} className="mt-1" />
            <div>
              <p className="font-medium">Thank you for completing the form</p>
              <p className="text-sm">Do not forget to give us your consent before submitting it, so that we can pass your data onto the provider.</p>
            </div>
          </div>
        </div>

        {/* Info Message */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-800">
            On business days (9 a.m. - 6 p.m.), we are usually able to obtain approval within 30 minutes.
            It is entirely up to you to decide whether you will take advantage of the financing; you can
            decide after receiving information about approval.
          </p>
        </div>

        {/* Consent and Buttons */}
        <div className="space-y-4">
          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              className="mt-1 rounded border-gray-300"
            />
            <span className="text-sm text-indigo-600">
              I agree with the processing of the personal data for the purpose of arranging financing at financial-service provider.
            </span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors text-sm">
              Check the financing options (non-binding)
            </button>
            <button className="w-full text-gray-700 py-3 rounded-lg border hover:bg-gray-50 transition-colors text-sm">
              Thank you, I'm not interested anymore
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-white rounded-lg p-4 md:p-6 space-y-4 md:space-y-6 mb-6 md:mb-8">
      {!showFinancingForm ? (
        <>
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-xl font-semibold">Financing specifications</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="p-4 bg-red-500 text-white rounded-lg text-left">
              LoanForsmart
              <div className="text-sm mt-1">{loanAmount}%</div>
            </button>
            <button className="p-4 bg-gray-100 text-gray-500 rounded-lg text-left">
              Regular loan
              <div className="text-sm mt-1">Not available</div>
            </button>
          </div>

          <div>
            <label className="block mb-2 text-sm">Down payment (%)</label>
            <input
              type="range"
              min="0"
              max="100"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm mt-2 text-gray-500">
              <span>0%</span>
              <span>{downPayment}%</span>
              <span>100%</span>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm">Payback period</label>
            <input
              type="range"
              min="12"
              max="72"
              step="12"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm mt-2 text-gray-500">
              <span>12 months</span>
              <span>{period} months</span>
              <span>72 months</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium mb-4">Parameters of your financing option</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <div className="text-gray-500 text-sm mb-1">Monthly payment</div>
                <div className="font-medium">CZK 134,254</div>
              </div>
              <div>
                <div className="text-gray-500 text-sm mb-1">Interest rate</div>
                <div className="font-medium">7.29 %</div>
              </div>
              <div>
                <div className="text-gray-500 text-sm mb-1">RPSN</div>
                <div className="font-medium">7.55 %</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex gap-2 text-blue-800">
              <Info size={20} className="shrink-0 mt-1" />
              <p className="text-sm">
                The CarVerguard already includes the selected transport and other additional services.
                The financing option offered can finance both the car and the additional services.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleIWantFinancing}
              className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 text-sm md:text-base"
            >
              I want financing
            </button>
            <button className="flex-1 border border-red-500 text-gray-700 py-3 rounded-lg hover:bg-gray-50 text-sm md:text-base">
              I will pay in full
            </button>
          </div>
        </>
      ) : (
        <div>
          <div className="bg-white">
            <h2 className="text-xl font-semibold text-[#1E1B39] mb-4">Information about financing</h2>
            <p className="text-gray-600 text-sm mb-6">
              We need a few more details from you to establish the exact installment amount and to check whether the provider will approve your application. It will only take you a few minutes to complete the form.
            </p>
          </div>

          {/* Form Type Toggle */}
          <div className="flex mb-6">
            <button
              onClick={() => setFormType('consumer')}
              className={`flex-1 py-3 text-center text-sm transition-colors ${formType === 'consumer'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-700'
                }`}
            >
              Consumer
            </button>
            <button
              onClick={() => setFormType('company')}
              className={`flex-1 py-3 text-center text-sm transition-colors ${formType === 'company'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-700'
                }`}
            >
              Company
            </button>
          </div>

          {/* Information Notice */}
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="font-medium text-blue-900 mb-2">You should know...</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2">
                <Info size={16} className="mt-1 flex-shrink-0" />
                <span>valid ID and driver's license</span>
              </li>
              <li className="flex items-start gap-2">
                <Info size={16} className="mt-1 flex-shrink-0" />
                <span>a regular income (you are not in a probationary period or termination notice period)</span>
              </li>
              <li className="flex items-start gap-2">
                <Info size={16} className="mt-1 flex-shrink-0" />
                <span>account statements for the last 3 months</span>
              </li>
            </ul>
            <p className="text-xs text-blue-700 mt-3">
              Additional documents or verifications may be required in rare cases. We will inform you about the specific terms before you place an order for a car.
            </p>
          </div>

          {/* Render either Consumer or Company form based on formType */}
          {formType === 'company' ? <CompanyForm /> : <ConsumerForm />}
        </div>
      )}
    </div>
  );
};



const BankTransferForm = () => {
  return (
    <div className="bg-white rounded-lg p-4 md:p-6 space-y-4 md:space-y-6 mb-6 md:mb-8">
      {/* Car inspection info */}
      <div>
        <h3 className="text-lg font-medium text-[#1E1B39] mb-3">CarAudit™ vehicle inspection</h3>
        <p className="text-sm md:text-base text-gray-600">
          We want you to buy a car in the best possible condition and this is why we have to first of all
          thoroughly inspect the chosen car. You receive a details inspection report on the technical condition
          of the car, photo documentation and our recommendation. Then it is up to you, in your own time, to
          decide whether you want to buy the car.
        </p>
      </div>

      {/* Process Steps */}
      <div>
        <h4 className="font-medium text-[#1E1B39] mb-4">What happens after ordering the inspection</h4>
        <div className="space-y-4">
          {/* Step 1 */}
          <div id="step1" className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">1</div>
            <div>
              <p className="font-medium text-[#1E1B39] text-sm md:text-base">We get the car VIN from the dealer</p>
              <p className="text-sm text-gray-500">
                and we check this in legal status in European countries to see whether the car has been stolen or crashed
                and we also check the mileage.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div id="step2" className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">2</div>
            <div>
              <p className="font-medium text-[#1E1B39] text-sm md:text-base">We arrange a visit by a mechanic</p>
              <p className="text-sm text-gray-500">who checks the actual technical condition of the car.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div id="step3" className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">3</div>
            <div>
              <p className="font-medium text-[#1E1B39] text-sm md:text-base">In the case of a tax-deductible car, we check,</p>
              <p className="text-sm text-gray-500">to see whether the car really is tax-deductible.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div id="step4" className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">4</div>
            <div>
              <p className="font-medium text-[#1E1B39] text-sm md:text-base">You receive an inspection report</p>
              <p className="text-sm text-gray-500">
                including evaluation of the condition of the car. We assume a guarantee for this being the actual
                condition of the car and are liable to you for this if you subsequently decide to buy the car.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <div className="text-sm text-gray-500 line-through">CZK 4,990</div>
            <div className="text-xl font-medium text-[#1E1B39]">CZK 1,990</div>
          </div>
          <div className="flex items-center gap-2 text-green-600 text-sm">
            <Check size={16} className="shrink-0" />
            <span>Money-back guarantee if the car fails the inspection.</span>
          </div>
        </div>
      </div>

      {/* Billing Details Form */}
      <div>
        <h3 className="font-medium text-[#1E1B39] mb-4">Billing address</h3>

        {/* Type Toggle */}
        <div className="flex mb-6">
          <button className="flex-1 bg-red-500 text-white py-2 rounded-l-lg text-sm md:text-base">Consumer</button>
          <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-r-lg text-sm md:text-base">Company</button>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-xs text-gray-500">NAME</label>
            <input type="text" className="w-full p-2 md:p-3 border rounded-lg text-sm" placeholder="Name" />
            <div className="text-red-500 text-xs">Name required</div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs text-gray-500">SURNAME</label>
            <input type="text" className="w-full p-2 md:p-3 border rounded-lg text-sm" placeholder="Surname" />
            <div className="text-red-500 text-xs">Surname required</div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs text-gray-500">TELEPHONE NUMBER</label>
            <div className="flex gap-2">
              <select className="w-24 p-2 md:p-3 border rounded-lg text-sm">
                <option>+420</option>
              </select>
              <input type="tel" className="flex-1 p-2 md:p-3 border rounded-lg text-sm" placeholder="674193684" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs text-gray-500">BIRTH DATE</label>
            <input type="text" className="w-full p-2 md:p-3 border rounded-lg text-sm" placeholder="dd.mm.yyyy" />
          </div>

          {/* Billing Address Section */}
          <div className="col-span-full mt-4">
            <h4 className="text-red-500 font-medium text-sm md:text-base">Billing address</h4>
          </div>

          <div>
            <label className="block text-xs text-gray-500">STREET</label>
            <input type="text" className="w-full p-2 md:p-3 border rounded-lg text-sm" placeholder="Street" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs text-gray-500">HOUSE NUMBER</label>
              <input type="text" className="w-full p-2 md:p-3 border rounded-lg text-sm" placeholder="House number" />
            </div>
            <div>
              <label className="block text-xs text-gray-500">POSTAL CODE</label>
              <input type="text" className="w-full p-2 md:p-3 border rounded-lg text-sm" placeholder="222 00" />
            </div>
          </div>

          <div>
            <label className="block text-xs text-gray-500">CITY</label>
            <input type="text" className="w-full p-2 md:p-3 border rounded-lg text-sm" placeholder="City" />
          </div>

          <div>
            <label className="block text-xs text-gray-500">COUNTRY</label>
            <select className="w-full p-2 md:p-3 border rounded-lg text-sm">
              <option>Czech Republic</option>
            </select>
          </div>

          {/* Info Message */}
          <div className="col-span-full bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-blue-800">
              You cannot change the country any longer. If you need to make a change, please get in touch with our support.
            </p>
          </div>

          {/* Same Address Checkbox */}
          <div className="col-span-full">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-sm text-gray-700">Same as billing address</span>
            </label>
          </div>

          {/* Submit Button */}
          <button className="col-span-full w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors text-sm md:text-base">
            Confirm the data
          </button>
        </div>
      </div>
    </div>
  );
};

const PaymentMethod = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [activeSteps, setActiveSteps] = useState({
    payment: false,
    carAudit: false,
    delivery: false,
    additionalServices: false
  });

  const handleStepActivation = (payment) => {
    if (payment === 'bank') {
      setActiveSteps({
        payment: true,
        carAudit: true,
        delivery: false,
        additionalServices: false
      });
    } else if (payment === 'financing') {
      setActiveSteps({
        payment: true,
        carAudit: false,
        delivery: false,
        additionalServices: false
      });
    }
    setSelectedPayment(payment);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-[#F8F9FE]">
      {/* Payment Selection */}
      <div className='w-full mb-6'>
        {/* <div className="flex items-center gap-3 mb-4">
          <div className="text-lg text-[#1E1B39] font-medium">How to make a purchase</div>
          <button className="text-blue-600 text-sm">Find out more</button>
        </div> */}

        <div className="text-sm text-gray-500 uppercase mb-2">STEP 1</div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-medium text-[#1E1B39] mb-4">Are you interested in financing?</h2>
          <div className="space-y-3">
          <button
  onClick={() => handleStepActivation('financing')}
  className={`w-full p-4 border rounded-xl text-left transition-all ${
    selectedPayment === 'financing'
      ? 'border-2 border-red-500 bg-red-50'
      : 'border-gray-200'
  }`}
>
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPayment === 'financing' ? 'border-red-500' : 'border-gray-300'
                  }`}>
                  {selectedPayment === 'financing' && <div className="w-2.5 h-2.5 rounded-full bg-red-500" />}
                </div>
                <span className="text-[15px]">Yes, I'm interested</span>
              </div>
            </button>

            <button
  onClick={() => handleStepActivation('bank')}
  className={`w-full p-4 border rounded-xl text-left transition-all ${
    selectedPayment === 'bank'
      ? 'border-2 border-red-500 bg-red-50'
      : 'border-gray-200'
  }`}
>
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPayment === 'bank' ? 'border-red-500' : 'border-gray-300'
                  }`}>
                  {selectedPayment === 'bank' && <div className="w-2.5 h-2.5 rounded-full bg-red-500" />}
                </div>
                <span className="text-[15px]">No, I want to pay by bank transfer</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Render selected component */}
      {selectedPayment === 'financing' && <FinancingOptions />}
      {selectedPayment === 'bank' && <BankTransferForm />}


      {/* Steps Section */}
      {/* Steps Section */}
<div className="space-y-6">
  {/* Step 2 */}
  <div>
    <div className="text-sm text-gray-500 uppercase mb-2">STEP 2</div>
    <div className={`bg-white p-4 rounded-xl shadow-sm transition-all duration-300 ease-in-out ${
      activeSteps.carAudit ? 'bg-red-50 border-2 border-red-500' : ''
    }`}>
      <div className="flex items-center gap-3">
        <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-300 ${
          activeSteps.carAudit ? 'bg-red-500' : 'bg-gray-100'
        }`}>
          <Check className={`w-4 h-4 ${
            activeSteps.carAudit ? 'text-white' : 'text-gray-400'
          }`} />
        </div>
        <span className={`text-[15px] ${
          activeSteps.carAudit ? 'text-red-500 font-medium' : 'text-[#1E1B39]'
        }`}>
          CarAudit™ vehicle inspection
        </span>
      </div>
    </div>
  </div>

  {/* Step 3 */}
  <div>
    <div className="text-sm text-gray-500 uppercase mb-2">STEP 3</div>
    <div className="space-y-3">
      <div className={`bg-white p-4 rounded-xl shadow-sm transition-all duration-300 ${
        activeSteps.delivery ? 'bg-red-50 border-2 border-red-500' : ''
      }`}>
        <div className="flex items-center gap-3">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
            activeSteps.delivery ? 'bg-red-500' : 'bg-gray-100'
          }`}>
            <Check className={`w-4 h-4 ${
              activeSteps.delivery ? 'text-white' : 'text-gray-400'
            }`} />
          </div>
          <span className={`text-[15px] ${
            activeSteps.delivery ? 'text-red-500 font-medium' : 'text-[#1E1B39]'
          }`}>Delivery</span>
        </div>
      </div>

      <div className={`bg-white p-4 rounded-xl shadow-sm transition-all duration-300 ${
        activeSteps.additionalServices ? 'bg-red-50 border-2 border-red-500' : ''
      }`}>
        <div className="flex items-center gap-3">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
            activeSteps.additionalServices ? 'bg-red-500' : 'bg-gray-100'
          }`}>
            <Check className={`w-4 h-4 ${
              activeSteps.additionalServices ? 'text-white' : 'text-gray-400'
            }`} />
          </div>
          <span className={`text-[15px] ${
            activeSteps.additionalServices ? 'text-red-500 font-medium' : 'text-[#1E1B39]'
          }`}>Additional Services</span>
        </div>
      </div>

      <div className={`bg-white p-4 rounded-xl shadow-sm transition-all duration-300 ${
        activeSteps.additionalServices ? 'bg-red-50 border-2 border-red-500' : ''
      }`}>
        <div className="flex items-center gap-3">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
            activeSteps.additionalServices ? 'bg-red-500' : 'bg-gray-100'
          }`}>
            <Check className={`w-4 h-4 ${
              activeSteps.additionalServices ? 'text-white' : 'text-gray-400'
            }`} />
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-[15px] ${
              activeSteps.additionalServices ? 'text-red-500 font-medium' : 'text-[#1E1B39]'
            }`}>Fast Guard</span>
            <span className="text-xs text-red-500 bg-red-50 px-2 py-0.5 rounded">
              RECOMMENDED
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Step 4 */}
  <div>
    <div className="text-sm text-gray-500 uppercase mb-2">STEP 4</div>
    <div className={`bg-white p-4 rounded-xl shadow-sm transition-all duration-300 ${
      activeSteps.payment ? 'bg-red-50 border-2 border-red-500' : ''
    }`}>
      <div className="flex items-center gap-3">
        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
          activeSteps.payment ? 'bg-red-500' : 'bg-gray-100'
        }`}>
          <Check className={`w-4 h-4 ${
            activeSteps.payment ? 'text-white' : 'text-gray-400'
          }`} />
        </div>
        <span className={`text-[15px] ${
          activeSteps.payment ? 'text-red-500 font-medium' : 'text-[#1E1B39]'
        }`}>Payment</span>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default PaymentMethod;