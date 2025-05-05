import React, { useState } from 'react';
import FAQ from './FAQ';
import Article from './ArticleLayoutCommon';
import Feedback from './Feedback';
import busimage from '/images/honey.png';
import { BookOpen, PieChart, ArrowRight, Code, CheckCircle, RefreshCw, GitBranch, BarChart4 } from 'lucide-react'; 
import { CalendarDays, ClipboardList, LineChart, Clock, FileText, BarChart, Smartphone, Users } from 'lucide-react';

const ProjectManagementContent = () => {
  // faq
  const projectManagementFAQs = [
    {
      question: "How does your project management software improve team productivity?",
      answer: [
        "Centralized task management with real-time updates",
        "Automated workflows to reduce manual processes",
        "Collaboration tools (comments, file sharing, @mentions)",
        "Time tracking and deadline reminders",
        "Integration with popular tools (Slack, Google Drive, etc.)"
      ]
    },
    {
      question: "What key features does your project management tool offer?",
      answer: [
        "Task assignment and progress tracking",
        "Kanban boards, Gantt charts, and calendar views",
        "Customizable dashboards and reporting",
        "Resource allocation and workload management",
        "Mobile access and offline capabilities"
      ]
    },
    {
      question: "Can your software handle Agile and Waterfall methodologies?",
      answer: "Yes, our tool supports both Agile (scrum boards, sprints, burndown charts) and Waterfall (phase-based planning, dependencies) methodologies. You can customize workflows to match your team's preferred approach."
    },
    {
      question: "How does your system handle project documentation?",
      answer: [
        "Features include:",
        "Centralized document storage with version control",
        "Real-time collaborative editing",
        "Templates for project plans, meeting notes, and reports",
        "Secure access permissions for sensitive files",
        "Integration with cloud storage (Google Drive, Dropbox, etc.)"
      ]
    },
    {
      question: "What reporting and analytics capabilities are available?",
      answer: "Our software provides customizable reports on project progress, team performance, budget tracking, and milestone completion. Export data to PDF/Excel or visualize trends with interactive dashboards."
    },
    {
      question: "How secure is project data in your system?",
      answer: [
        "Enterprise-grade security measures:",
        "SOC 2 Type II and GDPR compliance",
        "Encryption for data at rest and in transit",
        "Two-factor authentication (2FA)",
        "Role-based access controls",
        "Regular security audits and backups"
      ]
    },
    {
      question: "Can your tool integrate with our existing software stack?",
      answer: "Yes, we offer native integrations with CRM (Salesforce), communication (Slack, Microsoft Teams), development (GitHub, Jira), and accounting tools (QuickBooks). Our API supports custom integrations."
    },
    {
      question: "How does your pricing model work?",
      answer: "We offer tiered pricing based on team size and features. Options include a free plan for small teams, premium plans with advanced reporting, and enterprise solutions with custom configurations."
    },
    {
      question: "What support and training do you provide?",
      answer: [
        "Support options:",
        "24/5 live chat and email support",
        "Onboarding sessions and video tutorials",
        "Dedicated account manager for enterprise plans",
        "Community forum and knowledge base"
      ]
    },
    {
      question: "How does your software handle remote or distributed teams?",
      answer: [
        "Features designed for remote work:",
        "Time zone-aware scheduling",
        "Async communication tools (comments, threaded discussions)",
        "Mobile app for on-the-go updates",
        "Video call integrations (Zoom, Google Meet)",
        "Offline access with sync capabilities"
      ]
    }
  ];


  const articles = [
    {
      id: 1,
      title: "Agile vs Waterfall: Which Project Management Methodology Fits Your Team?",
      image: "/images/img1project.png",
      author: "Jordan",
      date: "May 12, 2023",
      excerpt:
        "Choosing the right project management approach can make or break your workflow. Agile offers flexibility for fast-moving teams, while Waterfall provides structure for well-defined projects. Learn which method aligns best with your goals...",
      link: "#",
    },
    {
      id: 2,
      title: "Top 5 Project Management Tools in 2024: Features, Pricing & Comparison",
      image: "/images/img2project.png",
      author: "Jordan",
      date: "September 20, 2023",
      excerpt:
        "From Asana to Jira and ClickUp, modern project management tools offer task tracking, collaboration, and automation. We compare the top platforms based on usability, integrations, and pricing to help you choose the best fit...",
      link: "#",
    },
    {
      id: 3,
      title: "Key Features to Look for in Project Management Software",
      image: "/images/img3project.png",
      author: "Jordan",
      date: "January 5, 2024",
      excerpt:
        "Not all project management tools are created equal. Essential features include Gantt charts, Kanban boards, time tracking, team collaboration, and reporting. Discover which capabilities will optimize your workflow...",
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

      const features = [
        {
          title: "Task and workflow management",
          icon: <ClipboardList size={24} color="#000e54" />,
          description: "Create, assign and track tasks through customizable workflows"
        },
        {
          title: "Gantt charts and timeline views",
          icon: <CalendarDays size={24} color="#000e54" />,
          description: "Visualize project schedules and dependencies with interactive timelines"
        },
        {
          title: "Resource management tools",
          icon: <Users size={24} color="#000e54" />,
          description: "Allocate resources efficiently and monitor team capacity"
        },
        {
          title: "Time tracking capabilities",
          icon: <Clock size={24} color="#000e54" />,
          description: "Log hours and monitor time spent on tasks and projects"
        },
        {
          title: "Document management",
          icon: <FileText size={24} color="#000e54" />,
          description: "Store, share and version control project documentation"
        },
        {
          title: "Reporting and analytics",
          icon: <BarChart size={24} color="#000e54" />,
          description: "Generate insights with customizable dashboards and reports"
        },
        {
          title: "Mobile accessibility",
          icon: <Smartphone size={24} color="#000e54" />,
          description: "Access project information on the go via mobile apps"
        },
        {
          title: "Collaboration features",
          icon: <Users size={24} color="#000e54" />,
          description: "Enable team communication and file sharing in one place"
        },
      ];




    return (
        <>
{/* introduction */}
<section id="intro-project" className="py-12 ">
  <div className="max-w-6xl mx-auto px-4">
    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
      {/* Left column - Text content */}
      <div className="mb-10 lg:mb-0">
        <h2 className="text-4xl font-semibold text-gray-900 mb-6">
          Introduction to Project Management Software
        </h2>
        
        <p className="text-base text-gray-800 mb-6">
          Modern project management software helps teams plan, organize, and track work efficiently. 
          This guide covers the essential features, benefits, and selection criteria for choosing 
          the right solution for your business needs.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#000e54] mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Why PM Software is Essential Today
          </h3>
          <p className="text-gray-800 text-base">
            In our remote-first world, project management tools bridge the gap between distributed teams, 
            providing real-time visibility, centralized communication, and automated workflows that keep 
            projects on track regardless of location.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-[#000e54] rounded-md p-2">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="ml-3">
              <h4 className="text-base font-semibold text-gray-800">Productivity Boost</h4>
              <p className="mt-1 text-gray-800 text-base">
                Teams using PM software complete projects 20% faster on average
              </p>
            </div>
          </div>
          
         
        </div>
      </div>
      
      {/* Right column - Image */}
      <div className="relative">
        <img 
          src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/ca/wp-content/uploads/2023/05/best-project-management-software-ca.jpg"
          alt="Team collaborating on project management software" 
          className="rounded-lg shadow-xl w-full h-auto object-cover"
        />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-xl text-gray-900">27%</h4>
              <p className=" text-gray-800 text-base">Higher on-time project completion rate</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 text-xl">30%</h4>
              <p className="text-gray-800 text-base">Reduction in miscommunication</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 text-xl">22%</h4>
              <p className="text-gray-800 text-base">Increase in team collaboration</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 text-xl">$5.87</h4>
              <p className="text-gray-800 text-base">ROI for every $1 spent on PM tools</p>
            </div>
        </div>
  </div>
</section>

{/* what is project management software system */}
<div id="what-is-projectmanagementsoftware" className="rounded-xl max-w-6xl mx-auto p-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-semibold text-gray-900 flex items-center">
          <PieChart className="mr-3 text-[#000e54]" />
          Project Management Software
        </h1>
        <BarChart4 className="text-[#000e54]" size={32} />
      </div>

      {/* Definition Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <BookOpen className="mr-2 text-[#000e54]" />
          Definition & Core Functionality
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-800 text-base mb-4">
              Project management software is a specialized application designed to help teams plan, organize, execute, and monitor projects efficiently. These tools serve as a central hub for project-related information, collaboration, and workflow management.
            </p>
            <p className="text-gray-800 text-base">
              Modern project management solutions enable teams to break down complex initiatives into manageable tasks, assign responsibilities, track progress, and ensure timely completion with optimal resource utilization.
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-xl text-[#000e54] mb-3">Core Functionality</h3>
            <ul className="space-y-3">
              {[
                "Task management and assignment",
                "Scheduling and timeline visualization",
                "Resource allocation and management",
                "Document sharing and collaboration",
                "Progress tracking and reporting",
                "Team communication tools",
                "Budget tracking and financial management",
                "Risk assessment and mitigation"
              ].map((feature, index) => (
                <li key={index} className="flex items-start text-base">
                  <CheckCircle size={18} className="text-[#000e54] mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-800 text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-50 p-5 rounded-lg mt-6">
          <h3 className="font-semibold text-xl text-[#000e54] mb-2">Business Impact</h3>
          <p className="text-gray-800 text-base">
            Effective project management software can increase team productivity by 25%, improve project success rates, reduce overhead costs, and enhance stakeholder satisfaction through improved visibility and communication.
          </p>
        </div>
      </div>

      {/* Evolution Section */}
      <div className="rounded-xl mb-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4 flex items-center">
          <Clock className="mr-2 text-[#000e54]" />
          Evolution of Project Management Tools
        </h2>
        
        <div className="relative">
          <div className="hidden md:block absolute left-6 top-6 w-1 h-full bg-indigo-200"></div>
          
          <div className="space-y-10 relative">
            {[
              {
                era: "1980s-1990s: Early Digital Era",
                icon: <Code size={24} className="text-[#000e54]" />,
                description: "Project management began with simple desktop applications, spreadsheets, and basic scheduling tools. Microsoft Excel and early versions of Microsoft Project dominated this space, offering rudimentary planning capabilities focused primarily on timeline management.",
                features: ["Manual data entry", "Basic Gantt charts", "Single-user focused", "Limited collaboration"]
              },
              {
                era: "2000s: Web-Based Solutions",
                icon: <BarChart4 size={24} className="text-[#000e54]" />,
                description: "The introduction of web-based tools revolutionized project management by enabling remote collaboration. Solutions like Basecamp pioneered cloud-based project management, making it possible for distributed teams to work together more effectively.",
                features: ["Multi-user access", "Real-time updates", "Document sharing", "Basic reporting"]
              },
              {
                era: "2010s: Specialized & Integrated Tools",
                icon: <GitBranch size={24} className="text-[#000e54]" />,
                description: "This decade saw the rise of specialized tools catering to different methodologies and industries. Jira became prominent for software development, while tools like Asana and Trello introduced visual approaches to task management with boards and cards.",
                features: ["Methodology-specific features", "Visual workflows", "Advanced reporting", "Open APIs for integration"]
              },
              {
                era: "2020s: AI-Enhanced Solutions",
                icon: <RefreshCw size={24} className="text-[#000e54]" />,
                description: "Modern project management software incorporates artificial intelligence for predictive analytics, automated task assignment, and intelligent resource allocation. Tools now offer comprehensive ecosystems with advanced features for complex project management needs.",
                features: ["AI-powered insights", "Predictive analytics", "Automation capabilities", "Cross-platform integration", "Advanced visualization"]
              }
            ].map((period, index) => (
              <div key={index} className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-3 md:mb-0">
                  <div className="flex items-center">
                    <div className="hidden md:flex h-12 w-12 rounded-full bg-blue-100 items-center justify-center mr-4 border-4 border-white z-10">
                      {period.icon}
                    </div>
                    <h3 className="font-semibold text-[#000e54] text-xl">{period.era}</h3>
                  </div>
                </div>
                <div className="md:w-2/3 bg-gray-50 p-4 rounded-lg shadow-sm">
                  <p className="text-gray-800 text-base mb-3">{period.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {period.features.map((feature, i) => (
                      <span key={i} className="bg-blue-100 text-[#000e54] px-2 py-1 rounded-md text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
       {/* Approaches Section */}
       <div className="mb-16 rounded-xl ">
        <h2 className="text-4xl font-semibold text-gray-900 mb-8 text-center">
          Project Management Approaches
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Waterfall */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                className="text-blue-500"
              >
                <path
                  d="M10 10 L10 30 L40 30 L40 50 L70 50 L70 70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <circle cx="10" cy="10" r="5" fill="currentColor" />
                <circle cx="10" cy="30" r="5" fill="currentColor" />
                <circle cx="40" cy="30" r="5" fill="currentColor" />
                <circle cx="40" cy="50" r="5" fill="currentColor" />
                <circle cx="70" cy="50" r="5" fill="currentColor" />
                <circle cx="70" cy="70" r="5" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Waterfall</h3>
            <p className="text-gray-800 text-base text-center mb-4">
              Linear, sequential approach with distinct phases
            </p>
          </div>
          
          {/* Agile */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                className="text-green-500"
              >
                <circle cx="40" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="3" />
                <circle cx="20" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="3" />
                <circle cx="40" cy="60" r="15" fill="none" stroke="currentColor" strokeWidth="3" />
                <circle cx="60" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="3" />
                <path
                  d="M40 5 A15 15 0 0 1 55 20 M55 20 A15 15 0 0 1 40 35 M40 35 A15 15 0 0 1 25 20 M25 20 A15 15 0 0 1 40 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Agile</h3>
            <p className="text-gray-800 text-base text-center mb-4">
              Iterative approach with flexible planning
            </p>
          </div>
          
          {/* Scrum */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                className="text-purple-500"
              >
                <rect x="20" y="20" width="40" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="3" />
                <path
                  d="M20 30 L60 30 M20 40 L60 40 M20 50 L60 50"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="30" cy="25" r="3" fill="currentColor" />
                <circle cx="30" cy="35" r="3" fill="currentColor" />
                <circle cx="30" cy="45" r="3" fill="currentColor" />
                <circle cx="30" cy="55" r="3" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Scrum</h3>
            <p className="text-gray-800 text-base text-center mb-4">
              Framework within Agile for complex work
            </p>
          </div>
          
          {/* Hybrid */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                className="text-yellow-500"
              >
                <path
                  d="M10 20 L40 20 L40 60 L70 60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  d="M20 40 L20 70 M30 30 L30 60 M50 10 L50 40 M60 20 L60 50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <circle cx="10" cy="20" r="5" fill="currentColor" />
                <circle cx="40" cy="20" r="5" fill="currentColor" />
                <circle cx="40" cy="60" r="5" fill="currentColor" />
                <circle cx="70" cy="60" r="5" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Hybrid</h3>
            <p className="text-gray-800 text-base text-center mb-4">
              Combines Waterfall and Agile elements
            </p>
          </div>
        </div>
      </div>
</div>

{/* how does project management software works */}
    <div id="projectmanagementsoftware-working" className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl  font-semibold text-gray-900 mb-6">
          How Project Management Software Works
        </h1>
        <p className="text-base text-gray-800 max-w-3xl mx-auto">
          Modern project management tools streamline complex workflows through intelligent features and integrations.
        </p>
        <div className="mt-8 flex justify-center">
          <svg className="w-64 h-64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="25" width="150" height="150" rx="15" fill="#EFF6FF"/>
            <rect x="40" y="40" width="60" height="40" rx="5" fill="#3B82F6" opacity="0.8"/>
            <rect x="110" y="40" width="50" height="20" rx="5" fill="#10B981" opacity="0.8"/>
            <rect x="110" y="70" width="50" height="20" rx="5" fill="#F59E0B" opacity="0.8"/>
            <rect x="40" y="90" width="120" height="30" rx="5" fill="#8B5CF6" opacity="0.8"/>
            <rect x="40" y="130" width="80" height="20" rx="5" fill="#EC4899" opacity="0.8"/>
            <rect x="130" y="130" width="30" height="20" rx="5" fill="#6366F1" opacity="0.8"/>
            <path d="M60 60L90 60" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <path d="M60 70L80 70" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
            <path d="M125 50L145 50" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M125 60L140 60" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
            <path d="M50 100L140 100" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <path d="M50 110L120 110" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
            <path d="M50 120L90 120" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
            <path d="M50 140L110 140" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M140 140L160 140" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Key Components Section */}
      <div className="mb-16">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-12">Core Components of Project Management Software</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Task Management */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-blue-50 p-6 flex justify-center">
              <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5V5Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12H15" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 16H15" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Task Management</h3>
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-start text-base">
                  <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Create, assign, and track tasks with deadlines</span>
                </li>
                <li className="flex items-start text-base">
                  <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Set priorities and dependencies between tasks</span>
                </li>
                <li className="flex items-start text-base">
                  <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Visualize workflows with Kanban boards or Gantt charts</span>
                </li>
                <li className="flex items-start text-base">
                  <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Track time spent on tasks and milestones</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Team Collaboration */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-green-50 p-6 flex justify-center">
              <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Team Collaboration</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start text-base">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Centralized communication with comments and @mentions</span>
                </li>
                <li className="flex items-start text-base">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>File sharing and document collaboration</span>
                </li>
                <li className="flex items-start text-base">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Real-time updates and notifications</span>
                </li>
                <li className="flex items-start text-base">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Role-based permissions and access control</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Reporting */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-purple-50 p-6 flex justify-center">
              <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 17V7M15 17V11M21 21H3M3 21V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V21Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Reporting & Analytics</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start text-base">
                  <svg className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Customizable dashboards with key metrics</span>
                </li>
                <li className="flex items-start text-base">
                  <svg className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Burndown charts and velocity tracking</span>
                </li>
                <li className="flex items-start text-base">
                  <svg className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Resource utilization and workload reports</span>
                </li>
                <li className="flex items-start text-base">
                  <svg className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Exportable reports in multiple formats (PDF, CSV)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Automation Section */}
      <div className="mb-16  rounded-xl ">
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">Workflow Automation</h2>
            <p className="text-gray-800 text-base mb-6">
              Modern project management tools reduce manual work through intelligent automation that handles repetitive tasks and enforces processes.
            </p>
            <div className="space-y-4">
              <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="h-6 w-6 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-base">Trigger-Based Actions</h3>
                  <p className="text-gray-800 text-base">Automatically assign tasks, send notifications, or update statuses when specific conditions are met.</p>
                </div>
              </div>
              <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="h-6 w-6 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-base">Approval Workflows</h3>
                  <p className="text-gray-800 text-base">Route documents and tasks through predefined approval chains with escalation rules.</p>
                </div>
              </div>
              <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="h-6 w-6 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-base text-gray-800">Template Reuse</h3>
                  <p className="text-gray-800 text-base">Save and replicate project templates for common workflows to maintain consistency.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <svg className="w-full max-w-md" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="25" y="25" width="150" height="150" rx="15" fill="white" stroke="#6366F1" strokeWidth="2"/>
              <circle cx="70" cy="70" r="15" fill="#6366F1" opacity="0.2"/>
              <path d="M70 55V85M55 70H85" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
              <rect x="50" y="105" width="40" height="10" rx="5" fill="#6366F1" opacity="0.7"/>
              <rect x="110" cy="70" r="15" fill="#10B981" opacity="0.2"/>
              <path d="M125 70L110 80V60L125 70Z" fill="#10B981" opacity="0.8"/>
              <rect x="110" y="105" width="40" height="10" rx="5" fill="#10B981" opacity="0.7"/>
              <path d="M70 70L110 70" stroke="#A5B4FC" strokeWidth="2" strokeDasharray="4 4"/>
              <path d="M70 110L110 110" stroke="#A5B4FC" strokeWidth="2" strokeDasharray="4 4"/>
              <path d="M70 130L110 130" stroke="#A5B4FC" strokeWidth="2" strokeDasharray="4 4"/>
              <path d="M70 150L110 150" stroke="#A5B4FC" strokeWidth="2" strokeDasharray="4 4"/>
              <path d="M50 130L70 130" stroke="#6366F1" strokeWidth="2"/>
              <path d="M110 130L130 130" stroke="#10B981" strokeWidth="2"/>
              <path d="M50 150L70 150" stroke="#6366F1" strokeWidth="2"/>
              <path d="M110 150L130 150" stroke="#10B981" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Integration Section */}
      <div className="rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 md:p-12 ">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Integration with Business Tools</h2>
            <p className="text-gray-800 text-base mb-6">
              Project management software connects with your existing tech stack to create a seamless workflow ecosystem.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <span className="font-semibold text-base text-gray-800">Accounting</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="font-semibold text-base text-gray-800">CRM</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <div className="bg-purple-100 p-2 rounded-lg mr-3">
                  <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-semibold text-base text-gray-800">Calendar</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <div className="bg-red-100 p-2 rounded-lg mr-3">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-semibold text-base text-gray-800">Email</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                  <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <span className="font-semibold text-base text-gray-800">Design Tools</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-semibold text-base text-gray-800">Development</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-8 md:p-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">How Integrations Work</h3>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 font-bold">1</div>
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-gray-800">Native Integrations</h4>
                  <p className="text-gray-800 text-base mt-1">
                    Built-in connections to popular tools like Slack, Google Drive, and Microsoft Teams that work out of the box.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 text-green-600 font-bold">2</div>
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-gray-900">API Access</h4>
                  <p className="text-gray-800 text-base mt-1">
                    Developer-friendly APIs that allow custom integrations with proprietary or niche business systems.
                  </p>
                </div>
              </div>
            </div>
        </div>
    </div>
    </div>
    </div>

{/* approach */}
<section id="projectmanagementsoftware-approach" className="max-w-6xl mx-auto p-4">
    {/* agile */}
<div  className="rounded-2xl">
      <div className="text-center mb-10">
        <h2 className="text-4xl  font-semibold text-gray-800 mb-3">The Agile Approach</h2>
        <p className="text-base text-gray-800 max-w-3xl mx-auto">
          A flexible, iterative methodology that emphasizes collaboration, customer feedback, and rapid delivery in project management.
        </p>
      </div>

      <div className="space-y-12">
        {/* Core Principles Section */}
        <section className="bg-white rounded-xl">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Core Principles</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-[#000e54] mb-3 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-[#000e54]">1</span>
                Customer Collaboration
              </h4>
              <p className="text-gray-800 text-base">
                Prioritize customer satisfaction through continuous delivery of valuable software and welcome changing requirements.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-[#000e54] mb-3 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-[#000e54]">2</span>
                Iterative Development
              </h4>
              <p className="text-gray-800 text-base">
                Deliver working software frequently in short timescales (weeks rather than months) with a preference for shorter timescales.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-[#000e54] mb-3 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-[#000e54]">3</span>
                Self-Organizing Teams
              </h4>
              <p className="text-gray-800 text-base">
                Build projects around motivated individuals. Give them the environment and support they need and trust them to get the job done.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-[#000e54] mb-3 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-[#000e54]">4</span>
                Sustainable Pace
              </h4>
              <p className="text-gray-800 text-base">
                Agile processes promote sustainable development. Sponsors, developers, and users should be able to maintain a constant pace indefinitely.
              </p>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="bg-white max-w-6xl mx-auto rounded-xl">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Key Benefits</h3>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start p-4 hover:bg-blue-50 rounded-lg transition-colors">
              <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1 flex-shrink-0">
                <svg className="w-6 h-6 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Faster Time-to-Market</h4>
                <p className="text-gray-800 text-base">
                  By delivering working software in iterations, features reach users quicker, providing early value and competitive advantage.
                </p>
              </div>
            </div>
            <div className="flex items-start p-4 hover:bg-blue-50 rounded-lg transition-colors">
              <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1 flex-shrink-0">
                <svg className="w-6 h-6 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Improved Quality</h4>
                <p className="text-gray-800 text-base">
                  Continuous testing and integration throughout the development cycle results in higher quality products with fewer defects.
                </p>
              </div>
            </div>
            <div className="flex items-start p-4 hover:bg-blue-50 rounded-lg transition-colors">
              <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1 flex-shrink-0">
                <svg className="w-6 h-6 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Increased Flexibility</h4>
                <p className="text-gray-800 text-base">
                  Agile teams can quickly adapt to changing requirements and priorities without derailing the entire project.
                </p>
              </div>
            </div>
            <div className="flex items-start p-4 hover:bg-blue-50 rounded-lg transition-colors">
              <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1 flex-shrink-0">
                <svg className="w-6 h-6 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Better Risk Management</h4>
                <p className="text-gray-600">
                  Regular reviews and iterations help identify and mitigate risks early in the development process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Practices Section */}
        <section className="bg-white rounded-xl">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Common Practices</h3>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="border-l-4 border-[#000e54] pl-5 py-3  rounded-r-lg transition-colors">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Sprints</h4>
              <p className="text-gray-800 text-base">
                Time-boxed iterations (typically 1-4 weeks) where teams complete a set amount of work from the product backlog.
              </p>
            </div>
            <div className="border-l-4 border-[#000e54] pl-5 py-3  rounded-r-lg transition-colors">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Daily Stand-ups</h4>
              <p className="text-gray-800 text-base">
                Short daily meetings where team members share progress, plans, and blockers to maintain alignment.
              </p>
            </div>
            <div className="border-l-4 border-[#000e54] pl-5 py-3  rounded-r-lg transition-colors">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Backlog Refinement</h4>
              <p className="text-gray-800 text-base">
                Regular review and prioritization of the product backlog to ensure upcoming work is well-defined and estimated.
              </p>
            </div>
            <div className="border-l-4 border-[#000e54] pl-5 py-3  rounded-r-lg transition-colors">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Retrospectives</h4>
              <p className="text-gray-800 text-base">
                Periodic meetings where teams reflect on their processes and identify improvements for future iterations.
              </p>
            </div>
            <div className="border-l-4 border-[#000e54] pl-5 py-3  rounded-r-lg transition-colors">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Continuous Integration</h4>
              <p className="text-gray-800 text-base">
                Frequent merging of code changes into a shared repository, accompanied by automated builds and tests.
              </p>
            </div>
            <div className="border-l-4 border-[#000e54] pl-5 py-3  rounded-r-lg transition-colors">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">User Stories</h4>
              <p className="text-gray-800 text-base">
                Requirements expressed from the end-user perspective, focusing on the value delivered rather than technical specifications.
              </p>
            </div>
          </div>
        </section>

        {/* Implementation Section */}
        <section className="bg-white rounded-xl">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Implementation in Project Management</h3>
          </div>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Agile Features in Project Management Tools</h4>
              <p className="text-gray-800 text-base mb-6">
                Modern project management tools support Agile methodologies through specialized features:
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-[#000e54] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="text-gray-800 text-base">Kanban boards for visualizing workflow</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-[#000e54] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="text-gray-800 text-base">Sprint planning tools</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-[#000e54] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="text-gray-800 text-base">Burndown charts for tracking progress</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-[#000e54] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="text-gray-800 text-base">Backlog management systems</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-[#000e54] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="text-gray-800 text-base">Collaboration features for distributed teams</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-[#000e54] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="text-gray-800 text-base">Integration with development tools</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="text-xl font-semibold text-[#000e54] mb-4">Getting Started with Agile</h4>
              <p className="text-gray-800 text-base mb-4">
                To implement Agile in your project management:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-800 text-base pl-2 marker:font-semibold marker:text-[#000e54]">
                <li className="pl-2">Start with small, cross-functional teams</li>
                <li className="pl-2">Define clear but flexible project goals</li>
                <li className="pl-2">Break work into small, manageable user stories</li>
                <li className="pl-2">Establish regular feedback loops with stakeholders</li>
                <li className="pl-2">Embrace change rather than resist it</li>
                <li className="pl-2">Continuously measure and improve your processes</li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </div>

    {/* waterfall */}
    <div className="max-w-6xl mx-auto rounded-2xl">
      <div className="text-center mt-10 mb-10">
        <h2 className="text-4xl font-semibold text-[#000e54] mb-3">The Waterfall Methodology</h2>
        <p className="text-base text-gray-800 max-w-3xl mx-auto">
          A linear, sequential approach to project management where each phase must be completed before the next begins.
        </p>
      </div>

      <div className="space-y-12">
        {/* Core Principles Section */}
        <section className="bg-white rounded-xl">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Core Principles</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg transition-shadow">
              <h4 className="text-xl font-semibold text-[#000e54] mb-3 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-[#000e54]">1</span>
                Sequential Phases
              </h4>
              <p className="text-gray-800 text-base">
                Projects progress through clearly defined phases in strict order, with each phase building on the deliverables of the previous one.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg transition-shadow">
              <h4 className="text-xl font-semibold text-[#000e54] mb-3 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-[#000e54]">2</span>
                Comprehensive Documentation
              </h4>
              <p className="text-gray-800 text-base">
                Each phase requires complete documentation before moving forward, ensuring clear requirements and design specifications.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg  transition-shadow">
              <h4 className="text-xl font-semibold text-[#000e54] mb-3 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-[#000e54]">3</span>
                Fixed Requirements
              </h4>
              <p className="text-gray-800 text-base">
                Requirements are gathered and fixed at the beginning, with changes discouraged once the project begins.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg  transition-shadow">
              <h4 className="text-xl font-semibold text-[#000e54] mb-3 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-[#000e54]">4</span>
                Emphasis on Planning
              </h4>
              <p className="text-gray-800 text-base">
                Extensive upfront planning with detailed schedules, budgets, and resource allocation before execution begins.
              </p>
            </div>
          </div>
        </section>

        {/* Phases Section */}
        <section className="bg-white rounded-xl">
          <div className="flex items-center mb-6">
            <div className="bg-indigo-100 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Waterfall Phases</h3>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-[#000e54] transform -translate-x-1/2"></div>
            
            {/* Phases */}
            <div className="space-y-12 md:space-y-0">
              {/* Phase 1 */}
              <div className="relative md:flex items-center">
                <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-[#000e54] rounded-full transform -translate-x-1/2 -translate-y-1/2 text-white text-center">1</div>
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h4 className="text-xl font-semibold text-gray-800">Requirements</h4>
                  <p className="text-gray-800 text-base mt-2">
                    All possible project requirements are gathered and documented in detail.
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
              
              {/* Phase 2 */}
              <div className="relative md:flex items-center">
                <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-[#000e54] rounded-full transform -translate-x-1/2 -translate-y-1/2 text-white text-center">2</div>
                <div className="hidden md:block md:w-1/2"></div>
                <div className="md:w-1/2 md:pl-12">
                  <h4 className="text-xl font-semibold text-[#000e54]">System Design</h4>
                  <p className="text-gray-800 text-base mt-2">
                    Requirements are translated into complete system design specifications.
                  </p>
                </div>
              </div>
              
              {/* Phase 3 */}
              <div className="relative md:flex items-center">
                <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-[#000e54] rounded-full transform -translate-x-1/2 -translate-y-1/2 text-white text-center">3</div>
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h4 className="text-xl font-semibold text-[#000e54]">Implementation</h4>
                  <p className="text-gray-800 text-base mt-2">
                    Developers write code according to the design specifications.
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
              
              {/* Phase 4 */}
              <div className="relative md:flex items-center">
                <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-[#000e54] rounded-full transform -translate-x-1/2 -translate-y-1/2 text-white text-center">4</div>
                <div className="hidden md:block md:w-1/2"></div>
                <div className="md:w-1/2 md:pl-12">
                  <h4 className="text-xl font-semibold text-[#000e54]">Testing</h4>
                  <p className="text-gray-800 text-base mt-2">
                    The system is tested against requirements to identify defects.
                  </p>
                </div>
              </div>
              
              {/* Phase 5 */}
              <div className="relative md:flex items-center">
                <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-[#000e54] rounded-full transform -translate-x-1/2 -translate-y-1/2 text-white text-center">5</div>
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h4 className="text-xl font-semibold text-[#000e54]">Deployment</h4>
                  <p className="text-gray-800 text-base mt-2">
                    The finished product is delivered to customers and deployed.
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
              
              {/* Phase 6 */}
              <div className="relative md:flex items-center">
                <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-[#000e54] rounded-full transform -translate-x-1/2 -translate-y-1/2 text-white text-center">6</div>
                <div className="hidden md:block md:w-1/2"></div>
                <div className="md:w-1/2 md:pl-12">
                  <h4 className="text-xl font-semibold text-[#000e54]">Maintenance</h4>
                  <p className="text-gray-800 text-base mt-2">
                    Issues are fixed and updates are made based on user feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="bg-white rounded-xl">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Key Benefits</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start p-4  rounded-lg transition-colors">
              <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1 flex-shrink-0">
                <svg className="w-6 h-6 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-800 mb-2">Clear Structure</h4>
                <p className="text-gray-800 text-base">
                  Provides a well-defined, organized framework that's easy to understand and follow.
                </p>
              </div>
            </div>
            <div className="flex items-start p-4 hover:bg-blue-50 rounded-lg transition-colors">
              <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1 flex-shrink-0">
                <svg className="w-6 h-6 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-800 mb-2">Detailed Documentation</h4>
                <p className="text-gray-600">
                  Comprehensive records at each phase provide clarity and reference points.
                </p>
              </div>
            </div>
            <div className="flex items-start p-4 hover:bg-blue-50 rounded-lg transition-colors">
              <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1 flex-shrink-0">
                <svg className="w-6 h-6 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-800 mb-2">Predictability</h4>
                <p className="text-gray-800 text-base">
                  Fixed requirements and timelines make budgeting and resource allocation more predictable.
                </p>
              </div>
            </div>
            <div className="flex items-start p-4 hover:bg-blue-50 rounded-lg transition-colors">
              <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1 flex-shrink-0">
                <svg className="w-6 h-6 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-800 mb-2">Easy to Measure Progress</h4>
                <p className="text-gray-800 text-base">
                  Clear milestones make it simple to track progress against the plan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When to Use Section */}
        <section className="bg-white rounded-xl">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">When to Use Waterfall</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-yellow-100">
              <h4 className="text-xl font-semibold text-[#000e54] mb-3">Ideal Scenarios</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-[#000e54] rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                  <span>Projects with clear, fixed requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-[#000e54] rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                  <span>Short duration projects with predictable outcomes</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-[#000e54] rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                  <span>When working with familiar technology</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-[#000e54] rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                  <span>When regulatory compliance requires extensive documentation</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-red-100">
              <h4 className="text-xl font-semibold text-[#000e54] mb-3">Potential Challenges</h4>
              <ul className="space-y-3 text-gray-600 text-base">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-[#000e54] rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">!</span>
                  <span>Difficult to accommodate changes once started</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-[#000e54] rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">!</span>
                  <span>Working software isn't produced until late in the cycle</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-[#000e54] rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">!</span>
                  <span>Higher risk of project failure if requirements are misunderstood</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-[#000e54] rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">!</span>
                  <span>Less flexibility for innovation during development</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Section */}
        <section className="bg-white rounded-xl">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Implementation in Project Management</h3>
          </div>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Waterfall Features in Project Management Tools</h4>
              <p className="text-gray-800 text-base mb-6">
                Traditional project management tools support Waterfall through these features:
              </p>
              <ul className="grid text-base md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-[#000e54] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="text-gray-800">Gantt charts for detailed scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-[#000e54] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="text-gray-800">Work breakdown structures</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-[#000e54] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="text-gray-800">Milestone tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-[#000e54] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="text-gray-800">Document management systems</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-[#000e54] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="text-gray-800">Critical path analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-[#000e54] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="text-gray-800">Resource allocation tools</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-2">
              <h4 className="text-xl font-semibold text-[#000e54] mb-4">Best Practices for Waterfall</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-800 pl-2 marker:font-semibold marker:text-[#000e54] text-base">
                <li className="pl-2">Invest significant time in requirements gathering</li>
                <li className="pl-2">Create detailed documentation at each phase</li>
                <li className="pl-2">Establish clear approval processes between phases</li>
                <li className="pl-2">Define measurable milestones and deliverables</li>
                <li className="pl-2">Allocate contingency time for unexpected issues</li>
                <li className="pl-2">Maintain strict change control procedures</li>
              </ol>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 text-center">
        <div className="inline-block bg-blue-100 px-6 py-3 rounded-full">
          <p className="text-[#000e54] font-xl">
            Waterfall methodology provides structure and predictability for well-defined projects with stable requirements.
          </p>
        </div>
      </div>
    </div>

</section>




{/*Features Section */}
 <div id="project-feature" className="max-w-6xl mx-auto min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-10 text-gray-900">
          Key Features to Look for in Project Management Software
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6 flex items-start">
              <div className="mr-4 p-3 rounded-full">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-800 mb-1">{feature.title}</h3>
                <p className="text-gray-800 text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>




{/* <!-- Comprehensive Related Software Solutions Section --> */}
<section id="project-ecosystem" class="related-solutions max-w-6xl mx-auto p-4">
  <div class="container mx-auto">
    <div class="text-center mb-10">
      <h2 class="text-4xl font-semibold text-gray-900 mb-3">Complete Business Software Ecosystem</h2>
      <p class="text-gray-800 max-w-3xl mx-auto text-base">Discover our comprehensive guides to the best business software solutions across departments. Find the perfect tools to optimize your operations.</p>
    </div>
    
    {/* <!-- Software Categories Grid --> */}
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* <!-- Marketing Solutions --> */}
      <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
        <div class="bg-[#000e54] px-6 py-4">
          <h3 class="text-xl font-semibold text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
            Marketing Solutions
          </h3>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="p-5">
            <a href="/BestCRMSoftware" class="block">
              <h4 class="text-xl font-semibold text-[#000e54] hover:text-orange-500 transition-colors mb-2">Best CRM Software</h4>
              <p class="text-gray-800 text-base">Customer relationship management tools to track leads and nurture client relationships.</p>
            </a>
          </div>
          <div class="p-5">
            <a href="/EmailMarketing" class="block">
              <h4 class="text-xl font-semibold text-[#000e54] hover:text-orange-500 transition-colors mb-2">Best Email Marketing Services</h4>
              <p class="text-gray-800 text-base">Platforms for creating, sending, and analyzing email campaigns to engage customers.</p>
            </a>
          </div>
          <div class="p-5">
            <a href="/BestWebsiteBuildingPlatform" class="block">
              <h4 class="text-xl font-semibold text-[#000e54] hover:text-orange-500 transition-colors mb-2">Best Website Building Platforms</h4>
              <p class="text-gray-800 text-base">Tools to create professional websites without coding knowledge or developer resources.</p>
            </a>
          </div>
        </div>
      </div>
      
      {/* <!-- Technology Solutions --> */}
      <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
        <div class="bg-[#000e54] px-6 py-4">
          <h3 class="text-xl font-semibold text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            Technology Infrastructure
          </h3>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="p-5">
            <a href="/phone-systems" class="block">
              <h4 class="text-xl font-semibold text-[#000e54] hover:text-orange-500 transition-colors mb-2">Business Phone Systems</h4>
              <p class="text-gray-800 text-base">Modern communication solutions including VoIP, PBX systems, and unified communications.</p>
            </a>
          </div>
          <div class="p-5">
            <a href="/GpsFleetMangement" class="block">
              <h4 class="text-xl font-semibold text-[#000e54] hover:text-orange-500 transition-colors mb-2">GPS Fleet Management Software</h4>
              <p class="text-gray-800 text-base">Tools for tracking vehicles, optimizing routes, and managing driver performance.</p>
            </a>
          </div>
          <div class="p-5">
            <a href="/BestEmployeeMangementSoftware" class="block">
              <h4 class="text-xl font-semibold text-[#000e54] hover:text-orange-500 transition-colors mb-2">Best Employee Management Software</h4>
              <p class="text-gray-800 text-base">HR solutions for tracking time, managing performance, and streamlining administrative tasks.</p>
            </a>
          </div>
        </div>
      </div>
      
      {/* <!-- Sales Solutions --> */}
      <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
        <div class="bg-[#000e54] px-6 py-4">
          <h3 class="text-xl font-semibold text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Sales & Customer Service
          </h3>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="p-5">
            <a href="/BestCRMSoftware" class="block">
              <h4 class="text-xl font-semibold text-[#000e54] hover:text-orange-500 transition-colors mb-2">Best CRM Software</h4>
              <p class="text-gray-800 text-base">Tools to manage sales pipelines, track deals, and improve sales team performance.</p>
            </a>
          </div>
          <div class="p-5">
            <a href="/Callcenter" class="block">
              <h4 class="text-xl font-semibold text-[#000e54] hover:text-orange-500 transition-colors mb-2">Best Call Center Management Software</h4>
              <p class="text-gray-800 text-base">Solutions for managing inbound and outbound calls, IVR systems, and customer support.</p>
            </a>
          </div>
          <div class="p-5 bg-orange-50 border-l-4 border-orange-500">
            <div>
              <h4 class="text-xl font-semibold text-[#000e54] mb-2">Best Project Management Software</h4>
              <p class="text-gray-800 text-base">Tools for planning, tracking, and delivering projects on time and within budget.</p>
              <span class="inline-block mt-2 bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">Current Page</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* <!-- Featured Comparison --> */}
    <div class="mt-12 bg-[#000e54] rounded-xl shadow-lg p-8 text-white">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="mb-6 md:mb-0 md:mr-8">
          <h3 class="text-2xl font-bold mb-3">Find Your Ideal Software Stack</h3>
          <p class="text-blue-100 mb-4">Our comprehensive comparisons help you evaluate features, pricing, and user experiences across top software solutions for businesses of all sizes.</p>
          <ul class="space-y-2">
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-orange-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Side-by-side feature comparisons</span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-orange-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Pricing breakdowns for all budgets</span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-orange-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Unbiased reviews from actual users</span>
            </li>
          </ul>
        </div>
        <div class="text-center md:text-right">
          <a href="/software-comparison-tool" class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-md text-center">
            Compare All Software
          </a>
          <p class="mt-3 text-sm text-blue-200 text-center">Find the perfect fit for your business needs</p>
        </div>
      </div>
    </div>
  </div>
</section>





 {/* <!-- Future Trends Section --> */}
<section id="project-trends" class="future-trends py-12 max-w-6xl mx-auto p-4">
  <div class="container mx-auto">
    <div class="text-center mb-10">
      <h2 class="text-4xl font-semibold text-gray-900">Future Trends in Project Management Tools</h2>
      <p class="text-base text-gray-800 mt-2">Emerging technologies shaping the next generation of project management software</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* <!-- AI and Automation --> */}
      <div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
        <div class="h-2 bg-[#000e54]"></div>
        <div class="p-6">
          <div class="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[#000e54] mb-3">AI and Automation</h3>
          <p class="text-gray-800 text-base mb-4">Artificial intelligence is revolutionizing project management by automating routine tasks and providing smart recommendations.</p>
          <ul class="space-y-2 text-base text-gray-800">
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[#000e54] mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Intelligent task assignment based on team member skills</span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[#000e54] mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Automated progress reporting and status updates</span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[#000e54] mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Smart suggestions for resource allocation and scheduling</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* <!-- Predictive Analytics --> */}
      <div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
        <div class="h-2 bg-[#000e54]"></div>
        <div class="p-6">
          <div class="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[#000e54] mb-3">Predictive Analytics</h3>
          <p class="text-gray-800 text-base mb-4">Advanced analytics tools help project managers forecast outcomes and identify potential risks before they impact projects.</p>
          <ul class="space-y-2 text-gray-800 text-base">
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[#000e54] mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Budget forecasting based on historical project data</span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[#000e54] mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Early risk detection and mitigation recommendations</span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[#000e54] mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Deadline probability analysis and timeline optimization</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* <!-- Remote Work Optimization --> */}
      <div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
        <div class="h-2 bg-[#000e54]"></div>
        <div class="p-6">
          <div class="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[#000e54] mb-3">Remote Work Optimization</h3>
          <p class="text-gray-800 text-base mb-4">Project management tools are evolving to better support distributed teams and flexible work arrangements.</p>
          <ul class="space-y-2 text-gray-800 text-base">
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[#000e54] mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Virtual collaboration spaces with real-time editing</span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[#000e54] mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Asynchronous communication and workflow tools</span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[#000e54] mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Global team performance tracking and time zone management</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="mt-10 p-6 bg-[#000e54] rounded-lg shadow-md text-white text-center">
      <h3 class="text-xl font-bold mb-3">Stay Ahead of the Curve</h3>
      <p class="mb-4">The future of project management is evolving rapidly. Choose tools that incorporate these emerging technologies to position your team for success.</p>
      <a href="/project-management-trends" class="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded transition-colors font-medium">
        Learn More About PM Trends
      </a>
    </div>
  </div>
</section>


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
      <div id="project-faq" className="">
        <FAQ faqs={ projectManagementFAQs} />
      </div>

      {/* feedback */}
      {/* <Feedback 
        title="What Our Customers Say"
        testimonials={homeTestimonials}
      /> */}
        </>
    );
};

export default ProjectManagementContent;