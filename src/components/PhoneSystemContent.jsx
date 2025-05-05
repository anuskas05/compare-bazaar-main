import React, { useState,useRef,useEffect } from "react";
import busimage from "../assets/images/bg.webp";
import Article from "./ArticleLayoutCommon";
import Feedback from "./Feedback";
import Storage from "./ShippingContainerInfoCards";
import FAQ from "./FAQ";
import TableOfContents from "./TableOfContents";
import ShopComponent from "./ShopComponent";

const PhoneSystemContent = () => {
  // CARDS
  const createSlug = (text) => {
    return text.toLowerCase().replace(/\s+/g, "-").replace(/[&]/g, "and");
  };
  const homeTestimonials = [
    {
      avatar: "R",
      avatarColor: "bg-purple-600",
      name: "Riya Singh",
      date: "06/12/2024",
      stars: 5,
      text: "Compare Bazaar's email marketing services delivered exceptional results. Their team provided quality leads that significantly boosted our conversion rates—exactly what they promised."
    },
    {
      avatar: "E",
      avatarColor: "bg-blue-500",
      name: "Eric L.",
      date: "10/31/2023",
      stars: 5,
      text: "I needed reliable vendors for our business phone system upgrade. Compare Bazaar connected us with perfect options that fit our budget and requirements. Couldn't be happier!"
    },
    {
      avatar: "S",
      avatarColor: "bg-green-600",
      name: "Sunil Mehta",
      date: "02/20/2024",
      stars: 5,
      text: "The business phone system Compare Bazaar recommended was incredibly easy to set up. Our team transitioned smoothly, and the call quality is crystal clear across all our locations!"
    },
    {
      avatar: "J",
      avatarColor: "bg-yellow-500",
      name: "James M.",
      date: "01/15/2024",
      stars: 4,
      text: "Compare Bazaar's CRM software implementation was smooth with reliable support. Had a minor learning curve initially, but their customer service team handled our questions promptly."
    },
    {
      avatar: "A",
      avatarColor: "bg-red-500",
      name: "Anita Kumar",
      date: "03/05/2024",
      stars: 5,
      text: "Compare Bazaar's call center solution has helped my small business stay organized and professional. Their voicemail-to-email feature is a lifesaver for our remote team!"
    },
    {
      avatar: "D",
      avatarColor: "bg-indigo-600",
      name: "Deepak Rao",
      date: "04/02/2024",
      stars: 5,
      text: "Absolutely recommend Compare Bazaar's business communication services. They delivered enterprise-level systems without breaking our bank. Their email marketing integration with our CRM is brilliant."
    }
  ];
  // List item component with link and hover effect
  const ListItem = ({ text, section }) => (
    <li className="flex items-start mb-3 group">
      {/* Tick Icon */}
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#000e54] to-[#203299] group-hover:bg-[#ff8633] flex items-center justify-center mt-1 transition-colors duration-300">
        <svg
          className="w-3 h-3 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
        </svg>
      </div>
      {/* Text */}
      <a
        href={`/${section}/${createSlug(text)}`}
        className="ml-3 text-gray-800 group-hover:text-[#ff8633] transition duration-150 ease-in-out"
      >
        {text}
      </a>
    </li>
  );
// widget form 
const [widgetLoaded, setWidgetLoaded] = useState(false);
 const widgetRef=useRef(null);
  //   RELATED ARTICLES LIST
  const articles1 = [
    {
      id: 1,
      title: "VoIP vs Landline Phone System",
      image: "/images/art1phonesystem.webp",
      author: "Catie",
      date: "November 21, 2019",
      excerpt: "American businesses today face a major debate when deciding on technology. Should I get VoIP vs. a traditional landline ...",
      link: "#"
    },
    {
      id: 2,
      title: "RingCentral Business Phone System: Features, Pricing, Pros and Cons",
      image: "/images/art2phonesystem.jpg",
      author: "Catie",
      date: "October 7, 2020",
      excerpt: "RingCentral Overview RingCentral is a popular VoIP provider offering both cloud-based and hosted solutions for businesses of various sizes. They ...",
      link: "#"
    },
    {
      id: 3,
      title: "8 Steps for Choosing the Right VoIP Service Provider",
      image: "/images/art3phonesystem.png",
      author: "Catie",
      date: "January 11, 2023",
      excerpt: "As a business leader, surely you want to find the best business phone system for your organization's needs. With ...",
      link: "#"
    }
  ];

  // faq
 // faq
const phoneFAQs = [
  {
    question: "Can I get a second phone number without buying another phone?",
    answer:
      "By ordering a virtual phone number, you can forward calls to your current phone without adding another cell line or buying a separate device. Softphone apps display incoming calls by line, so you always know when a customer is calling.",
  },
  {
    question: "How many VoIP lines does my business need?",
    answer:
      "The number of VoIP lines depends on your call volume and number of employees. A good rule is to have 1 line for every 3-4 employees who need simultaneous calling.",
  },
  {
    question: "Are business phone systems secure?",
    answer: [
      "Modern business phone systems use enterprise-grade security including:",
      "End-to-end encryption for calls",
      "Secure SIP protocols",
      "Multi-factor authentication",
      "Regular security updates",
    ],
  },
  {
    question: "What happens if my internet goes down?",
    answer: 
      "Most VoIP providers offer failover options that automatically route calls to mobile devices or alternative numbers during outages. Some also provide automatic switching to backup internet connections to maintain service continuity.",
  },
  {
    question: "Can I keep my existing business phone number?",
    answer:
      "Yes, number porting allows you to transfer your existing phone numbers to a new VoIP system. The process typically takes 2-4 weeks and most providers handle the paperwork for you.",
  },
  {
    question: "What equipment do I need for a VoIP phone system?",
    answer: [
      "The basic requirements for a VoIP system include:",
      "Reliable internet connection (minimum 100 Kbps per concurrent call)",
      "VoIP-compatible phones or softphone applications",
      "Headsets for computer-based calling (optional)",
      "Router with QoS capabilities for call prioritization",
    ],
  },
  {
    question: "How much does a business VoIP system cost?",
    answer:
      "VoIP services typically range from $15-50 per user monthly depending on features. Cloud-based systems eliminate most hardware costs, while on-premises solutions require initial equipment investment but may reduce long-term expenses.",
  },
  {
    question: "Can employees use the business phone system while working remotely?",
    answer:
      "Yes, most modern VoIP systems include mobile apps and desktop softphones that allow employees to make and receive business calls from anywhere with internet access, maintaining their business identity regardless of location.",
  },
  {
    question: "How do business phone systems integrate with other software?",
    answer:
      "Modern business phone systems offer API integrations with CRM platforms, helpdesk solutions, email systems, and collaboration tools. These integrations enable features like click-to-dial, automatic call logging, and customer data display during calls.",
  },
  {
    question: "What's the difference between cloud-hosted and on-premises phone systems?",
    answer:
      "Cloud-hosted systems are maintained by the provider offsite with minimal hardware requirements and subscription-based pricing. On-premises systems require local hardware installation and maintenance but offer greater customization and potentially lower long-term costs.",
  },
];

  // /table content
  const contents = [
    {
      id: 1,
      title: "Introduction to Business Phone Systems",
      slug: "intro-phonesystem",
    },
    {
      id: 2,
      title: "Why Phone Systems Management is essential for B2B Businesses?",
      slug: "why-phone-system",
    },
    {
      id: 3,
      title: "Key Features of Best Phone System Management",
      slug: "phonesystem-features",
    },
    {
      id: 4,
      title: "What Are the Best Business Phone Systems?",
      slug: "what-is-phonesystem",
    },
    {
      id: 5,
      title: "Benefits of Modern Phone Systems",
      slug: "phonesystem-benefits",
    },
    {
      id: 6,
      title: "Types of Business Phone System Solutions",
      slug: "phonesystem-types",
    },
    { id: 7, title: "Find Your Perfect Phone Solution", slug: "perfect-phone" },
    { id: 8, title: "Related Articles", slug: "d-articles" },
    { id: 9, title: "FAQs", slug: "phoneFAQs" },
  ];

  const [activeTab, setActiveTab] = useState("Administration");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // Render different content based on activeTab state
  const features = {
    Administration: [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        ),
        title: "Centralized Administration",
        description:
          "Manage all users, devices, and settings through a unified dashboard with granular permission controls.",
        color: "blue",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        ),
        title: "Automated Maintenance",
        description:
          "Schedule updates, backups, and system checks during off-hours to minimize business disruption.",
        color: "yellow",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
        title: "Multi-Location Management",
        description:
          "Configure and oversee phone systems across different offices/branches from a single interface.",
        color: "indigo",
      },
    ],
    Routing: [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
        ),
        title: "AI-Powered Call Routing",
        description:
          "Intelligent algorithms distribute calls based on agent skills, availability, and customer priority for optimal service.",
        color: "green",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        ),
        title: "IVR & Auto-Attendant",
        description:
          "Create custom call flows with interactive voice response menus and automatic call distribution.",
        color: "red",
      },
    ],
    Analytics: [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-purple-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        ),
        title: "Real-Time Analytics",
        description:
          "Monitor call queues, agent performance, and service levels with live metrics and historical reporting.",
        color: "purple",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-pink-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
            />
          </svg>
        ),
        title: "Custom Reports",
        description:
          "Build and schedule personalized reports with key performance indicators for different departments.",
        color: "pink",
      },
    ],
    Security: [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        ),
        title: "Security & Compliance",
        description:
          "Implement call encryption, access restrictions, and audit trails to meet regulatory requirements.",
        color: "blue",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-teal-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        ),
        title: "Fraud Protection",
        description:
          "Detect and prevent unauthorized access and suspicious call patterns with advanced security algorithms.",
        color: "teal",
      },
    ],
  };
// Effect to handle BuyerZone widget integration
useEffect(() => {
  // Create and set up an iframe to embed the form
  const iframe = document.createElement('iframe');
  iframe.src = 'about:blank'; // Start with empty src
  iframe.style.width = '100%';
  iframe.style.height = '650px'; // Adjust height as needed
  iframe.style.border = 'none';
  iframe.style.overflow = 'hidden';
  
  // Reference to widget container
  const widgetContainer = document.getElementById('buyerzone-widget-container');
  
  if (widgetContainer) {
    // Clear any existing content
    widgetContainer.innerHTML = '';
    widgetContainer.appendChild(iframe);
    
    // Set iframe content with the embedded form
    setTimeout(() => {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      iframeDoc.open();
      iframeDoc.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Phone Systems Comparison</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
            }
            .loading {
              text-align: center;
              padding: 30px;
            }
            .spinner {
              border: 5px solid #f3f3f3;
              border-top: 5px solid #3498db;
              border-radius: 50%;
              width: 50px;
              height: 50px;
              animation: spin 1s linear infinite;
              margin: 20px auto;
            }
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          </style>
        </head>
        <body>
          <div id="bzWidgetContainer">
            <div class="loading">
              <div class="spinner"></div>
              <p>Loading comparison tool...</p>
            </div>
          </div>
          
          <!-- BuyerZone Widget Script -->
          <script data-bzwidget
            src="https://cdn.buyerzone.com/apps/widget/bzWidget.min.js"
            data-bzwidget-pub-id="59578"
            data-bzwidget-color-palette-name="default"
            data-bzwidget-category-id="10144">
          </script>
          
          <script>
            // Initialize widget after it loads
            function initBzWidget() {
              if (typeof bzWidget !== 'undefined') {
                bzWidget.init();
                document.getElementById('bzWidgetContainer').querySelector('.loading').style.display = 'none';
              } else {
                setTimeout(initBzWidget, 500);
              }
            }
            
            // Check if widget loaded
            document.addEventListener('DOMContentLoaded', function() {
              setTimeout(initBzWidget, 1000);
              
              // Fallback if widget fails to load
              setTimeout(function() {
                if (typeof bzWidget === 'undefined') {
                  document.getElementById('bzWidgetContainer').innerHTML = 
                    '<p style="text-align:center; padding:20px; color:#e74c3c;">Unable to load the comparison tool. Please refresh and try again.</p>';
                }
              }, 10000);
            });
          </script>
        </body>
        </html>
      `);
      iframeDoc.close();
      
      setWidgetLoaded(true);
    }, 0);
  }
  
  return () => {
    // Cleanup if needed
  };
}, []);
  return (
    // FIRST DIV OF CONTENT AND IMAGE
    <>
      <TableOfContents contents={contents} />

      {/* introduction */}
      <div id="intro-phonesystem" className="py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-center">
            Introduction to Business Phone Systems
          </h2>
          <p className="text-gray-800 text-base mb-8 text-justify">
  Business phone systems are more than just communication
  tools—they're important assets that help companies stay connected
  with clients, partners, and team members efficiently. For B2B companies
  like Compare Bazaar, having the right business phone system is key
  to improving customer interactions, supporting smooth collaboration,
  and boosting overall operational efficiency. A dependable system
  centralizes communication, making it easier to manage calls,
  track conversations, and deliver quality customer service.
  Modern solutions work well with existing tools, offering features
  like automated call routing, voicemail-to-email, and detailed
  analytics to help refine communication processes.
  <br />
  In addition, advanced phone systems support a professional image
  with tools like custom greetings, virtual receptionists, and call
  queues, while also offering the flexibility of mobile apps and
  remote access. By using a strong phone solution, Compare Bazaar
  can stay more accessible, respond quickly, and build lasting
  business relationships in today’s connected environment.
</p>

      </div>
      </div>

      {/* What exactly is business */}
      <div className="w-full  py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side text content - centered at all screen sizes */}
          <div className="w-full lg:w-2/5 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-2 text-center">
              Business Phone System
            </h2>
            <h3 className="text-4xl font-bold text-gray-800 mb-6 text-center">
              Buyer's Guide
            </h3>

            <div className="w-16 h-1 bg-gray-300 mx-auto mb-6 block"></div>

            <p className="text-gray-800 text-base mb-8 text-justify">
            Discover everything you need to know about modern business phone systems in our comprehensive buyer's guide. Understand how integrated communications systems streamline operations across multiple channels, and learn why VoIP technology offers cost savings and flexibility compared to traditional setups. Compare key features, pricing structures, and implementation requirements across different providers to find the perfect solution for your company's size and needs. Make an informed decision with expert insights on scalability, remote capabilities, and integration options that align with your business goals.
</p>
 <a href="https://www.buyerzone.com/telecom-equipment/business-phone-systems/rfqz/?publisherId=59578&amp;publisherTypeId=1788';"
              className="inline-block border-2 mx-auto border-[#ff8633] text-[#ff8633] font-medium px-6 py-3 rounded-full hover:bg-[#ff8633] hover:text-white transition-colors duration-300"
            >
              Get Free Quotes
            </a>
          </div>

          {/* Right side image */}
          <div className="w-full lg:w-3/5 mt-8 lg:mt-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://media.istockphoto.com/id/1365436662/photo/successful-partnership.jpg?s=612x612&w=0&k=20&c=B1xspe9Q5WMsLc7Hc9clR8MWUL4bsK1MfUdDNVNR2Xg="
                alt="Business communications concept showing a hand touching a phone with digital network icons"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* why phone system */}
      <div id="why-phone-system" className="mt-10">
        <div className="max-w-6xl  mx-auto">
          <h3 className="text-4xl font-semibold text-gray-900 mb-5">
            Why Phone Systems Management is essential for B2B Businesses?
          </h3>
          <p className="text-gray-800 text-base mb-8 text-left">
            B2B communication demands reliability, scalability, and seamless
            integration with workflows. A robust phone system centralizes
            interactions, enhances productivity, and ensures no critical
            touchpoint is missed in the sales or support process.
          </p>

          {/* Three small boxes in one row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
  <div className="bg-[#e0e7ff] p-6 rounded-lg shadow-md">
    <h4 className="text-xl font-semibold text-[#1e3a8a] mb-3">
      Communication Hub
    </h4>
    <p className="text-gray-800 text-base text-left">
      Integrates calls, voicemails, SMS, and video conferencing into a
      single platform for unified client interactions.
    </p>
  </div>
  <div className="bg-[#dbeafe] p-6 rounded-lg shadow-md">
    <h4 className="text-xl font-semibold text-[#3b82f6] mb-3">
      Smart Routing
    </h4>
    <p className="text-gray-800 text-base text-left">
      Automatically directs calls to the right team or individual,
      reducing wait times and improving customer experience.
    </p>
  </div>
  <div className="bg-purple-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-purple-800 mb-3">
                Business Insights
              </h4>
              <p className="text-gray-800 text-base text-left">
                Tracks call metrics like duration, peak times, and drop rates to
                optimize team performance and resource allocation.
              </p>
            </div>
</div>
  <ul className="text-gray-800 text-base list-disc pl-6 space-y-4 mb-8">
            <li>
              <span className="font-semibold text-base">
                Multi-Channel Communication:
              </span>{" "}
              Integrates calls, voicemails, SMS, and even video conferencing
              into a single platform for unified client interactions.
            </li>
            <li>
              <span className="font-semibold text">Call Routing & IVR:</span>{" "}
              Automatically directs calls to the right team or individual,
              reducing wait times and improving customer experience.
            </li>
            <li>
              <span className="font-semibold text-">CRM Integration:</span>{" "}
              Syncs call logs, recordings, and notes with CRM systems to
              maintain context and streamline follow-ups.
            </li>
            <li>
              <span className="font-semibold text-">
                Analytics & Reporting:
              </span>{" "}
              Tracks call metrics (duration, peak times, drop rates) to optimize
              team performance and resource allocation.
            </li>
            <li>
              <span className="font-semibold text-">Scalability:</span>{" "}
              Supports business growth with flexible additions of lines,
              extensions, or international numbers.
            </li>
            <li>
              <span className="font-semibold text">Automation & AI:</span>{" "}
              Features like AI-powered call transcription, sentiment analysis,
              and automated callbacks enhance efficiency.
            </li>
            <li>
              <span className="font-semibold text">
                Security & Compliance:
              </span>{" "}
              Encrypted calls and compliance with regulations (e.g., GDPR,
              HIPAA) ensure data protection for sensitive B2B conversations.
            </li>
          </ul>

   <div className="">
   <div 
  className="widget-container p-6 rounded-lg my-10 relative"
  style={{
    backgroundImage: "url('https://stabilitynetworks.com/wp-content/uploads/2019/08/5-Advantages-of-Getting-a-Cloud-Based-VoIP-Phone-System-for-Your-Small-Business.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
  {/* Semi-transparent overlay */}
  <div className="absolute inset-0 bg-white opacity-60 rounded-lg"></div>
  
  {/* Content positioned on top of the overlay */}
  <div className="relative z-10">
    <h2 className="widget-title text-4xl font-semibold text-center mb-6 text-gray-800">Compare Phone System Providers</h2>
    <div className="flex lg:flex-row flex-col  gap-8 items-center justify-between">
        {/* Image on the left */}
        <div className="flex-shrink-0">
        <a href="http://www.buyerzone.com/telecom-equipment/business-phone-systems/rfqz/?publisherId=59578&publisherTypeId=1789"
        target="_self">
            <img 
                src="http://www.buyerzone.com/telecom-equipment/business-phone-systems/banners/120x600.gif" 
                title="Free Business Phone Systems Quotes from BuyerZone.com" 
                alt="Free Business Phone Systems Quotes from BuyerZone.com" 
                className="h-auto" 
                border="0" />
             </a>
        </div>
        
        {/* Centered paragraph in the middle */}
        <div className="text-left text-gray-900 mx-4 text-3xl flex-grow-0 w-100">
    <p className="font-medium">Just answer a few questions to help us better serve you. It takes less than a minute and is 100% free. No obligation to buy.</p>
</div>
        
        {/* Form container on the right */}
        <div id="buyerzone-widget-container" className="flex-grow min-h-96">
            {/* Widget will be loaded by the useEffect */}
        </div>
    </div>
</div>
</div>
   </div>
        </div>
        
      </div>

      {/* key features */}
      <div id="phonesystem-features" className="py-10">
        <div className="max-w-6xl">
          <h2 className="text-4xl font-semibold text-gray-900 mb-8 text-center">
            Key Features of Best Phone System Management
          </h2>

          {/* Feature tabs/toggles */}
          <div>
            <div>
              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-2 mb-8 font-semibold text-xl">
                {Object.keys(features).map((tabName) => (
                  <button
                    key={tabName}
                    className={`px-4 py-2 rounded-md ${
                      activeTab === tabName
                        ? "bg-[#000e54] text-white"
                        : "bg-gray-200 text-gray-800 font-semibold text-xl"
                    }`}
                    onClick={() => handleTabClick(tabName)}
                  >
                    {tabName}
                  </button>
                ))}
              </div>

              {/* Feature Cards - Only show cards for the active tab */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {features[activeTab].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg border border-gray-100 shadow-lg shadow-gray-200"
                  >
                    <div
                      className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-4`}
                    >
                      {feature.icon}
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h2>
                    <p className="text-gray-800 text-base mb-8 text-justify">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

         {/* BuyerZone Widget Integration - Method 1: Custom container */}

        </div>
      </div>
      {/* four divs */}
      <Storage />

      {/* what is bestphonesystem */}
      <div id="what-is-phonesystem" className="mt-10">
        <div className="max-w-6xl  mx-auto">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-center">
            What Are the Best Business Phone Systems?
          </h2>
          <p className="text-gray-800 text-base mb-8 text-justify">
            Modern business phone systems are comprehensive communication
            platforms that go beyond traditional calling to unify voice, video,
            messaging, and collaboration tools. These systems help organizations
            streamline communications, enhance customer interactions, and
            improve team productivity through advanced features and
            integrations.
          </p>

          {/* Alternating content layout */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-1/2">
              <p className="text-gray-800 text-base mb-8 text-justify">
                The best business phone systems are essential for companies that
                rely on professional communications, particularly B2B
                organizations, sales teams, and customer support centers. While
                small retail shops might use basic phone setups, growth-focused
                businesses benefit from feature-rich systems that integrate with
                their CRM, support remote work, and provide valuable call
                analytics.
              </p>
            </div>
            <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Who Benefits Most?
              </h4>
              <ul className="text-gray-800 text-base mb-8 list-disc pl-5 space-y-2">
                <li>B2B organizations with complex communication needs</li>
                <li>Sales teams requiring CRM integration</li>
                <li>Customer support centers managing high call volumes</li>
                <li>Businesses with remote or distributed workforces</li>
                <li>Companies focused on growth and scaling operations</li>
              </ul>
            </div>
          </div>

          <h2 className="text-4xl font-semibold text-gray-900 mb-5">
            Key Functionalities for Optimal Phone System Management
          </h2>
          <p className="text-gray-800 text-base mb-8 text-left">
            Advanced phone system management requires powerful capabilities to
            streamline communications and enhance productivity:
          </p>

          {/* Stepped process with numbers */}
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-[#000e54] text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                1
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  Centralized Administration Portal
                </h2>
                <p className="text-gray-800 text-base text-left">
                  Manage all users, extensions, and settings through a single
                  intuitive dashboard with role-based access controls.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-[#000e54] text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                2
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Intelligent Call Distribution
                </h2>
                <p className="text-gray-800 text-base text-left">
                  Implement skills-based, round-robin, or time-based routing
                  algorithms to optimize agent workloads and reduce wait times.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-[#000e54] text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                3
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Multi-Level Auto Attendant
                </h2>
                <p className="text-gray-800 text-base text-left">
                  Create customized call flows with department-specific IVR
                  menus and intelligent call forwarding rules.
                </p>
              </div>
            </div>
          </div>

          <ul className="text-gray-800 text-base mb-8 text-left list-disc pl-6 space-y-4">
            <li>
              <span className="font-semibold  text-gray-800">
                Centralized Administration Portal:
              </span>{" "}
              Manage all users, extensions, and settings through a single
              intuitive dashboard with role-based access controls.
            </li>
            <li>
              <span className="font-semibold  text-gray-800">
                Intelligent Call Distribution:
              </span>{" "}
              Implement skills-based, round-robin, or time-based routing
              algorithms to optimize agent workloads and reduce wait times.
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                Multi-Level Auto Attendant:
              </span>{" "}
              Create customized call flows with department-specific IVR menus
              and intelligent call forwarding rules.
            </li>
            <li>
              <span className="font-semibold  text-gray-800">
                Real-Time Monitoring Tools:
              </span>{" "}
              Track active calls, queue status, and agent availability with live
              dashboards and wallboard displays.
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                Comprehensive Reporting Suite:
              </span>{" "}
              Generate detailed analytics on call volume, duration, abandonment
              rates, and agent performance metrics.
            </li>
            <li>
              <span className="font-semibold  text-gray-800">
                Bulk Configuration Management:
              </span>{" "}
              Efficiently onboard teams, update settings, and deploy changes
              across multiple locations simultaneously.
            </li>
            <li>
              <span className="font-semibold  text-gray-800">
                Disaster Recovery Features:
              </span>{" "}
              Maintain business continuity with automatic failover, call
              rerouting, and geo-redundant systems.
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                API & Automation Capabilities:
              </span>{" "}
              Integrate with business applications and automate repetitive tasks
              through programmable interfaces.
            </li>
          </ul>

          <div className="my-12 flex justify-center">
            <img
              src="https://pbxinthe.cloud/wp-content/uploads/2021/08/VoIP-phone-system-scaled.jpeg"
              alt="Business Phone System Features Diagram"
              className="w-full max-w-4xl h-[500px] rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* benefits */}
      <div
        id="phonesystem-benefits"
        className="rounded-xl py-10 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-center">
          Benefits of Modern Phone Systems:
        </h2>

        {/* Benefits as cards with icons in three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center">
            <div className="mx-auto mb-4 bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Professional Experience
            </h2>
            <p className="text-gray-800 text-base mb-8">
              Deliver consistent, high-quality service with advanced features
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center">
            <div className="mx-auto mb-4 bg-green-100 text-green-600 rounded-full w-16 h-16 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Increased Productivity
            </h2>
            <p className="text-gray-800 text-base mb-8">
              Reduce time wasted on manual call handling with automation
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center">
            <div className="mx-auto mb-4 bg-purple-100 text-purple-600 rounded-full w-16 h-16 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Business Continuity
            </h2>
            <p className="text-gray-800 text-base mb-8">
              Cloud-based systems ensure reliable service during disruptions
            </p>
          </div>
        </div>

        <ul className="list-disc pl-6 text-gray-800 text-base mb-8 text-left space-y-3">
          <li>
            <span className="font-semibold text-gray-800">
              Professional Customer Experience:
            </span>{" "}
            Deliver consistent, high-quality service with features like call
            queuing, voicemail-to-email, and personalized greetings.
          </li>
          <li>
            <span className="font-semibold text-gray-800">
              Increased Team Productivity:
            </span>{" "}
            Reduce time wasted on manual call handling with automation and
            easy-to-use collaboration features.
          </li>
          <li>
            <span className="font-semibold text-gray-800">
              Business Continuity:
            </span>{" "}
            Cloud-based systems ensure reliable service during disruptions, with
            features like mobile apps and call forwarding.
          </li>
          <li>
            <span className="font-semibold text-gray-800">Cost Savings:</span>{" "}
            Reduce telecom expenses with VoIP technology and eliminate the need
            for expensive hardware.
          </li>
          <li>
            <span className="font-semibold text-gray-800">
              Scalable Growth:
            </span>{" "}
            Easily add users, features, or international numbers as your
            business expands.
          </li>
        </ul>
        <div className="mt-20 flex justify-center">
        <img
          src="https://www.businessapac.com/wp-content/uploads/2023/12/five-benefits-of-business-phone-systems.jpg"
          alt="Benefits of Business Phone Systems"
          className="rounded-lg shadow-md w-full max-w-4xl h-[500px] justify-center"
        />
        </div>
      </div>

      {/* types of best business phone system */}
      <div id="phonesystem-types" className="pt-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-center">
            Types of Business Phone System Solutions
          </h2>
          <p className="text-gray-800 text-base text-center -mb-8">
            Modern phone systems come in various configurations, each offering
            unique management capabilities for different business needs.
          </p>

          {/* Phone system types as cards */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
  {/* <!-- System Cards --> */}
  {/* <!-- Cloud VoIP --> */}
  <g>
    <rect
      x="50"
      y="80"
      width="160"
      height="240"
      rx="10"
      fill="#eff6ff"
      stroke="#3b82f6"
      stroke-width="2"
    />
    <text
      x="130"
      y="110"
      font-size="16"
      font-weight="bold"
      text-anchor="middle"
      fill="#1e40af"
    >
      Cloud-Based VoIP
    </text>

    {/* <!-- Improved Cloud icon --> */}
    <path
      d="M110 145 C110 130, 120 125, 135 130 C140 120, 155 120, 160 130 C170 125, 180 135, 175 145 C180 155, 170 165, 160 165 C155 175, 140 175, 130 165 C120 170, 105 165, 110 155 C105 150, 105 140, 110 145"
      fill="#3b82f6"
    />
    <circle cx="125" cy="140" r="5" fill="white" opacity="0.6"/>
    <circle cx="145" cy="135" r="6" fill="white" opacity="0.6"/>
    <circle cx="155" cy="150" r="4" fill="white" opacity="0.6"/>
    <path
      d="M140 150 L125 145 L120 155"
      stroke="white"
      stroke-width="1"
      opacity="0.6"
      fill="none"
    />

    {/* <!-- Features --> */}
    <circle cx="65" cy="195" r="4" fill="#3b82f6" />
    <text
      x="75"
      y="200"
      font-size="12"
      fill="#334155"
      text-anchor="start"
    >
      Web Portal
    </text>

    <circle cx="65" cy="220" r="4" fill="#3b82f6" />
    <text
      x="75"
      y="225"
      font-size="12"
      fill="#334155"
      text-anchor="start"
    >
      Auto Updates
    </text>

    <circle cx="65" cy="245" r="4" fill="#3b82f6" />
    <text
      x="75"
      y="250"
      font-size="12"
      fill="#334155"
      text-anchor="start"
    >
      Mobile Apps
    </text>

    <circle cx="65" cy="270" r="4" fill="#3b82f6" />
    <text
      x="75"
      y="275"
      font-size="12"
      fill="#334155"
      text-anchor="start"
    >
      Low Upfront Cost
    </text>

    <circle cx="65" cy="295" r="4" fill="#3b82f6" />
    <text
      x="75"
      y="300"
      font-size="12"
      fill="#334155"
      text-anchor="start"
    >
      Rapid Scaling
    </text>
  </g>

  {/* <!-- On-Premise PBX --> */}
  <g>
    <rect
      x="230"
      y="80"
      width="160"
      height="240"
      rx="10"
      fill="#ecfdf5"
      stroke="#10b981"
      stroke-width="2"
    />
    <text
      x="310"
      y="110"
      font-size="16"
      font-weight="bold"
      text-anchor="middle"
      fill="#065f46"
    >
      On-Premise PBX
    </text>

    {/* <!-- Improved Server icon --> */}
    <rect
      x="280"
      y="130"
      width="60"
      height="40"
      rx="3"
      fill="#10b981"
    />
    <rect
      x="280"
      y="130"
      width="60"
      height="5"
      rx="1"
      fill="#059669"
    />
    <rect
      x="285"
      y="138"
      width="50"
      height="24"
      rx="1"
      fill="#059669"
      opacity="0.3"
    />
    <circle cx="290" cy="135" r="1.5" fill="#ecfdf5" />
    <circle cx="300" cy="135" r="1.5" fill="#ecfdf5" />
    <circle cx="310" cy="135" r="1.5" fill="#ecfdf5" />
    
    <rect
      x="290"
      y="142"
      width="10"
      height="3"
      rx="1"
      fill="#ecfdf5"
    />
    <rect
      x="290"
      y="148"
      width="10"
      height="3"
      rx="1"
      fill="#ecfdf5"
    />
    <rect
      x="290"
      y="154"
      width="10"
      height="3"
      rx="1"
      fill="#ecfdf5"
    />
    
    <rect
      x="310"
      y="142"
      width="10"
      height="3"
      rx="1"
      fill="#ecfdf5"
    />
    <rect
      x="310"
      y="148"
      width="10"
      height="3"
      rx="1"
      fill="#ecfdf5"
    />
    <rect
      x="310"
      y="154"
      width="10"
      height="3"
      rx="1"
      fill="#ecfdf5"
    />
    
    <rect
      x="325"
      y="142"
      width="5"
      height="5"
      rx="1"
      fill="#d1fae5"
    />
    <rect
      x="335"
      y="142"
      width="5"
      height="5"
      rx="1"
      fill="#34d399"
    />
    <rect
      x="325"
      y="152"
      width="5"
      height="5"
      rx="1"
      fill="#34d399"
    />
    <rect
      x="335"
      y="152"
      width="5"
      height="5"
      rx="1"
      fill="#d1fae5"
    />

    {/* <!-- Features --> */}
    <circle cx="245" cy="195" r="4" fill="#10b981" />
    <text
      x="255"
      y="200"
      font-size="12"
      fill="#334155"
      text-anchor="start"
    >
      Full Control
    </text>

    <circle cx="245" cy="220" r="4" fill="#10b981" />
    <text
      x="255"
      y="225"
      font-size="12"
      fill="#334155"
      text-anchor="start"
    >
      Data Privacy
    </text>

    <circle cx="245" cy="245" r="4" fill="#10b981" />
    <text
      x="255"
      y="250"
      font-size="12"
      fill="#334155"
      text-anchor="start"
    >
      Customization
    </text>

    <circle cx="245" cy="270" r="4" fill="#10b981" />
    <text
      x="255"
      y="275"
      font-size="12"
      fill="#334155"
      text-anchor="start"
    >
      Hardware Required
    </text>

    <circle cx="245" cy="295" r="4" fill="#10b981" />
    <text
      x="255"
      y="300"
      font-size="12"
      fill="#334155"
      text-anchor="start"
    >
      IT Team Needed
    </text>
  </g>

  {/* <!-- Hybrid Systems --> */}
  <g>
    <rect
      x="410"
      y="80"
      width="160"
      height="240"
      rx="10"
      fill="#f3e8ff"
      stroke="#a855f7"
      stroke-width="2"
    />
    <text
      x="490"
      y="110"
      font-size="16"
      font-weight="bold"
      text-anchor="middle"
      fill="#7e22ce"
    >
      Hybrid Systems
    </text>

    {/* <!-- Improved Hybrid icon --> */}
    <rect 
      x="450" 
      y="135" 
      width="25" 
      height="30" 
      rx="2" 
      fill="#a855f7" 
    />
    <rect 
      x="455" 
      y="140" 
      width="15" 
      height="2" 
      fill="white" 
      opacity="0.7" 
    />
    <rect 
      x="455" 
      y="145" 
      width="15" 
      height="2" 
      fill="white" 
      opacity="0.7" 
    />
    <rect 
      x="455" 
      y="150" 
      width="15" 
      height="2" 
      fill="white" 
      opacity="0.7" 
    />
    <rect 
      x="455" 
      y="155" 
      width="15" 
      height="2" 
      fill="white" 
      opacity="0.7" 
    />
    
    <path
      d="M485 145 C485 130, 500 125, 510 135 C515 125, 530 125, 535 135 C545 130, 555 140, 550 150 C555 160, 545 170, 535 170 C535 175, 520 180, 510 170 C505 180, 490 175, 485 165 C475 170, 470 155, 480 150"
      fill="#a855f7"
    />
    <circle cx="500" cy="140" r="4" fill="white" opacity="0.5"/>
    <circle cx="520" cy="135" r="6" fill="white" opacity="0.5"/>
    <circle cx="535" cy="150" r="5" fill="white" opacity="0.5"/>
    
    <path 
      d="M475 145 L485 145" 
      stroke="#a855f7" 
      stroke-width="3" 
    />

    {/* <!-- Features --> */}
    <circle cx="425" cy="195" r="4" fill="#a855f7" />
    <text
      x="435"
      y="200"
      font-size="12"
      fill="#334155"
      text-anchor="start"
    >
      Combined Management
    </text>

    <circle cx="425" cy="220" r="4" fill="#a855f7" />
    <text
      x="435"
      y="225"
      font-size="12"
      fill="#334155"
      text-anchor="start"
    >
      Phased Migration
    </text>

    <circle cx="425" cy="245" r="4" fill="#a855f7" />
    <text
      x="435"
      y="250"
      font-size="12"
      fill="#334155"
      text-anchor="start"
    >
      Legacy Integration
    </text>

    <circle cx="425" cy="270" r="4" fill="#a855f7" />
    <text
      x="435"
      y="275"
      font-size="12"
      fill="#334155"
      text-anchor="start"
    >
      Flexible Deployment
    </text>

    <circle cx="425" cy="295" r="4" fill="#a855f7" />
    <text
      x="435"
      y="300"
      font-size="12"
      fill="#334155"
      text-anchor="start"
    >
      Moderate Complexity
    </text>
  </g>

  {/* <!-- UCaaS Platform --> */}
  <g>
    <rect
      x="590"
      y="80"
      width="160"
      height="240"
      rx="10"
      fill="#fee2e2"
      stroke="#ef4444"
      stroke-width="2"
    />
    <text
      x="670"
      y="110"
      font-size="16"
      font-weight="bold"
      text-anchor="middle"
      fill="#b91c1c"
    >
      UCaaS Platform
    </text>

    {/* <!-- Improved Communication icon --> */}
    <circle cx="635" cy="145" r="18" fill="#ef4444" />
    <circle cx="635" cy="145" r="14" fill="#fca5a5" opacity="0.3" />
    <path d="M627 141 L643 141" stroke="white" stroke-width="2" />
    <path d="M627 145 L643 145" stroke="white" stroke-width="2" />
    <path d="M627 149 L643 149" stroke="white" stroke-width="2" />
    
    <circle cx="680" cy="145" r="18" fill="#ef4444" />
    <circle cx="680" cy="145" r="14" fill="#fca5a5" opacity="0.3" />
    <rect x="672" y="137" width="16" height="16" rx="2" stroke="white" stroke-width="1.5" fill="none" />
    <path d="M672 141 L688 141" stroke="white" stroke-width="1" />
    <path d="M672 145 L688 145" stroke="white" stroke-width="1" />
    <path d="M672 149 L688 149" stroke="white" stroke-width="1" />
    
    <path d="M653 145 L662 145" stroke="#ef4444" stroke-width="2.5" />
    <path d="M650 145 L665 145" stroke="#b91c1c" stroke-width="3" opacity="0.3" />
    <polygon points="662,142 662,148 667,145" fill="#ef4444" />

    {/* <!-- Features --> */}
    <circle cx="605" cy="195" r="4" fill="#ef4444" />
    <text
      x="615"
      y="200"
      font-size="12"
      fill="#334155"
      text-anchor="start"
    >
      Unified Communications
    </text>

    <circle cx="605" cy="220" r="4" fill="#ef4444" />
    <text
      x="615"
      y="225"
      font-size="12"
      fill="#334155"
      text-anchor="start"
    >
      Collaboration Tools
    </text>

    <circle cx="605" cy="245" r="4" fill="#ef4444" />
    <text
      x="615"
      y="250"
      font-size="12"
      fill="#334155"
      text-anchor="start"
    >
      Single Interface
    </text>

    <circle cx="605" cy="270" r="4" fill="#ef4444" />
    <text
      x="615"
      y="275"
      font-size="12"
      fill="#334155"
      text-anchor="start"
    >
      Cross-Platform
    </text>

    <circle cx="605" cy="295" r="4" fill="#ef4444" />
    <text
      x="615"
      y="300"
      font-size="12"
      fill="#334155"
      text-anchor="start"
    >
      Team Integration
    </text>
  </g>

  {/* <!-- Bottom Comparison Indicators --> */}
  <line
    x1="50"
    y1="350"
    x2="750"
    y2="350"
    stroke="#94a3b8"
    stroke-width="2"
  />

  {/* <!-- Cost indicator --> */}
  <text
    x="130"
    y="370"
    font-size="12"
    fill="#64748b"
    text-anchor="middle"
  >
    Lower Upfront Cost
  </text>
  <text
    x="670"
    y="370"
    font-size="12"
    fill="#64748b"
    text-anchor="middle"
  >
    Higher Upfront Cost
  </text>
  <line
    x1="150"
    y1="350"
    x2="650"
    y2="350"
    stroke="#3b82f6"
    stroke-width="4"
  />
  <circle cx="150" cy="350" r="6" fill="#3b82f6" />
  <circle cx="310" cy="350" r="6" fill="#10b981" />
  <circle cx="490" cy="350" r="6" fill="#a855f7" />
  <circle cx="650" cy="350" r="6" fill="#ef4444" />
</svg>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-500 mt-8">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border border-gray-500 text-xl text-gray-800">
                    System Type
                  </th>
                  <th className="py-2 px-4 border border-gray-500 text-xl text-gray-800">
                    Features
                  </th>
                  <th className="py-2 px-4 border border-gray-500 text-xl text-gray-800">
                  Ideal Use Case
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-gray-800 text-base py-2 px-4 border border-gray-500">
                    Cloud-Based VoIP
                  </td>
                  <td className="text-gray-800 text-base py-2 px-4 border border-gray-500">
                    Web admin portal, remote configuration, automatic updates,
                    minimal hardware
                  </td>
                  <td className="text-gray-800 text-base py-2 px-4 border border-gray-500">
                    Businesses needing flexibility, scalability, and remote work
                    capabilities
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-800 text-base py-2 px-4 border border-gray-500">
                    On-Premise PBX
                  </td>
                  <td className="text-gray-800 text-base py-2 px-4 border border-gray-500">
                    Full system control, custom configurations, local hosting,
                    dedicated hardware
                  </td>
                  <td className="text-gray-800 text-base py-2 px-4 border border-gray-500">
                    Enterprises with existing IT infrastructure and specific
                    security requirements
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-800 text-base py-2 px-4 border border-gray-500">
                    Hybrid Systems
                  </td>
                  <td className="text-gray-800 text-base py-2 px-4 border border-gray-500">
                    Mix of cloud and on-premise management, phased migration
                    options
                  </td>
                  <td className="text-gray-800 text-base py-2 px-4 border border-gray-500">
                    Businesses transitioning from legacy systems to cloud
                    solutions
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-800 text-base py-2 px-4 border border-gray-500">
                    UCaaS Platforms
                  </td>
                  <td className="text-gray-800 text-base py-2 px-4 border border-gray-500">
                    Unified communications management (voice, video, messaging,
                    collaboration)
                  </td>
                  <td className="text-gray-800 text-base py-2 px-4 border border-gray-500">
                    Distributed teams needing comprehensive collaboration tools
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-800 text-base mb-8 text-left mt-6">
            When selecting a business phone system, consider your organization's
            size, growth plans, technical capabilities, and integration
            requirements to determine which solution type best meets your
            communication needs.
          </p>

          {/* Detailed comparison of phone system types */}
            <h3 class="text-3xl font-semibold text-gray-900 mb-10 mt-10">
              Detailed Comparison of Phone System Types
            </h3>

            {/* <!-- Cloud-Based VoIP Systems --> */}
            <div class="bg-white mb-8">
              <h4 class="text-xl font-semibold text-blue-800 mb-4">
                Cloud-Based VoIP Systems
              </h4>
              <p class="text-gray-800 text-base mb-8 text-left">
                Cloud-based VoIP systems offer exceptional flexibility with
                minimal upfront investment. Management is handled through
                intuitive web portals where administrators can configure users,
                features, and call flows without specialized technical
                knowledge. These systems are ideal for businesses seeking rapid
                deployment and minimal infrastructure maintenance.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h5 class="font-semibold text-base mb-2">
                    Management Features:
                  </h5>
                  <ul class="list-disc pl-5 text-gray-800 text-base mb-8 text-left">
                    <li>Web-based administration dashboard</li>
                    <li>Self-service user management</li>
                    <li>Automatic software updates</li>
                    <li>Remote configuration capabilities</li>
                    <li>Scalable user provisioning</li>
                    <li>Simplified troubleshooting tools</li>
                    <li>Multi-device management</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-semibold text-base mb-2">Key Benefits:</h5>
                  <ul class="list-disc pl-5 text-gray-800 text-base mb-8 text-left">
                    <li>Low initial investment</li>
                    <li>Rapid deployment</li>
                    <li>Location-independent management</li>
                    <li>Simplified disaster recovery</li>
                    <li>Regular feature updates</li>
                    <li>Subscription-based pricing model</li>
                    <li>Reduced IT overhead requirements</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- On-Premise PBX Systems --> */}
            <div class="bg-white mb-8">
              <h4 class="text-xl font-semibold text-green-800 mb-4">
                On-Premise PBX Systems
              </h4>
              <p class="text-gray-800 text-base mb-8 text-left">
                On-premise PBX systems provide organizations with complete
                control over their communications infrastructure. These systems
                require dedicated IT resources but offer customization options
                and data sovereignty benefits that cloud alternatives may not
                provide. They are particularly suitable for organizations with
                specific security requirements or specialized integration needs.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h5 class="font-semibold text-base mb-2">
                    Management Features:
                  </h5>
                  <ul class="list-disc pl-5 text-gray-800 text-base mb-8 text-left">
                    <li>Local administration software</li>
                    <li>Hardware configuration access</li>
                    <li>Manual update management</li>
                    <li>Custom integration capabilities</li>
                    <li>Tailored security protocols</li>
                    <li>Direct access to system components</li>
                    <li>Physical infrastructure control</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-semibold text-base mb-2">Key Benefits:</h5>
                  <ul class="list-disc pl-5 text-gray-800 text-base mb-8 text-left">
                    <li>Full control over infrastructure</li>
                    <li>Enhanced data privacy</li>
                    <li>Predictable long-term costs</li>
                    <li>Highly customizable setup</li>
                    <li>Independence from internet reliability</li>
                    <li>One-time capital expenditure model</li>
                    <li>Complete ownership of hardware assets</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- Hybrid Systems --> */}
            <div class="bg-white mb-8">
              <h4 class="text-xl font-semibold text-purple-800 mb-4">
                Hybrid Systems
              </h4>
              <p class="text-gray-800 text-base mb-8 text-left">
                Hybrid phone systems blend on-premise and cloud technologies,
                offering a transitional approach for businesses with existing
                investments. These systems provide flexibility while allowing
                organizations to migrate at their own pace. Hybrid solutions are
                particularly valuable for enterprises with complex legacy
                infrastructure that need to modernize without disrupting
                critical operations.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h5 class="font-semibold text-base mb-2">
                    Management Features:
                  </h5>
                  <ul class="list-disc pl-5 text-gray-800 text-base mb-8 text-left">
                    <li>Combined local and cloud administration</li>
                    <li>Phased migration capabilities</li>
                    <li>Unified management dashboards</li>
                    <li>Legacy system integration</li>
                    <li>Selective feature deployment</li>
                    <li>Mixed environment monitoring</li>
                    <li>Flexible resource allocation</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-semibold text-base mb-2">Key Benefits:</h5>
                  <ul class="list-disc pl-5 text-gray-800 text-base mb-8 text-left">
                    <li>Protection of existing investments</li>
                    <li>Gradual transition to cloud services</li>
                    <li>Customizable deployment models</li>
                    <li>Enhanced business continuity options</li>
                    <li>Balanced capital and operational expenses</li>
                    <li>Best-of-both-worlds feature selection</li>
                    <li>Scalability with stability</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- UCaaS Platforms --> */}
            <div class="bg-white mb-8">
              <h4 class="text-xl font-semibold text-red-800 mb-4">
                UCaaS Platforms
              </h4>
              <p class="text-gray-800 text-base mb-8 text-left">
                Unified Communications as a Service (UCaaS) platforms deliver
                comprehensive communication tools through a single management
                interface. These solutions excel at connecting distributed teams
                with integrated voice, video, and collaboration features. UCaaS
                platforms are designed for modern workplaces that prioritize
                seamless communication across multiple channels and devices
                regardless of location.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h5 class="font-semibold text-base mb-2">
                    Management Features:
                  </h5>
                  <ul class="list-disc pl-5 text-gray-800 text-base mb-8 text-left">
                    <li>Centralized communications management</li>
                    <li>Unified user provisioning</li>
                    <li>Cross-platform feature deployment</li>
                    <li>Integrated analytics across channels</li>
                    <li>Comprehensive workflow automation</li>
                    <li>Role-based administration tools</li>
                    <li>AI-driven system optimization</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-semibold text-base mb-2">Key Benefits:</h5>
                  <ul class="list-disc pl-5 text-gray-800 text-base mb-8 text-left">
                    <li>Seamless cross-channel communication</li>
                    <li>Simplified vendor management</li>
                    <li>Enhanced team collaboration</li>
                    <li>Comprehensive usage analytics</li>
                    <li>Consistent user experience</li>
                    <li>Predictable per-user pricing</li>
                    <li>Continuous feature innovation</li>
                  </ul>
                </div>
              </div>
            </div>
       

          <div className="my-12 flex justify-center">
            <img
              src="https://www.affiliatedcom.com/wp-content/uploads/2019/01/OnSitePhoneSystem-Photo_Top-Quality-Onsite-Phone-Systems-and-Services.jpg"
              alt="Business Phone System Comparison"
              className="w-full max-w-4xl h-[500px] rounded-lg shadow-md"
            />
          </div>
        </div>
        </div>

      {/* Comparison Section */}
      <div id="perfect-phone" className="py-10">
        <div className="max-w-6xl mx-auto sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-center">
              Find Your Perfect Phone Solution
            </h2>
            <p className="text-gray-800 text-xl font-semibold mb-8 max-w-3xl mx-auto">
              Compare different approaches to business communications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cloud VoIP */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="bg-blue-600 p-6">
                <h3 className="text-xl font-bold text-white">Cloud VoIP</h3>
              </div>
              <div className="p-6">
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-gray-800">$15</span>
                  <span className="ml-1 text-gray-800 text-base">
                    /user/month
                  </span>
                </div>
                <ul className="space-y-3 text-gray-800 text-base">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Web-based management
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Automatic updates
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Mobile apps included
                  </li>
                </ul>
              </div>
            </div>

            {/* On-Premise PBX */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="bg-green-600 p-6">
                <h3 className="text-xl font-bold text-white">On-Premise PBX</h3>
              </div>
              <div className="p-6">
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-gray-800">
                    $1,200+
                  </span>
                  <span className="ml-1 text-gray-800 text-base">per user</span>
                </div>
                <ul className="space-y-3 text-gray-800 text-base">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Full control
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Custom configurations
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Data sovereignty
                  </li>
                </ul>
              </div>
            </div>

            {/* Hybrid System */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="bg-purple-600 p-6">
                <h3 className="text-xl font-bold text-white">Hybrid System</h3>
              </div>
              <div className="p-6">
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-gray-800">$35</span>
                  <span className="ml-1 text-gray-800 text-base">
                    /user/month
                  </span>
                </div>
                <ul className="space-y-3 text-gray-800 text-base">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Best of both worlds
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Phased migration
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Legacy integration
                  </li>
                </ul>
              </div>
            </div>

            {/* UCaaS */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="bg-red-600 p-6">
                <h3 className="text-xl font-bold text-white">UCaaS Platform</h3>
              </div>
              <div className="p-6">
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-gray-800">$25</span>
                  <span className="ml-1 text-gray-800 text-base">
                    /user/month
                  </span>
                </div>
                <ul className="space-y-3 text-gray-800 text-base">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Unified communications
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Video conferencing
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Team collaboration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* // NEXT DIV OF RELATED ARTICLES */}

      <div id="d-article">
        <Article
          title="Related Articles"
          items={articles1}
          buttonText="View Post"
          buttonColor="bg-[#ff8633]"
        />
      </div>

      <div id="phoneFAQs" className="">
        <FAQ faqs={phoneFAQs} />
      </div>
<ShopComponent/>
{/* <Feedback 
        title="What Our Customers Say"
        testimonials={homeTestimonials}
/> */}
    </>
  );
};

export default PhoneSystemContent;