import React, { useState } from 'react';
import Header from './Header';
import CalculatorForm from './CalculatorForm';
import { calculateInterest } from '../utils/calculations';

const FixedDepositCalculator = () => {
  const [formData, setFormData] = useState({
    principalAmount: '',
    customerCategory1: '',
    customerCategory2: '',
    interestType: 'Compound',
    tenure: '',
    tenureUnit: 'Years'
  });

  const handleCalculate = () => {
    const calculatedResult = calculateInterest(formData);
    if (calculatedResult) {
      alert(`Maturity Amount: ₹${calculatedResult.maturityAmount}\nInterest: ₹${calculatedResult.interest}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Header />
        <div className="grid md:grid-cols-1 gap-8">
          <CalculatorForm 
            formData={formData} 
            setFormData={setFormData}
            onCalculate={handleCalculate}
          />
        </div>
        
        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>* Interest rates and calculations are for illustration purposes only. Actual rates may vary.</p>
        </div>
      </div>
    </div>
  );
}; // <-- This closing brace was missing

export default FixedDepositCalculator;
