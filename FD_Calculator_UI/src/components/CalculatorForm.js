import React from 'react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import { customerCategories, interestTypes, tenureUnits } from '../constants/options';

const CalculatorForm = ({ formData, setFormData, onCalculate }) => {
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Fixed Deposit Calculator</h2>
      
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-6">Calculate Your Returns</h3>
        
        <div className="space-y-6">
          <FormInput
            label="Principal Amount"
            type="number"
            value={formData.principalAmount}
            onChange={(value) => handleInputChange('principalAmount', value)}
            placeholder="₹ 5,00,000"
          />

          <FormSelect
            label="Customer Category 1"
            value={formData.customerCategory1}
            onChange={(value) => handleInputChange('customerCategory1', value)}
            options={customerCategories}
            placeholder="Select Category"
            showBonus={true}
          />

          <FormSelect
            label="Customer Category 2"
            value={formData.customerCategory2}
            onChange={(value) => handleInputChange('customerCategory2', value)}
            options={customerCategories}
            placeholder="Select Category"
            showBonus={true}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormSelect
              label="Interest Type"
              value={formData.interestType}
              onChange={(value) => handleInputChange('interestType', value)}
              options={interestTypes}
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tenure</label>
              <div className="flex gap-2">
                <FormInput
                  type="number"
                  value={formData.tenure}
                  onChange={(value) => handleInputChange('tenure', value)}
                  placeholder="5"
                  className="flex-1"
                />
                <FormSelect
                  value={formData.tenureUnit}
                  onChange={(value) => handleInputChange('tenureUnit', value)}
                  options={tenureUnits}
                  className="px-4"
                />
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={onCalculate}
          className="w-full mt-8 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl transition-colors duration-200"
        >
          Calculate Returns
        </button>
      </div>
    </div>
  );
};

export default CalculatorForm;