import React, { useState } from 'react';
import FAQ from './FAQ';
import Article from './ArticleLayoutCommon';

import { 
    Truck, 
    Map, 
    Shield, 
    BarChart3, 
    Clock, 
    Smartphone,
    MapPin,
    Satellite,
    Zap,
    Globe,
    ShieldCheck,
    TrendingUp,
    Radio,
    Users,
    AlertTriangle,
    AlertCircle,
    Cpu, Settings, 
    Route,
  Clipboard, Fuel, CreditCard, Calendar,Link,
  ArrowRight, CheckCircle, PhoneCall,  Bell, Wifi,ChartLine, Database,Code,FileText, Server,RefreshCw, Briefcase,
    
  } from 'lucide-react';



const GPSFleetContent = () => {
    const [activeTab, setActiveTab] = useState('operational');
    
  // faq
  const gpsFleetFAQs = [
    {
      question: "How does GPS fleet tracking improve my operations?",
      answer: [
        "Real-time vehicle location monitoring",
        "Optimized route planning to reduce fuel costs",
        "Improved dispatch efficiency",
        "Reduced unauthorized vehicle use",
        "Better customer ETAs with live tracking"
      ]
    },
    {
      question: "What types of vehicles can use GPS tracking?",
      answer: "Our GPS tracking solutions work with all types of fleet vehicles including trucks, vans, cars, construction equipment, and even trailers. The system is compatible with most modern vehicles regardless of make or model."
    },
    {
      question: "How accurate is the GPS tracking?",
      answer: "Our systems provide location accuracy within 5-10 meters using advanced GPS technology with GLONASS support. In urban areas with tall buildings, the system automatically switches to cellular tower triangulation for continuous tracking."
    },
    {
      question: "Can I monitor driver behavior with GPS tracking?",
      answer: [
        "Yes, our system tracks and reports on:",
        "Speeding incidents",
        "Harsh braking and acceleration",
        "Excessive idling time",
        "Seat belt usage (with optional sensors)",
        "Provides driver safety scorecards"
      ]
    },
    {
      question: "What happens if a vehicle loses cellular connection?",
      answer: "The tracking device stores all data locally when outside coverage areas and automatically transmits it when connection is restored. Critical alerts are queued and sent immediately when service returns."
    },
    {
      question: "How often is the vehicle location updated?",
      answer: "Location updates occur every 30 seconds by default, but can be adjusted to as frequent as every 10 seconds for high-priority vehicles. During periods of inactivity, updates may be less frequent to conserve battery."
    },
    {
      question: "Can I set up custom alerts and notifications?",
      answer: [
        "Yes, you can configure alerts for:",
        "Geofence entry/exit",
        "Speeding violations",
        "After-hours vehicle use",
        "Maintenance reminders",
        "Harsh driving events",
        "Low battery warnings"
      ]
    },
    {
      question: "Is the GPS tracking system difficult to install?",
      answer: "Our plug-and-play devices can be self-installed in minutes with no wiring required for most vehicles. For complex installations or heavy equipment, we offer professional installation services."
    }
  ];

  const features = [
    { 
      icon: <Truck className="w-12 h-12 text-[#000e54]" />, 
      title: "Vehicle Tracking", 
      description: "Real-time tracking of your entire fleet to optimize routes and improve response times." 
    },
    { 
      icon: <Map className="w-12 h-12 text-[#000e54]" />, 
      title: "Route Optimization", 
      description: "Reduce fuel costs and delivery times with AI-powered route planning." 
    },
    { 
      icon: <Shield className="w-12 h-12 text-[#000e54]" />, 
      title: "Safety Monitoring", 
      description: "Monitor driver behavior and vehicle health to prevent accidents and breakdowns." 
    },
    { 
      icon: <BarChart3 className="w-12 h-12 text-[#000e54]" />, 
      title: "Performance Analytics", 
      description: "Comprehensive reports and insights to improve operational efficiency." 
    },
    { 
      icon: <Clock className="w-12 h-12 text-[#000e54]" />, 
      title: "Maintenance Scheduling", 
      description: "Automated maintenance alerts to reduce downtime and extend vehicle lifespan." 
    },
    { 
      icon: <Smartphone className="w-12 h-12 text-[#000e54]" />, 
      title: "Mobile Access", 
      description: "Manage your fleet from anywhere with our responsive mobile application." 
    }
  ];

  const featureCategories = {
    operational: {
      title: "Operational Excellence",
      description: "Transform your daily operations with powerful tracking and management tools",
      color: 'bg-[#000e54]',
      textColor:'text-[#000e54]',
      features: [
        {
          icon: <MapPin className="w-12 h-12 text-[#000e54]" />,
          title: "Real-Time Vehicle Tracking",
          description: "Monitor your entire fleet with live GPS tracking that updates every 30-60 seconds. View current location, speed, direction, and status of each vehicle from any device.",
          benefits: ["Eliminate guesswork about vehicle locations", "Respond quickly to service requests", "Provide accurate ETAs to customers"]
        },
        {
          icon: <Truck className="w-12 h-12 text-[#000e54]" />,
          title: "Route Optimization",
          description: "AI-powered route planning algorithms that consider traffic patterns, delivery windows, vehicle capacity, and driver availability to create the most efficient routes.",
          benefits: ["Reduce fuel consumption by up to 30%", "Complete more jobs per day", "Minimize overtime expenses"]
        },
        {
          icon: <BarChart3 className="w-12 h-12 text-[#000e54]" />,
          title: "Performance Analytics",
          description: "Comprehensive reporting dashboard with customizable metrics to track key performance indicators across your entire fleet operation.",
          benefits: ["Identify inefficient routes and processes", "Compare driver and vehicle performance", "Generate client-ready reports"]
        },
        {
          icon: <Clock className="w-12 h-12 text-[#000e54]" />,
          title: "Automated Dispatching",
          description: "Smart dispatch system that assigns jobs based on vehicle location, driver schedules, and job requirements to optimize workforce efficiency.",
          benefits: ["Reduce dispatcher workload", "Eliminate double-booking", "Respond faster to urgent service requests"]
        }
      ]
    },
    safety: {
      title: "Safety & Compliance",
      description: "Protect your drivers, vehicles, and business with advanced safety features",
      color: "bg-green-600",
      textColor:"text-green-600",
      features: [
        {
          icon: <AlertTriangle className="w-12 h-12 text-green-600" />,
          title: "Driver Behavior Monitoring",
          description: "Track and score driving habits including speeding, harsh braking, rapid acceleration, and cornering to identify risky behaviors before they lead to accidents.",
          benefits: ["Reduce accident rates by up to 40%", "Lower insurance premiums", "Create data-driven safety programs"]
        },
        {
          icon: <Shield className="w-12 h-12 text-green-600" />,
          title: "Compliance Management",
          description: "Automated logging of hours of service, electronic DVIR, IFTA reporting, and regulatory documentation to ensure your fleet stays compliant with transportation regulations.",
          benefits: ["Avoid costly violations and fines", "Streamline DOT audits", "Maintain accurate electronic records"]
        },
        {
          icon: <Bell className="w-12 h-12 text-green-600" />,
          title: "Real-Time Alerts & Notifications",
          description: "Customizable alert system that notifies managers about safety violations, unauthorized vehicle use, geofence breaches, and maintenance issues.",
          benefits: ["Address issues before they escalate", "Prevent unauthorized vehicle use", "Maintain security protocols"]
        },
        {
          icon: <PhoneCall className="w-12 h-12 text-green-600" />,
          title: "Emergency Response Coordination",
          description: "Integrated emergency protocols that help dispatchers quickly locate and assist drivers in distress, with direct communication channels to emergency services.",
          benefits: ["Minimize response time during emergencies", "Provide precise location data to first responders", "Ensure driver safety in crisis situations"]
        }
      ]
    },
    maintenance: {
      title: "Fleet Maintenance",
      description: "Extend vehicle lifespan and reduce downtime with preventative maintenance",
      color: "bg-orange-400",
      textColor:'text-orange-400',
      features: [
        {
          icon: <Settings className="w-12 h-12 text-orange-400" />,
          title: "Preventative Maintenance Scheduling",
          description: "Automated maintenance alerts based on mileage, engine hours, calendar intervals, or diagnostic trouble codes to prevent breakdowns and extend vehicle lifespan.",
          benefits: ["Reduce unexpected breakdowns by 70%", "Extend vehicle service life", "Maintain warranty compliance"]
        },
        {
          icon: <Clipboard className="w-12 h-12 text-orange-400" />,
          title: "Digital Inspection Records",
          description: "Mobile-friendly digital vehicle inspection forms that drivers can complete with photos and notes, creating a comprehensive maintenance history for each vehicle.",
          benefits: ["Ensure inspection compliance", "Track recurring issues", "Create comprehensive vehicle service records"]
        },
        {
          icon: <TrendingUp className="w-12 h-12 text-orange-400" />,
          title: "Diagnostic Trouble Code Monitoring",
          description: "Real-time engine diagnostic monitoring that alerts fleet managers to potential issues before they cause breakdowns or serious damage.",
          benefits: ["Address minor issues before they become major repairs", "Reduce roadside emergencies", "Plan repairs during scheduled downtime"]
        },
        {
          icon: <Calendar className="w-12 h-12 text-orange-400" />,
          title: "Maintenance Vendor Integration",
          description: "Seamless connectivity with maintenance providers for scheduling, parts ordering, and service history tracking across your preferred repair network.",
          benefits: ["Streamline service appointments", "Track repair costs across vendors", "Maintain centralized maintenance records"]
        }
      ]
    },
    financial: {
      title: "Financial Management",
      description: "Control costs and optimize spending with detailed financial tracking",
      color: "bg-purple-600",
      textColor:"text-purple-600",
      features: [
        {
          icon: <Fuel className="w-12 h-12 text-purple-600" />,
          title: "Fuel Management",
          description: "Comprehensive fuel tracking system that monitors consumption patterns, identifies fuel theft, and provides detailed analysis of fuel efficiency across your fleet.",
          benefits: ["Reduce fuel expenses by 10-15%", "Detect fuel theft or misuse", "Identify vehicles with poor fuel economy"]
        },
        {
          icon: <CreditCard className="w-12 h-12 text-purple-600" />,
          title: "Expense Tracking & Allocation",
          description: "Detailed tracking of all fleet-related expenses with the ability to allocate costs to specific departments, projects, or clients for accurate accounting.",
          benefits: ["Simplify client billing", "Improve budgeting accuracy", "Enable data-driven purchasing decisions"]
        },
        {
          icon: <Users className="w-12 h-12 text-purple-600" />,
          title: "Driver Payroll Integration",
          description: "Automated calculation of driver hours, mileage, and performance metrics that integrates with payroll systems to ensure accurate compensation.",
          benefits: ["Reduce payroll processing time", "Eliminate timesheet disputes", "Track overtime and bonuses accurately"]
        },
        {
          icon: <BarChart3 className="w-12 h-12 text-purple-600" />,
          title: "Total Cost of Ownership Analysis",
          description: "Comprehensive tracking of all vehicle-related expenses throughout its lifecycle, providing insights for optimal replacement timing and fleet composition.",
          benefits: ["Identify underperforming assets", "Optimize vehicle replacement cycles", "Make data-driven procurement decisions"]
        }
      ]
    }
  };



//   alternative
const alternatives = [
    {
      title: "Cellular-Based Tracking",
      description: "Uses cellular networks for real-time data transmission",
      pros: [
        "Wide coverage in urban areas",
        "Lower hardware costs",
        "Easy to install"
      ],
      cons: [
        "Limited rural coverage",
        "Ongoing data plan costs"
      ],
      visual: "https://www.dtss.us/blog/wp-content/uploads/2020/11/AdobeStock_122704176.jpeg"
    },
    {
      title: "Satellite Tracking",
      description: "Global coverage using satellite networks",
      pros: [
        "Works anywhere with sky visibility",
        "No cellular dependency",
        "Ideal for remote operations"
      ],
      cons: [
        "Higher equipment costs",
        "Potential latency issues"
      ],
      visual: "https://gdmissionsystems.com/-/media/CF4A8AD1DB5246FD854D156C5B82776A.ashx"
    },
    {
      title: "Bluetooth Beacons",
      description: "Short-range tracking for localized monitoring",
      pros: [
        "Excellent for yard management",
        "Low power consumption",
        "Inexpensive hardware"
      ],
      cons: [
        "Very limited range",
        "Requires dense beacon network"
      ],
      visual: "https://wordpress.mapsted.com/wp-content/uploads/2022/04/Beacons-BLE-2.jpg"
    },
    {
      title: "RFID Tracking",
      description: "Tag-based identification at specific checkpoints",
      pros: [
        "Great for fixed routes",
        "No ongoing connectivity costs",
        "Long battery life"
      ],
      cons: [
        "No real-time tracking",
        "Limited to checkpoint data"
      ],
      visual: "https://www.intellistride.com/wp-content/uploads/2020/01/RFID-is-still-offers-best-solutions-for-track-and-trace.jpg"
    },
    {
      title: "Hybrid Systems",
      description: "Combines multiple technologies for optimal coverage",
      pros: [
        "Flexible solution",
        "Automatic failover",
        "Comprehensive data"
      ],
      cons: [
        "More complex setup",
        "Higher initial investment"
      ],
      visual: "https://tse4.mm.bing.net/th?id=OIP.8E31nJYQiL8dxec6m5jccgAAAA&pid=Api&P=0&h=180"
    },
    {
      title: "AI-Powered Video Telematics",
      description: "Combines tracking with computer vision analysis",
      pros: [
        "Detailed driver behavior insights",
        "Visual documentation",
        "Enhanced safety features"
      ],
      cons: [
        "Higher bandwidth needs",
        "Privacy considerations"
      ],
      visual: "https://www.thegpstime.com/wp-content/uploads/2021/05/AI-powered-Video-Telematics-solution.png"
    }
  ];

  const renderFeature = (feature, colorClass) => (
    <div className="flex flex-col lg:flex-row  py-12 border-b border-gray-200 last:border-0 max-w-6xl" >
      <div className="lg:w-1/3">
        <div className={`bg-${colorClass}-50 rounded-xl p-6 inline-block mb-4`}>
          {feature.icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
        <div className={`w-16 h-1 bg-${colorClass}-600 mb-4`}></div>
      </div>
      <div className="lg:w-2/3">
        <p className="text-base text-gray-800 mb-6">
          {feature.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {feature.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className={`w-5 h-5 text-${colorClass}-600 mr-2 mt-1 flex-shrink-0`} />
              <p className="text-base text-gray-800">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnimatedIcon = (category) => {
    const icons = {
      operational: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      safety: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      maintenance: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      financial: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    };

    return icons[category];
  };

  const articles1 = [
    {
      id: 1,
      title: "GPS Fleet Management: How It Saves Costs and Boosts Efficiency",
      image: "/images/art1gps.jpg", 
      author: "Alex",
      date: "May 15, 2024",
      excerpt: "Discover how GPS fleet tracking reduces fuel costs, optimizes routes, and improves overall fleet productivity. Learn why 85% of businesses see ROI within 6 months.",
      link: "#"
    },
    {
      id: 2,
      title: "Top 5 GPS Fleet Tracking Systems in 2024",
      image: "/images/art2gps.avif", 
      author: "Jamie",
      date: "April 30, 2024",
      excerpt: "Compare features, pricing, and reviews of leading GPS fleet management software like Samsara, Geotab, and Verizon Connect.",
      link: "#" 
    },
    {
      id: 3,
      title: "Driver Behavior Monitoring: How GPS Tracking Improves Safety",
      image: "/images/art3gps.jpg",
      author: "Taylor",
      date: "June 10, 2024",
      excerpt: "Identify risky driving habits (speeding, harsh braking) and reduce accidents by 35% with real-time GPS alerts and coaching.",
      link: "#" 
    }
  ];


  return (
    <>

      {/* introduction */}
      <div id="intro-gps"  className="max-w-6xl mx-auto p-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-12 md:gap-20">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-semibold text-gray-900 mb-6">
             Introduction to GPS Fleet Management
            </h1>
            <p className="text-base text-gray-800 mb-8">
            GPS Fleet Management is a technology-driven solution designed to optimize the efficiency, safety, and productivity of vehicle fleets. By leveraging real-time GPS tracking, businesses can monitor their vehicles' locations, routes, and performance, ensuring better operational control. This system provides valuable insights into driver behavior, fuel consumption, and maintenance schedules, helping companies reduce costs and improve service delivery. With features like geofencing, route optimization, and automated reporting, GPS fleet management enhances decision-making and ensures compliance with regulatory standards. Whether for logistics, transportation, or service-based industries, implementing a GPS fleet management system leads to smarter fleet operations and increased profitability.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative">
                <img src="https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2018/08/gps-fleet.jpg" alt="Fleet Management Dashboard" className="rounded-xl shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">
          Complete Fleet Management Solution
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-800 text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

      {/* what is gpstracking*/}
      <section id="what-is-gpstracking" className="py-10 max-w-6xl mx-auto p-4">
      <div className="container mx-auto max-w-6xl mx-auto">

        {/* Key Components Grid */}
        <div className="mb-20 max-w-6xl mx-auto ">
          <h3 className="text-4xl font-semibold text-gray-900 text-center mb-10">Key Components of GPS Fleet Tracking</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 md:gap-6 sm:gap-6 text-base max-w-6xl mx-auto">
            {[
              {
                icon: <Radio className="w-10 h-10 text-blue-600" />,
                title: "GPS Tracking Devices",
                description: "Hardware installed in vehicles that receive satellite signals and transmit location and vehicle data to central servers."
              },
              {
                icon: <Globe className="w-10 h-10 text-green-600" />,
                title: "Data Transmission",
                description: "Cellular networks that relay information from vehicles to the cloud, allowing for real-time monitoring across wide geographical areas."
              },
              {
                icon: <Cpu className="w-10 h-10 text-purple-600" />,
                title: "Fleet Management Software",
                description: "Cloud-based platforms that process, analyze, and visualize tracking data, providing user-friendly interfaces for fleet managers."
              },
              {
                icon: <Zap className="w-10 h-10 text-orange-600" />,
                title: "Integration Systems",
                description: "APIs and connectors that link fleet tracking data with other business systems like ERP, accounting, or customer service platforms."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 max-w-6xl mx-automax-w-6xl mx-auto p-4">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mb-4 ">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-800 text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

       

        {/* Implementation Process */}
        <div className="mb-20 max-w-6xl mx-auto">
          <h3 className="text-4xl font-semibold text-gray-900 text-center mb-10">GPS Fleet Tracking Implementation</h3>
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 text-center">
            {[
              {
                step: "1",
                title: "Assessment",
                icon: <Truck className="w-8 h-8 text-white" />,
                color: "bg-blue-600",
                description: "Evaluate your fleet size, vehicle types, and specific tracking needs to determine the appropriate solution."
              },
              {
                step: "2",
                title: "Hardware Installation",
                icon: <Cpu className="w-8 h-8 text-white" />,
                color: "bg-green-600",
                description: "Install GPS tracking devices in all vehicles, either through plug-and-play OBD-II devices or hardwired solutions."
              },
              {
                step: "3",
                title: "Software Setup",
                icon: <Globe className="w-8 h-8 text-white" />,
                color: "bg-purple-600",
                description: "Configure your fleet management software dashboard, set up geofences, and establish custom alerts and reports."
              },
              {
                step: "4",
                title: "Team Training",
                icon: <Users className="w-8 h-8 text-white" />,
                color: "bg-orange-600",
                description: "Train dispatchers, managers, and drivers on how to use the system effectively and address potential concerns."
              },
              {
                step: "5",
                title: "Optimization",
                icon: <TrendingUp className="w-8 h-8 text-white" />,
                color: "bg-red-600",
                description: "Continuously refine your tracking parameters and reporting tools based on initial results and feedback."
              }
            ].map((step, index) => (
              <div key={index} className="flex-1">
                <div className="flex flex-col items-center">
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                    {step.icon}
                  </div>
                  <div className="h-24 w-px bg-gray-300 hidden md:block"></div>
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">{step.title}</h4>
                  <p className="text-gray-800 text-base text-center">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

{/* working of gpstracking */}
 <div id="gpstracking-working" className="py-10 max-w-6xl mx-auto">
 <div className="text-center mb-16 max-w-6xl mx-auto p-4">
          <h2 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-4">
            What is GPS Fleet Tracking?
          </h2>
          <div className="w-24 h-1 bg-[#000e54] mx-auto mb-6"></div>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            GPS fleet tracking is a sophisticated system that uses satellite technology to monitor and manage vehicles in real-time, providing businesses with valuable insights to optimize operations.
          </p>
</div>
 {/* Main Concept Illustration */}
 <div id="gpstracking-working" className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20 max-w-6xl mx-auto">
          <div className="lg:w-1/2">
            <div className="relative p-4 bg-white rounded-2xl">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#000e54] rounded-full animate-ping opacity-25"></div>
                  <Satellite className="w-16 h-16 text-[#000e54] relative z-10" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-[#000e54] mb-4">How GPS Fleet Tracking Works</h3>
              <p className="text-gray-800 mb-6 text-base">
                GPS fleet tracking utilizes the Global Positioning System—a network of 24+ satellites orbiting Earth—to determine the precise location of vehicles equipped with GPS tracking devices. These devices receive signals from multiple satellites, calculating position through trilateration.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex flex-col items-center">
                  <Satellite className="w-10 h-10 text-blue-500 mb-2" />
                  <p className="text-base text-center">Satellite Signal</p>
                </div>
                <div className="flex items-center text-gray-800">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex flex-col items-center">
                  <Radio className="w-10 h-10 text-green-500 mb-2" />
                  <p className="text-base text-center">GPS Receiver</p>
                </div>
                <div className="flex items-center text-gray-800">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex flex-col items-center">
                  <Globe className="w-10 h-10 text-purple-500 mb-2" />
                  <p className="text-base text-center">Cellular Network</p>
                </div>
                <div className="flex items-center text-gray-800">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex flex-col items-center">
                  <Cpu className="w-10 h-10 text-red-500 mb-2" />
                  <p className="text-base text-center">Fleet Software</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 max-w-6xl mx-auto p-4">
            <div className="space-y-6">
              <p className="text-base text-gray-800">
                Modern GPS fleet tracking systems transmit not only location data but also vehicle diagnostics, driver behavior metrics, and environmental information. This data is processed and visualized through specialized software platforms that provide dispatchers and fleet managers with actionable insights.
              </p>
              <p className="text-base text-gray-800">
                Beyond basic tracking, these systems enable comprehensive fleet management through features like geofencing, route planning, maintenance scheduling, and regulatory compliance monitoring. The combination of hardware devices and intelligent software creates a powerful tool for optimizing fleet operations.
              </p>
              <div className="p-4 bg-blue-50 border-l-4 border-[#000e54] rounded">
                <p className="font-semibold text-base text-[#000e54]">
                  GPS fleet tracking transforms raw location data into strategic intelligence, allowing businesses to make data-driven decisions that improve efficiency, safety, and profitability.
                </p>
              </div>
            </div>
          </div>
</div>
</div>

 {/* Benefits of fleet tracking Section */}
 <div id="gpstracking-benefits" className="mb-20 py-10 max-w-6xl mx-auto p-6">
          <h3 className="text-4xl font-semibold text-gray-900 text-center mb-10">Benefits of GPS Fleet Tracking</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-12 h-12 text-green-600" />,
                title: "Increased Operational Efficiency",
                description: "Optimize routes, reduce idle time, and improve dispatching to complete more jobs with fewer resources.",
                stats: "Up to 25% reduction in fuel costs"
              },
              {
                icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
                title: "Enhanced Vehicle Security",
                description: "Prevent unauthorized use and quickly recover stolen vehicles with real-time location tracking.",
                stats: "90% higher recovery rate for stolen vehicles"
              },
              {
                icon: <Clock className="w-12 h-12 text-orange-600" />,
                title: "Improved Time Management",
                description: "Accurate arrival time predictions and proof of service timestamps improve customer satisfaction.",
                stats: "30% reduction in customer complaints"
              },
              {
                icon: <MapPin className="w-12 h-12 text-purple-600" />,
                title: "Better Route Planning",
                description: "AI-powered route optimization that accounts for traffic, weather, and vehicle constraints.",
                stats: "15-20% more deliveries per day"
              },
              {
                icon: <AlertTriangle className="w-12 h-12 text-red-600" />,
                title: "Reduced Risk & Liability",
                description: "Monitor driver behavior to discourage speeding and harsh driving, leading to fewer accidents.",
                stats: "Up to 40% reduction in accident rates"
              },
              {
                icon: <Users className="w-12 h-12 text-indigo-600" />,
                title: "Enhanced Driver Management",
                description: "Identify training opportunities and recognize top performers through objective performance data.",
                stats: "20% improvement in driver retention"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-b-4" style={{ borderTopColor: benefit.icon.props.className.split(' ')[3], borderBottomColor: benefit.icon.props.className.split(' ')[3] }}>
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h4 className="text-xl font-semibold text-gray-800 ml-4">{benefit.title}</h4>
                </div>
                <p className="text-gray-800 mb-4 text-base">{benefit.description}</p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-semibold text-base text-gray-800">{benefit.stats}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

{/* features of gps fleet tracking */}
<section id="gpstracking-features" className="py-8 max-w-6xl mx-auto p-6">
      <div className="container max-w-6xl mx-auto ">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">
            Comprehensive GPS Fleet Tracking Features
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Our advanced fleet management system delivers powerful tools to transform your operations, enhance safety, extend vehicle life, and optimize your budget.
          </p>
        </div>

        {/* Feature Navigation */}
        <div className="flex flex-wrap text-base justify-center mb-12 gap-2">
  {Object.keys(featureCategories).map((category) => (
    <button
      key={category}
      onClick={() => setActiveTab(category)}
      className={`flex items-center px-6 py-4 rounded-full transition-all duration-300 ${
        activeTab === category 
          ? `${featureCategories[category].color} text-white shadow-lg` 
          : 'bg-white text-gray-800 hover:bg-gray-100'
      }`}
    >
      <span className={`mr-2 ${
        activeTab === category 
          ? 'text-white' 
          : featureCategories[category].textColor
      }`}>
        {renderAnimatedIcon(category)}
      </span>
      <span className="font-semibold">
        {featureCategories[category].title}
      </span>
    </button>
  ))}
</div>

        {/* Features Banner */}
        <div className={`${featureCategories[activeTab].color} text-white rounded-xl p-8 mb-12 relative overflow-hidden`}>
  <div className="relative z-10">
    <h3 className="text-xl font-semibold mb-4">{featureCategories[activeTab].title}</h3>
    <p className="text-base max-w-2xl">{featureCategories[activeTab].description}</p>
  </div>
  
  {/* Background Pattern */}
  <div className="absolute top-0 right-0 opacity-10">
    <svg width="400" height="400" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
      <path d="M435.7,566.7c-96.9,37.6-196.8,72.4-302.4,31.6C30.8,558.3-23.4,450.8,8.9,355.5C42.6,256.9,155.1,188.1,250.5,137
       c85.6-45.8,180-68.3,269-36.1c91.9,33.2,159.3,120.3,156.9,221.2C673.5,422.9,542.5,525.7,435.7,566.7z" fill="currentColor"/>
    </svg>
  </div>
</div>

        {/* Features Content */}
        <div className="bg-white text-base rounded-2xl p-6 md:p-12">
          {featureCategories[activeTab].features.map((feature, index) => (
            renderFeature(feature, featureCategories[activeTab].color)
          ))}
        </div>

        {/* Interactive Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 ">
          <div className="bg-white rounded-2xl p-8 overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">See the Difference</h3>
              <p className="text-gray-800 mb-8 text-base">
                Our GPS fleet tracking system provides comprehensive visibility across your entire operation, allowing you to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className={`bg-${featureCategories[activeTab].color}-100 p-2 rounded-full mr-4`}>
                    <CheckCircle className={`w-5 h-5 text-${featureCategories[activeTab].color}-600`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-gray-800">Make Data-Driven Decisions</h4>
                    <p className="text-gray-800 text-base">Replace guesswork with analytics-powered insights</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className={`bg-${featureCategories[activeTab].color}-100 p-2 rounded-full mr-4`}>
                    <CheckCircle className={`w-5 h-5 text-${featureCategories[activeTab].color}-600`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-gray-800">Enhance Customer Experience</h4>
                    <p className="text-gray-800 text-base">Provide accurate ETAs and responsive service</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className={`bg-${featureCategories[activeTab].color}-100 p-2 rounded-full mr-4`}>
                    <CheckCircle className={`w-5 h-5 text-${featureCategories[activeTab].color}-600`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-xl">Reduce Operational Costs</h4>
                    <p className="text-gray-800 text-base">Cut fuel, maintenance, and labor expenses</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className={`bg-${featureCategories[activeTab].color}-100 p-2 rounded-full mr-4`}>
                    <CheckCircle className={`w-5 h-5 text-${featureCategories[activeTab].color}-600`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-xl">Improve Fleet Safety</h4>
                    <p className="text-gray-800 text-base">Protect drivers and reduce liability risks</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -right-12 -bottom-12 opacity-5">
              <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5,19.85C17.32,19.85 17.15,19.76 17.04,19.59L12.58,12.91L9.32,17.8C9.22,17.95 9.05,18.04 8.87,18.05C8.69,18.05 8.52,17.97 8.4,17.83L5.14,13.83L2.35,17.31C2.33,17.34 2.31,17.36 2.29,17.38C2.04,17.64 1.67,17.69 1.35,17.5C1.04,17.31 0.942,16.97 1.03,16.65C1.03,16.6 1.04,16.55 1.06,16.5L4.15,12.43C4.26,12.29 4.44,12.21 4.62,12.23C4.81,12.23 4.97,12.32 5.09,12.47L8.31,16.41L11.5,11.61C11.59,11.45 11.77,11.35 11.96,11.35C12.15,11.34 12.34,11.43 12.45,11.58L16.96,18.33L20.12,15.62C20.29,15.48 20.51,15.44 20.71,15.51C20.91,15.5 21.13,15.68 21.22,15.87C21.31,16.06 21.28,16.28 21.15,16.44L17.9,19.64C17.79,19.78 17.65,19.85 17.5,19.85Z"/>
              </svg>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl  overflow-hidden">
  <div className="">
    <h3 className="text-xl font-semibold text-gray-800 mb-6">Core GPS Fleet Tracking Capabilities</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Feature 1 */}
      <div className="flex items-start">
        <div className="bg-blue-100 p-3 rounded-lg mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 text-xl">Real-Time Location Tracking</h4>
          <p className="text-gray-800 text-base">
            Monitor your entire fleet with live GPS updates, showing exact vehicle positions, movement direction, and current status.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex items-start">
        <div className="bg-green-100 p-3 rounded-lg mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2s3 5 3 10-3 10-3 10-3-5-3-10 3-10 3-10z"></path>
            <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 text-xl">Geofencing Alerts</h4>
          <p className="text-gray-800 text-base">
            Create virtual boundaries and receive instant notifications when vehicles enter or leave designated areas.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex items-start">
        <div className="bg-purple-100 p-3 rounded-lg mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 text-xl">Driver Safety Monitoring</h4>
          <p className="text-gray-800 text-base">
            Track speeding, harsh braking, rapid acceleration and other risky behaviors to improve fleet safety.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex items-start">
        <div className="bg-amber-100 p-3 rounded-lg mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 text-xl">Instant Alerts</h4>
          <p className="text-gray-800 text-base">
            Get notified immediately for unauthorized vehicle use, maintenance issues, or other critical events.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
        
 
      </div>
    </section>

{/* how your data is protected */}
<div className="max-w-6xl mx-auto py-12 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">Data Security & Privacy</h1>
        <p className="text-xl text-gray-800 max-w-3xl mx-auto">We prioritize your data security and privacy at every step of your journey with us</p>
      </div>
      
      <div className="bg-[#000e54] text-white p-8 rounded-xl mb-16 shadow-lg">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/4">
            <h2 className="text-4xl font-semibold mb-4">Your Trust Is Our Priority</h2>
            <p className="text-base">We implement industry-leading security measures and adhere to strict privacy regulations to ensure your data remains protected, private, and under your control at all times.</p>
          </div>
          <div className="md:w-1/4 flex justify-center mt-6 md:mt-0">
            <div className="bg-white bg-opacity-20 p-6 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="#000e54">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Data Protection Section */}
      <div className="mb-20">
        <div className="flex items-center mb-8">
          <div className="bg-[#000e54] p-2 rounded-full mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="white" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-4xl font-semibold text-gray-900">How We Protect Your Data</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#000e54]">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Enterprise-Grade Security</h3>
            <p className="text-gray-800 text-base">Our infrastructure employs multiple layers of encryption and security controls, including AES-256 encryption for data at rest and TLS 1.3 for data in transit. All systems operate behind enterprise firewalls with intrusion detection systems actively monitoring for potential threats.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#000e54]">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Access Controls</h3>
            <p className="text-gray-800 text-base">We implement strict role-based access controls (RBAC) and follow the principle of least privilege. Multi-factor authentication is mandatory for all internal systems, and employee access to customer data is limited, logged, and regularly audited.</p>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Regular Security Assessments</h3>
            <p className="text-gray-800 text-base">We conduct regular vulnerability scanning and penetration testing through independent third-party security firms. Our systems undergo comprehensive security audits quarterly to identify and remediate potential vulnerabilities before they can be exploited.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Backup & Disaster Recovery</h3>
            <p className="text-gray-800 text-base">Your data is automatically backed up every hour with encrypted backups stored in geographically distributed locations. Our disaster recovery plan ensures minimal downtime and data loss in the event of a system failure, with regular recovery drills to test effectiveness.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Employee Training</h3>
            <p className="text-gray-800 text-base">All employees undergo comprehensive security awareness training upon hiring and participate in quarterly refresher courses. We maintain a strong security culture with regular phishing simulations and security competitions to ensure vigilance at all levels of our organization.</p>
          </div>
        </div>
      </div>
      
      {/* Regulatory Compliance Section */}
      <div className="mb-20">
        <div className="flex items-center mb-8">
          <div className="bg-green-100 p-2 rounded-full mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-4xl font-semibold text-gray-900">Compliance with Privacy Regulations</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">GDPR Compliance</h3>
            <p className="text-gray-800 mb-4 text-base">We fully comply with the EU General Data Protection Regulation, ensuring that:</p>
            <ul className="list-disc pl-5 text-gray-800 text-base space-y-2">
              <li>You can access, correct, or delete your personal data at any time</li>
              <li>We collect only the minimum data necessary to provide our services</li>
              <li>All data processing activities are documented and justified</li>
              <li>Data protection is built into our systems by design and default</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">CCPA/CPRA Compliance</h3>
            <p className="text-gray-700 text-base mb-4">We honor California Consumer Privacy Act and Privacy Rights Act requirements:</p>
            <ul className="list-disc pl-5 text-gray-800 text-base space-y-2">
              <li>Rights to know what personal information is collected</li>
              <li>Options to opt-out of data sales or sharing</li>
              <li>Deletion rights for collected personal information</li>
              <li>Protection against discrimination for exercising privacy rights</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg ">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Industry-Specific Compliance</h3>
          <p className="text-gray-800 text-base mb-6">We maintain compliance with industry-specific regulations to ensure your data is protected according to the highest standards:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg text-center shadow-sm border border-gray-200">
              <span className="font-semibold text-xl block mb-2 text-gray-800">HIPAA</span>
              <p className="text-gray-800 text-base">Healthcare data protection standards</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg text-center shadow-sm border border-gray-200">
              <span className="font-semibold text-xl block mb-2 text-gray-800">PCI DSS</span>
              <p className="text-gray-800 text-base">Payment card industry security standards</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg text-center shadow-sm border border-gray-200">
              <span className="font-semibold text-xl block mb-2 text-gray-800">SOC 2</span>
              <p className="text-gray-800 text-base">Service organization control standards</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg text-center shadow-sm border border-gray-200">
              <span className="font-semibold text-xl block mb-2 text-gray-800">ISO 27001</span>
              <p className="text-gray-800 text-base">Information security management</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Data Ownership Section */}
      <div className="mb-16">
        <div className="flex items-center mb-8">
          <div className="bg-blue-50 p-2 rounded-full mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="#000e54">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-4xl font-semibold text-gray-900">Data Ownership Policies</h2>
        </div>
        
        <div className="bg-blue-50 border-l-4 border-[#000e54] p-6 rounded-r-lg mb-10 shadow-md">
          <h3 className="text-xl font-semibold text-[#000e54] mb-3">You Own Your Data</h3>
          <p className="text-gray-800 text-base">We firmly believe that your data belongs to you. We never claim ownership of customer data stored in our systems and maintain this principle throughout our service relationship.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="text-[#000e54] mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-3 text-gray-800">Right to Access</h4>
            <p className="text-gray-800 text-base">Request a comprehensive export of all your data in machine-readable formats at any time through our self-service portal.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="text-[#000e54] mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-3 text-gray-800">Right to Delete</h4>
            <p className="text-gray-800 text-base">Request complete deletion of your data, which will be permanently removed from all production and backup systems within 30 days.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="text-[#000e54] mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-3 text-gray-800">Right to Modify</h4>
            <p className="text-gray-800 text-base">Update your information at any time through our platform or by contacting customer support for assistance.</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-4xl font-semibold text-gray-800 mb-4">Data Retention & Deletion</h3>
          <p className="text-gray-800 text-xl mb-4">We maintain clear policies regarding how long we retain your data:</p>
          <ul className="list-disc pl-5 text-gray-800 text-base space-y-3">
            <li><span className="font-semibold">Active Accounts:</span> Your data is retained for as long as you maintain an active account with our service.</li>
            <li><span className="font-semibold">Account Closure:</span> Upon account closure, non-essential personal data is deleted within 30 days. Essential transaction records may be retained for legal compliance purposes (typically 7 years).</li>
            <li><span className="font-semibold">Backups:</span> Data may persist in encrypted backups for up to 90 days after deletion from production systems.</li>
            <li><span className="font-semibold">Anonymized Data:</span> We may retain permanently anonymized data that cannot be linked back to individuals for analytical purposes.</li>
          </ul>
        </div>
      </div>
    </div>

{/* methodology */}
<div id="gps-methodology" className="py-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="max-w-7xl mx-auto p-4  lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-900 ">
            Our GPS Fleet Management Methodology
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-800">
            A comprehensive approach to tracking, monitoring, and optimizing your fleet operations.
          </p>
        </div>

        {/* Methodology Overview */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h3 className="lg:text-xl font-semibold text-gray-900">
                System Architecture
              </h3>
              <p className="mt-3 lg:text-base text-gray-800">
                Our fleet management solution uses a multi-layered approach to collect, process, and analyze data from your vehicles in real-time.
              </p>
              <div className="mt-10 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#000e54] text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-900">Hardware Integration</h4>
                    <p className="mt-2 lg:text-base text-gray-800">Advanced GPS tracking devices installed in vehicles capture location, speed, fuel consumption, and engine diagnostics.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#000e54] text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-900">Secure Data Transmission</h4>
                    <p className="mt-2 text-base text-gray-800">Encrypted data is transmitted via cellular networks to our secure cloud infrastructure with 99.9% uptime.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#000e54] text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-900">Intelligent Data Processing</h4>
                    <p className="mt-2 text-base text-gray-800">Advanced algorithms analyze data patterns to identify optimization opportunities and generate actionable insights.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img 
                src="https://loginextsolutions.com/blog/wp-content/uploads/2022/10/Fleet-Management-Software.png" 
                alt="Fleet Management System Architecture" 
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Process Flow */}
        <div className="mt-24">
          <h3 className="text-4xl font-semibold text-gray-900 text-center mb-20">
            Our Methodology Process
          </h3>
          
          <div className="relative">
            {/* Process SVG Background Line (visible on lg screens) */}
            <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 w-full">
              <svg height="24" width="100%" className="absolute">
                <line x1="0" y1="12" x2="100%" y2="12" stroke="#E5E7EB" strokeWidth="4" strokeDasharray="1,10" />
              </svg>
            </div>
            
            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative bg-white p-6 rounded-lg shadow-md">
                <div className="lg:absolute lg:-top-12 lg:left-1/2 lg:transform lg:-translate-x-1/2 flex items-center justify-center h-16 w-16 rounded-full bg-[#000e54] text-white mx-auto mb-6 lg:mb-0">
                  <span className="text-xl font-semibold">1</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 text-center mt-6">Data Collection</h4>
                <div className="mt-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <p className="mt-4 text-gray-800 text-center text-base">
                  GPS devices collect real-time location, speed, fuel usage, and engine performance data.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="relative bg-white p-6 rounded-lg shadow-md">
                <div className="lg:absolute lg:-top-12 lg:left-1/2 lg:transform lg:-translate-x-1/2 flex items-center justify-center h-16 w-16 rounded-full bg-[#000e54] text-white mx-auto mb-6 lg:mb-0">
                  <span className="text-xl font-semibold">2</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 text-center mt-6">Secure Transmission</h4>
                <div className="mt-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <p className="mt-4 text-gray-800 text-center text-base">
                  Data is encrypted and securely transmitted to our cloud servers via cellular networks.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="relative bg-white p-6 rounded-lg shadow-md">
                <div className="lg:absolute lg:-top-12 lg:left-1/2 lg:transform lg:-translate-x-1/2 flex items-center justify-center h-16 w-16 rounded-full bg-[#000e54] text-white mx-auto mb-6 lg:mb-0">
                  <span className="text-xl font-semibold">3</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 text-center mt-6">Analysis & Processing</h4>
                <div className="mt-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <p className="mt-4 text-gray-800 text-center text-base">
                  Advanced algorithms analyze patterns and identify optimization opportunities.
                </p>
              </div>
              
              {/* Step 4 */}
              <div className="relative bg-white p-6 rounded-lg shadow-md">
                <div className="lg:absolute lg:-top-12 lg:left-1/2 lg:transform lg:-translate-x-1/2 flex items-center justify-center h-16 w-16 rounded-full bg-[#000e54] text-white mx-auto mb-6 lg:mb-0">
                  <span className="text-xl font-semibold">4</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 text-center mt-6">Actionable Insights</h4>
                <div className="mt-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="mt-4 text-gray-800 text-center text-base">
                  User-friendly dashboards provide real-time fleet status and actionable recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-24" >
          <h3 className="text-4xl font-semibold text-gray-900 text-center mb-12">
            Our Technology Stack
          </h3>
          
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mt-10 lg:mt-0 order-2 lg:order-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" className="w-full">
                {/* Background */}
                <rect width="500" height="400" fill="white" rx="10" />
                
                {/* Layers */}
                <g transform="translate(50, 50)">
                  {/* UI Layer */}
                  <rect x="0" y="0" width="400" height="60" fill="#000e54" rx="5" />
                  <text x="200" y="35" textAnchor="middle" fill="white" fontWeight="semibold" fontSize="18">User Interface Layer</text>
                  
                  {/* API Layer */}
                  <rect x="0" y="90" width="400" height="60" fill="#000e54" rx="5" />
                  <text x="200" y="125" textAnchor="middle" fill="white" fontWeight="semibold" fontSize="18">API Layer</text>
                  
                  {/* Processing Layer */}
                  <rect x="0" y="180" width="400" height="60" fill="#000e54" rx="5" />
                  <text x="200" y="215" textAnchor="middle" fill="white" fontWeight="semibold" fontSize="18">Processing Layer</text>
                  
                  {/* Data Layer */}
                  <rect x="0" y="270" width="400" height="60" fill="#000e54" rx="5" />
                  <text x="200" y="305" textAnchor="middle" fill="white" fontWeight="semibold" fontSize="18">Data Layer</text>
                  
                  {/* Connecting Lines */}
                  <line x1="200" y1="60" x2="200" y2="90" stroke="#000e54" strokeWidth="3" strokeDasharray="5,5" />
                  <line x1="200" y1="150" x2="200" y2="180" stroke="#000e54" strokeWidth="3" strokeDasharray="5,5" />
                  <line x1="200" y1="240" x2="200" y2="270" stroke="#000e54" strokeWidth="3" strokeDasharray="5,5" />
                </g>
              </svg>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-xl px-2 font-semibold text-gray-900">
                Integrated Technology
              </h3>
              <p className="mt-3 px-2 text-base text-gray-800">
                Our system combines multiple technology layers to deliver a comprehensive fleet management solution.
              </p>
              <div className="mt-8 px-4 space-y-6">
                <div className="border-l-4 border-[#000e54] pl-4">
                  <h4 className="text-xl font-semibold text-gray-900">User Interface Layer</h4>
                  <p className="mt-2 text-base text-gray-800">Interactive dashboards, real-time maps, and mobile applications that provide access anywhere, anytime.</p>
                </div>
                <div className="border-l-4 border-[#000e54] pl-4">
                  <h4 className="text-xl font-semibold text-gray-900">API Layer</h4>
                  <p className="mt-2 text-base text-gray-500">Secure APIs that facilitate integration with your existing systems and third-party applications.</p>
                </div>
                <div className="border-l-4 border-[#000e54] pl-4">
                  <h4 className="text-xl font-semibold text-gray-900">Processing Layer</h4>
                  <p className="mt-2 text-base text-gray-800">Machine learning algorithms that analyze trends, predict maintenance needs, and optimize routes.</p>
                </div>
                <div className="border-l-4 border-[#000e54] pl-4">
                  <h4 className="text-xl font-semibold text-gray-900">Data Layer</h4>
                  <p className="mt-2 text-base text-gray-800">Secure cloud infrastructure that stores and processes fleet data with multiple redundancies and backups.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results & Benefits */}
        <div className="mt-24 max-w-6xl mx-auto">
          <h3 className="text-4xl font-semibold text-gray-900 text-center mb-12">
            Proven Results
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#000e54]">
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="mt-4 text-xl font-semibold text-gray-900 text-center">Cost Savings</h4>
              <p className="mt-4 text-gray-800 text-center text-base">
                Customers report average fuel savings of 15% and maintenance cost reductions of 25%.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#000e54]">
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h4 className="mt-4 text-xl font-semibold text-gray-900 text-center">Improved Efficiency</h4>
              <p className="mt-4 text-gray-800 text-center text-base">
                Route optimization reduces travel time by up to 20%, increasing deliveries per day.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-#000e54">
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="mt-4 text-xl font-semibold text-gray-900 text-center">Enhanced Safety</h4>
              <p className="mt-4 text-gray-800 text-center text-base">
                Driver behavior monitoring has helped reduce accidents by an average of 30%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

{/* how to choose the service */}
<section id="gpstracking-howchoose" className=" py-10 max-w-6xl mx-auto p-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="lg:text-4xl md:text-4xl font-semibold text-center text-gray-900 mb-12">
          How to Choose the Best GPS Fleet Service
        </h2>

        {/* Step 1 */}
        <div className="flex flex-col lg:flex-row lg:h-[350px] items-center bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="w-full lg:w-1/2 p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Assess Your Fleet Needs</h3>
            <p className="text-gray-800 mb-4 text-base">Determine what features are essential for your operations:</p>
            <ul className="list-disc pl-6 text-gray-800 space-y-2 text-base">
              <li>Real-time tracking requirements</li>
              <li>Number of vehicles to monitor</li>
              <li>Types of reports needed</li>
              <li>Integration with existing systems</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 p-8 bg-blue-50 flex justify-center">
            <svg width="100%" height="auto" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="50" width="300" height="200" fill="#f0f8ff" rx="10"/>
              <path d="M70 80 H330 M70 110 H330 M70 140 H330 M70 170 H330" stroke="#4a90e2" strokeWidth="2"/>
              <circle cx="100" cy="95" r="10" fill="#4a90e2"/>
              <circle cx="100" cy="125" r="10" fill="#4a90e2"/>
              <circle cx="100" cy="155" r="10" fill="#4a90e2"/>
              <circle cx="100" cy="185" r="10" fill="#4a90e2"/>
              <text x="130" y="100" fontFamily="Arial" fontSize="14" fill="#333">Real-time tracking</text>
              <text x="130" y="130" fontFamily="Arial" fontSize="14" fill="#333">Vehicle capacity</text>
              <text x="130" y="160" fontFamily="Arial" fontSize="14" fill="#333">Reporting needs</text>
              <text x="130" y="190" fontFamily="Arial" fontSize="14" fill="#333">System integration</text>
            </svg>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col lg:flex-row-reverse lg:h-[350px]   items-center bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="w-full lg:w-1/2 p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Compare Hardware Options</h3>
            <p className="text-gray-800 mb-4 text-base">Different GPS devices offer varying capabilities:</p>
            <ul className="list-disc pl-6 text-gray-800 space-y-2 text-base">
              <li>OBD-II plug-in devices (easy installation)</li>
              <li>Hardwired units (permanent solution)</li>
              <li>Battery-powered trackers (for assets)</li>
              <li>Smartphone-based tracking (low-cost option)</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 p-8 bg-red-50 flex justify-center">
            <svg width="100%" height="auto" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="50" width="300" height="200" fill="#fff5f5" rx="10"/>
              <rect x="80" y="80" width="60" height="40" fill="#ff6b6b" rx="5"/>
              <text x="110" y="105" fontFamily="Arial" fontSize="12" fill="white" textAnchor="middle">OBD-II</text>
              <rect x="160" y="80" width="60" height="60" fill="#ff9e7d" rx="5"/>
              <text x="190" y="115" fontFamily="Arial" fontSize="12" fill="white" textAnchor="middle">Hardwired</text>
              <circle cx="270" cy="100" r="30" fill="#8ce99a"/>
              <text x="270" y="105" fontFamily="Arial" fontSize="12" fill="white" textAnchor="middle">Battery</text>
              <rect x="120" y="160" width="50" height="80" fill="#74c0fc" rx="5"/>
              <rect x="125" y="165" width="40" height="70" fill="#e7f5ff" rx="3"/>
              <circle cx="145" cy="185" r="5" fill="#74c0fc"/>
            </svg>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col lg:flex-row items-center lg:h-[350px] bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="w-full lg:w-1/2 p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Evaluate Software Features</h3>
            <p className="text-gray-800 mb-4 text-base">Look for these critical software capabilities:</p>
            <ul className="list-disc pl-6 text-gray-800 space-y-2 text-base">
              <li>Customizable dashboards and alerts</li>
              <li>Geofencing and route optimization</li>
              <li>Driver behavior monitoring</li>
              <li>Maintenance scheduling</li>
              <li>Fuel usage tracking</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 p-8 bg-purple-50 flex justify-center">
            <svg width="100%" height="auto" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="50" width="300" height="200" fill="#f8f0ff" rx="10"/>
              <rect x="70" y="70" width="260" height="160" fill="#9775fa" rx="5"/>
              <rect x="80" y="80" width="240" height="140" fill="#e5dbff" rx="3"/>
              <rect x="90" y="90" width="70" height="30" fill="#9775fa" rx="2"/>
              <rect x="170" y="90" width="70" height="30" fill="#9775fa" rx="2"/>
              <rect x="250" y="90" width="60" height="30" fill="#9775fa" rx="2"/>
              <rect x="90" y="130" width="220" height="80" fill="#b197fc" rx="2"/>
              <line x1="90" y1="150" x2="310" y2="150" stroke="#9775fa" strokeWidth="2"/>
              <line x1="90" y1="170" x2="310" y2="170" stroke="#9775fa" strokeWidth="2"/>
              <line x1="90" y1="190" x2="310" y2="190" stroke="#9775fa" strokeWidth="2"/>
            </svg>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col lg:flex-row-reverse lg:h-[350px] items-center bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="w-full lg:w-1/2 p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Consider Reliability & Support</h3>
            <p className="text-gray-800 mb-4 text-base">Essential service factors to evaluate:</p>
            <ul className="list-disc pl-6 text-gray-800 space-y-2 text-base">
              <li>Uptime guarantees (look for 99%+)</li>
              <li>Customer support availability (24/7?)</li>
              <li>Onboarding and training offered</li>
              <li>User community and documentation</li>
              <li>Company reputation and reviews</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 p-8 bg-yellow-50 flex justify-center">
            <svg width="100%" height="auto" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="50" width="300" height="200" fill="#fff9db" rx="10"/>
              <path d="M200 80 L150 120 L150 180 L250 180 L250 120 Z" fill="#ffd43b" stroke="#f08c00" strokeWidth="3"/>
              <text x="200" y="150" fontFamily="Arial" fontSize="24" fill="#f08c00" textAnchor="middle" fontWeight="bold">99.9%</text>
              <circle cx="120" cy="100" r="15" fill="#74c0fc"/>
              <path d="M120 90 L120 100 L125 105" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="280" cy="100" r="15" fill="#63e6be"/>
              <path d="M280 95 L280 105 M275 100 L285 100" stroke="white" strokeWidth="2"/>
              <rect x="120" y="150" width="160" height="40" fill="#ff8787" rx="5"/>
              <text x="200" y="175" fontFamily="Arial" fontSize="14" fill="white" textAnchor="middle">24/7 Support</text>
            </svg>
          </div>
        </div>

        {/* Step 5 */}
        <div className="flex flex-col lg:flex-row items-center lg:h-[350px] bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="w-full lg:w-1/2 p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Analyze Pricing Structure</h3>
            <p className="text-gray-800 mb-4 text-base">Understand the total cost of ownership:</p>
            <ul className="list-disc pl-6 text-gray-800 space-y-2 text-base">
              <li>Monthly per-vehicle fees</li>
              <li>Hardware costs (purchase vs. lease)</li>
              <li>Installation charges</li>
              <li>Contract length requirements</li>
              <li>Additional feature costs</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 p-8 bg-green-50 flex justify-center">
            <svg width="100%" height="auto" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="50" width="300" height="200" fill="#ebfbee" rx="10"/>
              <rect x="80" y="80" width="240" height="150" fill="#d3f9d8" rx="3"/>
              <line x1="80" y1="130" x2="320" y2="130" stroke="#40c057" strokeWidth="2" strokeDasharray="5,5"/>
              <line x1="80" y1="180" x2="320" y2="180" stroke="#40c057" strokeWidth="2" strokeDasharray="5,5"/>
              <path d="M100 200 L140 150 L180 170 L220 120 L260 160 L300 140" fill="none" stroke="#2b8a3e" strokeWidth="3"/>
              <text x="100" y="210" fontFamily="Arial" fontSize="12" fill="#2b8a3e" textAnchor="middle">$25</text>
              <text x="140" y="210" fontFamily="Arial" fontSize="12" fill="#2b8a3e" textAnchor="middle">$35</text>
              <text x="180" y="210" fontFamily="Arial" fontSize="12" fill="#2b8a3e" textAnchor="middle">$45</text>
              <text x="220" y="210" fontFamily="Arial" fontSize="12" fill="#2b8a3e" textAnchor="middle">$30</text>
              <text x="260" y="210" fontFamily="Arial" fontSize="12" fill="#2b8a3e" textAnchor="middle">$40</text>
              <text x="300" y="210" fontFamily="Arial" fontSize="12" fill="#2b8a3e" textAnchor="middle">$50</text>
              <rect x="150" y="100" width="100" height="60" fill="#fff" rx="3" stroke="#adb5bd" strokeWidth="1"/>
              <text x="200" y="125" fontFamily="Arial" fontSize="14" fill="#495057" textAnchor="middle">$1,250</text>
              <text x="200" y="145" fontFamily="Arial" fontSize="10" fill="#868e96" textAnchor="middle">Monthly Total</text>
            </svg>
          </div>
        </div>

        {/* Step 6 */}
        <div className="flex flex-col lg:flex-row-reverse items-center lg:h-[350px] bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="w-full lg:w-1/2 p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Check Integration Capabilities</h3>
            <p className="text-gray-800 mb-4 text-base">Ensure compatibility with your existing tools:</p>
            <ul className="list-disc pl-6 text-gray-800 space-y-2 text-base">
              <li>Dispatch and routing software</li>
              <li>Accounting and invoicing systems</li>
              <li>ELD compliance solutions</li>
              <li>CRM and customer portals</li>
              <li>API access for custom solutions</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 p-8 bg-orange-50 flex justify-center">
            <svg width="100%" height="auto" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="50" width="300" height="200" fill="#fff4e6" rx="10"/>
              <circle cx="200" cy="150" r="50" fill="#ff922b"/>
              <text x="200" y="155" fontFamily="Arial" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold">GPS</text>
              <rect x="80" y="80" width="60" height="40" fill="#ffc078" rx="3"/>
              <text x="110" y="105" fontFamily="Arial" fontSize="10" fill="white" textAnchor="middle">Dispatch</text>
              <rect x="260" y="80" width="60" height="40" fill="#ffc078" rx="3"/>
              <text x="290" y="105" fontFamily="Arial" fontSize="10" fill="white" textAnchor="middle">Accounting</text>
              <rect x="80" y="180" width="60" height="40" fill="#ffc078" rx="3"/>
              <text x="110" y="205" fontFamily="Arial" fontSize="10" fill="white" textAnchor="middle">ELD</text>
              <rect x="260" y="180" width="60" height="40" fill="#ffc078" rx="3"/>
              <text x="290" y="205" fontFamily="Arial" fontSize="10" fill="white" textAnchor="middle">CRM</text>
              <line x1="140" y1="100" x2="170" y2="130" stroke="#ff922b" strokeWidth="2"/>
              <line x1="260" y1="100" x2="230" y2="130" stroke="#ff922b" strokeWidth="2"/>
              <line x1="140" y1="200" x2="170" y2="170" stroke="#ff922b" strokeWidth="2"/>
              <line x1="260" y1="200" x2="230" y2="170" stroke="#ff922b" strokeWidth="2"/>
            </svg>
          </div>
        </div>

        {/* Step 7 */}
        <div className="flex flex-col lg:flex-row items-center lg:h-[350px] bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">7. Test Before Committing</h3>
            <p className="text-gray-800 mb-4 text-base">Always evaluate before full implementation:</p>
            <ul className="list-disc pl-6 text-gray-800 space-y-2 text-base">
              <li>Request a free trial or demo</li>
              <li>Test with a few vehicles first</li>
              <li>Evaluate ease of use for your team</li>
              <li>Check mobile app functionality</li>
              <li>Assess reporting accuracy</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 p-8 bg-teal-50 flex justify-center">
            <svg width="100%" height="auto" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="50" width="300" height="200" fill="#e6fcf5" rx="10"/>
              <rect x="120" y="100" width="160" height="80" fill="#38d9a9" rx="5"/>
              <rect x="140" y="110" width="120" height="60" fill="#96f2d7" rx="3"/>
              <circle cx="150" cy="160" r="15" fill="#087f5b"/>
              <circle cx="250" cy="160" r="15" fill="#087f5b"/>
              <circle cx="280" cy="120" r="30" fill="none" stroke="#087f5b" strokeWidth="3"/>
              <line x1="300" y1="140" x2="330" y2="170" stroke="#087f5b" strokeWidth="3"/>
              <path d="M130 200 L150 220 L180 190" fill="none" stroke="#087f5b" strokeWidth="3" strokeLinecap="round"/>
              <path d="M210 200 L230 220 L260 190" fill="none" stroke="#087f5b" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>

{/* alternative */}
<section id="gps-alternative" className="py-10 max-w-6xl mx-auto">
      <div className="container mx-auto max-w-6xl mx-auto p-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-4">
            Alternative Fleet Tracking Options
          </h2>
          <div className="flex justify-center mb-6">
            <svg width="200" height="4" viewBox="0 0 200 4">
              <path d="M0 2H200" stroke="#000e54" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Explore different technologies for monitoring your fleet beyond traditional GPS solutions
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
          {alternatives.map((option, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              <div className="h-48 flex items-center justify-center p-6">
                <img 
                  src={option.visual} 
                  alt={option.title}
                  className=" h-[350px] w-[700px] mt-35"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mt-40 mb-2">{option.title}</h3>
                <p className="text-gray-800 mb-4 text-base">{option.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-xl text-green-800 mb-2 flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Advantages
                    </h4>
                    <ul className="space-y-2">
                      {option.pros.map((pro, i) => (
                        <li key={i} className="text-base text-green-700 flex items-start">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-xl text-red-800 mb-2 flex items-center">
                      <svg className="w-5 h-5 text-red-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                      </svg>
                      Limitations
                    </h4>
                    <ul className="space-y-2">
                      {option.cons.map((con, i) => (
                        <li key={i} className="text-base text-red-700 flex items-start">
                          <svg className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                          </svg>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Chart */}
        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-[#000e54] text-white p-8 md:p-12">
              <h3 className="text-xl font-semibold mb-6">Technology Comparison</h3>
              <p className="text-gray-300 mb-6 text-base">
                See how different tracking technologies stack up across key metrics
              </p>
              <ul className="space-y-4">
                {[
                  "Coverage Area",
                  "Update Frequency",
                  "Hardware Cost",
                  "Ongoing Costs",
                  "Installation Complexity",
                  "Data Richness"
                ].map((item, index) => (
                  <li key={index} className="text-gray-300 text-base">{item}</li>
                ))}
              </ul>
            </div>
            <div className="md:w-2/3 p-4 overflow-x-auto">
              <svg width="100%" height="400" viewBox="0 0 800 400" className="min-w-[600px]">
                {/* X-axis */}
                <path d="M50 350H750" stroke="#6B7280" strokeWidth="2"/>
                
                {/* Y-axis labels */}
                <text x="30" y="70" textAnchor="end" fontSize="12" fill="#6B7280">Best</text>
                <text x="30" y="150" textAnchor="end" fontSize="12" fill="#6B7280">Good</text>
                <text x="30" y="230" textAnchor="end" fontSize="12" fill="#6B7280">Fair</text>
                <text x="30" y="310" textAnchor="end" fontSize="12" fill="#6B7280">Poor</text>
                
                {/* Grid lines */}
                <path d="M50 70H750" stroke="#E5E7EB" strokeWidth="1"/>
                <path d="M50 150H750" stroke="#E5E7EB" strokeWidth="1"/>
                <path d="M50 230H750" stroke="#E5E7EB" strokeWidth="1"/>
                <path d="M50 310H750" stroke="#E5E7EB" strokeWidth="1"/>
                
                {/* Data points - Cellular */}
                <circle cx="120" cy="310" r="6" fill="#3B82F6"/>
                <circle cx="220" cy="230" r="6" fill="#3B82F6"/>
                <circle cx="320" cy="150" r="6" fill="#3B82F6"/>
                <circle cx="420" cy="150" r="6" fill="#3B82F6"/>
                <circle cx="520" cy="230" r="6" fill="#3B82F6"/>
                <circle cx="620" cy="150" r="6" fill="#3B82F6"/>
                <text x="120" y="380" textAnchor="middle" fontSize="12" fill="#6B7280">Cellular</text>
                
                {/* Data points - Satellite */}
                <circle cx="120" cy="70" r="6" fill="#10B981"/>
                <circle cx="220" cy="310" r="6" fill="#10B981"/>
                <circle cx="320" cy="310" r="6" fill="#10B981"/>
                <circle cx="420" cy="230" r="6" fill="#10B981"/>
                <circle cx="520" cy="150" r="6" fill="#10B981"/>
                <circle cx="620" cy="230" r="6" fill="#10B981"/>
                <text x="220" y="380" textAnchor="middle" fontSize="12" fill="#6B7280">Satellite</text>
                
                {/* Data points - Bluetooth */}
                <circle cx="120" cy="350" r="6" fill="#F59E0B"/>
                <circle cx="220" cy="70" r="6" fill="#F59E0B"/>
                <circle cx="320" cy="350" r="6" fill="#F59E0B"/>
                <circle cx="420" cy="310" r="6" fill="#F59E0B"/>
                <circle cx="520" cy="70" r="6" fill="#F59E0B"/>
                <circle cx="620" cy="310" r="6" fill="#F59E0B"/>
                <text x="320" y="380" textAnchor="middle" fontSize="12" fill="#6B7280">Bluetooth</text>
                
                {/* Data points - RFID */}
                <circle cx="120" cy="350" r="6" fill="#EF4444"/>
                <circle cx="220" cy="350" r="6" fill="#EF4444"/>
                <circle cx="320" cy="70" r="6" fill="#EF4444"/>
                <circle cx="420" cy="350" r="6" fill="#EF4444"/>
                <circle cx="520" cy="310" r="6" fill="#EF4444"/>
                <circle cx="620" cy="70" r="6" fill="#EF4444"/>
                <text x="420" y="380" textAnchor="middle" fontSize="12" fill="#6B7280">RFID</text>
                
                {/* Category labels */}
                <text x="120" y="400" textAnchor="middle" fontSize="12" fill="#6B7280">Coverage</text>
                <text x="220" y="400" textAnchor="middle" fontSize="12" fill="#6B7280">Frequency</text>
                <text x="320" y="400" textAnchor="middle" fontSize="12" fill="#6B7280">Hardware Cost</text>
                <text x="420" y="400" textAnchor="middle" fontSize="12" fill="#6B7280">Ongoing Cost</text>
                <text x="520" y="400" textAnchor="middle" fontSize="12" fill="#6B7280">Installation</text>
                <text x="620" y="400" textAnchor="middle" fontSize="12" fill="#6B7280">Data Richness</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>


{/* related articles */}
    <div id="gpsfleet-articles">
      <Article
        title="Related Articles" 
        items={articles1} 
        buttonText="View Post" 
        buttonColor="bg-[#ff8633]" 
      />
      </div>

      {/* faq */}
      <div id="gpsfleet-faq" className="">
        <FAQ faqs={ gpsFleetFAQs} />
      </div>
    </>
  );
};

export default GPSFleetContent;