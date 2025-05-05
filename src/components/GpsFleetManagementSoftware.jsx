import React, { useState } from 'react';
import PhoneSystemCardCommon from './PhoneSystemCardCommon';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';
import Feedback from './Feedback';
import GPSFleetForm from './GPSFleetForm';
import Modal from './Modal';
import GPSFleetContent from './GPSFleetContent';
import TableOfContents from './TableOfContents';
import { Link } from 'react-router-dom';

const GpsFleetManagementSoftware = () => {
  const [showMore, setShowMore] = useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);
  const systems = [
    {
      name: "Azuga",
      logo: "/images/azuga.png",
      bestFor:"Best for Midsize Fleets and Larger Fleets",
      price: "Starts at $19.95 per user/month",
      videoCapacity: "Video capacity: 100",
      support: "24/7 customer support",
      link: "#",
    },
    {
      name: "Motive",
      logo: "/images/motive.png",
      bestFor: "Best for  Accountability and Automation",
      price: "Starts at $19.95 per user/month",
      videoCapacity: "Video capacity: 100",
      support: "24/7 customer support",
      link: "#",
    
    },
    {
      name: "Teletracnavman",
      logo: "/images/tele.png",
      bestFor: "Best for Maintenance and Safety",
      price: "Starts at $10 per user/month",
      videoCapacity: "Video capacity: 1000",
      support: "24/7 customer support",
      link: "#",
    
    },
    {
      name: "Verizon Connect",
      logo: "/images/verizon.png",
      bestFor:"Best for Midsize Fleets Services",
      price: "Starts at $36 per user/month",
      videoCapacity: "Video capacity: 250",
      support: "24/7 customer support",
      link: "#",

    },
    {
      name: "Samsara",
      logo: "/images/samsara.png",
      bestFor: "Best for  Sustainability and Safety",
      price: "Starts at $19.95 per user/month",
      videoCapacity: "Video capacity: 100",
      support: "24/7 customer support",
      link: "#",
     
    },
  ];
  const homeTestimonials = [
    {
      avatar: "P",
      avatarColor: "bg-purple-600",
      name: "Pedro G.",
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
  const contents = [
    { id: 1, title: "Introduction to GPS Fleet", slug: "intro-gps" },
    { id: 2, title: "What Is GPS Fleet Tracking?", slug: "what-is-gpstracking" },
    { id: 3, title: "How Does GPS Fleet Tracking Works", slug: "gpstracking-working" },
    { id: 4, title: "Benefits of GPS Fleet Tracking", slug: "gpstracking-benefits" },
    { id: 5, title: "Key Features For GPS Fleet Management System", slug: "gpstracking-features" },
    { id: 6, title: "How to Choose a Fleet Tracking Service?", slug: "gpstracking-howchoose" },
    { id: 7, title: "Methodology", slug: "gps-methodology" },
    { id: 8, title: "What Are Some Alternative Fleet Tracking Options?", slug: "gps-alternative" },
    { id: 9, title: "Related Articles", slug: "gpsfleet-articles" },
    { id: 10, title: "FAQs", slug: "gpsfleet-faq" } ,
    
    
];
 
const additionalText = " The modern fleet management landscape has evolved significantly, with real-time GPS tracking replacing traditional manual logging in many organizations. Today's fleet management systems offer advanced features like AI-powered route optimization, driver behavior analytics, fuel consumption monitoring, and comprehensive maintenance scheduling. These tools help businesses reduce operational costs, improve safety, and streamline their logistics processes. When evaluating different providers, it's important to consider factors such as scalability, real-time accuracy, integration capabilities, and total cost of ownership. Many systems now include unified platform capabilities, bringing together tracking, diagnostics, compliance tools, and analytics in a single dashboard.";

return (
  <>
    <Navbar />
    <div className="max-w-6xl mx-auto p-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Best GPS Fleet Management Systems of 2025</h1>

        <p className="text-gray-800 text-base md:text-base mb-4">
          At <span className="text-orange-500 font-semibold">Compare Bazar</span>, we understand the importance of efficient logistics for your business. That's why we recommend the <span className="text-orange-500 font-semibold">best GPS fleet management systems</span> that provide real-time visibility and control over your vehicles. The <span className="text-orange-500 font-semibold">best fleet management solutions</span> offer AI-driven route optimization, advanced telematics, and real-time tracking to help you manage your fleet more effectively. Whether you're running a small delivery service or a large transportation company, the right GPS tracking system can transform how you monitor, maintain, and optimize your fleet operations.
        </p>
      </header>

      <section className="mb-6">
        <p className="text-gray-800 text-base md:text-base">
          As your fleet grows, ensuring you have the right tracking tools is critical. Small operations can often manage with basic vehicle tracking, but as your business expands, it's essential that your management tools scale accordingly. Implementing the <span className="text-orange-500 font-semibold">best GPS fleet management system</span> can significantly enhance your ability to reduce costs, improve driver safety, and increase operational efficiency. At <span className="text-orange-500 font-semibold">Compare Bazar</span>, we help you find the perfect fleet solution that aligns with your business needs, offering features like real-time GPS tracking, maintenance alerts, and comprehensive reporting.
          {showMore && (
            <span className="block mt-3">

              {additionalText} Additionally, the <span className="text-orange-500 font-semibold"> <Link to="/GPSFleetTracking" className="hover:underline">
              best GPS fleet management systems
          </Link></span> provide advanced capabilities such as geofencing, ELD compliance, and predictive maintenance to optimize your fleet operations. With <span className="text-orange-500 font-semibold">Compare Bazar</span>, you can easily compare the top fleet management solutions, evaluate their features, and choose the one that best fits your growing business. Let us guide you to the tools that will take your logistics and fleet management to the next level.
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

      <TableOfContents contents={contents}/>
      <GPSFleetContent/>
      
      {/* <Feedback 
        title="What Our Customers Say"
        testimonials={homeTestimonials}
      /> */}
      <WideDiv/>
      <Footer/>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <GPSFleetForm/>
         </Modal>
    
    </>
  );
};

export default GpsFleetManagementSoftware;