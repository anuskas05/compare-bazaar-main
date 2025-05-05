import { useState } from 'react';
import React from "react";
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';
import { 
    Cloud, Database, Shield, Code, Server, Cpu, BarChart2, HardDrive, 
    Lock, Key, Puzzle, GitMerge, Globe, Wifi, Phone, MapPin, LayoutGrid, 
    Brain, RadioTower, Link2,Smartphone,Users  } from "lucide-react";
import Article from './ArticleLayoutCommon';
import busimage from '/images/honey.png';
import FAQ from './FAQ';

const Technology = () => {
    const [expandedService, setExpandedService] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleService = (service) => {
        if (expandedService === service) {
          setExpandedService(null);
        } else {
          setExpandedService(service);
        }
      };

      const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
      };

      const technologyServices = [
        {
          title: "Business Phone Systems",
          description: "Modern VoIP solutions that provide crystal-clear call quality, advanced features, and seamless integration with your business applications.",
          features: ["Cloud-based PBX", "Auto-attendant", "Call routing", "Conference calling", "Mobile integration"],
          icon: Smartphone,
          link: "/phone-systems"
        },
        {
          title: "GPS Fleet Management",
          description: "Real-time tracking and analytics to optimize your fleet operations, reduce costs, and improve customer service with precise location data.",
          features: ["Real-time tracking", "Route optimization", "Driver behavior monitoring", "Maintenance alerts", "Fuel management"],
          icon: Wifi,
          link: "/GpsFleetMangement"
        },
        {
          title: "Employee Management Software",
          description: "Comprehensive workforce solutions that streamline scheduling, time tracking, and performance management for businesses of all sizes.",
          features: ["Time & attendance", "Scheduling", "Task management", "Performance tracking", "Payroll integration"],
          icon: HardDrive,
          link: "/BestEmployeeMangementSoftware"
        },
        {
          "title": "Best CRM Software",
          "description": "Powerful Customer Relationship Management (CRM) tools to streamline sales, improve customer interactions, and boost business growth with automation and analytics.",
          "features": [
            "Contact & lead management",
            "Sales pipeline tracking",
            "Email & campaign automation",
            "Reporting & analytics",
            "Integration with third-party tools (e.g., email, social media)"
          ],
          "icon": Users,  
          "link": "/BestCRMSoftware"
        },
      ];
    
      const successMetrics = [
        { label: "System Uptime", value: "99.99%", description: "Guaranteed reliability" },
        { label: "Implementation", value: "2-4 Weeks", description: "Average deployment time" },
        { label: "Cost Reduction", value: "35%", description: "Average savings for clients" },
        { label: "Client Satisfaction", value: "98%", description: "Would recommend our services" }
      ];
    
      const navigationLinks = [
        { name: "Home", url: "/" },
        { name: "About Us", url: "/about" },
        { name: "Services", url: "/services" },
        { name: "Case Studies", url: "/case-studies" },
        { name: "Resources", url: "/resources" },
        { name: "Blog", url: "/blog" },
        { name: "Contact", url: "/contact" }
      ];
      
      const articles1 = [
          {
            id: 1,
            title: "Choosing the Right Business Phone System",
            image: busimage,
            author: "Alex",
            date: "March 15, 2023",
            excerpt: "With so many options available, selecting the perfect phone system for your business can be overwhelming. Here's our comprehensive guide...",
            link: "#"
          },
          {
            id: 2,
            title: "How GPS Fleet Tracking Reduces Operational Costs",
            image: busimage,
            author: "Jamie",
            date: "February 28, 2023",
            excerpt: "Discover how businesses are saving thousands annually by implementing modern fleet tracking solutions with real-time analytics...",
            link: "#"
          },
          {
            id: 3,
            title: "The Future of Employee Management Technology",
            image: busimage,
            author: "Taylor",
            date: "January 10, 2023",
            excerpt: "How AI and machine learning are transforming workforce management and what it means for your business operations...",
            link: "#"
          }
        ];
        
        const technologyFAQs = [
            {
              question: "What types of businesses do you work with?",
              answer: "We serve businesses of all sizes across various industries, from small startups to enterprise organizations. Our solutions are scalable to meet your specific needs."
            },
            {
              question: "How long does implementation typically take?",
              answer: [
                "Implementation timelines vary by solution:",
                "Business Phone Systems: 1-2 weeks",
                "Fleet Management: 2-3 weeks",
                "Employee Management: 3-4 weeks",
                "Cloud Solutions: 4-6 weeks"
              ]
            },
            {
              question: "Do you provide training for new systems?",
              answer: "Yes, we offer comprehensive training for all implementations, including on-site sessions, video tutorials, and 24/7 support documentation."
            },
            {
              question: "What security measures do you have in place?",
              answer: [
                "Our security protocols include:",
                "End-to-end encryption",
                "Regular security audits",
                "Multi-factor authentication",
                "Compliance with industry standards"
              ]
            },
            {
              question: "Can your solutions integrate with our existing software?",
              answer: "Most of our solutions offer API integrations with common business applications. Our team will assess your current stack during the consultation."
            },
            {
              question: "What's included in your support services?",
              answer: [
                "Our support includes:",
                "24/7 technical assistance",
                "Regular system updates",
                "Performance monitoring",
                "Quarterly business reviews"
              ]
            },
            {
              question: "How do you ensure system reliability?",
              answer: "We use redundant systems, regular maintenance schedules, and real-time monitoring to ensure 99.99% uptime for all our solutions."
            },
            {
              question: "What makes your technology solutions different?",
              answer: [
                "Key differentiators:",
                "Customizable to your workflow",
                "User-friendly interfaces",
                "Scalable architecture",
                "Dedicated account management"
              ]
            },
            {
              question: "Do you offer customized solutions?",
              answer: "Yes, we specialize in tailoring our technology solutions to meet your specific business requirements and operational workflows."
            },
            {
              question: "How do we get started?",
              answer: "Contact us for a free consultation where we'll assess your needs and recommend the best solutions for your business."
            }
          ];
    
  return (
    <>
    <Navbar/>
    <div className="">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-gray-900">
        <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Text Content (Left) */}
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h1 className="text-3xl sm:text-4xl font-semibold mb-6">Advanced Technology Solutions for Modern Businesses</h1>
              <p className="text-base sm:text-xl mb-8">We deliver cutting-edge technology services that streamline operations, enhance productivity, and drive business growth.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-sales" className="bg-[#ff8633]  text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                  Request Consultation
                </a>
                <a href="#services" className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 border border-gray-300 rounded-lg transition duration-300">
                  Explore Solutions
                </a>
              </div>
            </div>

            {/* Image (Right) */}
            <div className="lg:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Technology solutions for business"
                className="w-full max-w-md lg:max-w-none rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-10 max-w-6xl mx-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 border border-gray-200 hover:shadow-md transition duration-300">
                <p className="text-gray-800 mb-2">{metric.label}</p>
                <p className={`text-4xl font-semibold mb-2 ${metric.value.includes('%') ? 'text-[#000e54]' : 'text-gray-800'}`}>{metric.value}</p>
                <p className="text-gray-800 text-base">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Services */}
      <div id="services" className="py-10 max-w-6xl mx-auto">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Our Technology Services</h2>
            <p className="text-base text-gray-800 max-w-3xl mx-auto">Comprehensive solutions designed to optimize your business operations and communication.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            {technologyServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300">
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-50 rounded-full p-3 mr-4">
                        <Icon className="w-6 h-6 text-[#000e54]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#000e54]">{service.title}</h3>
                    </div>
                    <p className="text-gray-800 text-base mb-6">{service.description}</p>
                    
                    <div className="flex justify-between items-center">
                      
                      <a 
                        href={service.link} 
                        className="text-[#000e54] text-base font-semibold hover:underline transition duration-300"
                      >
                        Learn More
                      </a>
                    </div>
                    
                    {expandedService === index && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h4 className="font-bold text-gray-700 mb-4">Key Features:</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="text-[#000e54] w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Implementation Process */}
      <div className="py-10 bg-gray-50 max-w-6xl mx-auto">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Our Implementation Process</h2>
            <p className="text-base text-gray-800 max-w-3xl mx-auto">A structured approach to ensure seamless technology integration</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-[#000e54] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 border-4 border-blue-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-[#000e54] mb-2 text-center">Needs Assessment</h3>
                  <p className="text-gray-800 text-base text-center">We analyze your current infrastructure and business requirements</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-[#000e54] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 border-4 border-blue-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-[#000e54] mb-2 text-center">Solution Design</h3>
                  <p className="text-gray-800 text-base text-center">Customized technology blueprint tailored to your operations</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-[#000e54] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 border-4 border-blue-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-[#000e54] mb-2 text-center">Deployment</h3>
                  <p className="text-gray-800 text-base text-center">Professional installation with minimal business disruption</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-[#000e54] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 border-4 border-blue-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-[#000e54] mb-2 text-center">Ongoing Support</h3>
                  <p className="text-gray-800 text-base text-center">Continuous monitoring, maintenance, and optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* technology benefits */}



      {/* Why Choose Us */}
      <div id="why-us" className="py-10 max-w-6xl mx-auto">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Why Choose Our Technology Solutions</h2>
            <p className="text-base text-gray-800 max-w-3xl mx-auto">Partner with us for reliable, scalable technology that grows with your business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Server className="w-8 h-8 text-[#000e54]" />
              </div>
              <h3 className="text-xl font-semibold text-[#000e54] mb-3">Enterprise-Grade Reliability</h3>
              <p className="text-gray-800 text-base mb-4">Our solutions are built with the same technology trusted by Fortune 500 companies</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-[#000e54]" />
              </div>
              <h3 className="text-xl font-semibold text-[#000e54] mb-3">Cutting-Edge Technology</h3>
              <p className="text-gray-800 text-base mb-4">We stay ahead of the curve with the latest innovations in business technology</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[#000e54]" />
              </div>
              <h3 className="text-xl font-semibold text-[#000e54] mb-3">Robust Security</h3>
              <p className="text-gray-800 text-base mb-4">Comprehensive security measures to protect your data and operations</p>
            </div>
          </div>
        </div>
      </div> 

      {/* Technology Stack */}
      <div className="py-20 max-w-6xl mx-auto px-4">
  <h3 className="text-4xl font-semibold text-gray-900 mb-8">Our Technology Stack</h3>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {[
      // Infrastructure
      {name: 'Cloud Infrastructure', icon: <Cloud className="w-10 h-10 text-[#000e54]"/>},
      {name: 'Server Virtualization', icon: <Server className="w-10 h-10 text-[#000e54]"/>},
      {name: 'Edge Computing', icon: <Cpu className="w-10 h-10 text-[#000e54]"/>},
      
      // Data Management
      {name: 'Database Systems', icon: <Database className="w-10 h-10 text-[#000e54]"/>},
      {name: 'Big Data Analytics', icon: <BarChart2 className="w-10 h-10 text-[#000e54]"/>},
      {name: 'Data Warehousing', icon: <HardDrive className="w-10 h-10 text-[#000e54]"/>},
      
      // Security
      {name: 'Security Protocols', icon: <Shield className="w-10 h-10 text-[#000e54]"/>},
      {name: 'Encryption', icon: <Lock className="w-10 h-10 text-[#000e54]"/>},
      {name: 'IAM Solutions', icon: <Key className="w-10 h-10 text-[#000e54]"/>},
      
      // Development
      {name: 'API Integrations', icon: <Code className="w-10 h-10 text-[#000e54]"/>},
      {name: 'Microservices', icon: <Puzzle className="w-10 h-10 text-[#000e54]"/>},
      {name: 'CI/CD Pipelines', icon: <GitMerge className="w-10 h-10 text-[#000e54]"/>},
      
      // Networking
      {name: 'SD-WAN', icon: <Globe className="w-10 h-10 text-[#000e54]"/>},
      {name: '5G Connectivity', icon: <Wifi className="w-10 h-10 text-[#000e54]"/>},
      
      // Business Solutions
      {name: 'VoIP Systems', icon: <Phone className="w-10 h-10 text-[#000e54]"/>},
      {name: 'GPS Tracking', icon: <MapPin className="w-10 h-10 text-[#000e54]"/>},
      {name: 'ERP Integration', icon: <LayoutGrid className="w-10 h-10 text-[#000e54]"/>},
      
      // Emerging Tech
      {name: 'AI/ML Platforms', icon: <Brain className="w-10 h-10 text-[#000e54]"/>},
      {name: 'IoT Solutions', icon: <RadioTower className="w-10 h-10 text-[#000e54]"/>},
      {name: 'Blockchain', icon: <Link2 className="w-10 h-10 text-[#000e54]"/>}
    ].map((tech, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow">
        <div className="flex justify-center mb-4">
          {tech.icon}
        </div>
        <h4 className="text-base font-semibold text-gray-800">{tech.name}</h4>
      </div>
    ))}
  </div>
      </div>
    </div>     



    <div className="container mx-auto px-4 py-8 max-w-6xl mx-auto">
      {/* Enterprise-Grade Infrastructure Section */}
      <section className="mb-16 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Enterprise-Grade Infrastructure</h2>
            <p className="text-gray-800 text-base mb-4">
              Our technology infrastructure is built on cutting-edge systems designed for reliability, 
              scalability, and security. We leverage a multi-cloud architecture that ensures 99.99% uptime 
              and seamless performance even during peak demand periods.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Infrastructure Components</h3>
            <ul className="space-y-2 mb-4 text-base">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#000e54] mt-1"></div>
                <span className="ml-2 text-gray-800">High-Performance Cloud Network: Distributed across strategic global locations to minimize latency and maximize availability</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#000e54] mt-1"></div>
                <span className="ml-2 text-gray-800">Automated Scaling: Dynamic resource allocation that responds to real-time demand fluctuations</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#000e54] mt-1"></div>
                <span className="ml-2 text-gray-800">Continuous Monitoring: 24/7 system oversight with proactive threat detection and resolution</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#000e54] mt-1"></div>
                <span className="ml-2 text-gray-800">Disaster Recovery: Comprehensive backup systems with rapid recovery capabilities</span>
              </li>
            </ul>
            
            <p className="text-gray-800 text-base">
              Our infrastructure undergoes rigorous security audits and compliance reviews to ensure 
              it meets the highest industry standards, giving you confidence that your data and 
              operations are always protected.
            </p>
          </div>
          
          <div className="lg:w-1/2">
            <svg className="w-full h-auto" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              {/* Background */}
              <rect x="0" y="0" width="800" height="400" fill="white" />
              
              {/* Cloud platforms */}
              <g id="cloud-platforms">
                {/* Cloud 1 */}
                <circle cx="150" cy="100" r="70" fill="#e3f2fd" stroke="#2196f3" strokeWidth="2" />
                <text x="150" y="105" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#1565c0">Cloud Platform A</text>
                
                {/* Cloud 2 */}
                <circle cx="400" cy="100" r="70" fill="#e3f2fd" stroke="#2196f3" strokeWidth="2" />
                <text x="400" y="105" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#1565c0">Cloud Platform B</text>
                
                {/* Cloud 3 */}
                <circle cx="650" cy="100" r="70" fill="#e3f2fd" stroke="#2196f3" strokeWidth="2" />
                <text x="650" y="105" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#1565c0">Cloud Platform C</text>
              </g>
              
              {/* Central server hub */}
              <rect x="325" y="200" width="150" height="80" rx="10" fill="#bbdefb" stroke="#1976d2" strokeWidth="2" />
              <text x="400" y="245" fontFamily="Arial" fontSize="16" textAnchor="middle" fill="#0d47a1">Central Hub</text>
              
              {/* Connection lines */}
              <line x1="150" y1="150" x2="325" y2="220" stroke="#1976d2" strokeWidth="3" strokeDasharray="5,5" />
              <line x1="400" y1="150" x2="400" y2="200" stroke="#1976d2" strokeWidth="3" strokeDasharray="5,5" />
              <line x1="650" y1="150" x2="475" y2="220" stroke="#1976d2" strokeWidth="3" strokeDasharray="5,5" />
              
              {/* End devices */}
              <g id="devices">
                <rect x="200" y="320" width="80" height="40" rx="5" fill="#e1f5fe" stroke="#03a9f4" strokeWidth="2" />
                <text x="240" y="345" fontFamily="Arial" fontSize="12" textAnchor="middle" fill="#01579b">Server</text>
                
                <rect x="360" y="320" width="80" height="40" rx="5" fill="#e1f5fe" stroke="#03a9f4" strokeWidth="2" />
                <text x="400" y="345" fontFamily="Arial" fontSize="12" textAnchor="middle" fill="#01579b">Database</text>
                
                <rect x="520" y="320" width="80" height="40" rx="5" fill="#e1f5fe" stroke="#03a9f4" strokeWidth="2" />
                <text x="560" y="345" fontFamily="Arial" fontSize="12" textAnchor="middle" fill="#01579b">Storage</text>
              </g>
              
              {/* Connections from hub to devices */}
              <line x1="350" y1="280" x2="240" y2="320" stroke="#03a9f4" strokeWidth="2" />
              <line x1="400" y1="280" x2="400" y2="320" stroke="#03a9f4" strokeWidth="2" />
              <line x1="450" y1="280" x2="560" y2="320" stroke="#03a9f4" strokeWidth="2" />
              
              {/* Security shield icon */}
              <path d="M400,30 L440,50 L440,90 C440,110 425,130 400,140 C375,130 360,110 360,90 L360,50 Z" fill="none" stroke="#4caf50" strokeWidth="2" />
              <text x="400" y="100" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#1b5e20">Security</text>
            </svg>
          </div>
        </div>
      </section>
      
      {/* Advanced Data Analytics Section */}
      <section className="mb-16 rounded-lg max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Advanced Data Analytics</h2>
            <p className="text-gray-800 mb-4 text-base">
              Transform your data into actionable insights with our state-of-the-art analytics platform. 
              We combine sophisticated algorithms with intuitive visualization tools to help you make 
              data-driven decisions with confidence.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Analytics Approach</h3>
            <p className="text-gray-800 text-base mb-2">Our comprehensive analytics solution encompasses:</p>
            
            <ul className="space-y-2 mb-4">
              <li className="flex items-start text-gray-800 text-base">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#000e54] mt-1"></div>
                <span className="ml-2 text-gray-800">Real-time Processing: Analyze streaming data for immediate insights and quick response to emerging trends</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#000e54] mt-1"></div>
                <span className="ml-2 text-gray-800">Predictive Modeling: Forecast future outcomes based on historical patterns using machine learning</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#000e54] mt-1"></div>
                <span className="ml-2 text-gray-800">Custom Dashboards: Tailor-made visualization interfaces that present complex data in accessible formats</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#000e54] mt-1"></div>
                <span className="ml-2 text-gray-800">Behavioral Analytics: Understand user patterns to optimize experiences and drive engagement</span>
              </li>
            </ul>
            
            <p className="text-gray-800 text-base">
              Whether you're tracking business KPIs, customer behavior, or operational efficiency, 
              our analytics platform delivers deep insights that drive measurable results.
            </p>
          </div>
          
          <div className="lg:w-1/2">
            <svg className="w-full h-auto" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              {/* Background */}
              <rect x="0" y="0" width="800" height="400" fill="white" />
              
              {/* Data flow pipeline */}
              <g id="data-pipeline">
                {/* Data source */}
                <rect x="50" y="150" width="120" height="80" rx="10" fill="#e8f5e9" stroke="#4caf50" strokeWidth="2" />
                <text x="110" y="175" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#2e7d32">Data Sources</text>
                <text x="110" y="200" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#2e7d32">Structured & Unstructured</text>
                
                {/* Processing */}
                <rect x="250" y="150" width="120" height="80" rx="10" fill="#e3f2fd" stroke="#2196f3" strokeWidth="2" />
                <text x="310" y="175" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#0d47a1">Processing</text>
                <text x="310" y="200" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#0d47a1">AI & ML Algorithms</text>
                
                {/* Analysis */}
                <rect x="450" y="150" width="120" height="80" rx="10" fill="#fff3e0" stroke="#ff9800" strokeWidth="2" />
                <text x="510" y="175" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#e65100">Analysis</text>
                <text x="510" y="200" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#e65100">Pattern Recognition</text>
                
                {/* Visualization */}
                <rect x="650" y="150" width="120" height="80" rx="10" fill="#e8eaf6" stroke="#3f51b5" strokeWidth="2" />
                <text x="710" y="175" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#1a237e">Visualization</text>
                <text x="710" y="200" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#1a237e">Interactive Dashboards</text>
              </g>
              
              {/* Connection arrows */}
              <g id="connections">
                <polygon points="190,190 200,185 200,195" fill="#4caf50" />
                <line x1="170" y1="190" x2="200" y2="190" stroke="#4caf50" strokeWidth="2" />
                
                <polygon points="390,190 400,185 400,195" fill="#2196f3" />
                <line x1="370" y1="190" x2="400" y2="190" stroke="#2196f3" strokeWidth="2" />
                
                <polygon points="590,190 600,185 600,195" fill="#ff9800" />
                <line x1="570" y1="190" x2="600" y2="190" stroke="#ff9800" strokeWidth="2" />
              </g>
              
              {/* Charts */}
              <g id="charts">
                {/* Bar chart */}
                <rect x="100" y="280" width="15" height="30" fill="#4caf50" />
                <rect x="120" y="280" width="15" height="50" fill="#4caf50" />
                <rect x="140" y="280" width="15" height="20" fill="#4caf50" />
                <rect x="160" y="280" width="15" height="40" fill="#4caf50" />
                <line x1="90" y1="280" x2="180" y2="280" stroke="#424242" strokeWidth="1" />
                
                {/* Line chart */}
                <polyline points="250,300 270,280 290,310 310,270 330,290" fill="none" stroke="#2196f3" strokeWidth="2" />
                <line x1="240" y1="330" x2="340" y2="330" stroke="#424242" strokeWidth="1" />
                
                {/* Pie chart */}
                <path d="M 510 300 L 510 250 A 50 50 0 0 1 553 325 Z" fill="#ff9800" />
                <path d="M 510 300 L 553 325 A 50 50 0 0 1 510 350 Z" fill="#f57c00" />
                <path d="M 510 300 L 510 350 A 50 50 0 0 1 467 275 Z" fill="#ffa726" />
                <path d="M 510 300 L 467 275 A 50 50 0 0 1 510 250 Z" fill="#ffb74d" />
                
                {/* Scatter plot */}
                <circle cx="670" cy="290" r="4" fill="#3f51b5" />
                <circle cx="690" cy="270" r="4" fill="#3f51b5" />
                <circle cx="710" cy="310" r="4" fill="#3f51b5" />
                <circle cx="730" cy="280" r="4" fill="#3f51b5" />
                <circle cx="750" cy="300" r="4" fill="#3f51b5" />
                <line x1="650" y1="330" x2="760" y2="330" stroke="#424242" strokeWidth="1" />
                <line x1="650" y1="330" x2="650" y2="250" stroke="#424242" strokeWidth="1" />
              </g>
              
              {/* Decorative elements */}
              <g id="decorative">
                <circle cx="400" cy="50" r="30" fill="#ede7f6" stroke="#673ab7" strokeWidth="2" />
                <text x="400" y="55" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#4a148c">Insights</text>
              </g>
            </svg>
          </div>
        </div>
      </section>
      
      {/* Enterprise-Level Cybersecurity Section */}
      <section className="mb-16 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Enterprise-Level Cybersecurity</h2>
            <p className="text-gray-800 text-base mb-4">
              In today's digital landscape, security isn't optional—it's essential. Our comprehensive cybersecurity 
              framework protects your assets at every level, from infrastructure to applications and data.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Multi-Layered Protection</h3>
            <p className="text-gray-800 text-base mb-2">Our security approach incorporates:</p>
            
            <ul className="space-y-2 mb-4 text-gray-800 text-base">
              <li className="flex items-start ">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#000e54] mt-1"></div>
                <span className="ml-2 text-gray-800">Advanced Threat Detection: Utilizing AI and behavioral analytics to identify and neutralize threats before they cause damage</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#000e54] mt-1"></div>
                <span className="ml-2 text-gray-800">Zero-Trust Architecture: Verifying every access request regardless of source to prevent unauthorized access</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#000e54] mt-1"></div>
                <span className="ml-2 text-gray-800">Encryption Protocols: Military-grade encryption for data both in transit and at rest</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#000e54] mt-1"></div>
                <span className="ml-2 text-gray-800">Compliance Management: Automated tools to ensure adherence to relevant regulations including GDPR, HIPAA, and SOC 2</span>
              </li>
            </ul>
            
            <p className="text-gray-800 text-base mb-2">
              We conduct regular security assessments, penetration testing, and vulnerability scanning 
              to continuously strengthen our defenses against evolving threats.
            </p>
            
            <p className="text-gray-800 text-base">
              Our dedicated security operations center monitors your systems 24/7/365, providing immediate 
              response to potential security incidents and ensuring your business remains protected around the clock.
            </p>
          </div>
          
          <div className="lg:w-1/2">
            <svg className="w-full h-auto" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              {/* Background */}
              <rect x="0" y="0" width="800" height="400" fill="white" />
              
              {/* Central shield */}
              <g id="shield">
                <path d="M400,50 L500,90 L500,200 C500,280 460,330 400,350 C340,330 300,280 300,200 L300,90 Z" fill="#e1f5fe" stroke="#0288d1" strokeWidth="3" />
                
                {/* Lock icon inside shield */}
                <rect x="375" y="170" width="50" height="40" rx="5" fill="#0288d1" />
                <circle cx="400" cy="170" r="15" fill="#0288d1" stroke="#e1f5fe" strokeWidth="2" />
                <rect x="395" y="165" width="10" height="25" fill="#e1f5fe" />
              </g>
              
              {/* Security layers */}
              <g id="security-layers">
                {/* Outer layer - Network */}
                <circle cx="400" cy="200" r="180" fill="none" stroke="#f44336" strokeWidth="2" strokeDasharray="8,4" />
                <text x="220" y="100" fontFamily="Arial" fontSize="16" fill="#d32f2f">Network Security</text>
                <rect x="180" y="110" width="20" height="20" fill="#f44336" />
                
                {/* Middle layer - Application */}
                <circle cx="400" cy="200" r="130" fill="none" stroke="#ff9800" strokeWidth="2" strokeDasharray="8,4" />
                <text x="230" y="160" fontFamily="Arial" fontSize="16" fill="#ef6c00">Application Security</text>
                <rect x="210" y="170" width="20" height="20" fill="#ff9800" />
                
                {/* Inner layer - Data */}
                <circle cx="400" cy="200" r="80" fill="none" stroke="#4caf50" strokeWidth="2" strokeDasharray="8,4" />
                <text x="340" y="130" fontFamily="Arial" fontSize="16" fill="#2e7d32">Data Security</text>
                <rect x="320" y="140" width="20" height="20" fill="#4caf50" />
              </g>
              
              {/* Security elements */}
              <g id="security-elements">
                {/* Firewall */}
                <rect x="120" y="200" width="60" height="40" rx="5" fill="#ffcdd2" stroke="#f44336" strokeWidth="2" />
                <text x="150" y="225" fontFamily="Arial" fontSize="12" textAnchor="middle" fill="#b71c1c">Firewall</text>
                
                {/* Encryption */}
                <rect x="400" y="80" width="80" height="40" rx="5" fill="#c8e6c9" stroke="#4caf50" strokeWidth="2" />
                <text x="440" y="105" fontFamily="Arial" fontSize="12" textAnchor="middle" fill="#1b5e20">Encryption</text>
                
                {/* Authentication */}
                <rect x="600" y="180" width="100" height="40" rx="5" fill="#bbdefb" stroke="#2196f3" strokeWidth="2" />
                <text x="650" y="205" fontFamily="Arial" fontSize="12" textAnchor="middle" fill="#0d47a1">Authentication</text>
                
                {/* Monitoring */}
                <rect x="400" y="320" width="80" height="40" rx="5" fill="#e1bee7" stroke="#9c27b0" strokeWidth="2" />
                <text x="440" y="345" fontFamily="Arial" fontSize="12" textAnchor="middle" fill="#4a148c">Monitoring</text>
              </g>
              
              {/* Threat indicators */}
              <g id="threats">
                <circle cx="130" cy="320" r="8" fill="#f44336" />
                <line x1="130" y1="300" x2="130" y2="340" stroke="#f44336" strokeWidth="2" strokeDasharray="3,3" />
                <text x="155" y="320" fontFamily="Arial" fontSize="10" fill="#b71c1c">Threat Blocked</text>
                
                <circle cx="670" cy="320" r="8" fill="#f44336" />
                <line x1="670" y1="300" x2="670" y2="340" stroke="#f44336" strokeWidth="2" strokeDasharray="3,3" />
                <text x="695" y="320" fontFamily="Arial" fontSize="10" fill="#b71c1c">Threat Blocked</text>
              </g>
              
              {/* Decorative binary code */}
              <text x="50" y="50" fontFamily="Courier" fontSize="10" fill="#9e9e9e">10110101 01001110</text>
              <text x="650" y="50" fontFamily="Courier" fontSize="10" fill="#9e9e9e">00101101 11010010</text>
              <text x="50" y="380" fontFamily="Courier" fontSize="10" fill="#9e9e9e">11100101 01011100</text>
              <text x="650" y="380" fontFamily="Courier" fontSize="10" fill="#9e9e9e">10010111 01011010</text>
            </svg>
          </div>
        </div>
      </section>
    </div>

    <Article
        title="Technology Insights" 
        items={articles1} 
        buttonText="Read Article" 
        buttonColor="bg-[#ff8633]" 
    />

    <FAQ faqs={technologyFAQs} />
    <WideDiv/>
    <Footer/>
    </>
  );
};

export default Technology;