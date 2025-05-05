import React, { useState, useEffect } from 'react';
import backgroundImage from "../assets/images/bg.webp";
import "./Home.css";
import haha from "/images/design.png";
import { ArrowRight } from 'lucide-react';


import { 
  Phone, 
  FileText, 
  CreditCard, 
  Users, 
  DollarSign, 
  MapPin, 
  Briefcase, 
  UserCheck, 
  Wallet, 
  Mail, 
  Globe, 
  Headphones, 
  Clipboard 
} from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Feedback from './Feedback';
import Navbar from "../components/Navbar";
import WideDiv from "../components/WideDiv";
import Footer from "../components/Footer";
import CookieConsent from './CookieConsent';
import PhoneSystem from './BusinessPhoneSystem';

const Home = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  // HANDELING THE SUBSCRIBE BUTTON
  const handleSubscribe = async () => {
    if (!email.trim()) return alert("Please enter a valid email!");

    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "4e9faa02-cb51-4253-98e6-b5794f4ece3a"); // Replace with your Web3Forms API Key
    formData.append("subject", "New Subscription");
    formData.append("from_name", "Subscription Form");
    formData.append("message", `New user subscribed: ${email}`);
    formData.append("reply_to", email);
    formData.append("redirect", "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubscribed(true);
        setTimeout(() => {
          setEmail(""); // Clear input field
          setSubscribed(false); // Reset button state
        }, 3000); // Reset form after 3 seconds
      } else {
        alert("Failed to subscribe. Try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const testimonials = [
    {
      avatar: "A",
      avatarColor: "bg-purple-600",
      name: "Aisha R.",
      date: "06/12/2024",
      stars: 5,
      text: "Compare Bazaar transformed our email marketing strategy completely. Their team helped us build campaigns that actually get opened, with a 300% increase in engagement. Now I actually look forward to checking our marketing metrics!"
    },
    {
      avatar: "M",
      avatarColor: "bg-red-600",
      name: "Michael T.",
      date: "11/27/2023",
      stars: 5,
      text: "As a small business owner, I was overwhelmed by lead generation. Compare Bazaar delivered qualified leads that actually converted. Their CRM integration made tracking everything seamless. Worth every penny!"
    },
    {
      avatar: "D",
      avatarColor: "bg-blue-500",
      name: "David K.",
      date: "10/31/2023",
      stars: 5,
      text: "Our new website built by Compare Bazaar has increased our online conversions by 45% in just two months. They understood our vision and created a site that truly represents our brand while being incredibly functional."
    },
    {
      avatar: "J",
      avatarColor: "bg-green-500",
      name: "Jessica L.",
      date: "09/15/2024",
      stars: 5,
      text: "The call center solutions from Compare Bazaar have revolutionized our customer service. Response times are faster, customer satisfaction is up, and our team has better tools to manage calls. It's like we upgraded to first class!"
    },
    {
      avatar: "R",
      avatarColor: "bg-yellow-500",
      name: "Robert C.",
      date: "08/20/2024",
      stars: 5,
      text: "I was skeptical about outsourcing lead generation, but Compare Bazaar proved me wrong. The quality of leads we received was exceptional, and their CRM integration made follow-ups effortless. Our sales have never been better!"
    },
    {
      avatar: "S",
      avatarColor: "bg-indigo-600",
      name: "Sophia M.",
      date: "07/05/2024",
      stars: 5,
      text: "From website design to email automation, Compare Bazaar has been our one-stop solution for digital growth. Their team understands how all the pieces work together to build a complete marketing ecosystem. Truly partners in our success!"
    }
];
  const clients = [
    { name: "Willscot", image: "./images/zoho.png" },
    { name: "RingCentral", image: "./images/zoom.png" },
    { name: "Culligan", image: "./images/twillio.png" },
    { name: "Toshiba", image: "./images/activ.png" },
    { name: "Satellite", image: "./images/azuga.png" },
    { name: "Google", image: "./images/bomb.png" },
    { name: "Client 7", image: "./images/cloud.png" },
    { name: "Apple", image: "./images/creatio.png" },
    { name: "Apple 2", image: "./images/design.png" },
    { name: "Netflix", image: "./images/goan.png" },
    { name: "Netflix 2", image: "./images/goto.png" },
    { name: "Netflix 3", image: "./images/honey.png" },
    { name: "Google", image: "./images/hub.png" },
    { name: "Client 7", image: "./images/motive.png" },
    { name: "Apple", image: "./images/nextiva.png" },
    { name: "Apple 2", image: "./images/ooma.png" },
    { name: "Netflix", image: "./images/pipe.png" },
    { name: "Netflix 2", image: "./images/ringcentral.png" },
    { name: "Google", image: "./images/samsara.png" },
    { name: "Client 7", image: "./images/tele.png" },
    { name: "Apple", image: "./images/teramind.png" },
    { name: "Apple 2", image: "./images/veri.png" },
    { name: "Netflix", image: "./images/verizon.png" },
    { name: "Netflix 2", image: "./images/vonage.png" },
  ];

  // Handle component mounting and resizing
  useEffect(() => {
    setIsMounted(true);
    setWidth(window.innerWidth);
    
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      
      // Get current and new logos per screen values
      const currentLogosPerScreen = getLogosPerScreen(width);
      const newLogosPerScreen = getLogosPerScreen(newWidth);
      
      // If number of logos shown changes due to resize, adjust activeIndex
      if (currentLogosPerScreen !== newLogosPerScreen) {
        // Calculate what "group" we're currently on
        const currentGroup = Math.floor(activeIndex / currentLogosPerScreen);
        
        // Set new activeIndex based on the same group but with new logosPerScreen
        const newStartIndex = currentGroup * newLogosPerScreen;
        
        // Make sure we don't exceed the maximum valid index
        const maxValidIndex = Math.max(0, clients.length - newLogosPerScreen);
        setActiveIndex(Math.min(newStartIndex, maxValidIndex));
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width, activeIndex]);

  // Number of logos to show at once - accepts width parameter for calculations
  const getLogosPerScreen = (screenWidth) => {
    if (!screenWidth) screenWidth = width || window.innerWidth;
    
    if (screenWidth < 640) return 1; // Small screens: 1 logo
    if (screenWidth < 1024) return 3; // Medium screens: 3 logos
    return 6; // Large screens: 6 logos
  };

  // Current logos per screen
  const logosPerScreen = getLogosPerScreen();
  
  // Get visible logos based on active index
  const getVisibleLogos = () => {
    return clients.slice(activeIndex, activeIndex + logosPerScreen);
  };

  const goToLogo = (index) => {
    // Ensure index is a multiple of logosPerScreen
    const adjustedIndex = index * logosPerScreen;
    
    // Make sure we don't exceed the maximum valid index
    const maxValidIndex = Math.max(0, clients.length - logosPerScreen);
    setActiveIndex(Math.min(adjustedIndex, maxValidIndex));
  };

  const nextLogo = () => {
    if (activeIndex + logosPerScreen < clients.length) {
      setActiveIndex((prev) => prev + logosPerScreen);
    } else {
      setActiveIndex(0); // Restart from the beginning
    }
  };

  const prevLogo = () => {
    if (activeIndex - logosPerScreen >= 0) {
      setActiveIndex((prev) => prev - logosPerScreen);
    } else {
      // Jump to the last valid starting position
      const maxValidIndex = Math.max(0, clients.length - logosPerScreen);
      setActiveIndex(maxValidIndex);
    }
  };

  const shouldShowDots = () => {
    return width >= 640 && clients.length > logosPerScreen; // Only show dots on medium+ screens when needed
  };

  const getNumberOfDots = () => {
    return Math.ceil(clients.length / logosPerScreen);
  };

  // Don't render until component is mounted to avoid SSR issues with window
  if (!isMounted) return null;


  // Updated categorized cards data with only Marketing, Technology, and Sales
  const categories = [
    {
      title: "Marketing",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
</svg>
      ),
      cards: [
        {
          title: "Your Guide to Creating a Small Business Marketing Plan",
          link: "/marketing-plan",
        },
        {
          title: "5 Tips to Market Research Like a Pro",
          link: "/market-research-tips",
        },
        {
          title: "6 Email Marketing Challenges and How to Overcome Them",
          link: "/email-marketing-challenges",
        },
      ],
    },
    {
      title: "Technology",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
      ),
      cards: [
        {
          title: "How Telematics Can Improve Worksite Productivity",
          link: "/telematics-productivity",
        },
        {
          title: "Types of Cyber Risks Businesses Should Be Aware Of",
          link: "/cyber-risks",
        },
        {
          title: "Essential Tech Tools for Small Business Growth",
          link: "/tech-tools-growth",
        },
      ],
    },
    {
      title: "Sales",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      ),
      cards: [
        {
          title: "10 Proven Strategies to Boost Your Sales Pipeline",
          link: "/sales-pipeline-strategies",
        },
        {
          title: "How to Build an Effective Sales Team from Scratch",
          link: "/build-sales-team",
        },
        {
          title: "Converting Leads to Customers: The Ultimate Guide",
          link: "/lead-conversion-guide",
        },
      ],
    },
  ];

  const tools = [
    { 
      name: "Best CRM Software", 
      icon: <Users />, 
      link: "/BestCRMSoftware",
      image: "/images/tool1.avif"
    },
    { 
      name: "Best Email Marketing Services", 
      icon: <Mail />, 
      link: "/EmailMarketing",
      image: "/images/tool2.jpg"
    },
    { 
      name: "Best Website Building Platforms", 
      icon: <Globe />, 
      link: "/BestWebsiteBuildingPlatform",
      image: "/images/tool3.webp"
    },
    { 
      name: "Business Phone Systems", 
      icon: <Phone />, 
      link: "/phone-systems",
      image: "/images/tool4.jpg"
    },
    { 
      name: "GPS Fleet Management Software", 
      icon: <MapPin />, 
      link: "/GpsFleetMangement",
      image: "/images/tool5.webp"
    },
    { 
      name: "Best Employee Management Software", 
      icon: <Users />, 
      link: "/BestEmployeeMangementSoftware",
      image: "/images/tool6.jpg"
    },
    { 
      name: "Best Call Center Management Software", 
      icon: <Headphones />, 
      link: "/Callcenter",
      image: "/images/tool7.jpg"
    },
    { 
      name: "Careers", 
      icon: <Briefcase />, 
      link: "/Careers",
      image: "/images/tool8.jpg"
    },
    { 
      name: "Best Project Management Software", 
      icon: <Clipboard />, 
      link: "/BestProjectManagement",
      image: "/images/tool9.webp"
    },
  ];

  return (
    <>
      <Navbar />
      
      <div className="relative w-full ">
        {/* First Section*/}
        <div className="relative min-h-[520px] bg-gradient-to-r from-[#ff8633] to-amber-700 overflow-hidden border-0">
  {/* Main Content Grid - Changed to more flexible layout for better responsive behavior */}
  <div className="flex flex-col lg:flex-row container mx-auto">
    {/* Left Content - Text and form section */}
    <div className="relative z-10 flex flex-col justify-center py-10 px-4 sm:px-8 md:px-12 lg:w-1/2 lg:py-20 lg:px-16 ">
      {/* Main Heading - Responsive text sizes */}
      <h1 className="text-3xl sm:text-3xl lg:text-3xl font-bold sm:mb-2 text-left text-white leading-tight">
        Empowering Decisions <br className="hidden sm:block" />
        Through Price & Insight.
      </h1>

      {/* Subheading - Adjusted for readability on small screens */}
      <p className="text-sm md:text-base mb-6 sm:mb-8 max-w-xl text-left text-gray-100">
     We help market buyers cut through the clutter by providing clear, side-by-side price quote comparisons from multiple vendors. Whether you're investing in new tech, upgrading your systems, or exploring innovative solutions, Compare Bazaar empowers you with the insights you need to choose the right option—quickly, confidently, and cost-effectively.
      </p>

      {/* Email Subscription Form - Made responsive */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="w-full flex-grow pl-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 mr-2 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full py-3 sm:py-4 px-2 outline-none text-gray-700 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>
          <button
            className="w-full sm:w-auto text-white font-medium py-3 sm:py-4 px-6 transition-colors disabled:opacity-50 flex items-center justify-center"
            style={{ backgroundColor: '#ff8633' }}
            onClick={handleSubscribe}
            disabled={loading}
          >
            {loading ? "Subscribing..." : subscribed ? "Subscribed ✅" : "Subscribe"}
            {!loading && !subscribed && <ChevronRight className="ml-1 h-5 w-5" />}
          </button>
        </div>
      </div>
    </div>

    {/* Microscope Visual - Now visible on all screen sizes */}
    <div className="flex items-center justify-center relative py-6 md:py-10 lg:w-1/2">
      {/* Background decorative elements - Responsive sizes */}
      <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-orange-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-32 md:w-56 h-32 md:h-56 bg-amber-500 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-20 md:top-40 left-10 md:left-20 w-24 md:w-40 h-24 md:h-40 bg-orange-600 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '3s' }}></div>
      
      {/* Responsive Microscope Visual */}
      <div 
        className="relative z-10 transform -rotate-12 scale-50 sm:scale-75 lg:scale-90 xl:scale-100" 
        style={{ 
          animation: 'slowFloat 6s ease-in-out infinite',
          position: 'relative',
          transform: 'rotate(-12deg)'
        }}
      >
        {/* Main Lens/Circle */}
        <div className="relative w-72 xl:w-80 h-72 xl:h-80 rounded-full border-8 border-gray-300 bg-white bg-opacity-95 shadow-2xl flex items-center justify-center overflow-hidden">
          {/* Inner metal rim */}
          <div className="absolute inset-2 rounded-full border-4 border-gray-200"></div>
          
          {/* Content inside the lens */}
          <div className="absolute inset-8 flex flex-col">
            {/* Mock Price Comparison */}
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-bold text-gray-800 ml-18">Compare-Bazaar</div>
              <div className="flex space-x-1">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <div className="h-2 w-2 rounded-full bg-red-500"></div>
              </div>
            </div>
            
            {/* Price bars */}
            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <div className="text-xs font-medium ">Best CRM Management Software</div>
                </div>
                {/* <div className="text-xs font-bold">$499</div> */}
              </div>
              <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
                <div className="h-full rounded-full" style={{ width: '75%', backgroundColor: '#ff8633' }}></div>
              </div>
              <div className="flex justify-end">
                <div className="text-xs text-gray-500 mt-1">Features: 8/10</div>
              </div>
            </div>
            
            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <div className="text-xs font-medium">Best Email MArketing Services</div>
                </div>
                {/* <div className="text-xs font-bold">$399</div> */}
              </div>
              <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
                <div className="h-full rounded-full" style={{ width: '60%', backgroundColor: '#ff8633', opacity: 0.8 }}></div>
              </div>
              <div className="flex justify-end">
                <div className="text-xs text-gray-500 mt-1">Features: 7/10</div>
              </div>
            </div>
            
            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                  <div className="text-xs font-medium">Business Phone System</div>
                </div>
                {/* <div className="text-xs font-bold">$299</div> */}
              </div>
              <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
                <div className="h-full rounded-full" style={{ width: '45%', backgroundColor: '#ff8633', opacity: 0.6 }}></div>
              </div>
              <div className="flex justify-end">
                <div className="text-xs text-gray-500 mt-1">Features: 5/10</div>
              </div>
            </div>
            
            {/* Enhanced savings indicator */}
            <div className="mt-4 p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-amber-100 shadow-sm">
              <div className="flex items-center">
                <div className="mr-3 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md" style={{ backgroundColor: '#ff8633' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2h10a1 1 0 100-2H3zm0 4a1 1 0 000 2h6a1 1 0 000-2H3zm0 4a1 1 0 100 2h6a1 1 0 100-2H3z" clipRule="evenodd" />
                  </svg>
                </div>
                {/* <div>
                  <div className="text-xs font-semibold text-gray-500">INSIGHT</div>
                  <div className="text-sm font-bold text-gray-800">Save up to <span style={{ color: '#ff8633' }}>45%</span> with Model Z</div>
                </div> */}
              </div>
            </div>
          </div>
          
          {/* Magnifying effect */}
          {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-white to-transparent opacity-40 rounded-full"></div> */}
          {/* <div className="absolute top-4 left-10 w-20 h-8 bg-white bg-opacity-60 rounded-full transform rotate-30"></div> */}
        </div>
        
        {/* Microscope body - Hidden on very small screens */}
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          {/* Connection ring */}
          <div className="w-20 h-6 bg-gray-300 rounded-lg shadow-inner"></div>
          
          {/* Main handle */}
          <div className="w-14 h-22 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-600 rounded-b-xl relative shadow-lg">
            {/* Handle details */}
            <div className="absolute top-10 w-full h-2 bg-gray-500"></div>
            <div className="absolute top-20 w-full h-10 bg-gray-300 shadow-inner"></div>
            <div className="absolute top-26 w-full h-2 bg-gray-500"></div>
            
            {/* Adjustment knobs */}
            <div className="absolute right-full top-12 w-6 h-6 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-md transform translate-x-1"></div>
            <div className="absolute left-full top-24 w-6 h-6 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-md transform -translate-x-1"></div>
          </div>
          
          {/* Base */}
          <div className="w-32 h-4 bg-gray-400 rounded-lg -mt-2"></div>
          <div className="w-40 h-6 bg-gray-600 rounded-lg -mt-1"></div>
        </div>
        
        {/* Microscope focus adjustment wheel */}
        <div className="absolute top-1/3 -right-3 transform translate-x-1/2 w-12 h-24">
          <div className="w-full h-full bg-gradient-to-r from-gray-400 to-gray-600 rounded-r-lg shadow-lg flex flex-col justify-around items-center py-2">
            <div className="w-8 h-2 bg-gray-300 rounded-full shadow-inner"></div>
            <div className="w-8 h-2 bg-gray-300 rounded-full shadow-inner"></div>
            <div className="w-8 h-2 bg-gray-300 rounded-full shadow-inner"></div>
          </div>
        </div>
      </div>
      
      {/* Floating Labels - Responsive positioning and hidden on smallest screens */}
      <div className="hidden sm:block absolute top-12 right-12 md:right-24 p-2 bg-white rounded-lg shadow-lg border-l-4 border-amber-500 z-20">
        <div className="flex items-center space-x-2">
          <div className="h-6 md:h-8 w-6 md:w-8 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#ff8633' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 md:h-4 w-3 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div className="text-xs font-medium">Analytics</div>
        </div>
      </div>
      
      <div className="hidden sm:block absolute bottom-12 md:bottom-24 left-10 md:left-20 p-2 bg-white rounded-lg shadow-lg border-l-4 border-orange-500 z-20">
        <div className="flex items-center space-x-2">
          <div className="h-6 md:h-8 w-6 md:w-8 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#ff8633' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 md:h-4 w-3 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="text-xs font-medium">Best Value</div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Background SVG wave */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
      <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,176C672,192,768,224,864,224C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  </div>
  
  {/* Custom keyframe animation for slow floating effect */}
  <style jsx>{`
    @keyframes slowFloat {
      0%, 100% {
        transform: translateY(0) rotate(-12deg);
      }
      50% {
        transform: translateY(-42px) rotate(-12deg);
      }
    }
  `}</style>
</div>
        {/* BEST TOOLS SECTION */}
        {/* #ebf5fb;color light blue if needed */}
        <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Best tools to run your business</h2>
        <p className="text-base text-gray-800 max-w-2xl mx-auto">
        Take your time to explore and compare honest reviews, prices, and features of the best brands and products out there, so you can find the one that truly fits your needs and budget.
        </p>
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {tools.map((tool, index) => (
          <div 
            key={index} 
            className={`break-inside-avoid rounded-xl shadow-xl overflow-hidden`}
          >
            <div className="p-5 lg:h-[400px]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    index % 1 === 0 ? 'bg-[#000e54] text-white' : 'bg-blue-100 text-[#000e54]'
                  }`}>
                    {tool.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                </div>
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                  {tool.category}
                </span>
              </div>
              
              <div className="mb-4 rounded-lg overflow-hidden">
                <img 
                  src={tool.image} 
                  alt={tool.name}
                  className="w-full h-60 object-cover"
                />
              </div>
              
              <div className="flex justify-between items-center">
                <a 
      href={tool.link}
      className="inline-flex items-center justify-center px-4 py-2 bg-[#ff8633] hover:bg-[#e67420] text-white font-semibold rounded-xl transition-all duration-300 shadow-sm hover:shadow gap-2 text-base"
    >
      Learn More
      <ArrowRight size={18} />
    </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

        {/* CLIENTS SECTION */}
        <section className="py-16 px-5 bg-white">
          <div className="w-full max-w-7xl mx-auto py-10 px-4">
            <h2 className="text-3xl font-bold text-center mb-2">Brands We Work With</h2>
            <p className="text-center text-gray-600 mb-8 text-sm">Our Learners Work at Global Companies & Startups</p>

            {/* Navigation and logos container */}
            <div className="relative flex items-center justify-center">
              {/* Left Arrow */}
              <button
                onClick={prevLogo}
                className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
                aria-label="Previous logos"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              {/* Logo Container - reduced width for 1024px with increased spacing */}
              <div className="flex justify-center items-center space-x-12 overflow-hidden w-full lg:w-3/4 xl:w-4/5">
                {getVisibleLogos().map((client, index) => (
                  <div key={index} className="flex items-center justify-center h-15 w-30 transition-all duration-300">
                    <img
                      src={client.image}
                      alt={`${client.name} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextLogo}
                className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
                aria-label="Next logos"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6">
              {shouldShowDots() && (
                <div className="flex">
                  {Array.from({ length: getNumberOfDots() }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToLogo(i)}
                      className={`w-2 h-2 rounded-full mx-1 mb-1 transition-colors duration-200 ${
                        i === Math.floor(activeIndex / logosPerScreen)
                          ? 'bg-gray-700'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to logo group ${i + 1}`}
                      aria-current={i === Math.floor(activeIndex / logosPerScreen) ? 'true' : 'false'}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
        <div className="relative w-full bg-white py-12 px-4 md:px-8 lg:px-12 overflow-hidden">
        
        
        </div>
        {/* <Feedback 
        title="What Our Customers Say"
        testimonials={testimonials}/> */}
        <WideDiv/>

        <Footer/>
      
      </div>
      <CookieConsent/>
    </>
  );
};

export default Home;