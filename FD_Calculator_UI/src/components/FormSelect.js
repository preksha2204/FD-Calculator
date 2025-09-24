import React from 'react';

const FormSelect = ({ 
  label, 
  value, 
  onChange, 
  options, 
  placeholder, 
  className = "", 
  showBonus = false 
}) => {
  const selectedOption = options.find(option => 
    (typeof option === 'object' ? option.value || option.name : option) === value
  );

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-white appearance-none ${className}`}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option, index) => {
            const optionValue = typeof option === 'object' ? (option.value || option.name) : option;
            const optionLabel = typeof option === 'object' ? option.name : option;
            const optionBonus = typeof option === 'object' ? option.bonus : null;
            
            return (
              <option key={index} value={optionValue}>
                {optionLabel} {showBonus && optionBonus ? optionBonus : ''}
              </option>
            );
          })}
        </select>
        
        {/* Custom dropdown arrow */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        {/* Show bonus for selected option */}
        {showBonus && selectedOption && selectedOption.bonus && (
          <div className="absolute right-10 top-1/2 transform -translate-y-1/2 text-green-500 font-medium text-sm">
            {selectedOption.bonus}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormSelect;