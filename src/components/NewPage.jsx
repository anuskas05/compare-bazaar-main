import React, { useState, useRef } from 'react';

const NewPage = () => {

    // Form state
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
      services: {
        unbiasedComparisons: false,
        leadGeneration: false,
        advertisingSolutions: false,
        engagingContent: false
      }
    });
  
    // Form status state
    const [formStatus, setFormStatus] = useState({
      submitted: false,
      submitting: false,
      error: null,
      success: false
    });
  
    // Handle input changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    // Handle checkbox changes
    const handleCheckboxChange = (e) => {
      const { name, checked } = e.target;
      setFormData({
        ...formData,
        services: {
          ...formData.services,
          [name]: checked
        }
      });
    };
  
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      setFormStatus({ ...formStatus, submitting: true });
  
      // Prepare services as a string
      const selectedServices = Object.keys(formData.services)
        .filter(key => formData.services[key])
        .join(', ');
  
      // Create form data object for submission
      const submissionData = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        services: selectedServices,
        access_key: '2c1b7668-e873-404a-9759-f85af53e550b' // Replace with your actual Web3Forms access key
      };
  
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(submissionData)
        });
  
        const data = await response.json();
  
        if (data.success) {
          // Reset form on success
          setFormData({
            name: '',
            email: '',
            message: '',
            services: {
              unbiasedComparisons: false,
              leadGeneration: false,
              advertisingSolutions: false,
              engagingContent: false
            }
          });
          setFormStatus({
            submitted: true,
            submitting: false,
            error: null,
            success: true
          });
        } else {
          setFormStatus({
            submitted: true,
            submitting: false,
            error: data.message || "Something went wrong. Please try again.",
            success: false
          });
        }
      } catch (error) {
        setFormStatus({
          submitted: true,
          submitting: false,
          error: "Network error. Please check your connection and try again.",
          success: false
        });
      }
    };

    return (
      <>
                        {/* Services Contact Form with Web3Forms */}
                        <div className="mt-16 p-8">
  <div className="mb-10 text-center">
    <h3 className="text-4xl font-bold mb-3 text-gray-900 bg-clip-text text-transparent bg-[#ff8633]">Interested in Our Services?</h3>
    <p className="text-gray-600 max-w-xl mx-auto">Tell us about your needs and we'll connect you with the right solutions for your business.</p>
  </div>

  {formStatus.success ? (
    <div className="bg-gradient-to-r from-[#000e54] to-[#1e3a8a] text-white px-6 py-5 rounded-lg relative max-w-2xl mx-auto mb-8 shadow-md" role="alert">
      <div className="flex items-center">
        <svg className="w-6 h-6 mr-3 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <strong className="font-bold text-lg">Thank you!</strong>
          <p className="mt-1">Your message has been sent successfully. We'll get back to you soon.</p>
        </div>
      </div>
    </div>
  ) : null}

  {formStatus.error ? (
    <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 text-red-700 px-6 py-5 rounded-lg relative max-w-2xl mx-auto mb-8 shadow-md" role="alert">
      <div className="flex items-center">
        <svg className="w-6 h-6 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <strong className="font-bold">Error:</strong>
          <p className="mt-1">{formStatus.error}</p>
        </div>
      </div>
    </div>
  ) : null}

  <form className="max-w-6xl mx-auto bg-white rounded-lg p-8 shadow-md" onSubmit={handleSubmit}>
    {/* Web3Forms honeypot field to prevent spam */}
    <input type="hidden" name="botcheck" style={{ display: 'none' }} />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="group">
        <label className="block text-gray-800 mb-2 text-base font-medium" htmlFor="name">Your Name <span className="text-red-500">*</span></label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
            placeholder="Enter your name"
            required
          />
        </div>
      </div>
      <div className="group">
        <label className="block text-gray-800 mb-2 text-base font-medium" htmlFor="email">Email Address <span className="text-red-500">*</span></label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="group">
        <label className="block text-gray-800 mb-2 text-base font-medium" htmlFor="phone">Phone Number</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
            placeholder="Enter your phone number (optional)"
          />
        </div>
      </div>
      <div className="group">
        <label className="block text-gray-800 mb-2 text-base font-medium" htmlFor="company">Company/Organization <span className="text-red-500">*</span></label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
            placeholder="Enter your company name"
            required
          />
        </div>
      </div>
    </div>

    <div className="mb-8">
      <label className="block text-gray-800 mb-3 text-base font-medium">Services You're Interested In <span className="text-red-500">*</span></label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
  <div className="flex items-center space-x-3 p-2 hover:bg-white rounded-md transition-all duration-200">
    <div className="relative flex items-center">
      <input
        type="checkbox"
        id="crm-software"
        name="crmsoftware"
        checked={formData.services.crmsoftware}
        onChange={handleCheckboxChange}
        className="appearance-none w-5 h-5 rounded border border-gray-300 cursor-pointer 
                  checked:bg-[#ff8633] checked:border-[#ff8633] focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
      />
      {formData.services.crmsoftware && (
        <svg 
          className="absolute left-0 w-5 h-5 text-white pointer-events-none" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      )}
    </div>
    <label htmlFor="crm-software" className={`cursor-pointer ${formData.services.crmsoftware ? 'text-[#ff8633] font-medium' : 'text-gray-700'}`}>
      Best CRM Software
    </label>
  </div>

  <div className="flex items-center space-x-3 p-2 hover:bg-white rounded-md transition-all duration-200">
    <div className="relative flex items-center">
      <input
        type="checkbox"
        id="email-marketing"
        name="emailmarket"
        checked={formData.services.emailmarket}
        onChange={handleCheckboxChange}
        className="appearance-none w-5 h-5 rounded border border-gray-300 cursor-pointer 
                  checked:bg-[#ff8633] checked:border-[#ff8633] focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
      />
      {formData.services.emailmarket && (
        <svg 
          className="absolute left-0 w-5 h-5 text-white pointer-events-none" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      )}
    </div>
    <label htmlFor="email-marketing" className={`cursor-pointer ${formData.services.emailmarket ? 'text-[#ff8633] font-medium' : 'text-gray-700'}`}>
      Best Email Marketing Services
    </label>
  </div>

  <div className="flex items-center space-x-3 p-2 hover:bg-white rounded-md transition-all duration-200">
    <div className="relative flex items-center">
      <input
        type="checkbox"
        id="website-building"
        name="websitebuild"
        checked={formData.services.websitebuild}
        onChange={handleCheckboxChange}
        className="appearance-none w-5 h-5 rounded border border-gray-300 cursor-pointer 
                  checked:bg-[#ff8633] checked:border-[#ff8633] focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
      />
      {formData.services.websitebuild && (
        <svg 
          className="absolute left-0 w-5 h-5 text-white pointer-events-none" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      )}
    </div>
    <label htmlFor="website-building" className={`cursor-pointer ${formData.services.websitebuild ? 'text-[#ff8633] font-medium' : 'text-gray-700'}`}>
      Best Website Building Platforms
    </label>
  </div>

  <div className="flex items-center space-x-3 p-2 hover:bg-white rounded-md transition-all duration-200">
    <div className="relative flex items-center">
      <input
        type="checkbox"
        id="phone-systems"
        name="phonesystem"
        checked={formData.services.phonesystem}
        onChange={handleCheckboxChange}
        className="appearance-none w-5 h-5 rounded border border-gray-300 cursor-pointer 
                  checked:bg-[#ff8633] checked:border-[#ff8633] focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
      />
      {formData.services.phonesystem && (
        <svg 
          className="absolute left-0 w-5 h-5 text-white pointer-events-none" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      )}
    </div>
    <label htmlFor="phone-systems" className={`cursor-pointer ${formData.services.phonesystem ? 'text-[#ff8633] font-medium' : 'text-gray-700'}`}>
      Business Phone Systems
    </label>
  </div>

  <div className="flex items-center space-x-3 p-2 hover:bg-white rounded-md transition-all duration-200">
    <div className="relative flex items-center">
      <input
        type="checkbox"
        id="fleet-management"
        name="fleetManagement"
        checked={formData.services.fleetManagement}
        onChange={handleCheckboxChange}
        className="appearance-none w-5 h-5 rounded border border-gray-300 cursor-pointer 
                  checked:bg-[#ff8633] checked:border-[#ff8633] focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
      />
      {formData.services.fleetManagement && (
        <svg 
          className="absolute left-0 w-5 h-5 text-white pointer-events-none" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      )}
    </div>
    <label htmlFor="fleet-management" className={`cursor-pointer ${formData.services.fleetManagement ? 'text-[#ff8633] font-medium' : 'text-gray-700'}`}>
      GPS Fleet Management Software
    </label>
  </div>

  <div className="flex items-center space-x-3 p-2 hover:bg-white rounded-md transition-all duration-200">
    <div className="relative flex items-center">
      <input
        type="checkbox"
        id="employee-management"
        name="employeeManagement"
        checked={formData.services.employeeManagement}
        onChange={handleCheckboxChange}
        className="appearance-none w-5 h-5 rounded border border-gray-300 cursor-pointer 
                  checked:bg-[#ff8633] checked:border-[#ff8633] focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
      />
      {formData.services.employeeManagement && (
        <svg 
          className="absolute left-0 w-5 h-5 text-white pointer-events-none" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      )}
    </div>
    <label htmlFor="employee-management" className={`cursor-pointer ${formData.services.employeeManagement ? 'text-[#ff8633] font-medium' : 'text-gray-700'}`}>
      Best Employee Management Software
    </label>
  </div>
</div>
    </div>

    <div className="mb-8">
      <label className="block text-gray-800 mb-2 text-base font-medium" htmlFor="role">
        Your Role <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <select
          className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent appearance-none bg-white transition-all duration-300"
          id="role"
          name="role"
          value={formData.role}
          onChange={handleInputChange}
          required
        >
          <option value="">Select your role</option>
          <option value="Marketing Manager">Marketing Manager</option>
          <option value="Director">Director</option>
          <option value="Digital Marketing Manager">Digital Marketing Manager</option>
          <option value="Manager">Manager</option>
          <option value="IT Professional">IT Professional</option>
          <option value="Developer">Marketing Assistant</option>
          <option value="Consultant">Consultant</option>
          <option value="Analyst">Analyst</option>
          <option value="Student">Student</option>
          <option value="Other">Other</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <label className="block text-gray-800 mb-2 text-base font-medium" htmlFor="message">Your Message <span className="text-red-500">*</span></label>
      <div className="relative">
        <div className="absolute top-3 left-3 flex items-start pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows="5"
          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
          placeholder="Tell us about your project"
          required
        ></textarea>
      </div>
    </div>

    <button
      type="submit"
      className="w-full px-6 py-4 bg-gradient-to-r from-[#ff8633] to-[#ff6a00] text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:from-[#000e54] hover:to-[#001e96] transition-all duration-300 transform hover:-translate-y-1 flex justify-center items-center"
      disabled={formStatus.submitting}
    >
      {formStatus.submitting ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Submitting...
        </>
      ) : (
        <>
          <span>Submit Inquiry</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </>
      )}
    </button>
  </form>
</div>
      </>
    )
};

export default NewPage;