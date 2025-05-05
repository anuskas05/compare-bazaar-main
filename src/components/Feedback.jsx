import React, { useState, useEffect, useRef } from 'react';

const Feedback = ({ 
  title = "See Why Customers Love Us", 
  subtitle = "We help buyers and suppliers establish quality connections",
  testimonials = [], 
  bgColor = "bg-white",
  textColor = "text-gray-800",
  cardBgColor = "bg-blue-50"
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    setWidth(window.innerWidth);
    
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle card navigation
  const prevCard = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextCard = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToCard = (index) => {
    setActiveIndex(index);
  };

  // Swipe functionality
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextCard();
    } else if (touchEndX - touchStartX > 50) {
      prevCard();
    }
  };

  // Get visible testimonials based on screen size
  const getVisibleTestimonials = () => {
    if (!isMounted || testimonials.length === 0) return [];
  
    if (width >= 1024) {
      return [
        testimonials[activeIndex % testimonials.length],
        testimonials[(activeIndex + 1) % testimonials.length],
        testimonials[(activeIndex + 2) % testimonials.length]
      ];
    } else {
      return [testimonials[activeIndex % testimonials.length]];
    }
  };

  // Render stars
  const renderStars = (count) => {
    return Array(count).fill(0).map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const ChevronLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );

  const ChevronRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );

  if (!isMounted) {
    return <div className={`py-16 ${bgColor}`}>Loading...</div>;
  }

  return (
    <div className="relative w-full">
      <section className={`py-16 ${bgColor}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center ${textColor} mb-2`}>
            {title}
          </h2>
          <p className={`text-base text-center ${textColor.replace('800', '600')} mb-10`}>
            {subtitle}
          </p>

          <div className="relative max-w-6xl mx-auto">
            <button
              onClick={prevCard}
              className="hidden sm:block absolute left-6 md:left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 border border-gray-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft />
            </button>

            <div
              className="flex items-stretch justify-center gap-4 md:gap-6 px-4 md:px-28 overflow-x-auto sm:overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              ref={testimonialsRef}
            >
              {getVisibleTestimonials().map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-2/3 lg:w-1/3 transition-all duration-300 ease-in-out"
                  style={{ minHeight: '550px' }}
                >
                  <div className={`h-full ${cardBgColor} rounded-lg p-6 flex flex-col`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full ${testimonial.avatarColor} text-white flex items-center justify-center text-xl font-bold`}>
                        {testimonial.avatar}
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {renderStars(testimonial.stars)}
                    </div>
                    <p className={`${textColor.replace('800', '700')} mb-4 flex-grow italic`}>
                      `{testimonial.text}`
                    </p>
                    <div className="mt-auto">
                      <p className="text-blue-600 font-medium">{testimonial.name}</p>
                      <p className={`${textColor.replace('800', '500')} text-sm`}>{testimonial.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={nextCard}
              className="hidden sm:block absolute right-6 md:right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 border border-gray-200"
              aria-label="Next testimonial"
            >
              <ChevronRight />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToCard(i)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  i === activeIndex ? 'bg-gray-700' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;