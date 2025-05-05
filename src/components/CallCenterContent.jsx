import React, { useState } from 'react';
import FAQ from './FAQ';
import Article from './ArticleLayoutCommon';
import Feedback from './Feedback';
import busimage from '/images/honey.png';
import TableOfContents from './TableOfContents';

const CallCenterContent = () => {
   

  // faq
  const callCenterFAQs = [
    {
      question: "How does your call center management system improve customer service?",
      answer: [
        "Intelligent call routing based on agent skills and customer needs",
        "Real-time monitoring and coaching tools for quality assurance",
        "Omnichannel capabilities connecting voice, chat, email, and social media",
        "Customer journey tracking across all touchpoints",
        "Smart IVR systems with natural language processing"
      ]
    },
    {
      question: "What features does your system offer for agent performance management?",
      answer: [
        "Real-time dashboards and performance metrics",
        "Call recording and quality scoring",
        "Automated coaching based on conversation analysis",
        "Gamification and incentive management tools",
        "Skill-based scheduling and development tracking"
      ]
    },
    {
      question: "How does your system handle call overflow during peak times?",
      answer: "Our system uses predictive analytics to forecast call volumes and automatically scales resources. It includes dynamic IVR messaging, callback options, intelligent queue management, and can instantly activate overflow call centers or remote agents when thresholds are reached."
    },
    {
      question: "Can the system help with compliance and call recording regulations?",
      answer: [
        "Yes, our compliance features include:",
        "Automatic call recording with consent management",
        "PCI DSS compliant payment processing",
        "HIPAA-compliant data handling options",
        "Customizable disclosure statements",
        "Comprehensive audit trails for all interactions"
      ]
    },
    {
      question: "How does your workforce management functionality work?",
      answer: "Our WFM system uses historical data and machine learning to predict call volumes and optimal staffing needs. It manages agent schedules, monitors adherence in real-time, allows for shift bidding and swapping, handles time-off requests, and optimizes breaks to maintain service levels."
    },
    {
      question: "What reporting and analytics capabilities does the system offer?",
      answer: "We provide comprehensive analytics including call metrics (AHT, FCR, abandonment rates), quality scores, customer satisfaction, agent performance, and trend analysis. Custom reports can be scheduled, exported, and visualized through interactive dashboards with drill-down capabilities."
    },
    {
      question: "How secure is customer data in your system?",
      answer: [
        "We employ enterprise-grade security including:",
        "SOC 2 Type II and GDPR compliance",
        "Encryption for all data at rest and in transit",
        "Role-based access controls with multi-factor authentication",
        "Automatic PCI redaction from recordings",
        "Regular penetration testing and security audits"
      ]
    },
    {
      question: "Can your system integrate with our existing CRM and business tools?",
      answer: "Yes, our platform offers pre-built integrations with major CRM systems like Salesforce, Microsoft Dynamics, and Zendesk. We also integrate with popular business tools and provide open APIs for custom integrations with your unique technology stack."
    },
    {
      question: "What kind of support do you offer for implementation and ongoing service?",
      answer: "We provide 24/7 technical support, a dedicated implementation team, and ongoing account management. Implementation includes discovery workshops, custom configuration, data migration, agent training, and a phased rollout approach. Post-implementation, we conduct quarterly business reviews to ensure you're maximizing ROI."
    },
    {
      question: "How does your system utilize AI and automation to improve efficiency?",
      answer: [
        "AI-powered features include:",
        "Conversational IVR and intelligent virtual assistants",
        "Automated post-call summaries and disposition codes",
        "Sentiment analysis and automatic escalation triggers",
        "Predictive routing based on customer history and needs",
        "Agent assist tools providing real-time guidance during calls"
      ]
    }
  ];


   // /table content
   const contents = [
    {
      id: 1,
      title: "Introduction to Call Center Management Software",
      slug: "introduction",
    },
    {
      id: 2,
      title: "What is Call Center Management Software?",
      slug: "whatiscc",
    },
    {
      id: 3,
      title: "How Modern Call Centers Work?",
      slug: "howiscc",
    },
    {
      id: 4,
      title: "Advanced Call Center Management Features",
      slug: "advancecc",
    },
    {
      id: 5,
      title: "Benefits of Call Center Management Software",
      slug: "benefitcc",
    },
    {
      id: 6,
      title: "Choosing the Call Center Management Software",
      slug: "choosingcc",
    },
    { id: 7, title: "Alternative Call Center Management Software Options", slug: "alternativecc" },
    { id: 8, title: "Related Articles", slug: "call-articles" },
    { id: 9, title: "FAQs", slug: "employee-faq" },
  ];

  const articles = [
    {
      id: 1,
      title: "Cloud-Based vs On-Premise Call Center Solutions: Which is Right for Your Business?",
      image: "/images/img1call1.png",
      author: "Alex",
      date: "March 15, 2023",
      excerpt:
        "When choosing call center software, one of the first decisions is between cloud-based and on-premise solutions. Cloud systems offer scalability and remote access, while on-premise provides more control...",
      link: "#",
    },
    {
      id: 2,
      title: "Top 5 Call Center Software Platforms in 2024: Features and Comparison",
      image: "/images/img2call2.png",
      author: "Alex",
      date: "July 8, 2023",
      excerpt:
        "From Genesys to Five9, today's call center platforms offer advanced features like AI-powered routing, omnichannel support, and real-time analytics. We compare the top solutions based on pricing...",
      link: "#",
    },
    {
      id: 3,
      title: "Essential Features to Look for in Call Center Management Software",
      image: "/images/img3call3.jpg",
      author: "Alex",
      date: "February 10, 2024",
      excerpt:
        "Modern call center software should include more than just basic calling capabilities. Look for features like intelligent call routing, workforce management, CRM integration, and comprehensive reporting...",
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
    
      // choose best service center
      const serviceTypes = [
        {
          name: "Inbound Call Centers",
          description: "Handle incoming customer calls for support, inquiries, and orders",
          bestFor: "Customer service, technical support, order processing"
        },
        {
          name: "Outbound Call Centers",
          description: "Make outgoing calls for sales, surveys, and follow-ups",
          bestFor: "Telemarketing, lead generation, customer retention"
        },
        {
          name: "Omnichannel Contact Centers",
          description: "Integrated platforms handling calls, emails, chats, and social media",
          bestFor: "Businesses needing multichannel customer engagement"
        },
        {
          name: "Virtual Call Centers",
          description: "Cloud-based solutions with remote agents",
          bestFor: "Distributed teams, businesses needing flexibility"
        }
      ];
    
      const evaluationCriteria = [
        {
          title: "Technology Stack",
          details: [
            "Cloud-based vs on-premise solutions",
            "IVR (Interactive Voice Response) capabilities",
            "Call routing algorithms (skills-based, round-robin)",
            "Integration with CRM (Salesforce, HubSpot, Zendesk)",
            "API availability for custom integrations",
            "AI features (sentiment analysis, chatbots)"
          ]
        },
        {
          title: "Performance Metrics",
          details: [
            "Service Level (e.g., 80% of calls answered in 20 seconds)",
            "Average Speed to Answer (ASA)",
            "First Call Resolution (FCR) rate",
            "Call Abandonment Rate (target <5%)",
            "Average Handle Time (AHT)",
            "Customer Satisfaction (CSAT) scores"
          ]
        },
        {
          title: "Security & Compliance",
          details: [
            "PCI DSS compliance for payment processing",
            "HIPAA compliance for healthcare",
            "GDPR compliance for EU customers",
            "Data encryption standards",
            "Call recording storage policies",
            "Disaster recovery protocols"
          ]
        }
      ];
    
      const vendorComparison = [
        { feature: "24/7 Support", essential: true, premium: true },
        { feature: "Multilingual Agents", essential: false, premium: true },
        { feature: "CRM Integration", essential: true, premium: true },
        { feature: "Advanced Analytics", essential: false, premium: true },
        { feature: "AI Capabilities", essential: false, premium: true },
        { feature: "Scalable Seats", essential: true, premium: true },
        { feature: "Custom Reporting", essential: false, premium: true },
        { feature: "Quality Monitoring", essential: true, premium: true }
      ];





    return (
        <>
      <TableOfContents contents={contents} />
{/* introduction */}
<div id="introduction" className="max-w-6xl mx-auto py-12 px-4">
<h1 className="text-4xl font-semibold text-gray-900 text-center mb-6">
            Revolutionize Your Call Center Operations
          </h1>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <p className="text-base text-gray-800 mb-8 leading-relaxed">
          In today's competitive customer service landscape, OmniCall Pro stands out as the premier call center 
          management solution, combining enterprise-grade technology with unparalleled ease of use. 
          Designed by industry veterans with decades of contact center experience, our platform redefines what businesses can expect from their customer service operations. Unlike basic call center software that merely routes calls, OmniCall Pro delivers a complete ecosystem featuring AI-driven call distributioncoomit that analyzes caller intent,predictive behavioral routing that matches customers with ideal agents, and real-time 
          speech analytics that detects customer sentiment during conversations.
            Our advanced call management software empowers your team to deliver exceptional customer 
            service with intelligent call routing, real-time analytics, and seamless CRM integration. 
            Boost efficiency by 40% while improving customer satisfaction scores.
            
          </p>
          
          <div className="mt-8 flex items-center">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((item) => (
                <img 
                  key={item}
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src={`https://i.pravatar.cc/150?img=${item}`}
                  alt={`User ${item}`}
                />
              ))}
            </div>
            <p className="ml-4 text-gray-600">
              Trusted by <span className="font-semibold">850+</span> call centers worldwide
            </p>
          </div>
        </div>
        
        {/* Image */}
        <div className="md:w-1/2">
          <img 
            src="https://tse1.mm.bing.net/th?id=OIP.DwSKSI4_0aCq6j6-O1_ybwHaEK&pid=Api&P=0&h=180"
            alt="Call center dashboard interface" 
            className="rounded-xl shadow-xl w-full h-auto"
          />
        </div>
      </div>
    </div>

{/* what is employee menagement system */}
<div id="whatiscc" className="max-w-6xl mx-auto rounded-xl">
      {/* Main Heading */}
      <div className="text-left mb-10">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">What is Call Center Management?</h1>
        <p className="text-base text-gray-800 leading-relaxed">
  Call center management software is a comprehensive technology solution that enables businesses to efficiently 
  handle high volumes of customer interactions across multiple channels (phone, email, chat, social media). 
  It combines communication tools with workforce optimization features to streamline operations, improve agent 
  productivity, and enhance customer satisfaction.
  
  <br /><br />
  
  Modern call center management systems typically include:
  <ul className="list-disc pl-5 mt-2 space-y-1">
    <li>Automatic Call Distribution (ACD) to route calls intelligently</li>
    <li>Interactive Voice Response (IVR) systems for self-service options</li>
    <li>Real-time monitoring and analytics dashboards</li>
    <li>Customer relationship management (CRM) integration</li>
    <li>Workforce management for scheduling and forecasting</li>
    <li>Quality monitoring and call recording capabilities</li>
    <li>Omnichannel routing for consistent cross-channel experiences</li>
  </ul>
  
  <br />
  
  These systems help organizations maintain service level agreements (SLAs), reduce operational costs, 
  and gain valuable insights from customer interactions. Cloud-based solutions have become particularly 
  popular as they offer scalability, remote work capabilities, and regular feature updates without 
  requiring expensive hardware installations.
</p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Feature 1 */}
        <div className="flex items-start space-x-4 bg-white p-5 rounded-lg shadow-sm">
          <div className="flex-shrink-0 mt-1">
            <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Team Management</h3>
            <p className="text-gray-800 text-base mt-2">
              Managing agents' schedules, performance, and training to ensure optimal customer service delivery across all channels.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start space-x-4 bg-white p-5 rounded-lg shadow-sm">
          <div className="flex-shrink-0 mt-1">
            <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Call Routing</h3>
            <p className="text-gray-800 text-base mt-2">
              Intelligent distribution of incoming calls to the most appropriate agents based on skills, availability, or customer priority.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start space-x-4 bg-white p-5 rounded-lg shadow-sm">
          <div className="flex-shrink-0 mt-1">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Analytics & Reporting</h3>
            <p className="text-gray-800 text-base mt-2">
              Tracking key metrics like call volume, wait times, resolution rates, and customer satisfaction to improve operations.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex items-start space-x-4 bg-white p-5 rounded-lg shadow-sm">
          <div className="flex-shrink-0 mt-1">
            <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Workforce Optimization</h3>
            <p className="text-gray-800 text-base mt-2">
              Forecasting call volumes and scheduling staff accordingly to maintain service levels while controlling costs.
            </p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-10 bg-blue-50 p-6 rounded-lg">
        <div className="flex items-center">
          <svg className="w-10 h-10 text-[#000e54] mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <p className="text-gray-800 text-base">
            <strong>Effective call center management</strong> combines technology, processes, and people management to deliver exceptional customer experiences while maintaining operational efficiency and meeting business objectives.
          </p>
        </div>
      </div>
</div>


{/* how does call center works */}
<div id="howiscc" className="max-w-6xl mx-auto py-12">
  <div className="text-center mb-16">
    <h1 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-4">
      How <span className="text-[#000e54]">Modern Call Centers</span> Work
    </h1>
    <p className="text-base text-gray-800 max-w-3xl mx-auto">
      The complete technology stack and operational processes behind today's customer service centers
    </p>
  </div>

  {/* Overview Section */}
  <div className="bg-white rounded-xl  mb-16">
    <h2 className="text-xl font-semibold text-gray-800 mb-6">Call Center Overview</h2>
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <p className="text-gray-800 text-base mb-4">
          Modern call centers are sophisticated operations that blend technology, human expertise, and data analytics to deliver exceptional customer service. They handle millions of interactions daily across multiple channels including phone, email, chat, and social media.
        </p>
        <p className="text-gray-800 text-base mb-6">
          Today's call centers leverage cloud computing, artificial intelligence, and omnichannel platforms to provide seamless customer experiences while optimizing operational efficiency.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="font-semibold text-base text-[#000e54] mb-2">Key Statistics:</h3>
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start text-base">
              <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>90% of customers rate immediate response as important when they have a customer service question</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Call centers handling 1M+ calls/month save $300k annually with AI routing</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
          alt="Call center operation" 
          className="w-full h-auto rounded-lg shadow-sm"
        />
      </div>
    </div>
  </div>

  {/* Detailed Workflow Section */}
  <div className="mb-20">
    <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">The Call Center Workflow</h2>
    <div className="relative">
      {/* SVG Connector Lines */}
      <svg className="hidden md:block absolute inset-0 w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
        <path 
          d="M100,150 Q250,150 300,100 Q350,50 500,50 Q650,50 700,100 Q750,150 900,150" 
          stroke="#3B82F6" 
          strokeWidth="2" 
          fill="none" 
          strokeDasharray="5,5"
        />
      </svg>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
  
  {/* Step 1 */}
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">1. Multi-Channel Initiation</h3>
    <p className="text-gray-800 text-center text-base">
      Customers contact through phone, email, chat, social media, or web forms. The omnichannel routing system captures and queues all interactions uniformly.
    </p>
    <div className="mt-4 bg-blue-50 p-3 rounded-lg text-base text-gray-800">
      <strong>Technology:</strong> Omnichannel ACD, VoIP, SIP Trunking, WebRTC
    </div>
  </div>

  {/* Step 2 */}
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">2. Intelligent IVR Processing</h3>
    <p className="text-gray-800 text-center text-base">
      Advanced IVR systems with natural language understanding collect caller intent through voice or menu selections, reducing misrouting by 40%.
    </p>
    <div className="mt-4 bg-purple-50 p-3 rounded-lg text-base text-gray-800">
      <strong>Technology:</strong> NLP, Conversational AI, DTMF Recognition
    </div>
  </div>

  {/* Step 3 */}
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">3. Contextual Routing</h3>
    <p className="text-gray-800 text-center text-base">
      Real-time analysis of customer profile, sentiment, and value routes to the best-qualified agent with full historical context.
    </p>
    <div className="mt-4 bg-green-50 p-3 rounded-lg text-base text-gray-800">
      <strong>Technology:</strong> Machine Learning, Predictive Routing, CTI
    </div>
  </div>

  {/* Row 2 */}
  
  {/* Step 4 */}
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
      <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">4. Agent Engagement</h3>
    <p className="text-gray-800 text-center text-base">
      Agents receive calls with complete customer journey data, AI-suggested responses, and real-time guidance to ensure consistent service quality.
    </p>
    <div className="mt-4 bg-yellow-50 p-3 rounded-lg text-base text-gray-800">
      <strong>Technology:</strong> CRM Integration, Knowledge Management, Real-Time Analytics
    </div>
  </div>

  {/* Step 5 */}
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">5. Resolution & Automation</h3>
    <p className="text-gray-800 text-center text-base">
      Complex issues trigger automated workflows while simple inquiries are resolved through self-service, with AI verifying resolution completeness.
    </p>
    <div className="mt-4 bg-red-50 p-3 rounded-lg text-base text-gray-800">
      <strong>Technology:</strong> RPA, Workflow Automation, AI Validation
    </div>
  </div>

  {/* Step 6 */}
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">6. Post-Call Optimization</h3>
    <p className="text-gray-800 text-center text-base">
      Automated follow-ups, CSAT surveys, and conversation analytics feed continuous improvement loops for both processes and agent training.
    </p>
    <div className="mt-4 bg-indigo-50 p-3 rounded-lg text-base text-gray-800">
      <strong>Technology:</strong> Speech Analytics, Survey Tools, BI Reporting
    </div>
  </div>
</div>
    </div>
  </div>

  {/* Technology Deep Dive */}
  <div className="max-w-6xl mx-auto mb-16">
    <h2 className="text-4xl font-semibold text-center text-gray-900 mb-10">Core Call Center Technologies</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* VoIP Technology */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-start mb-4">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">VoIP Telephony</h3>
            <p className="text-gray-800 text-base">
              Voice over IP (VoIP) technology transmits calls over the internet instead of traditional phone lines. Modern systems offer:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-800 text-base">
              <li>HD voice quality with 99.99% uptime</li>
              <li>Global virtual numbers with local presence</li>
              <li>Seamless integration with business applications</li>
              <li>Significant cost savings over PSTN</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ACD Technology */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-start mb-4">
          <div className="bg-purple-100 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Automatic Call Distribution (ACD)</h3>
            <p className="text-gray-800 text-base">
              ACD systems intelligently route incoming calls to the most appropriate agent based on:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-800 text-base">
              <li>Agent skills and certifications</li>
              <li>Customer priority and value</li>
              <li>Current wait times and service levels</li>
              <li>Historical interaction patterns</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CRM Integration */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-start mb-4">
          <div className="bg-green-100 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">CRM Integration</h3>
            <p className="text-gray-800 text-base">
              Customer Relationship Management systems provide agents with complete customer context:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-800 text-base">
              <li>360-degree customer view with interaction history</li>
              <li>Real-time screen pops with relevant data</li>
              <li>Automated workflows for common scenarios</li>
              <li>Seamless handoffs between channels</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Analytics */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-start mb-4">
          <div className="bg-yellow-100 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-Time Analytics</h3>
            <p className="text-gray-800 text-base">
              Comprehensive reporting and analytics provide insights into:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-800 text-base">
              <li>Agent performance metrics (AHT, FCR, CSAT)</li>
              <li>Call volume forecasting and staffing</li>
              <li>Customer sentiment analysis</li>
              <li>Process bottlenecks and improvement areas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Future Trends */}
  <div className="bg-gradient-to-r from-indigo-900 to-blue-800 rounded-2xl p-8 text-white">
    <h2 className="text-4xl font-semibold mb-6">The Future of Call Centers</h2>
    
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white bg-opacity-10 p-5 rounded-xl backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-800">
          <svg className="w-6 h-6 text-[#000e54] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          AI-Powered Automation
        </h3>
        <p className="text-gray-800 text-base">
          Advanced AI will handle routine inquiries while seamlessly transferring complex issues to human agents with full context.
        </p>
      </div>
      
      <div className="bg-white bg-opacity-10 p-5 rounded-xl backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-800">
          <svg className="w-6 h-6 text-purple-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Predictive Analytics
        </h3>
        <p className="text-gray-800 text-base">
          Systems will anticipate customer needs before they call and proactively offer solutions through preferred channels.
        </p>
      </div>
      
      <div className="bg-white bg-opacity-10 p-5 rounded-xl backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-800">
          <svg className="w-6 h-6 text-green-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Human-AI Collaboration
        </h3>
        <p className="text-gray-800 text-base">
          Agents will work alongside AI assistants that provide real-time guidance, sentiment analysis, and compliance monitoring.
        </p>
      </div>
    </div>
  </div>
</div>


{/* Advanced Call Center Features Section */}
<div id="advancecc" className="w-full py-12 max-w-6xl mx-auto">
<div className="w-full py-10">
<div className="text-center mb-12">
      <h2 className="text-4xl text-4xl font-semibold text-gray-900 mb-4">
        Advanced Call Center Management Features
      </h2>
      <p className="text-base text-gray-800 max-w-3xl mx-auto">
        Comprehensive solutions designed to optimize your customer interactions and operational efficiency
      </p>
    </div>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {valueProps.map((prop, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="text-[#000e54] mb-4">
                      {prop.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {prop.title}
                    </h3>
                    <p className="text-gray-800 text-base">
                      {prop.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
</div>
<div className="max-w-6xl mx-auto px-4 py-12">
  <div className="rounded-xl overflow-hidden">
    {/* First Row of Features */}
    <div className="flex flex-wrap -mx-4">
      {/* Feature 1 - Omnichannel Communication */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-8 transition-all duration-300">
          <div className="text-[#000e54] mb-5 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Omnichannel Support</h3>
          <ul className="text-gray-800 space-y-2">
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Unified platform for voice, email, chat, SMS</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Seamless customer journey across channels</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Social media integration (Facebook, Twitter, WhatsApp)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Feature 2 - Intelligent Routing */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-8 transition-all duration-300">
          <div className="text-[#000e54] mb-5 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Intelligent Routing</h3>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Skills-based routing to match agents with calls</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>AI-powered predictive call routing</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Priority routing for VIP customers</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Feature 3 - Analytics & Reporting */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-8 transition-all duration-300">
          <div className="text-[#000e54] mb-5 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Advanced Analytics</h3>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Real-time dashboard with 50+ KPIs</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Custom report builder with scheduling</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Speech analytics for quality monitoring</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Feature 4 - CRM Integration */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-8 transition-all duration-300">
          <div className="text-[#000e54] mb-5 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">CRM Integration</h3>
          <ul className="text-gray-800 space-y-2">
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Pre-built connectors for Salesforce, HubSpot</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Screen pops with customer history</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Automatic call logging and activity tracking</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Second Row of Features */}
    <div className="flex flex-wrap -mx-4">
      {/* Feature 5 - Workforce Management */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-8 transition-all duration-300">
          <div className="text-[#000e54] mb-5 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Workforce Optimization</h3>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Automated shift scheduling</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Forecasting based on historical data</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Performance tracking with gamification</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Feature 6 - AI & Automation */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-8 transition-all duration-300">
          <div className="text-[#000e54] mb-5 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">AI & Automation</h3>
          <ul className="text-gray-800 space-y-2">
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>AI-powered chatbots for first-level support</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Sentiment analysis for customer emotions</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Automated call summaries and transcriptions</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Feature 7 - Security & Compliance */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-8 transition-all duration-300">
          <div className="text-[#000e54] mb-5 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Security & Compliance</h3>
          <ul className="text-gray-800 space-y-2">
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>End-to-end encryption for all communications</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>PCI-DSS compliant payment processing</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Role-based access controls and audit logs</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Feature 8 - Scalability */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-8 transition-all duration-300">
          <div className="text-[#000e54] mb-5 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Global Scalability</h3>
          <ul className="text-gray-800 space-y-2">
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Instant scaling for seasonal demand spikes</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Multi-region deployment options</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Local number provisioning in 100+ countries</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

{/* benefits */}
<div id="benefitcc" className="max-w-6xl mx-auto py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-900 sm:text-4xl">
          The Strategic Advantages of Professional Call Center Services
        </h2>
        <p className="mt-4 max-w-2xl text-base text-gray-800 mx-auto">
          Discover how outsourcing your customer interactions can transform your business operations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Benefit 1 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-800">24/7 Customer Support</h3>
            </div>
            <p className="text-gray-800 text-base">
              Professional call centers provide round-the-clock support, ensuring your customers receive assistance whenever they need it. This leads to higher customer satisfaction, increased loyalty, and reduced churn. With global coverage across time zones, you never miss an opportunity to engage with your customers.
            </p>
          </div>
        </div>

        {/* Benefit 2 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-800">Cost Efficiency</h3>
            </div>
            <p className="text-gray-800 text-base">
              Outsourcing call center operations eliminates the need for expensive infrastructure, technology investments, and full-time staff training. You pay only for the services you use, converting fixed costs into variable costs. This operational flexibility allows for better budget management and significant savings.
            </p>
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-purple-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-800">Scalability & Flexibility</h3>
            </div>
            <p className="text-gray-800 text-base">
              Easily scale operations up or down based on seasonal demands or business growth without the challenges of hiring or layoffs. Call centers can quickly adjust to your changing needs, providing more agents during peak periods and reducing capacity during slower times.
            </p>
          </div>
        </div>

        {/* Benefit 4 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-800">Enhanced Security & Compliance</h3>
            </div>
            <p className="text-gray-800 text-base">
              Professional call centers maintain rigorous security standards including PCI-DSS compliance, data encryption, and secure payment processing. They stay updated with changing regulations (GDPR, HIPAA, etc.) ensuring your customer interactions remain compliant and protected from data breaches.
            </p>
          </div>
        </div>

        {/* Benefit 5 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-red-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-medium text-gray-800">Performance Analytics</h3>
            </div>
            <p className="text-gray-800 text-base">
              Gain access to comprehensive reporting and analytics that track call volumes, resolution times, customer satisfaction scores, and agent performance. These insights help identify trends, improve processes, and make data-driven decisions to enhance your customer experience strategy.
            </p>
          </div>
        </div>

        {/* Benefit 6 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-800">Multilingual Support</h3>
            </div>
            <p className="text-gray-800">
              Expand your global reach with agents fluent in multiple languages. This eliminates language barriers, improves communication quality, and demonstrates cultural sensitivity to diverse customer bases. Multilingual support is particularly valuable for businesses targeting international markets.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#000e54] py-8 px-4 rounded-lg mt-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Call Center in India Advantages
          </h1>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {advantages.map((advantage, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 flex flex-col items-center text-center rounded-sm"
                >
                  <div className="text-[#000e54] hover:text-[#ff8633] mb-4">
                    {advantage.icon}
                  </div>
                  <p className="text-gray-800 text-sm">{advantage.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
</div>

{/* choosing right ccm */}
<div id="choosingcc" className="max-w-6xl mx-auto py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-semibold text-gray-900 sm:tracking-tight mb-6">
          The Complete Guide to Choosing the Best Call Center Service
        </h1>
        <p className="max-w-3xl mx-auto text-base text-gray-800">
          Everything you need to evaluate, compare, and select the perfect call center solution for your business requirements
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Understanding Your Call Center Needs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceTypes.map((type, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-blue-200 transition-all">
              <h3 className="text-xl font-semibold text-[#000e54] mb-3">{type.name}</h3>
              <p className="text-gray-800 text-base mb-4">{type.description}</p>
              <div className="bg-blue-50 p-3 rounded">
                <h4 className="text-base font-medium text-[#000e54] mb-1">Best for:</h4>
                <p className="text-base text-[#000e54]">{type.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16  rounded-xl max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Key Evaluation Criteria</h2>
        <div className="space-y-10">
          {evaluationCriteria.map((criteria, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-5 flex items-center">
                <span className="bg-blue-100 text-[#000e54] w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  {index + 1}
                </span>
                {criteria.title}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
                {criteria.details.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-5 w-5 text-[#000e54] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Vendor Comparison Checklist</h2>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-base font-semibold text-gray-800 uppercase tracking-wider">
                    Feature
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-base font-semibold text-gray-800 uppercase tracking-wider">
                    Essential Service
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-base font-semibold text-gray-800 uppercase tracking-wider">
                    Premium Service
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {vendorComparison.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.essential ? (
                        <span className="px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Included
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Not Included
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Included
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-16 max-w-6xl mx-auto px-4 sm:px-6">
  <h2 className="text-4xl font-semibold text-gray-900 mb-8 text-center">Implementation Roadmap</h2>
  <div className="relative">
    {/* Vertical line - hidden on mobile, shown on md+ */}
    <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-blue-100 transform -translate-x-1/2"></div>
    
    <div className="space-y-12 md:space-y-0">
      {/* Phase 1 */}
      <div className="relative w-full flex flex-col md:flex-row justify-between items-center">
        {/* Left content - shown on right on mobile */}
        <div className="w-full md:w-5/12 mb-4 md:mb-0 md:pr-8 md:text-left order-2 md:order-1">
          <h3 className="text-xl font-semibold text-[#000e54] mb-3">Discovery Phase (1-2 weeks)</h3>
          <ul className="text-gray-800 text-base space-y-2">
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Define business objectives and KPIs</span>
            </li>
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Map current customer journey</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Identify integration requirements</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Establish success metrics</span>
            </li>
          </ul>
        </div>
        
        {/* Number indicator - always shown but positioned differently */}
        <div className="w-full md:w-2/12 flex justify-start md:justify-center mb-4 md:mb-0 order-1 md:order-2">
          <div className="h-10 w-10 rounded-full bg-[#000e54] flex items-center justify-center text-white font-bold text-base md:text-base">
            1
          </div>
        </div>
        
        {/* Empty spacer - hidden on mobile */}
        <div className="hidden md:block md:w-5/12 order-3"></div>
      </div>
      
      {/* Phase 2 */}
      <div className="relative w-full flex flex-col md:flex-row justify-between items-center">
        {/* Empty spacer - hidden on mobile */}
        <div className="hidden md:block md:w-5/12 order-1"></div>
        
        {/* Number indicator */}
        <div className="w-full md:w-2/12 flex justify-start md:justify-center mb-4 md:mb-0 order-1 md:order-2">
          <div className="h-10 w-10 rounded-full bg-[#000e54] flex items-center justify-center text-white font-bold text-base md:text-base">
            2
          </div>
        </div>
        
        {/* Right content */}
        <div className="w-full md:w-5/12 mb-4 md:mb-0 md:pl-8 order-2 md:order-3">
          <h3 className="text-xl font-semibold text-[#000e54] mb-3">Vendor Selection (2-4 weeks)</h3>
          <ul className="text-gray-800 text-base space-y-2">
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Create RFP and evaluate proposals</span>
            </li>
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Conduct product demos and trials</span>
            </li>
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Check references and case studies</span>
            </li>
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Negotiate contract terms</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Phase 3 */}
      <div className="relative w-full flex flex-col md:flex-row justify-between items-center">
        {/* Left content */}
        <div className="w-full md:w-5/12 mb-4 md:mb-0 md:pr-8 md:text-left order-2 md:order-1">
          <h3 className="text-xl font-semibold text-[#000e54] mb-3">Implementation (4-8 weeks)</h3>
          <ul className="text-gray-800 text-base space-y-2">
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>System configuration and customization</span>
            </li>
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>CRM and other integrations</span>
            </li>
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Agent training and certification</span>
            </li>
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Test calls and quality assurance</span>
            </li>
          </ul>
        </div>
        
        {/* Number indicator */}
        <div className="w-full md:w-2/12 flex justify-start md:justify-center mb-4 md:mb-0 order-1 md:order-2">
          <div className="h-10 w-10 rounded-full bg-[#000e54] flex items-center justify-center text-white font-bold text-base md:text-base">
            3
          </div>
        </div>
        
        {/* Empty spacer - hidden on mobile */}
        <div className="hidden md:block md:w-5/12 order-3"></div>
      </div>
      
      {/* Phase 4 */}
      <div className="relative w-full flex flex-col md:flex-row justify-between items-center">
        {/* Empty spacer - hidden on mobile */}
        <div className="hidden md:block md:w-5/12 order-1"></div>
        
        {/* Number indicator */}
        <div className="w-full md:w-2/12 flex justify-start md:justify-center mb-4 md:mb-0 order-1 md:order-2">
          <div className="h-10 w-10 rounded-full bg-[#000e54] flex items-center justify-center text-white font-bold text-base md:text-base">
            4
          </div>
        </div>
        
        {/* Right content */}
        <div className="w-full md:w-5/12 mb-4 md:mb-0 md:pl-8 order-2 md:order-3">
          <h3 className="text-xl font-semibold text-[#000e54] mb-3">Go-Live & Optimization (Ongoing)</h3>
          <ul className="text-gray-800 text-base md:text-base space-y-2">
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Phased rollout and monitoring</span>
            </li>
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Performance benchmarking</span>
            </li>
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Continuous improvement cycles</span>
            </li>
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Quarterly business reviews</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="bg-[#000e54] rounded-xl p-10 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold mb-6">Critical Questions to Ask Potential Providers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 p-5 rounded-lg">
              <h3 className="text-xl text-gray-800 font-semibold mb-3">Technical Questions</h3>
              <ul className="space-y-2 text-base text-gray-800">
                <li>What is your average system uptime?</li>
                <li>How do you handle peak call volumes?</li>
                <li>What disaster recovery plans are in place?</li>
                <li>How frequently do you update your software?</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-10 p-5 rounded-lg">
              <h3 className="text-xl text-gray-800 font-semibold mb-3">Service Questions</h3>
              <ul className="space-y-2 text-gray-800 text-base">
                <li>What are your standard SLAs?</li>
                <li>How do you measure and report quality?</li>
                <li>What training do your agents receive?</li>
                <li>How do you handle escalations?</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-10 p-5 rounded-lg">
              <h3 className="text-xl text-gray-800 font-semibold mb-3">Commercial Questions</h3>
              <ul className="space-y-2 text-gray-800 text-base">
                <li>What's included in the base price?</li>
                <li>What are common additional costs?</li>
                <li>What's your contract termination policy?</li>
                <li>Do you offer volume discounts?</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-10 p-5 rounded-lg">
              <h3 className="text-xl text-gray-800 font-semibold mb-3">Strategic Questions</h3>
              <ul className="space-y-2 text-gray-800 text-base">
                <li>How do you support business growth?</li>
                <li>What innovation roadmap do you have?</li>
                <li>How do you incorporate customer feedback?</li>
                <li>What differentiates you from competitors?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-8">Cost Comparison Framework</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-100 text-left text-base font-semibold text-gray-800 uppercase tracking-wider">Cost Factor</th>
                <th className="px-6 py-3 bg-gray-100 text-left text-base font-semibold text-gray-800 uppercase tracking-wider">In-House</th>
                <th className="px-6 py-3 bg-gray-100 text-left text-base font-semibold text-gray-800 uppercase tracking-wider">Outsourced</th>
                <th className="px-6 py-3 bg-gray-100 text-left text-base font-semibold text-gray-800 uppercase tracking-wider">Hybrid</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-base font-semibold text-gray-800">Setup Costs</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">High (equipment, software)</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Low to moderate</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Moderate</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-base font-semibold text-gray-800">Monthly Costs</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Fixed salaries + benefits</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Per-minute/agent fees</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Combination</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-base font-semibold text-gray-800">Scalability Cost</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">High (hiring/training)</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Low (pay for what you use)</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Moderate</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-base font-semibold text-gray-800">Technology Updates</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Your responsibility</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Vendor responsibility</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Shared</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-base font-semibold text-gray-800">Typical ROI Period</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">12-24 months</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">3-6 months</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">6-12 months</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      
</div>

 {/* alternatives */}
 <div id="alternativecc" className="max-w-6xl mx-auto py-16">
  <div className="text-center mb-12">
    <h2 className="text-4xl  font-semibold text-gray-900 mb-4">Alternative Call Center Software Options</h2>
    <p className="text-base text-gray-800 max-w-3xl mx-auto">
      Compare leading solutions to find the perfect fit for your business needs, budget, and technical requirements.
    </p>
  </div>

  {/* Alternatives Grid */}
  <div className="flex flex-wrap max-w-6xl mx-auto">
    {/* Alternative 1 - Zendesk Talk */}
    <div className="w-full md:w-1/2 lg:w-1/2 px-2 mb-8">
      <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-all duration-300 border-t-4 border-blue-500">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Zendesk Talk</h3>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold uppercase">Popular</span>
        </div>
        
        <p className="text-gray-800 text-base mb-6">
          Cloud-based call center software integrated with Zendesk's customer service platform, ideal for support teams needing unified customer communications.
        </p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-xl text-gray-800 mb-2">Key Features:</h4>
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Native integration with Zendesk Support</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>IVR and call routing capabilities</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Call recording and quality management</span>
            </li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-base text-gray-800 mb-2">Best For:</h4>
          <p className="text-gray-800 text-base">Companies already using Zendesk products or businesses looking for simple, tightly integrated solutions.</p>
        </div>
        
        <div className="flex items-center justify-between text-base text-gray-800 mt-auto pt-4 border-t border-gray-100">
          <span>Starting from <span className="font-semibold text-gray-800">$19</span>/agent/month</span>
          <span className="flex items-center">
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </span>
        </div>
      </div>
    </div>

    {/* Alternative 2 - Genesys Cloud */}
    <div className="w-full md:w-1/2 lg:w-1/2 px-2 mb-8">
      <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-all duration-300 border-t-4 border-purple-500">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Genesys Cloud</h3>
          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-semibold uppercase">Enterprise</span>
        </div>
        
        <p className="text-gray-800 text-base mb-6">
          Highly scalable cloud contact center platform with advanced omnichannel routing, analytics, and AI capabilities for mid-market and enterprise organizations.
        </p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 text-xl mb-2">Key Features:</h4>
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>AI-powered predictive routing and workforce optimization</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Extensive integration capabilities with 300+ pre-built integrations</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Advanced reporting and analytics with customizable dashboards</span>
            </li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-2">Best For:</h4>
          <p className="text-gray-800 text-base">Large enterprises with complex routing needs and organizations requiring advanced workforce management features.</p>
        </div>
        
        <div className="flex items-center justify-between text-base text-gray-800 mt-auto pt-4 border-t border-gray-100">
          <span>Starting from <span className="font-semibold text-gray-800">$75</span>/agent/month</span>
          <span className="flex items-center">
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </span>
        </div>
      </div>
    </div>

    {/* Alternative 3 - Five9 */}
    <div className="w-full md:w-1/2 lg:w-1/2  px-2 mb-8">
      <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-all duration-300 border-t-4 border-green-500">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Five9</h3>
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold uppercase">Established</span>
        </div>
        
        <p className="text-gray-800 text-base mb-6">
          Comprehensive cloud contact center platform with powerful voice capabilities, omnichannel routing, and mature workforce optimization features.
        </p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 text-xl mb-2">Key Features:</h4>
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54]mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Intelligent Virtual Agent (IVA) with conversational AI</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Robust outbound calling capabilities with predictive dialing</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Advanced quality management and supervisor monitoring</span>
            </li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-base text-gray-800 mb-2">Best For:</h4>
          <p className="text-gray-800 text-base ">Midsize to large contact centers with both inbound and outbound calling needs requiring advanced analytics.</p>
        </div>
        
        <div className="flex items-center justify-between text-base text-gray-800 mt-auto pt-4 border-t border-gray-100">
          <span>Starting from <span className="font-bold text-gray-800 text-base">$100</span>/agent/month</span>
          <span className="flex items-center">
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </span>
        </div>
      </div>
    </div>

    {/* Alternative 4 - Talkdesk */}
    <div className="w-full md:w-1/2 lg:w-1/2  px-2 mb-8">
      <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-all duration-300 border-t-4 border-indigo-500">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Talkdesk</h3>
          <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full font-semibold uppercase">Cloud-Native</span>
        </div>
        
        <p className="text-gray-800 text-base mb-6">
          Modern cloud contact center with enterprise-grade reliability, extensive AI capabilities, and an intuitive user experience.
        </p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 text-xl mb-2">Key Features:</h4>
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>100% uptime SLA with distributed cloud architecture</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>AI-powered agent assist and conversational analytics</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Customizable interface with low-code/no-code tools</span>
            </li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 text-base mb-2">Best For:</h4>
          <p className="text-gray-800 text-base">Customer-centric enterprises requiring high reliability and organizations looking for modern AI-powered solutions.</p>
        </div>
        
        <div className="flex items-center justify-between text-base text-gray-800 mt-auto pt-4 border-t border-gray-100">
          <span>Starting from <span className="font-semibold text-base text-gray-800">$100</span>/agent/month</span>
          <span className="flex items-center">
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </span>
        </div>
        </div>
    </div>

    {/* alternative 5-nice xcone */}
    <div className="w-full md:w-1/2 lg:w-1/2 px-2  mb-8">
  <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-all duration-300 border-t-4 border-blue-500">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-semibold text-gray-800">NICE CXone</h3>
      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold uppercase">Unified Platform</span>
    </div>
    
    <p className="text-gray-800 text-base mb-6">
      All-in-one cloud contact center platform with workforce optimization, advanced analytics, and AI-driven customer experience insights.
    </p>
    
    <div className="mb-6">
      <h4 className="font-semibold text-gray-800 text-xl mb-2">Key Features:</h4>
      <ul className="space-y-2 text-gray-800">
        <li className="flex items-start text-base">
          <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Omnichannel routing with real-time monitoring</span>
        </li>
        <li className="flex items-start text-base">
          <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Predictive behavioral routing using AI</span>
        </li>
        <li className="flex items-start text-base">
          <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Comprehensive WFO suite with quality management</span>
        </li>
      </ul>
    </div>
    
    <div className="mb-6">
      <h4 className="font-semibold text-gray-800 text-base mb-2">Best For:</h4>
      <p className="text-gray-800 text-base">Enterprise organizations seeking comprehensive contact center capabilities with powerful workforce optimization tools.</p>
    </div>
    
    <div className="flex items-center justify-between text-base text-gray-800 mt-auto pt-4 border-t border-gray-100">
      <span>Starting from <span className="font-semibold text-base text-gray-800">$110</span>/agent/month</span>
      <span className="flex items-center">
        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </span>
    </div>
  </div>
</div>

{/* alternative 6- twilio flex */}
<div className="w-full md:w-1/2 lg:w-1/2 px-2 mb-8">
  <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-all duration-300 border-t-4 border-red-500">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-semibold text-gray-800">Twilio Flex</h3>
      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold uppercase">Programmable</span>
    </div>
    
    <p className="text-gray-800 text-base mb-6">
      Highly customizable programmable contact center platform that allows complete control over the customer experience with API-first approach.
    </p>
    
    <div className="mb-6">
      <h4 className="font-semibold text-gray-800 text-xl mb-2">Key Features:</h4>
      <ul className="space-y-2 text-gray-800">
        <li className="flex items-start text-base">
          <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>100% customizable UI with React components</span>
        </li>
        <li className="flex items-start text-base">
          <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Flexible API-driven architecture with microservices</span>
        </li>
        <li className="flex items-start text-base">
          <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Seamless integration with existing Twilio services</span>
        </li>
      </ul>
    </div>
    
    <div className="mb-6">
      <h4 className="font-semibold text-gray-800 text-base mb-2">Best For:</h4>
      <p className="text-gray-800 text-base">Technology-forward companies that need complete customization capabilities and have developer resources available.</p>
    </div>
    
    <div className="flex items-center justify-between text-base text-gray-800 mt-auto pt-4 border-t border-gray-100">
      <span>Starting from <span className="font-semibold text-base text-gray-800">$150</span>/agent/month</span>
      <span className="flex items-center">
        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg className="h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </span>
    </div>
  </div>
</div>

    </div>
</div>

       {/* article */}
       <div id="d-article">
        <Article
          title="Related Articles"
          items={articles}
          buttonText="View Post"
          buttonColor="bg-[#ff8633]"
        />
      </div>


      {/* faq */}
      <div id="employee-faq" className="">
        <FAQ faqs={ callCenterFAQs} />
      </div>

      {/* feedback */}
      {/* <Feedback 
        title="What Our Customers Say"
        testimonials={homeTestimonials}
      /> */}
        </>
    );
};

export default CallCenterContent;