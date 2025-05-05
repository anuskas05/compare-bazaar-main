// import React, { useState } from 'react';
// import { Phone, Star, CheckCircle, ArrowRight } from 'lucide-react';

// const PhoneSystemCard = ({ system, onCompareQuotesClick }) => {
//   const [isHovered, setIsHovered] = useState(false);
  
//   return (
//     <div 
//       className="border-2 border-orange-500 rounded-xl shadow-lg p-4 flex flex-col bg-white relative overflow-hidden group mb-8 transition-all duration-300"
//       style={{
//         transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
//         boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Background Design Elements */}
//       <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-full -mr-12 -mt-12 opacity-70 transition-all duration-300 group-hover:scale-150"></div>
//       <div className="absolute bottom-0 left-0 w-20 h-20 bg-blue-100 rounded-full -ml-10 -mb-10 opacity-70 transition-all duration-300 group-hover:scale-150"></div>
      
//       {/* Highlighted Tag - Conditionally rendered */}
//       {system.isPopular && (
//         <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse z-20">
//           Popular
//         </div>
//       )}
      
//       {/* Header Section */}
//       <div className="mb-3 relative z-10">
//         <div className="text-xl font-bold text-gray-900 mb-1 text-center">{system.name}</div>
//         <div className="text-xs text-gray-600 text-center font-medium px-2 py-1 bg-gray-50 rounded-full inline-block mx-auto">{system.bestFor}</div>
//       </div>
      
//       {/* Logo Section */}
//       <div className="h-12 flex items-center justify-center mb-3 relative z-10 transition-transform duration-300 group-hover:scale-110">
//         {system.logo.startsWith('/images') ? (
//           <img src={system.logo} alt={system.name} className="h-12 object-contain" />
//         ) : (
//           <div className="text-2xl font-bold text-gray-700 bg-gray-50 p-3 rounded-lg w-full text-center">{system.logo}</div>
//         )}
//       </div>
      
//       {/* Feature List */}
//       <ul className="text-xs text-gray-700 space-y-2 mb-4 relative z-10 bg-gray-50 p-3 rounded-lg">
//         <li className="flex items-center gap-2">
//           <CheckCircle size={14} className="text-green-500" />
//           <span>{system.price}</span>
//         </li>
//         <li className="flex items-center gap-2">
//           <CheckCircle size={14} className="text-green-500" />
//           <span>{system.videoCapacity}</span>
//         </li>
//         <li className="flex items-center gap-2">
//           <CheckCircle size={14} className="text-green-500" />
//           <span>{system.support}</span>
//         </li>
//       </ul>
      
//       {/* Contact Info */}
//       {system.phone && (
//         <div className="mb-3 text-center relative z-10 transition-all duration-300 hover:scale-105">
//           <a
//             href={`tel:${system.phone}`}
//             className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2 font-medium text-sm"
//           >
//             <Phone size={14} className="animate-bounce" />
//             <span className="hover:underline">{system.phone}</span>
//           </a>
//         </div>
//       )}
      
//       {/* Additional Info */}
//       <div className="text-xs text-center text-gray-500 mb-3 relative z-10 italic">
//         {system.linkText}
//       </div>
      
//       {/* Button Section */}
//       <div className="mt-auto flex justify-center relative z-10">
//         <button
//           onClick={onCompareQuotesClick}
//           className="py-2 px-6 rounded-lg font-bold bg-orange-500 text-white hover:bg-orange-600 transition-all duration-200 flex items-center justify-center gap-2 group relative overflow-hidden w-4/5 mx-auto"
//         >
//           <span className="relative z-10 text-sm">Compare Quotes</span>
//           <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
//           <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
//         </button>
//       </div>
      
//       {/* Rating Indicator if available */}
//       {system.rating && (
//         <div className="absolute top-3 left-3 flex items-center gap-1 bg-white px-2 py-1 rounded-full shadow-md z-20">
//           <Star size={12} className="text-yellow-500 fill-yellow-500" />
//           <span className="text-xs font-bold">{system.rating}</span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PhoneSystemCard;
import React, { useState } from 'react';
import { Phone, Star, CheckCircle, ArrowRight, Award } from 'lucide-react';

const PhoneSystemCard = ({ system, onCompareQuotesClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  
  return (
    <div 
      className="border-2 border-orange-500 rounded-xl shadow-lg p-4 flex flex-col bg-white relative overflow-hidden group mb-8 transition-all duration-300"
      style={{
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        borderWidth: isHovered ? '2px' : '2px',
        borderImage: isHovered ? 'linear-gradient(45deg, #ff8a00, #ff5630) 1' : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Design Elements with enhanced animations */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full -mr-12 -mt-12 opacity-70 transition-all duration-500 group-hover:scale-150 group-hover:opacity-90"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-200 to-blue-100 rounded-full -ml-10 -mb-10 opacity-70 transition-all duration-500 group-hover:scale-150 group-hover:opacity-90"></div>
      <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-tl from-purple-100 to-pink-100 rounded-full opacity-0 transition-all duration-500 group-hover:opacity-80 group-hover:scale-150"></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
      
      {/* Highlighted Tag with improved animation */}
      {system.isPopular && (
        <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-20 flex items-center gap-1 shadow-md">
          <Award size={12} className="animate-pulse" />
          <span className="animate-pulse">Popular</span>
        </div>
      )}
      
      {/* Header Section with enhanced styling */}
      <div className="mb-3 relative z-10">
        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 mb-1 text-center transition-all duration-300 group-hover:from-orange-600 group-hover:to-orange-500">{system.name}</div>
        <div className="text-xs text-gray-600 text-center font-medium px-3 py-1 bg-gray-50 rounded-full inline-block mx-auto shadow-sm transition-all duration-300 group-hover:bg-orange-50 group-hover:shadow">{system.bestFor}</div>
      </div>
      
      {/* Logo Section with enhanced hover effect */}
      <div className="h-12 flex items-center justify-center mb-3 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:transform group-hover:rotate-1">
        {system.logo.startsWith('/images') ? (
          <img src={system.logo} alt={system.name} className="h-12 object-contain filter drop-shadow transition-all duration-300 group-hover:drop-shadow-md" />
        ) : (
          <div className="text-2xl font-bold text-gray-700 bg-gray-50 p-3 rounded-lg w-full text-center transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-orange-50 group-hover:to-white">{system.logo}</div>
        )}
      </div>
      
      {/* Feature List with improved styling and animation */}
      <ul className="text-xs text-gray-700 space-y-2 mb-4 relative z-10 bg-gray-50 p-3 rounded-lg transition-all duration-300 group-hover:shadow-inner group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50">
        {[system.price, system.videoCapacity, system.support].map((feature, index) => (
          <li key={index} className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-1">
            <CheckCircle size={14} className="text-green-500 transition-all duration-300 group-hover:text-green-600 group-hover:scale-110" />
            <span className="transition-all duration-300 group-hover:font-medium">{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* Contact Info with enhanced animation */}
      {system.phone && (
        <div className="mb-3 text-center relative z-10 transition-all duration-300 hover:scale-105">
          <a
            href={`tel:${system.phone}`}
            className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2 font-medium text-sm relative overflow-hidden group/phone"
          >
            <Phone size={14} className="transition-all duration-300 group-hover/phone:rotate-12" />
            <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 group-hover/phone:after:w-full">{system.phone}</span>
          </a>
        </div>
      )}
      
      {/* Additional Info with enhanced styling */}
      <div className="text-xs text-center text-gray-500 mb-3 relative z-10 italic transition-all duration-300 group-hover:text-gray-600">
        {system.linkText}
      </div>
      
      {/* Button Section with enhanced interactivity */}
      <div className="mt-auto flex justify-center relative z-10">
        <button
          onClick={onCompareQuotesClick}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          className="py-2 px-6 rounded-lg font-bold bg-orange-500 text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden w-4/5 mx-auto shadow-md hover:shadow-lg"
          style={{
            transform: isButtonHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        >
          <span className="relative z-10 text-sm transition-all duration-300 group-hover/btn:tracking-wider">Compare Quotes</span>
          <ArrowRight 
            size={16} 
            className="relative z-10 transition-all duration-300 group-hover/btn:translate-x-1" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-orange-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
        </button>
      </div>
      
      {/* Rating Indicator with enhanced styling */}
      {system.rating && (
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-white px-2 py-1 rounded-full shadow-md z-20 transition-all duration-300 group-hover:shadow-lg group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-yellow-50">
          <Star size={12} className="text-yellow-500 fill-yellow-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
          <span className="text-xs font-bold transition-all duration-300 group-hover:text-yellow-700">{system.rating}</span>
        </div>
      )}
      
      {/* Subtle border highlight effect */}
      <div className="absolute inset-0 rounded-xl border border-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-orange-200"></div>
    </div>
  );
};

export default PhoneSystemCard;

// import React, { useState, useEffect } from 'react';
// import { Phone, Star, CheckCircle, ArrowRight, Award, Sparkles, ThumbsUp } from 'lucide-react';

// const PhoneSystemCard = ({ system, onCompareQuotesClick }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isButtonHovered, setIsButtonHovered] = useState(false);
//   const [isClicked, setIsClicked] = useState(false);
//   const [animateFeature, setAnimateFeature] = useState(null);
  
//   // Reset click animation after a delay
//   useEffect(() => {
//     if (isClicked) {
//       const timer = setTimeout(() => {
//         setIsClicked(false);
//       }, 800);
//       return () => clearTimeout(timer);
//     }
//   }, [isClicked]);

//   // Random feature highlight effect
//   useEffect(() => {
//     if (isHovered) {
//       const interval = setInterval(() => {
//         setAnimateFeature(Math.floor(Math.random() * 3));
//         setTimeout(() => setAnimateFeature(null), 1000);
//       }, 2000);
//       return () => clearInterval(interval);
//     }
//   }, [isHovered]);
  
//   return (
//     <div 
//       className="border-2 border-orange-500 rounded-xl shadow-lg p-4 flex flex-col bg-white relative overflow-hidden group mb-8 transition-all duration-300"
//       style={{
//         transform: isHovered ? 'translateY(-12px)' : isClicked ? 'translateY(-5px)' : 'translateY(0)',
//         boxShadow: isHovered 
//           ? '0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)' 
//           : isClicked 
//           ? '0 15px 20px -3px rgba(0, 0, 0, 0.12), 0 8px 8px -4px rgba(0, 0, 0, 0.07)'
//           : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
//         borderImage: isHovered 
//           ? 'linear-gradient(45deg, #ff8a00, #ff5630) 1' 
//           : isClicked 
//           ? 'linear-gradient(135deg, #ff8a00, #ff5630, #ff8a00) 1'
//           : 'none'
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => {
//         setIsHovered(false);
//         setAnimateFeature(null);
//         setIsButtonHovered(false);
//       }}
//       onClick={() => setIsClicked(true)}
//     >
//       {/* Animated particle effects on hover */}
//       {isHovered && (
//         <>
//           <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-orange-500 rounded-full animate-ping"></div>
//           <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
//           <div className="absolute top-1/2 right-1/2 w-1 h-1 bg-yellow-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
//         </>
//       )}
      
//       {/* Enhanced Background Design Elements */}
//       <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full -mr-12 -mt-12 opacity-70 transition-all duration-500 group-hover:scale-150 group-hover:opacity-90"></div>
//       <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-200 to-blue-100 rounded-full -ml-10 -mb-10 opacity-70 transition-all duration-500 group-hover:scale-150 group-hover:opacity-90"></div>
//       <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-tl from-purple-100 to-pink-100 rounded-full opacity-0 transition-all duration-500 group-hover:opacity-80 group-hover:scale-150"></div>
      
//       {/* Advanced background pattern with pulse effect */}
//       <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
//       <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,154,103,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
      
//       {/* Shimmer effect on hover */}
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 blur-lg" 
//         style={{
//           backgroundSize: '200% 100%',
//           animation: isHovered ? 'shimmer 2s infinite' : 'none',
//           keyframes: {
//             shimmer: {
//               '0%': { backgroundPosition: '-100% 0' },
//               '100%': { backgroundPosition: '200% 0' }
//             }
//           }
//         }}>
//       </div>
      
//       {/* Enhanced Popular Tag */}
//       {system.isPopular && (
//         <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-20 flex items-center gap-1 shadow-md transition-all duration-300 group-hover:shadow-orange-200/50 group-hover:shadow-lg">
//           <Award size={12} className="animate-pulse" />
//           <span className="animate-pulse">Popular</span>
//           <Sparkles size={10} className="ml-1 animate-ping opacity-75" />
//         </div>
//       )}
      
//       {/* Enhanced Header Section */}
//       <div className="mb-3 relative z-10">
//         <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 mb-1 text-center transition-all duration-300 group-hover:from-orange-600 group-hover:to-orange-500 relative">
//           {system.name}
//           <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:w-1/2 group-hover:opacity-100 transition-all duration-500"></div>
//         </div>
//         <div className="text-xs text-gray-600 text-center font-medium px-3 py-1 bg-gray-50 rounded-full inline-block mx-auto shadow-sm transition-all duration-300 group-hover:bg-orange-50 group-hover:shadow group-hover:px-4">
//           {system.bestFor}
//         </div>
//       </div>
      
//       {/* Enhanced Logo Section */}
//       <div className="h-12 flex items-center justify-center mb-3 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:transform group-hover:rotate-1">
//         {system.logo.startsWith('/images') ? (
//           <div className="relative">
//             <img 
//               src={system.logo} 
//               alt={system.name} 
//               className="h-12 object-contain filter drop-shadow transition-all duration-300 group-hover:drop-shadow-md" 
//             />
//             {isHovered && (
//               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-50" 
//                 style={{
//                   animation: 'shine 1.5s ease-in-out infinite',
//                   backgroundSize: '200% 200%',
//                 }}>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="text-2xl font-bold text-gray-700 bg-gray-50 p-3 rounded-lg w-full text-center transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-orange-50 group-hover:to-white relative overflow-hidden">
//             {system.logo}
//             {isHovered && (
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30" 
//                 style={{
//                   transform: 'skewX(-20deg) translateX(-100%)',
//                   animation: 'shine 2s ease-in-out infinite',
//                 }}>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
      
//       {/* Enhanced Feature List */}
//       <ul className="text-xs text-gray-700 space-y-2 mb-4 relative z-10 bg-gray-50 p-3 rounded-lg transition-all duration-300 group-hover:shadow-inner group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50">
//         {[system.price, system.videoCapacity, system.support].map((feature, index) => (
//           <li 
//             key={index} 
//             className={`flex items-center gap-2 transition-all duration-300 hover:translate-x-1 p-1 rounded ${animateFeature === index ? 'bg-orange-50' : ''}`}
//             style={{
//               transform: animateFeature === index ? 'scale(1.05)' : 'scale(1)',
//             }}
//           >
//             <CheckCircle 
//               size={14} 
//               className={`text-green-500 transition-all duration-300 group-hover:text-green-600 ${animateFeature === index ? 'animate-bounce text-green-600' : ''}`} 
//             />
//             <span className={`transition-all duration-300 group-hover:font-medium ${animateFeature === index ? 'font-medium text-gray-900' : ''}`}>
//               {feature}
//             </span>
//             {animateFeature === index && (
//               <ThumbsUp size={12} className="text-orange-500 ml-auto animate-pulse" />
//             )}
//           </li>
//         ))}
//       </ul>
      
//       {/* Enhanced Contact Info */}
//       {system.phone && (
//         <div className="mb-3 text-center relative z-10 transition-all duration-300 hover:scale-105">
//           <a
//             href={`tel:${system.phone}`}
//             className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2 font-medium text-sm relative overflow-hidden group/phone"
//           >
//             <div className="relative">
//               <Phone size={14} className="transition-all duration-300 group-hover/phone:rotate-12" />
//               {isHovered && <div className="absolute inset-0 animate-ping opacity-30 text-blue-400"><Phone size={14} /></div>}
//             </div>
//             <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 group-hover/phone:after:w-full">
//               {system.phone}
//             </span>
//           </a>
//         </div>
//       )}
      
//       {/* Enhanced Additional Info */}
//       <div className="text-xs text-center text-gray-500 mb-3 relative z-10 italic transition-all duration-300 group-hover:text-gray-600">
//         {system.linkText}
//       </div>
      
//       {/* Enhanced Button Section */}
//       <div className="mt-auto flex justify-center relative z-10">
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             onCompareQuotesClick();
//           }}
//           onMouseEnter={() => setIsButtonHovered(true)}
//           onMouseLeave={() => setIsButtonHovered(false)}
//           className="py-2 px-6 rounded-lg font-bold bg-orange-500 text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden w-4/5 mx-auto shadow-md hover:shadow-lg"
//           style={{
//             transform: isButtonHovered ? 'scale(1.05)' : 'scale(1)',
//           }}
//         >
//           {/* Button click ripple effect */}
//           {isClicked && (
//             <span className="absolute inset-0 bg-white opacity-30 rounded-lg animate-ping"></span>
//           )}
          
//           <span className="relative z-10 text-sm transition-all duration-300 group-hover/btn:tracking-wider">
//             Compare Quotes
//           </span>
//           <ArrowRight 
//             size={16} 
//             className="relative z-10 transition-all duration-300 group-hover/btn:translate-x-1" 
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
//           <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-orange-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
          
//           {/* Animated light effect on button hover */}
//           {isButtonHovered && (
//             <div className="absolute inset-0 -translate-x-full animate-[shimmer_1s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
//           )}
//         </button>
//       </div>
      
//       {/* Enhanced Rating Indicator */}
//       {system.rating && (
//         <div className="absolute top-3 left-3 flex items-center gap-1 bg-white px-2 py-1 rounded-full shadow-md z-20 transition-all duration-300 group-hover:shadow-lg group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-yellow-50">
//           <div className="relative">
//             <Star size={12} className="text-yellow-500 fill-yellow-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
//             {isHovered && <div className="absolute inset-0 animate-ping opacity-30 text-yellow-300"><Star size={12} className="fill-yellow-300" /></div>}
//           </div>
//           <span className="text-xs font-bold transition-all duration-300 group-hover:text-yellow-700">{system.rating}</span>
//         </div>
//       )}
      
//       {/* Enhanced border highlight effect */}
//       <div className="absolute inset-0 rounded-xl border border-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-orange-200"></div>
      
//       {/* CSS for animations */}
//       <style jsx>{`
//         @keyframes shimmer {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
//         @keyframes shine {
//           0% { background-position: -200% 0; }
//           100% { background-position: 200% 0; }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PhoneSystemCard;