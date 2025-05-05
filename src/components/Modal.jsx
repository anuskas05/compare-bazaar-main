import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-1000 flex items-center justify-center">
      {/* Semi-transparent backdrop */}
      <div 
        className="fixed inset-0 " 
        onClick={onClose}
      ></div>
      
      {/* Modal content - reduced size */}
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-130 mx-4 overflow-hidden z-10">
        {/* Header with title and close button */}
        <div className="flex items-center justify-between">
          {/* <h3 className="text-lg font-bold">Find the Right Business Phone System</h3> */}
          <h3></h3>
          {/* Visible close button */}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none p-4 pb-0"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        {/* Content container with fixed max height and no scrollbar */}
        <div className="p-4 pt-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;