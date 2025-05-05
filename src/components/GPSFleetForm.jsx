import React, { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { sendFormData } from './emailService';

const GPSFleetForm = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fleetSize: '',
    vehicleTypes: [],
    zipCode: '',
    email: '',
    firstName: '',
    lastName: '',
    companyName: '',
    phoneNumber: ''
  });
  const [errors, setErrors] = useState({
    zipCode: false,
    phoneNumber: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const captchaRef = useRef(null);

  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false);
        if (onClose) onClose();
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [showSuccess, onClose]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'zipCode') {
      // Only allow digits for ZIP code
      const numericValue = value.replace(/\D/g, '');
      
      // Validate ZIP code (must be 5 digits)
      setErrors(prev => ({
        ...prev,
        zipCode: numericValue.length > 0 && numericValue.length !== 5
      }));
      
      setFormData({
        ...formData,
        [name]: numericValue
      });
    } else if (name === 'phoneNumber') {
      // Phone number validation similar to BusinessPhoneSystemForm
      let phoneValue = value.replace(/[^\d+]/g, '');
      
      // Ensure it starts with +
      if (!phoneValue.startsWith('+') && phoneValue.length > 0) {
        phoneValue = '+' + phoneValue;
      }
      
      // Format as +XX followed by 10 digits
      if (phoneValue.length > 1) {
        const countryCode = phoneValue.slice(0, 3); // +XX
        const number = phoneValue.slice(3).replace(/\s/g, ''); // Remove any spaces
        
        phoneValue = countryCode + number;
      }
      
      setFormData({
        ...formData,
        [name]: phoneValue
      });
      
      // Validate phone number format using regex
      const phoneRegex = /^\+\d{2}\d{10}$/;
      setErrors(prev => ({
        ...prev,
        phoneNumber: phoneValue.length > 0 && !phoneRegex.test(phoneValue)
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      vehicleTypes: checked
        ? [...prev.vehicleTypes, value]
        : prev.vehicleTypes.filter(type => type !== value)
    }));
  };

  const nextStep = () => {
    // Validate current step before proceeding
    if (currentStep === 3) {
      // Validate zip code
      if (formData.zipCode.length !== 5) {
        setErrors(prev => ({
          ...prev,
          zipCode: true
        }));
        return;
      }
    }
    
    if (currentStep === 5) {
      // Validate phone number
      const phoneRegex = /^\+\d{2}\d{10}$/;
      if (!phoneRegex.test(formData.phoneNumber)) {
        setErrors(prev => ({
          ...prev,
          phoneNumber: true
        }));
        return;
      }
    }
    
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const resetForm = () => {
    setFormData({
      fleetSize: '',
      vehicleTypes: [],
      zipCode: '',
      email: '',
      fullName: '',
      companyName: '',
      phoneNumber: ''
    });
    setErrors({
      zipCode: false,
      phoneNumber: false
    });
    setCurrentStep(1);
    setCaptchaValue(null);
    if (captchaRef.current) {
      captchaRef.current.reset();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Final validation
    const zipCodeValid = formData.zipCode.length === 5;
    const phoneRegex = /^\+\d{2}\d{10}$/;
    const phoneNumberValid = phoneRegex.test(formData.phoneNumber);
    
    if (!zipCodeValid || !phoneNumberValid) {
      setErrors({
        zipCode: !zipCodeValid,
        phoneNumber: !phoneNumberValid
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const TEMPLATE_ID = 'template_rk2suh3'; // Replace with your actual template ID for this form
      const response = await sendFormData(formData, TEMPLATE_ID);
      console.log('Email sent successfully:', response);
      setShowSuccess(true);
      resetForm();
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Sorry, there was a problem submitting your information. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2 className="text-base font-semibold mb-3 text-gray-800">What is the size of the fleet you are looking to manage?</h2>
            <div className="space-y-2">
              {['1 - 4', '5 - 9', '10 - 19', '20 - 49', '50 - 99', '100 or more'].map((size) => (
                <div 
                  key={size}
                  className={`p-3 rounded-md bg-blue-50 cursor-pointer ${formData.fleetSize === size ? 'border-2 border-[#ff8633]' : ''}`}
                  onClick={() => handleInputChange({ target: { name: 'fleetSize', value: size } })}
                >
                  <label className="flex items-center cursor-pointer">
                    <div className="relative flex items-center justify-center">
                      <input 
                        type="radio" 
                        name="fleetSize" 
                        className="sr-only"
                        checked={formData.fleetSize === size}
                        onChange={() => {}}
                      />
                      <div className={`w-4 h-4 border rounded-full flex items-center justify-center ${formData.fleetSize === size ? 'bg-[#ff8633] border-[#ff8633]' : 'border-gray-400 bg-white'}`}>
                        {formData.fleetSize === size && (
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        )}
                      </div>
                    </div>
                    <span className="ml-2 text-sm text-gray-700">{size}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-base font-semibold mb-3 text-gray-800">What do you need to track?</h2>
            <div className="space-y-2">
              {['Vans or trucks', 'Heavy duty or semi trucks', 'Cars or limousines', 'Trailers', 'Construction machinery', 'Buses', 'Other'].map((type) => (
                <div 
                  key={type}
                  className={`p-3 rounded-md bg-blue-50 cursor-pointer ${formData.vehicleTypes.includes(type) ? 'border-2 border-[#ff8633]' : ''}`}
                  onClick={() => handleCheckboxChange({ target: { name: 'vehicleTypes', value: type, checked: !formData.vehicleTypes.includes(type) } })}
                >
                  <label className="flex items-center cursor-pointer">
                    <div className="relative flex items-center justify-center">
                      <input 
                        type="checkbox" 
                        name="vehicleTypes" 
                        className="sr-only"
                        checked={formData.vehicleTypes.includes(type)}
                        onChange={() => {}}
                      />
                      <div className={`w-4 h-4 border rounded-full flex items-center justify-center ${formData.vehicleTypes.includes(type) ? 'bg-[#ff8633] border-[#ff8633]' : 'border-gray-400 bg-white'}`}>
                        {formData.vehicleTypes.includes(type) && (
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        )}
                      </div>
                    </div>
                    <span className="ml-2 text-sm text-gray-700">{type}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-base font-semibold mb-3 text-gray-800">Please enter the ZIP / postal code where service is requested.</h2>
            <div className="relative">
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                placeholder="Zip Code"
                className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633] text-gray-700
                  ${errors.zipCode ? 'border-red-500' : 'border-gray-300'}`}
                maxLength="5"
              />
              {errors.zipCode && (
                <p className="text-red-500 text-xs mt-1">Please enter a valid 5-digit ZIP code</p>
              )}
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h2 className="text-base font-semibold mb-3 text-gray-800">Good news! We've found suppliers for you. Please tell us where to send your free quotes.</h2>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633] text-gray-700"
            />
            <p className="text-xs text-gray-600 mt-2">We respect your privacy and will securely store your email and will share your request with up to 5 suppliers.</p>
          </div>
        );
      case 5:
        return (
          <div>
            <h2 className="text-base font-semibold mb-3 text-gray-800">Last step! Fill in the last few details to get your free quotes!</h2>
            <div className="grid grid-cols-2 gap-3 mb-3">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="First Name"
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="Last Name"
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
                            />
                        </div>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Company Name"
              className="w-full p-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-[#ff8633] text-gray-700"
            />
            <div className="relative mb-3">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="+XX1234567890"
                className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 text-gray-700
                  ${errors.phoneNumber ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#ff8633]'}`}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">Please enter a valid phone number (+XX followed by 10 digits)</p>
              )}
            </div>
            <p className="text-xs text-gray-600 mt-2">
              By clicking "Next" below, I consent to receive automated marketing or other calls and texts which may use autodialer, prerecorded or artificial voice technology from or on behalf of Compare Bazar and up to five marketing partners in the phone number provided above, even if my number is listed on any state or national Do Not Call Registry. I understand consent is not a condition of purchase. By clicking "Next" below, I also agree to Compare Bazar's Terms of Use, including submitting any disputes to mandatory individual binding arbitration.
            </p>
          </div>
        );
      case 6:
        return (
          <div>
            <h2 className="text-base font-semibold mb-3 text-gray-800">Please verify that you're not a robot</h2>
            <ReCAPTCHA
              ref={captchaRef}
              sitekey="6LfrmSgrAAAAAGhs0-kgqJkRnFECkHTvrRY-4dMQ" // Replace with your reCAPTCHA site key
              onChange={(value) => setCaptchaValue(value)}
            />
          </div>
        );
      default:
        return null;
    }
  };

  const renderProgressDots = () => {
    const dots = [];
    for (let i = 1; i <= 6; i++) {
      dots.push(
        <div 
          key={i} 
          className={`h-2 w-2 rounded-full ${currentStep === i ? 'bg-[#ff8633]' : 'bg-gray-300'}`}
        ></div>
      );
    }
    return <div className="flex justify-center space-x-2 my-3">{dots}</div>;
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.fleetSize !== '';
      case 2:
        return formData.vehicleTypes.length > 0;
      case 3:
        return formData.zipCode !== '' && formData.zipCode.length === 5 && !errors.zipCode;
      case 4:
        return formData.email !== '' && formData.email.includes('@');
      case 5:
        const phoneRegex = /^\+\d{2}\d{10}$/;
        return formData.firstName !== '' && 
        formData.lastName !== '' && 
               formData.companyName !== '' && 
               formData.phoneNumber !== '' && 
               phoneRegex.test(formData.phoneNumber) &&
               !errors.phoneNumber;
      case 6:
        return captchaValue !== null;
      default:
        return true;
    }
  };

  return (
    <div className="w-full bg-white relative">
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm w-full border-l-4 border-[#ff8633] z-1000 slide-in-right">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-[#ff8633]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="ml-3 w-0 flex-1">
              <h3 className="text-base font-medium text-gray-900">Thank you!</h3>
              <p className="mt-1 text-xs text-gray-600">
                Your submission has been received. We will get back to you soon.
              </p>
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button
                onClick={() => setShowSuccess(false)}
                className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <span className="sr-only">Close</span>
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <div>
        <form onSubmit={handleSubmit}>
          <div className="px-1 py-2">
            {renderStep()}
          </div>
          
          <div className="mt-6 flex items-center">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center text-gray-600 px-3 py-1 rounded-md hover:bg-gray-100 text-sm"
                disabled={isSubmitting}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back
              </button>
            )}
            
            <button
              type="button"
              onClick={currentStep === 6 ? handleSubmit : nextStep}
              className={`ml-auto px-6 py-2 rounded-md font-medium text-sm ${
                isStepValid() 
                  ? 'bg-orange-400 hover:bg-orange-500 text-white' 
                  : 'bg-gray-300 cursor-not-allowed text-gray-500'
              }`}
              disabled={!isStepValid() || isSubmitting}
            >
              {isSubmitting 
                ? 'Processing...' 
                : currentStep === 6 
                  ? 'COMPARE PRICES' 
                  : 'NEXT'
              }
            </button>
          </div>
          
          {renderProgressDots()}
        </form>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .slide-in-right {
          animation: slideInRight 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default GPSFleetForm;