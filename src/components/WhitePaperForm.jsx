

import { useState, useRef } from "react";

const WhitepaperForm = ({ paper, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subscribe: true
  });
  const [errors, setErrors] = useState({});
  const formContainerRef = useRef(null);

  // List of common free email domains
  const freeEmailDomains = [
    'gmail.com',
    'yahoo.com',
    'hotmail.com',
    'outlook.com',
    'aol.com',
    'icloud.com',
    'protonmail.com',
    'mail.com',
    'zoho.com',
    'yandex.com',
    'gmx.com',
    'live.com',
    'msn.com'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      // Check if it's a valid email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      } else {
        // Check if it's not a free email provider
        const domain = formData.email.split('@')[1].toLowerCase();
        if (freeEmailDomains.includes(domain)) {
          newErrors.email = 'Please use a company email address';
        }
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "4e9faa02-cb51-4253-98e6-b5794f4ece3a",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          whitepaper: paper.title,
          subscribe: formData.subscribe ? "Yes" : "No"
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
        
        // Trigger download
        const link = document.createElement('a');
        link.href = paper.downloadUrl;
        link.download = `${paper.title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 flex items-center justify-center p-4 z-50 bg-black/30 ">
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg className="h-6 w-6 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mt-3">Download Started!</h3>
            <p className="text-sm text-gray-500 mt-2">
              Your whitepaper "{paper.title}" is being downloaded.
            </p>
            <div className="mt-4">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-[#000e54] text-white rounded-md w-full sm:w-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
      {/* Modal container */}
      <div 
        ref={formContainerRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto my-8 max-h-[80vh] flex flex-col overflow-hidden border border-gray-200"
        style={{ marginTop: '5rem' }} // Ensures it doesn't overlap with navbar
      >
        {/* Header section */}
        <div className={`bg-gradient-to-r ${paper.color} flex items-center justify-between px-6 py-2 sticky top-0 z-10`}>
          <div>
            <h3 className="text-lg font-semibold text-white">Download Whitepaper</h3>
          </div>
          <button 
            type="button" 
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Paper info section */}
        <div className="flex items-center gap-4 m-4 p-4 bg-gray-50 rounded-md border border-gray-100">
          <div className="text-3xl">{paper.icon}</div>
          <div>
            <h3 className="font-semibold text-gray-800">{paper.title}</h3>
            <p className="text-sm text-gray-600">PDF Whitepaper</p>
          </div>
        </div>
        
        {/* Scrollable form content */}
        <div className="px-6 pb-4 overflow-y-auto flex-grow" style={{ maxHeight: '40vh' }}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg 
                    className="h-4 w-4 text-gray-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full pl-9 px-3 py-2 border rounded-md text-sm ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="John Smith"
                />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Email Address *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg 
                    className="h-4 w-4 text-gray-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-9 px-3 py-2 border rounded-md text-sm ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="john@companyname.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>
              <p className="mt-1 text-xs text-gray-500">Please use your work email (free email providers not accepted)</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg 
                    className="h-4 w-4 text-gray-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                    />
                  </svg>
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full pl-9 px-3 py-2 border rounded-md text-sm ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="subscribe"
                  name="subscribe"
                  type="checkbox"
                  checked={formData.subscribe}
                  onChange={handleChange}
                  className="focus:ring-[#000e54] h-4 w-4 text-[#000e54] border-gray-300 rounded"
                />
              </div>
              <div className="ml-3">
                <label htmlFor="subscribe" className="text-sm font-medium text-gray-700">
                  I'd like to receive updates about related products and services.
                </label>
              </div>
            </div>
          </form>
        </div>
        
        {/* Footer section */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 sticky bottom-0">
          <div className="flex flex-col sm:flex-row sm:justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 text-sm w-full sm:w-auto"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="px-4 py-2 bg-[#000e54] text-white rounded-md disabled:opacity-50 inline-flex items-center justify-center text-sm w-full sm:w-auto"
            >
              {isLoading ? 'Downloading...' : 'Download'}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                />
              </svg>
            </button>
          </div>
          
          <p className="mt-3 text-xs text-gray-500 text-center">
            Your privacy is important to us. We'll never share your information with third parties.
          </p>

          <div className="mt-3 p-3 bg-blue-50 rounded-md border border-blue-100">
            <p className="text-sm text-[#000e54] flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#000e54] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>By submitting this form, you'll receive immediate access to the whitepaper.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitepaperForm;