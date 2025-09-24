import React from 'react';

const FormInput = ({ label, type = "text", value, onChange, placeholder, className = "" }) => {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;