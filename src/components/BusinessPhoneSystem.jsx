import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';

const BusinessPhoneSystem = () => {
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
    script1.setAttribute('data-bzwidget-category-id', '10144');
 
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
            <title>Phone Systems Comparison</title>
            <style>
              body {
                font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                margin: 0;
                padding: 0;
                align-items: center;
                text-align-center;
                background: linear-gradient(135deg, #f0f4ff 0%, #ffffff 100%);
                overflow: hidden;
                padding-top:0px;
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
                <p style="color: #000e54; font-size: 16px; font-weight: 500;">Loading comparison tool...</p>
              </div>
            </div>
            
            <script data-bzwidget
              src="https://cdn.buyerzone.com/apps/widget/bzWidget.min.js"
              data-bzwidget-pub-id="59578"
              data-bzwidget-color-palette-name="default"
              data-bzwidget-category-id="10144">
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
        iframe.style.height = window.innerWidth < 640 ? '700px' : '600px';
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
    <div className="relative w-full min-h-screen overflow-hidden mt-0 pt-0">
      {/* Enhanced deep navy background with richer gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000a42] via-[#000e54] to-[#001470]"></div>
      
      {/* Improved gradient overlays for more depth and visual richness */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000a42] via-[#001d82] to-[#00103c] opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#000524]/60 via-transparent to-[#000730]/60"></div>
      
      {/* Enhanced decorative elements with better spacing */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#104fff]/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#104fff]/20 to-transparent"></div>
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#104fff]/20 to-transparent"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#104fff]/20 to-transparent"></div>
      
      {/* Enhanced corner light beams with animation */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#104fff] rounded-full opacity-15 blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slower"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3366ff] rounded-full opacity-15 blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-pulse-slow animation-delay-2000"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3366ff] rounded-full opacity-15 blur-3xl transform -translate-x-1/2 translate-y-1/2 animate-pulse-slow animation-delay-4000"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#104fff] rounded-full opacity-15 blur-3xl transform translate-x-1/2 translate-y-1/2 animate-pulse-slower"></div>
      
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIgLz4KICA8cGF0aCBkPSJNIDIsMiBoIDEgdiAxIGggLTEgeiBNIDQsNCBoIDEgdiAxIGggLTEgeiBNIDYsNiBoIDEgdiAxIGggLTEgeiBNIDgsOCBoIDEgdiAxIGggLTEgeiBNIDEwLDEwIGggMSB2IDEgaCAtMSB6IE0gMTIsMTIgaCAxIHYgMSBoIC0xIHogTSAxNCwxNCBoIDEgdiAxIGggLTEgeiBNIDE2LDE2IGggMSB2IDEgaCAtMSB6IE0gMTgsMTggaCAxIHYgMSBoIC0xIHogTSAyMCwyMCBoIDEgdiAxIGggLTEgeiBNIDIyLDIyIGggMSB2IDEgaCAtMSB6IE0gMjQsMjQgaCAxIHYgMSBoIC0xIHogTSAyNiwyNiBoIDEgdiAxIGggLTEgeiBNIDI4LDI4IGggMSB2IDEgaCAtMSB6IE0gMzAsMzAgaCAxIHYgMSBoIC0xIHogTSAzMiwzMiBoIDEgdiAxIGggLTEgeiBNIDM0LDM0IGggMSB2IDEgaCAtMSB6IE0gMzYsMzYgaCAxIHYgMSBoIC0xIHogTSAzOCwzOCBoIDEgdiAxIGggLTEgeiBNIDQwLDQwIGggMSB2IDEgaCAtMSB6IE0gNDIsNDIgaCAxIHYgMSBoIC0xIHogTSA0NCw0NCBoIDEgdiAxIGggLTEgeiBNIDQ2LDQ2IGggMSB2IDEgaCAtMSB6IE0gNDgsNDggaCAxIHYgMSBoIC0xIHogTSA1MCw1MCBoIDEgdiAxIGggLTEgeiBNIDUyLDUyIGggMSB2IDEgaCAtMSB6IE0gNTQsNTQgaCAxIHYgMSBoIC0xIHogTSA1Niw1NiBoIDEgdiAxIGggLTEgeiBNIDU4LDU4IGggMSB2IDEgaCAtMSB6IiBmaWxsPSIjZmZmIiAvPgo8L3N2Zz4=')]"></div>
      </div>
      
      {/* Enhanced animated floating shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-[#104fff] rounded-full mix-blend-overlay filter blur-3xl opacity-15 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#4260ff] rounded-full mix-blend-overlay filter blur-3xl opacity-15 animate-pulse-slower"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-[#3c8fff] rounded-full mix-blend-overlay filter blur-3xl opacity-15 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/6 w-60 h-60 bg-[#6495ff] rounded-full mix-blend-overlay filter blur-3xl opacity-15 animate-pulse-slower animation-delay-4000"></div>
      </div>
      
      {/* Enhanced network connection lines */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,100" stroke="white" strokeWidth="0.12" />
          <path d="M100,0 L0,100" stroke="white" strokeWidth="0.12" />
          <path d="M50,0 L50,100" stroke="white" strokeWidth="0.12" />
          <path d="M0,50 L100,50" stroke="white" strokeWidth="0.12" />
          <path d="M25,0 L75,100" stroke="white" strokeWidth="0.12" />
          <path d="M75,0 L25,100" stroke="white" strokeWidth="0.12" />
          <path d="M0,25 L100,75" stroke="white" strokeWidth="0.12" />
          <path d="M0,75 L100,25" stroke="white" strokeWidth="0.12" />
          <path d="M15,0 L85,100" stroke="white" strokeWidth="0.08" />
          <path d="M85,0 L15,100" stroke="white" strokeWidth="0.08" />
          <path d="M0,35 L100,65" stroke="white" strokeWidth="0.08" />
          <path d="M0,65 L100,35" stroke="white" strokeWidth="0.08" />
        </svg>
      </div>
      
      {/* Enhanced header light effect */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-4/5 h-6 bg-[#104fff] blur-2xl opacity-25 animate-pulse-slow"></div>
      
      {/* Main content container with enhanced glass effect and padding */}
      <div className="relative z-10 w-full flex flex-col items-center py-10 px-4">
  <div className="w-full max-w-[1200px] mx-auto">
    {/* Responsive banner - shows only on medium/small screens */}
<div className="w-full max-w-[480px] lg:hidden flex justify-center mb-8 relative group mx-auto">
  <div className="absolute -inset-1 bg-gradient-to-r from-[#0026b6] to-[#104fff] opacity-75 rounded-xl blur transition-all duration-300 group-hover:opacity-90"></div>
  <a href="http://www.buyerzone.com/telecom-equipment/business-phone-systems/rfqz/?publisherId=59578&publisherTypeId=1789"
    target="_self" className="relative block w-full">
    <div className="relative">
      <img 
        src="http://www.buyerzone.com/telecom-equipment/business-phone-systems/banners/468x60.gif" 
        className="rounded-lg h-[60px] w-full max-w-[468px] object-cover shadow-2xl shadow-blue-900/50 transition-all duration-500 group-hover:shadow-[#104fff]/40 group-hover:shadow-2xl mx-auto"
        alt="Phone system comparison" 
      />
      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-[#000e54]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-[#104fff] rounded-full opacity-30 blur-xl group-hover:opacity-70 transition-opacity duration-500"></div>
    </div>
  </a>
</div>

    {/* Enhanced layout with improved spacing and padding */}
    <div className="w-full flex flex-col  lg:flex-row items-start justify-center gap-8">
      <div className="hidden lg:block relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#0026b6] to-[#104fff] opacity-75 rounded-xl blur transition-all duration-300 group-hover:opacity-90"></div>
        <a href="http://www.buyerzone.com/telecom-equipment/business-phone-systems/rfqz/?publisherId=59578&publisherTypeId=1789"
          target="_self" className="relative block">
          <div className="relative">
            <img 
              src="https://www.buyerzone.com/telecom-equipment/business-phone-systems/banners/160x600.gif" 
              className="rounded-lg h-[680px] w-[160px] object-cover shadow-2xl shadow-blue-900/50 transition-all duration-500 group-hover:shadow-[#104fff]/40 group-hover:shadow-2xl"
              alt="Phone system comparison" 
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-[#000e54]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-[#104fff] rounded-full opacity-30 blur-xl group-hover:opacity-70 transition-opacity duration-500"></div>
          </div>
        </a>
      </div>

      {/* Enhanced promotional content with better padding and effects */}
      <div className="w-full px-4 mx-auto max-w-[480px] relative group">
  <div className="absolute -inset-1 bg-gradient-to-r from-[#104fff] to-[#0026b6] opacity-60 rounded-2xl blur-md transition-all duration-300 group-hover:opacity-75 group-hover:blur-lg"></div>
  <div className="relative backdrop-blur-xl bg-gradient-to-br from-[#000a42]/40 via-[#000e54]/40 to-[#001470]/40 rounded-2xl shadow-2xl overflow-hidden border border-[#104fff]/30">
    <div className="absolute top-0 right-0 w-40 h-40 bg-[#104fff] rounded-full opacity-10 blur-2xl"></div>
    <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#104fff] rounded-full opacity-10 blur-2xl"></div>
    
    {/* Enhanced content with better padding */}
    <div className="relative p-10 z-10 h-[680px]">
      <h2 className="text-3xl font-semibold text-white mb-4">Compare Business Communication Solutions- 100% Free</h2>
      <div className="w-20 h-1.5 bg-gradient-to-r from-[#104fff] to-[#3c8fff] mb-8"></div>
      <h3 className="text-xl font-semibold text-blue-100 mb-7">Looking for the best phone system or communication tools for your business?</h3>
      
      <div className="mb-10 space-y-6">
        <p className="text-blue-50 leading-relaxed text-lg">
          Just answer a few quick questions and get customized quotes from top providers - all in under a minute.
        </p>
        
        <div className="space-y-5">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#104fff]/40 flex items-center justify-center mr-4 group-hover:bg-[#104fff]/50 transition-colors duration-300">
              <svg className="w-4 h-4 text-[#adc6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="font-medium text-blue-50 text-lg">Fast & Easy</span>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#104fff]/40 flex items-center justify-center mr-4 group-hover:bg-[#104fff]/50 transition-colors duration-300">
              <svg className="w-4 h-4 text-[#adc6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="font-medium text-blue-50 text-lg">100% Free</span>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#104fff]/40 flex items-center justify-center mr-4 group-hover:bg-[#104fff]/50 transition-colors duration-300">
              <svg className="w-4 h-4 text-[#adc6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="font-medium text-blue-50 text-lg">No Obligation to Buy</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      
      {/* Enhanced widget container with better shadows and effects */}
      <div className="w-full px-4 mx-auto max-w-[500px] relative group">
  <div className="absolute -inset-1 bg-gradient-to-r from-[#0026b6] to-[#104fff] opacity-60 rounded-2xl blur-md transition-all duration-300 group-hover:opacity-75 group-hover:blur-lg"></div>
  <div className="relative backdrop-blur-xl bg-gradient-to-br from-[#000a42]/40 via-[#000e54]/40 to-[#001470]/40 rounded-2xl shadow-2xl overflow-hidden border border-[#104fff]/30">
    <div className="relative p-5 bg-gradient-to-r from-[#000835] to-[#001470] text-white overflow-hidden">
      <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-20 h-20 bg-[#104fff] rounded-full opacity-25 blur-xl"></div>
      <h3 className="text-2xl font-semibold text-center relative z-10">Compare Phone Systems</h3>
    </div>
    <div 
      id="buyerzone-widget-container" 
      className="w-full h-full bg-white rounded-b-2xl overflow-hidden"
      style={{ overflow: 'hidden' }}
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

export default BusinessPhoneSystem;