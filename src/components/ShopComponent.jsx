import React from 'react';

const ShopComponent = () => {
  const handleGetQuotes = () => {
    // Navigate to the BuyerZone form URL in the same tab
    window.location.href = 'http://www.buyerzone.com/telecom-equipment/business-phone-systems/rfqz/?publisherId=59578&publisherTypeId=1789';
  };

  return (
    <div className="bg-blue-900 text-center p-5 rounded-lg">
      <h1 className="text-xl font-bold text-white">Ready to Shop?</h1>
      <p className="mb-4 font-bold text-white">Receive up to 5 FREE price quotes from pre-qualified suppliers.</p>
      <button
        onClick={handleGetQuotes}
        className="px-4 py-2 text-sm bg-orange-500 text-white rounded-full shadow-lg hover:bg-white hover:text-orange-500 transition-colors duration-300"
      >
        GET FREE QUOTES
      </button>
    </div>
  );
};

export default ShopComponent;