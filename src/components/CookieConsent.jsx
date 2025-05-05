import React, { useState, useEffect, useRef } from 'react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });
  
  const modalRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);
  const cookieSettingsRef = useRef(null);

  // Check cookie consent on component mount
  useEffect(() => {
    const consent = getCookie('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      initializeCookies();
    }
  }, []);

  // Load saved preferences when modal opens
  useEffect(() => {
    if (showModal) {
      const savedPreferences = getCookiePreferences();
      setPreferences({
        ...preferences,
        analytics: savedPreferences.analytics,
        marketing: savedPreferences.marketing
      });
      
      // Focus trap setup
      if (firstFocusableRef.current) {
        firstFocusableRef.current.focus();
      }
    }
  }, [showModal]);

  // Handle keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!showModal) return;
      
      if (e.key === 'Escape') {
        closeModal();
      }
      
      if (e.key === 'Tab') {
        if (!e.shiftKey && document.activeElement === lastFocusableRef.current) {
          e.preventDefault();
          firstFocusableRef.current.focus();
        } else if (e.shiftKey && document.activeElement === firstFocusableRef.current) {
          e.preventDefault();
          lastFocusableRef.current.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal]);

  // Cookie utility functions
  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    const secure = window.location.protocol === 'https:' ? 'secure;' : '';
    const sameSite = 'SameSite=Strict';
    document.cookie = `${name}=${value};${expires};path=/;${secure}${sameSite}`;
  };

  const getCookie = (name) => {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length);
      }
    }
    return null;
  };

  const setCookiePreferences = (prefs) => {
    setCookie('cookie_preferences', JSON.stringify(prefs), 365);
    localStorage.setItem('cookie_preferences', JSON.stringify(prefs));
  };

  const getCookiePreferences = () => {
    // Try to get preferences from cookies first
    const cookiePrefs = getCookie('cookie_preferences');
    if (cookiePrefs) {
      return JSON.parse(cookiePrefs);
    }

    // Fallback to localStorage
    const localPrefs = localStorage.getItem('cookie_preferences');
    if (localPrefs) {
      return JSON.parse(localPrefs);
    }

    // Default preferences
    return {
      necessary: true,
      analytics: false,
      marketing: false
    };
  };

  // Cookie actions
  const acceptAllCookies = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    
    setCookie('cookie_consent', 'all', 365);
    setCookiePreferences(allPreferences);
    setShowBanner(false);
    initializeCookies();
  };

  const rejectAllCookies = () => {
    const necessaryOnlyPreferences = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    
    setCookie('cookie_consent', 'necessary', 365);
    setCookiePreferences(necessaryOnlyPreferences);
    setShowBanner(false);
    initializeCookies();
  };

  const savePreferences = () => {
    setCookie('cookie_consent', 'custom', 365);
    setCookiePreferences(preferences);
    setShowModal(false);
    setShowBanner(false);
    initializeCookies();
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    if (cookieSettingsRef.current) {
      cookieSettingsRef.current.focus();
    }
  };

  // Cookie initialization
  const initializeCookies = () => {
    const currentPreferences = getCookiePreferences();
    
    // Initialize necessary cookies (always enabled)
    initializeNecessaryCookies();
    
    // Initialize analytics cookies if enabled
    if (currentPreferences.analytics) {
      initializeAnalyticsCookies();
    }
    
    // Initialize marketing cookies if enabled
    if (currentPreferences.marketing) {
      initializeMarketingCookies();
    }
  };

  const initializeNecessaryCookies = () => {
    console.log('Initializing necessary cookies');
    // Add necessary cookies initialization code here
  };

  const initializeAnalyticsCookies = () => {
    console.log('Initializing analytics cookies');
    // Add analytics cookies initialization code here
  };

  const initializeMarketingCookies = () => {
    console.log('Initializing marketing cookies');
    // Add marketing cookies initialization code here
  };

  const handleAnalyticsChange = (e) => {
    setPreferences({ ...preferences, analytics: e.target.checked });
  };

  const handleMarketingChange = (e) => {
    setPreferences({ ...preferences, marketing: e.target.checked });
  };
 // Define animation styles
 const slideUpAnimation = {
  animation: 'slideUp 0.3s ease-out',
};

const fadeInAnimation = {
  animation: 'fadeIn 0.2s ease-out',
};

const slideDownAnimation = {
  animation: 'slideDown 0.3s ease-out',
};

// Define keyframes in a style tag that will be inserted into the component
const keyframesStyle = `
  @keyframes slideUp {
    from { transform: translate(-50%, 100%); opacity: 0; }
    to { transform: translate(-50%, 0); opacity: 1; }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideDown {
    from { transform: translateY(-20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;
  return (
    <>
     <style>{keyframesStyle}</style>
      {/* Cookie Consent Banner */}
      {showBanner && (
        <div 
          className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white shadow-lg z-50 w-[90%] max-w-3xl rounded-xl p-4 border border-gray-200"
          style={slideUpAnimation}
          role="dialog"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-description"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <h3 id="cookie-title" className="text-lg font-medium text-gray-800 whitespace-nowrap mb-2 ml-1">🍪 We use cookies</h3>
              <p id="cookie-description" className="text-sm text-gray-600 leading-relaxed ml-2">
                We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
              <div className="flex gap-3 mt-1">
                <button
                  ref={cookieSettingsRef}
                  onClick={openModal}
                  className="text-sm text-[#ff8633] hover:bg-orange-50 px-2 py-1 rounded transition-colors cursor-pointer"
                  aria-haspopup="dialog"
                  aria-expanded={showModal}
                >
                  Settings
                </button>
                <a href="/PrivacyPolicy" className="text-sm text-[#ff8633] hover:bg-orange-50 px-2 py-1 rounded transition-colors">
                  Privacy
                </a>
                <a href="/TermsOfUse" className="text-sm text-[#ff8633] hover:bg-orange-50 px-2 py-1 rounded transition-colors">
                  Terms
                </a>
              </div>
            </div>
            <div className="flex gap-3 whitespace-nowrap">
              <button
                onClick={acceptAllCookies}
                className="px-4 py-2 bg-[#ff8633] text-white rounded-md hover:bg-gray-800 hover:-translate-y-0.5 transition-all font-medium text-sm cursor-pointer"
                aria-label="Accept all cookies"
              >
                Accept All
              </button>
              <button
                onClick={rejectAllCookies}
                className="px-4 py-2 bg-[#ff8633] text-white rounded-md hover:bg-gray-800 hover:-translate-y-0.5 transition-all font-medium text-sm cursor-pointer"
                aria-label="Reject non-necessary cookies"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center"
          style={fadeInAnimation}
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            ref={modalRef}
            className="bg-white w-[90%] max-w-md p-6 rounded-xl shadow-lg mx-4"
            style={slideDownAnimation}
          >
            <button
              ref={firstFocusableRef}
              onClick={closeModal}
              className="absolute right-5 top-4 text-2xl hover:bg-gray-100 rounded-full p-2 transition-colors"
              aria-label="Close cookie settings"
            >
              &times;
            </button>
            
            <h2 id="modal-title" className="text-xl font-bold mb-2">Cookie Settings</h2>
            <p id="modal-description" className="sr-only">
              Manage your cookie preferences below. You can enable or disable different types of cookies.
            </p>
            
            <div className="my-6 space-y-4">
              {/* Necessary Cookies */}
              <div className="flex items-start gap-4 p-3 border border-gray-200 rounded-lg hover:border-[#ff8633] hover:bg-[#ff8633]-50/30 transition-all">
                <label className="relative inline-block w-11 h-6">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="opacity-0 w-0 h-0 peer"
                    aria-label="Necessary cookies"
                  />
                  <span className="absolute cursor-not-allowed inset-0 bg-gray-300 rounded-full before:absolute before:content-[''] before:h-4 before:w-4 before:left-1 before:bottom-1 before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-5"></span>
                </label>
                <div>
                  <h4 className="text-base font-medium text-gray-800 mb-1">Necessary Cookies</h4>
                  <p className="text-sm text-gray-600">Required for the website to function properly.</p>
                </div>
              </div>
              
              {/* Analytics Cookies */}
              <div className="flex items-start gap-4 p-3 border border-gray-200 rounded-lg hover:border-[#ff8633] hover:bg-[#ff8633]-50/30 transition-all">
                <label className="relative inline-block w-11 h-6">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={handleAnalyticsChange}
                    className="opacity-0 w-0 h-0 peer"
                    aria-label="Analytics cookies"
                  />
                  <span className="absolute cursor-pointer inset-0 bg-gray-300 rounded-full before:absolute before:content-[''] before:h-4 before:w-4 before:left-1 before:bottom-1 before:bg-white before:rounded-full before:transition-transform before:duration-300 peer-checked:before:translate-x-5 peer-checked:bg-[#ff8633]"></span>
                </label>
                <div>
                  <h4 className="text-base font-medium text-gray-800 mb-1">Analytics Cookies</h4>
                  <p className="text-sm text-gray-600">Help us understand how visitors interact with our website.</p>
                </div>
              </div>
              
              {/* Marketing Cookies */}
              <div className="flex items-start gap-4 p-3 border border-gray-200 rounded-lg hover:border-[#ff8633] hover:bg-[#ff8633-50/30 transition-all">
                <label className="relative inline-block w-11 h-6">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={handleMarketingChange}
                    className="opacity-0 w-0 h-0 peer"
                    aria-label="Marketing cookies"
                  />
                  <span className="absolute cursor-pointer inset-0 bg-gray-300 rounded-full before:absolute before:content-[''] before:h-4 before:w-4 before:left-1 before:bottom-1 before:bg-white before:rounded-full before:transition-transform before:duration-300 peer-checked:before:translate-x-5 peer-checked:bg-[#ff8633]"></span>
                </label>
                <div>
                  <h4 className="text-base font-medium text-gray-800 mb-1">Marketing Cookies</h4>
                  <p className="text-sm text-gray-600">Used to deliver personalized advertisements.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <button
                ref={lastFocusableRef}
                onClick={savePreferences}
                className="px-4 py-2 bg-[#ff8633] text-white rounded-md hover:bg-[#000e54] hover:-translate-y-0.5 transition-all font-medium"
                aria-label="Save cookie preferences"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;