import { useState } from "react";
import WhitepaperCard from "./WhitepaperCard";
import WhitepaperDetail from "./WhitepaperDetail";
import { whitepapers } from "./whitepaperData";
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';

const WhitepaperList = () => {
  const [selectedPaper, setSelectedPaper] = useState(null);

  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      <h1 className="text-4xl font-semibold text-center mb-4 text-gray-900">
      Innovate Faster with Our Research Library
      </h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
      Our curated collection of whitepapers gives you the knowledge edge to stay ahead of trends, optimize operations, and drive measurable growth—all in one place.
      </p>

      {selectedPaper ? (
        <WhitepaperDetail 
          paper={selectedPaper} 
          onBack={() => setSelectedPaper(null)}
          standalone
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {whitepapers.map((paper) => (
            <div key={paper.id} className="w-full">
            <WhitepaperCard
              key={paper.id}
              paper={paper}
              onClick={() => setSelectedPaper(paper)}
              onDownloadClick={() => setSelectedPaper(paper)} // Added this prop
            />
            </div>
          ))}
        </div>
      )}
    </div>
    <WideDiv/>
    <Footer/>
    </>
  );
};

export default WhitepaperList;