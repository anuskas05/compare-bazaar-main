import React, { useState } from 'react';
import PhoneSystemCardCommon from './PhoneSystemCardCommon';
import PhoneSystemContent from './PhoneSystemContent';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';
import Modal from './Modal';
import EmailMarketingForm from './EmailMarketingForm';
import TableOfContents from './TableOfContents';
import EmailMarketingContent from './EmailMarketingContent';
import Feedback from './Feedback';

const EmailMarketing = () => {
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

  const contents = [
    { id: 1, title: "Introduction to Best Email Marketing", slug: "intro-email" },
    { id: 2, title: "What Is Email Marketing?", slug: "what-is-emailmarketing" },
    { id: 3, title: "How Does Email Marketing Works", slug: "emailmarketing-working" },
    { id: 4, title: "Benefits of Email Marketing", slug: "emailmarketing-benefits" },
    { id: 5, title: "Key Features For Email Marketing services", slug: "email-features" },
    { id: 6, title: "How to Choose Email Marketing Service?", slug: "email-howchoose" },
    { id: 7, title: "Is Email Marketing Worthit?", slug: "email-worthit" },
    { id: 8, title: "What Are Some Alternative Email Marketing Services?", slug: "email-alternative" },
    { id: 9, title: "Related Articles", slug: "email-articles" },
    { id: 10, title: "FAQs", slug: "email-faq" } ,
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
    ripple.style.width = ripple.style.height =` ${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    ripple.classList.add("ripple");
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  const additionalText = " The modern email marketing landscape has evolved significantly, with AI-powered personalization replacing traditional mass emails in many organizations. Today's email marketing systems offer advanced features like automated customer journeys, behavior-based targeting, A/B testing capabilities, and comprehensive analytics dashboards. These tools help businesses increase conversion rates, improve customer engagement, and streamline their marketing processes. When evaluating different providers, it's important to consider factors such as deliverability rates, template customization options, integration capabilities, and total cost of ownership. Many platforms now include unified marketing capabilities, bringing together email campaigns, landing pages, contact management, and performance analytics in a single dashboard.";
  
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 ">The Best Business Email Marketing Platforms of 2025</h1>
  
          <p className="text-gray-800 text-base md:text-base mb-4">
            At <span className="text-orange-500 font-semibold">Compare Bazar</span>, we understand the importance of effective communication for your business. That's why we recommend the <span className="text-orange-500 font-semibold">best email marketing platforms</span> that provide powerful campaign tools and customer insights. The <span className="text-orange-500 font-semibold">best email marketing solutions</span> offer personalized automation, intelligent segmentation, and comprehensive analytics to help you connect with your audience more effectively. Whether you're running a small online store or a large e-commerce company, the right email marketing system can transform how you engage, convert, and retain your customers.
          </p>
        </header>
  
        <section className="mb-6">
          <p className="text-gray-800 text-base md:text-base">
            As your business grows, ensuring you have the right email marketing tools is critical. Small operations can often manage with basic email campaigns, but as your customer base expands, it's essential that your marketing tools scale accordingly. Implementing the <span className="text-orange-500 font-semibold">best business email marketing platform</span> can significantly enhance your ability to increase revenue, improve customer loyalty, and boost marketing efficiency. At <span className="text-orange-500 font-semibold">Compare Bazar</span>, we help you find the perfect email solution that aligns with your business needs, offering features like automated workflows, responsive templates, and detailed performance reporting.
            {showMore && (
              <span className="block mt-3">
                {additionalText} Additionally, the <span className="text-orange-500 font-semibold">best business email marketing platforms</span> provide advanced capabilities such as dynamic content, subscriber lifecycle management, and predictive sending to optimize your campaign performance. With <span className="text-orange-500 font-semibold">Compare Bazar</span>, you can easily compare the top email marketing solutions, evaluate their features, and choose the one that best fits your growing business. Let us guide you to the tools that will take your digital marketing and customer communication to the next level.
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
<EmailMarketingContent/>
{/* <Feedback 
        title="What Our Customers Say"
        testimonials={homeTestimonials}
      /> */}
    <WideDiv/>
    <Footer/>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <EmailMarketingForm />
      </Modal>
    </>
  );
};

export default EmailMarketing;