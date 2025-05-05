import React, { useState } from 'react';
import PhoneSystemCardCommon from './PhoneSystemCardCommon';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';
import TableOfContents from './TableOfContents';
import ProjectManagementContent from './ProjectManagementContent';


const BestProjectManagement = () => {
  const [showMore, setShowMore] = useState(false);

  const systems = [
   {
      name: "Ooma Office",
      logo: "/images/ooma.png",
      bestFor: "Best for Ease of Use",
      price: "Starts at $19.95 per user/month",
      videoCapacity: "Video capacity: 100",
      support: "24/7 customer support",
      link: "https://www.ooma.com/?srsltid=AfmBOopMghJy72vEAYHkgK_7Ny9Js61zv5HdvxWmPXpeW3AhzGg_Q0cz",
      linkText: "Links to Ooma Office"
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

  const contents = [
    { id: 1, title: "Introduction to Best Project Management Software", slug: "intro-project" },
    { id: 2, title: "What Is Project Management Software?", slug: "what-is-projectmanagementsoftware" },
    { id: 3, title: "How Does Project Management Software Works", slug: "projectmanagementsoftware-working" },
    { id: 4, title: "Approach of Project Management System", slug: "projectmanagementsoftware-approach" },
    { id: 5, title: "Key Features For Project Management System", slug: "project-feature" },
    { id: 6, title: "Complete Business Software Ecosystem", slug: "project-ecosystem" },
    { id: 7, title: "Future Trends in Project Management Tools", slug: "project-trends" },
    { id: 8, title: "Related Articles", slug: "project-articles" },
    { id: 9, title: "FAQs", slug: "project-faq" } ,
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

  const additionalText = "The project management software landscape has evolved significantly, with AI-powered automation replacing manual task tracking in many organizations. Today's project management systems offer advanced features like predictive scheduling, resource allocation algorithms, real-time collaboration tools, and comprehensive performance dashboards. These tools help teams deliver projects faster, improve cross-functional alignment, and streamline workflows. When evaluating different solutions, it's important to consider factors such as scalability, customization options, integration capabilities, and team adoption rates. Many platforms now include unified work management capabilities, bringing together task tracking, document collaboration, time management, and portfolio analytics in a single interface.";

  return (
    <>
      <Navbar />
   
      <div className="max-w-6xl mx-auto p-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Best Project Management Software of 2025</h1>
  
          <p className="text-gray-800 text-base md:text-base mb-4">
            At <span className="text-orange-500 font-semibold">Compare Bazar</span>, we understand the importance of efficient project execution for your business. That's why we recommend the <span className="text-orange-500 font-semibold">best project management platforms</span> that provide powerful planning tools and team collaboration features. The <span className="text-orange-500 font-semibold">top project management solutions</span> offer intelligent task automation, multi-view project tracking, and real-time progress analytics to help you deliver projects successfully. Whether you're managing a small team or enterprise-level initiatives, the right project management system can transform how you plan, execute, and monitor your work.
          </p>
        </header>
  
        <section className="mb-6">
          <p className="text-gray-800 text-base md:text-base">
            As your projects grow in complexity, having the right management tools becomes critical. Small teams might manage with basic task lists, but as your initiatives scale, you need software that grows with you. Implementing the <span className="text-orange-500 font-semibold">best project management platform</span> can significantly enhance your ability to meet deadlines, optimize resources, and maintain visibility across all projects. At <span className="text-orange-500 font-semibold">Compare Bazar</span>, we help you find the perfect solution that aligns with your workflow, offering features like Gantt charts, Kanban boards, workload balancing, and customizable reporting.
            {showMore && (
              <span className="block mt-3">
                {additionalText} Additionally, the <span className="text-orange-500 font-semibold">best project management platforms</span> provide advanced capabilities such as risk prediction, budget tracking, client portals, and AI-assisted scheduling to optimize your project outcomes. With <span className="text-orange-500 font-semibold">Compare Bazar</span>, you can easily compare top solutions, evaluate their collaboration features, and choose the one that best fits your organizational needs. Let us guide you to the tools that will take your project delivery and team productivity to the next level.
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

    
    <TableOfContents contents={contents} />

    <ProjectManagementContent/>
    <WideDiv/>
    <Footer/>
    </>
  );
};

export default BestProjectManagement;