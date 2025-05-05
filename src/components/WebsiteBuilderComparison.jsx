import React, { useState } from 'react';
import TableOfContents from './TableOfContents';
import FAQ from "./FAQ";
import Article from './ArticleLayoutCommon';

const WebsiteBuilderComparison = () => {
  const [activeTab, setActiveTab] = useState('features');
  const platforms = [
    {
      id: 1,
      name: "BuilderPro",
      logo: "🏗️",
      rating: 4.9,
      price: "$12/month",
      bestFor: "Professional websites with advanced customization",
      features: [
        "Drag-and-drop interface",
        "500+ pre-designed templates",
        "Advanced SEO tools",
        "E-commerce capabilities",
        "Custom code insertion",
        "Responsive design",
        "Built-in analytics",
        "Multi-language support"
      ],
      pros: [
        "Highly customizable designs",
        "Excellent customer support",
        "Regular feature updates",
        "Strong SEO performance",
        "Scalable for growing businesses",
        "API access for developers"
      ],
      cons: [
        "Steeper learning curve",
        "Premium features require higher tier plans",
        "Can be resource-intensive",
        "Limited free plan"
      ],
      description: "BuilderPro is the ultimate website builder for professionals who need complete control over their site's design and functionality. With its powerful tools and extensive template library, you can create anything from a simple blog to a complex e-commerce store.",
      idealFor: [
        "Web design agencies",
        "E-commerce stores",
        "Marketing professionals",
        "Developers who need customization"
      ]
    },
    {
      id: 2,
      name: "QuickSite",
      logo: "⚡",
      rating: 4.7,
      price: "$8/month",
      bestFor: "Small businesses and beginners",
      features: [
        "AI-powered site generator",
        "300+ industry-specific templates",
        "Basic SEO tools",
        "Simple online store functionality",
        "Mobile optimization",
        "Social media integration",
        "Contact forms",
        "Blog functionality"
      ],
      pros: [
        "Fastest setup time",
        "Very beginner-friendly",
        "Affordable pricing",
        "Good mobile performance",
        "24/7 live support",
        "No coding required"
      ],
      cons: [
        "Limited design flexibility",
        "Basic e-commerce capabilities",
        "Fewer advanced features",
        "Template-based designs"
      ],
      description: "QuickSite lives up to its name by helping you get online in minutes. Its intuitive interface and AI-assisted design make it perfect for entrepreneurs and small business owners who want a professional online presence without the hassle.",
      idealFor: [
        "Small businesses",
        "Restaurants and cafes",
        "Freelancers",
        "Local service providers"
      ]
    },
    {
      id: 3,
      name: "CreativeCanvas",
      logo: "🎨",
      rating: 4.8,
      price: "$15/month",
      bestFor: "Designers and creative professionals",
      features: [
        "Advanced design toolkit",
        "200+ artistic templates",
        "Portfolio showcases",
        "Animation capabilities",
        "Client collaboration tools",
        "Custom fonts",
        "High-resolution image support",
        "Video backgrounds"
      ],
      pros: [
        "Beautiful visual designs",
        "Excellent for portfolios",
        "Unique interactive elements",
        "Strong design community",
        "Regular creative template updates",
        "Advanced typography controls"
      ],
      cons: [
        "Higher price point",
        "Less focused on business features",
        "Limited e-commerce options",
        "Not ideal for content-heavy sites"
      ],
      description: "CreativeCanvas puts design first, offering unparalleled creative freedom for artists, photographers, and designers. Showcase your work with stunning visual layouts and interactive elements that make your portfolio stand out.",
      idealFor: [
        "Graphic designers",
        "Photographers",
        "Artists and illustrators",
        "Creative agencies"
      ]
    },
    {
      id: 4,
      name: "BusinessBuilder",
      logo: "💼",
      rating: 4.6,
      price: "$10/month",
      bestFor: "E-commerce and business websites",
      features: [
        "Comprehensive e-commerce tools",
        "CRM integration",
        "Marketing automation",
        "Payment processing",
        "Inventory management",
        "Abandoned cart recovery",
        "Product variations",
        "Tax and shipping calculators"
      ],
      pros: [
        "All-in-one business solution",
        "Excellent e-commerce capabilities",
        "Built-in marketing tools",
        "Detailed analytics",
        "Multi-channel selling",
        "Secure checkout options"
      ],
      cons: [
        "Less design flexibility",
        "Can be overwhelming for simple sites",
        "Transaction fees on lower plans",
        "Steeper learning curve for advanced features"
      ],
      description: "BusinessBuilder is the complete package for entrepreneurs who want to sell online. From product management to marketing automation, it provides all the tools you need to launch and grow your online store efficiently.",
      idealFor: [
        "Online retailers",
        "Dropshipping businesses",
        "Service-based businesses",
        "Digital product sellers"
      ]
    },
  ];
  const articles1 = [
    {
      id: 1,
      title: "Top 5 Website Builders for Small Businesses in 2025",
      image: "/images/art1websitebuilder.jpg",
      author: "Catie",
      date: "April 10, 2025",
      excerpt: "Choosing the right website builder can make or break your online presence. For small businesses looking to establish a professional web presence without coding knowledge...",
      link: "#"
    },
    {
      id: 2,
      title: "WordPress vs. Wix vs. Squarespace: Choosing the Right Platform",
      image: "/images/art2website.webp",
      author: "Catie",
      date: "March 21, 2025",
      excerpt: "With so many website building platforms available today, deciding which one fits your needs can be overwhelming. Each platform offers unique features, pricing structures, and...",
      link: "#"
    },
    {
      id: 3,
      title: "How to Build a Professional Website in 7 Simple Steps",
      image: "/images/art3website.webp",
      author: "Catie",
      date: "February 15, 2025",
      excerpt: "Creating a professional website doesn't have to be complicated or expensive. By following these seven proven steps, you can build a stunning website that attracts visitors and converts...",
      link: "#"
    }
  ];
  const renderTabContent = () => {
    switch (activeTab) {
      case 'comparison':
        return (
          <div id="comparison-section" className="space-y-8">
            <div className="overflow-x-auto w-full">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-[#000e54] text-white">
                  <tr className="text-xl font-semibold">
                    <th className="py-3 px-4 text-left">Platform</th>
                    <th className="py-3 px-4 text-left">Best For</th>
                    <th className="py-3 px-4 text-left">Rating</th>
                    <th className="py-3 px-4 text-left">Price</th>
                    <th className="py-3 px-4 text-left">Key Feature</th>
                  </tr>
                </thead>
                <tbody>
                  {platforms.map((platform) => (
                    <tr key={platform.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-4 px-4 font-semibold">
                        <div className="flex items-center">
                          <span className="text-2xl mr-2">{platform.logo}</span>
                          {platform.name}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-base text-gray-800">{platform.bestFor}</td>
                      <td className="py-4 px-4">
                        <span className="flex items-center text-base text-gray-800">
                          {platform.rating}
                          <span className="text-orange-500 ml-1">★</span>
                        </span>
                      </td>
                      <td className="py-4 px-4 text-base text-gray-800">{platform.price}</td>
                      <td className="py-4 px-4 text-base text-gray-800">{platform.features[0]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Detailed Feature Comparison</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-4 text-left text-gray-800 font-semibold">Feature</th>
                      {platforms.map(platform => (
                        <th key={platform.id} className="py-3 px-4 text-center text-gray-800 font-semibold">
                          <div className="flex flex-col items-center">
                            <span className="text-2xl">{platform.logo}</span>
                            <span>{platform.name}</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium text-gray-800">E-commerce</td>
                      {platforms.map(platform => (
                        <td key={platform.id} className="py-3 px-4 text-center">
                          {platform.features.some(f => f.includes("E-commerce")) ? '✓' : '✗'}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium text-gray-800">SEO Tools</td>
                      {platforms.map(platform => (
                        <td key={platform.id} className="py-3 px-4 text-center">
                          {platform.features.some(f => f.includes("SEO")) ? '✓' : '✗'}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium text-gray-800">Mobile Optimization</td>
                      {platforms.map(platform => (
                        <td key={platform.id} className="py-3 px-4 text-center">
                          {platform.features.some(f => f.includes("Mobile") || f.includes("Responsive")) ? '✓' : '✗'}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium text-gray-800">Custom Code</td>
                      {platforms.map(platform => (
                        <td key={platform.id} className="py-3 px-4 text-center">
                          {platform.features.some(f => f.includes("Custom code")) ? '✓' : '✗'}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium text-gray-800">Free Trial</td>
                      {platforms.map(platform => (
                        <td key={platform.id} className="py-3 px-4 text-center">
                          ✓
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'guide':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">How to Choose the Right Website Builder</h3>
              <div className="space-y-6">
                <div className="relative pl-8">
                  <div className="absolute left-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#000e54] text-white">1</div>
                  <h4 className="font-semibold mb-2 text-gray-800 text-xl">Define Your Website's Purpose</h4>
                  <p className="text-base text-gray-800">Start by clearly outlining what your website needs to accomplish. Is it a portfolio, online store, blog, or business website? Different builders specialize in different areas.</p>
                  <ul className="mt-2 ml-4 list-disc text-base text-gray-800 space-y-1">
                    <li>E-commerce sites need shopping cart functionality</li>
                    <li>Portfolios need visual showcases</li>
                    <li>Blogs need strong content management</li>
                    <li>Business sites need contact forms and information architecture</li>
                  </ul>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#000e54] text-white">2</div>
                  <h4 className="font-semibold mb-2 text-gray-800 text-xl">Assess Your Technical Skills</h4>
                  <p className="text-base text-gray-800">Be honest about your technical abilities. Some platforms are more beginner-friendly while others offer advanced customization.</p>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-1">Beginner</h5>
                      <p className="text-gray-800">Choose intuitive drag-and-drop builders like QuickSite</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-1">Intermediate</h5>
                      <p className="text-gray-800">Consider platforms with more customization like BusinessBuilder</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-1">Advanced</h5>
                      <p className="text-gray-800">Look for code access like BuilderPro offers</p>
                    </div>
                  </div>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#000e54] text-white">3</div>
                  <h4 className="font-semibold mb-2 text-gray-800 text-xl">Consider Your Budget</h4>
                  <p className="text-base text-gray-800">Website builders range from free to premium. Consider both immediate and long-term costs.</p>
                  <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">Cost Factors to Consider:</h5>
                    <ul className="list-disc ml-4 space-y-1 text-base text-gray-800">
                      <li>Monthly subscription fees</li>
                      <li>Transaction fees for e-commerce</li>
                      <li>Cost of premium templates or plugins</li>
                      <li>Domain name and hosting costs</li>
                      <li>Potential hiring costs if you need help</li>
                    </ul>
                  </div>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#000e54] text-white">4</div>
                  <h4 className="font-semibold mb-2 text-gray-800 text-xl">Evaluate Growth Potential</h4>
                  <p className="text-base text-gray-800">Choose a platform that can grow with your needs, especially if you anticipate expanding your site's functionality.</p>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-1">Scalability Features</h5>
                      <ul className="list-disc ml-4 space-y-1 text-base text-gray-800">
                        <li>Ability to add more pages/products</li>
                        <li>Traffic handling capacity</li>
                        <li>Integration options with other tools</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-1">Upgrade Paths</h5>
                      <ul className="list-disc ml-4 space-y-1 text-base text-gray-800">
                        <li>Available plan tiers</li>
                        <li>Enterprise options</li>
                        <li>Custom development possibilities</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#000e54] text-white">5</div>
                  <h4 className="font-semibold mb-2 text-gray-800 text-xl">Test Before Committing</h4>
                  <p className="text-base text-gray-800">Take advantage of free trials and demos to ensure the platform feels right for your needs.</p>
                  <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">What to Test:</h5>
                    <ul className="list-disc ml-4 space-y-1 text-base text-gray-800">
                      <li>Editor interface and ease of use</li>
                      <li>Template customization options</li>
                      <li>Mobile preview functionality</li>
                      <li>Loading speed of published pages</li>
                      <li>Customer support responsiveness</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        );
      default: // features
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <div 
                key={platform.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-4xl">{platform.logo}</span>
                    <span className="bg-[#000e54] bg-opacity-10 text-[#000e54] px-2 py-1 rounded-full text-sm font-medium">
                      {platform.rating} <span className="text-orange-500">★</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{platform.name}</h3>
                  <p className="text-base text-gray-600 mb-3">{platform.bestFor}</p>
                  <p className="text-orange-500 font-bold text-base">{platform.price}</p>
                  <button 
                  onClick={() => {
                    // Scroll to the platform analysis section
                    const element = document.getElementById(`platform-${platform.id}`);
                    if (element) {
                      // Optional: Add offset if you have a fixed header
                      const yOffset = -100; 
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({top: y, behavior: 'smooth'});
                    }
                  }}
                  className="mt-4 w-full bg-[#000e54] text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-300 cursor-pointer">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        );
    }
  };

  const reasons = [
    {
      icon: "⏱️",
      title: "Save Valuable Time",
      description: "The right website builder eliminates hours of coding and design work, letting you launch faster while maintaining professional quality. Templates and drag-and-drop interfaces streamline what would otherwise take weeks of development."
    },
    {
      icon: "💰",
      title: "Maximize Your Budget",
      description: "Professional web development can cost thousands. The right builder gives you enterprise-level features at a fraction of the cost, with predictable monthly pricing that includes hosting, security, and updates."
    },
    {
      icon: "🔧",
      title: "Feature Flexibility",
      description: "Different projects require different tools. Choosing a builder with the right feature set ensures you're not paying for extras you don't need or struggling without essentials for your specific website type."
    },
    {
      icon: "📈",
      title: "Growth Potential",
      description: "As your business expands, your website needs evolve. The right platform grows with you, offering scalable resources, advanced features when you need them, and integrations with other business tools."
    },
    {
      icon: "🔒",
      title: "Security & Support",
      description: "Website security isn't optional. Quality builders offer robust security measures and dependable technical support, protecting both your business and your customers' data from emerging threats."
    }
  ];

  const statistics = [
    { value: "94%", label: "of first impressions are design-related" },
    { value: "75%", label: "judge business credibility by website quality" },
    { value: "88%", label: "of users won't return after a bad experience" },
    { value: "3.5s", label: "average time users wait before leaving slow sites" }
  ];

  const useCases = [
    {
      title: "Blogging",
      description: "Platforms optimized for content creation, publishing workflows, and reader engagement.",
      platforms: ["WordPress", "Ghost", "Medium"],
      features: ["Content scheduling", "SEO optimization", "Reader comments", "Newsletter integration"]
    },
    {
      title: "E-Commerce",
      description: "Solutions designed for online stores with product management, payments, and inventory.",
      platforms: ["Shopify", "WooCommerce", "BigCommerce"],
      features: ["Shopping cart", "Payment gateways", "Inventory tracking", "Tax calculations"]
    },
    {
      title: "Portfolio Sites",
      description: "Showcase creative work with visual layouts and multimedia support.",
      platforms: ["Squarespace", "Adobe Portfolio", "Wix"],
      features: ["Gallery displays", "Fullscreen media", "Client proofing", "Project categorization"]
    },
    {
      title: "Small Business",
      description: "Professional websites with essential business features and local SEO.",
      platforms: ["Weebly", "GoDaddy", "Jimdo"],
      features: ["Contact forms", "Business hours", "Service listings", "Appointment booking"]
    },
    {
      title: "Agencies",
      description: "Tools for managing multiple client sites with white-label options.",
      platforms: ["Webflow", "Duda", "WordPress Multisite"],
      features: ["Client billing", "Team collaboration", "Template systems", "Brand customization"]
    },
    {
      title: "Startups",
      description: "Scalable solutions that grow with your business from MVP to enterprise.",
      platforms: ["Webflow", "Framer", "Bubble"],
      features: ["Rapid prototyping", "Scalable infrastructure", "Integration APIs", "Analytics"]
    }
  ];

   // /table content
   const contents = [
    {
      id: 1,
      title: "Which Website Building is Best For You?",
      slug: "first-wb",
    },
    {
      id: 2,
      title: "Website Builder Use Cases",
      slug: "second-wb",
    },
    {
      id: 3,
      title: "In-Depth Platform Analysis",
      slug: "third-wb",
    },
    {
      id: 4,
      title: "Why Choosing the Right Website Builder Matter?",
      slug: "fourth-wb",
    },
    {
      id: 5,
      title: "Compare Top Builders",
      slug: "five-wb",
    },
    {
      id: 6,
      title: "Common Website Builder Selection Mistakes",
      slug: "sixth-wb",
    },
    { id: 7, title: "Ready to Build Your Website?", slug: "seventh-wb" },
    { id: 8, title: "Essential Functionalities for Optimal Website Builder Selection", slug: "eighth-wb" },
    { id: 9, title: "FAQs", slug: "phoneFAQs" },
  ];

// faq
const phoneFAQs = [
  {
    question: "What's the easiest website builder for beginners?",
    answer:
      "QuickSite and Wix are the most beginner-friendly options with drag-and-drop interfaces, AI-assisted design, and no coding required. They offer hundreds of templates and intuitive editors.",
  },
  {
    question: "Which builder is best for e-commerce websites?",
    answer:
      "Shopify and BusinessBuilder specialize in e-commerce with built-in payment processing, inventory management, and marketing tools. For WordPress users, WooCommerce is also excellent.",
  },
  {
    question: "Can I switch builders later if I'm not satisfied?",
    answer:
      "Yes, but migration can be complex. Content can usually be transferred, but designs often need rebuilding. Choose carefully to avoid future hassles.",
  },
  {
    question: "How important is mobile responsiveness?",
    answer:
      "Extremely important. Over 50% of web traffic comes from mobile devices. All modern builders create mobile-responsive sites, but always test your specific design.",
  },
  {
    question: "What hidden costs should I watch for?",
    answer:
      " Look for transaction fees (e-commerce), premium template costs, domain registration, additional bandwidth/storage fees, and charges for removing builder branding.",
  },
  {
    question: "How do I know if a builder will scale with my business?",
    answer:
      "Check maximum page/product limits, traffic handling capacity, available integrations, and enterprise plan options. BuilderPro and Webflow scale best for growing businesses.",
  },
];


  return (
    <div className="white">
      <TableOfContents contents={contents} />
      <div id="first-wb">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto rounded-xl bg-gradient-to-r from-[#000e54] to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-4xl font-semibold mb-6">Which Website Builder is Best For You?</h1>
          <p className="text-xl md:text-xl max-w-xl mx-auto">
            Compare the top website building platforms to find your perfect match based on needs, skills, and budget.
          </p>
        </div>
      </div>

        {/* Platform Comparison Section */}
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-center mb-12 text-gray-900">Compare Website Building Platforms</h2>
          
          {/* Tab Navigation */}
          <div className="mb-8 border-b border-gray-200">
            <nav className="-mb-px flex flex-wrap justify-center space-x-4 md:space-x-8">
              <button
                onClick={() => setActiveTab('features')}
                className={`${
                  activeTab === 'features'
                    ? 'border-[#000e54] text-[#000e54]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } py-4 px-1 border-b-2 font-semibold text-base`}
              >
                Featured Platforms
              </button>
              <button
                onClick={() => setActiveTab('comparison')}
                className={`${
                  activeTab === 'comparison'
                    ? 'border-[#000e54] text-[#000e54]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } py-4 px-1 border-b-2 font-semibold text-base`}
              >
                Comparison Table
              </button>
              <button
                onClick={() => setActiveTab('guide')}
                className={`${
                  activeTab === 'guide'
                    ? 'border-[#000e54] text-[#000e54]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } py-4 px-1 border-b-2 font-semibold text-base`}
              >
                Selection Guide
              </button>
            </nav>
          </div>
          
          {/* Tab Content */}
          <div className="mb-12">
            {renderTabContent()}
          </div>
      
</div>
</div>
      {/* Main Content */}
        {/* Use Cases Section */}
        <div id="second-wb" className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-center mb-12 text-gray-900">Website Builder Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{useCase.title}</h3>
                  <p className="text-base text-gray-800 mb-4">{useCase.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-base text-gray-800 mb-2">Top Platforms:</h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.platforms.map((platform, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 text-base px-3 py-1 rounded-full text-sm">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 text-base mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-base">
                      {useCase.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


    {/* Detailed Platform Information */}
          <div id="third-wb" className="max-w-6xl mx-auto py-12 px-4 space-y-12 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-center mb-12 text-gray-900">In-Depth Platform Analysis</h2>
            {platforms.map(platform => (
              <div key={platform.id} 
              id={`platform-${platform.id}`}className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="flex items-center mb-6">
                      <span className="text-5xl mr-4">{platform.logo}</span>
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800">{platform.name}</h2>
                        <p className="text-orange-500 font-semibold text-base">{platform.price}</p>
                        <div className="flex items-center mt-1">
                          <span className="text-gray-800 mr-1">{platform.rating}</span>
                          <span className="text-orange-500">★</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-base text-gray-800 mb-6">{platform.description}</p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2 text-base">Ideal For:</h4>
                      <ul className="list-disc ml-4 space-y-1 text-gray-800 font-lg">
                        {platform.idealFor.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Features</h3>
                        <ul className="space-y-2">
                          {platform.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-gray-800">
                              <span className="text-[#000e54] mr-2 mt-1">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="mb-8">
                          <h3 className="text-xl font-semibold text-[#000e54] mb-4 border-b pb-2">Pros</h3>
                          <ul className="space-y-2">
                            {platform.pros.map((pro, idx) => (
                              <li key={idx} className="flex items-start text-gray-800">
                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-orange-500 mb-4 border-b pb-2">Cons</h3>
                          <ul className="space-y-2">
                            {platform.cons.map((con, idx) => (
                              <li key={idx} className="flex items-start text-gray-800">
                                <span className="text-red-500 mr-2 mt-1">✗</span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Recommendation</h4>
                      <p className="text-gray-800">
                        {platform.name} is best suited for {platform.bestFor.toLowerCase()}. 
                        {platform.id === 1 ? " Its advanced features make it worth the learning curve for professionals." : ""}
                        {platform.id === 2 ? " Its simplicity and affordability make it perfect for getting online quickly." : ""}
                        {platform.id === 3 ? " The design-focused tools are unmatched for creative presentations." : ""}
                        {platform.id === 4 ? " The comprehensive business tools provide everything you need to sell online." : ""}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


        {/* Why It Matters Section */}
        <div id="fourth-wb" className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">Why Choosing the Right Website Builder Matters</h2>
            <div className="max-w-6xl mx-auto">
              <p className="text-base text-gray-800 leading-relaxed">
                In today's digital-first world, your website is often the first interaction customers have with your brand. 
                Selecting the right website building platform isn't just a technical decision—it's a strategic business choice 
                that affects everything from customer perception to operational efficiency.
              </p>
            </div>
          </div>

          {/* Statistics Banner */}
          <div className="bg-[#000e54] text-white rounded-xl shadow-xl p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-semibold text-orange-500">{stat.value}</p>
                  <p className="mt-2 text-base">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold text-[#000e54] mb-6 border-b-2 border-orange-500 pb-2 inline-block">
                Beyond Just Building a Website
              </h3>
              <p className="text-base text-gray-800 mb-6 leading-relaxed">
                The website builder you choose shapes your entire online presence strategy. It determines how quickly you can 
                launch, how easily you can make updates, what features you can offer visitors, and how effectively you can 
                scale your digital operations as your business grows.
              </p>
              <p className="text-base text-gray-800 mb-6 leading-relaxed">
                Many businesses discover too late that they've outgrown their website platform, forcing costly and time-consuming 
                migrations. Others overpay for complex solutions when simpler options would serve their needs perfectly.
              </p>
              <p className="text-base text-gray-800 leading-relaxed">
                The right choice balances current requirements with future potential, technical capabilities with ease of use, 
                and cost with value. This decision affects not just your IT department, but your entire business operation—from 
                marketing and sales to customer service and strategic growth.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-[#000e54] mb-6 border-b-2 border-orange-500 pb-2 inline-block">
                Key Considerations
              </h3>
              <ul className="space-y-6">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex">
                    <div className="mr-4 bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0">
                      {reason.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-[#000e54] mb-1">{reason.title}</h4>
                      <p className="text-gray-800 text-base">{reason.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        
          {/* Bottom Quote Section */}
          <div id="five-wb" className="max-w-6xl mx-auto mt-16 bg-gradient-to-r from-[#000e54] to-blue-900 rounded-xl shadow-xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3">
                <h3 className="text-4xl font-semibold mb-6">Make the Right Choice First Time</h3>
                <p className="text-base leading-relaxed">
                  "The cost of choosing the wrong website platform isn't just financial—it's measured in missed opportunities, 
                  competitive disadvantage, and customer frustration. Taking time to evaluate your specific needs against platform 
                  capabilities delivers exponential returns on investment."
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
                <button
                 onClick={() => {
                  setActiveTab('comparison'); // Switch to comparison tab
                  setTimeout(() => { // Small delay to allow tab switch
                    const element = document.getElementById('comparison-section');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 text-base cursor-pointer">
                  Compare Top Builders
                </button>
              </div>
            </div>
          </div>

          {/* Common Mistakes Section */}
          <div id="sixth-wb" className="max-w-6xl mx-auto mt-16 mb-16">
            <h3 className="text-4xl font-semibold text-[#000e54] mb-8 text-center">Common Website Builder Selection Mistakes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-500">
                <h4 className="font-semibold text-xl text-gray-900 mb-3">Prioritizing Price Over Needs</h4>
                <p className="text-base text-gray-800">
                  Choosing solely based on cost often leads to missing essential features or future limitations. 
                  Consider value and ROI rather than just the monthly fee.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-500">
                <h4 className="font-semibold text-xl text-gray-900 mb-3">Ignoring Scalability</h4>
                <p className="text-base text-gray-800">
                  Many businesses outgrow their initial platform within 1-2 years. Evaluate how the builder 
                  handles increased traffic, content, and functionality as you grow.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-500">
                <h4 className="font-semibold text-xl text-gray-900 mb-3">Overlooking SEO Capabilities</h4>
                <p className="text-base text-gray-800">
                  Search visibility is crucial for organic growth. Ensure your builder offers robust SEO tools 
                  for meta tags, sitemaps, structured data, and mobile optimization.
                </p>
              </div>
            </div>
          </div>


        {/* Final CTA */}
        <div id="seventh-wb" className="bg-white rounded-xl shadow-xl p-12 text-center max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">Ready to Build Your Website?</h2>
          <p className="text-base text-gray-800 mb-8 max-w-2xl mx-auto">
            Start with a free trial of our recommended platforms and experience the difference the right builder can make.
          </p>
          <button className="bg-[#000e54] hover:bg-blue-900 text-white font-semibold py-4 px-12 rounded-full shadow-lg transition duration-300 text-base">
            Get Started Today
          </button>
        </div>

        {/* Essential Functionalities */}
        <div id="eighth-wb" className="max-w-6xl mx-auto bg-white p-8 my-8">
  <h2 className="text-4xl text-center font-semibold text-[#000e54] mb-6 pb-2">
    Essential Functionalities for Optimal Website Builder Selection
  </h2>
  
  <p className="text-base text-center text-gray-800 mb-8">
    Professional website creation requires comprehensive tools to build, manage, and optimize your online presence effectively:
  </p>

  <div className="space-y-6">
    {/* Functionality 1 */}
    <div className="flex items-start">
      <div className="bg-[#000e54] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
        1
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Unified Dashboard</h3>
        <p className="text-base text-gray-800">
          Manage all site elements, content, and settings through a centralized control panel with granular permission controls for team members.
        </p>
      </div>
    </div>

    {/* Functionality 2 */}
    <div className="flex items-start">
      <div className="bg-[#000e54] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
        2
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Responsive Design Engine</h3>
        <p className="text-base text-gray-800">
          Automatically adapt layouts for all devices with real-time previews and pixel-perfect mobile optimization controls.
        </p>
      </div>
    </div>

    {/* Functionality 3 */}
    <div className="flex items-start">
      <div className="bg-[#000e54] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
        3
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Advanced SEO Toolkit</h3>
        <p className="text-base text-gray-800">
          Built-in tools for meta tag management, structured data markup, XML sitemap generation, and performance optimization scoring.
        </p>
      </div>
    </div>

    {/* Functionality 4 */}
    <div className="flex items-start">
      <div className="bg-[#000e54] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
        4
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Content Management System</h3>
        <p className="text-base text-gray-800">
          Intuitive WYSIWYG editor with version history, scheduled publishing, and multi-language support for global content strategies.
        </p>
      </div>
    </div>

    {/* Functionality 5 */}
    <div className="flex items-start">
      <div className="bg-[#000e54] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
        5
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">E-Commerce Integration</h3>
        <p className="text-base text-gray-800">
          Complete storefront solutions with product variants, inventory management, secure checkout, and tax calculation systems.
        </p>
      </div>
    </div>

    {/* Functionality 6 */}
    <div className="flex items-start">
      <div className="bg-[#000e54] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
        6
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Performance Analytics</h3>
        <p className="text-base text-gray-800">
          Real-time visitor tracking, conversion funnels, heatmaps, and speed diagnostics with actionable improvement recommendations.
        </p>
      </div>
    </div>

    {/* Functionality 7 */}
    <div className="flex items-start">
      <div className="bg-[#000e54] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
        7
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Template Customization</h3>
        <p className="text-base text-gray-800">
          Extensive theme libraries with full CSS/HTML access, global style controls, and reusable component libraries.
        </p>
      </div>
    </div>

    {/* Functionality 8 */}
    <div className="flex items-start">
      <div className="bg-[#000e54] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
        8
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">API & Integration Hub</h3>
        <p className="text-base text-gray-800">
          Connect to marketing automation, CRM systems, payment gateways, and business intelligence tools through native integrations.
        </p>
      </div>
    </div>

    {/* Functionality 9 */}
    <div className="flex items-start">
      <div className="bg-[#000e54] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
        9
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Security & Compliance</h3>
        <p className="text-base text-gray-800">
          Enterprise-grade protection including SSL certificates, GDPR tools, regular backups, and DDoS mitigation.
        </p>
      </div>
    </div>

    {/* Functionality 10 */}
    <div className="flex items-start">
      <div className="bg-[#000e54] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
        10
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Team Collaboration</h3>
        <p className="text-base text-gray-800">
          Multi-user environments with approval workflows, commenting systems, and change tracking for enterprise content teams.
        </p>
      </div>
    </div>
  </div>

  <div className="mt-8 bg-orange-50 border border-orange-200 rounded-lg p-6">
    <h3 className="text-xl font-semibold text-[#000e54] mb-3">Implementation Recommendations</h3>
    <ul className="text-base list-disc ml-5 space-y-2 text-gray-800">
      <li>Prioritize builders offering at least 80% of these core functionalities</li>
      <li>Verify scalability limits before committing to any platform</li>
      <li>Request sandbox access to test real-world implementation</li>
      <li>Evaluate mobile editing experience with your actual content</li>
      <li>Confirm data export capabilities for future migration needs</li>
    </ul>
  </div>
</div>
  <Article
            title="Related Articles" 
            items={articles1} 
            buttonText="View Post" 
            buttonColor="bg-[#ff8633]" 
          />
<div id="phoneFAQs" className="">
        <FAQ faqs={phoneFAQs} />
      </div>


    </div>
  );
};

export default WebsiteBuilderComparison;