import React, { useState } from 'react';
import FAQ from './FAQ';
import Article from './ArticleLayoutCommon';
import busimage from '/images/honey.png';
import { ChevronRight, Users,TrendingUp,DollarSign, 
    BarChart2,   Zap, 
    Maximize, 
    Globe, 
    Clock, 
    Award, 
    MessageSquare, 
    Heart, Mail, PieChart, Settings, Check, UserPlus, Repeat, Target, BarChart3, Edit, SendHorizontal } from 'lucide-react';




const EmailMarketingContent = () => {
    
  // faq
  const emailFAQs = [
    {
      question: "How does email marketing improve my business operations?",
      answer: [
        "Direct communication with targeted customer segments",
        "Automated lead nurturing and customer onboarding",
        "Increased conversion rates with personalized content",
        "Measurable ROI tracking for marketing campaigns",
        "Better customer engagement with timely promotions"
      ]
    },
    {
      question: "What types of businesses can benefit from email marketing?",
      answer: "Our email marketing solutions work for all types of businesses including e-commerce stores, service providers, B2B companies, nonprofits, and educational institutions. The platform is scalable regardless of your industry or business size."
    },
    {
      question: "How can I improve my email deliverability rates?",
      answer: "Our systems maintain deliverability rates above 98% using advanced authentication protocols like DKIM and SPF. We provide automated list cleaning, bounce management, and sender reputation monitoring to ensure your emails reach the inbox."
    },
    {
      question: "Can I track customer behavior with email marketing?",
      answer: [
        "Yes, our system tracks and reports on:",
        "Open rates and times",
        "Click-through behavior",
        "Conversion tracking",
        "Website activity after email clicks",
        "Provides comprehensive engagement analytics"
      ]
    },
    {
      question: "What happens if my emails go to spam folders?",
      answer: "The platform constantly monitors spam complaints and provides actionable suggestions to improve deliverability. We offer spam testing tools before sending and automatically optimize sending patterns to avoid triggering spam filters."
    },
    {
      question: "How often should I send marketing emails to my list?",
      answer: "Optimal sending frequency varies by industry, but our data shows 1-2 emails per week typically provides the best engagement. Our AI-powered send time optimization determines the ideal timing for each individual subscriber based on their past behavior."
    },
    {
      question: "Can I set up automated email sequences and workflows?",
      answer: [
        "Yes, you can configure automated emails for:",
        "Welcome sequences for new subscribers",
        "Abandoned cart recovery",
        "Post-purchase follow-ups",
        "Re-engagement campaigns",
        "Birthday and anniversary messages",
        "Behavior-triggered notifications"
      ]
    },
    {
      question: "Is the email marketing platform difficult to use?",
      answer: "Our drag-and-drop editor requires no coding skills and includes hundreds of responsive templates. Most users can create and launch their first campaign within 30 minutes of signup. We also offer comprehensive onboarding and free template customization services."
    }
  ];

 



//   alternative




 

const articles = [
  {
    id: 1,
    title: "Email Marketing vs Social Media: Which Drives More Conversions?",
    image: "/images/img1email.png",
    author: "Catie",
    date: "April 5, 2023",
    excerpt:
      "Marketing teams often debate which channel deserves more budget allocation. Should you focus on email marketing or invest heavily in social media campaigns...",
    link: "#",
  },
  {
    id: 2,
    title: "Mailchimp Email Marketing: Features, Pricing, Pros and Cons",
    image: "/images/img2email.png",
    author: "Catie",
    date: "August 17, 2023",
    excerpt:
      "Mailchimp Overview Mailchimp is a popular email marketing platform offering intuitive tools for businesses of all sizes. Their all-in-one marketing solution includes...",
    link: "#",
  },
  {
    id: 3,
    title: "7 Key Metrics to Measure Email Marketing Success",
    image: "/images/img3email.png",
    author: "Catie",
    date: "January 22, 2024",
    excerpt:
      "As a marketing professional, measuring the effectiveness of your email campaigns is essential for optimizing performance. Beyond basic open rates...",
    link: "#",
  },
];
    const steps = [
        {
          title: "Define Your Audience",
          description: "Identify your target audience based on demographics, behavior, and interests.",
          icon: <Users className="w-12 h-12 text-[#000e54]" />,
          details: [
            "Segment customers based on purchase history",
            "Group by demographics (age, location)",
            "Segment by website behavior and engagement"
          ]
        },
        {
          title: "Build Your Email List",
          description: "Create compelling opt-in forms and landing pages to capture email addresses.",
          icon: <UserPlus className="w-12 h-12 text-[#000e54]" />,
          details: [
            "Create lead magnets (guides, discounts)",
            "Use sign-up forms on your website",
            "Implement pop-ups and exit-intent forms"
          ]
        },
        {
          title: "Choose Email Platform",
          description: "Select an email service provider that matches your needs and budget.",
          icon: <Settings className="w-12 h-12 text-[#000e54]" />,
          details: [
            "Evaluate deliverability rates",
            "Compare automation capabilities",
            "Assess template options and ease of use"
          ]
        },
        {
          title: "Create Compelling Content",
          description: "Design emails with engaging subject lines, clear CTAs, and valuable content.",
          icon: <Edit className="w-12 h-12 text-[#000e54]" />,
          details: [
            "Write attention-grabbing subject lines",
            "Design mobile-responsive templates",
            "Create clear calls-to-action"
          ]
        },
        {
          title: "Send Campaigns",
          description: "Schedule and send your emails at optimal times for engagement.",
          icon: <SendHorizontal className="w-12 h-12 text-[#000e54]" />,
          details: [
            "Test email rendering across devices",
            "Determine optimal sending times",
            "Send welcome sequences for new subscribers"
          ]
        },
        {
          title: "Analyze Performance",
          description: "Track key metrics like open rates, click rates, conversions, and ROI.",
          icon: <BarChart3 className="w-12 h-12 text-[#000e54]" />,
          details: [
            "Monitor open and click-through rates",
            "Track conversion and revenue metrics",
            "Analyze subscriber growth and churn"
          ]
        },
        {
          title: "Optimize & Improve",
          description: "Use data to refine your approach, test new strategies, and improve results.",
          icon: <Repeat className="w-12 h-12 text-[#000e54]" />,
          details: [
            "Conduct A/B testing on various elements",
            "Refine segmentation strategy",
            "Improve content based on engagement data"
          ]
        }
      ];
    
      // Email marketing statistics
      const stats = [
        { label: "ROI", value: "$42", subtext: "for every $1 spent" },
        { label: "Open Rate", value: "18%", subtext: "industry average" },
        { label: "Conversion", value: "3.7%", subtext: "average rate" },
        { label: "Subscribers", value: "81%", subtext: "check email daily" }
      ];
      const [activeCategory, setActiveCategory] = useState('roi');
      const categories = {
        roi: {
          title: "Return on Investment",
          icon: <DollarSign className="h-8 w-8 text-[#000e54]" />,
          color: "bg-blue-50 border-blue-200",
          textColor: "text-[#000e54]",
          hoverColor: "hover:bg-blue-100",
          activeColor: "bg-blue-100",
          benefits: [
            {
              title: "Highest ROI in Digital Marketing",
              description: "Email marketing generates $42 for every $1 spent, outperforming all other digital marketing channels including social media and PPC advertising.",
              icon: <TrendingUp />
            },
            {
              title: "Cost-Effective Marketing",
              description: "Minimal costs compared to traditional marketing methods with no printing or postage expenses and affordable email marketing platforms.",
              icon: <DollarSign />
            },
            {
              title: "Trackable Results",
              description: "Precisely measure campaign performance through open rates, click-through rates, conversion rates, and revenue attribution for data-driven decisions.",
              icon: <BarChart2 />
            }
          ]
        },
        targeting: {
          title: "Precise Targeting",
          icon: <Target className="h-8 w-8 text-orange-500" />,
          color: "bg-orange-50 border-orange-200",
          textColor: "text-orange-600",
          hoverColor: "hover:bg-orange-100",
          activeColor: "bg-orange-100",
          benefits: [
            {
              title: "Advanced Segmentation",
              description: "Send highly relevant messages by segmenting your audience based on demographics, behavior, purchase history, and engagement levels.",
              icon: <Users />
            },
            {
              title: "Personalized Communication",
              description: "Customize content, product recommendations, and offers for each subscriber to increase relevance and strengthen customer relationships.",
              icon: <MessageSquare />
            },
            {
              title: "Behavior-Triggered Emails",
              description: "Automatically send perfectly timed emails based on specific customer actions like purchases, abandoned carts, or website browsing behavior.",
              icon: <Zap />
            }
          ]
        },
        scalability: {
          title: "Scalability & Reach",
          icon: <Maximize className="h-8 w-8 text-purple-500" />,
          color: "bg-purple-50 border-purple-200",
          textColor: "text-purple-700",
          hoverColor: "hover:bg-purple-100",
          activeColor: "bg-purple-100",
          benefits: [
            {
              title: "Global Reach",
              description: "Instantly connect with customers worldwide without additional cost, breaking down geographical barriers for your business expansion.",
              icon: <Globe />
            },
            {
              title: "Automated Campaigns",
              description: "Scale your marketing efforts through automation workflows that nurture leads and customers without manual intervention.",
              icon: <Clock />
            },
            {
              title: "A/B Testing Capabilities",
              description: "Continuously improve performance by testing different elements like subject lines, content, and CTAs to optimize engagement.",
              icon: <Award />
            }
          ]
        },
        relationship: {
          title: "Customer Relationships",
          icon: <Heart className="h-8 w-8 text-red-500" />,
          color: "bg-red-50 border-red-200",
          textColor: "text-red-700",
          hoverColor: "hover:bg-red-100",
          activeColor: "bg-red-100",
          benefits: [
            {
              title: "Direct Communication Channel",
              description: "Maintain direct contact with your audience without dependency on social media algorithms or third-party platform changes.",
              icon: <MessageSquare />
            },
            {
              title: "Customer Lifetime Value",
              description: "Increase repeat purchases and customer loyalty through regular engagement, personalized recommendations, and exclusive offers.",
              icon: <Users />
            },
            {
              title: "Brand Authority",
              description: "Establish your expertise and build trust by consistently delivering valuable content and personalized experiences to your subscribers.",
              icon: <Award />
            }
          ]
        }
      };
    
      // Success stories
      const successStories = [
        {
          company: "Fashion Retailer",
          result: "143% increase in revenue",
          strategy: "Implemented personalized product recommendation emails based on browsing history"
        },
        {
          company: "SaaS Provider",
          result: "27% reduction in churn rate",
          strategy: "Created educational onboarding email sequence for new customers"
        },
        {
          company: "Online Bookstore",
          result: "92% boost in repeat purchases",
          strategy: "Developed interest-based book recommendation campaigns"
        }
      ];
    
      // Statistics
      const statistics = [
        { label: "Average ROI", value: "42x" },
        { label: "Global Email Users", value: "4.3B" },
        { label: "Welcome Email Open Rate", value: "82%" },
        { label: "Personalized Subject Lines", value: "+26%" },
      ];
      const features = [
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z"/>
            </svg>
          ),
          title: "Beautiful Email Templates",
          description: "Choose from 100+ professionally designed, mobile-responsive templates that work across all devices and email clients."
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 20H2v-2h1v-6a8 8 0 1116 0v6h1v2zm-3-2V12A5 5 0 007 12v6h12zm-5 3v1h-4v-1h4z"/>
            </svg>
          ),
          title: "Advanced Segmentation",
          description: "Send targeted messages by segmenting your audience based on behavior, demographics, purchase history, and more."
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.973 18H11v-5h2v5h1.027c.132-1.202.745-2.194 1.74-3.277.113-.122.832-.867.917-.973a6 6 0 10-9.37-.002c.086.107.807.853.918.974.996 1.084 1.609 2.076 1.741 3.278zM10 20v1h4v-1h-4zm-4.246-5a8 8 0 1112.49.002C17.624 15.774 16 17 16 18.5V21a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.5C8 17 6.375 15.774 5.754 15z"/>
            </svg>
          ),
          title: "Smart Analytics",
          description: "Track opens, clicks, conversions, and revenue with our comprehensive dashboard and detailed reporting tools."
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.636 12.707l1.828 1.829L8.88 13.12l-1.83-1.827 1.414-1.414 1.829 1.828 1.414-1.414L9.88 8.464l1.414-1.414 1.826 1.83 1.415-1.415-1.829-1.828 1.414-1.414 1.828 1.829 1.415-1.415-1.829-1.828-1.414 1.414-1.827-1.829-1.415 1.415 1.829 1.828-1.414 1.414-1.829-1.829L6.05 6.05l-1.414 1.414 1.829 1.828-1.414 1.415-1.828-1.829-1.414 1.414 1.828 1.828 1.414-1.414zM13.12 15.536l1.829 1.828 1.414-1.414-1.828-1.829 1.414-1.414 1.829 1.828 1.414-1.414-1.828-1.829 1.414-1.414 1.829 1.829 1.414-1.415-1.829-1.828 1.414-1.414 1.828 1.829 1.415-1.415-1.829-1.828-1.414 1.414-1.829-1.829-1.414 1.415 1.828 1.828-1.414 1.414-1.829-1.829-1.414 1.415 1.829 1.828-1.414 1.414-1.828-1.829-1.415 1.415 1.829 1.828-1.414 1.414z"/>
            </svg>
          ),
          title: "Automation Workflows",
          description: "Set up automated email sequences for welcome series, abandoned carts, re-engagement campaigns, and more."
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-3.5-6H14a.5.5 0 100-1h-4a2.5 2.5 0 010-5h1V6h2v2h2.5v2H10a.5.5 0 000 1h4a2.5 2.5 0 010 5h-1v2h-2v-2H8.5v-2z"/>
            </svg>
          ),
          title: "A/B Testing",
          description: "Test subject lines, content, send times, and more to optimize your campaigns for maximum engagement."
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm3.833 3.337a.5.5 0 01.798.6l-4.5 6a.5.5 0 01-.729.06l-2.5-2.5a.5.5 0 01.708-.708l2.056 2.056 4.167-5.508z"/>
            </svg>
          ),
          title: "List Management",
          description: "Easily import, organize, and clean your contact lists with our powerful list management tools."
        }
      ];

      const alternatives = [
        {
          name: "Mailchimp Alternative",
          description: "More affordable email marketing with similar features but better pricing tiers.",
          features: ["User-friendly interface", "Advanced automation", "Better pricing for growing businesses"],
          bestFor: "Small to medium businesses looking for cost-effective solutions"
        },
        {
          name: "Constant Contact Alternative",
          description: "Modern email marketing platform with superior analytics and integration capabilities.",
          features: ["Detailed performance metrics", "Better template designs", "Seamless CRM integration"],
          bestFor: "Businesses focused on data-driven marketing decisions"
        },
        {
          name: "SendinBlue Alternative",
          description: "All-in-one marketing solution with enhanced deliverability rates.",
          features: ["SMS marketing included", "Transactional email options", "Advanced segmentation tools"],
          bestFor: "Companies needing multi-channel marketing capabilities"
        },
        {
          name: "Campaign Monitor Alternative",
          description: "Simplified workflow with robust personalization options.",
          features: ["Drag-and-drop editor", "Dynamic content", "Automated customer journeys"],
          bestFor: "Marketing teams wanting to create highly personalized campaigns"
        }
      ];
    
      const worthStats = [
        { value: '4200%', label: 'Average ROI' },
        { value: '$42', label: 'Return per $1 spent' },
        { value: '81%', label: 'SMBs rely on email' },
        { value: '59%', label: 'Influence on purchases' }
      ];

  return (
    <>

      {/* introduction */}
      <div id="intro-email" className="max-w-6xl mx-auto py-16 px-4">
  <div className="relative rounded-2xl overflow-hidden">
    {/* Decorative SVG elements */}
    <div className="absolute top-0 right-0 opacity-10">
      <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor" className="text-[#000e54]">
        <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"/>
      </svg>
    </div>
    <div className="absolute bottom-0 left-0 opacity-10">
      <svg width="250" height="250" viewBox="0 0 24 24" fill="currentColor" className="text-indigo-500">
        <path d="M19 14L17.5 12.5L14.5 15.5L16 17L19 14ZM12 16L14 14H11V12H14L12 10V8L17 13L12 18V16ZM4 20V12H10V20H4ZM4 10V4H20V10H4Z"/>
      </svg>
    </div>

    <div className="flex flex-col md:flex-row">
      {/* Left content with title and description */}
      <div className="md:w-7/12 z-10">
        <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#000e54] font-medium text-base mb-4">
          Grow Your Business
        </div>
        <h1 className="text-4xl font-semibold text-gray-900 mb-6 leading-tight">
          Transform Your Customer Relationships with <span className="text-orange-500">Email Marketing</span>
        </h1>
        <p className="text-base text-gray-800 mb-8 leading-relaxed">
          Email marketing remains the most powerful digital channel for ROI, with an average return of $36 for every $1 spent. Our curated selection of top email marketing platforms helps businesses of all sizes create personalized campaigns, automate customer journeys, and drive measurable results through data-driven insights and powerful analytics.
        </p>
        <div className="flex flex-wrap gap-6 mb-8">
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
              <svg className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-gray-800">Personalization</h3>
              <p className="text-gray-800 text-base">Tailored content for each subscriber</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <svg className="h-6 w-6 text-[#000e54]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.82-4.924A7 7 0 0 0 9.032 5.658l.975 1.755A5 5 0 0 1 17 12h-3l2.82 5.076z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-xl">Automation</h3>
              <p className="text-gray-600 text-base">Save time with automated workflows</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side stats */}
      <div className="md:w-5/12 md:pl-8 flex items-center justify-center z-10">
        <div className="bg-white rounded-xl shadow-xl p-6 w-full">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Why Email Marketing Works</h3>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                <span className="text-[#000e54] font-semibold text-base">91%</span>
              </div>
              <p className="text-gray-800 text-base">of consumers check their email daily</p>
            </div>
            <div className="flex items-center">
              <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center mr-4">
                <span className="text-[#000e54] font-semibold text-base">59%</span>
              </div>
              <p className="text-gray-800 text-base">say marketing emails influence purchases</p>
            </div>
            <div className="flex items-center">
              <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mr-4">
                <span className="text-[#000e54] font-semibold text-base">4x</span>
              </div>
              <p className="text-gray-800 text-base">higher ROI than social media marketing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* what is emailmarketing*/}
      <section id="what-is-emailmarketing" className="py-12 max-w-6xl mx-auto">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-semibold text-gray-900 mb-6">Powerful Email Marketing Solutions</h2>
      <p className="text-base text-gray-800 max-w-3xl mx-auto">
        Connect with your audience, drive conversions, and build lasting relationships through 
        strategic email campaigns that deliver measurable results.
      </p>
    </div>

    {/* What is Email Marketing */}
    <div className="mb-20 bg-white rounded-2xl  p-8">
      <h3 className="text-4xl font-semibold text-gray-900 mb-6">What is Email Marketing?</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-base text-gray-800 mb-4">
            Email marketing is a digital strategy that involves sending targeted messages to prospects 
            and customers through email. It allows businesses to communicate directly with their audience, 
            nurturing leads and fostering loyalty.
          </p>
          <p className="text-base text-gray-700 mb-4">
            Unlike other marketing channels, email provides a direct line of communication that you own, 
            independent of algorithm changes or platform restrictions. With an average ROI of $36 for every 
            $1 spent, email marketing remains one of the most effective marketing strategies available.
          </p>
          <p className="text-base text-gray-700">
            Modern email marketing goes far beyond simple newsletters. Today's sophisticated campaigns 
            leverage personalization, automation, and data-driven insights to deliver the right message 
            to the right person at the right time.
          </p>
        </div>
        <div>
            <img src="https://ileads.com/wp-content/uploads/sites/2/2016/03/email2b.jpg" alt="" />
        </div>
      </div>
    </div>

    {/* Key Components Grid */}
    <div className="mb-20 max-w-6xl mx-auto p-8">
      <h3 className="text-4xl font-semibold text-gray-900 text-center mb-10">Key Components of Email Marketing</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-base">
        {[
          {
            icon: <svg className="w-10 h-10 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>,
            title: "List Building & Segmentation",
            description: "Strategically grow your email list and divide subscribers into targeted groups based on demographics, behaviors, and preferences."
          },
          {
            icon: <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
            </svg>,
            title: "Email Design & Content",
            description: "Create visually appealing, mobile-responsive emails with compelling copy, clear CTAs, and valuable content that drives engagement."
          },
          {
            icon: <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>,
            title: "Automation & Workflows",
            description: "Set up triggered email sequences that automatically deliver timely, relevant messages based on subscriber actions and lifecycle stages."
          },
          {
            icon: <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>,
            title: "Analytics & Optimization",
            description: "Track performance metrics like open rates, click-through rates, and conversions to continuously improve your email marketing strategy."
          }
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
            <p className="text-gray-800 text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Types of Email Campaigns */}
    <div className="mb-20 max-w-6xl mx-auto p-8">
      <h3 className="text-4xl font-semibold text-gray-900 text-center mb-10">Types of Email Marketing Campaigns</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Welcome Emails",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
            </svg>,
            color: "bg-[#000e54]",
            description: "First impressions matter. Welcome new subscribers with a warm introduction and clear next steps to build engagement from day one."
          },
          {
            title: "Newsletters",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
            </svg>,
            color: "bg-green-600",
            description: "Keep your audience informed and engaged with regular updates featuring company news, industry insights, and valuable content."
          },
          {
            title: "Promotional Emails",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>,
            color: "bg-purple-600",
            description: "Drive sales with limited-time offers, exclusive discounts, and special promotions that create urgency and encourage immediate action."
          },
          {
            title: "Abandoned Cart Emails",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>,
            color: "bg-orange-600",
            description: "Recover potentially lost sales by reminding customers of items left in their shopping cart, often with incentives to complete the purchase."
          },
          {
            title: "Post-Purchase Emails",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>,
            color: "bg-red-600",
            description: "Build customer loyalty with order confirmations, shipping updates, product usage tips, and review requests after a purchase."
          },
          {
            title: "Re-engagement Campaigns",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>,
            color: "bg-indigo-600",
            description: "Win back inactive subscribers with special offers, updates about what they've missed, or requests for feedback to rekindle interest."
          }
        ].map((campaign, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className={`${campaign.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg`}>
              {campaign.icon}
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">{campaign.title}</h4>
            <p className="text-gray-800 text-base">{campaign.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Implementation Process */}
    <div className="mb-20">
      <h3 className="text-4xl font-semibold text-gray-900 text-center mb-10">Email Marketing Implementation Process</h3>
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 text-center">
        {[
          {
            step: "1",
            title: "Define Goals & Strategy",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>,
            color: "bg-[#000e54]",
            description: "Establish clear objectives, identify target audiences, and determine key performance indicators for your email campaigns."
          },
          {
            step: "2",
            title: "Build Your Email List",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
            </svg>,
            color: "bg-green-600",
            description: "Create compelling opt-in offers and implement ethical list-building tactics to grow your subscriber base with quality contacts."
          },
          {
            step: "3",
            title: "Select Email Platform",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>,
            color: "bg-purple-600",
            description: "Choose an email service provider that offers the features, automation capabilities, and analytics needed for your business."
          },
          {
            step: "4",
            title: "Design & Create Content",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
            </svg>,
            color: "bg-orange-600",
            description: "Develop mobile-friendly email templates and create compelling, personalized content that resonates with your audience segments."
          },
          {
            step: "5",
            title: "Set Up Automation",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>,
            color: "bg-red-600",
            description: "Configure triggered email sequences for welcome series, abandoned carts, post-purchase flows, and other automated campaigns."
          },
          {
            step: "6",
            title: "Test & Optimize",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>,
            color: "bg-indigo-600",
            description: "Run A/B tests on subject lines, content, and send times, then analyze results to continuously improve performance metrics."
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
              <p className="text-gray-800 text-center text-base">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Best Practices */}
    <div className="bg-white rounded-2xl  p-8 mb-20">
      <h3 className="text-4xl font-semibold text-gray-900 mb-8 text-center">Email Marketing Best Practices</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "Personalization",
            description: "Go beyond using the recipient's name. Leverage data to personalize content based on past purchases, browsing behavior, and preferences to increase relevance and engagement."
          },
          {
            title: "Mobile Optimization",
            description: "With over 60% of emails opened on mobile devices, ensure your emails are responsive, load quickly, and feature easily tappable buttons and readable text."
          },
          {
            title: "Clear Call-to-Action",
            description: "Include one primary, visually prominent CTA that clearly communicates what action you want recipients to take and why it benefits them."
          },
          {
            title: "List Segmentation",
            description: "Divide your email list into targeted segments based on demographics, behavior, interests, and purchase history to deliver more relevant content."
          },
          {
            title: "Subject Line Optimization",
            description: "Craft compelling, concise subject lines (40-50 characters) that create curiosity or highlight value without using spammy language or excessive punctuation."
          },
          {
            title: "Compliance & Consent",
            description: "Follow email marketing regulations like GDPR and CAN-SPAM by obtaining proper consent, providing unsubscribe options, and honoring privacy preferences."
          },
          {
            title: "Send Time Optimization",
            description: "Analyze your audience's engagement patterns to determine the optimal days and times to send emails for maximum open and click-through rates."
          },
          {
            title: "Regular List Maintenance",
            description: "Clean your email list periodically by removing inactive subscribers and fixing or removing invalid email addresses to improve deliverability."
          }
        ].map((practice, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="bg-blue-100 p-2 rounded-full mt-1">
              <svg className="w-5 h-5 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{practice.title}</h4>
              <p className="text-gray-800 text-base">{practice.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* working of emailmarkeing */}
<div id="emailmarketing-working" className="  rounded-lg  max-w-6xl mx-auto p-4">
      <div className="text-center mb-12 max-w-6xl mx-auto p-4">
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">The Email Marketing Process</h1>
        <p className="text-xl text-gray-800 max-w-3xl mx-auto">
          A comprehensive guide to planning, executing, and optimizing email marketing campaigns for maximum engagement and ROI.
        </p>
      </div>
      <div className="mb-16">
        
        <div className="grid gap-8 max-w-6xl mx-auto p-4">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-blue-50 p-4 rounded-full">
                {step.icon}
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-800 text-base mb-4">{step.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {step.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#000e54] flex-shrink-0" />
                      <span className="text-base text-gray-800">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:flex justify-center">
                  <ChevronRight className="w-6 h-6 text-blue-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Stats section */}
      <div className="mb-16 p-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-gray-900 mb-8 text-center">Email Marketing Performance Metrics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-gray-800 text-xl mb-2">{stat.label}</h3>
              <p className="text-[#000e54] text-4xl font-semibold mb-1">{stat.value}</p>
              <p className="text-gray-800 text-base">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Best practices */}
      <div>
        <h2 className="text-4xl font-semibold text-gray-900 mb-8 text-center">Email Marketing Best Practices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-50 p-2 rounded-full">
                <Target className="w-6 h-6 text-[#000e54]" />
              </div>
              <h3 className="font-semibold text-gray-800 text-xl">Segmentation</h3>
            </div>
            <p className="text-gray-800 text-base">Divide your email list into targeted segments to deliver more relevant content and increase engagement rates.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-50 p-2 rounded-full">
                <Mail className="w-6 h-6 text-[#000e54]" />
              </div>
              <h3 className="font-semibold text-gray-800 text-xl">Personalization</h3>
            </div>
            <p className="text-gray-800 text-base">Use recipient data to personalize subject lines, content, and offers to improve open and conversion rates.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-50 p-2 rounded-full">
                <PieChart className="w-6 h-6 text-[#000e54]" />
              </div>
              <h3 className="font-semibold text-gray-800 text-xl">A/B Testing</h3>
            </div>
            <p className="text-gray-800 text-base">Regularly test different elements of your emails to optimize performance and understand what resonates with your audience.</p>
          </div>
        </div>
      </div>
    </div>



 {/* Benefits of email marketing Section */}
 <div id="emailmarketing-benefits" className=" max-w-6xl mx-auto min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
            <svg className="w-16 h-16" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="25" width="80" height="50" rx="5" fill="#000e54" />
              <path d="M10 30L50 55L90 30" stroke="white" strokeWidth="4" fill="none" />
              <path d="M17 40H40" stroke="white" strokeWidth="3" fill="none" />
              <path d="M17 50H35" stroke="white" strokeWidth="3" fill="none" />
              <circle cx="70" cy="45" r="10" fill="white" opacity="0.3" />
            </svg>
          </div>
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">Unlock the Power of Email Marketing</h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Discover why email marketing remains the most effective digital marketing channel with the highest ROI and engagement rates.
          </p>
        </div>

        {/* Stats banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-300">
              <p className="text-4xl font-bold text-[#000e54]">{stat.value}</p>
              <p className="text-gray-800 text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-2xl shadow-md sticky top-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits</h3>
              <div className="space-y-3">
                {Object.keys(categories).map((key) => (
                  <button
                    key={key}
                    className={`flex items-center gap-3 w-full p-3 rounded-xl text-base border transition-all duration-300 
                      ${activeCategory === key ? categories[key].activeColor : categories[key].color} 
                      ${categories[key].hoverColor}`}
                    onClick={() => setActiveCategory(key)}
                  >
                    {categories[key].icon}
                    <span className={`font-medium ${categories[key].textColor}`}>
                      {categories[key].title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Benefit details */}
          <div className="lg:w-3/4">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-center gap-4 mb-8">
                {categories[activeCategory].icon}
                <h2 className="text-xl font-semibold text-gray-800">{categories[activeCategory].title}</h2>
              </div>
              
              <div className="space-y-8">
                {categories[activeCategory].benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-6">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center text-xl justify-center ${categories[activeCategory].activeColor}`}>
                      {React.cloneElement(benefit.icon, { className: `h-6 w-6 ${categories[activeCategory].textColor}` })}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                      <p className="text-gray-800 text-base">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Custom graphic representation */}
              <div className="mt-12">
                <div className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-blue-50 p-4">
                  {activeCategory === 'roi' && (
                    <svg className="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                      {/* ROI comparison chart */}
                      <rect x="50" y="140" width="50" height="40" fill="#4F46E5" />
                      <rect x="120" y="100" width="50" height="80" fill="#818CF8" />
                      <rect x="190" y="120" width="50" height="60" fill="#A5B4FC" />
                      <rect x="260" y="60" width="50" height="120" fill="#4F46E5" />
                      
                      <text x="75" y="170" textAnchor="middle" fill="white" fontSize="12">SEO</text>
                      <text x="145" y="140" textAnchor="middle" fill="white" fontSize="12">PPC</text>
                      <text x="215" y="150" textAnchor="middle" fill="white" fontSize="12">Social</text>
                      <text x="285" y="120" textAnchor="middle" fill="white" fontSize="12">Email</text>
                      
                      <text x="75" y="90" textAnchor="middle" fill="#4F46E5" fontSize="12">5.4x</text>
                      <text x="145" y="90" textAnchor="middle" fill="#4F46E5" fontSize="12">10.6x</text>
                      <text x="215" y="110" textAnchor="middle" fill="#4F46E5" fontSize="12">8.2x</text>
                      <text x="285" y="50" textAnchor="middle" fill="#4F46E5" fontSize="12">42x</text>
                      
                      <line x1="50" y1="180" x2="350" y2="180" stroke="#6B7280" strokeWidth="2" />
                      <text x="200" y="195" textAnchor="middle" fill="#4B5563" fontSize="12">ROI Comparison by Marketing Channel</text>
                    </svg>
                  )}
                  
                  {activeCategory === 'targeting' && (
               <svg className="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
               {/* Targeting visualization */}
               <circle cx="200" cy="100" r="80" fill="#FFEDD5" stroke="#FED7AA" strokeWidth="2" />
               <circle cx="200" cy="100" r="60" fill="#FEE2E2" stroke="#FECACA" strokeWidth="2" />
               <circle cx="200" cy="100" r="40" fill="#FED7AA" stroke="#FDBA74" strokeWidth="2" />
               <circle cx="200" cy="100" r="20" fill="#FDBA74" stroke="#F97316" strokeWidth="2" />
               
               <text x="200" y="100" textAnchor="middle" fill="#F97316" fontSize="12" fontWeight="bold">Target</text>
               <text x="140" y="60" fill="#FB923C" fontSize="10">Demographics</text>
               <text x="260" y="80" fill="#FB923C" fontSize="10">Behavior</text>
               <text x="150" y="140" fill="#FB923C" fontSize="10">Interests</text>
               <text x="250" y="120" fill="#FB923C" fontSize="10">Purchase History</text>
           </svg>
                  )}
                  
                  {activeCategory === 'scalability' && (
                    <svg className="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                      {/* Scalability graph */}
                      <path d="M50,180 Q125,80 200,140 T350,40" fill="none" stroke="#7C3AED" strokeWidth="3" />
                      
                      <circle cx="50" cy="180" r="5" fill="#7C3AED" />
                      <circle cx="125" cy="80" r="5" fill="#7C3AED" />
                      <circle cx="200" cy="140" r="5" fill="#7C3AED" />
                      <circle cx="275" cy="80" r="5" fill="#7C3AED" />
                      <circle cx="350" cy="40" r="5" fill="#7C3AED" />
                      
                      <line x1="50" y1="180" x2="350" y2="180" stroke="#6B7280" strokeWidth="1" />
                      <line x1="50" y1="40" x2="50" y2="180" stroke="#6B7280" strokeWidth="1" />
                      
                      <text x="200" y="195" textAnchor="middle" fill="#4B5563" fontSize="12">Growth Over Time with Email Automation</text>
                    </svg>
                  )}
                  
                  {activeCategory === 'relationship' && (
                    <svg className="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                      {/* Customer relationship cycle */}
                      <circle cx="200" cy="100" r="70" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="5,5" />
                      
                      <circle cx="200" cy="30" r="25" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
                      <circle cx="270" cy="100" r="25" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
                      <circle cx="200" cy="170" r="25" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
                      <circle cx="130" cy="100" r="25" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
                      
                      <text x="200" y="35" textAnchor="middle" fill="#B91C1C" fontSize="10">Awareness</text>
                      <text x="270" y="105" textAnchor="middle" fill="#B91C1C" fontSize="10">Engagement</text>
                      <text x="200" y="175" textAnchor="middle" fill="#B91C1C" fontSize="10">Loyalty</text>
                      <text x="130" y="105" textAnchor="middle" fill="#B91C1C" fontSize="10">Conversion</text>
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Success stories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md transform hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-[#000e54]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{story.company}</h3>
                <p className="text-[#000e54] text-base font-semibold mb-2">{story.result}</p>
                <p className="text-gray-800 text-base">{story.strategy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

{/* features of email marketing section */}
<div id="email-features" className=" py-16 px-4 sm:px-6  max-w-6xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-4xl">
            Powerful Email Marketing Features
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-800">
            Everything you need to create, send, and analyze effective email campaigns
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#000e54] text-white">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-800">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

{/* how to choose the service */}
    <div id="email-howchoose" className="min-h-screen p-4 md:p-8 max-w-6xl mx-auto">
      <div className="max-w-6xl mx-auto bg-white rounded-xl  overflow-hidden">
        <div className="bg-[#000e54] p-6 md:p-8">
          <h1 className="text-4xl md:text-3xl font-semibold text-white">Choosing the Right Email Marketing Service</h1>
          <p className="text-blue-100 mt-2 text-base">A comprehensive guide to making the best decision for your business</p>
        </div>
        
        <div className="py-10 max-w-6xl mx-auto">
          <div className="mb-8 bg-blue-50 p-4 rounded-lg border-l-4 border-[#000e54]">
            <h2 className="text-xl font-semibold text-[#000e54]">Why Your Choice Matters</h2>
            <p className="text-gray-800 text-base mt-2">The right email marketing platform can significantly impact your open rates, conversions, and ROI. This guide will help you navigate the complex landscape of email marketing services.</p>
          </div>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-[#000e54] text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">1</span>
              List Size and Growth Projections
            </h2>
            <div className="pl-10">
              <ul className="space-y-3">
                <li className="flex items-start text-base">
                  <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 bg-[#000e54] rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800 text-base">Current subscriber count:</span> Different platforms have different pricing tiers based on subscriber numbers. Analyze your current needs to avoid overpaying.
                  </div>
                </li>
                <li className="flex items-start text-base">
                  <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 bg-[#000e54] rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800 text-base">Growth rate:</span> Choose a service that can scale with your business without dramatic price increases. If you expect rapid growth, prioritize services with graduated pricing.
                  </div>
                </li>
                <li className="flex items-start text-base">
                  <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 bg-[#000e54] rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-semibold text-base text-gray-800">List segmentation needs:</span> Consider how granular you need your segmentation capabilities to be—more advanced segmentation usually comes at a premium.
                  </div>
                </li>
              </ul>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-[#000e54] text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">2</span>
              Budget Considerations
            </h2>
            <div className="pl-10">
              <ul className="space-y-3">
                <li className="flex items-start text-base">
                  <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 bg-[#000e54] rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-semibold text-base text-gray-800">Monthly/annual costs:</span> Most services charge based on subscriber count and features. Annual plans often offer significant discounts compared to monthly billing.
                  </div>
                </li>
                <li className="flex items-start text-base">
                  <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 bg-[#000e54] rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-semibold text-base text-gray-800">Free tier availability:</span> Some platforms offer free plans with limited features and subscriber counts—ideal for startups or testing purposes.
                  </div>
                </li>
                <li className="flex items-start text-base">
                  <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 bg-[#000e54] rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-semibold text-base text-gray-800">Pay-as-you-go options:</span> Consider services that offer pay-per-email options if your sending volume is irregular or seasonal.
                  </div>
                </li>
              </ul>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-[#000e54] text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">3</span>
              Feature Requirements
            </h2>
            <div className="pl-10">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-800 text-base mb-2">Essential Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-800 text-base">
                      <svg className="w-4 h-4 text-[#000e54] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Drag-and-drop editor
                    </li>
                    <li className="flex items-center text-gray-800 text-base">
                      <svg className="w-4 h-4 text-[#000e54] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Responsive templates
                    </li>
                    <li className="flex items-center text-gray-800 text-base">
                      <svg className="w-4 h-4 text-[#000e54] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      List management
                    </li>
                    <li className="flex items-center text-gray-800 text-base">
                      <svg className="w-4 h-4 text-[#000e54] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Basic analytics
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-base text-gray-800 mb-2">Advanced Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-800 text-base">
                      <svg className="w-4 h-4 text-[#000e54] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      A/B testing capabilities
                    </li>
                    <li className="flex items-center text-gray-800 text-base">
                      <svg className="w-4 h-4 text-[#000e54] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Marketing automation
                    </li>
                    <li className="flex items-center text-gray-800 text-base">
                      <svg className="w-4 h-4 text-[#000e54] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Advanced segmentation
                    </li>
                    <li className="flex items-center text-gray-800 text-base">
                      <svg className="w-4 h-4 text-[#000e54] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Predictive analytics
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-[#000e54] text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">4</span>
              Deliverability Rates
            </h2>
            <div className="pl-10">
              <p className="text-gray-800 text-base mb-4">Deliverability is crucial—your emails must actually reach recipients' inboxes to be effective. Research the provider's reputation and spam filtering capabilities.</p>
              <div className="bg-blue-50 border-l-4 border-[#000e54] p-4 rounded-r">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-base text-[#000e54]">
                      <strong>Pro Tip:</strong> Some services publish their deliverability rates. Look for providers with rates above 95% for best results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-[#000e54] text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">5</span>
              Integration Capabilities
            </h2>
            <div className="pl-10">
              <p className="text-gray-800 text-base mb-4">Your email marketing service should connect seamlessly with your existing tech stack.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                <div className="bg-gray-100 p-3 rounded-lg text-center">
                  <p className="font-semibold text-base text-gray-800">CRM Systems</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-center">
                  <p className="font-semibold text-base text-gray-800">E-commerce Platforms</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-center">
                  <p className="font-semibold text-base text-gray-800">CMS Solutions</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-center">
                  <p className="font-semibold text-base text-gray-800">Analytics Tools</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-center">
                  <p className="font-semibold text-base text-gray-800">Social Media</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-center">
                  <p className="font-semibold text-base text-gray-800">Payment Processors</p>
                </div>
              </div>
              <p className="text-gray-800 text-base">Consider both native integrations and API flexibility to ensure your marketing efforts remain coordinated across all channels.</p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-[#000e54] text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">6</span>
              Ease of Use and Support
            </h2>
            <div className="pl-10">
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-base text-gray-800 mb-3">Questions to Consider:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4.002 3 0 1.4-1.274 2.657-3.004 2.878.6.078.12.156.174.236.243.37.487 1.126-.012 1.886m-4.13-.735c-.792-.523-1.033-.936-1.033-1.384v-.01c0-1.173 1.274-2.204 3.003-2.204" />
                    </svg>
                    <span className="text-gray-800 text-base">Is the interface intuitive or will you need extensive training?</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4.002 3 0 1.4-1.274 2.657-3.004 2.878.6.078.12.156.174.236.243.37.487 1.126-.012 1.886m-4.13-.735c-.792-.523-1.033-.936-1.033-1.384v-.01c0-1.173 1.274-2.204 3.003-2.204" />
                    </svg>
                    <span className="text-gray-800 text-base">What support channels are available (chat, phone, email) and during what hours?</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4.002 3 0 1.4-1.274 2.657-3.004 2.878.6.078.12.156.174.236.243.37.487 1.126-.012 1.886m-4.13-.735c-.792-.523-1.033-.936-1.033-1.384v-.01c0-1.173 1.274-2.204 3.003-2.204" />
                    </svg>
                    <span className="text-gray-800 text-base">Is there a knowledge base, tutorials, or community forum?</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4.002 3 0 1.4-1.274 2.657-3.004 2.878.6.078.12.156.174.236.243.37.487 1.126-.012 1.886m-4.13-.735c-.792-.523-1.033-.936-1.033-1.384v-.01c0-1.173 1.274-2.204 3.003-2.204" />
                    </svg>
                    <span className="text-gray-800 text-base">Is onboarding assistance or dedicated account management available?</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-[#000e54] text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">7</span>
              Compliance and Security
            </h2>
            <div className="pl-10">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-gray-50 p-4 rounded-lg border-l-4 border-[#000e54]">
                  <h3 className="font-semibold text-gray-800 mb-2 text-base">Legal Compliance</h3>
                  <p className="text-gray-800 text-base">Ensure the service helps you comply with:</p>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-center text-gray-700 text-base">
                      <svg className="w-4 h-4 text-[#000e54] mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      GDPR (Europe)
                    </li>
                    <li className="flex items-center text-gray-700 text-base">
                      <svg className="w-4 h-4 text-[#000e54] mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      CAN-SPAM (US)
                    </li>
                    <li className="flex items-center text-gray-700 text-base">
                      <svg className="w-4 h-4 text-[#000e54] mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      CASL (Canada)
                    </li>
                    <li className="flex items-center text-gray-700 text-base">
                      <svg className="w-4 h-4 text-[#000e54] mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Local regulations
                    </li>
                  </ul>
                </div>
                <div className="flex-1 bg-gray-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-gray-800 mb-2 text-base">Security Features</h3>
                  <p className="text-gray-800 text-base">Look for providers that offer:</p>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-center text-gray-700 text-base">
                      <svg className="w-4 h-4 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Two-factor authentication
                    </li>
                    <li className="flex items-center text-gray-700 text-base">
                      <svg className="w-4 h-4 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Data encryption
                    </li>
                    <li className="flex items-center text-gray-700 text-base">
                      <svg className="w-4 h-4 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      HTTPS protection
                    </li>
                    <li className="flex items-center text-gray-700 text-base">
                      <svg className="w-4 h-4 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Regular security audits
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

  </div>
  </div>
  </div>
         

{/* alternative */}
<div id="email-alternative" className="max-w-6xl mx-auto p-6  rounded-xl ">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">Email Marketing Service Alternatives</h1>
        <p className="text-xl text-gray-800">Discover better options for your email marketing needs</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {alternatives.map((alt, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#000e54]">
            <h2 className="text-xl font-bold text-hray-800 mb-3">{alt.name}</h2>
            <p className="text-gray-800 text-base mb-4">{alt.description}</p>
            
            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 text-base mb-2">Key Features:</h3>
              <ul className="space-y-1">
                {alt.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-5 w-5 text-[#000e54] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-800 text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-base font-semibold text-gray-800">Best for: <span className="text-[#000e54]">{alt.bestFor}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>

  {/* is email worthit */}
   <div id="email-worthit" className=" py-16 px-4 sm:px-6 lg:px-8 rounded-xl">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
            Is Email Marketing <span className="text-[#000e54]">Worth It?</span>
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Despite the rise of new marketing channels, email marketing remains one of the most effective strategies for businesses of all sizes.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {worthStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center transform hover:-translate-y-1 transition-transform duration-300">
              <div className="text-4xl md:text-4xl font-semibold text-[#000e54] mb-2">{stat.value}</div>
              <div className="text-gray-800 text-base font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-10">
          <div className="p-6 md:p-8 border-b border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-[#000e54] h-8 w-8 rounded-full flex items-center justify-center mr-3">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Return on Investment</h3>
            </div>
            <p className="mb-4 text-base">Email marketing consistently delivers the highest ROI of any digital marketing channel, making it one of the most cost-effective strategies available to businesses of all sizes.</p>
            <p className="mb-4 text-base">Unlike paid advertising where costs continue to rise, email marketing allows you to communicate with your audience at a fraction of the cost. The average return of $42 for every $1 spent far outperforms social media, PPC, and content marketing efforts.</p>
            <p className="mb-4 text-base">This exceptional return comes from email's direct nature - you're reaching people who have already expressed interest in your brand, creating warmer leads and higher conversion rates.</p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold text-[#000e54] text-xl">ROI Breakdown:</p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center text-base">
                  <div className="bg-indigo-200 rounded-full p-1 mr-2">
                    <svg className="h-4 w-4 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Lower customer acquisition costs</span>
                </li>
                <li className="flex items-center text-base">
                  <div className="bg-indigo-200 rounded-full p-1 mr-2">
                    <svg className="h-4 w-4 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Higher conversion rates from targeted messaging</span>
                </li>
                <li className="flex items-center text-base">
                  <div className="bg-indigo-200 rounded-full p-1 mr-2">
                    <svg className="h-4 w-4 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Increased customer lifetime value through retention</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-10">
          <div className="p-6 md:p-8 border-b border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-[#000e54] h-8 w-8 rounded-full flex items-center justify-center mr-3">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Building Relationships</h3>
            </div>
            <p className="mb-4 text-base">Email marketing creates a direct line of communication with your audience, fostering strong, long-term customer relationships that drive loyalty and retention.</p>
            <p className="mb-4 text-base">Unlike social media where algorithm changes can reduce your visibility, email gives you ownership of the communication channel. Your messages land directly in subscribers' inboxes, allowing consistent touchpoints throughout the customer journey.</p>
            <p className="mb-4 text-base">Through personalized content and segmentation, you can demonstrate that you understand your customers' needs and preferences, building trust that translates into brand advocacy and word-of-mouth referrals.</p>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="font-semibold text-[#000e54] text-xl">Relationship Metrics:</p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center text-base">
                  <div className="bg-indigo-200 rounded-full p-1 mr-2">
                    <svg className="h-4 w-4 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>44% of email recipients made at least one purchase based on promotional emails</span>
                </li>
                <li className="flex items-center text-base">
                  <div className="bg-indigo-200 rounded-full p-1 mr-2">
                    <svg className="h-4 w-4 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Segmented campaigns can increase revenue by up to 760%</span>
                </li>
                <li className="flex items-center text-base">
                  <div className="bg-indigo-200 rounded-full p-1 mr-2">
                    <svg className="h-4 w-4 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Birthday emails generate 342% higher revenue per email</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Targeting Section */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-10">
          <div className="p-6 md:p-8 border-b border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-[#000e54] h-8 w-8 rounded-full flex items-center justify-center mr-3">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Targeted Messaging</h3>
            </div>
            <p className="mb-4 text-base">Email marketing enables precise targeting and personalization that other marketing channels simply cannot match, dramatically improving engagement and conversion rates.</p>
            <p className="mb-4 text-base">Modern email platforms allow you to segment your audience based on demographics, behavior, purchase history, and engagement levels. This granular targeting ensures you deliver the right message to the right person at the right time.</p>
            <p className="mb-4 text-base">Personalized emails deliver 6x higher transaction rates, while segmented campaigns can drive up to 760% increase in revenue. This level of customization creates highly relevant experiences that resonate with recipients.</p>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="font-semibold text-xl text-[#000e54]">Targeting Capabilities:</p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center text-base">
                  <div className="bg-indigo-200 rounded-full p-1 mr-2">
                    <svg className="h-4 w-4 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Behavioral triggers based on website activity</span>
                </li>
                <li className="flex items-center text-base">
                  <div className="bg-indigo-200 rounded-full p-1 mr-2">
                    <svg className="h-4 w-4 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Purchase history segmentation for relevant recommendations</span>
                </li>
                <li className="flex items-center text-base">
                  <div className="bg-indigo-200 rounded-full p-1 mr-2">
                    <svg className="h-4 w-4 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Geographic and time-based targeting for optimal engagement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Analytics Section */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-12">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-4">
              <div className="bg-[#000e54] h-8 w-8 rounded-full flex items-center justify-center mr-3">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Measurable Results</h3>
            </div>
            <p className="mb-4 text-base">Email marketing provides unmatched analytics and insights, allowing you to measure performance and continuously optimize your campaigns for better results.</p>
            <p className="mb-4 text-base">Every aspect of your email campaigns can be tracked and analyzed - from open rates and click-throughs to conversion and revenue attribution. This data provides a clear picture of what's working and what needs improvement.</p>
            <p className="mb-4 text-base">With A/B testing capabilities, you can experiment with different subject lines, content formats, CTAs, and sending times to identify the most effective approach for your audience. This continuous optimization leads to ever-improving performance over time.</p>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="font-semibold text-[#000e54] text-xl">Key Metrics to Track:</p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center text-base">
                  <div className="bg-indigo-200 rounded-full p-1 mr-2">
                    <svg className="h-4 w-4 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Open rate, click-through rate, and conversion rate</span>
                </li>
                <li className="flex items-center text-base">
                  <div className="bg-indigo-200 rounded-full p-1 mr-2">
                    <svg className="h-4 w-4 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>List growth rate and unsubscribe rate</span>
                </li>
                <li className="flex items-center text-base">
                  <div className="bg-indigo-200 rounded-full p-1 mr-2">
                    <svg className="h-4 w-4 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Revenue per email and overall ROI</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>


{/* related articles */}
<div id="d-article">
        <Article
          title="Related Articles"
          items={articles}
          buttonText="View Post"
          buttonColor="bg-[#ff8633]"
        />
      </div>

      {/* faq */}
      <div id="email-faq" className="">
        <FAQ faqs={ emailFAQs} />
      </div>
    </>
  );
};

export default EmailMarketingContent;