import { useState } from 'react';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';
import { useRef} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';


const DonotSellMyInfo = () => {
  const [optOutStatus, setOptOutStatus] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const captchaRef = useRef(null);
  const [captchaValue, setCaptchaValue] = useState(null);
  
  const [formData, setFormData] = useState({
    requestType: '',
    informationType: [],
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    details: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      requestType: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prevState => {
      const informationType = [...prevState.informationType];
      if (checked) {
        if (!informationType.includes(name)) {
          informationType.push(name);
        }
      } else {
        const index = informationType.indexOf(name);
        if (index !== -1) {
          informationType.splice(index, 1);
        }
      }
      return {
        ...prevState,
        informationType
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    
    // CAPTCHA validation - show error if not completed
    if (!captchaValue) {
      setSubmitError("Please verify that you're not a robot before submitting");
      setIsSubmitting(false);
      return;
    }
    
    setIsSubmitting(true);
    
    const submissionData = {
      access_key: "4e9faa02-cb51-4253-98e6-b5794f4ece3a", // replace this with your actual key
      subject: "New Do Not Sell/Share My Personal Information",
      from_name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      request_type: formData.requestType,
      information_types: formData.informationType.join(', '),
      phone: formData.phone,
      details: formData.details,
      captcha_token: captchaValue // Including the captcha token for verification
    };
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(submissionData)
      });
      
      const result = await response.json();
      if (result.success) {
        setSubmitSuccess(true);
        setFormData({
          requestType: '',
          informationType: [],
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          details: ''
        });
        
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        setSubmitError("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting to Web3Forms:", error);
      setSubmitError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
      
      // Reset the captcha after submission
      if (captchaRef.current) {
        captchaRef.current.reset();
      }
      setCaptchaValue(null);
    }
  };


  return (
    <>
    <Navbar/>
    <div className="max-w-6xl py-10 mx-auto px-4 bg-white rounded-lg">
      <h1 className="text-4xl font-semibold mb-6 text-gray-900">Your Privacy Choices</h1>

      {/* Privacy Information Section */}
      <div className="space-y-6 mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Privacy Rights</h2>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="text-base font-semibold text-[#000e54] mb-2">Quick Summary</h3>
          <p className="text-[#000e54] text-base">
            You have the right to tell businesses to stop selling or sharing your personal information.
            This page explains what that means and how it affects your experience with our services.
          </p>
        </div>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Legal Basis for These Rights</h3>
          <p className="mb-4 text-base text-gray-800">
            These rights are granted to you under several privacy laws, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-base text-gray-800">
            <li>
              California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
              Provide California residents with the right to opt-out of the sale or sharing of their personal information.
            </li>
            <li>
              General Data Protection Regulation (GDPR):
              Gives EU residents control over how their data is processed and shared.
            </li>
            <li>
             Virginia Consumer Data Protection Act (VCDPA) and other state laws:
              Similar rights are emerging in other US states.
            </li>
          </ul>
          <p className="text-base text-gray-800">
            Note: These rights may apply to you based on your location and residency status.
          </p>
        </section>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Detailed Definitions</h3>
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 text-base mb-2">What Constitutes "Selling" Personal Information?</h4>
            <p className="mb-2 text-base text-gray-800">
              Under privacy laws, "selling" means disclosing personal information to a third party in exchange for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-base text-gray-800">
              <li>Monetary payment</li>
              <li>Non-monetary benefits like services or goods</li>
              <li>Other valuable consideration</li>
            </ul>
            <p className='text-base text-gray-800'>
              Example: If we provide your email address to an advertising network in exchange for analytics services,
              this could be considered a "sale" under some privacy laws.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold teat-gray-800 text-base mb-2">What Constitutes "Sharing" Personal Information?</h4>
            <p className="mb-2 text-base text-gray-800">
              "Sharing" specifically refers to disclosing personal information to third parties for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-base text-gray-800">
              <li>Cross-context behavioral advertising</li>
              <li>Interest-based advertising</li>
              <li>Profiling for targeted marketing</li>
            </ul>
            <p className='text-base text-gray-800'>
              Example: If we allow a social media platform to use your browsing history on our site to show you
              targeted ads on their platform, this would be considered "sharing."
            </p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-xl text-[#000e54] mb-2">Important Exceptions</h4>
            <p className="text-[#000e54] text-base">
              Not all data disclosures constitute "selling" or "sharing." Exceptions include:
              disclosures to service providers, for legal compliance, as part of mergers/acquisitions,
              or with your explicit consent.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Scope of Personal Information Covered</h3>
          <p className="mb-4 text-base text-gray-800">
            This opt-out applies to all personal information we collect about you, including:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-xl mb-2 text-gray-800">Identifiers</h4>
              <ul className="list-disc pl-5 space-y-1 text-base text-gray-800">
                <li>Name, alias</li>
                <li>Postal address</li>
                <li>Email address</li>
                <li>IP address</li>
                <li>Account name</li>
                <li>Social Security number</li>
                <li>Driver's license number</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-xl text-gray-800">Commercial Information</h4>
              <ul className="list-disc pl-5 space-y-1 text-base text-gray-800">
                <li>Purchase history</li>
                <li>Products/services considered</li>
                <li>Consumer tendencies</li>
                <li>Payment information</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-xl mb-2 text-gray-800">Online Activity</h4>
              <ul className="list-disc pl-5 space-y-1 text-base text-base text-gray-800">
                <li>Browsing history</li>
                <li>Search history</li>
                <li>Interactions with our website</li>
                <li>Cookies and tracking data</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-xl text-gray-800">Other Information</h4>
              <ul className="list-disc pl-5 space-y-1 text-base text-gray-800">
                <li>Geolocation data</li>
                <li>Professional/employment information</li>
                <li>Education information</li>
                <li>Inferences drawn from any data</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">How We Collect This Information</h3>
          <p className="mb-4 text-base">
            We collect personal information through various methods, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-base text-gray-800">
            <li>
              Directly from you: When you create an account, make a purchase, or contact us
            </li>
            <li>
              Automatically: Through cookies and tracking technologies when you use our website
            </li>
            <li>
              From third parties: Such as social media platforms, advertising networks, and data brokers
            </li>
            <li>
              From service providers: Who assist us with various business functions
            </li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Why We Sell/Share Information</h3>
          <p className="mb-4 text-base text-gray-800">
            We may sell or share personal information for legitimate business purposes, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-base text-gray-800">
            <li>To enable targeted advertising that supports our free services</li>
            <li>To participate in cooperative advertising programs</li>
            <li>For analytics and market research</li>
            <li>To personalize content and recommendations</li>
          </ul>
          <p className=" text-base text-gray-800">
            Even if you opt-out, we may still share information with service providers who process it solely
            on our behalf under strict confidentiality agreements.
          </p>
        </section>
      </div>

      {/* Privacy Choices Section */}
      <div className="space-y-8">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">Manage Your Privacy Preferences</h2>
        
        <section className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-base font-semibold text-[#000e54] mb-2">What Changes When You Opt Out</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-base mb-1 text-[#000e54]">Immediate Effects:</h4>
              <ul className="list-disc pl-5 space-y-1 text-base text-[#000e54]">
                <li>We stop selling your personal information to third parties</li>
                <li>We stop sharing your information for cross-context behavioral advertising</li>
                <li>Your preference is stored (via cookie) for this browser</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-base text-[#000e54]">What Doesn't Change:</h4>
              <ul className="list-disc pl-5 space-y-1 text-base text-[#000e54]">
                <li>Service providers may still process your data under strict agreements</li>
                <li>You may still see contextual (non-targeted) advertising</li>
                <li>We may still disclose information for legal or safety reasons</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Technical Implementation Details</h3>
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 text-base mb-2">How We Honor Your Request</h4>
            <p className="mb-3 text-base text-gray-800">
              When you opt-out, we implement several technical measures to ensure your preference is respected:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-base text-gray-800">
              <li>
                Cookie-based tracking: We place an opt-out cookie in your browser that tells our systems
                not to sell or share your data.
              </li>
              <li>
                Internal flagging: For logged-in users, we associate your preference with your account.
              </li>
              <li>
                Third-party notifications: We inform our partners and service providers of your opt-out
                status where applicable.
              </li>
              <li>
                System-wide suppression: Your personal information is flagged in our systems to prevent
                inclusion in data sales or sharing.
              </li>
            </ul>
            <div className="bg-blue-50 p-3 rounded text-base text-[#000e54]">
              <p>
                Note: If you clear your browser cookies or use a different device/browser,
                you'll need to opt-out again. For persistent preferences across devices, please create an account.
              </p>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semobold text-base text-gray-800 mb-2">Global Privacy Control (GPC)</h4>
            <p className="mb-3 text-base text-gray-800">
              We honor the Global Privacy Control signal. If your browser or extension sends a GPC signal,
              we will automatically process it as a request to opt-out of the sale/sharing of your personal
              information.
            </p>
          </div>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Additional Privacy Rights</h3>
          <p className="mb-4 text-base text-gray-800">
            Depending on your jurisdiction, you may have additional privacy rights beyond opting out of
            sale/sharing:
          </p>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-gray-800 text-xl">Right to Know/Access</h4>
              <p className="text-base text-gray-800">
                You can request details about what personal information we collect, use, disclose, and sell.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-xl text-gray-800">Right to Delete</h4>
              <p className="text-base text-gray-800">
                Request deletion of your personal information, with certain exceptions.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-xl mb-2 text-gray-800">Right to Correct</h4>
              <p className="text-base text-gray-800">
                Request correction of inaccurate personal information we maintain.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-xl mb-2 text-gray-800">Right to Limit Use of Sensitive Data</h4>
              <p className="text-base text-gray-800">
                Limit our use of sensitive personal information to certain purposes.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-gray-800 text-xl">Right to Non-Discrimination</h4>
              <p className="text-base text-gray-800">
                We won't discriminate against you for exercising your privacy rights.
              </p>
            </div>
          </div>
          
          <div className="mt-6 shadow-lg p-4 rounded-lg">
            <h4 className="font-semibold text-xl text-gray-800 text-xl mb-2">How to Exercise These Rights</h4>
            <p className="mb-3 text-base">
              To exercise any of these rights, please contact us through one of these methods:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-base text-gray-800">
              <li>Online request form at [Privacy Request Portal Link]</li>
              <li>Email: privacy@yourcompany.com</li>
              <li>Toll-free number: 1-800-PRIVACY</li>
              <li>Mail: [Your Company] Privacy Office, 123 Privacy Lane, Anytown, USA</li>
            </ul>
            <p className="mt-3 text-base text-gray-800">
              We may need to verify your identity before processing certain requests to protect your information.
            </p>
          </div>
        </section>
      </div>
    </div>

    <div className='px-4'>
      <div className="max-w-4xl mx-auto my-10 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="relative bg-[#000e54]">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white blur-xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-purple-300 blur-xl"></div>
          </div>
          <div className="relative z-10 text-center p-4">
            <h2 className="text-4xl font-semibold text-white mb-3">Consumer Privacy Rights Request Form</h2>
          </div>
        </div>
      
        <div className="p-8 md:p-10">
          {submitSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="relative inline-block">
                <svg className="w-20 h-20 bg-blue-100 rounded-4xl text-[#000e54] mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div className="absolute inset-0 rounded-full bg-green-100 animate-ping opacity-30"></div>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mt-6">Request Submitted!</h2>
              <p className="text-gray-800 text-base mt-3">
                We've sent a confirmation. Your request will be processed within 45 days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="border-b border-gray-200 pb-2 mb-4">
                    <p>Not all persons are eligible for all data requests. This form will be used to determine your eligibility. To protect your privacy, you will be required to verify that you either are a person about whom we collected information or are someone authorized to act on such a person's behalf. Requests are fulfilled as soon as practical, usually within 45 days.</p>
                  <p className="text-base mt-3 font-semibold text-[#000e54]">*REQUIRED FIELDS</p>
                </div>
              </div>

              {submitError && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg animate-fade-in">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p className="text-red-800 font-semibold">{submitError}</p>
                  </div>
                </div>
              )}

              {/* Request Type */}
              <div>
                <label className="block text-base font-semibold text-gray-800 mb-1">
                  *Type of Requester:
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Consumer', 'Insurance Partner', 'Vendor', 'Authorized Person', 'Employee', 'Applicant'].map(type => (
                    <div key={type} className="flex items-center">
                      <input
                        id={`request-${type}`}
                        name="requestType"
                        type="radio"
                        value={type}
                        checked={formData.requestType === type}
                        onChange={handleRadioChange}
                        className="h-4 w-4 text-[#000e54] focus:ring-[#000e54] border-gray-300"
                        required
                      />
                      <label htmlFor={`request-${type}`} className="ml-2 block text-sm text-gray-700">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Information Type */}
              <div>
                <label className="block text-base font-semibold text-gray-800 mb-1">
                  *Type of Personal Information (PI) Request:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'PI Report', 'PI Access', 'PI Deletion', 'Do Not Sell/Share My PI',
                    'Limit the Use of My Sensitive PI', 'Opt Out of Profiling/Automated Decision Making',
                    'Do Not Email', 'Do Not Call/Text', 'Correct My PI'
                  ].map(type => (
                    <div key={type} className="flex items-start">
                      <input
                        id={`info-${type}`}
                        name={type}
                        type="checkbox"
                        checked={formData.informationType.includes(type)}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 mt-1 text-[#000e54] focus:ring-[#000e54] border-gray-300 rounded"
                      />
                      <label htmlFor={`info-${type}`} className="ml-2 block text-sm text-gray-800">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="firstName" className="block text-base font-semibold text-gray-800">*First Name:</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 text-base py-3 border border-gray-200 rounded-lg focus:border-[#000e54] transition-all"
                      placeholder="John"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="lastName" className="block text-base font-semibold text-gray-800">*Last Name:</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 text-base py-3 border border-gray-200 rounded-lg focus:border-[#000e54] transition-all"
                      placeholder="Doe"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="phone" className="block text-base font-semibold text-gray-800">Phone Number:</label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 text-base py-3 border border-gray-200 rounded-lg focus:border-[#000e54] transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-base font-semibold text-gray-800">*Email:</label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 text-base py-3 border border-gray-200 rounded-lg focus:border-[#000e54] transition-all"
                      placeholder="your.email@example.com"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-1">
                <label htmlFor="details" className="block text-base font-semibold text-gray-800">Request Details:</label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full px-4 text-base py-3 border border-gray-200 rounded-lg focus:border-[#000e54] transition-all"
                  placeholder="Please provide additional information..."
                  maxLength="1000"
                ></textarea>
                <p className="mt-1 text-xs text-right text-gray-500">{formData.details ? formData.details.length : 0}/1000 Characters</p>
              </div>

              {/* CAPTCHA */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
    {/* Text - comes first in DOM order but visually adjusts based on screen size */}
    <h2 className="text-base text-gray-800 font-semibold sm:min-w-[200px] sm:mr-4 order-1 sm:order-none">
      Please verify that you're not a robot
    </h2>
    
    {/* reCAPTCHA - will appear below on mobile, beside on larger screens */}
    <div className="order-2 sm:order-none transform sm:scale-100 scale-90 origin-left">
      <ReCAPTCHA
        ref={captchaRef}
        sitekey="6LfrmSgrAAAAAGhs0-kgqJkRnFECkHTvrRY-4dMQ"
        onChange={(value) => setCaptchaValue(value)}
      />
    </div>
  </div>
</div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] shadow-lg ${
                    isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#000e54]'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center text-base">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Submit Request
                    </span>
                  )}
                </button>
              </div>
              <div className="text-center text-base text-gray-800 pt-4">
                <p>We'll never share your information. Read our <a href="/PrivacyPolicy" className="text-[#000e54] hover:underline">Privacy Policy</a>.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
    <WideDiv/>
    <Footer/>
    </>
  );
};

export default DonotSellMyInfo;