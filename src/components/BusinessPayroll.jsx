import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';

const BusinessPayroll = () => {
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
    script1.setAttribute('data-bzwidget-category-id', '10113');
  
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
            <title>Payroll System Comparison</title>
            <style>
              body {
                font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                margin: 0;
                padding: 0;
                align-items: center;
                text-align-center;
                background: linear-gradient(135deg, #fff4f0 0%, #ffffff 100%);
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
                box-shadow: 0 8px 30px rgba(255, 134, 51, 0.1);
              }
              .loading {
                text-align: center;
                padding: 40px;
                width: 100%;
                background: linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,244,240,0.9) 100%);
                border-radius: 10px;
                box-shadow: 0 4px 20px rgba(255, 134, 51, 0.07);
              }
              .spinner {
                border: 4px solid rgba(255, 134, 51, 0.1);
                border-left: 4px solid #ff8633;
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
                <p style="color: #ff8633; font-size: 16px; font-weight: 500;">Loading payroll system comparison...</p>
              </div>
            </div>
            
            <script data-bzwidget
              src="https://cdn.buyerzone.com/apps/widget/bzWidget.min.js"
              data-bzwidget-pub-id="59578"
              data-bzwidget-color-palette-name="default"
              data-bzwidget-category-id="10113">
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
        iframe.style.height = window.innerWidth < 640 ? '650px' : '620px';
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
        {/* Strong linear gradient background from light to dark orange */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-orange-300 to-orange-700"></div>

        {/* Enhanced grid overlay for technical feel - moved to sides */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ff8633" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect x="10%" width="80%" height="100%" fill="none" />
            <rect width="10%" height="100%" fill="url(#grid)" />
            <rect x="90%" width="10%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Left side payroll elements */}
        <div className="absolute left-0 top-0 bottom-0 w-1/4 pointer-events-none">
          {/* Paycheck animation */}
          <div className="absolute top-1/5 left-1/4 w-16 h-16">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <rect x="20" y="30" width="60" height="40" rx="5" fill="#fff" stroke="#ff8633" strokeWidth="2"/>
              <rect x="25" y="35" width="50" height="10" rx="2" fill="#ffd1b3"/>
              <rect x="25" y="50" width="50" height="5" rx="1" fill="#ffb380"/>
              <rect x="25" y="60" width="50" height="5" rx="1" fill="#ffb380"/>
              <text x="50" y="80" fontFamily="Arial" fontSize="10" fill="#ff8633" textAnchor="middle">PAYROLL</text>
            </svg>
          </div>

          {/* Calculator icon */}
          <div className="absolute bottom-1/3 left-1/3 w-12 h-12">
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="#ff8633" strokeWidth="2">
              <rect x="4" y="2" width="16" height="20" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="8" y1="6" x2="16" y2="6" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="8" y1="12" x2="16" y2="12" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="8" y1="18" x2="16" y2="18" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="12" y1="8" x2="12" y2="16" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Money growth indicator */}
          <div className="absolute top-2/3 left-1/4 flex items-end space-x-1">
            <div className="w-3 bg-orange-300 rounded-t opacity-70" style={{ height: '15px' }}></div>
            <div className="w-3 bg-orange-400 rounded-t opacity-80" style={{ height: '25px' }}></div>
            <div className="w-3 bg-orange-500 rounded-t opacity-90" style={{ height: '35px' }}></div>
            <div className="w-3 bg-orange-600 rounded-t" style={{ height: '45px' }}></div>
          </div>
        </div>

        {/* Right side payroll elements */}
        <div className="absolute right-0 top-0 bottom-0 w-1/4 pointer-events-none">
          {/* Payroll chart visualization */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <rect x="10" y="40" width="15" height="60" rx="2" fill="#ff8633" opacity="0.7"/>
              <rect x="30" y="20" width="15" height="80" rx="2" fill="#ff8633" opacity="0.7"/>
              <rect x="50" y="60" width="15" height="40" rx="2" fill="#ff8633" opacity="0.7"/>
              <rect x="70" y="30" width="15" height="70" rx="2" fill="#ff8633" opacity="0.7"/>
            </svg>
          </div>

          {/* Time clock */}
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#ff8633" strokeWidth="4" strokeDasharray="2,1" opacity="0.5" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#ff8633" strokeWidth="8" strokeDasharray="100,1000" 
                      strokeLinecap="round" transform="rotate(-90 50 50)" opacity="0.7">
                <animate attributeName="stroke-dasharray" values="30,1000;80,1000;30,1000" dur="4s" repeatCount="indefinite" />
              </circle>
              <text x="50" y="55" textAnchor="middle" fontSize="20" fill="#ff8633" opacity="0.8">9:00</text>
            </svg>
          </div>

          {/* Employee icon */}
          <div className="absolute top-2/3 right-1/3 w-10 h-10">
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="#ff8633" opacity="0.7">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>

        {/* Floating payroll elements - positioned at sides */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-[5%] w-40 h-40 rounded-full bg-orange-300 opacity-15 animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-[5%] w-48 h-48 rounded-full bg-orange-400 opacity-15 animate-pulse-slower"></div>
        </div>

        {/* Payroll path visualization - positioned at sides */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M5,10 C15,50 10,70 5,90" stroke="#ff8633" strokeWidth="0.8" strokeDasharray="2,2" fill="none" />
            <path d="M95,20 C85,30 90,40 95,20" stroke="#ff8633" strokeWidth="0.8" strokeDasharray="2,2" fill="none" />
          </svg>
        </div>
        
        {/* Main content container */}
        <div className="relative z-10 w-full flex flex-col items-center py-10 px-4 sm:px-6">
          <div className="w-full max-w-6xl mx-auto">
            
            {/* Horizontal banner for small/medium screens */}
            <div className="lg:hidden w-full flex justify-center relative group mb-8">
              <div className="absolute -inset-1  opacity-75 rounded-xl blur transition-all duration-300 group-hover:opacity-90"></div>
              <a href="https://app.buyerzone.com/hr-personnel/payroll-services/rfqz?publisherId=59578&amp;publisherTypeId=1788%27;;"
                target="_self" className="relative block w-full max-w-[600px]">
                <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-orange-900/50 transition-all duration-500 group-hover:shadow-[#ff8633]/40 h-[140px]">
                  {/* Banner background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#fff8f0] to-[#ffd1b3]"></div>
                  
                  {/* Left content */}
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <h3 className="text-xl font-bold text-[#ff6b1a] mb-1">Payroll Solutions</h3>
                    <p className="text-sm text-[#ff8633] mb-2">Compare top providers</p>
                    <div className="bg-[#ff6b1a] text-white text-sm font-bold px-4 py-2 rounded-full inline-block">
                      Get Free Quotes
                    </div>
                  </div>
                  
                  {/* Right graphic */}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center">
                    <div className="relative">
                      {/* Paycheck stack */}
                      <div className="relative w-16 h-16">
                        <div className="absolute w-full h-full bg-white rounded-md shadow-md transform rotate-3"></div>
                        <div className="absolute w-full h-full bg-white rounded-md shadow-md transform rotate-6"></div>
                        <div className="absolute w-full h-full bg-white rounded-md shadow-md flex items-center justify-center">
                          <span className="text-[#ff6b1a] font-bold text-sm">$</span>
                        </div>
                      </div>
                      {/* Calculator icon */}
                      <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full shadow-sm">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b1a" strokeWidth="2">
                          <rect x="4" y="2" width="16" height="20" rx="2"/>
                          <line x1="8" y1="6" x2="16" y2="6"/>
                          <line x1="8" y1="12" x2="16" y2="12"/>
                          <line x1="8" y1="18" x2="16" y2="18"/>
                          <line x1="12" y1="8" x2="12" y2="16"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Benefits list */}
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-4">
                    <div className="flex items-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff6b1a" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <path d="M22 4L12 14.01l-3-3"/>
                      </svg>
                      <span className="text-xs text-[#ff6b1a] ml-1">Automated</span>
                    </div>
                    <div className="flex items-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff6b1a" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <path d="M22 4L12 14.01l-3-3"/>
                      </svg>
                      <span className="text-xs text-[#ff6b1a] ml-1">Tax Filing</span>
                    </div>
                    <div className="flex items-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff6b1a" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <path d="M22 4L12 14.01l-3-3"/>
                      </svg>
                      <span className="text-xs text-[#ff6b1a] ml-1">HR Integration</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Main content layout */}
            <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-8">
              {/* Vertical banner for large screens */}
              <div className="hidden lg:block relative group h-[680px] w-[180px]">
                <div className="absolute -inset-1  opacity-75 rounded-xl blur transition-all duration-300 group-hover:opacity-90"></div>
                <a href="https://app.buyerzone.com/hr-personnel/payroll-services/rfqz?publisherId=59578&amp;publisherTypeId=1788%27;;"
                  target="_self" className="relative h-full w-full">
                  <div className="relative h-full w-full bg-gradient-to-b from-[#fff8f0] to-[#ffd1b3] rounded-xl shadow-2xl shadow-orange-900/50 overflow-hidden p-6 flex flex-col items-center">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-[#ff6b1a]">Payroll Solutions</h3>
                      <p className="text-sm text-[#ff8633] mt-1">Compare top providers</p>
                    </div>
                    
                    {/* Main graphic */}
                    <div className="relative flex-1 flex items-center justify-center w-full">
                      <div className="relative w-24 h-24">
                        {/* Paycheck stack */}
                        <div className="absolute top-0 left-0 w-full h-full bg-white rounded-lg shadow-md transform rotate-3"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-white rounded-lg shadow-md transform rotate-6"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-white rounded-lg shadow-md flex items-center justify-center">
                          <span className="text-[#ff6b1a] font-bold text-2xl">$</span>
                        </div>
                        
                        {/* Calculator icon */}
                        <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-md">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff6b1a" strokeWidth="2">
                            <rect x="4" y="2" width="16" height="20" rx="2"/>
                            <line x1="8" y1="6" x2="16" y2="6"/>
                            <line x1="8" y1="12" x2="16" y2="12"/>
                            <line x1="8" y1="18" x2="16" y2="18"/>
                            <line x1="12" y1="8" x2="12" y2="16"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA button */}
                    <div className="w-full text-center mb-6">
                      <div className="bg-[#ff6b1a] text-white text-sm font-bold px-6 py-3 rounded-full inline-block">
                        Get Free Quotes
                      </div>
                    </div>
                    
                    {/* Benefits list */}
                    <div className="w-full space-y-3">
                      <div className="flex items-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff6b1a" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <path d="M22 4L12 14.01l-3-3"/>
                        </svg>
                        <span className="text-sm text-[#ff6b1a] ml-2">Automated Payroll</span>
                      </div>
                      <div className="flex items-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff6b1a" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <path d="M22 4L12 14.01l-3-3"/>
                        </svg>
                        <span className="text-sm text-[#ff6b1a] ml-2">Tax Compliance</span>
                      </div>
                      <div className="flex items-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff6b1a" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <path d="M22 4L12 14.01l-3-3"/>
                        </svg>
                        <span className="text-sm text-[#ff6b1a] ml-2">Direct Deposit</span>
                      </div>
                      <div className="flex items-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff6b1a" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <path d="M22 4L12 14.01l-3-3"/>
                        </svg>
                        <span className="text-sm text-[#ff6b1a] ml-2">HR Integration</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              
              {/* Information panel */}
              <div className="w-full px-4 mx-auto md:max-w-[500px] sm:max-w-[500px] lg:max-w-[450px] relative group">
                <div className="absolute -inset-1  opacity-60 rounded-2xl blur-md transition-all duration-300"></div>
                <div className="relative backdrop-blur-xl bg-gradient-to-br from-[#ff6b1a]/40 via-[#ff8633]/40 to-[#ff9e5e]/40 rounded-2xl shadow-2xl overflow-hidden border border-[#ff8633]/30">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#ff8633] rounded-full opacity-10 blur-2xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#ff8633] rounded-full opacity-10 blur-2xl"></div>
                  
                  <div className="relative p-10 z-10 sm:h-[800px] md:h-[800px] lg:h-[680px]">
                    <h2 className="text-3xl font-semibold text-white mb-4">💰 Compare Payroll System Options — 100% Free!</h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-[#ff8633] to-[#ffb380] mb-8"></div>
                    <h3 className="text-xl font-semibold text-orange-100 mb-7">Looking for the best payroll solution? We've got you covered.</h3>
                    
                    <div className="mb-10 space-y-6">
                      <p className="text-orange-50 leading-relaxed text-base">
                        Just answer a few quick questions and get customized quotes from top providers - all in under a minute.
                      </p>
                      
                      <div className="space-y-5">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#ff8633]/40 flex items-center justify-center mr-4  transition-colors duration-300">
                            <svg className="w-4 h-4 text-[#ffd1b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="font-medium text-orange-50 text-base">Get free, no-obligation quotes from top providers</span>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#ff8633]/40 flex items-center justify-center mr-4  transition-colors duration-300">
                            <svg className="w-4 h-4 text-[#ffd1b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="font-medium text-orange-50 text-base">Takes less than a minute!</span>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#ff8633]/40 flex items-center justify-center mr-4  transition-colors duration-300">
                            <svg className="w-4 h-4 text-[#ffd1b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="font-medium text-orange-50 text-base">Make smarter payroll decisions with side-by-side comparisons—all for $0.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Comparison widget */}
              <div className="w-full px-4 mx-auto max-w-[500px] relative group">
                <div className="absolute -inset-1  opacity-60 rounded-2xl"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-[#ff8633] to-[#ff6b1a] p-4 text-white text-center">
                    <h3 className="text-xl font-semibold">Compare Payroll Solutions</h3>
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

export default BusinessPayroll;