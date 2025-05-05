import React, { useState } from 'react';
import PhoneSystemCardCommon from './PhoneSystemCardCommon';
import EmployeeManagementWebpage from './EmployeeManagementWebpage';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';

import EmployeeSection from './EmployeeSection';
import Employeeform from './Employeeform';
import Modal from './Modal'

import TableOfContents from './TableOfContents';

const  BestEmployeeMangementSoftware= () => {
  const [showMore, setShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const systems = [
    {
      name: "Teramind",
      logo: "/images/teramind.png",
     bestFor: "Best for Security Threat Detection",
      price: "Starts at $19.95 per user/month",
      videoCapacity: "Video capacity: 100",
      support: "24/7 customer support",
      link: "#",

    },
    {
      name: "ActivTrack",
      logo: "/images/activ.png",
      bestFor: "Best for Workforce Analytics",
      price: "Starts at $19.95 per user/month",
      videoCapacity: "Video capacity: 100",
      support: "24/7 customer support",
      link: "#",
     
    },
    {
      name: "Hubstaff",
      logo: "/images/hubs.png",
      bestFor: "Best for Remote Teams management",
      price: "Starts at $10 per user/month",
      videoCapacity: "Video capacity: 1000",
      support: "24/7 customer support",
      link: "#",
     
    },
    {
      name: "BambooHR",
      logo: "/images/bomb.png",
      bestFor: "Best for Performance Management",
      price: "Starts at $36 per user/month",
      videoCapacity: "Video capacity: 250",
      support: "24/7 customer support",
      link: "#",
  
    },
    {
      name: "Veriato",
      logo: "/images/veri.png",
      bestFor: "Best for Larger Organizations",
      price: "Starts at $36 per user/month",
      videoCapacity: "Video capacity: 250",
      support: "24/7 customer support",
      link: "#",
    
    },
  ];
  const contents = [
    { id: 1, title: "Introduction to Best Employee Management System", slug: "intro-employee" },
    { id: 2, title: "What Is Employee Management System?", slug: "what-is-employeemanagement" },
    { id: 3, title: "What Makes the Best Employee Management System?", slug: "whatmakesbest-ems" },
    { id: 4, title: "Implementation & Usage?", slug: "implementation-ems" },
    { id: 5, title: "Key Features For Best Employee Manegement System", slug: "employee-features" },
    { id: 6, title: "Benefits of Best Employee Manegemt System", slug: "employeemanagement-benefits" },
    { id: 7, title: "Integration Capabilities", slug: "employee-integration" },
    { id: 8, title: "Choosing the Right EMS for Your Company Size?", slug: "employee-choose" },
    { id: 9, title: "Notice", slug: "employee-notice" },
    { id: 10, title: "Related Articles", slug: "employee-articles" },
    { id: 11, title: "FAQs", slug: "employee-faq" } ,
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

  const additionalText = " The modern workforce management landscape has evolved significantly, with AI-powered HR tools replacing traditional manual processes in many organizations. Today's employee management systems offer advanced features like automated onboarding, performance tracking, shift scheduling, time-off management, and comprehensive analytics dashboards. These tools help businesses improve productivity, enhance employee engagement, and streamline HR processes. When evaluating different providers, it's important to consider factors such as user experience, customization options, integration capabilities, and total cost of ownership. Many platforms now include unified HR capabilities, bringing together payroll processing, benefits administration, performance reviews, and workforce analytics in a single dashboard.";
  
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Best Employee Management System of 2025</h1>
  
          <p className="text-gray-800 text-base md:text-base mb-4">
            At <span className="text-orange-500 font-semibold">Compare Bazar</span>, we understand the importance of effective workforce management for your business. That's why we recommend the <span className="text-orange-500 font-semibold">best employee management platforms</span> that provide powerful HR tools and workforce insights. The <span className="text-orange-500 font-semibold">best employee management solutions</span> offer automated workflows, intelligent performance tracking, and comprehensive analytics to help you manage your team more effectively. Whether you're running a small business or a large enterprise, the right employee management system can transform how you hire, engage, and retain your talent.
          </p>
        </header>
  
        <section className="mb-6">
          <p className="text-gray-800 text-base md:text-base">
            As your company grows, ensuring you have the right HR tools is critical. Small operations can often manage with basic spreadsheets, but as your workforce expands, it's essential that your management systems scale accordingly. Implementing the <span className="text-orange-500 font-semibold">best business employee management platform</span> can significantly enhance your ability to improve productivity, boost employee satisfaction, and streamline HR operations. At <span className="text-orange-500 font-semibold">Compare Bazar</span>, we help you find the perfect HR solution that aligns with your business needs, offering features like automated onboarding, performance reviews, shift scheduling, and detailed workforce analytics.
            {showMore && (
              <span className="block mt-3">
                {additionalText} Additionally, the <span className="text-orange-500 font-semibold">best business employee management platforms</span> provide advanced capabilities such as AI-driven hiring tools, employee lifecycle management, and predictive analytics to optimize your workforce performance. With <span className="text-orange-500 font-semibold">Compare Bazar</span>, you can easily compare the top HR management solutions, evaluate their features, and choose the one that best fits your growing company. Let us guide you to the tools that will take your human resources and team management to the next level.
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
      
      <TableOfContents contents={contents} />
      <EmployeeSection/>
  
    </div>
    <WideDiv/>
    <Footer/>
     <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Employeeform/>
                 </Modal>
    </>
  );
};

export default BestEmployeeMangementSoftware;