import React from 'react';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';
import { Zap, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useRef} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

   const Advertise = () => {
   const WEB3FORMS_ACCESS_KEY = "4e9faa02-cb51-4253-98e6-b5794f4ece3a";
   const captchaRef = useRef(null);
   const [captchaValue, setCaptchaValue] = useState(null);
   const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phoneNumber: '',
    website: '',
    promoCode: '',
    description: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);
    if (!captchaValue) {
    setSubmitError("Please complete the CAPTCHA verification");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare data for Web3Forms
      const formSubmissionData = new FormData();
      
      // Add the access key
      formSubmissionData.append('access_key', WEB3FORMS_ACCESS_KEY);
      
      // Add form fields
      formSubmissionData.append('name', `${formData.firstName} ${formData.lastName}`);
      formSubmissionData.append('company', formData.company);
      formSubmissionData.append('email', formData.email);
      formSubmissionData.append('phone', formData.phoneNumber);
      formSubmissionData.append('website', formData.website);
      formSubmissionData.append('promo_code', formData.promoCode);
      formSubmissionData.append('message', formData.description);
      
      // Add form submission source
      formSubmissionData.append('from_website', window.location.hostname);
      
      // Send to Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formSubmissionData
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Form submitted successfully
        setFormSubmitted(true);
        
        // Reset form after submission
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          phoneNumber: '',
          website: '',
          promoCode: '',
          description: ''
        });
      } else {
        // Handle error
        setFormError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setFormError('An error occurred. Please try again later.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
    if (captchaRef.current) {
      captchaRef.current.reset();
    }
    setCaptchaValue(null);
  };
    const solutions = [
        {
          id: 'traffic',
          title: 'Get Qualified Traffic to Your Landing Page',
          icon: <Zap className="w-8 h-8 text-[#000e54]" />,
          subtitle: 'Attract Leads Across the Business.com Marketplace',
          features: [
            'Custom native looking ad placements with high conversion rates',
            'Affordable, pay-per-click pricing ensures you pay for outcomes',
            'Utilize our pixel to track who converts'
          ],
          color: 'bg-blue-100',
          buttonColor: 'bg-[#ff8633] ',
          link: '/contact-sales'
        },
        {
          id: 'leads',
          title: 'Sales Qualified Leads Directly to Your Inbox',
          icon: <Users className="w-8 h-8 text-[#000e54]" />,
          subtitle: 'Get Instant Leads Across 100+ B2B Categories',
          features: [
            'Exclusive or Shared Leads',
            'High Quality Human verified Leads',
            'Fast Lead delivery via email, text, or CRM'
          ],
          color: 'bg-blue-100',
          buttonColor: 'bg-[#ff8633]',
          link: '/contact-sales'
        },
        {
          id: 'ads',
          title: 'Strategic Sponsored Ads',
          icon: <BarChart3 className="w-8 h-8 text-[#000e54]" />,
          subtitle: 'Amplify Your Brand with Our Content Expertise',
          features: [
            'Sponsor or create a lead generating article with our team',
            'Reach over 10 million SMBs searching for solutions',
            'Generate Brand awareness'
          ],
          color: 'bg-blue-100',
          buttonColor: 'bg-[#ff8633]',
          link: '/contact-sales'
        }
      ];


  return (
    <>
    <Navbar/>
    {/* hero section */}
    <section className="relative max-w-6xl mx-auto text-white overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
    <div className="absolute bottom-10 right-20 w-80 h-80 bg-orange-500 rounded-full mix-blend-screen opacity-15 filter blur-3xl"></div>
    
    {/* SVG patterns */}
    <svg className="absolute top-0 left-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
      </pattern>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>

  <div className="container mx-auto px-4 py-10 relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
      {/* Text content */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-3xl md:text-4xl text-gray-800 font-semibold mb-4 md:mb-6 leading-tight">
          Amplify Your Brand <br className="hidden lg:block"/>With Our Premium Network
        </h1>
        
        <p className="text-base md:text-xl mb-6 md:mb-8 text-gray-800 leading-relaxed">
          Join 500+ satisfied advertisers reaching over 2 million targeted professionals monthly. Our data-driven platform delivers exceptional ROI.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 items-center mb-6 lg:mb-0">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-blue-900" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" />
              <img className="w-8 h-8 rounded-full border-2 border-blue-900" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" />
              <img className="w-8 h-8 rounded-full border-2 border-blue-900" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client" />
            </div>
            <span className="text-base md:text-base text-gray-800">Trusted by 500+ brands</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-blue-600/50"></div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-base md:text-base text-gray-800">4.9/5 average advertiser rating</span>
          </div>
        </div>
      </div>

      {/* Image/content card */}
      <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <div className="relative w-full max-w-md md:max-w-lg">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img 
              src="https://tse4.mm.bing.net/th?id=OIP.XCn-mxd3F6sEkGJxW-3wZQHaE8&pid=Api&P=0&h=180" 
              alt="Advertising Opportunities" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent"></div>
          </div>
          
          {/* Stats overlay */}
          <div className="absolute -bottom-6 right-0 md:-right-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-4 md:p-6 w-full md:w-3/4 border border-white/20">
            <h3 className="text-blue-900 font-semibold text-base md:text-base mb-2 md:mb-3">Why Advertise With Us?</h3>
            <ul className="space-y-1 md:space-y-2 text-base md:text-base">
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800">2M+ targeted visitors monthly</span>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800">85% average engagement rate</span>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800">Dedicated account manager</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    {/* cards */}
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-semibold text-center mb-8">Find the Right Solution for You</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {solutions.map(solution => (
          <div 
            key={solution.id}
            className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${solution.color}`}
          >
            <div className="p-6">
              <div className="bg-white inline-flex rounded-lg p-3 shadow-sm mb-4">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-1 text-gray-800">{solution.title}</h3>
              <p className="text-base text-gray-800 font-semibold mb-6">{solution.subtitle}</p>
              
              <ul className="space-y-4 mb-8">
                {solution.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 mr-2">
                      <svg className="h-5 w-5 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-800 text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to={solution.link}
                className={`block w-full py-3 px-4 rounded-lg text-white font-semibold text-center transition-colors ${solution.buttonColor}`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>

{/* form */}
<div className='px-4'>
<div className="max-w-4xl mx-auto my-10  bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
  <div className="relative bg-[#000e54] ">
    <div className="absolute top-0 left-0 w-full h-full opacity-10">
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white blur-xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-purple-300 blur-xl"></div>
    </div>
    <div className="relative z-10 text-center p-4">
      <h2 className="text-4xl font-semibold text-white mb-3">Connect With Our Team</h2>
      <p className="text-white text-base max-w-2xl mx-auto">
        Let's start a conversation! Fill out the form below and we'll get back to you within 24 hours.
      </p>
    </div>
  </div>
  
  {formSubmitted ? (
    <div className="p-10 text-center">
      <div className="relative inline-block">
        <svg className="w-20 h-20 bg-blue-100 rounded-4xl text-[#000e54] mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <div className="absolute inset-0 rounded-full bg-green-100 animate-ping opacity-30"></div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mt-6">Message Sent Successfully!</h3>
      <p className="text-gray-800 text-base mt-3 max-w-md mx-auto">
        Thank you for reaching out. We've received your message and will contact you shortly at.
      </p>
      <button 
        className="mt-8 px-8 py-3 bg-[#000e54] text-white font-medium rounded-lg  transition-all duration-300 transform hover:scale-105 shadow-lg"
        onClick={() => setFormSubmitted(false)}
      >
        <span className="flex items-center justify-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
          </svg>
          Go Back
        </span>
      </button>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
      {formError && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg animate-fade-in">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p className="text-red-800 font-semibold">{formError}</p>
          </div>
        </div>
      )}
      
      {/* Web3Forms hidden fields */}
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label htmlFor="firstName" className="block text-gray-800 font-semibold text-base">
            First Name <span className="text-[#000e54]">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-4 text-base py-3 border border-gray-200 rounded-lg  focus:border-[#000e54] transition-all"
              required
              value={formData.firstName}
              onChange={handleChange}
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
          <label htmlFor="lastName" className="block text-gray-800 font-semibold text-base">
            Last Name <span className="text-[#000e54]">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-4 text-base py-3 border border-gray-200 rounded-lg  focus:border-[#000e54] transition-all"
              required
              value={formData.lastName}
              onChange={handleChange}
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
      
      <div className="space-y-1">
        <label htmlFor="company" className="block text-gray-800 font-semibold">
          Company <span className="text-[#000e54]">*</span>
        </label>
        <div className="relative">
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 text-base py-3 border border-gray-200 rounded-lg  focus:border-[#000e54] transition-all"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Inc."
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-5 h-5 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="space-y-1">
        <label htmlFor="email" className="block text-gray-800 font-semibold">
          Email <span className="text-[#000e54]">*</span>
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 text-base py-3 border border-gray-200 rounded-lg  focus:border-[#000e54] transition-all"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-5 h-5 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="space-y-1">
        <label htmlFor="phoneNumber" className="block text-gray-800 font-semibold">
          Phone Number <span className="text-[#000e54]">*</span>
        </label>
        <div className="relative">
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="w-full px-4 text-base py-3 border border-gray-200 rounded-lg  focus:border-[#000e54] transition-all"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
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
        <label htmlFor="website" className="block text-gray-800 font-semibold">
          Website
        </label>
        <div className="relative">
          <input
            type="url"
            id="website"
            name="website"
            className="w-full px-4 text-base py-3 border border-gray-200 rounded-lg  focus:border-[#000e54] transition-all"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://example.com"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-5 h-5 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="space-y-1">
        <label htmlFor="promoCode" className="block text-gray-800 font-semibold">
          Promo Code (if any)
        </label>
        <div className="relative">
          <input
            type="text"
            id="promoCode"
            name="promoCode"
            className="w-full px-4 text-base py-3 border border-gray-200 rounded-lg focus:border-[#000e54] transition-all"
            value={formData.promoCode}
            onChange={handleChange}
            placeholder="SUMMER2023"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-5 h-5 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="space-y-1">
        <label htmlFor="description" className="block text-gray-800 font-semibold text-base">
          Tell us about your business
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          className="w-full px-4 text-base py-3 border border-gray-200 rounded-lg  focus:border-[#000e54] transition-all"
          value={formData.description}
          onChange={handleChange}
          placeholder="Briefly describe what products or services your company offers..."
        ></textarea>
      </div>

      <div>
    <h2 className="text-base font-semibold mb-3">Please verify that you're not a robot</h2>
    <ReCAPTCHA
      ref={captchaRef}
      sitekey="6LfrmSgrAAAAAGhs0-kgqJkRnFECkHTvrRY-4dMQ" // Replace with your reCAPTCHA site key
      onChange={(value) => setCaptchaValue(value)}
    />
  </div>

      
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-[1.02] shadow-lg ${isSubmitting 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-[#000e54] '}`}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              GET STARTED NOW
            </span>
          )}
        </button>
      </div>      
      <div className="text-center text-base text-gray-800 pt-4">
        <p>We'll never share your information. Read our <a href="#" className="text-[#000e54] hover:underline">Privacy Policy</a>.</p>
      </div>
    </form>
  )}
</div>
<p className='text-base text-gray-800 text-center max-w-6xl mx-auto'>Your privacy is important to us. By submitting this form, you consent to business.com emailing, texting, and calling you at the email and phone number provided. You also direct us to share your information with marketing service providers, who may email, text, or call you at the phone number provided using automated phone technology. Consent is not a condition of purchasing any products or services.</p>
</div>


    <WideDiv/>
    <Footer/>
    </>
  );
};

export default Advertise;