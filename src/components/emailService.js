
import emailjs from 'emailjs-com';

// EmailJS configuration
const PUBLIC_KEY = "ngjypDxZ5yJvw76LZ"; // Replace with your public key
const SERVICE_ID = 'service_gwdb4e9'; // Replace with your service ID

// Initialize EmailJS only once
if (!emailjs.isInitialized) {
  emailjs.init(PUBLIC_KEY);
}

/**
 * Sends form data using EmailJS.
 * @param {Object} formData - The form data to send.
 * @param {string} templateId - The template ID for the email.
 * @returns {Promise} - A promise that resolves with the EmailJS response.
 */
export const sendFormData = async (formData, templateId) => {
  try {
    // Add a timeout promise to handle cases where EmailJS doesn't respond
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Request timed out')), 10000); // 10 seconds timeout
    });

    // Prepare the template parameters for EmailJS
    const templateParams = {
      
      from_name:` ${formData.firstName} ${formData.lastName}`,
      from_name2: `${formData.fullName}`,
      company_name: formData.companyName || 'Not provided',
      phone_system_needs: formData.phoneSystemNeeds,
      phones_needed: formData.phonesNeeded,
      fleet_size: formData.fleetSize,
      vehicle_types: formData.vehicleTypes,
      zip_code: formData.zipCode,
      email: formData.email,
      phone_number: formData.phoneNumber,
      importantFeatures: formData.importantFeatures,
      email_list:formData.emailList,
      email_volume:formData.emailVolume,
      email_campaign:formData.emailCampaign,
      other_services:formData.otherServices,
      buying_time:formData.buyingTime,
      features_with_email:formData.featureswithEmail,
      employee_Count: formData.employeeCount,
      desired_Features: formData.desiredFeatures,
      other_Feature_Text: formData.otherFeatureText, 
      using_CRM: formData.usingCRM,
      employee_Count_crm: formData.employeeCountcrm,
      important_Features_crm: formData.importantFeaturescrm,
      industry_crm: formData.industrycrm,
      other_Industry: formData.otherIndustry,
      customer_service: formData.customService,
      important_feature: formData.importantFeature,
      inbound_calls: formData.inboundCalls,
      wd_typeof_website:formData.wdtypeofwebsite,
wd_typeof_design:formData.wdtypeofdesign,
wd_registered:formData.wdregistered,
wd_business:formData.wdbusiness,
wd_budget:formData.wdbudget,
wd_decision:formData.wddecision,
wd_additional_features:formData.wdadditionalFeatures,
street_address:formData.streetAddress,
wd_state:formData.wdstate,
wd_city:formData.wdcity,
    };

    // Send the email using EmailJS with a timeout
    const response = await Promise.race([
      emailjs.send(SERVICE_ID, templateId, templateParams),
      timeoutPromise
    ]);

    console.log('SUCCESS!', response.status, response.text);
    return response;
  } catch (error) {
    console.error('FAILED...', error);
    throw error;
  }
};