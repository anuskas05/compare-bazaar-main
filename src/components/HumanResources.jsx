import { useState } from 'react';
import { Search, FileText, Phone, User, Users, Calendar, Award, Book, HelpCircle } from 'lucide-react';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';
import FAQ from './FAQ';

export default function HumanResource() {
  const humanresourcesFAQs = [
    {
      question: "What benefits packages do you offer?",
      answer: "We offer comprehensive benefits including medical, dental, vision, 401(k) with company matching, paid time off, parental leave, and wellness programs tailored to different employee needs."
    },
    {
      question: "How long does the onboarding process typically take?",
      answer: [
        "Onboarding timelines vary by position:",
        "Entry-level roles: 1-2 weeks",
        "Mid-level positions: 2-3 weeks",
        "Management roles: 3-4 weeks",
        "Executive positions: 4-6 weeks"
      ]
    },
    {
      question: "Do you provide professional development opportunities?",
      answer: "Yes, we offer comprehensive professional development including mentorship programs, tuition reimbursement, in-house training sessions, and access to online learning platforms."
    },
    {
      question: "What is your company's work-from-home policy?",
      answer: [
        "Our flexible work policies include:",
        "Hybrid work options (3 days in-office/2 days remote)",
        "Full remote options for eligible positions",
        "Flexible start/end times",
        "Core collaboration hours (10am-3pm)"
      ]
    },
    {
      question: "How does the performance review process work?",
      answer: "We conduct quarterly check-ins and comprehensive annual reviews. Our evaluation process focuses on goal achievement, skill development, and alignment with company values."
    },
    {
      question: "What support services do you offer for employees?",
      answer: [
        "Our employee support includes:",
        "Employee Assistance Program (EAP)",
        "Mental health resources",
        "Financial wellness programs",
        "Work-life balance initiatives"
      ]
    },
    {
      question: "How do you promote diversity and inclusion?",
      answer: "We maintain diversity initiatives including unconscious bias training, employee resource groups, diverse hiring panels, and regular climate surveys to ensure an inclusive workplace."
    },
    {
      question: "What makes your company culture unique?",
      answer: [
        "Our culture highlights:",
        "Collaborative team environment",
        "Recognition programs",
        "Social responsibility initiatives",
        "Regular team-building activities"
      ]
    },
    {
      question: "Do you offer relocation assistance?",
      answer: "Yes, we provide relocation packages for eligible positions including moving expenses, temporary housing assistance, and orientation to new locations."
    },
    {
      question: "How do I apply for internal job openings?",
      answer: "Internal positions are posted on our employee portal. After six months in your current role, you can apply with your manager's awareness and HR will guide you through the internal transfer process."
    }
  ];
  const benefits = [
    {
      title: "Health Insurance",
      description: "Comprehensive medical, dental, and vision coverage for you and your dependents with multiple plan options.",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-rose-500">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3.332.74-4.5 2.05C10.832 3.74 9.26 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
      color: "bg-rose-500"
    },
    {
      title: "Retirement Plan",
      description: "401(k) with up to 6% company match plus access to retirement planning resources and advisors.",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-500">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        </svg>
      ),
      color: "bg-blue-500"
    },
    {
      title: "Professional Development",
      description: "Annual learning stipend and dedicated time for courses, conferences, and certifications.",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-purple-500">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
      color: "bg-purple-500"
    },
    {
      title: "Wellness Benefits",
      description: "Monthly wellness allowance, gym membership discounts, and mental health resources.",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-500">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
      color: "bg-green-500"
    },
    {
      title: "Paid Time Off",
      description: "Generous vacation policy, paid holidays, sick leave, and parental leave for all employees.",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-amber-500">
          <polyline points="20 12 20 22 4 22 4 12" />
          <rect x="2" y="7" width="20" height="5" />
          <line x1="12" y1="22" x2="12" y2="7" />
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
      ),
      color: "bg-amber-500"
    },
    {
      title: "Financial Perks",
      description: "Competitive salary, performance bonuses, stock options, and financial wellness programs.",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-emerald-500">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      color: "bg-emerald-500"
    }
  ];

  const policies = [
    {
      id: "workplace-conduct",
      title: "Workplace Conduct",
      description: "Guidelines for professional behavior, anti-harassment policies, and maintaining a respectful environment.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[#000e54]">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      bgColor: "bg-blue-50",
      borderColor: "border-[#000e54]"
    },
    {
      id: "data-security",
      title: "Data Security & Privacy",
      description: "Protocols for handling sensitive information, data protection requirements, and security procedures.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[#000e54]">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      ),
      bgColor: "bg-blue-50",
      borderColor: "border-[#000e54]"
    },
    {
      id: "remote-work",
      title: "Remote Work",
      description: "Guidelines for working remotely, equipment policies, communication expectations, and home office setup.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[#000e54]">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      bgColor: "bg-blue-50",
      borderColor: "border-[#000e54]"
    },
    {
      id: "attendance",
      title: "Attendance & Leave",
      description: "Policies regarding work hours, attendance tracking, time off requests, and leave management.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[#000e54]">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      bgColor: "bg-blue-50",
      borderColor: "border-[#000e54]"
    },
    {
      id: "expense",
      title: "Expense & Reimbursement",
      description: "Procedures for submitting expenses, eligible reimbursements, and corporate card usage guidelines.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[#000e54]">
          <rect x="2" y="5" width="20" height="14" rx="2"></rect>
          <line x1="2" y1="10" x2="22" y2="10"></line>
        </svg>
      ),
      bgColor: "bg-blue-50",
      borderColor: "border-[#000e54]"
    },
    {
      id: "health-safety",
      title: "Health & Safety",
      description: "Workplace safety protocols, emergency procedures, and health-related accommodations and resources.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[#000e54]">
          <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path>
          <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path>
          <circle cx="20" cy="8" r="2"></circle>
        </svg>
      ),
      bgColor: "bg-blue-50",
      borderColor: "border-[#000e54]"
    }
  ];

  const BenefitCard = ({ svg, title, description, color }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
        <div className={`h-2 ${color}`}></div>
        <div className="p-6">
          <div className={`inline-flex items-center justify-center p-3 rounded-full ${color} bg-opacity-10 mb-4`}>
            {svg}
          </div>
          <h3 className="text-base font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
  };


  const QuickLinkCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100">
      <div className="flex items-start">
        <div className="mr-4">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 text-xl mb-2">{title}</h3>
          <p className="text-gray-800 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};


  
  return (
    <>
    <Navbar/>
      {/* Header */}
      <div class="bg-[#000e54]  py-16 px-4">
  <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
    <div class="md:w-1/2">
      <h2 class="text-4xl text-white font-semibold leading-tight">Welcome to Your HR Resource Center</h2>
      <p class="mt-4 text-white text-base">Access important company information, manage your benefits, and get support from our HR team all in one place.</p>
      <div class="mt-8 flex flex-wrap gap-4">
  <a href="#employee-benefits" class="bg-white text-[#000e54] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-block">Employee Benefits</a>
  <a href="/contact-sales" class="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:text-[#ff8633] transition-colors inline-block">Request Support</a>
</div>
    </div>
    <div class="md:w-1/2 mt-8 md:mt-0">
      <div class="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm border border-white border-opacity-20">
        <div class="grid grid-cols-2 gap-4">
          <a href="#company-policy" class="bg-white bg-opacity-20 p-4 rounded-lg flex items-center gap-3 hover:bg-opacity-30 transition-all">
            <div class="bg-[#000e54] p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className='text-base text-gray-800'>Company Policies</span>
          </a>
          <a href="#announcements" class="bg-white bg-opacity-20 p-4 rounded-lg flex items-center gap-3 hover:bg-opacity-30 transition-all">
            <div class="bg-[#000e54] p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className='text-base text-gray-800'>Announcements</span>
          </a>
          <a href="#employee-benefits" class="bg-white bg-opacity-20 p-4 rounded-lg flex items-center gap-3 hover:bg-opacity-30 transition-all">
            <div class="bg-[#000e54] p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className='text-base text-gray-800'>Benefits</span>
          </a>
          <a href="#contact-hr" class="bg-white bg-opacity-20 p-4 rounded-lg flex items-center gap-3 hover:bg-opacity-30 transition-all">
            <div class="bg-[#000e54] p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <span className='text-gray-800 text-base'>Contact HR</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
        {/* Welcome Message */}
        <div className="bg-white max-w-6xl mx-auto p-6 rounded-lg text-center mb-8">
          <h2 className="text-4xl font-semibold text-blue-gray-900 mb-4">Welcome to the HR Portal</h2>
          <p className="text-gray-800 text-base">
            Find all the resources you need related to your employment, benefits, company policies, and career development. 
            If you can't find what you're looking for, don't hesitate to contact the HR team using the contact information below.
          </p>
        </div>

        {/* features */}
        <section className="max-w-6xl mx-auto mb-12">
      <h2 className="text-4xl text-center font-semibold mb-6 text-gray-800">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <QuickLinkCard
          icon={<FileText className="h-6 w-6 text-[#000e54]" />}
          title="Company Policies"
          description="Access employee handbook, code of conduct, and other important company policies."
        />
        <QuickLinkCard
          icon={<Calendar className="h-6 w-6 text-green-600" />}
          title="Time Off & Leave"
          description="Submit time off requests, review PTO balance, and understand leave policies."
        />
        <QuickLinkCard
          icon={<Award className="h-6 w-6 text-purple-600" />}
          title="Benefits & Compensation"
          description="Learn about health insurance, retirement plans, and other employee benefits."
        />
        <QuickLinkCard
          icon={<Users className="h-6 w-6 text-orange-600" />}
          title="Team Directory"
          description="Find contact information for all employees across departments."
        />
        <QuickLinkCard
          icon={<Book className="h-6 w-6 text-red-600" />}
          title="Training & Development"
          description="Explore learning resources and professional development opportunities."
        />
        <QuickLinkCard
          icon={<HelpCircle className="h-6 w-6 text-indigo-600" />}
          title="HR FAQ"
          description="Find answers to commonly asked HR questions and concerns."
        />
      </div>
    </section>

    {/* benefits for employee */}
    <section id="employee-benefits" className="max-w-6xl mx-auto py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4 text-gray-900">Comprehensive Employee Benefits</h2>
          <p className="text-gray-800 text-base max-w-2xl mx-auto">
            We believe in taking care of our most valuable asset - our people. Our benefits package is designed to support your health, wealth, and work-life balance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-base">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              svg={benefit.svg}
              title={benefit.title}
              description={benefit.description}
              color={benefit.color}
            />
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Need more information?</h3>
          <p className="text-gray-800 text-base mb-4">
            Our HR team is available to answer any questions about our benefits package and help you make the most of these resources.
          </p>
          <a href="#contact-hr" class="bg-[#ff8633] text-white font-semibold px-6 py-3 rounded-lg  transition-colors inline-block">Contact HR</a>
        </div>
      </div>
    </section>

    {/* company policies */}
    <section id="company-policy" className="py-20 max-w-6xl mx-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
           <h2 className="text-4xl font-semibold text-center text-gray-900 mb-3">Company Policies</h2>
          <p className="text-gray-800 text-center text-base ">
            Our policies are designed to ensure a safe, productive, and inclusive workplace. 
            Familiarize yourself with these guidelines to understand your rights and responsibilities as a team member.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {policies.map((policy) => (
            <div 
              key={policy.id}
              className={`rounded-xl p-6 shadow-sm border ${policy.borderColor} ${policy.bgColor} hover:shadow-md transition-all`}
            >
              <div className="flex items-start mb-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  {policy.icon}
                </div>
                <h3 className="text-xl font-semibold ml-4 pt-2 text-gray-800">{policy.title}</h3>
              </div>
              <p className="text-gray-800 text-base mb-4">{policy.description}</p>
              <div className="mt-auto pt-2">
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

        {/* Announcements */}
        <section id="announcements" className="max-w-6xl py-20 mx-auto mb-12">
          <h2 className="text-4xl font-semibold mb-6 text-center text-gray-900">Announcements</h2>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-xl text-[#000e54]">Open Enrollment Coming Soon</h3>
                <span className="text-base text-gray-800 text-base">April 5, 2025</span>
              </div>
              <p className="mt-2 text-gray-800 text-base">
                The annual benefits open enrollment period will begin on May 1st. Information sessions will be held throughout April to review plan changes and options.
              </p>
              
            </div>
            
            <div className="p-6 border-b">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-xl text-[#000e54]">Updated Remote Work Policy</h3>
                <span className="text-base text-gray-800">March 28, 2025</span>
              </div>
              <p className="mt-2 text-gray-800 text-base">
                We've updated our remote work policy to provide more flexibility. Please review the new guidelines which take effect starting next month.
              </p>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-xl text-[#000e54]">Q2 Town Hall Schedule</h3>
                <span className="text-base text-gray-800">March 15, 2025</span>
              </div>
              <p className="mt-2 text-gray-800 text-base">
                Mark your calendars! Our Q2 company town hall is scheduled for April 25th at 2:00 PM. Agenda and meeting link will be shared via email.
              </p>
    
            </div>
          </div>
        </section>

        {/* Contact HR */}
        <section id="contact-hr" className=" p-6 py-20 max-w-6xl mx-auto rounded-lg ">
          <h2 className="text-4xl font-semibold mb-4 text-center text-gray-800">Contact HR</h2>
          <div className="flex flex-col md:flex-row md:space-x-12">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-3">
                <User className="h-5 w-5 text-[#000e54] mr-2" />
                <h3 className="font-semibold text-base">General Inquiries</h3>
              </div>
              <p className="text-gray-800 text-base ml-7">For general HR questions and support</p>
              <div className="ml-7 mt-2">
                <p className="flex items-center text-gray-800">
                  <Phone className="h-4 w-4 mr-2 text-gray-800" /> (555) 123-4567
                </p>
                <p className="text-[#000e54] text-base hover:text-[#ff8633]">hr@company.com</p>
              </div>
            </div>
            
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-3">
                <FileText className="h-5 w-5 text-[#000e54] mr-2" />
                <h3 className="font-semibold text-base">Benefits Administration</h3>
              </div>
              <p className="text-gray-800 text-base ml-7">For questions about benefits and enrollment</p>
              <div className="ml-7 mt-2">
                <p className="flex items-center text-gray-800">
                  <Phone className="h-4 w-4 mr-2 text-gray-800" /> (555) 123-4568
                </p>
                <p className="text-[#000e54] text-base hover:text-[#ff8633]">benefits@company.com</p>
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-3">
                <Calendar className="h-5 w-5 text-[#000e54] mr-2" />
                <h3 className="font-semibold text-base">Payroll</h3>
              </div>
              <p className="text-gray-800 text-base ml-7">For payroll and compensation inquiries</p>
              <div className="ml-7 mt-2">
                <p className="flex items-center text-gray-800">
                  <Phone className="h-4 w-4 mr-2 text-gray-800" /> (555) 123-4569
                </p>
                <p className="text-[#000e54] text-base hover:text-[#ff8633]">payroll@company.com</p>
              </div>
            </div>
          </div>
        </section>
    <FAQ faqs={humanresourcesFAQs} />
    <WideDiv/>
    <Footer/>
    </>
  );
}