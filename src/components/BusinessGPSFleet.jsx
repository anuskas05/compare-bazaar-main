import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';

const BusinessGPSFleet = () => {
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const widgetRef = useRef(null);

  useEffect(() => {
    if (document.querySelector('script[src*="bzWidget.min.js"]')) return;
  
    const script1 = document.createElement('script');
    script1.src = "https://cdn.buyerzone.com/apps/widget/bzWidget.min.js";
    script1.async = true;
    script1.setAttribute('data-bzwidget', '');
    script1.setAttribute('data-bzwidget-pub-id', '59578');
    script1.setAttribute('data-bzwidget-color-palette-name', 'default');
    script1.setAttribute('data-bzwidget-category-id', '10230');
  
    const container = document.getElementById('buyerzone-widget-container');
    if (container) {
      container.appendChild(script1);
      
      script1.onload = () => {
        if (typeof bzWidget !== 'undefined') {
          bzWidget.init();
        }
      };
    }
  
    return () => {
      if (container && container.contains(script1)) {
        container.removeChild(script1);
      }
    };
  }, []);

  useEffect(() => {
    const iframe = document.createElement('iframe');
    iframe.src = 'about:blank';
    iframe.style.width = '100%';
    iframe.style.maxWidth = '500px';
    iframe.style.height = window.innerWidth < 640 ? '670px' : '620px';
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.style.display = 'block';
    iframe.style.margin = '0 auto';
    iframe.scrolling = 'no';
    
    const widgetContainer = document.getElementById('buyerzone-widget-container');
    
    if (widgetContainer) {
      widgetContainer.innerHTML = '';
      widgetContainer.appendChild(iframe);
      
      setTimeout(() => {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>GPS Fleet Management Comparison</title>
            <style>
              body {
                font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                margin: 0;
                padding: 0;
                align-items: center;
                text-align-center;
                background: linear-gradient(135deg, #f0f4ff 0%, #ffffff 100%);
                overflow: hidden;
              }
              #bzWidgetContainer {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 12px;
                box-shadow: 0 8px 30px rgba(0, 14, 84, 0.1);
              }
              .loading {
                text-align: center;
                padding: 40px;
                width: 100%;
                background: linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(240,244,255,0.9) 100%);
                border-radius: 10px;
                box-shadow: 0 4px 20px rgba(16, 79, 255, 0.07);
              }
              .spinner {
                border: 4px solid rgba(0, 14, 84, 0.1);
                border-left: 4px solid #104fff;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                animation: spin 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
                margin: 25px auto;
              }
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              @media (max-width: 640px) {
                .loading {
                  padding: 25px;
                }
                .spinner {
                  width: 40px;
                  height: 40px;
                }
              }
            </style>
          </head>
          <body>
            <div id="bzWidgetContainer">
              <div class="loading">
                <div class="spinner"></div>
                <p style="color: #000e54; font-size: 16px; font-weight: 500;">Loading fleet management comparison...</p>
              </div>
            </div>
            
            <script data-bzwidget
              src="https://cdn.buyerzone.com/apps/widget/bzWidget.min.js"
              data-bzwidget-pub-id="59578"
              data-bzwidget-color-palette-name="default"
              data-bzwidget-category-id="10230">
            </script>
            
            <script>
              function initBzWidget() {
                if (typeof bzWidget !== 'undefined') {
                  bzWidget.init();
                  document.getElementById('bzWidgetContainer').querySelector('.loading').style.display = 'none';
                } else {
                  setTimeout(initBzWidget, 500);
                }
              }
              
              document.addEventListener('DOMContentLoaded', function() {
                setTimeout(initBzWidget, 1000);
                
                setTimeout(function() {
                  if (typeof bzWidget === 'undefined') {
                    document.getElementById('bzWidgetContainer').innerHTML = 
                      '<p style="text-align:center; padding:30px; color:#e74c3c; background: linear-gradient(180deg, #fff0f0 0%, #ffe0e0 100%); border-radius: 10px; box-shadow: 0 4px 15px rgba(231, 76, 60, 0.1);">Unable to load the comparison tool. Please refresh and try again.</p>';
                  }
                }, 10000);
              });

              window.addEventListener('resize', function() {
                if (typeof bzWidget !== 'undefined' && bzWidget.refresh) {
                  bzWidget.refresh();
                }
              });
            </script>
          </body>
          </html>
        `);
        iframeDoc.close();
        
        setWidgetLoaded(true);
      }, 0);
    }
    
    const handleResize = () => {
      if (iframe) {
        iframe.style.height = window.innerWidth < 640 ? '700px' : '620px';
        iframe.style.width = '100%';
        iframe.style.maxWidth = '500px';
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (

   <>
   <Navbar/>
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Strong linear gradient background from light to dark blue */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-400 to-blue-900"></div>

{/* Enhanced grid overlay for technical feel - moved to sides */}
<div className="absolute inset-0 opacity-10 pointer-events-none">
  <svg className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect x="10%" width="80%" height="100%" fill="none" />
    <rect width="10%" height="100%" fill="url(#grid)" />
    <rect x="90%" width="10%" height="100%" fill="url(#grid)" />
  </svg>
</div>

{/* Left side GPS elements */}
<div className="absolute left-0 top-0 bottom-0 w-1/4 pointer-events-none">
  {/* GPS satellite animation */}
  <div className="absolute top-1/5 left-1/4 w-16 h-16">
    <svg className="w-full h-full animate-rotate-slow" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" />
      <circle cx="50" cy="50" r="30" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3,3" />
      <circle cx="50" cy="50" r="20" fill="none" stroke="#3b82f6" strokeWidth="1" />
      <circle cx="50" cy="30" r="5" fill="#3b82f6" />
      <circle cx="70" cy="50" r="5" fill="#3b82f6" />
      <circle cx="50" cy="70" r="5" fill="#3b82f6" />
      <circle cx="30" cy="50" r="5" fill="#3b82f6" />
    </svg>
  </div>

  {/* Moving vehicle icon */}
  <div className="absolute bottom-1/3 left-1/3 w-12 h-12 animate-move-right">
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
      <path d="M5 17H3V12H19V17H17M5 17L7 13H17L19 17M5 17H19M7 7H17M7 7H5V10H19V7H17M7 7V5H17V7" />
    </svg>
  </div>

  {/* Signal strength indicator */}
  <div className="absolute top-2/3 left-1/4 flex items-end space-x-1">
    <div className="w-2 bg-blue-300 rounded-t opacity-70" style={{ height: '10px' }}></div>
    <div className="w-2 bg-blue-400 rounded-t opacity-80" style={{ height: '20px' }}></div>
    <div className="w-2 bg-blue-500 rounded-t opacity-90" style={{ height: '30px' }}></div>
    <div className="w-2 bg-blue-600 rounded-t" style={{ height: '40px' }}></div>
  </div>
</div>

{/* Right side GPS elements */}
<div className="absolute right-0 top-0 bottom-0 w-1/4 pointer-events-none">
  {/* Route visualization */}
  <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-30">
    <svg className="w-full h-full" viewBox="0 0 100 100">
      <path d="M10,10 C30,30 50,20 70,40 C90,60 80,80 60,90" 
            stroke="#3b82f6" 
            strokeWidth="2" 
            fill="none" 
            strokeDasharray="5,3" />
      <circle cx="10" cy="10" r="3" fill="#3b82f6" />
      <circle cx="60" cy="90" r="3" fill="#3b82f6" />
    </svg>
  </div>

  {/* Speedometer */}
  <div className="absolute bottom-1/4 right-1/4 w-16 h-16">
    <svg className="w-full h-full" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="2,1" opacity="0.5" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="8" strokeDasharray="100,1000" 
              strokeLinecap="round" transform="rotate(-90 50 50)" opacity="0.7">
        <animate attributeName="stroke-dasharray" values="30,1000;80,1000;30,1000" dur="4s" repeatCount="indefinite" />
      </circle>
      <text x="50" y="55" textAnchor="middle" fontSize="20" fill="#3b82f6" opacity="0.8">65</text>
    </svg>
  </div>

  {/* Location pin */}
  <div className="absolute top-2/3 right-1/3 w-10 h-10 animate-bounce-slow">
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="#3b82f6" opacity="0.7">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  </div>
</div>

{/* Floating route visualization elements - positioned at sides */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute top-1/4 left-[5%] w-40 h-40 rounded-full bg-blue-300 opacity-15 animate-pulse-slow"></div>
  <div className="absolute bottom-1/3 right-[5%] w-48 h-48 rounded-full bg-blue-400 opacity-15 animate-pulse-slower"></div>
</div>

{/* Route path visualization - positioned at sides */}
<div className="absolute inset-0 opacity-15 pointer-events-none">
  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M5,10 C15,50 10,70 5,90" stroke="#3b82f6" strokeWidth="0.8" strokeDasharray="2,2" fill="none" />
    <path d="M95,20 C85,30 90,40 95,20" stroke="#3b82f6" strokeWidth="0.8" strokeDasharray="2,2" fill="none" />
  </svg>
</div>
      
      {/* Main content container */}
      <div className="relative z-10 w-full flex flex-col items-center py-10 px-4 sm:px-6">
  <div className="w-full max-w-6xl mx-auto">
    
    {/* Horizontal banner for small/medium screens */}
    <div className="lg:hidden lg:mb-10 sm:mb-2 md:mb-5 w-full flex justify-center relative group">
      <div className="absolute -inset-1  opacity-75 rounded-xl  transition-all duration-300 group-hover:opacity-90"></div>
      <a href="https://app.buyerzone.com/transportation/gps-fleet-tracking-solutions/rfqz?publisherId=59578&amp;publisherTypeId=1788%27;"
        target="_self" className="relative block">
        <div className="relative">
          <div className="rounded-lg h-[120px] w-full max-w-[600px] object-cover shadow-2xl shadow-blue-900/50 transition-all duration-500 group-hover:shadow-[#104fff]/40 group-hover:shadow-2xl overflow-hidden">
            <svg width="600" height="120" viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <rect width="100%" height="100%" fill="#f0f8ff"/>
              <rect x="20" y="20" width="560" height="80" rx="8" fill="#ffffff" stroke="#4682b4" strokeWidth="1.5"/>
              
              <g transform="translate(100, 30)">
                <text fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#4682b4" textAnchor="middle">
                  <tspan x="30" y="10">Need GPS Fleet Management?</tspan>
                </text>
                <text fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#ff7f50" textAnchor="middle">
                  <tspan x="5" y="30">Optimize your fleet!</tspan>
                </text>
                
                <g transform="translate(300, 0)">
                  <circle cx="0" cy="30" r="30" fill="#e6f2ff" stroke="#4682b4" strokeWidth="1.5"/>
                  <circle cx="0" cy="30" r="20" fill="#d1e7ff" stroke="#4682b4" strokeWidth="1.5"/>
                  <circle cx="0" cy="30" r="10" fill="#b8d9ff" stroke="#4682b4" strokeWidth="1.5"/>
                  <circle cx="0" cy="30" r="5" fill="#4682b4" stroke="#4682b4" strokeWidth="1.5"/>
                  <path d="M0 0 L0 15 M0 45 L0 60 M-30 30 L-45 30 M30 30 L45 30" stroke="#4682b4" strokeWidth="1.5"/>
                </g>
                
                <g transform="translate(140, 20)">
                  <rect x="0" y="10" width="100" height="25" rx="4" fill="#ff7f50"/>
                  <text x="50" y="27" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="#ffffff" textAnchor="middle">Free Quotes</text>
                </g>
                
                <g transform="translate(450, 20)">
                  <text fontFamily="Arial" fontSize="12" fill="#ff8633" textAnchor="left" opacity="0.8" fontWeight="bold">
                    <tspan x="-100" y="0">• Real-time Tracking</tspan>
                    <tspan x="-100" y="15">• Route Optimization</tspan>
                    <tspan x="-100" y="30">• Fuel Savings</tspan>
                    <tspan x="-100" y="45">• Driver Safety</tspan>
                  </text>
                </g>
              </g>
            </svg>
          </div>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-[#000e54]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-[#104fff] rounded-full opacity-30 blur-xl group-hover:opacity-70 transition-opacity duration-500"></div>
        </div>
      </a>
    </div>

    {/* Main content layout */}
    <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-8">
      {/* Vertical banner for large screens */}
      <div className="hidden lg:block relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#0026b6] to-[#104fff] opacity-75 rounded-xl blur transition-all duration-300 group-hover:opacity-90"></div>
        <a href="https://app.buyerzone.com/transportation/gps-fleet-tracking-solutions/rfqz?publisherId=59578&amp;publisherTypeId=1788%27;"
          target="_self" className="relative block">
          <div className="relative">
            <div className="rounded-lg h-[680px] w-[160px] object-cover shadow-2xl shadow-blue-900/50 transition-all duration-500 group-hover:shadow-[#104fff]/40 group-hover:shadow-2xl overflow-hidden">
              <svg width="160" height="680" viewBox="0 0 160 680" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect width="100%" height="100%" fill="#f0f8ff"/>
                <rect x="10" y="20" width="140" height="640" rx="8" fill="#ffffff" stroke="#4682b4" strokeWidth="1.5"/>
                <text x="80" y="60" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="#4682b4" textAnchor="middle">
                  Need GPS Fleet
                </text>
                <text x="80" y="80" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="#4682b4" textAnchor="middle">
                  Management?
                </text>
                <text x="80" y="120" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#ff7f50" textAnchor="middle">
                  FleetTrackPro
                </text>
                <text x="80" y="160" fontFamily="Arial" fontSize="13" fill="#4682b4" textAnchor="middle" fontWeight="bold">
                  can help
                </text>
                <text x="80" y="180" fontFamily="Arial" fontSize="13" fill="#4682b4" textAnchor="middle" fontWeight="bold">
                  you optimize
                </text>
                <text x="80" y="200" fontFamily="Arial" fontSize="13" fill="#4682b4" textAnchor="middle" fontWeight="bold">
                  your fleet!
                </text>
                <circle cx="80" cy="280" r="40" fill="#e6f2ff" stroke="#4682b4" strokeWidth="1.5"/>
                <circle cx="80" cy="280" r="30" fill="#d1e7ff" stroke="#4682b4" strokeWidth="1.5"/>
                <circle cx="80" cy="280" r="20" fill="#b8d9ff" stroke="#4682b4" strokeWidth="1.5"/>
                <circle cx="80" cy="280" r="10" fill="#4682b4" stroke="#4682b4" strokeWidth="1.5"/>
                <path d="M80 240 L80 200 M80 320 L80 360 M40 280 L10 280 M120 280 L150 280" stroke="#4682b4" strokeWidth="1.5"/>
                <rect x="40" y="400" width="80" height="30" rx="4" fill="#ff7f50"/>
                <text x="80" y="420" fontFamily="Arial" fontSize="13" fontWeight="bold" fill="#ffffff" textAnchor="middle">
                  Free Quotes
                </text>
                <rect x="20" y="450" width="120" height="2" fill="#4682b4" opacity="0.3"/>
                <text x="80" y="480" fontFamily="Arial" fontSize="14" fill="#ff8633" textAnchor="middle" opacity="0.8" fontWeight="bold">
                  Real-time Tracking
                </text>
                <text x="80" y="500" fontFamily="Arial" fontSize="14" fill="#ff8633" textAnchor="middle" opacity="0.8" fontWeight="bold">
                  Route Optimization
                </text>
                <text x="80" y="520" fontFamily="Arial" fontSize="14" fill="#ff8633" textAnchor="middle" opacity="0.8" fontWeight="bold">
                  Fuel Savings
                </text>
                <text x="80" y="540" fontFamily="Arial" fontSize="14" fill="#ff8633" textAnchor="middle" opacity="0.8" fontWeight="bold">
                  Driver Safety
                </text>
              </svg>
            </div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-[#000e54]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-[#104fff] rounded-full opacity-30 blur-xl group-hover:opacity-70 transition-opacity duration-500"></div>
          </div>
        </a>
      </div>
      
      {/* Information panel */}
      <div className="w-full px-4 mx-auto md:max-w-[500px] sm:max-w-[500px] lg:max-w-[450px] relative group">
  <div className="absolute -inset-1 bg-gradient-to-r from-[#104fff] to-[#0026b6] opacity-60 rounded-2xl blur-md transition-all duration-300 group-hover:opacity-75 group-hover:blur-lg"></div>
  <div className="relative backdrop-blur-xl bg-gradient-to-br from-[#000a42]/40 via-[#000e54]/40 to-[#001470]/40 rounded-2xl shadow-2xl overflow-hidden border border-[#104fff]/30">
    <div className="absolute top-0 right-0 w-40 h-40 bg-[#104fff] rounded-full opacity-10 blur-2xl"></div>
    <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#104fff] rounded-full opacity-10 blur-2xl"></div>
    
    <div className="relative p-10 z-10 sm:h-[800px] md:h-[700px] lg:h-[680px]">
      <h2 className="text-3xl font-semibold text-white mb-4">🚛 Compare GPS Fleet Management Options — 100% Free!</h2>
      <div className="w-20 h-1.5 bg-gradient-to-r from-[#104fff] to-[#3c8fff] mb-8"></div>
      <h3 className="text-xl font-semibold text-blue-100 mb-7">Looking for the best GPS fleet tracking solution? We've got you covered.</h3>
      
      <div className="mb-10 space-y-6">
        <p className="text-blue-50 leading-relaxed text-base">
          Just answer a few quick questions and get customized quotes from top providers - all in under a minute.
        </p>
        
        <div className="space-y-5">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#104fff]/40 flex items-center justify-center mr-4 group-hover:bg-[#104fff]/50 transition-colors duration-300">
              <svg className="w-4 h-4 text-[#adc6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="font-medium text-blue-50 text-base">Get free, no-obligation quotes from top providers</span>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#104fff]/40 flex items-center justify-center mr-4 group-hover:bg-[#104fff]/50 transition-colors duration-300">
              <svg className="w-4 h-4 text-[#adc6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="font-medium text-blue-50 text-base">Takes less than a minute!</span>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#104fff]/40 flex items-center justify-center mr-4 group-hover:bg-[#104fff]/50 transition-colors duration-300">
              <svg className="w-4 h-4 text-[#adc6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="font-medium text-blue-50 text-base">Make smarter fleet decisions with side-by-side comparisons—all for $0.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      
      {/* Comparison widget */}
      <div className="w-full px-4 mx-auto max-w-[500px] relative group">
  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 opacity-60 rounded-2xl blur transition-all duration-300 group-hover:opacity-75"></div>
  <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
    <div className="bg-gradient-to-r from-[#104fff] to-[#0026b6] p-4 text-white text-center">
      <h3 className="text-xl font-semibold">Compare Fleet Solutions</h3>
    </div>
    <div 
      id="buyerzone-widget-container" 
      className="w-full h-full bg-white rounded-b-2xl overflow-hidden"
    ></div>
  </div>
</div>
    </div>
  </div>
</div>
    </div>
    <WideDiv/>
    <Footer/>
    </>
  );
};

export default BusinessGPSFleet;