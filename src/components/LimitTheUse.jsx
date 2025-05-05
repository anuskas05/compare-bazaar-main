import { useState } from 'react';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';
import { useRef} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const LimitTheUse = () => {
  const [optOutStatus, setOptOutStatus] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const captchaRef = useRef(null);
  const [captchaValue, setCaptchaValue] = useState(null);
    
  const [formData, setFormData] = useState({
    requestType: '',
    informationType: [],
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    details: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      requestType: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prevState => {
      const informationType = [...prevState.informationType];
      if (checked) {
        if (!informationType.includes(name)) {
          informationType.push(name);
        }
      } else {
        const index = informationType.indexOf(name);
        if (index !== -1) {
          informationType.splice(index, 1);
        }
      }
      return {
        ...prevState,
        informationType
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    
    // CAPTCHA validation - show error if not completed
    if (!captchaValue) {
      setSubmitError("Please verify that you're not a robot before submitting");
      setIsSubmitting(false);
      return;
    }
    
    setIsSubmitting(true);
    
    const submissionData = {
      access_key: "4e9faa02-cb51-4253-98e6-b5794f4ece3a", // replace this with your actual key
      subject: "New Limit the Use of My Sensitive Personal Information Request",
      from_name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      request_type: formData.requestType,
      information_types: formData.informationType.join(', '),
      phone: formData.phone,
      details: formData.details,
      captcha_token: captchaValue // Including the captcha token for verification
    };
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(submissionData)
      });
      
      const result = await response.json();
      if (result.success) {
        setSubmitSuccess(true);
        setFormData({
          requestType: '',
          informationType: [],
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          details: ''
        });
        
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        setSubmitError("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting to Web3Forms:", error);
      setSubmitError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
      
      // Reset the captcha after submission
      if (captchaRef.current) {
        captchaRef.current.reset();
      }
      setCaptchaValue(null);
    }
  };


  return (
    <>
    <Navbar/>
    <div className="max-w-6xl py-10 mx-auto px-4 bg-white rounded-lg">
      <h1 className="text-4xl font-semibold mb-6 text-gray-900">Limit the Use of My Sensitive Personal Information</h1>

      {/* Privacy Information Section */}
      <div className="space-y-6 mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Rights Regarding Sensitive Personal Information</h2>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="text-base font-semibold text-[#000e54] mb-2">Key Information</h3>
          <p className="text-[#000e54] text-base">
            You have the right to limit our use of your sensitive personal information to only those purposes necessary
            to provide our services. This page explains what constitutes sensitive information and how to exercise your rights.
          </p>
        </div>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Legal Basis for These Rights</h3>
          <p className="mb-4 text-base text-gray-800">
            These rights are granted under several privacy laws, with specific provisions for sensitive data:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-base text-gray-800">
            <li>
             California Privacy Rights Act (CPRA): Provides California residents with the right to limit
              use of sensitive personal information to specified business purposes.
            </li>
            <li>
              Virginia Consumer Data Protection Act (VCDPA): Requires opt-in consent for processing
              sensitive data categories.
            </li>
            <li>
              General Data Protection Regulation (GDPR): Establishes special protections for "special categories"
              of personal data under Article 9.
            </li>
            <li>
              Colorado Privacy Act (CPA) and Connecticut Data Privacy Act (CTDPA): Similar protections
              for sensitive data in these states.
            </li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">What Constitutes Sensitive Personal Information?</h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-xl mb-2 text-gray-800">Government Identifiers</h4>
              <ul className="list-disc pl-5 space-y-1 text-base text-gray-800">
                <li>Social Security number</li>
                <li>Driver's license number</li>
                <li>Passport number</li>
                <li>State ID card number</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-xl text-gray-800">Financial Information</h4>
              <ul className="list-disc pl-5 space-y-1 text-base text-gray-800">
                <li>Bank account numbers</li>
                <li>Credit/debit card numbers</li>
                <li>Account access credentials</li>
                <li>Precise financial geolocation</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-xl mb-2 text-gray-800">Health & Biometric Data</h4>
              <ul className="list-disc pl-5 space-y-1 text-base text-gray-800">
                <li>Medical conditions</li>
                <li>Health insurance information</li>
                <li>Biometric data (fingerprints, faceprints)</li>
                <li>Genetic data</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-x text-gray-800">Demographic Characteristics</h4>
              <ul className="list-disc pl-5 space-y-1 text-base text-gray-800">
                <li>Racial or ethnic origin</li>
                <li>Religious/philosophical beliefs</li>
                <li>Union membership</li>
                <li>Sexual orientation</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-xl text-gray-800">Communications & Location</h4>
              <ul className="list-disc pl-5 space-y-1 text-base text-gray-800">
                <li>Mail/email contents (unless we're the recipient)</li>
                <li>Precise geolocation (within 1,750 feet)</li>
                <li>Private communications</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-xl text-gray-800">Other Sensitive Data</h4>
              <ul className="list-disc pl-5 space-y-1 text-base text-gray-800">
                <li>Citizenship/immigration status</li>
                <li>Mental/physical health diagnoses</li>
                <li>Contents of private messages</li>
                <li>Login credentials</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-xl text-[#000e54] mb-2">Important Notes</h4>
            <p className="text-[#000e54] text-base">
              Some information may be considered sensitive under one law but not another. We apply the broadest
              protections regardless of your location. Certain data elements (like ZIP code alone) typically don't
              qualify as sensitive.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">How We Use Sensitive Information</h3>
          <p className="mb-4 text-base text-gray-800">
            Without your explicit consent, we only use sensitive personal information for these permitted purposes:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-xl text-gray-800">Service Provision</h4>
              <ul className="list-disc pl-5 space-y-1 text-base text-gray-800">
                <li>Processing payments for purchases</li>
                <li>Providing healthcare services (if applicable)</li>
                <li>Delivering core product functionality</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-xl text-gray-800">Security & Fraud Prevention</h4>
              <ul className="list-disc pl-5 space-y-1 text-base text-gray-800">
                <li>Detecting security incidents</li>
                <li>Protecting against fraud</li>
                <li>Verifying identity</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-xl text-gray-800">Legal Compliance</h4>
              <ul className="list-disc pl-5 space-y-1 text-base text-gray-800">
                <li>Complying with federal/state laws</li>
                <li>Responding to law enforcement</li>
                <li>Exercising legal rights</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-xl text-gray-800">Internal Business Purposes</h4>
              <ul className="list-disc pl-5 space-y-1 text-base text-gray-800">
                <li>Maintaining service quality</li>
                <li>Short-term transient use</li>
                <li>Performing services on your behalf</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-[#000e54]">
            <h4 className="font-semibold text-xl mb-2 text-gray-800">Prohibited Uses Without Consent</h4>
            <p className="mb-2 text-base text-gray-800">
              We will never use your sensitive information for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-base text-gray-800">
              <li>Cross-context behavioral advertising</li>
              <li>Building advertising profiles</li>
              <li>Training AI models without de-identification</li>
              <li>Any purpose beyond what's necessary for our services</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">How We Protect Sensitive Information</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-gray-800 text-xl">Technical Safeguards</h4>
              <ul className="list-disc pl-5 space-y-1 text-base text-gray-800">
                <li>End-to-end encryption</li>
                <li>Tokenization of payment data</li>
                <li>Strict access controls</li>
                <li>Multi-factor authentication</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-gray-800 text-xl">Organizational Measures</h4>
              <ul className="list-disc pl-5 space-y-1 text-base text-gray-800">
                <li>Limited employee access</li>
                <li>Mandatory privacy training</li>
                <li>Data minimization policies</li>
                <li>Regular audits</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-gray-800 text-xl">Third-Party Protections</h4>
              <ul className="list-disc pl-5 space-y-1 text-base text-gray-800">
                <li>Strict contractual obligations</li>
                <li>Purpose limitations</li>
                <li>Data protection assessments</li>
                <li>Prohibitions on secondary use</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Privacy Choices Section */}
      <div className="space-y-8">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">Manage Your Sensitive Data Preferences</h2>
        
        <section className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-base font-semibold text-[#000e54] mb-2">What Changes When You Limit Use</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-base mb-1 text-[#000e54]">Immediate Effects:</h4>
              <ul className="list-disc pl-5 space-y-1 text-base text-[#000e54]">
                <li>We stop using sensitive data for non-essential purposes</li>
                <li>Existing sensitive data is restricted to permitted uses</li>
                <li>Future collection is minimized to only what's necessary</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-base text-[#000e54]">What Doesn't Change:</h4>
              <ul className="list-disc pl-5 space-y-1 text-base text-[#000e54]">
                <li>Essential service functionality requiring this data</li>
                <li>Legal/regulatory compliance requirements</li>
                <li>Fraud prevention measures</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">How to Exercise Your Rights</h3>
          
          <div className="mb-6 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-5">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">Option 1: Online Request Portal</h4>
              <p className="mb-4 text-base text-gray-800">
                Our secure portal allows you to submit and track requests regarding your sensitive data:
              </p>
              <button className="bg-[#000e54] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                Access Sensitive Data Request Portal
              </button>
            </div>
            <div className="bg-gray-50 p-5 border-t">
              <h4 className="font-semibold text-xl text-gray-800 mb-3">Option 2: Email Request</h4>
              <p className="mb-2 text-base text-gray-800">
                Send an email to <span className="font-semibold text-gray-800">privacy@yourcompany.com</span> with:
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1 text-base text-gray-800">
                <li>Subject line: "Sensitive Data Request"</li>
                <li>Your full name</li>
                <li>Account information (if applicable)</li>
                <li>Specific request details</li>
              </ul>
            </div>
            <div className="p-5 border-t bg-white">
              <h4 className="font-semibold text-xl text-gray-800 mb-3">Option 3: Phone Request</h4>
              <p className="mb-2 text-base text-gray-800">
                Call our dedicated privacy line:
              </p>
              <p className="text-xl font-semibold text-[#000e54]">1-800-555-PRIV (7748)</p>
              <p className="mt-2 text-sm text-gray-800">Available Monday-Friday, 9am-5pm EST</p>
            </div>
            <div className="bg-gray-50 p-5 border-t">
              <h4 className="font-semibold text-xl mb-3">Option 4: Mail Request</h4>
              <p className="mb-2 text-base text-gray-800">
                Send written requests to:
              </p>
              <address className="not-italic text-base text-gray-800">
                YourCompany Privacy Office<br />
                Attn: Sensitive Data Request<br />
                123 Data Protection Lane<br />
                Privacyville, CA 90210
              </address>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-xl text-[#000e54] mb-2">Verification Process</h4>
            <p className="mb-2 text-[#000e54] text-base">
              To protect your information, we require verification of your identity before processing sensitive data requests.
              This may involve:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-base text-[#000e54]">
              <li>Account authentication</li>
              <li>Government ID verification (for certain requests)</li>
              <li>Answering security questions</li>
              <li>Email confirmation</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Response Timeline & Process</h3>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start">
                <div className="bg-[#000e54] text-white rounded-full lg:w-8 lg:h-8 w-20 h-6 flex items-center justify-center mr-3 mt-1">1</div>
                <div>
                  <h4 className="font-semibold text-xl mb-2 text-gray-800">Request Submission</h4>
                  <p className="text-base text-gray-800">
                    We acknowledge receipt of your request within 10 business days and provide information about
                    our verification process.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start">
                <div className="bg-[#000e54] text-white rounded-full lg:w-8 lg:h-8 w-20 h-6 flex items-center justify-center mr-3 mt-1">2</div>
                <div>
                  <h4 className="font-semibold text-xl mb-2 text-gray-800">Verification</h4>
                  <p className="text-base text-gray-800">
                    Most requests are verified within 3-5 business days. Complex cases may take up to 10 days.
                    We'll notify you if additional information is needed.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start">
                <div className="bg-[#000e54] text-white rounded-full lg:w-8 lg:h-8 w-20 h-6 flex items-center justify-center mr-3 mt-1">3</div>
                <div>
                  <h4 className="font-semibold text-xl mb-2 text-gray-800">Processing</h4>
                  <p className="text-base text-gray-800">
                    We complete processing within 45 days of verification. For complex requests, we may extend
                    this period by an additional 45 days with notification.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start">
                <div className="bg-[#000e54] text-white rounded-full lg:w-8 lg:h-8 w-20 h-6 flex items-center justify-center mr-3 mt-1">4</div>
                <div>
                  <h4 className="font-semibold text-xl mb-2 text-gray-800">Completion</h4>
                  <p className="text-base text-gray-800">
                    You'll receive a detailed report of actions taken. For limitations, we'll specify the
                    business purposes for which we retain certain sensitive data.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-[#000e54]">
            <h4 className="font-semibold text-xl mb-2 text-gray-800">Exceptions & Limitations</h4>
            <p className="mb-2 text-base text-gray-800">
              In certain circumstances, we may deny your request if:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-base text-gray-800">
              <li>We cannot verify your identity</li>
              <li>The request is manifestly unfounded or excessive</li>
              <li>Retention is required by law or for legal claims</li>
              <li>Data is de-identified or aggregated</li>
              <li>Maintaining the data is necessary for our core services</li>
            </ul>
            <p className="mt-3 text-base text-gray-800">
              If we deny your request, we'll explain why and provide information about appealing the decision.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Additional Protections</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-xl mb-2 text-gray-800">For Minors</h4>
              <p className="text-base text-gray-800">
                We never knowingly sell or share sensitive data of consumers under 16 without affirmative
                authorization. Parents/guardians may make requests on behalf of minors.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-xl mb-2 text-gray-800">Data Retention</h4>
              <p className="text-base text-gray-800">
                Sensitive data is retained only as long as necessary for the permitted purposes, typically:
              </p>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-base text-gray-800">
                <li>7 years for financial records</li>
                <li>Duration of service plus 3 years for health data</li>
                <li>Immediate deletion of unused biometric data</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div className='px-4'>
      <div className="max-w-4xl mx-auto my-10 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="relative bg-[#000e54]">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white blur-xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-purple-300 blur-xl"></div>
          </div>
          <div className="relative z-10 text-center p-4">
            <h2 className="text-4xl font-semibold text-white mb-3">Consumer Privacy Rights Request Form</h2>
          </div>
        </div>
      
        <div className="p-8 md:p-10">
          {submitSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="relative inline-block">
                <svg className="w-20 h-20 bg-blue-100 rounded-4xl text-[#000e54] mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div className="absolute inset-0 rounded-full bg-green-100 animate-ping opacity-30"></div>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mt-6">Request Submitted!</h2>
              <p className="text-gray-800 text-base mt-3">
                We've sent a confirmation. Your request will be processed within 45 days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="border-b border-gray-200 pb-2 mb-4">
                    <p>Not all persons are eligible for all data requests. This form will be used to determine your eligibility. To protect your privacy, you will be required to verify that you either are a person about whom we collected information or are someone authorized to act on such a person's behalf. Requests are fulfilled as soon as practical, usually within 45 days.</p>
                  <p className="text-base mt-3 font-semibold text-[#000e54]">*REQUIRED FIELDS</p>
                </div>
              </div>

              {submitError && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg animate-fade-in">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p className="text-red-800 font-semibold">{submitError}</p>
                  </div>
                </div>
              )}

              {/* Request Type */}
              <div>
                <label className="block text-base font-semibold text-gray-800 mb-1">
                  *Type of Requester:
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Consumer', 'Insurance Partner', 'Vendor', 'Authorized Person', 'Employee', 'Applicant'].map(type => (
                    <div key={type} className="flex items-center">
                      <input
                        id={`request-${type}`}
                        name="requestType"
                        type="radio"
                        value={type}
                        checked={formData.requestType === type}
                        onChange={handleRadioChange}
                        className="h-4 w-4 text-[#000e54] focus:ring-[#000e54] border-gray-300"
                        required
                      />
                      <label htmlFor={`request-${type}`} className="ml-2 block text-sm text-gray-700">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Information Type */}
              <div>
                <label className="block text-base font-semibold text-gray-800 mb-1">
                  *Type of Personal Information (PI) Request:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'PI Report', 'PI Access', 'PI Deletion', 'Do Not Sell/Share My PI',
                    'Limit the Use of My Sensitive PI', 'Opt Out of Profiling/Automated Decision Making',
                    'Do Not Email', 'Do Not Call/Text', 'Correct My PI'
                  ].map(type => (
                    <div key={type} className="flex items-start">
                      <input
                        id={`info-${type}`}
                        name={type}
                        type="checkbox"
                        checked={formData.informationType.includes(type)}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 mt-1 text-[#000e54] focus:ring-[#000e54] border-gray-300 rounded"
                      />
                      <label htmlFor={`info-${type}`} className="ml-2 block text-sm text-gray-800">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="firstName" className="block text-base font-semibold text-gray-800">*First Name:</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 text-base py-3 border border-gray-200 rounded-lg focus:border-[#000e54] transition-all"
                      placeholder="John"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="lastName" className="block text-base font-semibold text-gray-800">*Last Name:</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 text-base py-3 border border-gray-200 rounded-lg focus:border-[#000e54] transition-all"
                      placeholder="Doe"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="phone" className="block text-base font-semibold text-gray-800">Phone Number:</label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 text-base py-3 border border-gray-200 rounded-lg focus:border-[#000e54] transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-base font-semibold text-gray-800">*Email:</label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 text-base py-3 border border-gray-200 rounded-lg focus:border-[#000e54] transition-all"
                      placeholder="your.email@example.com"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-1">
                <label htmlFor="details" className="block text-base font-semibold text-gray-800">Request Details:</label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full px-4 text-base py-3 border border-gray-200 rounded-lg focus:border-[#000e54] transition-all"
                  placeholder="Please provide additional information..."
                  maxLength="1000"
                ></textarea>
                <p className="mt-1 text-xs text-right text-gray-500">{formData.details ? formData.details.length : 0}/1000 Characters</p>
              </div>

              {/* CAPTCHA */}
            

<div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
    {/* Text - comes first in DOM order but visually adjusts based on screen size */}
    <h2 className="text-base text-gray-800 font-semibold sm:min-w-[200px] sm:mr-4 order-1 sm:order-none">
      Please verify that you're not a robot
    </h2>
    
    {/* reCAPTCHA - will appear below on mobile, beside on larger screens */}
    <div className="order-2 sm:order-none transform sm:scale-100 scale-90 origin-left">
      <ReCAPTCHA
        ref={captchaRef}
        sitekey="6LfrmSgrAAAAAGhs0-kgqJkRnFECkHTvrRY-4dMQ"
        onChange={(value) => setCaptchaValue(value)}
      />
    </div>
  </div>
</div>



              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] shadow-lg ${
                    isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#000e54]'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center text-base">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Submit Request
                    </span>
                  )}
                </button>
              </div>
              <div className="text-center text-base text-gray-800 pt-4">
                <p>We'll never share your information. Read our <a href="/PrivacyPolicy" className="text-[#000e54] hover:underline">Privacy Policy</a>.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>

    <WideDiv/>
    <Footer/>
    </>
  );
};

export default LimitTheUse;