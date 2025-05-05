import React from 'react';

const CRMComparison = () => {
  return (
    <div id="comparison" className="">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-base">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Comprehensive CRM Provider Comparison
        </h2>

        <p className="text-gray-800 text-base mb-10 text-center max-w-3xl mx-auto">
          Selecting the right CRM is crucial for your business growth strategy. Our detailed comparison helps you evaluate leading CRM solutions based on essential factors including features, pricing, scalability, integration capabilities, and customer support quality.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 border gray-800 ">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">What to Consider When Choosing a CRM</h3>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                <span><strong className="text-gray-900">Business Size:</strong> Enterprise solutions offer more complex features, while SMB-focused CRMs prioritize ease of use and affordability.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                <span><strong className="text-gray-900">Industry Focus:</strong> Some CRMs offer specialized features for specific industries like healthcare, real estate, or manufacturing.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                <span><strong className="text-gray-900">Integration Needs:</strong> Consider how well the CRM integrates with your existing tech stack and third-party applications.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                <span><strong className="text-gray-900">Growth Potential:</strong> Choose a CRM that can scale with your business as you expand operations and customer base.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 border border-gray-800">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key CRM Benefits</h3>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                <span><strong className="text-gray-900">Improved Customer Relationships:</strong> Track all interactions for more personalized customer service.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                <span><strong className="text-gray-900">Enhanced Sales Process:</strong> Streamline lead management and optimize your sales pipeline.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                <span><strong className="text-gray-900">Data-Driven Decisions:</strong> Gain insights from detailed analytics and reporting features.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                <span><strong className="text-gray-900">Automation:</strong> Reduce manual tasks and increase team productivity through workflow automation.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 mb-12 border border-gray-200">
          <h3 className="text-4xl font-semibold mb-8 text-center text-gray-900">Top CRM Solutions - Detailed Comparison</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left  font-bold text-gray-900 uppercase tracking-wider text-base">CRM Provider</th>
                  <th className="px-6 py-4 text-left  font-bold text-gray-900 uppercase tracking-wider text-base">Best For</th>
                  <th className="px-6 py-4 text-left  font-bold text-gray-900 uppercase tracking-wider text-base">Key Features</th>
                  <th className="px-6 py-4 text-left  font-bold text-gray-900 uppercase tracking-wider text-base">Pricing Model</th>
                  <th className="px-6 py-4 text-left  font-bold text-gray-900 uppercase tracking-wider text-base">Integration Capabilities</th>
                  <th className="px-6 py-4 text-left  font-bold text-gray-900 uppercase tracking-wider text-base">Customer Support</th>
                  <th className="px-6 py-4 text-left  font-bold text-gray-900 uppercase tracking-wider text-base">User Experience</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="">
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-[#000e54]">Salesforce</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800">Enterprise & Mid-Market</td>
                  <td className="px-6 py-4">
                    <ul className="list-disc pl-5 space-y-1 text-gray-800">
                      <li>Einstein AI analytics</li>
                      <li>Advanced workflow automation</li>
                      <li>Extensive AppExchange marketplace</li>
                    </ul>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                    <p>$25-$300+/user/month</p>
                    <p className="text-sm text-gray-600">Annual billing</p>
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    <p className="font-semibold">Excellent</p>
                    <p className="text-sm text-gray-600">5000+ integrations</p>
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    <p>24/7 Premium Support</p>
                    <p className="text-sm text-gray-600">Additional cost for higher tiers</p>
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    <p>Complex</p>
                    <p className="text-sm text-gray-600">Steep learning curve</p>
                  </td>
                </tr>
                <tr className="">
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-[#000e54]">HubSpot</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800">SMBs & Marketing-focused</td>
                  <td className="px-6 py-4">
                    <ul className="list-disc pl-5 space-y-1 text-gray-800">
                      <li>Inbound marketing tools</li>
                      <li>Email marketing automation</li>
                      <li>Free starter plan</li>
                    </ul>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                    <p>Free - $1,200+/month</p>
                    <p className="text-sm text-gray-600">Based on contacts & features</p>
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    <p className="font-semibold">Very Good</p>
                    <p className="text-sm text-gray-600">1000+ integrations</p>
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    <p>Email & Phone Support</p>
                    <p className="text-sm text-gray-600">24/7 on higher tiers</p>
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    <p>User-Friendly</p>
                    <p className="text-sm text-gray-600">Intuitive interface</p>
                  </td>
                </tr>
                <tr className="">
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-[#000e54]">Zoho CRM</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800">Small Business & Startups</td>
                  <td className="px-6 py-4">
                    <ul className="list-disc pl-5 space-y-1 text-gray-800">
                      <li>AI assistant (Zia)</li>
                      <li>Sales signals</li>
                      <li>Process management</li>
                    </ul>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                    <p>$14-$52/user/month</p>
                    <p className="text-sm text-gray-600">Annual billing</p>
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    <p className="font-semibold">Good</p>
                    <p className="text-sm text-gray-600">Strong with Zoho suite</p>
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    <p>24/5 Support</p>
                    <p className="text-sm text-gray-600">Phone, email, chat</p>
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    <p>Straightforward</p>
                    <p className="text-sm text-gray-600">Some customization learning</p>
                  </td>
                </tr>
                <tr className="">
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-[#000e54]">Microsoft Dynamics</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800">Microsoft-centric orgs</td>
                  <td className="px-6 py-4">
                    <ul className="list-disc pl-5 space-y-1 text-gray-800">
                      <li>Deep Office 365 integration</li>
                      <li>Power BI analytics</li>
                      <li>LinkedIn integration</li>
                    </ul>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                    <p>$65-$200+/user/month</p>
                    <p className="text-sm text-gray-600">Annual commitment</p>
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    <p className="font-semibold">Excellent</p>
                    <p className="text-sm text-gray-600">Seamless Microsoft ecosystem</p>
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    <p>24/7 Support</p>
                    <p className="text-sm text-gray-600">Enterprise-grade</p>
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    <p>Moderate</p>
                    <p className="text-sm text-gray-600">Familiar to Microsoft users</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-8 mb-12 border border-gray-200">
          <h3 className="text-4xl font-semibold mb-8 text-center text-gray-900">Making the Right CRM Choice</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-semibold mb-4 text-gray-900">Implementation Tips</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-[#000e54] font-semibold mr-3 mt-1">1</div>
                  <div>
                    <strong className="text-gray-900">Define Clear Goals:</strong>
                    <p className="text-gray-800">Establish specific objectives for your CRM implementation before selecting a platform.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-[#000e54] font-semibold mr-3 mt-1">2</div>
                  <div>
                    <strong className="text-gray-900">Data Migration Planning:</strong>
                    <p className="text-gray-800">Create a comprehensive plan for transferring existing customer data to your new CRM.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-2xl font-semibold mb-4 text-gray-900">ROI Considerations</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-[#000e54] font-semibold mr-3 mt-1">1</div>
                  <div>
                    <strong className="text-gray-900">Time Savings:</strong>
                    <p className="text-gray-800">Measure the reduction in time spent on manual tasks and administrative work.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-[#000e54] font-semibold mr-3 mt-1">2</div>
                  <div>
                    <strong className="text-gray-900">Sales Improvement:</strong>
                    <p className="text-gray-800">Track increases in conversion rates, deal sizes, and sales cycle efficiency.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMComparison;