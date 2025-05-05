// import React, { useState } from "react";
// import { ChevronDown, ChevronUp, List, BookOpen } from "lucide-react";

// const TableOfContents = ({ contents }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const scrollToSection = (slug) => {
//     const element = document.getElementById(slug);
//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop - 80, // Offset for fixed headers
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4 h-full flex flex-col">
//       <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
//         <div
//           className="bg-[#000e54] p-6 cursor-pointer flex justify-between items-center"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <div className="flex items-center space-x-3">
//             <List className="h-6 w-6 text-white" />
//             <h2 className="text-white font-bold text-xl">Table of Contents</h2>
//           </div>
//           {isOpen ? (
//             <ChevronUp className="h-6 w-6 text-white" />
//           ) : (
//             <ChevronDown className="h-6 w-6 text-white" />
//           )}
//         </div>

//         {isOpen && (
//           <div className="divide-y divide-gray-100 flex-grow overflow-auto max-h-[60vh]">
//             {contents.map((item) => (
//               <div
//                 key={item.id}
//                 className="p-5 flex items-center cursor-pointer transition-all duration-200 hover:bg-[#000e54] group"
//                 onClick={() => scrollToSection(item.slug)}
//               >
//                 <BookOpen className="h-5 w-5 mr-3 text-black group-hover:text-white" />
//                 <span className="text-lg text-black group-hover:text-white">
//                   {item.title}
//                 </span>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TableOfContents;
import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, List, BookOpen } from "lucide-react";

const TableOfContents = ({ contents }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (slug) => {
    const element = document.getElementById(slug);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for fixed headers
        behavior: "smooth",
      });
      setActiveSection(slug);
    }
  };
  
  // Track scroll position to update active section automatically
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Find the section that is currently in view
      let currentActive = null;
      
      for (const item of contents) {
        const element = document.getElementById(item.slug);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && 
              scrollPosition < offsetTop + offsetHeight) {
            currentActive = item.slug;
          }
        }
      }
      
      // Only update if we found a section in view
      if (currentActive) {
        setActiveSection(currentActive);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [contents]); // Removed activeSection from dependencies

  return (
    <div className="max-w-6xl mx-auto p-4 h-full flex flex-col">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
        <div
          className="bg-[#000e54] p-6 cursor-pointer flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center space-x-3">
            <List className="h-6 w-6 text-white" />
            <h2 className="text-white font-bold text-xl">Table of Contents</h2>
          </div>
          {isOpen ? (
            <ChevronUp className="h-6 w-6 text-white" />
          ) : (
            <ChevronDown className="h-6 w-6 text-white" />
          )}
        </div>
        
        {isOpen && (
          <div className="divide-y divide-gray-100 flex-grow overflow-auto max-h-[60vh]">
            {contents.map((item) => {
              const isActive = activeSection === item.slug;
              
              return (
                <div
                  key={item.id}
                  className="p-5 flex items-center cursor-pointer transition-all duration-200"
                  onClick={() => scrollToSection(item.slug)}
                >
                  <BookOpen 
                    className={`h-5 w-5 mr-3 transition-colors duration-200 ${
                      isActive ? "text-orange-500" : "text-black"
                    }`} 
                  />
                  <span 
                    className={`text-base transition-colors duration-200 hover:text-orange-500 ${
                      isActive ? "text-orange-500 font-medium" : "text-black"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TableOfContents;