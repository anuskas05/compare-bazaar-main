import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FAQ from './FAQ';
import Article from './ArticleLayoutCommon';
import Feedback from './Feedback';
import busimage from '/images/honey.png';
import { Users, Clock, Shield, BarChart2, Settings, CheckCircle } from 'lucide-react';
import EmployeeManagementWebpage from './EmployeeManagementWebpage';

const EmployeeSection = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [showFullDescription, setShowFullDescription] = useState(false);

    const navigate = useNavigate();

    const handleContactSales = () => {
        navigate('/contact-sales');
    };

    const features = [
        {
            title: "Streamlined Recruitment",
            description: "Revolutionize your hiring process with our advanced AI-powered recruitment tools that go beyond basic screening. Our system analyzes candidate resumes using natural language processing to identify the best matches for your open positions. Automated interview scheduling eliminates back-and-forth emails, while collaborative scorecards help your team evaluate candidates consistently. The integrated talent pipeline feature keeps promising candidates engaged even when you don't have immediate openings, building your talent community for future needs. Real-time analytics provide insights into your recruitment funnel efficiency and time-to-hire metrics.",
            icon: "👥"
        },
        {
            title: "Employee Onboarding",
            description: "Transform new hire experiences with our comprehensive digital onboarding platform that guides employees from offer acceptance through their first 90 days. Automated workflows handle all paperwork including tax forms, direct deposit setup, and policy acknowledgments with e-signature capabilities. Customizable onboarding checklists ensure consistent experiences across departments while allowing for role-specific adaptations. New hires receive personalized learning paths with micro-learning modules, video introductions to team members, and interactive organizational charts. Managers get reminders for key onboarding milestones and automated surveys measure new employee engagement throughout the process.",
            icon: "🚀"
        },
        {
            title: "Performance Analytics",
            description: "Drive organizational success with our sophisticated performance analytics suite that provides multi-dimensional insights into workforce productivity. Track individual and team performance against customizable OKRs and KPIs with visual dashboards that highlight trends and outliers. Our 360-degree feedback system gathers input from peers, managers, and direct reports to provide balanced performance assessments. Predictive analytics identify flight risks and high-potential employees, while skills gap analysis helps target training investments. Automated reporting generates ready-to-present summaries for leadership reviews, and integration with compensation systems ensures performance directly impacts rewards.",
            icon: "📊"
        },
        {
            title: "Benefits Management",
            description: "Modernize your benefits administration with our all-in-one platform that simplifies complex benefits programs for both HR teams and employees. During open enrollment, our guided selection process helps employees choose optimal plans with cost comparison tools and personalized recommendations. Life event management automatically triggers qualifying changes when employees experience marriages, births, or other status changes. Integration with insurance carriers enables real-time eligibility verification and automated enrollment feeds. Employees enjoy self-service access to view coverage details, claim status, and dependent information, while HR teams benefit from consolidated billing and compliance reporting across all benefit providers.",
            icon: "🏥"
        },
        {
            title: "Compliance Assurance",
            description: "Mitigate organizational risk with our comprehensive compliance management system that stays current with constantly evolving labor regulations. Automated alerts notify you of upcoming filing deadlines, required postings, and policy update requirements based on your locations and workforce composition. Our document generator produces legally-reviewed templates for employee handbooks, termination notices, and other sensitive communications. Built-in audit trails maintain complete records of policy acknowledgments and training completions. The system includes specialized modules for industry-specific regulations like healthcare HIPAA requirements or financial services privacy rules, with regular updates from our legal compliance team.",
            icon: "⚖"
        }
    ];

    const getShortDescription = (description) => {
        if (description.length <= 120) return description;
        return description.substring(0, 120) + '...';
    };

    const notices = [
        {
            title: "System Upgrade",
            description: "We're enhancing our platform on March 25th. Service will be unavailable from 2AM-5AM EST. All employee data will be preserved during this upgrade.",
            priority: "high"
        },
        {
            title: "New Features Released",
            description: "The latest update includes improved time tracking, integrated payroll processing, and enhanced reporting tools. Check your dashboard for tutorials.",
            priority: "medium"
        },
        {
            title: "Compliance Update",
            description: "Recent labor law changes have been incorporated into our compliance module. All forms and procedures are now current with 2025 regulations.",
            priority: "high"
        },
        {
            title: "Customer Support Hours",
            description: "Our support team is now available 24/7 to assist with any employment management questions or technical issues you may encounter.",
            priority: "low"
        }
    ];
  // faq
  const employeeFAQs = [
    {
      question: "How does your employee management system streamline HR processes?",
      answer: [
        "Automates routine HR tasks like attendance tracking and leave management",
        "Centralizes employee data for easy access and management",
        "Simplifies onboarding with digital paperwork and task checklists",
        "Provides self-service portals for employees to update their information",
        "Integrates with payroll systems to reduce manual data entry"
      ]
    },
    {
      question: "What features does your system offer for performance management?",
      answer: [
        "360-degree feedback and performance reviews",
        "Goal setting and tracking with OKRs/KPIs",
        "Real-time performance analytics and reporting",
        "Skill gap analysis and development planning",
        "Recognition and reward system integration"
      ]
    },
    {
      question: "How does your system handle employee onboarding?",
      answer: "Our onboarding module automates the entire process from offer acceptance to first-day readiness. It includes digital document signing, task assignments for multiple departments, equipment provisioning workflows, training scheduling, and automated reminders to ensure nothing falls through the cracks."
    },
    {
      question: "Can the system help with compliance and labor laws?",
      answer: [
        "Yes, our compliance features include:",
        "Automatic updates for changing labor regulations",
        "Required documentation tracking and alerts",
        "Customizable policy acknowledgments",
        "Audit trails for all HR actions",
        "Built-in templates for compliance documents"
      ]
    },
    {
      question: "How does your time and attendance tracking work?",
      answer: "Our system offers multiple tracking options including biometric devices, mobile check-in/check-out, GPS verification for remote workers, and integration with existing time clocks. It automatically calculates overtime, manages shift schedules, and flags attendance patterns that may need attention."
    },
    {
      question: "What reporting capabilities does the system offer?",
      answer: "We provide over 50 standard reports covering turnover, headcount, compensation analysis, diversity metrics, and more. All reports can be customized, scheduled for automatic delivery, and exported in multiple formats. Our analytics dashboard offers real-time visualization of key HR metrics."
    },
    {
      question: "How secure is our employee data in your system?",
      answer: [
        "We employ enterprise-grade security including:",
        "SOC 2 Type II and GDPR compliance",
        "Role-based access controls with multi-factor authentication",
        "End-to-end encryption for all sensitive data",
        "Regular third-party security audits",
        "Geographically redundant data centers"
      ]
    },
    {
      question: "Can the system integrate with our existing HR software?",
      answer: "Yes, our platform offers pre-built integrations with most major payroll providers, benefits administrators, ATS systems, and accounting software. We also provide a robust API for custom integrations with your unique tech stack."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 customer support via phone, email, and live chat. Every customer gets a dedicated account manager, quarterly business reviews, and access to our online knowledge base with video tutorials. Implementation includes hands-on training for your team."
    },
    {
      question: "How does your system improve employee engagement?",
      answer: [
        "Engagement features include:",
        "Pulse surveys and sentiment analysis",
        "Peer recognition and reward tools",
        "Career pathing and development planning",
        "Internal mobility and job posting features",
        "Social features for team connection"
      ]
    }
  ];


  const articles1 = [
    {
      id: 1,
      title: "Top 5 Applicant Tracking Systems for 2025",
      image: "/images/art1employee.webp", // Using placeholder image
      author: "Samantha",
      date: "February 15, 2025",
      excerpt: "Finding the right applicant tracking system (ATS) is crucial for streamlining your recruitment process. Our comprehensive review compares the top solutions including Workday, BambooHR, Greenhouse, and more...",
      link: "#"
    },
    {
      id: 2,
      title: "How to Select the Best Employee Onboarding Software in 2025",
      image: "/images/art2employee.webp", 
      author: "Priya",
      date: "March 3, 2025",
      excerpt: "Effective onboarding can improve employee retention by up to 82%. We compare the leading onboarding platforms including BambooHR, Workday, SAP SuccessFactors, and more to help you make the right choice...",
      link: "#"
    },
    {
      id: 3,
      title: "Employee Performance Management Software: The Complete Buyer's Guide",
      image: "/images/art3employee.webp", 
      author: "Daniel",
      date: "March 12, 2025",
      excerpt: "Performance management software has evolved beyond annual reviews. Our guide examines how modern solutions from 15Five, Lattice, and Workday can foster continuous feedback and employee development...",
      link: "#"
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

    const getPriorityStyles = (priority) => {
        switch (priority) {
            case 'high':
                return "border-l-4 border-[#000e54]";
            case 'medium':
                return "border-l-4 border-[#000e54]";
            case 'low':
                return "border-l-4 border-[#000e54]";
            default:
                return "";
        }
    };
    
    const selectionCriteria = [
      {
        category: "Core Functionality",
        items: [
          "Comprehensive HR management (employee records, org charts)",
          "Payroll processing and tax compliance",
          "Time and attendance tracking",
          "Benefits administration",
          "Performance management tools"
        ],
        icon: (
          <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
          </svg>
        ),
        color: "blue"
      },
      {
        category: "Technical Requirements",
        items: [
          "Cloud-based vs on-premise options",
          "Mobile accessibility (iOS/Android apps)",
          "API availability and documentation",
          "Data migration support",
          "Single Sign-On (SSO) capabilities"
        ],
        icon: (
          <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
          </svg>
        ),
        color: "purple"
      },
      {
        category: "Implementation & Support",
        items: [
          "Implementation timeline and process",
          "Training resources and materials",
          "Customer support availability (24/7?)",
          "Average response times for issues",
          "User community and knowledge base"
        ],
        icon: (
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
        ),
        color: "green"
      },
      {
        category: "Security & Compliance",
        items: [
          "SOC 2 Type II certification",
          "GDPR and regional compliance",
          "Data encryption standards",
          "Access controls and permissions",
          "Audit trail capabilities"
        ],
        icon: (
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
        ),
        color: "red"
      },
      {
        category: "Vendor Evaluation",
        items: [
          "Company financial stability",
          "Customer references and case studies",
          "Product roadmap and innovation",
          "Implementation partner network",
          "Contract terms and exit clauses"
        ],
        icon: (
          <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
        ),
        color: "yellow"
      },
      {
        category: "Cost Considerations",
        items: [
          "Pricing model (per employee/module?)",
          "Implementation costs",
          "Ongoing maintenance fees",
          "Upgrade/expansion costs",
          "Total cost of ownership (3-5 year view)"
        ],
        icon: (
          <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        ),
        color: "indigo"
      }
    ];

    const implementationSteps = [
      {
        step: 1,
        title: "Needs Assessment & Planning",
        description: "Conduct a thorough analysis of your current HR processes, identify pain points, and define clear objectives for the EMS implementation. Establish a cross-functional implementation team and create a detailed project plan with timelines and milestones.",
        icon: "📋",
        duration: "2-4 weeks"
      },
      {
        step: 2,
        title: "System Configuration",
        description: "Customize the EMS to match your organizational structure, workflows, and policies. Set up employee data fields, approval hierarchies, and compliance requirements. Configure role-based access controls and security settings.",
        icon: "⚙️",
        duration: "3-6 weeks"
      },
      {
        step: 3,
        title: "Data Migration",
        description: "Clean and prepare existing employee data for migration. Map data fields from legacy systems to the new EMS. Conduct test migrations and validate data accuracy before final transfer.",
        icon: "📊",
        duration: "4-8 weeks"
      },
      {
        step: 4,
        title: "Integration Setup",
        description: "Connect the EMS with other business systems (payroll, accounting, ERP). Configure APIs and ensure seamless data flow between systems. Test integration points thoroughly.",
        icon: "🔗",
        duration: "2-5 weeks"
      },
      {
        step: 5,
        title: "Testing & Validation",
        description: "Conduct comprehensive system testing including unit testing, integration testing, and user acceptance testing (UAT). Validate all workflows and fix any issues before go-live.",
        icon: "🧪",
        duration: "3-5 weeks"
      },
      {
        step: 6,
        title: "Training & Change Management",
        description: "Develop training programs for different user groups (HR, managers, employees). Conduct hands-on workshops and create support materials. Implement change management strategies to drive adoption.",
        icon: "👩‍🏫",
        duration: "4-6 weeks"
      },
      {
        step: 7,
        title: "Phased Rollout",
        description: "Launch the system in phases, starting with a pilot group. Monitor system performance and user feedback. Gradually expand to the entire organization while providing ongoing support.",
        icon: "🚀",
        duration: "2-8 weeks"
      },
      {
        step: 8,
        title: "Ongoing Optimization",
        description: "Continuously gather user feedback and analyze system usage. Make adjustments to workflows and configurations. Schedule regular reviews to ensure the system evolves with your business needs.",
        icon: "🔄",
        duration: "Ongoing"
      }
    ];
  
    const selfServiceFeatures = [
      {
        title: "Personal Information Management",
        benefits: [
          "Reduces HR administrative workload by 40-60%",
          "Improves data accuracy with employee self-verification",
          "24/7 access to update personal details"
        ],
        icon: "👤"
      },
      {
        title: "Time & Attendance Tracking",
        benefits: [
          "Mobile clock-in/out with geofencing",
          "Real-time visibility into attendance patterns",
          "Automated leave balance calculations"
        ],
        icon: "⏱️"
      },
      {
        title: "Benefits Enrollment",
        benefits: [
          "Guided selection during open enrollment",
          "Life event change management",
          "Integrated cost calculators"
        ],
        icon: "🏥"
      },
      {
        title: "Payroll Access",
        benefits: [
          "Digital pay stubs and tax documents",
          "Year-end tax statement generation",
          "Direct deposit management"
        ],
        icon: "💰"
      },
      {
        title: "Performance Management",
        benefits: [
          "Goal setting and tracking",
          "360-degree feedback collection",
          "Development plan creation"
        ],
        icon: "📈"
      },
      {
        title: "Learning Portal",
        benefits: [
          "Personalized training recommendations",
          "Micro-learning modules",
          "Certification tracking"
        ],
        icon: "🎓"
      }
    ];
  
    const industryCustomizations = [
      {
        industry: "Healthcare",
        features: [
          "Shift scheduling for 24/7 operations",
          "Credential and license tracking",
          "HIPAA-compliant document management",
          "On-call and overtime rules"
        ],
        icon: "🏥"
      },
      {
        industry: "Retail",
        features: [
          "Seasonal workforce management",
          "POS system integration",
          "Labor law compliance for hourly workers",
          "Multi-location support"
        ],
        icon: "🛍️"
      },
      {
        industry: "Manufacturing",
        features: [
          "Shop floor attendance tracking",
          "Safety training compliance",
          "Union contract rules engine",
          "Equipment certification tracking"
        ],
        icon: "🏭"
      },
      {
        industry: "Professional Services",
        features: [
          "Project-based workforce allocation",
          "Utilization rate tracking",
          "Client billing integration",
          "Skills inventory database"
        ],
        icon: "💼"
      },
      {
        industry: "Education",
        features: [
          "Academic year planning",
          "Adjunct faculty management",
          "Grant-funded position tracking",
          "Student worker modules"
        ],
        icon: "🎓"
      },
      {
        industry: "Non-Profit",
        features: [
          "Volunteer management",
          "Grant compliance reporting",
          "Donor-restricted position tracking",
          "Board member portals"
        ],
        icon: "❤️"
      }
    ];


    return (
        <>
{/* introduction */}
 <div  id="intro-employee" className="max-w-6xl mx-auto sm:px-6 lg:px-0 py-12 md:py-20">
      <div className="text-center mb-16 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-6">
          <span className="text-gray-900">Empower Your Workforce</span> with Our Management System
        </h1>
        <p className="text-base text-gray-800 max-w-3xl mx-auto">
          Streamline HR processes, enhance productivity, and create exceptional employee experiences with our comprehensive management platform.
        </p>
      </div>

      {/* Core Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
        {/* Feature 1 */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Centralized Employee Data</h3>
          <p className="text-gray-800 text-base">
            Maintain all employee information in one secure, accessible location with advanced search and reporting capabilities.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Time & Attendance</h3>
          <p className="text-gray-800 text-base">
            Automated tracking with biometric integration, leave management, and real-time reporting.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
            <Shield className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Compliance Management</h3>
          <p className="text-gray-800 text-base">
            Stay compliant with labor regulations through automated documentation and audit trails.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
            <BarChart2 className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Advanced Analytics</h3>
          <p className="text-gray-800 text-base">
            Data-driven insights with customizable dashboards and workforce reporting.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <Settings className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Automated Workflows</h3>
          <p className="text-gray-800 text-base">
            Streamline approvals, notifications, and HR processes with customizable automation.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Performance Management</h3>
          <p className="text-gray-800 text-base">
            360° feedback, goal tracking, and continuous performance evaluation tools.
          </p>
        </div>
      </div>

      {/* Visual Demo */}
      <div className="bg-white rounded-xl overflow-hidden max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto">
          <div className="max-w-6xl mx-aut0 lg:p-0">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Experience the Difference</h2>
            <p className="text-base text-gray-800 mb-8">
              Our intuitive dashboard provides managers and HR professionals with all the tools they need in one place.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <h4 className="font-semibold text-xl text-gray-800">Real-time employee data</h4>
                  <p className="text-gray-800 text-base">Access up-to-date information anytime, anywhere</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <h4 className="font-semibold text-xl text-gray-800">Mobile-friendly interface</h4>
                  <p className="text-gray-600 text-base">Manage your workforce on the go</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-800 text-xl">Customizable reports</h4>
                  <p className="text-gray-600 text-base">Generate insights tailored to your needs</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 flex items-center justify-center">
            <svg className="w-full max-w-md" viewBox="0 0 500 360" xmlns="http://www.w3.org/2000/svg">
              {/* Dashboard Background */}
              <rect x="50" y="30" width="400" height="300" rx="10" fill="white" stroke="#e5e7eb" strokeWidth="2"/>
              
              {/* Header Bar */}
              <rect x="50" y="30" width="400" height="50" rx="10" fill="#3b82f6" />
              <text x="70" y="60" fill="white" fontFamily="Arial" fontSize="16" fontWeight="bold">Employee Dashboard</text>
              
              {/* Sidebar */}
              <rect x="50" y="80" width="100" height="250" fill="#f9fafb" />
              <rect x="70" y="100" width="60" height="10" rx="2" fill="#d1d5db" />
              <rect x="70" y="120" width="60" height="10" rx="2" fill="#3b82f6" />
              <rect x="70" y="140" width="60" height="10" rx="2" fill="#d1d5db" />
              <rect x="70" y="160" width="60" height="10" rx="2" fill="#d1d5db" />
              <rect x="70" y="180" width="60" height="10" rx="2" fill="#d1d5db" />
              
              {/* Stats Cards */}
              <rect x="170" y="90" width="80" height="60" rx="5" fill="white" stroke="#e5e7eb" strokeWidth="1" />
              <rect x="180" y="100" width="40" height="5" rx="1" fill="#9ca3af" />
              <rect x="180" y="115" width="60" height="10" rx="1" fill="#1d4ed8" />
              <rect x="180" y="130" width="30" height="5" rx="1" fill="#9ca3af" />
              
              <rect x="260" y="90" width="80" height="60" rx="5" fill="white" stroke="#e5e7eb" strokeWidth="1" />
              <rect x="270" y="100" width="40" height="5" rx="1" fill="#9ca3af" />
              <rect x="270" y="115" width="60" height="10" rx="1" fill="#1d4ed8" />
              <rect x="270" y="130" width="30" height="5" rx="1" fill="#9ca3af" />
              
              <rect x="350" y="90" width="80" height="60" rx="5" fill="white" stroke="#e5e7eb" strokeWidth="1" />
              <rect x="360" y="100" width="40" height="5" rx="1" fill="#9ca3af" />
              <rect x="360" y="115" width="60" height="10" rx="1" fill="#1d4ed8" />
              <rect x="360" y="130" width="30" height="5" rx="1" fill="#9ca3af" />
              
              {/* Main Chart */}
              <rect x="170" y="170" width="260" height="140" rx="5" fill="white" stroke="#e5e7eb" strokeWidth="1" />
              
              {/* Bar Chart */}
              <rect x="190" y="280" width="20" height="20" rx="1" fill="#93c5fd" />
              <rect x="220" y="260" width="20" height="40" rx="1" fill="#3b82f6" />
              <rect x="250" y="240" width="20" height="60" rx="1" fill="#93c5fd" />
              <rect x="280" y="220" width="20" height="80" rx="1" fill="#3b82f6" />
              <rect x="310" y="250" width="20" height="50" rx="1" fill="#93c5fd" />
              <rect x="340" y="270" width="20" height="30" rx="1" fill="#3b82f6" />
              
              {/* Chart Labels */}
              <text x="190" y="300" fill="#6b7280" fontFamily="Arial" fontSize="10">Mon</text>
              <text x="220" y="300" fill="#6b7280" fontFamily="Arial" fontSize="10">Tue</text>
              <text x="250" y="300" fill="#6b7280" fontFamily="Arial" fontSize="10">Wed</text>
              <text x="280" y="300" fill="#6b7280" fontFamily="Arial" fontSize="10">Thu</text>
              <text x="310" y="300" fill="#6b7280" fontFamily="Arial" fontSize="10">Fri</text>
              <text x="340" y="300" fill="#6b7280" fontFamily="Arial" fontSize="10">Sat</text>
            </svg>
          </div>
        </div>
      </div>
</div>

        {/* what is employee menagemtn system */}
        <div  id="what-is-employeemanagement" className="max-w-6xl mx-auto rounded-lg">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          <img 
            src="https://shiftin.app/wp-content/uploads/2021/10/what-are-employee-management-systems.jpg" 
            alt="Employee Management System"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            What is Best Employee Management System?
          </h2>
          <p className="text-gray-800 text-base">
            The best employee management system is a comprehensive digital solution that 
            streamlines HR processes, enhances productivity, and improves workforce 
            engagement. It combines tools for attendance tracking, performance evaluation, 
            payroll processing, and communication in one unified platform. Key features 
            include automation of routine tasks, data-driven insights, employee self-service 
            portals, and seamless integration with other business systems.
          </p>
        </div>
      </div>
      <div className="bg-white max-w-6xl mx-auto">

            {/* Features Section */}
            <div className="py-16 px-4 max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-12">Our Comprehensive Solution</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="col-span-1">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-4 mb-4 rounded-lg cursor-pointer transition-all duration-300 ${activeFeature === index
                                        ? 'bg-[#000e54] text-white border-l-4 border-[#000e54]'
                                        : 'bg-gray-50 hover:bg-gray-100'
                                    }`}
                                onClick={() => {
                                    setActiveFeature(index);
                                    setShowFullDescription(false); // Reset to short description when changing features
                                }}
                            >
                                <div className="flex items-center">
                                    <span className="text-2xl mr-4">{feature.icon}</span>
                                    <h3 className="font-semibold text-base">{feature.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-span-2 bg-gray-50 p-8 rounded-lg">
                        <div className="mb-4">
                            <span className="text-5xl mb-4 block">{features[activeFeature].icon}</span>
                            <h3 className="text-2xl font-semibold mb-4">{features[activeFeature].title}</h3>
                        </div>
                        <p className="text-gray-700 mb-6">
                            {showFullDescription ? (
                                <>
                                    {features[activeFeature].description}{" "}
                                    <button
                                        onClick={() => setShowFullDescription(false)}
                                        className="text-[#ff8633] hover:text-[#000e54] font-medium transition-colors focus:outline-none inline-flex items-center"
                                    >
                                        less
                                    </button>
                                </>
                            ) : (
                                <>
                                    {getShortDescription(features[activeFeature].description)}
                                    {features[activeFeature].description.length > 120 && (
                                        <>
                                            ...{" "}
                                            <button
                                                onClick={() => setShowFullDescription(true)}
                                                className="text-[#ff8633] hover:text-[#000e54] font-medium transition-colors focus:outline-none inline-flex items-center"
                                            >
                                                more
                                            </button>
                                        </>
                                    )}
                                </>
                            )}
                        </p>
                    </div>
                </div>
            </div>

            {/* notice section */}
            <section id="employee-notice" className="py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-[#000e54] font-semibold">STAY INFORMED</span>
                        <h2 className="text-3xl font-semibold mt-2">Important Notices for Our Customers</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            We're committed to keeping you updated about changes to our service, new features, and important information that may affect your employment management system.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {notices.map((notice, index) => (
                            <div
                                key={index}
                                className={`bg-white p-6 rounded-lg shadow-md ${getPriorityStyles(notice.priority)}`}
                            >
                                <div className="flex items-center mb-4">
                                    {notice.priority === 'high' && (
                                        <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">
                                            Important
                                        </span>
                                    )}
                                    <h3 className="font-semibold text-xl">{notice.title}</h3>
                                </div>
                                <p className="text-gray-700 mb-4">{notice.description}</p>
                                <div className="flex justify-end">
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <div className="py-16 text-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Employment Management?</h2>
                    <p className="text-gray-600 mb-8">Join thousands of companies that have streamlined their HR processes and improved employee satisfaction.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            className="bg-[#ff8633] border border-gray-300 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-[#000e54] hover:text-white hover:border-[#000e54] transition duration-300"
                            onClick={handleContactSales}
                        >
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        

       {/* what make best employee management system */}
       <section id="whatmakesbest-ems" className="py-10 max-w-6xl mx-auto">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-4xl font-semibold text-gray-900 mb-4">
            What Makes the <span className="text-[#000e54]">Best</span> Employee Management System?
          </h2>
          <p className="text-base text-gray-800 max-w-3xl mx-auto">
            A modern employee management system goes beyond basic HR functions to empower your workforce and streamline operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Comprehensive Employee Profiles</h3>
              <p className="text-gray-800 text-base">
                Centralized records with personal details, skills, certifications, and performance history in one accessible location.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Automated Workflows</h3>
              <p className="text-gray-800 text-base">
                Streamline onboarding, offboarding, approvals, and other HR processes with customizable automation rules.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Real-time Analytics</h3>
              <p className="text-gray-800 text-base">
                Data-driven insights on workforce trends, productivity, turnover, and other key HR metrics with interactive dashboards.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Time & Attendance Tracking</h3>
              <p className="text-gray-800 text-base">
                Accurate tracking of work hours, leaves, and overtime with geofencing and biometric integration options.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Employee Engagement Tools</h3>
              <p className="text-gray-800 text-base">
                Surveys, recognition programs, and feedback mechanisms to boost morale and retention.
              </p>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Security & Compliance</h3>
              <p className="text-gray-800 text-base">
                Role-based access controls, audit trails, and compliance with labor laws and data protection regulations.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/2">
              <img
                className="h-full w-full object-cover"
                src="https://businessfirstfamily.com/wp-content/uploads/2019/02/employee-management-software.jpg"
                alt="Team collaboration"
              />
            </div>
            <div className="p-8 md:p-12">
              <div className="uppercase tracking-wide text-xl text-[#000e54] font-semibold">Why It Matters</div>
              <h2 className="mt-2 text-xl font-semibold text-gray-800">The Impact of a Great EMS</h2>
              <p className="mt-4 text-gray-800 text-base leading-relaxed">
                The best employee management systems create a seamless bridge between HR needs and employee experience. 
                They reduce administrative burdens while providing employees with self-service tools for their needs.
              </p>
              <div className="mt-6">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-[#000e54]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-800 text-base">Increase productivity by 20-30%</span>
                </div>
                <div className="flex items-center mt-2">
                  <svg className="h-5 w-5 text-[#000e54]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-800 text-base">Reduce HR administrative time by 40%</span>
                </div>
                <div className="flex items-center mt-2">
                  <svg className="h-5 w-5 text-[#000e54]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-800 text-base">Improve employee satisfaction scores</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

{/* implmentation and usage */}
<section id="implementation-ems" className="py-10 max-w-6xl mx-auto ">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Implementing an EMS: <span className="text-[#000e54]">Step-by-Step Guide</span>
            </h2>
            <p className="text-base text-gray-800 max-w-3xl mx-auto">
              A successful EMS implementation requires careful planning and execution. Follow these best practices to ensure smooth deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {implementationSteps.map((step) => (
              <div 
                key={step.step}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#000e54]"
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 text-[#000e54] w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                  </div>
                  <p className="text-gray-800 text-base mb-4 flex-grow">{step.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-base font-msemibold text-[#000e54]">{step.duration}</div>
                    <div className="text-2xl">{step.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Self-Service Portals */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Employee <span className="text-[#000e54]">Self-Service Portals</span>
            </h2>
            <p className="text-base text-gray-800 max-w-3xl mx-auto">
              Modern EMS platforms empower employees with self-service capabilities that reduce HR workload while improving employee experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selfServiceFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="text-2xl mr-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                  </div>
                  <ul className="space-y-3 flex-grow">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-base">
                        <svg className="h-5 w-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Customizations */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-4xl font-semibold text-gray-800 mb-4">
              Customizing Your EMS for <span className="text-[#000e54]">Different Industries</span>
            </h2>
            <p className="text-base text-gray-800 max-w-3xl mx-auto">
              Industry-specific requirements demand tailored EMS configurations. Here's how leading sectors customize their systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryCustomizations.map((industry, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">{industry.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800">{industry.industry}</h3>
                  </div>
                  <ul className="space-y-3 flex-grow">
                    {industry.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-base">
                        <svg className="h-5 w-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

{/* features */}
<div id="employee-features">
<h1 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-6 text-center">
          <span className="text-gray-900">Features of Best Employee Management System</span>
</h1>
 <EmployeeManagementWebpage/>
 </div>

{/* benefits */}
<div id="employeemanagement-benefits" className=" py-10">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <span className="bg-[#000e54] text-white text-base font-semibold px-4 py-1 rounded-full uppercase">Why Choose Us</span>
      <h2 className="text-4xl font-semibold mt-4 mb-6 text-gray-900">Benefits of the Right Employee Management System</h2>
      <p className="text-base text-gray-600 max-w-3xl mx-auto">
        Implementing the optimal employee management solution delivers transformative advantages across your entire organization,
        from the C-suite to frontline employees.
      </p>
    </div>
    
    {/* Main Benefits Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {/* Benefit Card 1 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
        <div className="h-3 bg-[#000e54]"></div>
        <div className="p-8">
          <div className="w-16 h-16 bg-[#000e54] rounded-lg flex items-center justify-center text-white mb-6  transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Cost Efficiency</h3>
          <p className="text-gray-800 text-base mb-6">
            Reduce operational costs by automating routine tasks and eliminating redundant processes.
            Our customers typically see a 27% reduction in administrative overhead within the first year.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-[#000e54] mr-2">✓</span>
              <span className="text-gray-800 text-base">Decreased payroll processing time by up to 80%</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#000e54] mr-2">✓</span>
              <span className="text-gray-800 text-base">Reduced compliance-related penalties by 92%</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#000e54] mr-2">✓</span>
              <span className="text-gray-800 text-base">Lower paper and storage costs through digitization</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Benefit Card 2 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
        <div className="h-3 bg-[#000e54]"></div>
        <div className="p-8">
          <div className="w-16 h-16 bg-[#000e54] rounded-lg flex items-center justify-center text-white mb-6 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Enhanced Productivity</h3>
          <p className="text-gray-800 text-base mb-6">
            Streamline workflows and eliminate bottlenecks with intelligent automation and 
            self-service capabilities that empower employees at every level.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-[#000e54] mr-2">✓</span>
              <span className="text-gray-800 text-base">Save 5+ hours per week for HR personnel</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#000e54] mr-2">✓</span>
              <span className="text-gray-800 text-base">Reduce approval cycles by 65% with automated workflows</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#000e54] mr-2">✓</span>
              <span className="text-gray-800 text-base">Enable managers to handle 40% more direct reports</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Benefit Card 3 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
        <div className="h-3 bg-[#000e54]"></div>
        <div className="p-8">
          <div className="w-16 h-16 bg-[#000e54] rounded-lg flex items-center justify-center text-white mb-6  transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Compliance Assurance</h3>
          <p className="text-gray-800 text-base mb-6">
            Stay ahead of complex regulatory requirements with automatic updates
            and built-in compliance safeguards across federal, state, and local regulations.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-[#000e54] mr-2">✓</span>
              <span className="text-gray-800 text-base">Automatic regulatory updates across 50+ jurisdictions</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#000e54] mr-2">✓</span>
              <span className="text-gray-800 text-base">Compliant record keeping with audit trails</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#000e54] mr-2">✓</span>
              <span className="text-gray-800 text-base">Simplified ACA, FLSA, and FMLA compliance</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Benefit Card 4 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
        <div className="h-3 bg-[#000e54]"></div>
        <div className="p-8">
          <div className="w-16 h-16 bg-[#000e54] rounded-lg flex items-center justify-center text-white mb-6 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Employee Engagement</h3>
          <p className="text-gray-800 text-base mb-6">
            Foster a culture of engagement and satisfaction with tools that recognize contributions,
            support development, and provide transparency across the organization.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-[#000e54] mr-2">✓</span>
              <span className="text-gray-800 text-base">Increase retention rates by up to 31%</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#000e54] mr-2">✓</span>
              <span className="text-gray-800 text-base">Facilitate continuous feedback and recognition</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#000e54] mr-2">✓</span>
              <span className="text-gray-800 text-base">Improve employee satisfaction scores by 43%</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Benefit Card 5 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
        <div className="h-3 bg-[#000e54]"></div>
        <div className="p-8">
          <div className="w-16 h-16 bg-[#000e54] rounded-lg flex items-center justify-center text-white mb-6  transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Data-Driven Decisions</h3>
          <p className="text-gray-800 text-base mb-6">
            Transform workforce data into actionable insights with powerful analytics
            tools that help predict trends, identify opportunities, and mitigate risks.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-[#000e54] mr-2">✓</span>
              <span className="text-gray-800 text-base">Interactive dashboards with 50+ pre-built reports</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#000e54] mr-2">✓</span>
              <span className="text-gray-800 text-base">AI-powered predictive workforce analytics</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#000e54] mr-2">✓</span>
              <span className="text-gray-800 text-base">Custom reporting engine with drag-and-drop interface</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Benefit Card 6 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
        <div className="h-3 bg-[#000e54]"></div>
        <div className="p-8">
          <div className="w-16 h-16 bg-[#000e54] rounded-lg flex items-center justify-center text-white mb-6  transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Scalable Growth</h3>
          <p className="text-gray-800 text-base mb-6">
            Adapt to changing business needs with a flexible platform that grows
            with your organization, from startup to enterprise level operations.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-[#000e54] mr-2">✓</span>
              <span className="text-gray-800 text-base">Support for companies from 10 to 100,000+ employees</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#000e54] mr-2">✓</span>
              <span className="text-gray-800 text-base">Flexible configuration as business needs evolve</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#000e54] mr-2">✓</span>
              <span className="text-gray-800 text-base">99.9% uptime with enterprise-grade reliability</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    {/* ROI Metrics Section */}
    <div className="bg-[#000e54] text-white rounded-2xl p-8 mb-16">
      <div className="text-center mb-10">
        <h3 className="text-4xl font-semibold mb-4">Measurable Return on Investment</h3>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Companies implementing our employee management system see significant, measurable returns within the first year.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-4xl font-semibold text-[#ff8633] mb-2">27%</div>
          <p className="text-base">Reduction in HR Administrative Costs</p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-semibold text-[#ff8633] mb-2">3.2x</div>
          <p className="text-base">Faster Employee Onboarding</p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-aemibold text-[#ff8633] mb-2">89%</div>
          <p className="text-base">Paperwork Elimination</p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-aemibold text-[#ff8633] mb-2">19%</div>
          <p className="text-base">Increase in Talent Retention</p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* choosing right ems */}
<section id="employee-choose" className="py-16 max-w-6xl mx-auto">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Choosing the Right EMS for Your <span className="text-[#000e54]">Company Size</span>
          </h2>
          <p className="text-base text-gray-800 max-w-3xl mx-auto">
            Employee Management Systems vary significantly based on organizational needs. 
            Select the perfect solution tailored to your business scale and growth trajectory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* SMB Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-[#000e54]">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Small & Medium Businesses</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-800 text-base">
                  For companies with <strong>5-250 employees</strong>, focus on systems that offer simplicity, 
                  affordability, and quick implementation without extensive IT support.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-xl text-[#000e54] mb-2">Ideal Features:</h4>
                  <ul className="space-y-2 text-gray-800">
                    <li className="flex items-start text-base">
                      <svg className="h-5 w-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>All-in-one solutions with core HR, payroll, and time tracking</span>
                    </li>
                    <li className="flex items-start text-base">
                      <svg className="h-5 w-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Cloud-based with mobile accessibility</span>
                    </li>
                    <li className="flex items-start text-base">
                      <svg className="h-5 w-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Pre-built compliance templates for local regulations</span>
                    </li>
                    <li className="flex items-start text-base">
                      <svg className="h-5 w-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Simple pricing with no per-module charges</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-semibold text-xl text-gray-800 mb-2">Top Considerations:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 pl-2 text-base">
                    <li>Implementation time under 2 weeks</li>
                    <li>Minimal training requirements</li>
                    <li>Scalability for planned growth</li>
                    <li>Integration with accounting software</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-[#000e54]">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Large Enterprises</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-800 text-base">
                  For organizations with <strong>250+ employees</strong>, prioritize systems with deep customization, 
                  global capabilities, and advanced workforce analytics.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#000e54] text-xl mb-2">Critical Capabilities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start text-base">
                      <svg className="h-5 w-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Multi-country compliance and localization</span>
                    </li>
                    <li className="flex items-start text-base">
                      <svg className="h-5 w-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Advanced workforce planning and predictive analytics</span>
                    </li>
                    <li className="flex items-start text-base">
                      <svg className="h-5 w-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Custom workflow automation and approval chains</span>
                    </li>
                    <li className="flex items-start text-base">
                      <svg className="h-5 w-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Enterprise-grade security and access controls</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-semibold text-gray-800 text-xl mb-2">Implementation Factors:</h4>
                  <ul className="list-disc list-inside text-gray-800 text-base space-y-1 pl-2">
                    <li>Phased rollout capabilities</li>
                    <li>Dedicated account management</li>
                    <li>Custom reporting and dashboard creation</li>
                    <li>Legacy system migration support</li>
                    <li>API-first architecture for custom integrations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decision Guide */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-[#000e54] p-8 flex flex-col justify-center">
              <div className="text-white">
                <h3 className="text-xl font-semibold mb-4">Still Unsure?</h3>
                <p className="mb-6 text-base">Use our decision matrix to identify the perfect EMS based on:</p>
                <ul className="space-y-3">
                  <li className="flex items-start text-base">
                    <svg className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Employee count and growth rate</span>
                  </li>
                  <li className="flex items-start text-base">
                    <svg className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Geographic distribution</span>
                  </li>
                  <li className="flex items-start text-base">
                    <svg className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Industry-specific requirements</span>
                  </li>
                  <li className="flex items-start text-base">
                    <svg className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>IT infrastructure maturity</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">EMS Selection Decision Matrix</h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-base font-semibold text-gray-800 uppercase tracking-wider">Criteria</th>
                      <th scope="col" className="px-6 py-3 text-left text-base font-semibold text-gray-800 uppercase tracking-wider">SMB Solution</th>
                      <th scope="col" className="px-6 py-3 text-left text-base font-semibold text-gray-800 uppercase tracking-wider">Enterprise Solution</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-base font-semibold text-gray-800">Implementation Time</td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">1-4 weeks</td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">3-12 months</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-base font-semibold text-gray-800">Customization Level</td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Limited configuration</td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Full customization</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800">Pricing Model</td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Monthly subscription</td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Annual contract + professional services</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-base font-semibold text-gray-800">Support Level</td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Community/email support</td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Dedicated account manager + 24/7 support</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-base font-semibold text-gray-800">Scalability</td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Up to 500 employees</td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Unlimited with global capabilities</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-4xl font-semibold text-gray-900 mb-4">
            EMS Vendor <span className="text-[#000e54]">Selection Criteria</span>
          </h2>
          <p className="text-base text-gray-800 max-w-3xl mx-auto">
            Choosing the right Employee Management System vendor requires careful evaluation across multiple dimensions. 
            Use this comprehensive checklist to compare potential solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 mx-auto max-w-6xl">
          {selectionCriteria.map((criteria, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-${criteria.color}-500`}
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className={`bg-${criteria.color}-100 p-2 rounded-lg mr-4`}>
                    {criteria.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{criteria.category}</h3>
                </div>
                
                <ul className="space-y-3 flex-grow">
                  {criteria.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg className={`h-5 w-5 text-${criteria.color}-500 mr-2 mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-800 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </section>


 {/* integration capability */}
 <div id="employee-integration" className="max-w-6xl mx-auto">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <span className="text-greay-900  font-semibold text-4xl">SEAMLESS CONNECTIONS</span>
      <h2 className="text-4xl font-semibold text-gray-900 mt-2 mb-6">Integration Capabilities</h2>
      <p className="text-gray-800 max-w-3xl text-base mx-auto">
        A truly effective employee management system doesn't exist in isolation. Our solution offers comprehensive 
        integration capabilities that connect your entire business ecosystem, eliminating data silos and streamlining workflows.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <div className="bg-[#000e54] p-3 rounded-full text-white mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Robust API Architecture</h3>
        </div>
        <p className="text-gray-800 text-base mb-6">
          Our RESTful and GraphQL APIs provide secure, reliable connections between your employee management system and other 
          business applications. With comprehensive documentation and developer support, your team can build custom integrations or 
          leverage our pre-built connectors.
        </p>
        <ul className="space-y-3 text-gray-800">
          <li className="flex items-start text-base">
            <span className="text-[#000e54] mr-2">✓</span>
            <span>Over 200 API endpoints covering all system functionality</span>
          </li>
          <li className="flex items-start text-base">
            <span className="text-[#000e54] mr-2">✓</span>
            <span>Webhook support for real-time event notifications</span>
          </li>
          <li className="flex items-start text-base">
            <span className="text-[#000e54] mr-2">✓</span>
            <span>OAuth 2.0 authentication and granular permission controls</span>
          </li>
          <li className="flex items-start text-base">
            <span className="text-[#000e54] mr-2">✓</span>
            <span>99.9% API uptime guarantee with real-time status monitoring</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <div className="bg-[#000e54] p-3 rounded-full text-white mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Third-Party App Ecosystem</h3>
        </div>
        <p className="text-gray-800 text-base mb-6">
          Connect with over 150+ pre-built integrations to popular business software across HR, accounting, productivity, 
          communication, and project management categories. Our marketplace continues to grow with new partners joining monthly.
        </p>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-100 p-3 rounded flex items-center justify-center">
            <span className="font-semibold text-gray-800 text-base">Slack</span>
          </div>
          <div className="bg-gray-100 p-3 rounded flex items-center justify-center">
            <span className="font-semibold text-gray-800 text-base">QuickBooks</span>
          </div>
          <div className="bg-gray-100 p-3 rounded flex items-center justify-center">
            <span className="font-semibold text-gray-800 text-base">Salesforce</span>
          </div>
          <div className="bg-gray-100 p-3 rounded flex items-center justify-center">
            <span className="font-semibold text-gray-800 text-base">Zoom</span>
          </div>
          <div className="bg-gray-100 p-3 rounded flex items-center justify-center">
            <span className="font-semibold text-gray-800 text-base">Microsoft 365</span>
          </div>
          <div className="bg-gray-100 p-3 rounded flex items-center justify-center">
            <span className="font-semibold text-gray-800 text-base">Google Workspace</span>
          </div>
        </div>
        <p className="text-base text-gray-800 italic">And 140+ more integrations available in our marketplace</p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#000e54]">
        <h4 className="font-semibold text-xl mb-4">Single Sign-On Solutions</h4>
        <p className="text-gray-800 text-base mb-4">
          Simplify access management with SSO support for SAML 2.0, OAuth, and OpenID Connect. Compatible with popular identity 
          providers including Okta, Azure AD, Google, and OneLogin.
        </p>
        <p className="text-gray-800 text-base">
          Reduce password fatigue and strengthen security while providing seamless access to all your HR tools with a single login.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#000e54]">
        <h4 className="font-semibold text-xl mb-4">Data Import/Export Tools</h4>
        <p className="text-gray-800 text-base mb-4">
          Our intuitive data management tools make it easy to move information in and out of the system. Support for CSV, Excel, 
          XML, and JSON formats ensures compatibility with your existing data structures.
        </p>
        <p className="text-gray-800 text-base">
          Includes intelligent data mapping, validation rules, and scheduled automated imports/exports to keep systems in sync.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#000e54]">
        <h4 className="font-semibold text-xl mb-4">Legacy System Compatibility</h4>
        <p className="text-gray-800 text-base mb-4">
          We understand the challenges of modernizing while maintaining operations. Our platform offers specialized connectors 
          for legacy HRIS, payroll, and time-tracking systems.
        </p>
        <p className="text-gray-800 text-base">
          Our migration specialists can build custom data bridges to ensure smooth transitions from systems as old as 20+ years.
        </p>
      </div>
    </div>
  </div>
</div>

       {/* article */}
        <div id="employee-articles">
      <Article
        title="Related Articles" 
        items={articles1} 
        buttonText="View Post" 
        buttonColor="bg-[#ff8633]" 
      />
      </div>

      {/* faq */}
      <div id="employee-faq" className="">
        <FAQ faqs={ employeeFAQs} />
      </div>

      {/* feedback */}
      {/* <Feedback 
        title="What Our Customers Say"
        testimonials={homeTestimonials}
      /> */}
        </>
    );
};

export default EmployeeSection;