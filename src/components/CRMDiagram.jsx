import React from 'react';

const CRMDiagram = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-slate-900 to-blue-950 p-4 flex items-center justify-center overflow-hidden">
      <div className="w-full h-full relative rounded-xl shadow-2xl overflow-hidden bg-slate-900 border border-blue-500/20">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-5"></div>
          
          {/* Grid Pattern */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Main Content Container */}
        <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
          {/* Title Section */}
          <div className="mb-12 text-center">
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mx-auto mb-4"></div>
            <h1 className="text-4xl font-bold text-white mb-2">CRM Solutions for B2B Businesses</h1>
            <p className="text-blue-300 text-base max-w-2xl mx-auto">Comprehensive enterprise relationship management systems tailored for business growth</p>
          </div>
          
          {/* CRM Types Grid */}
          <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
            {/* Row 1 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-blue-500/20 shadow-lg transform transition-all hover:scale-105 hover:shadow-blue-500/10 hover:border-blue-500/30">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-orange-500/20 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 12C16 13.1046 15.1046 14 14 14C12.8954 14 12 13.1046 12 12C12 10.8954 12.8954 10 14 10C15.1046 10 16 10.8954 16 12Z" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 8H8.01" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H8.01" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 16H8.01" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-orange-400 mb-2">Operational CRM</h2>
              <p className="text-slate-300">Streamlines sales processes, marketing campaigns, and service functions through automation</p>
              <div className="flex gap-2 mt-4">
                <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-300">Sales Automation</span>
                <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-300">Lead Tracking</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-blue-500/20 shadow-lg transform transition-all hover:scale-105 hover:shadow-blue-500/10 hover:border-blue-500/30">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-orange-500/20 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 20V10" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 20V4" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 20V16" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-orange-400 mb-2">Analytical CRM</h2>
              <p className="text-slate-300">Leverages data analytics to identify patterns, measure performance, and derive actionable insights</p>
              <div className="flex gap-2 mt-4">
                <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-300">Data Mining</span>
                <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-300">Forecasting</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-blue-500/20 shadow-lg transform transition-all hover:scale-105 hover:shadow-blue-500/10 hover:border-blue-500/30">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-orange-500/20 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-orange-400 mb-2">Collaborative CRM</h2>
              <p className="text-slate-300">Enables seamless information sharing across departments for unified customer experiences</p>
              <div className="flex gap-2 mt-4">
                <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-300">Team Sync</span>
                <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-300">Shared Inbox</span>
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-blue-500/20 shadow-lg transform transition-all hover:scale-105 hover:shadow-blue-500/10 hover:border-blue-500/30">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-orange-500/20 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-orange-400 mb-2">Strategic CRM</h2>
              <p className="text-slate-300">Focuses on developing long-term customer relationships and maximizing lifetime value</p>
              <div className="flex gap-2 mt-4">
                <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-300">Journey Mapping</span>
                <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-300">Retention</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-blue-500/20 shadow-lg transform transition-all hover:scale-105 hover:shadow-blue-500/10 hover:border-blue-500/30">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-orange-500/20 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.93 4.93L9.17 9.17" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.83 14.83L19.07 19.07" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.83 9.17L19.07 4.93" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.83 9.17L18.36 5.64" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.93 19.07L9.17 14.83" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-orange-400 mb-2">AI-Powered CRM</h2>
              <p className="text-slate-300">Harnesses machine learning and AI to automate tasks, predict behaviors, and personalize interactions</p>
              <div className="flex gap-2 mt-4">
                <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-300">Predictive Analytics</span>
                <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-300">Smart Automation</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-blue-500/20 shadow-lg transform transition-all hover:scale-105 hover:shadow-blue-500/10 hover:border-blue-500/30">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-orange-500/20 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-orange-400 mb-2">Social CRM</h2>
              <p className="text-slate-300">Integrates social media platforms to monitor sentiment, engage customers, and capture valuable insights</p>
              <div className="flex gap-2 mt-4">
                <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-300">Social Listening</span>
                <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-300">Multi-Channel</span>
              </div>
            </div>
            
            {/* Central Element */}
            <div className="col-span-3 mt-4 bg-gradient-to-br from-blue-900 to-slate-900 rounded-xl p-6 border border-orange-500/20 shadow-lg">
              <div className="flex items-center">
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-orange-500/20 mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 18H12.01" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-orange-400 mb-1">Mobile CRM</h2>
                  <p className="text-slate-300">Delivers on-the-go access to critical customer data and functionality across all CRM types</p>
                </div>
                <div className="ml-auto flex gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-300">Remote Access</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-300">Field Service</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-300">Push Notifications</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="mt-12 text-center">
            <p className="text-blue-300/60 text-sm">Select the optimal CRM solution based on your specific business requirements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMDiagram;