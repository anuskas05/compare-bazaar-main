import React, { useState, useEffect } from 'react';
import PhoneSystemCardCommon from './PhoneSystemCardCommon';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';
import Feedback from './Feedback';
import { ChevronDown, ChevronUp, List, BookOpen } from 'lucide-react';
import TableOfContents from './TableOfContents';

import CRMComparison from './CRMComparison';

import Advice from './Advice '
import Modal from './Modal';
import CRMForm from './CRMForm';
import FAQ from './FAQ';
import   WhitePaperForm from './WhitePaperForm';
import Article from './ArticleLayoutCommon';


const BestCRMSoftware = () => {
  const [showMore, setShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const systems = [
    {
      name: "Zoho CRM",
      logo: "/images/zoho.png",
      bestFor: "Best for Growing Businesses",
      price: "Starts at $14 per user per month",
      videoCapacity: "15-day free trial",
      support: "24/7 customer support",
      link: "#",
    
    },
    {
      name: "Creatio",
      logo: "/images/creatio.png",
      bestFor: "Best for Customer Lifecycle Management",
      price: "Starts at $25 per user per month",
      videoCapacity: "14-day free trial",
      support: "24/7 customer support",
      link: "#",
     
    },
    {
      name: "Hub CRM",
      logo: "/images/hub.png",
      bestFor: "Best for Sales and Marketing Integrations",
      price: "Starts at $15 per month per user",
      videoCapacity: "Free plan or 14-day free trial",
      support: "Email chat support included",
      link: "#",
    
    },
    {
      name: "HoneyBook",
      logo: "/images/honey.png",
      bestFor: "Best for All-In-One Option",
      price: "Starts at $16 per user per month",
      videoCapacity: "7-day free trial",
      support: "24/7 phone and email support",
      link: "#",
     
    },
    {
      name: "Pipedrive",
      logo: "/images/pipe.png",
      bestFor: "Best for Automation and Management",
      price: "Starts at $14 per user per month",
      videoCapacity: "14-day free trial",
      support: "24/7 online chat, premium for phone",
      link: "#",
      
    },
  ];
  const crmTestimonials = [
    {
      avatar: "M",
      avatarColor: "bg-teal-600",
      name: "Michael W.",
      date: "05/25/2024",
      stars: 5,
      text: "This CRM transformed our sales process completely. The contact management and pipeline visibility have increased our conversion rates by 27% in just three months."
    },
    {
      avatar: "T",
      avatarColor: "bg-orange-500",
      name: "Teresa J.",
      date: "04/18/2024",
      stars: 4,
      text: "The automation features save our team hours every week. Email sequences and follow-up reminders ensure no lead falls through the cracks."
    },
    {
      avatar: "R",
      avatarColor: "bg-pink-600",
      name: "Robert K.",
      date: "03/30/2024",
      stars: 5,
      text: "Integration with our phone system was seamless. Having call recordings automatically attached to contact records has improved our training and customer service."
    },
    {
      avatar: "L",
      avatarColor: "bg-violet-500",
      name: "Lisa M.",
      date: "02/12/2024",
      stars: 5,
      text: "The reporting features give our management team real-time visibility into sales performance. Custom dashboards help us make data-driven decisions daily."
    },
    {
      avatar: "B",
      avatarColor: "bg-emerald-600",
      name: "Brian T.",
      date: "01/07/2024",
      stars: 4,
      text: "Mobile app is powerful enough that our field sales team can manage their entire workflow on the go. The offline mode is particularly valuable."
    },
    {
      avatar: "C",
      avatarColor: "bg-cyan-500",
      name: "Christina R.",
      date: "04/06/2024",
      stars: 5,
      text: "Customer support has been exceptional. Their onboarding team ensured our data migration went smoothly and trained our staff thoroughly."
    }
  ];
  const crmFAQs = [
    {
      question: "How can CRM software benefit my business?",
      answer: [
        "Centralizes all customer interactions in one place",
        "Automates sales pipelines and follow-ups",
        "Provides detailed customer insights and analytics",
        "Improves team collaboration and accountability",
        "Enhances customer service with history tracking"
      ]
    },
    {
      question: "What types of businesses need CRM software?",
      answer: "CRM systems are valuable for businesses of all sizes and industries - from startups to enterprises. They're particularly beneficial for sales teams, marketing agencies, service providers, e-commerce businesses, and any organization that manages customer relationships."
    },
    {
      question: "How does CRM software integrate with other tools?",
      answer: "Modern CRM platforms offer integrations with email platforms, marketing automation tools, accounting software, customer support systems, and productivity apps. Many connect via APIs or pre-built connectors with popular business applications."
    },
    {
      question: "Can a CRM help with sales forecasting?",
      answer: [
        "Yes, advanced CRM systems provide:",
        "Real-time sales pipeline visualization",
        "Deal probability scoring",
        "Revenue forecasting based on historical data",
        "Performance tracking by team member",
        "Automated sales reports and KPI dashboards"
      ]
    },
    {
      question: "Is CRM software difficult to learn and implement?",
      answer: "Most modern CRM systems are designed for ease of use with intuitive interfaces. Implementation time varies from a few days to several weeks depending on complexity. Many providers offer onboarding assistance, training resources, and templates to accelerate adoption."
    },
    {
      question: "What's the difference between cloud-based and on-premise CRM?",
      answer: "Cloud-based CRM (SaaS) requires no hardware, offers automatic updates, and is accessible from anywhere. On-premise solutions are installed locally, offer more customization, but require IT infrastructure and maintenance. Most businesses today prefer cloud solutions for scalability and ease of use."
    },
    {
      question: "Can CRM software automate marketing campaigns?",
      answer: [
        "Yes, marketing automation features may include:",
        "Email campaign management",
        "Lead scoring and segmentation",
        "Customer journey mapping",
        "Behavior-triggered communications",
        "ROI tracking for marketing efforts",
        "Social media integration"
      ]
    },
    {
      question: "How do I choose the right CRM for my company?",
      answer: "Consider your team size, budget, required features, and scalability needs. Look for industry-specific solutions if applicable. We recommend starting with our comparison tool at Compare Bazar to evaluate options based on your specific business requirements."
    },
    {
      question: "What mobile capabilities do CRM systems offer?",
      answer: "Most modern CRMs provide full-featured mobile apps allowing access to customer data, logging interactions, updating deals, and receiving notifications while on-the-go. Some offer offline functionality that syncs when connection is restored."
    },
    {
      question: "How secure is customer data in CRM systems?",
      answer: "Reputable CRM providers implement enterprise-grade security including encryption, regular backups, role-based access controls, and compliance with standards like GDPR. Cloud-based systems often offer better security than most businesses can maintain in-house."
    }
  ];

  const contents = [
    { id: 1, title: "Introduction to CRM", slug: "intro-crm" },
    { id: 2, title: "What Is CRM Software?", slug: "what-is-crm" },
    { id: 3, title: "Benefits of Implementing a CRM", slug: "crm-benefits" },
    { id: 4, title: "Types of CRM Solutions", slug: "crm-types" },
    { id: 5, title: "Pricing Models for CRM Software", slug: "crm-pricing" },
    { id: 6, title: "Key Features to Look For", slug: "key-features" },
    { id: 7, title: "Integration Capabilities", slug: "integration" },
    { id: 8, title: "Implementation Process", slug: "implementation" },
    { id: 9, title: "Comparing Top CRM Providers", slug: "comparison" },
    { id: 10, title: "What Are Features to Look for in a CRM?", slug: "features" },
    { id: 12, title: "How Much Would CRM Software Cost?", slug: "cost" },
    { id: 13, title: "How to Choose CRM Software", slug: "Choose CRM" },
    { id: 14, title: "Methodology", slug: "methrlodgy" } 
  ];
  const articles = [
    {
      id: 1,
      title: "Cloud CRM vs On-Premise CRM Software",
      image: "/images/img1crm.jpg",
      author: "Catie",
      date: "March 15, 2023",
      excerpt:
        "Businesses today face a critical decision when choosing CRM technology. Should I invest in cloud-based CRM or stick with on-premise solutions...",
      link: "#",
    },
    {
      id: 2,
      title: "Salesforce CRM: Features, Pricing, Pros and Cons",
      image: "/images/img2crm.png",
      author: "Catie",
      date: "September 22, 2023",
      excerpt:
        "Salesforce Overview Salesforce is a leading CRM platform offering cloud-based solutions for businesses of all sizes. Their comprehensive suite includes...",
      link: "#",
    },
    {
      id: 3,
      title: "10 Essential Factors to Consider When Selecting a CRM System",
      image: "/images/img3crm.png",
      author: "Catie",
      date: "February 8, 2024",
      excerpt:
        "As a business leader, finding the right CRM software is crucial for managing customer relationships effectively. With numerous options available...",
      link: "#",
    },
  ];

  const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height =`${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    ripple.classList.add("ripple");
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };


  const additionalText = " The modern business communication landscape has evolved significantly, with VoIP (Voice over Internet Protocol) systems replacing traditional PBX setups in many organizations. Today's business phone systems offer advanced features like AI-powered voicemail transcription, intelligent call routing, CRM integration, and comprehensive analytics dashboards. These tools help businesses track performance metrics, improve customer satisfaction, and streamline their communication processes. When evaluating different providers, it's important to consider factors such as scalability, reliability, security features, and total cost of ownership. Many systems now include unified communications capabilities, bringing together voice, video, messaging, and collaboration tools in a single platform.";
 
  return (
    <>
      <Navbar />
    
      <div className="max-w-6xl mx-auto p-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">The Best CRM Software of 2025</h1>


          <p className="text-gray-800 text-base md:text-base mb-4">
          At <span className="text-orange-500 font-semibold">Compare Bazar</span>, we understand the importance of choosing the right tools for your business. That’s why we recommend the <span className="text-orange-500 font-semibold">best CRM software</span> that integrates seamlessly with modern VoIP systems. The <span className="text-orange-500 font-semibold">best CRM software</span> offers AI-driven insights, advanced automation, and real-time analytics to help you manage customer relationships more effectively. Whether you're a small business or a large enterprise, the right CRM can transform how you communicate, collaborate, and grow.
</p>



        </header>

        <section className="mb-6">
        <p className="text-gray-800 text-base md:text-base ">
            As your business grows, ensuring you have the right communication tools is critical. Startups can often get by with a basic business phone
            system that doesn't include many bells and whistles. But, as your business becomes more sophisticated, it is critical that your communication
            tools also become more advanced. Integrating the <span className="text-orange-500 font-semibold">best CRM software</span> into your workflow can significantly enhance your ability to manage customer relationships, streamline operations, and drive growth. At <span className="text-orange-500 font-semibold">Compare Bazar</span>, we help you find the perfect CRM solution that aligns with your business needs, offering features like AI-powered analytics, automation, and seamless integration with modern communication tools.
            {showMore && (
              <span className="block mt-3">
                {additionalText} Additionally, the <span className="text-orange-500 font-semibold">best CRM software</span> provides advanced capabilities such as AI-driven conversation intelligence, real-time analytics, and robust automation to optimize your business workflows. With <span className="text-orange-500 font-semibold">Compare Bazar</span>, you can easily compare the top CRM solutions, evaluate their features, and choose the one that best fits your growing business. Let us guide you to the tools that will take your communication and customer management to the next level.
              </span>
            )}
</p>
          <button
            className="mt-2 text-[#000e54] font-semibold flex items-center"
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



      {/* Big Divs for Each Section */}
      
      <div className="max-w-6xl mx-auto p-4 space-y-12">
  {/* Introduction to CRM */}
  <div id="intro-crm" className=" bg-white rounded-xl ">
    <div className=" mx-auto  ">
    <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-left">
        Introduction to CRM for B2B Marketing
</h2>
      <p className="text-gray-800 text-base mb-8 text-left ">
  Customer Relationship Management (CRM) is more than just a tool—it's a strategic approach that empowers businesses to manage interactions with leads and customers efficiently. For B2B companies like Compare Bazaar, a robust CRM system is essential for optimizing lead generation, streamlining email marketing automation, and enhancing sales pipeline management.  

  An effective CRM centralizes customer data, allowing businesses to track interactions, nurture prospects, and improve customer retention. It integrates with marketing automation tools, enabling personalized email campaigns, automated follow-ups, and insightful analytics to refine strategies.  

  Moreover, CRM solutions help sales teams prioritize high-value leads, automate repetitive tasks, and provide real-time reports for data-driven decision-making. By leveraging a powerful CRM, Compare Bazaar can maximize efficiency, increase conversions, and foster long-term customer relationships.  
</p>


     

      <h3 className="text-4xl font-semibold text-gray-900 mb-5 ">
        Why CRM is Essential for B2B Businesses?
      </h3>
      <p className="text-gray-800 text-base mb-6 ">
        B2B transactions are complex and require detailed tracking of customer interactions. CRM systems provide a centralized platform to manage every aspect of the sales process, ensuring efficiency and data-driven decision-making.
      </p>

      <ul className="text-gray-800 text-base list-disc pl-6 space-y-4 mb-8 ">
        <li><span className="font-semibold">Longer Sales Cycles:</span> B2B deals often take months to close; CRM helps monitor every touchpoint and nurture leads effectively.</li>
        <li><span className="font-semibold">Account-Based Marketing (ABM):</span> CRM enables businesses to personalize outreach for high-value clients and improve conversion rates.</li>
        <li><span className="font-semibold">Multiple Decision Makers:</span> Unlike B2C, B2B sales involve multiple stakeholders. CRM ensures seamless communication and record-keeping.</li>
        <li><span className="font-semibold">Data-Driven Lead Generation:</span> Advanced analytics in CRM helps identify and prioritize high-converting prospects.</li>
        <li><span className="font-semibold">Automation & Workflow Optimization:</span> CRM automates repetitive tasks such as follow-ups and email sequences, improving efficiency.</li>
        <li><span className="font-semibold">Customer Retention & Relationship Management:</span> A well-implemented CRM strategy helps nurture long-term client relationships, leading to repeat business.</li>
      </ul>

      <div className=" flex justify-center ">
        <img 
          src="https://www.sunzinet.com/hs-fs/hubfs/CRM-implementation%20process.png?width=1992&height=2000&name=CRM-implementation%20process.png" 
          alt="CRM Process Diagram" 
          className=" max-w-lg rounded-lg p-12" 
        />
      </div>

      <h3 className="text-4xl font-semibold text-gray-900 mb-5 ">
        Key Features of an Effective B2B CRM
      </h3>
      <p className="text-gray-800  mb-6 text-base">
        The right CRM should offer a range of features tailored to the needs of B2B businesses:
      </p>
      <ul className="text-gray-700 text-base list-disc pl-6 space-y-4">
        <li><span className="font-semibold">Lead & Contact Management:</span> Track customer interactions and maintain detailed records.</li>
        <li><span className="font-semibold">Sales Pipeline Visibility:</span> Monitor deal progress and forecast revenue.</li>
        <li><span className="font-semibold">Marketing Automation:</span> Automate email campaigns, follow-ups, and lead nurturing.</li>
        <li><span className="font-semibold">Integration with Other Tools:</span> Connect with email, calendar, and analytics platforms.</li>
        <li><span className="font-semibold">Reporting & Analytics:</span> Gain insights into sales performance and customer behavior.</li>
        <li><span className="font-semibold">Mobile Accessibility:</span> Access CRM data on the go for improved productivity.</li>
      </ul>
    </div>
  </div>

  {/* What is CRM */}
  <div id="what-is-crm" className=" rounded-xl ">
    <div className=" mx-auto ">
      <h2 className="text-4xl font-semibold text-gray-900 mb-4 text-left">What Is CRM Software?</h2>
      <p className="text-gray-800 text-base mb-4">
        CRM (Customer Relationship Management) software is a type of software businesses use to manage their sales and marketing interactions with current and potential customers. CRM stands for customer relationship management, so another way to think of CRM software is as a platform that helps companies manage their customer relationships throughout the customer lifecycle — from lead to renewal. With the help of a CRM system, you can generate leads, manage your deal pipeline, close sales, collect and store customer data, execute marketing campaigns, analyze business data and even automate workflows.
      </p>
      <p className="text-gray-800 text-base mb-8">
        Any business engaged in sales can make excellent use of a CRM. For example, a clothing store may want to use a CRM to house customer data and identify its most loyal shoppers. A timeshare company can use a CRM to assist with lead management and ensure they are engaging their ideal prospects. An enterprise that wants to better coordinate between its sales and marketing teams will find CRM software gives it the tools to do so. However, a CRM system doesn't make sense for certain types of businesses. For example, a fast-food restaurant is unlikely to use a CRM, and so is a doctor's office. However, each may use other technology, such as a POS system and medical software, that contains applicable CRM functions.
      </p>

      <h3 className="text-4xl font-semibold text-gray-900 mb-5">Key Functionalities for B2B CRM:</h3>
      <ul className="list-disc pl-6 text-gray-800 text-base mb-8 space-y-3">
        <li><span className="font-semibold"> Lead Tracking & Management:</span> Capture leads from various sources like websites, emails, and ads. CRM software helps businesses keep track of lead activities and enables smooth follow-ups, improving lead conversion rates.</li>
        <li><span className="font-semibold"> Sales Pipeline Visualization:</span> Monitor the different stages of deals and opportunities in your sales pipeline. Visualizing this helps predict revenue, allocate resources effectively, and manage team performance.</li>
        <li><span className="font-semibold"> Automated Email & Follow-ups:</span> Schedule emails and follow-ups automatically, ensuring that no lead is missed and that your outreach is timely and personalized. This reduces manual work for your team.</li>
        <li><span className="font-semibold"> Customer Data Analytics:</span> Gain deep insights into customer behavior and preferences, allowing you to tailor marketing efforts and sales strategies. This data-driven approach enables more informed decision-making.</li>
        <li><span className="font-semibold"> Integration with Marketing Tools:</span> Seamlessly sync with email marketing platforms, social media, and ads to ensure a holistic view of customer interactions. This integration empowers your marketing team to reach the right audience at the right time.</li>
      </ul>

      <h3 className="text-4xl font-semibold text-gray-900 mb-5">Benefits of CRM for Businesses:</h3>
      <ul className="list-disc pl-6 text-gray-800 text-base mb-8 space-y-3">
        <li><span className="font-semibold">Improved Customer Experience:</span> CRM software allows you to provide more personalized and responsive service, enhancing the overall customer experience and fostering loyalty.</li>
        <li><span className="font-semibold">Increased Efficiency:</span> Automation of manual tasks like data entry, follow-ups, and reporting frees up your team's time, allowing them to focus on higher-value activities.</li>
        <li><span className="font-semibold">Better Collaboration:</span> With a centralized database, all team members have access to real-time customer information, enabling seamless collaboration between sales, marketing, and customer service teams.</li>
        <li><span className="font-semibold">Stronger Customer Relationships:</span> By keeping track of customer interactions and preferences, you can tailor your communication, making customers feel valued and understood.</li>
        <li><span className="font-semibold">Increased Revenue:</span> Streamlined processes, better lead management, and improved customer insights result in higher conversion rates, sales, and customer retention.</li>
      </ul>

      <div className="my-12 bg-white  ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" className="w-full md:h-[500px]">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#4F46E5', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#7C3AED', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          
         
          <rect width="100%" height="100%" fill="white" rx="12" ry="12"/>
          
          
          <rect x="50" y="100" width="700" height="300" rx="10" ry="10" fill="white" stroke="#e5e7eb" stroke-width="2"/>
          
        
          <circle cx="150" cy="250" r="40" fill="url(#grad1)"/>
          <text x="150" y="250" font-family="Arial" font-size="16" fill="white" text-anchor="middle" dominant-baseline="middle">Leads</text>
          
          <path d="M190 250 L230 250" stroke="#4F46E5" stroke-width="3" stroke-dasharray="5,5"/>
          
          <circle cx="270" cy="250" r="40" fill="url(#grad1)"/>
          <text x="270" y="250" font-family="Arial" font-size="16" fill="white" text-anchor="middle" dominant-baseline="middle">Engage</text>
          
          <path d="M310 250 L350 250" stroke="#4F46E5" stroke-width="3" stroke-dasharray="5,5"/>
          
          <circle cx="390" cy="250" r="40" fill="url(#grad1)"/>
          <text x="390" y="250" font-family="Arial" font-size="16" fill="white" text-anchor="middle" dominant-baseline="middle">Nurture</text>
          
          <path d="M430 250 L470 250" stroke="#4F46E5" stroke-width="3" stroke-dasharray="5,5"/>
          
          <circle cx="510" cy="250" r="40" fill="url(#grad1)"/>
          <text x="510" y="250" font-family="Arial" font-size="16" fill="white" text-anchor="middle" dominant-baseline="middle">Convert</text>
          
          <path d="M550 250 L590 250" stroke="#4F46E5" stroke-width="3" stroke-dasharray="5,5"/>
          
          <circle cx="630" cy="250" r="40" fill="url(#grad1)"/>
          <text x="630" y="250" font-family="Arial" font-size="16" fill="white" text-anchor="middle" dominant-baseline="middle">Retain</text>
     
          <g transform="translate(100, 350)">
            <rect x="0" y="0" width="600" height="100" fill="white" rx="8" ry="8" stroke="#e5e7eb" stroke-width="1"/>
            
       
            <circle cx="60" cy="50" r="20" fill="#10B981"/>
            <path d="M55 60 L65 70 L80 45" fill="none" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <text x="60" y="90" font-family="Arial" font-size="12" fill="#6B7280" text-anchor="middle">Efficiency</text>
            
            
            <circle cx="180" cy="50" r="20" fill="#3B82F6"/>
            <path d="M165 50 L175 50 L175 70 L165 70" fill="none" stroke="white" stroke-width="3"/>
            <path d="M185 50 L195 50 L195 70 L185 70" fill="none" stroke="white" stroke-width="3"/>
            <text x="180" y="90" font-family="Arial" font-size="12" fill="#6B7280" text-anchor="middle">Collaboration</text>
            
            
            <circle cx="300" cy="50" r="20" fill="#F59E0B"/>
            <path d="M290 60 L300 45 L310 60" fill="none" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <text x="300" y="90" font-family="Arial" font-size="12" fill="#6B7280" text-anchor="middle">Growth</text>
            
           
            <circle cx="420" cy="50" r="20" fill="#EC4899"/>
            <path d="M410 50 L430 50" fill="none" stroke="white" stroke-width="3"/>
            <path d="M420 40 L420 60" fill="none" stroke="white" stroke-width="3"/>
            <text x="420" y="90" font-family="Arial" font-size="12" fill="#6B7280" text-anchor="middle">Insights</text>
            
            
            <circle cx="540" cy="50" r="20" fill="#8B5CF6"/>
            <path d="M530 50 L550 50" fill="none" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <path d="M540 40 L540 60" fill="none" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <text x="540" y="90" font-family="Arial" font-size="12" fill="#6B7280" text-anchor="middle">Revenue</text>
          </g>
          
          
          <text x="400" y="60" font-family="Arial" font-size="24" font-weight="bold" fill="#1F2937" text-anchor="middle ">CRM Workflow Process</text>
          <text x="400" y="90" font-family="Arial" font-size="16" fill="#6B7280" text-anchor="middle">From lead generation to customer retention</text>
        </svg>
      </div>

     
    </div>
  </div>


        {/* Types of CRM Solutions */}
        <div id="crm-types" className="">
  <h2 className="text-4xl font-semibold text-gray-900 mb-4 ">Types of CRM Solutions for B2B Businesses</h2>
  <p className="text-gray-800 text-base mb-6 text-base">
    There are several types of CRM solutions, each designed to address different business needs and challenges.
  </p>
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gary-500 text-base">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border border-gray-500">CRM Type</th>
          <th className="py-2 px-4 border border-gray-500">Features</th>
          <th className="py-2 px-4 border border-gary-500">Best For</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 border border-gary-500">Operational CRM</td>
          <td className="py-2 px-4 border border-gary-500">Lead tracking, sales automation, email workflows</td>
          <td className="py-2 px-4 border border-gary-500">Companies needing streamlined processes</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border border-gary-500">Analytical CRM</td>
          <td className="py-2 px-4 border border-gary-500">Customer behavior insights, predictive analytics</td>
          <td className="py-2 px-4 border border-gary-500">Data-driven businesses optimizing sales strategy</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border border-gary-500">Collaborative CRM</td>
          <td className="py-2 px-4 border border-gary-500">Shared databases, multi-team collaboration</td>
          <td className="py-2 px-4 border border-gary-500">Businesses needing strong internal communication</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border border-gary-500">Strategic CRM</td>
          <td className="py-2 px-4 border border-gary-500">Long-term customer engagement focus</td>
          <td className="py-2 px-4 border border-gary-500">Businesses focusing on account-based marketing</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border border-gary-500">AI-Powered CRM</td>
          <td className="py-2 px-4 border border-gary-500">Machine learning insights, automated recommendations</td>
          <td className="py-2 px-4 border border-gary-500">Businesses leveraging AI for personalization</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border border-gary-500">Social CRM</td>
          <td className="py-2 px-4 border border-gary-500">Social media integration, sentiment analysis</td>
          <td className="py-2 px-4 border border-gary-500">Companies focusing on brand engagement</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border border-gary-500">Mobile CRM</td>
          <td className="py-2 px-4 border border-gary-500">Access CRM features on mobile devices</td>
          <td className="py-2 px-4 border border-gary-500">Remote teams and field sales representatives</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="mt-6">
    <h3 className="text-xl font-semibold text-gray-900 mb-2 text-base">Example Use Cases:</h3>
    <ul className="list-disc list-inside text-gray-800 text-base">
      <li>A SaaS Company using CRM for subscription management & renewals.</li>
      <li>A B2B Service Provider automating lead nurturing and email marketing.</li>
      <li>An E-commerce business integrating AI-driven customer insights.</li>
      <li>A retail company using social CRM for brand engagement.</li>
      <li>A sales team utilizing mobile CRM for on-the-go client interactions.</li>
    </ul>
  </div>
  
</div>
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className='py-10'>
  <defs>
    <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f1f5f9" />
      <stop offset="100%" stop-color="#e2e8f0" />
    </linearGradient>
    <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.2" />
    </filter>
    <radialGradient id="center-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" stop-color="#1e40af" />
      <stop offset="100%" stop-color="#000e54" />
    </radialGradient>
  </defs>
  
 
  
  <text x="400" y="30" font-family="Arial, sans-serif" font-size="32" font-weight="bold" text-anchor="middle" fill="#000e54">7 Types of CRM Software</text>
  <line x1="275" y1="75" x2="525" y2="75" stroke="#000e54" stroke-width="3" stroke-linecap="round" />
  
  <circle cx="400" cy="300" r="85" fill="url(#center-glow)" filter="url(#drop-shadow)" />
  <text x="400" y="290" font-family="Arial, sans-serif" font-size="28" font-weight="bold" text-anchor="middle" fill="white">CRM</text>
  <text x="400" y="315" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Customer Relationship</text>
  <text x="400" y="330" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Management</text>
  
  <circle cx="200" cy="260" r="70" fill="#0284c7" filter="url(#drop-shadow)" />
  <text x="200" y="230" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="white">Operational</text>
  <text x="200" y="260" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Sales Automation</text>
  <text x="200" y="275" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Marketing</text>
  <text x="200" y="290" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Service</text>
  
 
<path d="M200,200 a12,12 0 1,0 0.1,0 M188,200 L184,200 M212,200 L216,200 M192,192 L189,189 M208,192 L211,189 M192,208 L189,211 M208,208 L211,211"
  stroke="white" stroke-width="2" fill="none" />
<circle cx="200" cy="200" r="6" fill="white" />
  
  <line x1="280" y1="210" x2="330" y2="230" stroke="#0284c7" stroke-width="3" stroke-linecap="round" />
  
  <circle cx="600" cy="250" r="70" fill="#7e22ce" filter="url(#drop-shadow)" />
  <text x="600" y="240" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="white">Analytical</text>
  <text x="600" y="260" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Data Mining</text>
  <text x="600" y="275" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Reporting</text>
  <text x="600" y="290" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Forecasting</text>
  
  <g transform="translate(600, 205) scale(0.8)">
    <rect x="-30" y="0" width="10" height="25" fill="white" />
    <rect x="-15" y="-10" width="10" height="35" fill="white" />
    <rect x="0" y="-5" width="10" height="30" fill="white" />
    <rect x="15" y="-15" width="10" height="40" fill="white" />
    
    <polyline points="-25,10 -10,-5 5,5 20,-10" 
      stroke="white" stroke-width="2.5" fill="none" />
    <circle cx="-25" cy="10" r="3" fill="white" />
    <circle cx="-10" cy="-5" r="3" fill="white" />
    <circle cx="5" cy="5" r="3" fill="white" />
    <circle cx="20" cy="-10" r="3" fill="white" />
  </g>
  
  <line x1="520" y1="220" x2="470" y2="230" stroke="#7e22ce" stroke-width="3" stroke-linecap="round" />
  
  <circle cx="600" cy="450" r="70" fill="#0891b2" filter="url(#drop-shadow)" />
  <text x="600" y="430" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="white">Collaborative</text>
  <text x="600" y="460" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Shared Data</text>
  <text x="600" y="475" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Team Access</text>
  <text x="600" y="490" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Interaction</text>
  
  <circle cx="590" cy="400" r="5" fill="white" />
  <circle cx="610" cy="400" r="5" fill="white" />
  <path d="M585,410 Q590,415 595,410 M605,410 Q610,415 615,410" stroke="white" stroke-width="1.5" fill="none" />
  <path d="M590,405 L590,412 Q600,417 610,412 L610,405" stroke="white" stroke-width="1.5" fill="none" />
  
  <line x1="520" y1="420" x2="470" y2="370" stroke="#0891b2" stroke-width="3" stroke-linecap="round" />
  
  <circle cx="200" cy="450" r="70" fill="#10b981" filter="url(#drop-shadow)" />
  <text x="200" y="430" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="white">Strategic</text>
  <text x="200" y="460" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Customer</text>
  <text x="200" y="475" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Retention</text>
  <text x="200" y="490" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Loyalty</text>
  
  <circle cx="200" cy="400" r="10" stroke="white" stroke-width="2" fill="none" />
  <circle cx="200" cy="400" r="5" stroke="white" stroke-width="2" fill="none" />
  <circle cx="200" cy="400" r="1" fill="white" />
  <line x1="185" y1="400" x2="195" y2="400" stroke="white" stroke-width="1" />
  <line x1="205" y1="400" x2="215" y2="400" stroke="white" stroke-width="1" />
  <line x1="200" y1="385" x2="200" y2="395" stroke="white" stroke-width="1" />
  <line x1="200" y1="405" x2="200" y2="415" stroke="white" stroke-width="1" />
  
  <line x1="280" y1="420" x2="330" y2="370" stroke="#10b981" stroke-width="3" stroke-linecap="round" />
  
  <circle cx="300" cy="100" r="60" fill="#3b82f6" filter="url(#drop-shadow)" />
  <text x="300" y="90" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="white">Cloud-Based</text>
  <text x="300" y="110" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">SaaS</text>
  <text x="300" y="125" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Subscription</text>
  
  <path d="M285,70 Q275,75 280,85 Q270,85 270,95 Q280,100 290,95 Q295,105 305,100 Q315,105 315,95 Q325,95 325,85 Q320,75 310,80 Q305,65 285,70" 
    stroke="white" stroke-width="1.5" fill="white" fill-opacity="0.3" />
  
  <line x1="340" y1="140" x2="380" y2="180" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" />
  
  <circle cx="500" cy="100" r="60" fill="#8b5cf6" filter="url(#drop-shadow)" />
  <text x="500" y="90" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="white">AI-Powered</text>
  <text x="500" y="110" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Automation</text>
  <text x="500" y="125" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Intelligence</text>
  
  <path d="M500,60 Q490,55 485,65 Q475,65 475,75 Q480,80 485,75 Q490,85 500,80 Q510,85 515,75 Q520,80 525,75 Q525,65 515,65 Q510,55 500,60" 
    stroke="white" stroke-width="1.5" fill="white" fill-opacity="0.3" />
  <path d="M495,70 L495,75 M500,70 L500,77 M505,70 L505,75" stroke="white" stroke-width="1" />
  
  <line x1="460" y1="140" x2="420" y2="180" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" />
  
  <circle cx="400" cy="500" r="60" fill="#f59e0b" filter="url(#drop-shadow)" />
  <text x="400" y="490" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="white">Industry</text>
  <text x="400" y="510" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Specific</text>
  <text x="400" y="525" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Specialized</text>
  
  <path d="M385,465 L385,480 L415,480 L415,465 Z" stroke="white" stroke-width="1.5" fill="white" fill-opacity="0.3" />
  <path d="M390,465 L390,455 L410,455 L410,465" stroke="white" stroke-width="1.5" fill="none" />
  <path d="M395,480 L395,470 L400,470 L400,480 M405,480 L405,470 L410,470 L410,480" stroke="white" stroke-width="1" />
  
  <line x1="400" y1="440" x2="400" y2="380" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" />
  
  <circle cx="400" cy="300" r="90" fill="none" stroke="#1e3a8a" stroke-width="2" opacity="0.5">
    <animate attributeName="r" from="85" to="95" dur="2s" repeatCount="indefinite" />
    <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
  </circle>
  
  <g stroke="#64748b" stroke-width="1" stroke-dasharray="3,3" opacity="0.3">
    <line x1="200" y1="150" x2="600" y2="150" />
    <line x1="200" y1="450" x2="600" y2="450" />
    <line x1="300" y1="100" x2="500" y2="100" />
    <line x1="200" y1="150" x2="300" y2="100" />
    <line x1="600" y1="150" x2="500" y2="100" />
    <line x1="200" y1="450" x2="400" y2="500" />
    <line x1="600" y1="450" x2="400" y2="500" />
  </g>
</svg>



        {/* Pricing Models for CRM Software */}
  <div id="crm-pricing" className="">
   
    <div className="4xl mx-auto px-4 py-12 ">
  <h2 className="text-4xl font-semibold text-center text-gray-800 mb-2">Pricing Models</h2>
  <p className="text-center text-gray-800 mb-12 max-w-2xl mx-auto text-base">Select the perfect CRM solution for your business needs</p>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Subscription-Based Card */}
    <div className=" rounded-xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-6">
        <h3 className="text-2xl font-semibold text-white text-center">Subscription-Based</h3>
        <div className="flex justify-center mt-4">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
            <span className="text-[#000e54] text-2xl font-semibold">$</span>
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="text-center mb-4">
          <span className="text-3xl font-semibold text-gray-800">$29</span>
          <span className="text-gray-800">/month</span>
        </div>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Monthly/annual fees per user</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Best for small-to-medium businesses</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Examples: HubSpot, Zoho CRM</span>
          </li>
        </ul>
        <div className="mt-8">
          <button className="w-full py-3 bg-[#000e54] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">Choose Plan</button>
        </div>
      </div>
    </div>

    {/* Feature-Based Card - Highlighted as recommended */}
    <div className="bg-white rounded-xl border border-orange-200 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative">
      <div className="absolute -top-4 inset-x-0 flex justify-center">
        <div className="bg-green-500 text-white py-1 px-4 rounded-full font-semibold shadow-md">
          
        </div>
      </div>
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 p-6 pt-8">
        <h3 className="text-2xl font-semibold text-white text-center">Feature-Based</h3>
        <div className="flex justify-center mt-4 space-x-2">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow">
            <span className="text-orange-500 text-sm font-semibold">Basic</span>
          </div>
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow">
            <span className="text-orange-500 text-sm font-semibold">Pro</span>
          </div>
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow opacity-50">
            <span className="text-orange-500 text-sm font-semibold">Ultra</span>
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="text-center mb-4">
          <span className="text-3xl font-semibold text-gray-800">$49</span>
          <span className="text-gray-500">/month</span>
        </div>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Pay for only needed features</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Ideal for startups with limited budgets</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Customizable feature packages</span>
          </li>
        </ul>
        <div className="mt-8">
          <button className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">Choose Plan</button>
        </div>
      </div>
    </div>

    {/* Enterprise Custom Card */}
    <div className="bg-white rounded-xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="bg-gradient-to-r from-indigo-700 to-indigo-500 p-6">
        <h3 className="text-2xl font-semibold text-white text-center">Enterprise Custom</h3>
        <div className="flex justify-center mt-4">
          <div className="flex space-x-1">
            <div className="w-3 h-10 bg-white rounded-md"></div>
            <div className="w-3 h-6 bg-white rounded-md"></div>
            <div className="w-3 h-8 bg-white rounded-md"></div>
            <div className="w-3 h-5 bg-white rounded-md"></div>
            <div className="w-3 h-7 bg-white rounded-md"></div>
            <div className="w-3 h-9 bg-white rounded-md"></div>
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="text-center mb-4">
          <span className="text-gray-800 font-semibold">Custom Pricing</span>
        </div>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-indigo-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Fully customized solutions</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-indigo-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Best for large organizations</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-indigo-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Advanced needs and integrations</span>
          </li>
        </ul>
        <div className="mt-8">
          <button className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">Contact Sales</button>
        </div>
      </div>
    </div>
  </div>

 
</div>
  </div>
 

  {/* Key Features to Look for in a B2B CRM */}
  
  <div id="key-features" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-semibold text-gray-900 mb-4">Essential CRM Features for Business Growth</h2>
    <p className="text-base text-gray-600 max-w-3xl mx-auto">
      Discover the must-have capabilities that transform your customer relationships and drive revenue
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Lead Management */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-2 bg-[#000e54]"></div>
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 p-3 rounded-lg mr-4">
            <svg className="w-8 h-8 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Lead Management</h3>
        </div>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-[#000e54] rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Automated lead capture from multiple sources</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-[#000e54] rounded-full"></div>
            </div>
            <p className="ml-3 text-base">AI-powered lead scoring and prioritization</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-[#000e54] rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Visual pipeline tracking and management</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-[#000e54] rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Behavior-based lead nurturing workflows</p>
          </li>
        </ul>
      </div>
    </div>

    {/* Marketing Automation */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-2 bg-purple-600"></div>
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className="bg-purple-100 p-3 rounded-lg mr-4">
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Marketing Automation</h3>
        </div>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Multi-channel campaign management</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Personalized email workflows and sequences</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Behavior-triggered communications</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">A/B testing and performance analytics</p>
          </li>
        </ul>
      </div>
    </div>

    {/* Sales Enablement */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-2 bg-green-600"></div>
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className="bg-green-100 p-3 rounded-lg mr-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Sales Enablement</h3>
        </div>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">AI-powered sales forecasting</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Deal stage tracking and probability scoring</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Document and proposal generation</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Meeting scheduling and call logging</p>
          </li>
        </ul>
      </div>
    </div>

    {/* Analytics & Reporting */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-2 bg-orange-600"></div>
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className="bg-orange-100 p-3 rounded-lg mr-4">
            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Analytics & Reporting</h3>
        </div>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Customizable dashboards and reports</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Revenue forecasting and trend analysis</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Team performance metrics</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">ROI tracking for marketing campaigns</p>
          </li>
        </ul>
      </div>
    </div>

    {/* Integrations */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-2 bg-indigo-600"></div>
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className="bg-indigo-100 p-3 rounded-lg mr-4">
            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Integrations</h3>
        </div>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Email and calendar synchronization</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Marketing automation platforms</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">ERP and accounting software</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Custom API connections</p>
          </li>
        </ul>
      </div>
    </div>

    {/* Mobile & Accessibility */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-2 bg-red-600"></div>
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className="bg-red-100 p-3 rounded-lg mr-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Mobile & Accessibility</h3>
        </div>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Native iOS and Android apps</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Offline access with sync capabilities</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Voice commands and dictation</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Accessibility compliant interfaces</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
  {/* How CRM Enhances Lead Generation & Email Marketing */}
  <div id="lead-generation" className="">
    <h2 className="text-4xl font-semibold text-gray-900 mb-4">How CRM Enhances Lead Generation & Email Marketing</h2>
    <p className="text-gray-800 text-base mb-6">
      A CRM-powered lead generation system allows businesses to attract, nurture, and convert leads effectively.
    </p>
    <div className="bg-white rounded-lg  p-6 mb-8 text-base">
      <h3 className="text-xl font-semibold mb-4 text-base">Lead Generation Process with CRM:</h3>
      <ul className="space-y-6">
        <li className="flex items-start">
          <span className="font-semibold mr-2">1.</span>
          <div>
            <p className="font-semibold text-xl">Attract Leads</p>
            <ul className="text-gray-600 ml-4 list-disc space-y-1 mt-1 text-base">
              <li>Capture contacts via landing pages, social media, and ads</li>
              <li>Track lead source attribution for marketing ROI analysis</li>
              <li>Implement website visitor tracking with company identification</li>
              <li>Create gated content with automated CRM entry</li>
              <li>Manage event registrations and webinar attendees</li>
              <li>Deploy chatbots with direct CRM integration</li>
            </ul>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold mr-2">2.</span>
          <div>
            <p className="font-semibold text-xl">Qualify Leads</p>
            <ul className="text-gray-600 ml-4 list-disc space-y-1 mt-1 text-base">
              <li>Use lead scoring to prioritize high-value prospects</li>
              <li>Implement predictive lead scoring using AI algorithms</li>
              <li>Create qualification frameworks (BANT, MEDDIC, etc.)</li>
              <li>Set up automated routing rules based on lead criteria</li>
              <li>Develop lead nurturing paths for different qualification levels</li>
              <li>Track engagement metrics to identify sales-readiness</li>
            </ul>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold mr-2">3.</span>
          <div>
            <p className="font-semibold text-base">Nurture with Email Marketing</p>
            <ul className="text-gray-600 ml-4 list-disc space-y-1 mt-1 text-base">
              <li>Automated drip campaigns for engagement</li>
              <li>Industry-specific content journeys</li>
              <li>Re-engagement sequences for dormant leads</li>
              <li>Educational sequences to address pain points</li>
              <li>Case study distribution based on industry interest</li>
              <li>Trigger-based campaigns responding to specific actions</li>
            </ul>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold mr-2">4.</span>
          <div>
            <p className="font-semibold text-base">Convert into Customers</p>
            <ul className="text-gray-600 ml-4 list-disc space-y-1 mt-1 text-base">
              <li>Move leads through the sales funnel efficiently</li>
              <li>Automated meeting scheduling with sales representatives</li>
              <li>Proposal and quote generation with tracking capabilities</li>
              <li>Follow-up sequences after sales meetings</li>
              <li>Contract management and electronic signature integration</li>
              <li>Onboarding sequence activation upon conversion</li>
            </ul>
          </div>
        </li>
      </ul>
      
    </div>
    <div className="w-full max-w-4xl overflow-hidden rounded-lg ">
    <img
      src="https://blog.clickpointsoftware.com/hs-fs/hubfs/lead%20management.jpg?width=1200&height=750&name=lead%20management.jpg"
      alt="CRM Process Diagram"
      className="w-full h-auto object-cover"
      loading="lazy"
    />
  </div>
  </div>
  
  {/* How CRM Supports Email Marketing & Automation */}
  <div id="email-marketing" className="py-2">
    <h2 className="text-4xl font-semibold text-gray-900 mb-4">How CRM Supports Email Marketing & Automation</h2>
    <p className="text-gray-800 text-base mb-6">
      CRM-driven email marketing ensures timely and relevant communication with leads.
    </p>
    <div className="bg-white rounded-lg p-6 mb-8">
      <ul className="space-y-6">
        <li className="flex items-start">
          <span className="font-semibold mr-2">1.</span>
          <div>
            <p className="font-semibold text-base">Automated Drip Campaigns</p>
            <ul className="text-gray-800 ml-4 list-disc space-y-1 mt-1 text-base">
              <li>Send a sequence of emails based on user actions</li>
              <li>Timing optimization: Determine ideal intervals between emails</li>
              <li>Content progression: Start educational, gradually introduce sales elements</li>
              <li>Multi-channel integration: Coordinate email with social and ad retargeting</li>
              <li>Campaign performance metrics: Track completion and conversion rates</li>
              <li>Example sequence: Welcome email → Educational content → Industry-specific case study → Solution comparison → Sales pitch → Follow-up → Final offer</li>
            </ul>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold mr-2">2.</span>
          <div>
            <p className="font-semibold text-base">Email Personalization & Segmentation</p>
            <ul className="text-gray-800 ml-4 list-disc space-y-1 mt-1 text-base">
              <li>Group leads based on industry, interests, and behavior</li>
              <li>Dynamic content blocks that change based on recipient attributes</li>
              <li>Personalization tokens for company name, contact name, industry references</li>
              <li>Behavioral segmentation based on content engagement patterns</li>
              <li>Interest-based segmentation from website tracking data</li>
              <li>Integration with firmographic data for company-specific messaging</li>
              <li>Recommendation engines suggesting relevant content and solutions</li>
            </ul>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold mr-2 text-base">3.</span>
          <div>
            <p className="font-semibold text-base">A/B Testing & Analytics</p>
            <ul className="text-gray-800 ml-4 list-disc space-y-1 mt-1 text-base">
              <li>Test subject lines, CTA buttons, and content to optimize email performance</li>
              <li>Split testing of send times for optimal open rates</li>
              <li>Content format testing (text vs. HTML, long vs. short form)</li>
              <li>CTA placement and style testing for click-through optimization</li>
              <li>From-name testing (personal vs. company branding)</li>
              <li>Comprehensive performance dashboards showing key metrics</li>
              <li>Attribution modeling to connect email engagement to revenue</li>
            </ul>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold mr-2">4.</span>
          <div>
            <p className="font-semibold text-base">Engagement Monitoring & Scoring</p>
            <ul className="text-gray-600 ml-4 list-disc space-y-1 mt-1 text-base">
              <li>Track open rates, click-through rates, and content interactions</li>
              <li>Score engagement to identify high-potential prospects</li>
              <li>Set up alerts for sales when engagement thresholds are reached</li>
              <li>Monitor unsubscribe and complaint rates for list health</li>
              <li>Implement re-engagement campaigns for inactive subscribers</li>
              <li>Analyze forwarding and sharing patterns to identify champions</li>
              <li>Connect email metrics to overall lead scoring models</li>
            </ul>
          </div>
        </li>
      </ul>
      <div className="my-6 md:my-12 px-4 flex justify-center">
  <div className="w-full max-w-4xl overflow-hidden rounded-lg ">
    <img
      src="https://www.deskera.com/blog/content/images/2021/05/automation.jpg"
      alt="CRM Process Diagram"
      className="w-full h-auto object-cover"
      loading="lazy"
    />
  </div>
</div>
    </div>
    
  </div>

  {/* Integration Capabilities: CRM in a B2B Tech Stack */}
  <div id="integration" className="py-2">
  <h2 className="text-4xl font-semibold text-gray-900 mb-4">Integration Platform: Connecting Your B2B Tech Stack</h2>
  <p className="text-gray-800 text-base mb-6">
    Modern integration platforms serve as the central hub connecting various business systems.
  </p>
  
  {/* Card Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    {/* Cloud Services Card */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-[#000e54] px-4 py-3">
        <h3 className="text-xl font-semibold text-white">1. Cloud Services</h3>
      </div>
      <div className="p-5">
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Web Services</p>
          <p className="text-gray-600">RESTful APIs and web-based integrations</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">SaaS Applications</p>
          <p className="text-gray-600">Connect with subscription-based software platforms</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Mobile Apps</p>
          <p className="text-gray-600">Synchronize data with field-based applications</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Public Cloud</p>
          <p className="text-gray-600">Leverage AWS, Azure, or Google Cloud resources</p>
        </div>
        <div className="mb-3">
          <p className="font-semibold text-gray-800">Private Cloud</p>
          <p className="text-gray-600">Connect with secure dedicated environments</p>
        </div>
      </div>
    </div>

    {/* On-Premises Systems Card */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-green-600 px-4 py-3">
        <h3 className="text-xl font-semibold text-white">2. On-Premises Systems</h3>
      </div>
      <div className="p-5">
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">EDI Systems</p>
          <p className="text-gray-600">Electronic data interchange with customers and suppliers</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">B2B Databases</p>
          <p className="text-gray-600">Manage partner and customer relationship data</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Internal Databases</p>
          <p className="text-gray-600">Connect with core operational systems</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Enterprise Applications</p>
          <p className="text-gray-600">Integrate with ERP and other critical systems</p>
        </div>
        <div className="mb-3">
          <p className="font-semibold text-gray-800">Legacy Systems</p>
          <p className="text-gray-600">Bridge connections with established technologies</p>
        </div>
      </div>
    </div>

    {/* Custom Development Card */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-purple-600 px-4 py-3">
        <h3 className="text-xl font-semibold text-white">3. Custom Development</h3>
      </div>
      <div className="p-5">
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Custom Applications</p>
          <p className="text-gray-600">Integrate with proprietary business solutions</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Microservices</p>
          <p className="text-gray-600">Connect with modular application components</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">API Gateways</p>
          <p className="text-gray-600">Manage authentication and traffic across systems</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Webhook Handlers</p>
          <p className="text-gray-600">Process real-time event notifications</p>
        </div>
        <div className="mb-3">
          <p className="font-semibold text-gray-800">Data Transformation</p>
          <p className="text-gray-600">Convert between different formats</p>
        </div>
      </div>
    </div>

    {/* Security Infrastructure Card */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-red-600 px-4 py-3">
        <h3 className="text-xl font-semibold text-white">4. Security Infrastructure</h3>
      </div>
      <div className="p-5">
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Firewalls</p>
          <p className="text-gray-600">Secure traffic between cloud and on-premises systems</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Identity Management</p>
          <p className="text-gray-600">Control access across integrated platforms</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Data Encryption</p>
          <p className="text-gray-600">Protect sensitive information during transfers</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Compliance Monitoring</p>
          <p className="text-gray-600">Ensure regulatory requirements are met</p>
        </div>
        <div className="mb-3">
          <p className="font-semibold text-gray-800">Audit Logging</p>
          <p className="text-gray-600">Track system interactions for security purposes</p>
        </div>
      </div>
    </div>

    {/* Integration Capabilities Card - Full Width */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden md:col-span-2">
      <div className="bg-yellow-600 px-4 py-3">
        <h3 className="text-xl font-semibold text-white">5. Integration Capabilities</h3>
      </div>
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-3 pb-3 border-b border-gray-200 md:border-r md:pr-4">
          <p className="font-semibold text-gray-800">Centralized Management</p>
          <p className="text-gray-600">Control all connections from one platform</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Real-time Data Synchronization</p>
          <p className="text-gray-600">Keep systems updated automatically</p>
        </div>
        <div className="mb-3 md:border-r md:pr-4">
          <p className="font-semibold text-gray-800">Workflow Automation</p>
          <p className="text-gray-600">Trigger actions across multiple systems</p>
        </div>
        <div className="mb-3">
          <p className="font-semibold text-gray-800">Error Handling & Scalability</p>
          <p className="text-gray-600">Manage failures and support growing requirements</p>
        </div>
      </div>
    </div>
  </div>
  
 

    <div className="my-12 flex justify-center">
        <img 
          src="https://www.codelessplatforms.com/wp-content/uploads/2022/11/What-is-system-integration.png" 
          alt="CRM Process Diagram" 
          className="w-full max-w-4xl rounded-lg " 
        />
      </div>
  </div>



  {/* How Compare Bazaar Can Use CRM for Growth */}
  <div id="case-studies" className="py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-center">How Compare Bazaar Can Use CRM for Growth</h2>
    <p className="text-gray-800 text-base mb-10 text-center max-w-3xl mx-auto">
      By leveraging a powerful CRM system, Compare Bazaar can streamline operations, enhance customer engagement, and drive sustainable growth across all comparison categories.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-3 rounded-lg mr-4">
            <svg className="w-6 h-6 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 text-base">Customer Insights & Personalization</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800 text-base">Create detailed customer profiles with preference and comparison history</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800 text-base">Develop targeted content recommendations based on previous comparisons</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800 text-base">Generate detailed reports on comparison trends and customer preferences</p>
          </li>
        </ul>
      </div>


      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="bg-purple-100 p-3 rounded-lg mr-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 text-base">Marketing Optimization</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800 text-base">Improve conversion rates with personalized email campaigns targeted by industry</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800 text-base">Optimize marketing ROI with data-driven strategies and attribution modeling</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="tex-gray-800 text-base">Build segmented nurturing campaigns for different comparison verticals</p>
          </li>
        </ul>
      </div>

  
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="bg-green-100 p-3 rounded-lg mr-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Sales Automation</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800  text-base">Automate lead generation and follow-ups across comparison categories</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800  text-base">Develop automated cross-selling between complementary service categories</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800  text-base">Implement referral programs with tracking and reward automation</p>
          </li>
        </ul>
      </div>

    
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="bg-red-100 p-3 rounded-lg mr-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Relationship Management</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800  text-base">Strengthen customer relationships for long-term success and repeat business</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800  text-base">Track provider relationships and performance metrics in a centralized system</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800  text-base">Streamline provider onboarding and relationship management</p>
          </li>
        </ul>
      </div>

     
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="bg-yellow-100 p-3 rounded-lg mr-4">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Data Analytics & Reporting</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800  text-base">Track user behavior across comparison journeys for insights</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800  text-base">Generate real-time performance dashboards for all categories</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800  text-base">Identify most profitable comparison verticals and customer segments</p>
          </li>
        </ul>
      </div>

     
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="bg-indigo-100 p-3 rounded-lg mr-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Operational Efficiency</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800  text-base">Automate routine customer service inquiries with CRM-powered chatbots</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800  text-base">Centralize all customer interactions across channels in one platform</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800  text-base">Reduce manual data entry with automated data capture from comparison activities</p>
          </li>
        </ul>
      </div>
    </div>


    <div className="mt-14 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 max-w-6xl mx-auto border border-gray-200  text-base">
      <h3 className="text-2xl font-semibold text-gray-800 mb-5 text-center  text-base">Strategic CRM Implementation Benefits</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-base font-semibold text-gray-800 mb-3  text-base">Customer-Centric Advantages</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            <li>360° customer view across all comparison activities</li>
            <li>Personalized recommendations increasing engagement by 40-60%</li>
            <li>Faster response times to customer inquiries</li>
            <li>Consistent experience across web and mobile platforms</li>
          </ul>
        </div>
        <div>
          <h4 className="text-base font-semibold text-gray-700 mb-3">Business Growth Impact</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>30-50% improvement in lead conversion rates</li>
            <li>20-35% reduction in customer acquisition costs</li>
            <li>15-25% increase in customer lifetime value</li>
            <li>Data-driven decision making for category expansion</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 bg-white p-5 rounded-lg shadow-inner border border-gray-200">
        <p className="text-gray-700 text-center italic">
          "A well-implemented CRM system can become Compare Bazaar's competitive advantage, transforming how customers discover and compare services while delivering measurable business growth across all verticals."
        </p>
      </div>
    </div>
  </div>
</div>

  {/* Conclusion: Why B2B Companies Need CRM */}
  <div id="conclusion" className="">
    <h2 className="text-3xl font-semibold text-gray-900 mb-4">Conclusion: Why B2B Companies Need CRM</h2>
    <p className="text-gray-700 text-base mb-6 text-base">
      A well-implemented CRM is the backbone of B2B marketing success.
    </p>
    <div className=" rounded-lg  p-6 mb-8">
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p className="text-gray-800 text-base">Capture and nurture leads effectively with automated yet personalized outreach</p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p className="text-gray-800 text-base">Streamline sales processes and increase conversions through optimized workflows</p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p className="text-gray-800 text-base">Enhance customer relationships and improve retention with consistent communication</p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p className="text-gray-800 text-base">Automate email marketing and lead nurturing based on behavioral triggers</p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p className="text-gray-800 text-base">Reduce administrative work by 23% through process automation</p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p className="text-gray-800 text-base">Increase team productivity by 34% with centralized information access</p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p className="text-gray-800 text-base">Improve data accuracy by eliminating siloed information systems</p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p className="text-gray-800 text-base">Drive 29% higher sales with improved lead qualification and prioritization</p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p className="text-gray-800 text-base">Boost customer satisfaction by 35% through more responsive service</p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p className="text-gray-800 text-base">Enable data-driven decision making with comprehensive analytics</p>
        </li>
      </ul>
      <p className="mt-6 text-gray-800 text-base">
        With the right CRM, Compare Bazaar can scale operations, improve efficiency, and drive sustainable growth in the B2B marketplace. The investment in CRM technology typically delivers ROI within 13 months, with leading organizations seeing returns as quickly as 5-8 months after implementation.
      </p>
    </div>
  </div>

  {/* Implementation Process */}
  <div id="implementation" className="">
    <h2 className="text-4xl font-semibold text-gray-900 mb-4">Implementation Process</h2>
    <p className="text-gray-800 text-base mb-6 text-base">
      Implementing a CRM system involves planning, customization, data migration, and training. A well-executed implementation ensures that the CRM system meets your business needs and delivers the expected ROI.
    </p>
    <div className="bg-white rounded-lg  p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4 text-base">CRM Implementation Steps</h3>
      <ol className="space-y-4">
        <li className="flex items-start">
          <span className="font-semibold mr-2">1.</span>
          <div>
            <p className="font-semibold text-base">Define Objectives & Requirements</p>
            <p className="text-gray-800 text-base">Clearly identify what you want to achieve with your CRM system.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold mr-2">2.</span>
          <div>
            <p className="font-semibold text-base">Select the Right CRM Solution</p>
            <p className="text-gray-800 text-base">Based on your requirements, choose a CRM that fits your business needs.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold mr-2">3.</span>
          <div>
            <p className="font-semibold text-base">Plan Data Migration</p>
            <p className="text-gray-800 text-base">Prepare your existing data for migration to the new system.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold mr-2">4.</span>
          <div>
            <p className="font-semibold text-base">Customize & Configure</p>
            <p className="text-gray-800 text-base">Tailor the CRM to match your business processes and workflows.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold mr-2">5.</span>
          <div>
            <p className="font-semibold text-base">Test the System</p>
            <p className="text-gray-800 text-base">Thoroughly test all features and functionalities before full deployment.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold mr-2">6.</span>
          <div>
            <p className="font-semibold text-base">Train Users</p>
            <p className="text-gray-800 text-base">Provide comprehensive training to ensure effective adoption.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold mr-2">7.</span>
          <div>
            <p className="font-semibold text-base">Go Live & Monitor</p>
            <p className="text-gray-800 text-base">Launch the system and continuously monitor its performance.</p>
          </div>
        </li>
      </ol>
    </div>
  </div>
{/* Implementation Process - Horizontal Visual */}
<div id="implementation-visual" className="py-2 ">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-base">
    <h3 className="text-2xl font-semibold text-center text-gray-900 mb-10 text-base">CRM Implementation Journey</h3>
    
    <div className="relative">
      {/* Progress line */}
      <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 transform -translate-y-1/2"></div>
      
      {/* Parent container with responsive flex wrap */}
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 sm:gap-4 md:gap-1 lg:gap-2">
  {/* Step 1 - Define Objectives */}
  <div className="flex flex-col items-center w-[45%] sm:w-[30%] md:w-full z-10 mb-4 md:mb-0">
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#000e54] flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
      </svg>
    </div>
    <p className="text-center font-semibold text-gray-900 text-sm sm:text-base">Define Objectives</p>
  </div>

  {/* Step 2 - Select CRM */}
  <div className="flex flex-col items-center w-[45%] sm:w-[30%] md:w-full z-10 mb-4 md:mb-0">
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#000e54] flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    </div>
    <p className="text-center font-semibold text-gray-900 text-sm sm:text-base">Select CRM</p>
  </div>

  {/* Step 3 - Data Migration */}
  <div className="flex flex-col items-center w-[45%] sm:w-[30%] md:w-full z-10 mb-4 md:mb-0">
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#000e54] flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
      </svg>
    </div>
    <p className="text-center font-semibold text-gray-900 text-sm sm:text-base">Data Migration</p>
  </div>

  {/* Step 4 - Customize */}
  <div className="flex flex-col items-center w-[45%] sm:w-[30%] md:w-full z-10 mb-4 md:mb-0">
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#000e54] flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
    </div>
    <p className="text-center font-semibold text-gray-900 text-sm sm:text-base">Customize</p>
  </div>

  {/* Step 5 - Test System */}
  <div className="flex flex-col items-center w-[45%] sm:w-[30%] md:w-full z-10 mb-4 md:mb-0">
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#000e54] flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
      </svg>
    </div>
    <p className="text-center font-semibold text-gray-900 text-sm sm:text-base">Test System</p>
  </div>

  {/* Step 6 - Train Users */}
  <div className="flex flex-col items-center w-[45%] sm:w-[30%] md:w-full z-10 mb-4 md:mb-0">
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#000e54] flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
      </svg>
    </div>
    <p className="text-center font-semibold text-gray-900 text-sm sm:text-base">Train Users</p>
  </div>

  {/* Step 7 - Go Live */}
  <div className="flex flex-col items-center w-[45%] sm:w-[30%] md:w-full z-10 mb-4 md:mb-0">
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#000e54] flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
      </svg>
    </div>
    <p className="text-center font-semibold text-gray-900 text-sm sm:text-base">Go Live</p>
  </div>
</div>
    </div>

    {/* Detailed Steps Below */}
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h4 className="font-semibold text-base text-[#000e54] mb-3">Planning Phase</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Stakeholder interviews</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Requirement documentation</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Success metrics definition</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h4 className="font-semibold text-base text-[#000e54] mb-3">Setup Phase</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>System configuration</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Data cleaning & migration</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Custom field creation</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h4 className="font-semibold text-base text-[#000e54] mb-3">Testing Phase</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>User acceptance testing</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Workflow validation</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Performance testing</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h4 className="font-semibold text-base text-[#000e54] mb-3">Deployment</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Phased rollout strategy</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Ongoing support plan</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Continuous improvement</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
 
  <CRMComparison/>
   {/* What Are Features to Look for in a CRM? */}
   <div id="features" className="bg-white rounded-lg  p-6 mb-8 text-base">
  <h3 className="text-xl font-semibold mb-4 text-base">What Are Features to Look for in a CRM?</h3>
  <p className="text-gray-800 mb-6 text-base">
    CRM features run the gamut, with lightweight services intended for quick and easy lead and customer relationship management to powerhouse functions that enable e-commerce and advanced analytics. Below are some of the most important features to look for.
  </p>
  
  <div className="mb-6">
    <div className="flex items-center mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#000e54] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
      <h4 className="text-base font-semibold text-gray-900">Sales Tools</h4>
    </div>
    <p className="text-gray-800">
      Your CRM should be capable of lead management and deal management, allowing you to monitor your pipeline and move prospects through the sales funnel. You should be able to score and qualify leads, contact prospects via phone and email, and close deals with the assistance of your CRM software. Additionally, there should be features that allow you to execute, monitor and evaluate sales campaigns. These tools are vital for optimizing the sales process.
    </p>
  </div>
  
  <div className="mb-6">
    <div className="flex items-center mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#000e54] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
      <h4 className="text-base font-semibold text-gray-900">Marketing Tools</h4>
    </div>
    <p className="text-gray-600">
      Modern CRMs are equipped with tools to create, execute and track marketing campaigns. They may natively allow email messaging and other communication methods, or let you integrate the system with a third-party service. It's common today for CRM software to have social media functions, such as the ability to set up social listening to monitor mentions of your brand on Instagram. Built-in marketing tools are important for aligning marketing efforts with sales objectives.
    </p>
  </div>
  
  <div className="mb-6">
    <div className="flex items-center mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#000e54] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
      <h4 className="text-base font-semibold text-gray-900">Customer Service Tools</h4>
    </div>
    <p className="text-gray-600">
      Since one of the core objectives of CRM software is customer relationship management, your CRM should allow you to communicate with clients and address any support inquiries. Your customer service team can use the CRM to respond to tickets, monitor open cases, track customer satisfaction and coordinate with other departments as issues arise. To help nurture your client relationships, you could even set up your CRM to remind you of a customer's anniversary with your business and automatically send an email thanking them for their continued partnership.
    </p>
  </div>
  
  <div className="mb-6">
    <div className="flex items-center mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#000e54] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
      <h4 className="text-base font-semibold text-gray-900">Reporting Tools</h4>
    </div>
    <p className="text-gray-600">
      CRM reports can indicate how well your sales and marketing campaigns are performing, how many prospects or sales you get within a certain time frame, the point at which leads drop off, how many outbound calls each sales representative has made in a given period, etc. These reports help you make informed decisions about your business, which is why robust analytics is a critical CRM feature to look for.
    </p>
  </div>
  
  <div>
    <div className="flex items-center mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#000e54] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
      <h4 className="text-base font-semibold text-gray-900">Workflow Automation</h4>
    </div>
    <p className="text-gray-600">
      The best CRM programs automatically execute actions based on workflows you establish. For example, when a customer fills out a form, you can set up your CRM to automatically send a notification to the appropriate sales representative. Workflow automation minimizes or eliminates much of the time-consuming, nonproductive work involved in data entry and sharing. It gives your staff more time to make sales and reduces the chance a lead or customer complaint may be overlooked or lost in the system.
    </p>
  </div>
</div>
{/* cost */}
<div id="cost" className="p-6 mb-8">
  {/* New Cost Section */}
  <div className="p-6">
    <div className="flex items-start mb-4">
      <div className="mr-4 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gary-900 mb-2">How Much Would CRM Software Cost?</h3>
        <div className="flex justify-end mb-2">
          <span className="text-sm text-[#ff8633] font-semibold text-2xl font-semibold ">Powered by Compare Bazar</span>
        </div>
      </div>
    </div>
    
    <p className="text-gray-800 mb-4 text-base">
      How much CRM software would cost your business depends on a variety of factors, from the number of users to the specific feature set. There are free and inexpensive CRMs, which are best for small teams and microbusinesses. These platforms come with integration options if extra functionality is needed. There are also heavy-duty CRM platforms that cost a substantial amount and have a much greater number of features (both native and plug-in). These CRMs offer better flexibility and scalability.
    </p>
    
    <h4 className="text-base font-semobold text-gray-800 mb-2">Here's the general price range of CRM software:</h4>
    
    <ul className="space-y-3 mb-4">
      <li className="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#000e54] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <div>
          <span className="font-semibold text-gray-800 text-base">Inexpensive cloud-based CRM systems</span> often have a free version for up to 10 or so team members. Usually, entry-level paid subscriptions begin at around $15 per user per month.
        </div>
      </li>
      <li className="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#000e54] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <div>
          <span className="font-semibold text-gray-800 text-base ">Midrange cloud CRM subscriptions</span> tend to run from $20 to $40 per user per month. These systems generally meet most small business needs. If the inexpensive but ultralight solutions aren't working for you, you'll likely find a better solution at this price level.
        </div>
      </li>
      <li className="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#000e54] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <div>
          <span className="font-semibold text-gray-800 text-base">Enterprise-level cloud CRMs</span> are available for about $50 to $150 per user per month. These systems often offer higher levels of customization, more features and personalized customer support or training services.
        </div>
      </li>
      <li className="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#000e54] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <div>
          <span className="font-semibold text-gray-800 text-base">High-end cloud CRM subscriptions</span> can cost upward of $250 per user per month, but most small and midsize businesses will not need the wide range of features they offer.
        </div>
      </li>
      <li className="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#000e54] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <div>
          <span className="font-semibold text-gray-800  text-base">On-premises CRM software</span> can cost well over $900 per user per month. In contrast to a cloud-based solution, these client-hosted systems offer a business more control but also require a significant upfront investment, as well as extensive technical knowledge and skill to maintain them.
        </div>
      </li>
    </ul>
    
    <p className="text-gray-800 mb-4 text-base">
      Most cloud-based CRM providers offer the option of monthly or annual billing, with the possibility of up to a 20 percent discount for paying for the year upfront. Vendors selling on-premises CRMs, where the system is hosted on your computer network, typically charge a flat, one-time, per-user fee.
    </p>
    
    <p className="text-gray-800 mb-4 text-base">
      Complicating matters further are add-on products and services, storage upgrades, implementation fees and automatic upgrades. One CRM software's per-user price might be cheaper at first glance, but when you calculate the add-ons you need to achieve the functionality you want, it may end up costing you more.
    </p>
    
    <p className="text-gray-800 mb-4 text-base">
      When deciding how much you're going to spend on CRM software, try to strike the right balance between understanding your current business needs, anticipating future needs and what your business can afford. Ensure you fully understand the pricing structure of any CRM product before you decide on a platform. Specifically ask about automatic upgrades, storage caps and user limits before signing a service agreement.
    </p>
    
    <h4 className="text-base font-semibold text-gray-800 mb-2">Key CRM Data Points to Track:</h4>
    
    <div className="p-4 mb-4">
      <ul className="space-y-3">
        <li className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#000e54] mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <div>
            <span className="font-semibold text-gray-800 text-base">Cost per lead / customer acquisition cost:</span> This dollar figure tells you how much your business is spending in its marketing efforts to acquire each new lead.
          </div>
        </li>
        <li className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#000e54] mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <div>
            <span className="font-semibold text-blue-gray text-base">Sales conversion rate / close rate:</span> This percentage indicates how many of your leads and prospects become customers.
          </div>
        </li>
        <li className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#000e54] mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <div>
            <span className="font-semibold text-gray-800 text-gray">Renewal rate:</span> This number shows the percentage of your existing customers who renew their purchases or buy from you again.
          </div>
        </li>
        <li className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#000e54] mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <div>
            <span className="font-semibold text-gray-800 text-gray">Customer lifetime value:</span> This figure estimates the revenue you can expect to generate from a customer over the length of your relationship.
          </div>
        </li>
      </ul>
    </div>
    
    <div className="flex justify-center mt-6">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#000e54]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
        <path d="M6 8h.01M6 12h.01"></path>
        <circle cx="14" cy="10" r="4"></circle>
        <path d="M14 6v8"></path>
        <path d="M10 10h8"></path>
      </svg>
    </div>
    
    <div className="text-center mt-2 text-[#000e54] font-semibold">
      Compare CRM options at Compare Bazar
    </div>

    {/* Workflow Automation SVG */}
    <div className="flex justify-center mt-8">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    </div>
    <div className="text-center mt-2 text-[#000e54] font-semibold">
      Workflow Automation
    </div>
  </div>
</div>
{/* choose crm */}
<div id="Choose CRM" class="rounded-lg p-6 mb-8">
  <div class="p-6 rounded-lg ">
    <div class="flex items-start mb-4">
      <div class="mr-4 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <h3 class="text-xl font-semibold text-[#000e54] mb-2">How to Choose CRM Software</h3>
        <div class="flex justify-end mb-2">
          <span class="text-sm text-[#000e54] font-semibold">Powered by Compare Bazar</span>
        </div>
      </div>
    </div>
    
    <p class="text-gray-800 mb-4 text-base">
      To choose CRM software, you should start by identifying your company's needs. What do you want to accomplish via your CRM and, therefore, what features do you need it to contain? Next, you should determine your budget. How much can you afford to spend on a recurring monthly subscription for cloud-based software or upfront for an on-premises solution? After nailing down your desired features and budget, you should conduct research via buying guides like this one to identify which CRM systems offer the functionality you want at a price you can afford.
    </p>
    
    <p class="text-gray-800 mb-4 text-base">
      There are, however, some other factors to keep in mind. Business.com spoke to dozens of business owners and leaders about the criteria they prioritized when deciding which CRM to purchase for the first time or when switching CRMs.
    </p>
    
    <div class="grid md:grid-cols-2 gap-6 mt-6">
      <div class="p-4 rounded-lg">
        <h4 class="text-base font-semibold text-[#000e54] mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Usability
        </h4>
        <p class="text-gray-700">
          Robert Resz, owner of Rad Bronco Parts, told us "ease of use" was one of his top priorities when looking for a CRM that would "streamline our sales processes without disrupting daily operations." He ultimately found a system that enabled his "small team to work smarter, not harder."
        </p>
        <p class="text-gray-700 mt-2">
          Tumble co-founder Zach Dannett confessed that he and his team "rushed into picking a CRM without fully understanding our needs" and "ended up with a system that was too complex for our small team." He advised choosing a system that your team will actually enjoy using.
        </p>
      </div>
      
      <div class="p-4 rounded-lg">
        <h4 class="text-base font-semibold text-[#000e54] mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Integrations
        </h4>
        <p class="text-gray-700">
          Cyber Command CEO Reade Taylor emphasized the importance of integrations with tools like ConnectWise Manage and Office 365. He urged businesses to "look for a CRM that integrates with tools you already rely on. The more connected your tech stack, the better the experience you can provide customers."
        </p>
        <p class="text-gray-700 mt-2">
          Brad Smith, owner of Omni Home Ideas, also prioritized "integration capabilities" to ensure seamless compatibility with project management and accounting tools.
        </p>
      </div>
      
      <div class="p-4 rounded-lg">
        <h4 class="text-base font-semibold text-[#000e54] mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Scalability
        </h4>
        <p class="text-gray-700">
          Brad Smith recommended choosing a CRM that can grow with your business. "Don't just think about what your business needs now. Consider where you want to be in five years and choose a CRM that is capable of scaling and evolving as your business grows."
        </p>
        <p class="text-gray-700 mt-2">
          Angela Green Urbaczewski, owner of RevOppAI, echoed this sentiment, noting that "free options can be a good starting point, but will the paid system best meet future needs?"
        </p>
      </div>
      
      <div class="p-4 rounded-lg">
        <h4 class="text-base font-semibold text-[#000e54] mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Customer Support & Training
        </h4>
        <p class="text-gray-800 text-base">
          Angela Green Urbaczewski advised considering implementation assistance and customer support. "If it's your first CRM setup, investing in solid setup support can accelerate your business growth much faster than unfocused paid ads or marketing."
        </p>
        <p class="text-gray-800 mt-2 text-base">
          Robert Resz emphasized the importance of training: "Take advantage of implementation resources and free training to get the most from your investment. A CRM is only as good as how well you can use it."
        </p>
      </div>
    </div>
  </div>
</div>

 
  {/* methrlodgy */}
  <div id="methrlodgy" class="bg-white   p-6 mb-8">
  <div class=" p-6 ">
    <div class="flex items-start mb-4">
      <div class="mr-4 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <h3 class="text-4xl font-semibold text-[#000e54] mb-2">Methodology</h3>
        <div class="flex justify-end mb-2">
          <span class="text-base text-[#000e54] font-xl">Powered by Compare Bazar</span>
        </div>
      </div>
    </div>
    
    <p class="text-gray-800 mb-4 text-base">
      To determine the best CRM software on the market, our team of sales experts and software analysts evaluated an initial list of 65 platforms. We then whittled our selections to 13 systems to investigate further before choosing 10 CRM programs as our top recommendations.
    </p>
    
    <p class="text-gray-800 mb-4 text-base">
      To help us narrow down the options at each phase and identify our eventual top picks, we interviewed vendors and participated in product demos, in addition to testing the software ourselves. We examined plan options and feature sets while also considering customization options and add-on services, such as whether email marketing tools were included in the core system or only available as an extra. We also took the time to research independent user reviews, looking for real-life testimonials to weigh against our own experience using each CRM.
    </p>
    
    <p class="text-gray-800 mb-4 text-base">
      Ultimately, our experts and analysts studied each solution’s functionality and judged the products on more than 30 factors. These factors were weighted differently in our overall conclusion. The weights were determined based on how much business owners prioritize these criteria when shopping for business software and services and making purchasing decisions.
    </p>
    
    <h4 class="text-base font-semibold text-[#000e54] mb-2">Key Evaluation Criteria:</h4>
    
    <div class="grid md:grid-cols-2 gap-6 mt-6">
      <div class=" p-4 rounded-lg">
        <h4 class="text-base font-semibold text-[#000e54] mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Pricing (30%)
        </h4>
        <p class="text-gray-800 text-base">
          Our experts and analysts compared and contrasted each vendor’s plans, judging which packages offered the best bang for your buck. We took into account monthly subscription rates, per-user fees, costs for cloud-based versus on-premises systems, implementation fees, and add-on expenses.
        </p>
      </div>
      
      <div class="text-base p-4 rounded-lg">
        <h4 class="text-base font-semibold text-[#000e54] mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Features (25%)
        </h4>
        <p class="text-gray-700 text-base">
          We looked for standard CRM system functions like lead, contact, and campaign management, automated workflows, revenue tracking and forecasting tools, and reports. We also assessed the available integrations and awarded extra points for advanced services, like omnichannel communications, no-code customization, AI-powered features, and customer self-service abilities.
        </p>
      </div>
      
      <div class=" p-4 rounded-lg">
        <h4 class="text-base font-semibold text-[#000e54] mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Ease of Use (25%)
        </h4>
        <p class="text-gray-700 text-base">
          We tested the software ourselves, gauging each solution’s learning curve, user-friendliness, and customization options. We also considered whether the program had easy-to-use marketing capabilities and if the vendor offered a fully featured mobile app for managing customer relationship and sales-related tasks on the go.
        </p>
      </div>
      
      <div class=" p-4 rounded-lg">
        <h4 class="text-base font-semibold text-[#000e54] mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Customer Service (15%)
        </h4>
        <p class="text-gray-700 text-base ">
          We evaluated the range of each provider’s customer service options, including whether phone assistance was included with all package tiers. We also examined each vendor’s online resources for businesses interested in self-guided help.
        </p>
      </div>
    </div>
    
    <p class="text-gray-800 mt-6 text-base bg-white">
      Based on these criteria, we not only determined which CRM systems our readers could trust but also the ways in which each solution could best serve different business needs. Some platforms were better at certain tasks than others or more suited to a particular type of company. These takeaways informed the “Best for” use cases you see on this page.
    </p>
    
    <p class="text-gray-800 mt-4 text-base">
      To learn more about our methodology, see our full editorial process.
    </p>
    
  
    <div class="mt-8 flex justify-center">
    <div className="my-12 flex justify-center">
        <img 
          src="https://bigbang360.com/wp-content/uploads/2023/02/CRM-blog-12-Things-to-Consider-When-Choosing-a-CRM.png" 
          alt="CRM Process Diagram" 
          className="w-full max-w-4xl rounded-lg " 
        />
      </div>
    </div>
    
    <div class="text-center mt-4 text-[#000e54] text-base font-semobold">
      Compare CRM options at Compare Bazar
    </div>
  </div>
</div>
{/* <WhitePaperForm/> */}
</div>
<div id="d-article">
        <Article
          title="Related Articles"
          items={articles}
          buttonText="View Post"
          buttonColor="bg-[#ff8633]"
       />
</div>
<div id="gpsfleet-faq" className="">
        <FAQ faqs={ crmFAQs}/>
</div>

<Advice/>

{/* <Feedback 
        title="What Our Customers Say"
        testimonials={crmTestimonials}
      /> */}
      <WideDiv />
      <Footer />
       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CRMForm/>
         </Modal>
    </>
  );
};

export default BestCRMSoftware;





