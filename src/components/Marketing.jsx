import { useState } from 'react';
import React from "react";
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';
import { Check, Phone, Mail, MapPin, ArrowRight, Users, Award, BarChart, Target } from "lucide-react";
import Article from './ArticleLayoutCommon';
import busimage from '/images/honey.png';
import FAQ from './FAQ';


const Marketing = () => {
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

      const marketingServices = [
        {
          title: "CRM Software Solutions",
          description: "Optimize your customer relationships with our state-of-the-art CRM software that integrates seamlessly with your existing systems. Track interactions, manage leads, and increase conversions.",
          features: ["Customer data management", "Lead tracking", "Sales forecasting", "Analytics and reporting"],
          icon: Users,
          link: "/BestCRMSoftware"
        },
        {
          title: "Email Marketing Services",
          description: "Reach your audience with targeted email campaigns that drive engagement and conversions. Our email marketing services include template design, audience segmentation, and performance analytics.",
          features: ["Campaign automation", "A/B testing", "Audience segmentation", "Detailed analytics"],
          icon: Mail,
          link: "/EmailMarketing"
        },
        {
          title: "Website Building Platforms",
          description: "Create a professional online presence with our intuitive website building platforms. No coding experience required - design a responsive website that converts visitors into customers.",
          features: ["Drag-and-drop editor", "Mobile optimization", "SEO tools", "Integrated analytics"],
          icon: BarChart,
          link: "/BestWebsiteBuildingPlatform"
        },
        {
          title: "Digital Advertising Management",
          description: "Maximize your ROI with our comprehensive digital advertising services. From PPC campaigns to social media ads, we help you reach your target audience effectively.",
          features: ["Campaign strategy", "Ad creation", "Performance tracking", "Budget optimization"],
          icon: Target,
          link: "/Advertise"
        }
      ];
    
      const successMetrics = [
        { label: "Average ROI", value: "320%", description: "Return on marketing investment" },
        { label: "Customer Acquisition", value: "-25%", description: "Reduction in acquisition costs" },
        { label: "Conversion Rate", value: "+140%", description: "Increase in website conversions" },
        { label: "Client Retention", value: "94%", description: "Of clients continue after first year" }
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
            title: "VoIP vs Landline Phone System",
            image: busimage,
            author: "Catie",
            date: "November 21, 2019",
            excerpt: "American businesses today face a major debate when deciding on technology. Should I get VoIP vs. a traditional landline ...",
            link: "#"
          },
          {
            id: 2,
            title: "RingCentral Business Phone System: Features, Pricing, Pros and Cons",
            image: busimage,
            author: "Catie",
            date: "October 7, 2020",
            excerpt: "RingCentral Overview RingCentral is a popular VoIP provider offering both cloud-based and hosted solutions for businesses of various sizes. They ...",
            link: "#"
          },
          {
            id: 3,
            title: "8 Steps for Choosing the Right VoIP Service Provider",
            image: busimage,
            author: "Catie",
            date: "January 11, 2023",
            excerpt: "As a business leader, surely you want to find the best business phone system for your organization's needs. With ...",
            link: "#"
          }
        ];
        const marketingFAQs = [
            {
              question: "What marketing services do you offer?",
              answer: [
                "Full-service digital marketing strategy",
                "SEO & content marketing",
                "Paid advertising (Google Ads, Meta, LinkedIn)",
                "Social media management",
                "Email marketing automation",
                "Conversion rate optimization"
              ]
            },
            {
              question: "How do you measure campaign success?",
              answer: [
                "We track 50+ KPIs including:",
                "ROI and customer acquisition cost",
                "Conversion rates at each funnel stage",
                "Quality score and engagement metrics",
                "Lifetime customer value",
                "Regular reporting with actionable insights"
              ]
            },
            {
              question: "What industries do you specialize in?",
              answer: "We've delivered results for B2B tech, eCommerce, professional services, healthcare, and SaaS companies. Our strategists have deep vertical expertise in these markets, allowing us to create highly targeted campaigns."
            },
            {
              question: "How long until we see results?",
              answer: [
                "Timeline varies by service:",
                "Paid ads: Immediate traffic (1-2 week optimization)",
                "SEO: 3-6 months for sustained growth",
                "Social media: 30-90 days for audience building",
                "All campaigns include monthly progress reports"
              ]
            },
            {
              question: "What's your pricing model?",
              answer: "We offer flexible options: monthly retainers (starting at $3,000/mo), project-based pricing, or performance-based models. Every proposal is customized after our free marketing audit."
            },
            {
              question: "Can you work with our in-house team?",
              answer: "Absolutely. We often augment internal marketing teams, providing specialized expertise where needed. We'll integrate with your workflows through Slack, Teams, or your preferred project management tools."
            },
            {
              question: "Do you offer marketing technology setup?",
              answer: [
                "Yes, we're certified partners for:",
                "Google Marketing Platform",
                "HubSpot & Marketo",
                "Shopify Plus",
                "Hotjar & analytics tools",
                "Custom tech stack configuration"
              ]
            },
            {
              question: "How do you stay current with marketing trends?",
              answer: "Our team attends 20+ industry conferences annually, runs continuous A/B tests, and maintains partnerships with Google, Meta, and LinkedIn. We allocate 15% of work hours to professional development."
            },
            {
              question: "What makes your agency different?",
              answer: [
                "Key differentiators:",
                "Data-first approach (not just creative)",
                "Full-funnel attribution tracking",
                "Dedicated strategist for each client",
                "Transparent reporting dashboard",
                "Proprietary audience targeting methods"
              ]
            },
            {
              question: "How do we get started?",
              answer: "Book a free 30-minute consultation. We'll analyze your current marketing, identify quick wins, and present a customized plan. Onboarding typically takes 1-2 weeks from signed agreement."
            }
          ];
    
    
    
  return (
    <>
    <Navbar/>
    <div className="">
      {/* Hero Section */}
      <div className=" text-gray-900 max-w-6xl mx-auto">
  <div className="container mx-auto px-4 py-12 md:py-20">
    <div className="flex flex-col lg:flex-row items-center">
      {/* Text Content (Left) */}
      <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-6">Marketing Solutions That Drive Real Growth</h1>
        <p className="text-base sm:text-xl mb-8">We help businesses like yours achieve measurable results through data-driven marketing strategies and cutting-edge tools.</p>
        <div className="flex flex-wrap gap-4">
          <a href="/contact-sales" className="bg-[#ff8633] hover:bg-[#e6732a] text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Get Started Today
          </a>
          <a href="#services" className="shadow-lg hover:bg-white hover:text-[#ff8633] text-gray-800 font-bold py-3 px-8 border-2 border-white rounded-lg transition duration-300">
            View Services
          </a>
        </div>
      </div>

      {/* Image (Right) */}
      <div className="lg:w-1/2 flex justify-center">
        <img 
          src="https://cdn.corporatefinanceinstitute.com/assets/marketing-1024x594.jpeg" // Replace with your image path
          alt="Marketing analytics dashboard showing growth"
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
              <div key={index} className="text-center p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
                <p className="text-gray-800 mb-2">{metric.label}</p>
                <p className={`text-4xl font-semibold mb-2 ${metric.value.includes('-') ? 'text-green-600' : 'text-blue-600'}`}>{metric.value}</p>
                <p className="text-gray-800 text-base">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marketing Services */}
      <div id="services" className="max-w-6xl py-10 mx-auto">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Our Marketing Services</h2>
            <p className="text-base text-gray-800 max-w-3xl mx-auto">Comprehensive solutions to elevate your brand, engage your audience, and drive conversions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            {marketingServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 rounded-full p-3 mr-4">
                        <Icon className="w-6 h-6 text-[#000e54]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#000e54]">{service.title}</h3>
                    </div>
                    <p className="text-gray-800 text-base mb-6">{service.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <button 
                        className="flex items-center text-[#ff8633] font-semibold text-base"
                        onClick={() => toggleService(index)}
                      >
                        {expandedService === index ? "Show Less" : "Show Features"}
                        <ArrowRight className={`ml-2 w-4 h-4 transition-transform duration-300 ${expandedService === index ? 'rotate-90' : ''}`} />
                      </button>
                      
                      <a 
                        href={service.link} 
                        className="text-[#000e54] text-base font-semibold transition duration-300"
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

      {/* Process Section */}
      <div className="py-10 max-w-6xl mx-auto bg-white px-4">
        <div className="container mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Our Marketing Process</h2>
            <p className="text-base text-gray-800 max-w-3xl mx-auto">A proven approach to deliver consistent results for your business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
             
              <div className="relative z-10">
                <div className="bg-[#000e54] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 border-4 border-blue-100">
                  1
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-[#000e54] mb-2 text-center">Research & Analysis</h3>
                  <p className="text-gray-800 text-base text-center">We dive deep into your market, audience, and competitors to establish a solid foundation</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
             
              <div className="relative z-10">
                <div className="bg-[#000e54] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 border-4 border-blue-100">
                  2
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-[#000e54] mb-2 text-center">Strategy Development</h3>
                  <p className="text-gray-800 text-base text-center">Custom marketing plans tailored to your specific business goals and target audience</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              
              <div className="relative z-10">
                <div className="bg-[#000e54] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 border-4 border-blue-100">
                  3
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-[#000e54] mb-2 text-center">Implementation</h3>
                  <p className="text-gray-800 text-base text-center">Expert execution of campaigns across all relevant marketing channels</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
           
              <div className="relative z-10">
                <div className="bg-[#000e54] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 border-4 border-blue-100">
                  4
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-[#000e54] mb-2 text-center">Optimization & Growth</h3>
                  <p className="text-gray-800 text-base text-center">Continuous monitoring and refinement to maximize performance and ROI</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div id="why-us" className="py-10 max-w-6xl mx-auto">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-smeibold text-gray-900 mb-4">Why Choose Our Marketing Services</h2>
            <p className="text-base text-gray-800 max-w-3xl mx-auto">Partner with us to transform your marketing efforts and achieve sustainable growth</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-[#ff8633]" />
              </div>
              <h3 className="text-xl font-semibold text-[#000e54] mb-3">Proven Results</h3>
              <p className="text-gray-800 text-base mb-4">Our data-driven approach has delivered exceptional results for businesses across various industries</p>
              
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#ff8633]" />
              </div>
              <h3 className="text-xl font-semibold text-[#000e54] mb-3">Expert Team</h3>
              <p className="text-gray-800 text-base mb-4">Our marketing specialists bring years of experience and cutting-edge knowledge to your campaigns</p>
            
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <BarChart className="w-8 h-8 text-[#ff8633]" />
              </div>
              <h3 className="text-xl font-semibold text-[#000e54] mb-3">Complete Transparency</h3>
              <p className="text-gray-800 text-base mb-4">Regular reporting and analytics that show exactly how your marketing budget is performing</p>
              
            </div>
          </div>
        </div>
      </div>  

       {/*why we are diffrent  */}
       <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl  font-semibold text-gray-900 mb-4">
            Why We're Different
          </h2>
          <p className="text-base text-gray-800 max-w-2xl mx-auto">
            We don't just market - we deliver measurable growth through:
          </p>
        </div>

        {/* USP Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* USP 1 */}
          <div className="shadow-lg p-8 rounded-xl border border-gray-200">
            <div className="text-4xl mb-5">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Hyper-Targeted Approach</h3>
            <p className="text-gray-800 text-base">
              Our proprietary audience segmentation delivers 3x better conversion rates than industry averages.
            </p>
          </div>

          {/* USP 2 */}
          <div className="shadow-lg p-8 rounded-xl border border-gray-200">
            <div className="text-4xl mb-5">📈</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Proven Framework</h3>
            <p className="text-gray-800 text-base">
              The same strategies we've used to generate $28M+ in client revenue last year alone.
            </p>
          </div>

          {/* USP 3 */}
          <div className="shadow-lg p-8 rounded-xl border border-gray-200">
            <div className="text-4xl mb-5">🤝</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Partnership Model</h3>
            <p className="text-gray-800 text-base">
              Dedicated account teams - not junior contractors - working as an extension of your team.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* competitor */}
    <div className="p-6 py-20 rounded-xl max-w-6xl mx-auto px-4">
  <h3 className="text-4xl font-semibold text-gray-900 mb-4">How You Stack Against Competitors</h3>
  <div className="grid grid-cols-4 gap-2">
    {/* Header */}
    <div></div>
    <div className="text-center text-gray-800 text-base font-semibold">You</div>
    <div className="text-center text-gray-800 text-base font-semibold">Competitor A</div>
    <div className="text-center text-gray-800 text-base font-semibold">Competitor B</div>
    
    {/* Rows */}
    {['SEO Score', 'Social Engagement', 'Ad Spend'].map((metric, i) => (
      <>
        <div className="font-medium">{metric}</div>
        {[85, 72, 68].map((score, j) => (
          <div key={j} className={`p-2 text-center text-base rounded 
            ${score > 80 ? 'bg-green-100 text-green-800' : 
              score > 70 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
            {score}%
          </div>
        ))}
      </>
    ))}
  </div>
</div>

{/* industry leading performance */}
<section className='px-4'>
<div className="bg-gradient-to-r from-[#000e54] to-[#1a3a8f] text-white p-12 rounded-3xl max-w-6xl mx-auto">
  <h3 className="text-4xl font-semibold mb-2">Industry-Leading Performance</h3>
  <p className="text-white text-xl mb-12">How we compare to standard industry solutions</p>
  
  <div className="space-y-8">
    {[
      { metric: "Campaign ROI", us: "4.8x", industry: "2.1x" },
      { metric: "Lead Quality Score", us: "92%", industry: "68%" },
      { metric: "Implementation Speed", us: "2 weeks", industry: "6 weeks" }
    ].map((item, index) => (
      <div key={index}>
        <div className="flex justify-between mb-2 text-base">
          <span>{item.metric}</span>
          <span className="text-white text-white text-base">Industry Average: {item.industry}</span>
        </div>
        <div className="h-3 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#ff8633] to-yellow-300 rounded-full" 
            style={{ width: `${index * 30 + 70}%` }}>
          </div>
        </div>
        <div className="text-right mt-1 font-semibold text-base">{item.us} (Our Clients)</div>
      </div>
    ))}
  </div>
</div>
</section>

{/* growth framework */}
<div className=" p-8 rounded-2xl py-20 max-w-6xl mx-auto">
  <h3 className="text-4xl font-semibold mb-8">Our 90-Day Growth Framework</h3>
  <div className="relative">
    {/* Progress line */}
    <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-300"></div>
    
    {[
      { week: "Week 1-2", title: "Deep Dive Audit", content: "Competitor analysis + gap assessment" },
      { week: "Week 3-4", title: "Strategy Development", content: "Custom playbook creation" },
      { week: "Month 2", title: "Campaign Launch", content: "Multi-channel implementation" }
    ].map((item, index) => (
      <div key={index} className="relative pl-16 pb-8 group">
        <div className="absolute left-0 w-8 h-8 rounded-full bg-white border-4 border-[#000e54] 
                        flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
          {index + 1}
        </div>
        <h4 className="font-semibold text-xl mb-1">{item.week}</h4>
        <h5 className="text-[#000e54] text-base font-semibold mb-2">{item.title}</h5>
        <p className="text-gray-800 text-base">{item.content}</p>
      </div>
    ))}
  </div>
</div>
</div>       

    <Article
        title="Related Articles" 
        items={articles1} 
        buttonText="View Post" 
        buttonColor="bg-[#ff8633]" 
      />

    <FAQ faqs={ marketingFAQs} />
    <WideDiv/>
    <Footer/>
    </>
  );
};

export default Marketing;