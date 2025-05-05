import React from 'react';

const WorkWithGreatPeople = () => {
  return (
    <div className="py-16 px-8 md:px-16 bg-white">
      {/* Mission Statement */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
        <p className="text-center text-gray-800 max-w-4xl mx-auto text-base">
  At CompareBazaar, our mission is to empower both buyers and sellers through a seamless and transparent comparison platform. For buyers, we aim to deliver an exceptional experience that enables smart, informed purchasing decisions. For businesses, we provide valuable opportunities to showcase their products and services to the right audience—helping them grow and succeed in a competitive market.
</p>

      </div>

      {/* Three Pillars Section */}
     {/* Three Pillars Section */}
<div className="max-w-6xl mx-auto px-4 py-16">
  <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">The CompareBazaar Difference</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Pillar 1: Quality Connections */}
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-64 overflow-hidden">
        <img 
          src="https://img.freepik.com/free-vector/polygonal-wireframe-handshake-abstract-blue-composition-as-symbol-friendship-business-partnership-vector-illustration_1284-30758.jpg?t=st=1745655397~exp=1745658997~hmac=e6e1ba57120027e72c9e066432d92532452ea78fe132d17e42d37b8f7931ddb5&w=826" 
          alt="Business professionals connecting" 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-center text-[#000e54]">Meaningful Business Connections</h3>
        <div className="space-y-6">
          <div>
            <p className="font-semibold text-gray-800 mb-2">For Buyers:</p>
            <p className="text-gray-800">We don't just give you suppliers - we handpick up to 5 perfect matches who truly understand your requirements and can deliver competitive quotes tailored to your business.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800 mb-2">For Suppliers:</p>
            <p className="text-gray-800">Our smart matching system connects you with serious buyers who are ready to purchase. We've fine-tuned every step - from our marketing to our verification process - to ensure quality leads.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Pillar 2: Service */}
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-64 overflow-hidden">
        <img 
          src="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041853.jpg?t=st=1745654835~exp=1745658435~hmac=9189fb949aeff606b379425a88a513ce40c23cc1a6bcbca44996b7bb7d33c2e3&w=1380" 
          alt="Team collaborating on business growth" 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-center text-[#000e54]">Exceptional Service</h3>
        <div className="space-y-6">
          <div>
            <p className="font-semibold text-gray-800 mb-2">For Buyers:</p>
            <p className="text-gray-800">Our team isn't just responsive - we're proactive. From the moment you submit your request, we're working behind the scenes to connect you with the right suppliers, often within minutes, not days.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800 mb-2">For Suppliers:</p>
            <p className="text-gray-800">Consider us an extension of your sales team. Our experts understand your business and work tirelessly to present your offerings to qualified buyers who are ready to make decisions.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Pillar 3: Results */}
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-64 overflow-hidden">
        <img 
          src="https://img.freepik.com/free-photo/workplace-results-professional-report-accounting_1418-61.jpg?t=st=1745655860~exp=1745659460~hmac=d98c25c261f2177fd983e22540876c3f10fc4dcadace99b106096aa4b2644cf8&w=1380" 
          alt="Business team celebrating success" 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-center text-[#000e54]">Proven Results</h3>
        <div className="space-y-6">
          <div>
            <p className="font-semibold text-gray-800 mb-2">For Buyers:</p>
            <p className="text-gray-800">Stop wasting time with endless supplier searches. CompareBazaar delivers multiple competitive options in one place, saving you hours of research and helping you make informed decisions faster.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800 mb-2">For Suppliers:</p>
            <p className="text-gray-800">Grow your customer base without the marketing headaches. We bring qualified leads to you, serving as a risk-free extension of your sales efforts that delivers measurable ROI.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  
</div>
    </div>
  );
};

export default WorkWithGreatPeople;


























