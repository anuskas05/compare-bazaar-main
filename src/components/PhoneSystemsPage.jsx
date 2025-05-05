import React, { useState } from 'react';
import PhoneSystemCardCommon from './PhoneSystemCardCommon';
import PhoneSystemContent from './PhoneSystemContent';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';
import Modal from './Modal';
import BusinessPhoneSystemForm from './BusinessPhoneSystemForm';
import { Link } from 'react-router-dom';

const PhoneSystemsPage = () => {
  const [showMore, setShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const systems = [
  
    {
      name: "Ooma Office",
      logo: "/images/ooma.png",
      bestFor: "Best for Ease of Use",
      price: "Starts at $19.95 per user/month",
      videoCapacity: "Video capacity: 100",
      support: "24/7 customer support",
      link: "https://www.ooma.com/?srsltid=AfmBOopMghJy72vEAYHkgK_7Ny9Js61zv5HdvxWmPXpeW3AhzGg_Q0cz",
    
    },
    {
      name: "RingEX",
      logo: "/images/ringcentral.png",
      bestFor: "Best for Ease of Use",
      price: "Starts at $19.95 per user/month",
      videoCapacity: "Video capacity: 100",
      support: "24/7 customer support",
      link: "#",
     
    },
    {
      name: "Zoom",
      logo: "/images/zoom.png",
      bestFor: "Video Conferencing",
      price: "Starts at $10 per user/month",
      videoCapacity: "Video capacity: 1000",
      support: "24/7 customer support",
      link: "#",
     
    },
    {
      name: "NextivoONE",
      logo: "/images/nextiva.png",
      bestFor: "Best for Support",
      price: "Starts at $36 per user/month",
      videoCapacity: "Video capacity: 250",
      support: "24/7 customer support",
      link: "#",

    },
    {
      name: "Vonage",
      logo: "/images/vonage.png",
      bestFor: "Best for Support",
      price: "Starts at $36 per user/month",
      videoCapacity: "Video capacity: 250",
      support: "24/7 customer support",
      link: "#",
  
    },
  ];

  // Ripple effect for buttons
  const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height =` ${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    ripple.classList.add("ripple");
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

 
  const additionalText = " The modern business phone system landscape has evolved significantly, with cloud-based VoIP solutions replacing traditional landlines in many organizations. Today's business phone systems offer advanced features like AI-powered call routing, CRM integration, voicemail-to-text transcription, and comprehensive analytics. These tools help businesses enhance customer service, improve team collaboration, and streamline communication workflows. When evaluating different providers, it's important to consider factors such as scalability, call quality, integration capabilities, and total cost of ownership. Many systems now include unified communications capabilities, bringing together voice, video, messaging, and conferencing in a single platform.";

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4 py-12 ">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Best Business Phone Systems of 2025</h1>
  
          <p className="text-gray-800 text-base md:text-base mb-4">
            At <span className="text-orange-500 font-semibold">Compare Bazar</span>, we understand the importance of seamless communication for your business. That's why we recommend the <span className="text-orange-500 font-semibold">best business phone systems</span> that provide crystal-clear call quality and advanced features for modern enterprises. The <span className="text-orange-500 font-semibold">best VoIP and UCaaS solutions</span> offer AI-driven call analytics, auto-attendants, and seamless integrations to help you manage communications more effectively. Whether you're running a small startup or a large corporation, the right phone system can transform how you connect with customers and collaborate with your team.
          </p>
          <p class="text-gray-700 mb-4">
    Looking for the best business phone system for your company?
    <a href="https://www.buyerzone.com/telecom-equipment/business-phone-systems/rfqz/" 
       onclick="document.location.href='https://www.buyerzone.com/telecom-equipment/business-phone-systems/rfqz/?publisherId=59578&amp;publisherTypeId=1788'; return false;" 
       rel="nofollow" 
       class="text-[#000e54] hover:text-[#ff8633] hover:underline font-medium transition-colors duration-200">
        &nbsp;Get free quotes from top vendors&nbsp;
    </a>
    to compare pricing and features tailored to your business needs.
</p>
        </header>
  
        <section className="mb-6">
          <p className="text-gray-800 text-base md:text-base">
            As your business grows, ensuring you have the right communication tools is critical. Small teams can often manage with basic phone services, but as your operations expand, it's essential that your phone system scales accordingly. Implementing the <span className="text-orange-500 font-semibold">best business phone system</span> can significantly enhance your ability to improve customer service, reduce costs, and boost productivity. At <span className="text-orange-500 font-semibold">Compare Bazar</span>, we help you find the perfect communication solution that aligns with your business needs, offering features like call forwarding, video conferencing, and real-time analytics.
            {showMore && (
              <span className="block mt-3">
                {additionalText} Additionally, the <span className="text-orange-500 font-semibold">
          <Link to="/BusinessPhoneSystem" className="hover:underline">
            best business phone system
          </Link>
</span> provide advanced capabilities such as AI-powered virtual assistants, call recording, and multi-channel support to optimize your communications. With <span className="text-orange-500 font-semibold"> <Link to="/BusinessPayroll" className="hover:underline">
          Compare Bazar
          </Link>
</span>, you can easily compare the top phone system providers, evaluate their features, and choose the one that best fits your growing business. Let us guide you to the tools that will take your business communications to the next level.
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

      {/* Added Business component */}
      <PhoneSystemContent />
    </div>
    <WideDiv/>
    <Footer/>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <BusinessPhoneSystemForm />
      </Modal>
    </>
  );
};

export default PhoneSystemsPage;