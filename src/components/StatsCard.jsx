import React from 'react';

const StatsCard = ({ title, value, change, changeType, icon }) => {
  const changeColors = {
    positive: {
      bgColor: 'bg-green-100',
      textColor: 'text-green-800',
      iconSymbol: '↗'
    },
    negative: {
      bgColor: 'bg-red-100',
      textColor: 'text-red-800',
      iconSymbol: '↘'
    },
    neutral: {
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-800',
      iconSymbol: '→'
    }
  };

  // Default to neutral if changeType is not provided or invalid
  const colorConfig = changeColors[changeType] || changeColors.neutral;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-600 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide">{title}</h3>
        {icon && (
          <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-lg">
            {icon}
          </div>
        )}
      </div>
      <div className="flex items-center justify-between">
        <p className="text-3xl font-bold text-gray-900">{value}</p>
        {change && (
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${colorConfig.bgColor} ${colorConfig.textColor}`}>
            <span className="mr-1">{colorConfig.iconSymbol}</span>
            {change}
          </span>
        )}
      </div>
      <div className="mt-2 text-xs text-gray-500">
        Powered by Choppies Analytics
      </div>
    </div>
  );
};

export default StatsCard;