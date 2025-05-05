import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';

function CareersPage() {
  // State for selected job and form data
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume_link: '',
    linkedin: '',
    cover_letter: '',
    experience: ''
  });
  const [formStatus, setFormStatus] = useState({ show: false, success: false, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Refs for scrolling
  const jobDescriptionRef = useRef(null);
  const applicationFormRef = useRef(null);

  // Animation hooks for sections
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [positionsRef, positionsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [applicationRef, applicationInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Job descriptions data
  const jobDescriptions = {
    "B2B Sales Executive": {
      title: "B2B Sales Executive",
      location: "Austin, TX",
      description: (
        <div>
          <p className="text-gray-600 mb-4">We are looking for a motivated and results-driven B2B Sales Executive to join our team. You will be responsible for generating new business opportunities and building strong relationships with clients.</p>
          <h3 className="text-base font-bold mb-2 text-gray-800">Responsibilities:</h3>
          <ul className="list-disc ml-5 mb-4 text-gray-600">
            <li className="mb-2">Identify and prospect new business opportunities.</li>
            <li className="mb-2">Build and maintain strong relationships with clients.</li>
            <li className="mb-2">Meet and exceed sales targets.</li>
            <li className="mb-2">Collaborate with the marketing team to develop sales strategies.</li>
          </ul>
          <h3 className="text-base font-bold mb-2 text-gray-800">Requirements:</h3>
          <ul className="list-disc ml-5 mb-4 text-gray-600">
            <li className="mb-2">2+ years of experience in B2B sales.</li>
            <li className="mb-2">Strong communication and negotiation skills.</li>
            <li className="mb-2">Proven track record of meeting sales targets.</li>
            <li className="mb-2">Ability to work independently and as part of a team.</li>
          </ul>
        </div>
      )
    },
    "Client Success Manager": {
      title: "Client Success Manager",
      location: "Austin, TX",
      description: (
        <div>
          <p className="text-gray-600 mb-4">We are seeking a dedicated Client Success Manager to ensure our clients achieve their goals using our services. You will act as the main point of contact for clients, providing support and guidance.</p>
          <h3 className="text-base font-bold mb-2 text-gray-800">Responsibilities:</h3>
          <ul className="list-disc ml-5 mb-4 text-gray-600">
            <li className="mb-2">Onboard new clients and ensure a smooth transition.</li>
            <li className="mb-2">Provide ongoing support and training to clients.</li>
            <li className="mb-2">Monitor client satisfaction and address any issues.</li>
            <li className="mb-2">Collaborate with internal teams to improve client experience.</li>
          </ul>
          <h3 className="text-base font-bold mb-2 text-gray-800">Requirements:</h3>
          <ul className="list-disc ml-5 mb-4 text-gray-600">
            <li className="mb-2">3+ years of experience in client success or account management.</li>
            <li className="mb-2">Excellent communication and interpersonal skills.</li>
            <li className="mb-2">Strong problem-solving abilities.</li>
            <li className="mb-2">Ability to manage multiple clients and projects simultaneously.</li>
          </ul>
        </div>
      )
    }
  };

  // Handle job selection
  const handleJobSelect = (jobTitle) => {
    setSelectedJob(jobTitle);
    
    // Scroll to job description after a short delay
    setTimeout(() => {
      if (jobDescriptionRef.current) {
        jobDescriptionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ show: false });

    try {
      // In a real app, you would submit to your API here
      // For this demo, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Show success message
      setFormStatus({
        show: true,
        success: true,
        message: 'Thanks for your application! We will be in touch soon.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        resume_link: '',
        linkedin: '',
        cover_letter: '',
        experience: ''
      });

      // Add confetti effect
      addConfetti();
    } catch (error) {
      // Show error message
      setFormStatus({
        show: true,
        success: false,
        message: 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Confetti effect function
  const addConfetti = () => {
    const colors = ['#0d6eaa', '#76b729', '#f8d258', '#ff6b6b', '#8c52ff'];
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '9999';
    document.body.appendChild(confettiContainer);
    
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      const color = colors[Math.floor(Math.random() * colors.length)];

      confetti.style.position = 'absolute';
      confetti.style.width = Math.random() * 10 + 5 + 'px';
      confetti.style.height = Math.random() * 10 + 5 + 'px';
      confetti.style.backgroundColor = color;
      confetti.style.borderRadius = '50%';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.top = '-10px';
      confetti.style.opacity = Math.random() + 0.5;

      confettiContainer.appendChild(confetti);

      const animationDuration = Math.random() * 3 + 2;
      const horizonalMovement = (Math.random() - 0.5) * 200;

      confetti.animate([
        { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
        { transform: `translate(${horizonalMovement}px, 100vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
      ], {
        duration: animationDuration * 1000,
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        fill: 'forwards'
      });

      setTimeout(() => {
        confetti.remove();
      }, animationDuration * 1000);
    }

    setTimeout(() => {
      confettiContainer.remove();
    }, 5000);
  };

  return (
    <>
      <Navbar/>
      <div className="font-sans text-gray-800">
        {/* Hero Banner */}
        <div 
          ref={heroRef}
          className={`relative h-80 bg-cover bg-center flex items-center justify-center overflow-hidden transition-all duration-500 ${heroInView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://www.swg.com/usa/wp-content/uploads/sites/34/2014/09/Careers-banner.jpg)'
          }}
        >
          <div className="bg-white bg-opacity-80 px-8 py-4 text-2xl font-bold rounded shadow-lg transform transition-transform duration-300 hover:bg-opacity-90 hover:-translate-y-1 hover:shadow-xl">
            Join Our Team!
          </div>
        </div>

        {/* Work with Great People Section */}
        <div className="text-center py-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold  text-gray-900 relative inline-block pb-3 after:content-[''] after:absolute after:w-3/5 after:h-1  after:bottom-0 after:left-1/5 hover:after:w-full hover:after:left-0 after:transition-all after:duration-300">
            Work with Great People
          </h2>
          <p className="text-base text-gray-800">We have a diverse team of hard-working and fun-loving individuals</p>
        </div>

        {/* Features Section */}
      {/* Features Section */}
<div 
  ref={featuresRef} 
  className={`flex flex-wrap justify-between max-w-6xl mx-auto px-4 mb-16 transition-all duration-700 ${featuresInView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
>
  {/* Benefits Card */}
  <div className="w-full md:w-[30%] mb-8 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
    <div className="h-56 overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
        alt="Savings benefits" 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-3 text-center">Benefits</h3>
      <p className="text-gray-800 text-base">
        Shopping with Compare Bazaar means instant price comparisons, exclusive deals, and cashback offers. We save you time and money by showing all options in one place.
      </p>
    </div>
  </div>

  {/* Culture Card */}
  <div className="w-full md:w-[30%] mb-8 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
    <div className="h-56 overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
        alt="Shopping culture" 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-3 text-center">Culture</h3>
      <p className="text-gray-800 text-base">
        At Compare Bazaar, we're all about smart shopping. Our team works hard to bring you the most accurate price comparisons while keeping things simple and stress-free.
      </p>
    </div>
  </div>

  {/* Awards Card */}
  <div className="w-full md:w-[30%] mb-8 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
    <div className="h-56 overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
        alt="Awards and recognition" 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-3 text-center">Awards</h3>
      <p className="text-gray-800 text-base">
        Recognized as "Most Innovative Shopping Platform" in 2023, Compare Bazaar helps millions find the best deals daily. Our users save an average of 30% on every purchase.
      </p>
    </div>
  </div>
</div>

        {/* Open Positions Section */}
        <div 
          ref={positionsRef} 
          className={` py-16 px-4 text-center transition-all duration-700 ${positionsInView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl font-semibold mb-10 text-gray-900 relative inline-block pb-3 after:content-[''] after:absolute after:w-3/5 after:h-1 after:bottom-0 after:left-1/5 hover:after:w-full hover:after:left-0 after:transition-all after:duration-300">
            Open Positions
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {Object.entries(jobDescriptions).map(([title, job]) => (
              <div 
                key={title} 
                className="bg-white rounded-lg shadow-md mb-6 p-6 flex flex-col md:flex-row justify-between items-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-left mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-[#000e54]">{title}</h3>
                  <div className="text-gray-600 flex items-center mt-1">
                    <span className="mr-1">📍</span> {job.location}
                  </div>
                </div>
                <button 
                  onClick={() => handleJobSelect(title)}
                  className="bg-[#ff8633] text-white font-bold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#ff8633] focus:ring-opacity-50"
                >
                  View details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Job Description Section */}
        {selectedJob && (
          <div 
            ref={jobDescriptionRef}
            className="bg-gray-100 py-12 px-4 my-12 rounded-lg shadow-md max-w-4xl mx-auto"
          >
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-[#000e54]">{selectedJob}</h2>
              {jobDescriptions[selectedJob]?.description}
              <div className="mt-8 text-center">
                <button 
                  onClick={() => applicationFormRef.current.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#ff8633] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#ff8633] focus:ring-opacity-50"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Values Section */}
        <div 
          ref={valuesRef}
          className={`py-16 px-4 text-center bg-white transition-all duration-700 ${valuesInView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl font-semibold mb-6 text-900 relative inline-block pb-3 after:content-[''] after:absolute after:w-3/5 after:h-1  after:bottom-0 after:left-1/5 hover:after:w-full hover:after:left-0 after:transition-all after:duration-300">
            Our Values
          </h2>
          <p className="text-base text-gray-800 max-w-3xl mx-auto mb-12">
          At Compare Bazaar, we follow six core values that help shape our everyday decisions. These values guide how we treat our customers, support our teammates, work with our partners, and grow our company. They’re not just words – they’re the foundation of how we do business and make sure everyone we interact with feels respected, valued, and supported.

They remind us to always act with integrity, stay curious, and keep improving. Whether we’re solving a problem or celebrating a win, these values keep us grounded and connected. We believe that by staying true to our core, we create a better experience for everyone — inside and outside the company.
          </p>
          
          <div className="flex flex-wrap justify-center max-w-5xl mx-auto">
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

        {/* Application Form Section */}
        <div 
          ref={applicationRef}
          className={`py-16 px-4  transition-all duration-700 ${applicationInView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
        >
          <div ref={applicationFormRef} className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Apply Now{selectedJob ? `: ${selectedJob}` : ''}
            </h2>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Hidden field for job title */}
              <input type="hidden" name="job_title" value={selectedJob || 'General Application'} />
              
              {/* Personal Information */}
              <div className="form-group transform transition-transform duration-200 hover:translate-x-1">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff8633] focus:border-[#ff8633] outline-none transition-all"
                  required
                />
              </div>
              
              <div className="form-group transform transition-transform duration-200 hover:translate-x-1">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff8633] focus:border-[#ff8633] outline-none transition-all"
                  required
                />
              </div>
              
              <div className="form-group transform transition-transform duration-200 hover:translate-x-1">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff8633] focus:border-[#ff8633] outline-none transition-all"
                  required
                />
              </div>
              
              {/* Resume Link Field */}
              <div className="form-group transform transition-transform duration-200 hover:translate-x-1">
                <label htmlFor="resume_link" className="block text-gray-700 font-bold mb-2">Resume Link </label>
                <input
                  type="url"
                  id="resume_link"
                  name="resume_link"
                  value={formData.resume_link}
                  onChange={handleInputChange}
                  placeholder="URL to your resume (Google Drive Link.)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff8633] focus:border-[#ff8633] outline-none transition-all"
                />
                <p className="text-sm text-gray-500 mt-1">If you have your resume hosted online, you can provide the link here.</p>
              </div>
              
              <div className="form-group transform transition-transform duration-200 hover:translate-x-1">
                <label htmlFor="linkedin" className="block text-gray-700 font-bold mb-2">LinkedIn Profile</label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff8633] focus:border-[#ff8633] outline-none transition-all"
                />
              </div>
              
              {/* Cover Letter */}
              <div className="form-group md:col-span-2 transform transition-transform duration-200 hover:translate-x-1">
                <label htmlFor="cover_letter" className="block text-gray-700 font-bold mb-2">Why are you interested in this position? *</label>
                <textarea
                  id="cover_letter"
                  name="cover_letter"
                  value={formData.cover_letter}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff8633] focus:border-[#ff8633] outline-none transition-all min-h-32 resize-y"
                  required
                ></textarea>
              </div>
              
              {/* Experience */}
              <div className="form-group md:col-span-2 transform transition-transform duration-200 hover:translate-x-1">
                <label htmlFor="experience" className="block text-gray-700 font-bold mb-2">Relevant Experience *</label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff8633] focus:border-[#ff8633] outline-none transition-all min-h-32 resize-y"
                  required
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-[#ff8633] text-white font-bold rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#ff8633] focus:ring-opacity-50 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
              
              {/* Form Status Message */}
              {formStatus.show && (
                <div className={`md:col-span-2 p-4 rounded-lg mt-4 ${formStatus.success ? 'bg-blue-100 text-[#000e54] border border-[#000e54]' : 'bg-red-100 text-red-800 border border-red-200'}`}>
                  <strong>{formStatus.success ? 'Success!' : 'Error!'}</strong> {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      
      <WideDiv/>
      <Footer/>
    </>
  );
}

export default CareersPage;