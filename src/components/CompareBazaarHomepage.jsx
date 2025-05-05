import React, { useState, useRef } from 'react';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';
import bgImage2 from "../assets/images/bg2.webp";
import WorkWithGreatPeople from './WorkWithGreatPeople';


const CompareBazaarHomepage = () => {
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

  // Values section visibility logic
  const valuesRef = useRef(null);
  const [valuesInView, setValuesInView] = useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setValuesInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (valuesRef.current) {
      observer.observe(valuesRef.current);
    }

    return () => {
      if (valuesRef.current) {
        observer.unobserve(valuesRef.current);
      }
    };
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-white font-sans">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 p-8 md:p-16">
            <h1 className="text-3xl font-semibold leading-tight mb-4">
              We are a creative <br />
              <span className="text-gray-900">B2B</span>{" "}
              <span className="text-[#ff8633]">Marketing <br />Solutions Company</span>
            </h1>
            <div className="w-16 h-1 bg-[#ff8633] my-6"></div>
            <p className="text-gray-800 mb-8 leading-relaxed text-base">
            Welcome to Compare Bazaar — where passion meets purpose. We are dedicated to providing exceptional marketing solutions tailored to the unique needs of businesses across a wide range of industries. At the heart of our work is a commitment to innovation, customer-focused strategies, and delivering measurable, impactful results.

Our team believes in building lasting partnerships by understanding your goals and aligning our efforts to support your long-term growth and success. Whether you're a startup or an established brand, we’re here to help you stand out, connect with your audience, and achieve meaningful progress in a constantly evolving market.


            </p>
            {/* <button className="px-8 py-3 rounded-full text-white font-medium transition-transform hover:scale-105 bg-[#ff8633]">
              READ MORE
            </button> */}
          </div>

          {/* Right Content - Image */}
          <div className="w-auto md:w-1/2 p-5">
            <img
              src={bgImage2}
              alt="Person working on laptop "
              className="w-auto h-[400px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        <WorkWithGreatPeople />

        {/* Services Section */}
        <div className="py-16 px-8 md:px-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-2 text-gray-900">Our Services</h2>
            <p className="text-center text-gray-800 mb-12 max-w-4xl mx-auto text-base ">
              Discover how Compare Bazaar can transform your business with our comprehensive solutions.
            </p>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 - Unbiased Comparisons */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 group">
                <div className="h-3 bg-gradient-to-r from-[#000e54] to-[#203299] group-hover:bg-[#ff8633] transition-colors"></div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-[#C6D2FF] rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                    <svg className="w-8 h-8 text-[#000e54] group-hover:text-[#ff8633] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ff8633] transition-colors">Unbiased Comparisons</h3>
                  <p className="text-gray-800 text-base">Our team of experts curates detailed, unbiased comparisons to help you find the best options tailored to your needs.</p>
                  {/* <a href="#" className="mt-4 inline-block text-[#000e54] font-medium group-hover:text-[#ff8633] transition-colors">Learn More →</a> */}
                </div>
              </div>

              {/* Card 2 - Lead Generation */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 group">
                <div className="h-3 bg-gradient-to-r from-[#000e54] to-[#203299] group-hover:bg-[#ff8633] transition-colors"></div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-[#C6D2FF] rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                    <svg className="w-8 h-8 text-[#000e54] group-hover:text-[#ff8633] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ff8633] transition-colors">Lead Generation</h3>
                  <p className="text-gray-800 text-base">We bridge the gap between consumers and businesses by connecting you with trusted providers and services.</p>
                  {/* <a href="#" className="mt-4 inline-block text-[#000e54] font-medium group-hover:text-[#ff8633] transition-colors">Learn More →</a> */}
                </div>
              </div>

              {/* Card 3 - Advertising Solutions */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 group">
                <div className="h-3 bg-gradient-to-r from-[#000e54] to-[#203299] group-hover:bg-[#ff8633] transition-colors"></div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-[#C6D2FF] rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                    <svg className="w-8 h-8 text-[#000e54] group-hover:text-[#ff8633] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ff8633] transition-colors">Advertising Solutions</h3>
                  <p className="text-gray-800 text-base">For businesses, we offer innovative advertising opportunities to reach your target audience effectively.</p>
                  {/* <a href="#" className="mt-4 inline-block text-[#000e54] font-medium group-hover:text-[#ff8633] transition-colors">Learn More →</a> */}
                </div>
              </div>

              {/* Card 4 - Engaging Content */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 group">
                <div className="h-3 bg-gradient-to-r from-[#000e54] to-[#203299] group-hover:bg-[#ff8633] transition-colors"></div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-[#C6D2FF] rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                    <svg className="w-8 h-8 text-[#000e54] group-hover:text-[#ff8633] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ff8633] transition-colors">Engaging Content</h3>
                  <p className="text-gray-800 text-base">From informative articles to in-depth guides, our content is designed to educate, inspire, and guide you every step of the way.</p>
                  {/* <a href="#" className="mt-4 inline-block text-[#000e54] font-medium group-hover:text-[#ff8633] transition-colors">Learn More →</a> */}
                </div>
              </div>
            </div>

            {/* Services Contact Form with Web3Forms */}
            <div className="mt-16 bg-gray-50 rounded-lg shadow-lg p-8">
              <h3 className="text-4xl font-semibold mb-6 text-center text-gray-900">Interested in Our Services?</h3>

              {formStatus.success ? (
                <div className="bg-[#000e54] border border-[#000e54] text-white px-4 py-3 rounded relative max-w-2xl mx-auto mb-6" role="alert">
                  <strong className="font-bold ">Thank you!</strong>
                  <span className="block sm:inline"> Your message has been sent successfully. We'll get back to you soon.</span>
                </div>
              ) : null}

              {formStatus.error ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-2xl mx-auto mb-6" role="alert">
                  <strong className="font-bold">Error:</strong>
                  <span className="block sm:inline"> {formStatus.error}</span>
                </div>
              ) : null}

              <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
                {/* Web3Forms honeypot field to prevent spam */}
                <input type="hidden" name="botcheck" style={{ display: 'none' }} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-900 mb-2 text-base" htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-800 mb-2 text-base" htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-800 mb-2 text-base">Services You're Interested In</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="unbiased-comparisons"
                        name="unbiasedComparisons"
                        checked={formData.services.unbiasedComparisons}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-emerald-600"
                      />
                      <label htmlFor="unbiased-comparisons" className="ml-2 text-gray-700">Unbiased Comparisons</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="lead-generation"
                        name="leadGeneration"
                        checked={formData.services.leadGeneration}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-emerald-600"
                      />
                      <label htmlFor="lead-generation" className="ml-2 text-gray-700">Lead Generation</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="advertising-solutions"
                        name="advertisingSolutions"
                        checked={formData.services.advertisingSolutions}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-emerald-600"
                      />
                      <label htmlFor="advertising-solutions" className="ml-2 text-gray-700">Advertising Solutions</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="engaging-content"
                        name="engagingContent"
                        checked={formData.services.engagingContent}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-emerald-600"
                      />
                      <label htmlFor="engaging-content" className="ml-2 text-gray-700">Engaging Content</label>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-800 mb-2 text-base" htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Tell us about your project"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#ff8633] text-white font-medium rounded-md shadow-md hover:bg-[#000e54] transition-colors flex justify-center items-center"
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
                  ) : "Submit Inquiry"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="py-16 px-8 md:px-16 max-w-6xl mx-auto bg-white">
          <h2 className="text-4xl font-semibold text-center mb-2">About Us - Compare Bazaar</h2>
          <p className="text-center text-gray-800 mb-12 max-w-6xl mx-auto text-base">
            Welcome to Compare Bazaar, your ultimate destination for smart decision-making!
          </p>

          <div className="max-w-6xl mx-auto">
            <p className="mb-6 text-gray-800 leading-relaxed text-base">
              We are a dynamic content marketing, lead generation, and advertising platform dedicated to helping consumers and businesses connect seamlessly. Our mission is to simplify your choices by providing comprehensive comparisons, expert insights, and tailored recommendations across a wide range of products and services.
            </p>

            <p className="mb-6 text-gray-800 leading-relaxed text-base">
              At Compare Bazaar, we understand that navigating the ever-expanding marketplace can be overwhelming. That's why we've created a user-friendly platform that empowers you to make informed decisions with confidence. Whether you're searching for the best deals, exploring new trends, or seeking trusted advice, we've got you covered.
            </p>

            <h3 className="text-xl font-semibold mb-4 text-gray-900">What We Offer:</h3>
            <ul className="mb-8 space-y-2 text-base text-gray-800">
              <li className="flex items-start">
                <span className="text-[#000e54] mr-2">•</span>
                <span className="text-gray-800 group">
                  <span className="font-medium group-hover:text-orange-500 transition-colors">Unbiased Comparisons:</span> Our team of experts curates detailed, unbiased comparisons to help you find the best options tailored to your needs.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#000e54] mr-2">•</span>
                <span className="text-gray-800 group">
                  <span className="font-medium group-hover:text-orange-500 transition-colors">Lead Generation:</span> We bridge the gap between consumers and businesses by connecting you with trusted providers and services.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#000e54] mr-2">•</span>
                <span className="text-gray-800 group">
                  <span className="font-medium group-hover:text-orange-500 transition-colors">Advertising Solutions:</span> For businesses, we offer innovative advertising opportunities to reach your target audience effectively.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#000e54] mr-2">•</span>
                <span className="text-gray-800 group">
                  <span className="font-medium group-hover:text-orange-500 transition-colors">Engaging Content:</span> From informative articles to in-depth guides, our content is designed to educate, inspire, and guide you every step of the way.
                </span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-4 text-gary-900">Why Choose Compare Bazaar?</h3>
            <ul className="mb-10 space-y-2 text-gray-800 text-base">
              <li className="flex items-start">
                <span className="text-[#000e54] mr-2">•</span>
                <span className="text-gray-800 group">
                  <span className="font-medium group-hover:text-orange-500 transition-colors">Trustworthy:</span> We prioritize transparency and integrity in everything we do.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#000e54] mr-2">•</span>
                <span className="text-gray-800 group">
                  <span className="font-medium group-hover:text-orange-500 transition-colors">Comprehensive:</span> Our platform covers a wide array of categories, ensuring you find what you're looking for.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#000e54] mr-2">•</span>
                <span className="text-gray-800 group">
                  <span className="font-medium group-hover:text-orange-500 transition-colors">User-Centric:</span> Your satisfaction is at the heart of our operations, and we strive to deliver exceptional value with every interaction.
                </span>
              </li>
            </ul>

            <p className="text-gray-800 leading-relaxed text-base">
              Join the Compare Bazaar community today and experience a smarter way to shop, compare, and connect. Let us help you make the best choices for your lifestyle and business needs. Together, we'll navigate the bazaar of possibilities!
            </p>
          </div>
        </div>
 
        {/* Values Section */}
        <div
          ref={valuesRef}
          className={`py-16 px-4 text-center bg-white transition-all duration-700 ${valuesInView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl font-semibold mb-6 text-gray-900 relative inline-block pb-3 after:content-[''] after:absolute after:w-3/5 after:h-1 after:bottom-0 after:left-1/5 hover:after:w-full hover:after:left-0 after:transition-all after:duration-300">
            Our Values
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto mb-12 text-base">
  At CompareBazaar, we are guided by six core values that shape our decisions, drive our interactions, and reflect our commitment to excellence. These principles serve as a foundation for how we engage with our clients, collaborate with colleagues, work with service providers, and represent our company. Our values are not just ideals—they are the standards we live by every day.
</p>

          <div className="flex flex-wrap justify-center max-w-6xl mx-auto">
            {[
              { icon: "📈", title: "Do what it takes to deliver excellent results" },
              { icon: "🚀", title: "Bring a proactive, solution-oriented attitude to everything you do" },
              { icon: "🤝", title: "Act with integrity and respect" },
              { icon: "💬", title: "Communicate directly and honestly" },
              { icon: "🎯", title: "Do what you say you are going to do" },
              { icon: "🧠", title: "Always learn and try new things" }
            ].map((value, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
                <div className="transform transition-transform duration-300 hover:-translate-y-3">
                  <div className="w-24 h-24 bg-[#000e54] rounded-full flex items-center justify-center text-4xl text-white mx-auto mb-4 shadow-lg transform transition-all duration-300 hover:rotate-12 hover:scale-110">
                    {value.icon}
                  </div>
                  <div className="font-semibold text-base text-gray-800">{value.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <WideDiv />
        <Footer />
        
      </div>
    </>
  );
};

export default CompareBazaarHomepage;