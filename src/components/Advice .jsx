import React, { useState } from 'react'; 
import image from '../assets/images/ICON2.png';   

const Advice = () => {   
  const [email, setEmail] = useState('');   
  const [loading, setLoading] = useState(false);   
  const [success, setSuccess] = useState(false);   
  const [error, setError] = useState('');    

  const accessKey = '4e9faa02-cb51-4253-98e6-b5794f4ece3a';    

  const handleSubmit = async (e) => {     
    e.preventDefault();     
    setLoading(true);     
    setError('');      
    
    try {       
      const response = await fetch('https://api.web3forms.com/submit', {         
        method: 'POST',         
        headers: {           
          'Content-Type': 'application/json',           
          'Accept': 'application/json'         
        },         
        body: JSON.stringify({           
          access_key: accessKey,           
          email: email,           
          subject: 'New Business Advice Subscription',           
          message:` New subscription request from: ${email}`,           
          from_name: 'Business Advice Form',         
        })       
      });        
      
      const data = await response.json();        
      
      if (data.success) {         
        setSuccess(true);         
        setEmail('');       
      } else {         
        setError('Something went wrong. Please try again.');       
      }     
    } catch (err) {       
      setError('Something went wrong. Please try again.');     
    } finally {       
      setLoading(false);     
    }   
  };   
  
  return (  
    <div className="bg-[#000e54] p-4 sm:p-6 rounded-4xl flex flex-col items-center justify-between md:flex-row md:items-center max-w-6xl mx-auto">   
      <div className="w-40 h-40 mb-8 md:mb-0 md:mr-6 flex items-center justify-center">
        <img src={image} alt="Description" className="w-20 h-20 rounded-lg" />   
      </div>      
      
      <div className="text-left mb-6 md:text-left sm:text-left md:mb-0 md:mr-6">
        <h2 className="text-2xl font-bold text-white">Get Weekly 5-Minute Business Advice</h2>     
        <p className="text-white mt-1">       
    Compare Bazaar Newsletter is your digest of bite-sized news, thought & brand leadership, and entertainment.       
    <br />All in one email.
</p> 
      </div>    
      
      {/* Form section */}   
      <div className="w-full max-w-md md:w-auto md:flex-shrink-0">     
        {success ? (       
          <div className="bg-white text-[#ff8633] px-4 py-3 rounded-2xl relative">         
            Thank you for subscribing!       
          </div>     
        ) : (       
          <form onSubmit={handleSubmit} className="flex flex-row bg-white rounded-2xl">         
        <input
  type="email"
  placeholder="Enter your email address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  className="px-4 py-3 rounded-l w-full lg:w-2xl focus:outline-none h-12 text-xs sm:text-base"
/>        
            <button           
              type="submit"           
              disabled={loading}           
              className="bg-white cursor-pointer hover:bg-white hover:text-[#ff8633] text-xs sm:text-base text-gray-800 font-semibold py-3 px-6 rounded-2xl h-12 transition duration-300 ease-in-out whitespace-nowrap"         
            >           
              {loading ? 'Submitting...' : 'Subscribe'}         
            </button>       
          </form>     
        )}     
        {error && (       
          <div className="text-red-600 mt-2 text-sm">         
            {error}       
          </div>     
        )}   
      </div> 
    </div>   
  ); 
};  

export default Advice;