import React from 'react';
import WideDiv from './WideDiv';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Accessibility() {
  return (
    <>
    <Navbar/>
    <div className="mx-auto">
      <div className="bg-[#000e54] py-4 text-center">
        <h1 className="text-4xl font-semibold text-[#ff8633]">Accessibility</h1>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <p className="text-gray-800 text-base mb-4"><span className="text-[#ff8633] font-semibold text-base">Compare Bazaar</span> is committed to making our website’s content accessible and user friendly to everyone. If you are having difficulty viewing or navigating the content on this website, or notice any content, feature, or functionality that you believe is not fully accessible to people with disabilities please call our Customer Service team at <a  href="tel:(877)780-9515" target="_blank" rel="noreferrer noopener" className="text-[#0000EE] underline hover:text-[#ff8633]">(877) 780-9515</a> or email our team at <a href="mailto:legal@CompareBazaar.com" className="text-[#0000EE] underline hover:text-[#ff8633]">legal@CompareBazaar.com</a> with “Disabled Access” in the subject line and provide a description of the specific feature you feel is not fully accessible or a suggestion for improvement. We take your feedback seriously and will consider it as we evaluate ways to accommodate all of our customers and our overall accessibility policies. Additionally, while we do not control such vendors, we strongly encourage vendors of third-party digital content to provide content that is accessible and user friendly.</p>
        </div>
      </div>
    </div>
    <WideDiv/>
    <Footer/>
    </>
  );
}
