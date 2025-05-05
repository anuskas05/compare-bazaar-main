import React, { useState } from 'react';
import PhoneSystemCardCommon from './PhoneSystemCardCommon';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';
 import Feedback from './Feedback';
import WebsiteBuildingForm from './WebsiteBuildingForm';
import Modal from './Modal';

import WebsiteBuilderComparison from './WebsiteBuilderComparison';

const BestWebsiteBuildingPlatform= () => {
  const [showMore, setShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const homeTestimonials = [
    {
      avatar: "P",
      avatarColor: "bg-purple-600",
      name: "Riya Sinhg.",
      date: "06/12/2024",
      stars: 5,
      text: "Blake and Courtney are a powerhouse if your are new to the leads world. They kept their end of the bargain lots of quality leads."
    },
    {
      avatar: "E",
      avatarColor: "bg-blue-500",
      name: "Eric L.",
      date: "10/31/2023",
      stars: 5,
      text: "I needed a few more vendors to gather information for a lease or purchase of a copier for our church. 360Connect did just that."
    }
  ];
  const systems = [
    {
      name: "GoTo",
      logo: "/images/goto.png",
      bestFor: "Best for Small Businesses Customer Services",
      price: "Starts at $19.95 per user/month",
      videoCapacity: "Video capacity: 100",
      support: "24/7 customer support",
      link: "#",
     
    },
    {
      name: "RingCentral",
      logo: "/images/ringcentral.png",
      bestFor: "Best for Inbound Customer Services",
      price: "Starts at $19.95 per user/month",
      videoCapacity: "Video capacity: 100",
      support: "24/7 customer support",
      link: "#",
      
    },
    {
      name: "Goanswer",
      logo: "/images/goan.png",
      bestFor: "Best Outsourced Call Center Service",
      price: "Starts at $10 per user/month",
      videoCapacity: "Video capacity: 1000",
      support: "24/7 customer support",
      link: "#",
     
    },
    {
      name: "Twiilio",
      logo: "/images/bomb.png",
      bestFor: "Best for Complex Communication",
      price: "Starts at $36 per user/month",
      videoCapacity: "Video capacity: 250",
      support: "24/7 customer support",
      link: "#",
    
    },
    {
      name: "Salesforce",
      logo: "/images/cloud.png",
      bestFor: "Best for Improving Customer Service",
      price: "Starts at $36 per user/month",
      videoCapacity: "Video capacity: 250",
      support: "24/7 customer support",
      link: "#",
      linkText: "Links to NextivoONE"
    },
  ];

  // Ripple effect for buttons
  const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    ripple.classList.add("ripple");
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };
  const advantages = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="5" />
          <path d="M3 21h18a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
          <path d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path d="M17 18h-2m-3 0H5" />
          <rect x="8" y="14" width="8" height="4" rx="1" />
        </svg>
      ),
      title: 'Highly trained and skilled professionals'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <line x1="12" y1="8" x2="12" y2="8" />
          <path d="M15 4.5A3 3 0 0 0 9 6a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2c0 1.1-.9 2-2 2" />
          <path d="M9 12a2 2 0 0 1 0-4" />
        </svg>
      ),
      title: 'Expertise in technology'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          <path d="M14 2v4" />
          <path d="M18 4l-2 2" />
        </svg>
      ),
      title: 'Enables 24*7 customer support'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: 'Preferred destination for outsourcing'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: 'Cost-effective customer support'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="2" x2="9" y2="4" />
          <line x1="15" y1="2" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="22" />
          <line x1="15" y1="20" x2="15" y2="22" />
          <line x1="20" y1="9" x2="22" y2="9" />
          <line x1="20" y1="14" x2="22" y2="14" />
          <line x1="2" y1="9" x2="4" y2="9" />
          <line x1="2" y1="14" x2="4" y2="14" />
        </svg>
      ),
      title: 'Modernized Infrastructure and technology'
    }
  ];

//values
const valueProps = [
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M45 15C45 12.9 44.1 11.1 42.6 9.6C41.1 8.1 39.3 7.2 37.2 7.2H27C27 5.1 26.1 3.3 24.6 1.8C23.1 0.3 21.3 0 19.2 0H15C12.9 0 11.1 0.9 9.6 2.4C8.1 3.9 7.2 5.7 7.2 7.8V37.2C7.2 39.3 8.1 41.1 9.6 42.6C11.1 44.1 12.9 45 15 45H37.2C39.3 45 41.1 44.1 42.6 42.6C44.1 41.1 45 39.3 45 37.2V15Z" 
          stroke="#000e54" 
          strokeWidth="2" 
          fill="none"/>
        </svg>
      ),
      title: 'Experts',
      description: '2 decades of experience'
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 7.5C33.9 7.5 37.5 8.7 40.8 11.1C44.1 13.5 46.2 16.8 47.1 21H39C38.4 19.2 37.5 17.7 36.3 16.5C35.1 15.3 33.6 14.4 31.8 13.8C30 13.2 28.2 13.2 26.4 13.8C24.6 14.4 23.1 15.3 21.9 16.5C20.7 17.7 19.8 19.2 19.2 21H10.5C11.4 16.8 13.5 13.5 16.8 11.1C20.1 8.7 24 7.5 28.5 7.5H30Z" 
          stroke="#000e54" 
          strokeWidth="2" 
          fill="none"/>
          <path d="M31.8 46.2C33.6 45.6 35.1 44.7 36.3 43.5C37.5 42.3 38.4 40.8 39 39H47.1C46.2 43.2 44.1 46.5 40.8 48.9C37.5 51.3 33.9 52.5 30 52.5H28.5C24 52.5 20.1 51.3 16.8 48.9C13.5 46.5 11.4 43.2 10.5 39H19.2C19.8 40.8 20.7 42.3 21.9 43.5C23.1 44.7 24.6 45.6 26.4 46.2C28.2 46.8 30 46.8 31.8 46.2Z" 
          stroke="#000e54" 
          strokeWidth="2" 
          fill="none"/>
          <path d="M37.5 30C37.5 31.6 36.9 33 35.7 34.2C34.5 35.4 33.1 36 31.5 36H27C27 37.6 26.4 39 25.2 40.2C24 41.4 22.6 42 21 42H19.5C17.9 42 16.5 41.4 15.3 40.2C14.1 39 13.5 37.6 13.5 36V24C13.5 22.4 14.1 21 15.3 19.8C16.5 18.6 17.9 18 19.5 18H21C22.6 18 24 18.6 25.2 19.8C26.4 21 27 22.4 27 24H31.5C33.1 24 34.5 24.6 35.7 25.8C36.9 27 37.5 28.4 37.5 30Z" 
          stroke="#000e54" 
          strokeWidth="2" 
          fill="none"/>
          <circle cx="38" cy="26" r="4" stroke="#3B6794" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: 'Minds',
      description: '2000+ agile thinking minds'
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="24" stroke="#000e54" strokeWidth="2" fill="none"/>
          <path d="M30 12L34.9 23.2L47 24.7L38.5 33.4L40.8 45.7L30 39.8L19.2 45.7L21.5 33.4L13 24.7L25.1 23.2L30 12Z" 
          stroke="#000e54" 
          strokeWidth="2" 
          fill="none"/>
        </svg>
      ),
      title: 'Results',
      description: '6 Fortune 500 clients'
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 20V8M20 8L15 13M20 8L25 13" stroke="#000e54" strokeWidth="2"/>
          <path d="M30 20V8M30 8L25 13M30 8L35 13" stroke="#000e54" strokeWidth="2"/>
          <path d="M40 20V8M40 8L35 13M40 8L45 13" stroke="#000e54" strokeWidth="2"/>
          <path d="M20 50V40M30 50V40M40 50V40" stroke="#000e54" strokeWidth="2"/>
          <circle cx="20" cy="30" r="6" stroke="#000e54" strokeWidth="2" fill="none"/>
          <circle cx="40" cy="30" r="6" stroke="#000e54" strokeWidth="2" fill="none"/>
          <circle cx="30" cy="33" r="4" stroke="#000e54" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: 'Growth',
      description: '20+ languages'
    }
  ];
  const additionalText = " The website builder landscape has evolved significantly, with AI-powered tools and drag-and-drop editors making professional web design accessible to everyone. Today's platforms offer advanced features like responsive templates, e-commerce integrations, SEO tools, and marketing automation. These solutions help businesses create stunning websites without coding knowledge. When evaluating different builders, consider factors like customization options, scalability, loading speed, and third-party integrations. Many platforms now include hosting, domain management, and analytics in a single package.";

return (
  <>
    <Navbar />
    <div className="max-w-6xl mx-auto p-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Best Website Building Platforms of 2025</h1>

        <p className="text-gray-800 text-base md:text-base mb-4">
          At <span className="text-orange-500 font-semibold">Compare Bazar</span>, we understand how crucial a professional online presence is for your business. That's why we recommend the <span className="text-orange-500 font-semibold">best website builders</span> that combine ease-of-use with powerful features for modern businesses. The <span className="text-orange-500 font-semibold">top web design platforms</span> offer intuitive drag-and-drop editors, mobile-responsive templates, and built-in SEO tools to help you create a high-performing website. Whether you're launching a portfolio, blog, or online store, the right website builder can transform your digital presence without requiring technical skills.
        </p>
      </header>

      <section className="mb-6">
        <p className="text-gray-800 text-base md:text-base">
          As your online presence grows, having the right website tools becomes essential. Beginners might start with simple page builders, but as your business expands, you'll need a platform that scales with your needs. Choosing the <span className="text-orange-500 font-semibold">best website building platform</span> can significantly impact your ability to attract visitors, convert leads, and grow your brand. At <span className="text-orange-500 font-semibold">Compare Bazar</span>, we help you find the perfect solution offering features like e-commerce functionality, blogging tools, form builders, and analytics integrations.
          {showMore && (
            <span className="block mt-3">
              {additionalText} Additionally, the <span className="text-orange-500 font-semibold">best website platforms</span> provide advanced capabilities like AI content generation, membership areas, multilingual support, and automated backups. With <span className="text-orange-500 font-semibold">Compare Bazar</span>, you can easily compare top website builders, evaluate their templates and features, and choose the one that matches your vision. Let us guide you to the tools that will make website creation effortless and effective.
            </span>
          )}
        </p>
        <button
          className="mt-2 text-[#000e54] font-medium flex items-center"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'LESS -' : 'MORE +'}
        </button>
      </section>

      {/* Responsive Grid Layout */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6">
        {systems.map((system, index) => (
          <PhoneSystemCardCommon 
            key={index} 
            system={system} 
            createRipple={createRipple} 
            onCompareQuotesClick={() => setIsModalOpen(true)}
          />
        ))}
        </div>
    </div>
    
    {/* <WebsiteBuilding/> */}
    <WebsiteBuilderComparison/>
    {/* <Feedback 
        title="What Our Customers Say"
        testimonials={homeTestimonials}
      /> */}
    <WideDiv/>
    <Footer/>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <WebsiteBuildingForm  />
      </Modal>
    </>
  );
};

export default BestWebsiteBuildingPlatform;