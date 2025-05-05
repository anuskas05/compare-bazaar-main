import React from 'react';

const Article = ({ title, items, buttonText, buttonColor, variant = 'default' }) => {
  // Variant styles
  const variants = {
    default: {
      container: "grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4",
      card: "flex-col",
      image: "h-56",
      content: "p-6"
    },
    featured: {
      container: "grid-cols-1 gap-8",
      card: "md:flex-row",
      image: "md:w-2/5 h-72 md:h-auto",
      content: "md:w-3/5 p-8"
    },
    masonry: {
      container: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
      card: "flex-col",
      image: "h-56 md:h-72 lg:h-64",
      content: "p-6"
    },
    cards: {
      container: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
      card: "flex-col",
      image: "h-48",
      content: "p-5"
    }
  };

  const currentVariant = variants[variant] || variants.default;

  return (
    <div className="w-full py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4 relative inline-block">
            {title}
          </h2>
          <p className="text-base text-gray-800 max-w-2xl mx-auto">Discover our latest stories and insights</p>
        </div>
        
        <div className={`grid ${currentVariant.container}`}>
          {items.map((article, index) => (
            <div 
              key={article.id} 
              className={`
                group relative bg-white rounded-xl overflow-hidden shadow-lg flex ${currentVariant.card} 
                transition-all duration-300 hover:shadow-2xl
                ${variant === 'masonry' && index % 5 === 0 ? 'md:col-span-2 lg:col-span-2' : ''}
                ${variant === 'featured' ? 'items-stretch' : ''}
              `}
            >
              {/* Image with overlay */}
              <div className={`relative overflow-hidden ${currentVariant.image} ${variant === 'featured' ? 'md:rounded-l-xl' : 'rounded-t-xl'}`}>
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className={`flex flex-col flex-grow ${currentVariant.content} ${variant === 'featured' ? 'md:border-l-0' : ''}`}>
                <div className="flex items-center mb-3">
                  <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-[#000e54] rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-800 ml-3">{article.date}</span>
                  {article.readTime && (
                    <span className="text-xs text-gray-800 ml-auto">⏱ {article.readTime}</span>
                  )}
                </div>
                
                <h3 className="text-base font-semibold text-gray-800 mb-3 leading-tight group-hover:text-[#000e54] transition-colors">
                  {article.title}
                </h3>
                
                {variant !== 'cards' && (
                  <p className="text-gray-800 mb-5 flex-grow text-sm">
                    {article.excerpt}
                  </p>
                )}
                
                <div className="flex items-center justify-center mt-auto">
                 
                  
                  {/* Hidden button that appears on hover */}
                  <div className="relative overflow-hidden">
                    <a 
                      href={article.link}
                      className={`
                        ${buttonColor || 'bg-[#000e54]'} 
                        text-white font-semibold py-2 px-5 rounded-full 
                        text-sm transition-all duration-300
                        ${variant === 'cards' ? 'text-xs py-1.5 px-4' : ''}
                        transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                        inline-flex items-center hover:shadow-lg
                      `}
                    >
                      {buttonText || 'Read More'}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                    {/* Fallback button for mobile */}
                    <a 
                      href={article.link}
                      className={`
                        ${buttonColor || 'bg-blue-600'} 
                        text-white font-medium py-2 px-5 rounded-full 
                        text-sm transition-all duration-300
                        ${variant === 'cards' ? 'text-xs py-1.5 px-4' : ''}
                        absolute top-0 left-0 group-hover:opacity-0
                        inline-flex items-center md:hidden
                      `}
                    >
                      {buttonText || 'Read'}
                    </a>
                  </div>
                </div>
                
                {/* Hover effect decoration */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#000e54] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;