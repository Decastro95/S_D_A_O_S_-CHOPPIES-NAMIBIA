import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/assets/choppies-logo.png" 
              alt="Choppies Logo" 
              className="h-12 w-auto bg-white rounded-lg p-1"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="hidden bg-red-500 text-white px-3 py-2 rounded-lg font-bold text-lg">
              CHOPPIES
            </div>
            <div>
              <h1 className="text-2xl font-bold">Choppies Namibia</h1>
              <p className="text-red-100 text-sm">Sales Analytics Dashboard</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-red-100">Great Value for Your Money!</p>
              <p className="text-xs text-red-200">Real-time Analytics & POS System</p>
            </div>
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">N</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-800 px-6 py-2">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <img 
              src="/assets/namibian-flag.png" 
              alt="Namibia Flag" 
              className="w-8 h-6 rounded border border-white/20"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'inline-block';
              }}
            />
            <div className="hidden w-8 h-6 bg-gradient-to-br from-blue-600 via-red-500 to-green-600 rounded border border-white/20"></div>
            <span>Namibia Regional Selector</span>
          </div>
          <div className="text-red-200">
            Last Updated: {new Date().toLocaleDateString('en-NA')}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;