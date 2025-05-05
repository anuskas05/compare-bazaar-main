import React from 'react';
import image from "../assets/images/bg.webp";

const ShippingContainerInfoCards = () => {
  // Helper function to create URL slugs
  const createSlug = (text) => {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, 'and');
  };

  // List item component with link and hover effect
  const ListItem = ({ text, section }) => (
    <li className="flex items-start mb-3 group">
      {/* Tick Icon */}
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#000e54] to-[#203299] group-hover:bg-[#ff8633] flex items-center justify-center mt-1 transition-colors duration-300">
        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
        </svg>
      </div>
      {/* Text */}
      <a 
        href={`/${section}/${createSlug(text)}`} 
        className="ml-3 text-gray-700 group-hover:text-[#ff8633] transition duration-150 ease-in-out"
      >
        {text}
      </a>
    </li>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="space-y-12">
        {/* Uses Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row h-auto sm:h-[500px] lg:h-[400px]">
          <div className="w-full sm:w-1/3 bg-gray-200 flex items-center justify-center p-0">
            <img
              src="https://media.istockphoto.com/id/1163860585/photo/text-messaging-on-the-plane.jpg?s=612x612&w=0&k=20&c=0DZrG0ezxGZ8kjw9qVKSchXFoM14n6NxUzDOJrfwDhs="
              alt="Uses"
              className="w-full h-auto rounded-lg lg:h-[400px] md:h-[500px]"
            />
          </div>
          <div className="w-full sm:w-2/3 p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#000e54] to-[#203299] rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-3xl font-semibold ml-4">Uses</h2>
            </div>
            <p className="text-gray-600 mb-6 text-base text-left">
              Businesses of all types and sizes are using shipping containers to:
            </p>
            <ul className="space-y-3">
              {[
                'House their business operations',
                'Cut costs',
                'Utilize portability',
                'Scale up or down easily',
                'Customize the space'
              ].map((item, index) => (
                <ListItem key={index} text={item} section="uses" />
              ))}
            </ul>
          </div>
        </div>

      

        {/* Cost Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row h-auto sm:h-[500px] lg:h-[400px]">
          <div className="w-full sm:w-1/3 bg-gray-200 flex items-center justify-center p-0">
            <img
              src="https://inspirationfeed.com/wp-content/uploads/2019/11/female-office-worker-making-a-phone-call-5X48PM3-800x521.jpg"
              alt="Cost"
            className="w-full h-auto rounded-lg lg:h-[400px] md:h-[500px]"
            />
          </div>
          <div className="w-full sm:w-2/3 p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#000e54] to-[#203299] rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-semibold ml-4">Cost</h2>
            </div>
            <p className="text-gray-600 mb-6 text-base text-left">
              Factors determining your container's overall price:
            </p>
            <ul className="space-y-3">
              {[
                'Size',
                'Age & condition',
                'Renting vs. buying',
                'Add-on features',
                'Delivery charges',
                'Seasonal changes'
              ].map((item, index) => (
                <ListItem key={index} text={item} section="cost" />
              ))}
            </ul>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default ShippingContainerInfoCards;