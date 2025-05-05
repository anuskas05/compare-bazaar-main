import React, { useState } from "react";

import Navbar from "../components/Navbar";
import WideDiv from "../components/WideDiv";
import Footer from "../components/Footer";
import FAQ from './FAQ';

import NewPage from "./NewPage";

const ContactPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const contactFAQs = [
        {
            question: "How can I contact CompareBazar customer support?",
            answer: [
                "You can reach us through multiple channels:",
                "• Phone: +1 (800) 123-4567 (24/7 support)",
                "• Email: support@comparebazar.com",
                "• Live Chat: Available on our website during business hours",
                "• Social Media: DM us on Twitter/Facebook/Instagram @CompareBazar",
                "• In-person: Visit our headquarters at [Your Company Address]"
            ]
        },
        {
            question: "What are your customer support hours?",
            answer: [
                "Our support team is available:",
                "Monday-Friday: 8:00 AM to 10:00 PM (your timezone)",
                "Saturday-Sunday: 9:00 AM to 8:00 PM",
                "24/7 emergency support for premium members"
            ]
        },
        {
            question: "How long does it take to get a response from your team?",
            answer: "We typically respond within:",
            answerDetails: [
                "• Live Chat: Instant during business hours",
                "• Email: Within 2 business hours",
                "• Social Media: Within 4 hours",
                "• Phone: Immediate answer when calling",
                "For complex inquiries, resolution may take 24-48 hours"
            ]
        },
        {
            question: "Do you have international contact numbers?",
            answer: [
                "Yes! We serve customers globally with local numbers:",
                "• UK: +44 20 1234 5678",
                "• UAE: +971 4 123 4567",
                "• India: +91 80 1234 5678",
                "• Australia: +61 2 1234 5678",
                "Full list available on our 'Contact Us' page"
            ]
        },
        {
            question: "Can I schedule a callback from your team?",
            answer: "Absolutely! Use our 'Request Callback' form on the contact page to select your preferred time and we'll call you back at your convenience."
        },
        {
            question: "Where can I send partnership or business inquiries?",
            answer: "For business collaborations, please email partnerships@comparebazar.com or fill out the partnership form on our website. Our business development team responds within 24 hours."
        },
        {
            question: "How do I report a technical issue with the website?",
            answer: [
                "Please report any technical problems to:",
                "• Email: techsupport@comparebazar.com",
                "• Phone: +1 (800) 123-4567 (press 3 for technical support)",
                "• Use the 'Report Issue' button in your account dashboard",
                "Include screenshots and details for faster resolution"
            ]
        },
        {
            question: "What information should I include when contacting support?",
            answer: [
                "For faster service, please provide:",
                "• Your account email/username",
                "• Relevant order/transaction IDs",
                "• Detailed description of your inquiry",
                "• Screenshots if applicable",
                "• Preferred contact method"
            ]
        },
        {
            question: "Do you have a premium support option?",
            answer: "Yes, our CompareBazar Pro members get priority support with dedicated account managers, 24/7 phone access, and guaranteed 15-minute response times for all inquiries."
        },
        {
            question: "How can I provide feedback about your service?",
            answer: [
                "We welcome your feedback through:",
                "• Customer satisfaction surveys after each interaction",
                "• Email to feedback@comparebazar.com",
                "• Review platforms like Trustpilot",
                "• Social media channels",
                "All feedback receives a personal response from our management team"
            ]
        }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: '4e9faa02-cb51-4253-98e6-b5794f4ece3a',
                    ...formData
                })
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (
        <>
            <Navbar />
            <div className="font-['Quicksand'] overflow-x-hidden">
                {/* Map */}
                <div className="w-full h-[500px] flex justify-center items-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1793079333634!2d73.93027927385937!3d18.520797569169968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1e490827b59%3A0xc6891bc6deabc8be!2sQuore%20B2B%20Private%20Limited!5e0!3m2!1sen!2sin!4v1739178092301!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale invert-[90%]"
                    ></iframe>
                </div>

                {/* Contact Boxes - Fixed positioning */}
                <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-16 mx-auto max-w-7xl relative -mt-24 mb-12">
                    {/* First Card */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 flex-1 z-10 min-h-[300px] flex flex-col justify-center mb-6 lg:mb-0"
                        style={{
                            boxShadow: '0 10px 25px rgba(198, 151, 119, 0.3), 0 5px 10px rgba(239, 146, 84, 0.61)'
                        }}>
                        <div className="flex flex-col items-center h-full">
                            <div className="text-center mb-6">
                                {/* Map marker SVG icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center text-center">
                                <h2 className="text-xl text-gray-800  font-semibold mb-2 md:mb-3">ADDRESS:</h2>
                                <p className=" text-base leading-relaxed text-gray-800">
                                  539 W. Commerce St #2577
                                   Dallas,TX 75208
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second Card */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 flex-1 z-10 min-h-[300px] flex flex-col justify-center mb-6 lg:mb-0"
                        style={{
                            boxShadow: '0 10px 25px rgba(198, 151, 119, 0.3), 0 5px 10px rgba(239, 146, 84, 0.61)'
                        }}>
                        <div className="flex flex-col items-center h-full">
                            <div className="text-center mb-6">
                                {/* Phone SVG icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
                            </div>
                            <div className="flex flex-col justify-center text-center">
                                <h2 className="text-xl text-gray-800  font-semibold mb-2 md:mb-3">EMAIL:</h2>
                                <p className="text-base leading-relaxed text-gray-800">
                                Contactus@compare-bazaar.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Third Card */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 flex-1 z-10 min-h-[300px] flex flex-col justify-center"
                        style={{
                            boxShadow: '0 10px 25px rgba(198, 151, 119, 0.3), 0 5px 10px rgba(239, 146, 84, 0.61)'
                        }}>
                        <div className="flex flex-col items-center h-full">
                            <div className="text-center mb-6">
                                {/* Clock SVG icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center text-center">
                                <h2 className="text-xl  text-gray-800 font-semibold mb-2 md:mb-3">WORK HOURS:</h2>
                                <p className="text-base leading-relaxed text-gray-800">
                                    Monday - Friday: 09:00 - 23:00 <br />
                                    Sunday: 09:00 - 16:00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Get in Touch Section */}
                <div  className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-8 px-4 md:px-16 py-16">
                    {/* Left Section */}
                    <div className="flex-1 flex flex-col"> {/* Decreased flex ratio */}
                        <h2 className="text-4xl font-semibold mb-6 text-gray-900">
                            Please get in <span className="text-[#ff8633]">touch</span> with{" "}
                            <span className="text-[#ff8633]">us</span>
                        </h2>
                        <div className="flex gap-2 mb-4"> {/* Reduced margin here */}
                            <div className="w-2 h-1 bg-[#ff8633] rounded-2xl"></div>
                            <div className="w-10 h-1 bg-[#ff8633] rounded-2xl"></div>
                        </div>
                        <p className="text-base text-gray-800 mb-8"> {/* Added margin-bottom */}
                            When, while the lovely valley teems with vapour around me, and the
                            meridian sun strikes the upper surface of the impenetrable foliage of
                            my trees, and but a few stray gleams steal into the inner sanctuary.
                            When, while the lovely valley teems with vapour around me, and the
                            meridian sun strikes the upper surface of the impenetrable foliage of
                            my trees.
                        </p>

                        {/* New "Why Choose Us" Section (Commented Out) */}
                        <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className=" p-6 rounded-lg shadow-xl transition ">
                                <i className="fas fa-check-circle text-3xl text-[#ff8633] mb-4"></i>
                                <h3 className="text-xl font-semibold mb-2 text-[#000e54]">Reliable Service</h3>
                                <p className="text-gray-800 text-base">
                                    We provide dependable and high-quality services tailored to your needs.
                                </p>
                            </div>
                            <div className=" p-6 rounded-lg shadow-xl transition">
                                <i className="fas fa-users text-3xl text-[#ff8633] mb-4"></i>
                                <h3 className="text-xl font-semibold mb-2  text-[#000e54]">Expert Team</h3>
                                <p className="text-gray-800 text-base">
                                    Our team of professionals is dedicated to delivering exceptional results.
                                </p>
                            </div>
                            <div className=" p-6 rounded-lg shadow-xl transition">
                                <i className="fas fa-lightbulb text-3xl text-[#ff8633] mb-4"></i>
                                <h3 className="text-xl font-semibold mb-2  text-[#000e54]">Innovative Solutions</h3>
                                <p className="text-gray-800 text-base">
                                    We use cutting-edge technology to solve your business challenges.
                                </p>
                            </div>
                            <div className=" p-6 rounded-lg shadow-xl transition">
                                <i className="fas fa-handshake text-3xl text-[#ff8633] mb-4"></i>
                                <h3 className="text-xl font-semibold mb-2  text-[#000e54]">Customer-Centric</h3>
                                <p className="text-gray-800 text-base">
                                    Your satisfaction is our priority. We listen and adapt to your needs.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Send Email Form */}
                    <div id="getintouch" className="flex-1 flex flex-col">
                        <div className="bg-gradient-to-br from-white to-gray-50 shadow-xl rounded-2xl p-8 h-full flex flex-col justify-between transform hover:scale-[1.02] transition-all duration-300" style={{
                            boxShadow: "0 15px 30px rgba(255, 134, 51, 0.2), 0 8px 15px rgba(0, 14, 84, 0.1)",
                        }}>
                            <div>
                                <h2 className="text-3xl font-bold mb-8 text-[#ff8633] relative inline-block">
                                    Send message
                                    <span className="absolute -bottom-3 left-0 w-24 h-1.5 bg-[#ff8633] rounded-full"></span>
                                </h2>
                                {isSubmitted ? (
                                    <div className="flex flex-col items-center justify-center py-8">
                                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-[#000e54] rounded-xl p-8 w-full mb-8 shadow-lg transform hover:translate-y-[-5px] transition-all duration-300">
                                            <div className="flex justify-center mb-6">
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-[#ff8633] rounded-full opacity-20 animate-ping"></div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-[#000e54] animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-center text-[#000e54] mb-4">Thank you for your message!</h3>
                                            <p className="text-center text-[#000e54] text-base">
                                                We appreciate your inquiry and will get back to you as soon as possible.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="bg-gradient-to-r from-[#ff8633] to-[#ff9a57] text-white px-8 py-4 rounded-full text-sm font-bold hover:from-[#000e54] hover:to-[#001e74] transition-all duration-300 mt-2 w-[200px] shadow-lg hover:shadow-xl transform hover:translate-y-[-3px]"
                                        >
                                            GO BACK
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <input
                                            type="hidden"
                                            name="access_key"
                                            value="4e9faa02-cb51-4253-98e6-b5794f4ece3a"
                                        />
                                        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                                            <div className="relative bg-gray-50 rounded-xl p-4 shadow-md transform hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300 border-l-4 border-[#ff8633]">
                                                {/* <label className="text-xs text-gray-500 font-medium ml-1">FULL NAME</label> */}
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Enter your full name"
                                                    className="w-full border-b-2 border-[#ff8633] outline-none py-2 bg-transparent text-gray-800"
                                                    required
                                                />
                                            </div>
                                            <div className="relative bg-gray-50 rounded-xl p-4 shadow-md transform hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300 border-l-4 border-[#ff8633]">
                                                {/* <label className="text-xs text-gray-500 font-medium ml-1">EMAIL</label> */}
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Enter your email address"
                                                    className="w-full border-b-2 border-[#ff8633] outline-none py-2 bg-transparent text-gray-800"
                                                    required
                                                />
                                            </div>
                                            <div className="relative bg-gray-50 rounded-xl p-4 shadow-md transform hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300 border-l-4 border-[#ff8633]">
                                                {/* <label className="text-xs text-gray-500 font-medium ml-1">PHONE NUMBER</label> */}
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="Enter your phone number"
                                                    className="w-full border-b-2 border-[#ff8633] outline-none py-2 bg-transparent text-gray-800"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="relative bg-gray-50 rounded-xl p-4 shadow-md transform hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300 border-l-4 border-[#ff8633]">
                                            {/* <label className="text-xs text-gray-500 font-medium ml-1">MESSAGE</label> */}
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Type your message here..."
                                                className="w-full border-b-2 border-[#ff8633] outline-none py-2 bg-transparent text-gray-800"
                                                rows="1"
                                            ></textarea>
                                        </div>

                                        <div className="flex justify-center mt-8">
                                            <button
                                                type="submit"
                                                className="bg-gradient-to-r from-[#ff8633] to-[#ff9a57] text-white px-10 py-4 rounded-full text-sm font-bold hover:from-[#000e54] hover:to-[#001e74] transition-all duration-300 w-[220px] shadow-lg hover:shadow-xl transform hover:translate-y-[-3px] flex items-center justify-center gap-2"
                                            >
                                                SEND NOW
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                    
                </div>
                <NewPage/>
           
                {/* Call to Action Section */}
                <div className="bg-[#000e54] text-white text-center py-16 px-4">
                    <h2 className="text-4xl font-semibold mb-4">Ready to grow your business?</h2>
                    <p className="max-w-2xl mx-auto mb-8 text-base">
                        Partner with us to elevate your marketing strategy and drive measurable results for your business.
                    </p>
                    <a href="#getintouch"> {/* Replace with your section ID */}
                        <button className="bg-[#ff8633] text-[white] px-8 py-4 rounded-full font-bold  transition">
                            Get Started Today
                        </button>
                    </a>
                </div>
            </div>
   
            <FAQ faqs={contactFAQs}/>
            <WideDiv />
            <Footer />
        </>
    );
};

export default ContactPage;