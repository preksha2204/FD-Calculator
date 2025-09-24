import React from 'react';
import { Calculator } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Credexa</h1>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <button className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">EN</button>
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
          JA
        </div>
      </div>
    </div>
  );
};

export default Header;