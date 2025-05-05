import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WideDiv from './WideDiv';

const AdvertisingDisclosure = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto">
        {/* Header Section */}
        <div className="bg-[#000e54] py-4 text-center">
          <h1 className="text-4xl font-semibold text-[#ff8633]">Advertising Disclosure</h1>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="prose prose-lg max-w-none text-gray-800 text-base">
            <p className="mb-6">
              We're excited to share great products and services with you through our site. We believe in transparency, so here's the deal: Some of the links you'll find on our site are affiliate links. This means that if you click through and make a purchase, we will earn a small commission.
            </p>

            <p className="mb-6">
              But here's what matters most: Our recommendations come directly from our unbiased, expert editorial team. They put products through rigorous research, testing, and review processes to ensure they meet our strict standards before we ever recommend them. We take pride in providing honest, reliable information so you can make confident purchasing decisions.
            </p>

            <p className="mb-6">
              Your trust is our top priority, which is why we're completely transparent about how we sustain our business. When you use our affiliate links, you pay exactly the same price - we simply receive a small percentage from the retailer. This support allows us to maintain our site, continue our product testing, and keep delivering the valuable content you rely on.
            </p>

            <p className="mb-6">
              We're truly grateful for your support. By using our links, you enable us to keep doing what we're passionate about - creating helpful comparison guides and trustworthy reviews with the same integrity and enthusiasm you've come to expect from us. Thank you for being part of our community!
            </p>

            <div className="mt-8">
              <p className="text-sm text-gray-00">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </div>
      <WideDiv />
      <Footer />
    </>
  );
};

export default AdvertisingDisclosure;