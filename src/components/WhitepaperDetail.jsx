
import { useState, useEffect } from "react";
import WhitepaperForm from "./WhitePaperForm";

const WhitepaperDetail = ({ paper, onBack }) => {
  const [showForm, setShowForm] = useState(false);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <button 
        onClick={onBack}
        className="m-4 px-4 text-white text-base py-2 bg-[#000e54] rounded-md hover:bg-[#ff8633] transition-colors"
      >
        ← Back to Whitepapers
      </button>

      <div className="flex flex-col md:flex-row">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center bg-gray-50">
          <img 
            src={paper.image} 
            alt={paper.title}
            className="w-full max-w-md object-contain rounded-lg shadow-sm"
          />
          <div className="mt-6 text-center">
            <span className="text-6xl mb-4 block">{paper.icon}</span>
            <h2 className="text-xl font-semibold text-gray-800">{paper.title}</h2>
            <p className="text-[#ff8633] mt-2 ">By Compare Bazaar</p>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-1/2 p-8">
          <div className="mb-8">
            <h1 className="text-xl font-semibold text-gray-800 mb-4">
              Request Your Free Guide Now:
            </h1>
            <h2 className="text-lg font-semibold text-[#000e54] mb-4">
              "{paper.title}"
            </h2>
            <p className="text-gray-800 text-sm mb-6">
              {paper.fullDescription}
            </p>
          </div>

          <div className="border-t pt-6">
            <button
              onClick={() => setShowForm(true)}
              className="w-full py-3 bg-[#000e54] text-white font-bold rounded-md hover:bg-[#000e54] transition-colors"
            >
              DOWNLOAD
            </button>
          </div>
        </div>
      </div>

      {showForm && (
        <WhitepaperForm 
          paper={paper} 
          onClose={() => setShowForm(false)} 
        />
      )}
    </div>
  );
};

export default WhitepaperDetail;