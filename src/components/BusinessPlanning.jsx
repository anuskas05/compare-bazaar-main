import React from 'react';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';
import FAQ from './FAQ';
const BusinessPlanning = () => {
    const businessplanningFAQs = [
        {
          question: "What services does your business planning include?",
          answer: [
            "Our comprehensive business planning services cover:",
            "• Strategic planning and vision development",
            "• Market analysis and competitive research",
            "• Financial projections and funding strategies",
            "• Operational planning and process design",
            "• Risk assessment and contingency planning"
          ]
        },
        {
          question: "How long does it take to develop a complete business plan?",
          answer: [
            "Timelines vary based on complexity:",
            "Basic startup plan: 2-3 weeks",
            "Standard business plan: 4-6 weeks",
            "Comprehensive strategic plan: 8-12 weeks",
            "Enterprise-level planning: Custom timeline"
          ]
        },
        {
          question: "Do you help with financial projections and modeling?",
          answer: "Yes, our experts provide detailed financial modeling including revenue forecasts, expense budgets, cash flow analysis, break-even calculations, and investment return projections tailored to your industry."
        },
        {
          question: "Can you assist with funding applications and investor pitches?",
          answer: [
            "We offer complete funding support:",
            "• Business plan preparation for investors/lenders",
            "• Pitch deck development",
            "• Financial model preparation",
            "• Investor meeting preparation",
            "• Grant and loan application assistance"
          ]
        },
        {
          question: "What industries do you specialize in?",
          answer: "We serve clients across all sectors with particular expertise in technology startups, retail/e-commerce, professional services, manufacturing, and healthcare. Our methodologies adapt to any industry's specific requirements."
        },
        {
          question: "How do you customize plans for different business stages?",
          answer: [
            "We tailor our approach to your growth phase:",
            "Startups: Focus on viability, funding, and market entry",
            "Early-stage: Operational scaling and systems",
            "Growth-stage: Expansion strategies",
            "Mature businesses: Optimization and innovation"
          ]
        },
        {
          question: "What makes your business planning process unique?",
          answer: [
            "Our differentiated approach includes:",
            "• Data-driven market intelligence",
            "• Scenario planning for multiple futures",
            "• Implementation roadmaps with milestones",
            "• Regular progress reviews and adjustments",
            "• Integration with your team's workflow"
          ]
        },
        {
          question: "Do you provide ongoing support after delivering the plan?",
          answer: "Yes, we offer various support packages including quarterly reviews, KPI monitoring, plan adjustments, and executive coaching to ensure successful implementation of your business strategy."
        },
        {
          question: "What qualifications do your business planning consultants have?",
          answer: "Our team includes MBAs, certified business consultants, former executives, and industry specialists with an average of 15+ years experience in strategy development and business growth."
        },
        {
          question: "How do you measure the success of a business plan?",
          answer: [
            "We track multiple success metrics:",
            "• Achievement of strategic milestones",
            "• Financial performance vs projections",
            "• Market share growth",
            "• Operational efficiency improvements",
            "• Team alignment with strategic objectives"
          ]
        }
      ];

      

      const services = [
        {
          icon: (
            <svg className="w-8 h-8 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          ),
          title: "Strategic Planning",
          description: "Comprehensive business strategy development with 3-5 year roadmaps"
        },
        {
          icon: (
            <svg className="w-8 h-8 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: "Financial Modeling",
          description: "Detailed financial projections and investment analysis"
        },
        {
          icon: (
            <svg className="w-8 h-8 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
          title: "Market Analysis",
          description: "In-depth industry research and competitive positioning"
        }
      ];

      const steps = [
        {
          id: "01",
          name: "Initial Consultation",
          description: "Free 60-minute strategy session",
          duration: "1 Day"
        },
        {
          id: "02",
          name: "Data Collection",
          description: "We gather your business information",
          duration: "3-5 Days"
        },
        {
          id: "03",
          name: "Strategy Development",
          description: "Core planning phase with your team",
          duration: "2-3 Weeks"
        },
        {
          id: "04",
          name: "Plan Presentation",
          description: "Delivery of complete business plan",
          duration: "1 Day"
        },
        {
          id: "05",
          name: "Implementation Support",
          description: "Ongoing guidance as needed",
          duration: "Ongoing"
        }
      ];
    

      const industries = [
        {
          name: "Startups & Entrepreneurs",
          description: "From idea validation to investor-ready business plans",
          icon: "🚀"
        },
        {
          name: "Small Businesses",
          description: "Growth strategies and operational optimization",
          icon: "🏢"
        },
        {
          name: "E-Commerce",
          description: "Digital marketplace positioning and scaling plans",
          icon: "🛒"
        },
        {
          name: "Healthcare",
          description: "Regulatory-compliant expansion strategies",
          icon: "🏥"
        },
        {
          name: "Manufacturing",
          description: "Supply chain optimization and capacity planning",
          icon: "🏭"
        },
        {
          name: "Professional Services",
          description: "Practice growth and partnership structures",
          icon: "💼"
        }
      ];

      const tools = [
        {
          name: "SWOT Analysis",
          description: "Comprehensive evaluation of strengths, weaknesses, opportunities, and threats"
        },
        {
          name: "Porter's Five Forces",
          description: "Industry competition and profitability framework"
        },
        {
          name: "Business Model Canvas",
          description: "Visual chart of company value propositions and operations"
        },
        {
          name: "Scenario Planning",
          description: "Preparation for multiple potential futures"
        },
        {
          name: "OKR Framework",
          description: "Objectives and Key Results goal-setting methodology"
        },
        {
          name: "Financial Modeling",
          description: "Advanced forecasting and valuation techniques"
        }
      ];

      const metrics = [
        { value: "92%", label: "Funding Success Rate", icon: "💵" },
        { value: "3.5x", label: "Average ROI", icon: "📈" },
        { value: "200+", label: "Plans Developed", icon: "📊" },
        { value: "24", label: "Industries Served", icon: "🌐" }
      ];

      const features = [
        {
          name: "Custom Financial Models",
          us: true,
          competitors: "Basic templates"
        },
        {
          name: "Ongoing Strategy Reviews",
          us: true,
          competitors: false
        },
        {
          name: "Industry Benchmarking",
          us: true,
          competitors: "Limited"
        },
        {
          name: "Executive Coaching",
          us: true,
          competitors: false
        },
        {
          name: "Implementation Roadmaps",
          us: true,
          competitors: "Basic milestones"
        }
      ];

      const resources = [
        {
          title: "Business Plan Template",
          type: "Template",
          category: "Free Download",
          icon: "📝"
        },
        {
          title: "Funding Guide",
          type: "Ebook",
          category: "For Clients",
          icon: "📘"
        },
        {
          title: "Market Research Webinar",
          type: "Video",
          category: "Free Access",
          icon: "🎥"
        },
        {
          title: "Financial Model Samples",
          type: "Spreadsheet",
          category: "Premium",
          icon: "📊"
        }
      ];

      const stats = [
        { name: 'Gender Balance', value: '52% / 48%', description: 'Women to Men ratio' },
        { name: 'Ethnic Diversity', value: '43%', description: 'Team members from underrepresented groups' },
        { name: 'Leadership Diversity', value: '38%', description: 'Diverse representation in leadership' },
        { name: 'Pay Equity', value: '100%', description: 'Equal pay for equal work' }
      ];

      const levels = [
        {
          name: 'Individual Contributor',
          skills: ['Role-specific training', 'Mentorship program', 'Skill certifications']
        },
        {
          name: 'Team Lead',
          skills: ['Leadership fundamentals', 'Project management', 'Peer coaching']
        },
        {
          name: 'Manager',
          skills: ['People management', 'Strategic thinking', 'Budget oversight']
        },
        {
          name: 'Executive',
          skills: ['Enterprise leadership', 'Board communication', 'M&A strategy']
        }
      ];
    

  return (
    <>
    <Navbar/>
    {/* hero section */}
    <section className="max-w-6xl mx-auto relative  overflow-hidden">
      {/* Background SVG elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <svg
          className="absolute top-0 right-0 w-1/3 h-auto"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#4F46E5"
            d="M250,0 C388.071068,0 500,111.928932 500,250 C500,388.071068 388.071068,500 250,500 C111.928932,500 0,388.071068 0,250 C0,111.928932 111.928932,0 250,0 Z M250,100 C316.27417,100 370,153.72583 370,220 C370,286.27417 316.27417,340 250,340 C183.72583,340 130,286.27417 130,220 C130,153.72583 183.72583,100 250,100 Z"
          />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 y-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl  font-semibold text-gray-900 leading-tight">
              Strategic <span className="text-gray-800">Business Planning</span> for Growth
            </h1>
            <p className="mt-6 text-base  text-gray-800 max-w-lg">
              Transform your vision into actionable strategies with our expert business planning services. Achieve your goals faster with data-driven solutions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="/contact-sales"><button className="px-8 py-3 bg-[#ff8633] text-white font-semibold rounded-lg  transition duration-300 shadow-lg shadow-indigo-200 hover:shadow-indigo-300">
                Get Started
              </button></a>
            </div>
            <div className="mt-10 flex items-center justify-center md:justify-start space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <img
                    key={item}
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 20}.jpg`}
                    alt="Client"
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">Trusted by 500+ businesses</p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-sm text-gray-800">5.0 (200+ reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="relative rounded-xl bg-white p-1 shadow-2xl ring-1 ring-gray-900/10 overflow-hidden">
              <img
                className="w-full h-auto rounded-lg"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Business planning meeting"
              />
              <div className="absolute -bottom-6 -right-6 bg-indigo-600 rounded-lg p-4 shadow-xl">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <div className="absolute -top-6 -left-6 bg-white rounded-lg p-4 shadow-xl border border-gray-100">
                <svg
                  className="w-12 h-12 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* services */}
    <div className="py-10 px-4 max-w-6xl mx-auto bg-white">
      <div className="">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-900 sm:text-4xl">
            Our Business Planning Services
          </h2>
          <p className="mt-4 text-xl text-gray-800">
            Comprehensive solutions tailored to your growth objectives
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="pt-8 pb-10 px-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-50 mx-auto">
                {service.icon}
              </div>
              <div className="mt-5 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-base text-gray-800">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

{/* steps */}
<div className="flex justify-center items-center w-full py-16">
  <div className="max-w-6xl w-full px-4">
    <div className="text-center">
      <h2 className="text-4xl font-semibold text-gray-900">
        Your Planning Journey
      </h2>
      <p className="mt-4 text-xl text-gray-800">
        Clear roadmap from concept to execution
      </p>
    </div>
    
    <div className="mt-16 flow-root">
      <ul className="-mb-8">
        {steps.map((step, stepIdx) => (
          <li key={step.id}>
            <div className="relative pb-8">
              {stepIdx !== steps.length - 1 ? (
                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-gray-50 ${
                    stepIdx % 2 === 0 ? 'bg-indigo-600 text-white' : 'bg-green-500 text-white'
                  }`}>
                    {step.id}
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between pt-1.5">
                  <div>
                    <p className="text-base font-semibold text-gray-900">
                      {step.name} <span className="text-base text-gray-800 ml-2">({step.duration})</span>
                    </p>
                    <p className="text-gray-800 text-base">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

    {/*industries  */}
    <div className="py-10 max-w-6xl mx-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-900">
            Industry-Specific Expertise
          </h2>
          <p className="mt-4 text-xl text-gray-800 max-w-3xl mx-auto">
            We tailor our business planning approach to your unique industry challenges and opportunities
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#000e54]"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{industry.name}</h3>
              <p className="mt-2 text-gray-800 text-base">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* tools used */}
    <div className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="lg:text-center">
          <h2 className="text-4xl font-semibold text-gray-900">
            Our Strategic Planning Toolbox
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-800 mx-auto">
            Proven frameworks and methodologies we employ
          </p>
        </div>

        <div className="mt-12">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            {tools.map((tool, index) => (
              <div key={index} className="relative">
                <dt className="flex items-center">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-[#000e54] text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-5 text-base font-semibold text-gray-900">{tool.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-800">{tool.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>

    {/* plannig resources */}
    <div className="py-16 max-w-6xl mx-auto bg-white">
      <div className="">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-900">
            Planning Resources
          </h2>
          <p className="mt-4 text-xl text-gray-800">
            Tools and knowledge to support your journey
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-base font-semibold text-gray-800">{resource.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


    {/* why choose us */}
    <div className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center">
      <h2 className="text-4xl font-semibold text-gray-900 sm:text-3xl md:text-4xl">
        Why Choose Our Business Planning?
      </h2>
      <p className="mt-4 text-xl text-gray-800">
        Differentiated approach for superior results
      </p>
    </div>
    
    {/* Desktop Table (hidden on small screens) */}
    <div className="mt-12 hidden md:block">
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-base font-semibold text-gray-800 sm:pl-6">
                Key Features
              </th>
              <th scope="col" className="px-3 py-3.5 text-center text-base font-semibold text-[#000e54]">
                Our Service
              </th>
              <th scope="col" className="px-3 py-3.5 text-center text-base font-semibold text-gray-800">
                Typical Competitors
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {features.map((feature, index) => (
              <tr key={index}>
                <td className="py-4 pl-4 pr-3 text-base font-medium text-gray-900 sm:pl-6">
                  {feature.name}
                </td>
                <td className="px-3 py-4 text-base text-gray-800 text-center">
                  {feature.us === true ? (
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-sm md:text-base font-medium text-green-800">
                      Included
                    </span>
                  ) : (
                    <span>{feature.us}</span>
                  )}
                </td>
                <td className="px-3 py-4 text-base text-center text-gray-800">
                  {feature.competitors === true ? (
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-sm md:text-base font-medium text-green-800">
                      Included
                    </span>
                  ) : (
                    <span>{feature.competitors}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
    {/* Mobile Cards (shown only on small screens) */}
    <div className="mt-12 md:hidden space-y-6">
      {features.map((feature, index) => (
        <div key={index} className="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <h3 className="text-base font-medium text-gray-900">{feature.name}</h3>
          </div>
          <div className="px-4 py-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-[#000e54]">Our Service</p>
              <div className="mt-2">
                {feature.us === true ? (
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800">
                    Included
                  </span>
                ) : (
                  <span className="text-sm text-gray-800">{feature.us}</span>
                )}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Typical Competitors</p>
              <div className="mt-2">
                {feature.competitors === true ? (
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800">
                    Included
                  </span>
                ) : (
                  <span className="text-sm text-gray-800">{feature.competitors}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    {/* diversity */}
    <div className=" bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="lg:text-center">
          <h2 className="text-4xl font-semibold text-gray-900">
            Our Commitment to Diversity
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-800 mx-auto">
            Building a workplace that reflects the world around us
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="shadow-xl p-6 rounded-lg text-center">
              <p className="text-sm font-semibold text-gray-800">{stat.name}</p>
              <p className="mt-2 text-4xl font-semibold text-[#000e54]">{stat.value}</p>
              <p className="mt-1 text-base text-gray-800">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Employee Resource Groups</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {['Women@Work', 'Pride Alliance', 'BIPOC Network', 'Veterans Group', 'Disability Alliance', 'Parents Network'].map((group) => (
                <div key={group} className="bg-indigo-50 px-4 py-3 rounded-md">
                  <p className="text-base font-semibold text-[#000e54]">{group}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Recent Initiatives</h3>
            <div className="mt-4 space-y-4">
              {[
                'Unconscious Bias Training for all managers',
                'Diverse hiring panels requirement',
                'Inclusive leadership development program',
                'Supplier diversity program launched'
              ].map((initiative, i) => (
                <div key={i} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 bg-[#000e54] rounded-full"></div>
                  </div>
                  <p className="ml-3 text-gray-800 text-base">{initiative}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* levels */}
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-900">
            Career Growth Framework
          </h2>
          <p className="mt-4 text-xl text-gray-800">
            Clear pathways for professional development at every level
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {levels.map((level, index) => (
            <div key={index} className="bg-white shadow overflow-hidden rounded-lg">
              <div className={`px-6 py-5 ${index % 2 === 0 ? 'bg-[#000e54]' : 'bg-[#000e54]'} flex items-center justify-between`}>
                <h3 className="text-base font-semibold text-white">
                  {level.name}
                </h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-base font-semibold bg-white text-[#000e54]">
                  Level {index + 1}
                </span>
              </div>
              <div className="px-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {level.skills.map((skill, i) => (
                    <div key={i} className="flex items-start">
                      <svg className="flex-shrink-0 h-5 w-5 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="ml-3 text-gray-800 text-base">{skill}</p>
                    </div>
                  ))}
                </div>
                
                {index === 1 && (
                  <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                    <p className="text-base text-[#000e54]">
                      <span className="font-semibold">Example path:</span> Complete 3 leadership trainings → Lead a cross-functional project → Mentor a junior team member → Promotion eligibility
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-5 bg-gray-50 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">
              Learning Resources
            </h3>
          </div>
          <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['LinkedIn Learning', 'Internal Mentorship', 'Conference Budget', 'Tuition Reimbursement'].map((resource) => (
              <div key={resource} className="flex items-center">
                <svg className="flex-shrink-0 h-5 w-5 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <p className="ml-3 text-gray-800 text-base">{resource}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* metrices */}
    <div className="py-16 bg-[#000e54] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-semibold">
            Quantifiable Business Impact
          </h2>
          <p className="mt-4 text-xl text-white max-w-3xl mx-auto">
            Our strategic planning delivers measurable results
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{metric.icon}</div>
              <div className="text-4xl font-semibold">{metric.value}</div>
              <div className="mt-2 text-base font-semibold text-white">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>



    <FAQ faqs={businessplanningFAQs} />
    <WideDiv/>
    <Footer/>
    </>
  );
};

export default BusinessPlanning;