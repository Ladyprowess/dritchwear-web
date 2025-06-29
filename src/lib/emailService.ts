import emailjs from '@emailjs/browser';


export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterData {
  email: string;
}

// EmailJS configuration - MAKE SURE THESE ARE CORRECT
const EMAILJS_SERVICE_ID = 'service_8hi9y72'; // Your EmailJS service ID
const EMAILJS_TEMPLATE_ID_CONTACT = 'template_contact'; // Your contact template ID
const EMAILJS_TEMPLATE_ID_NEWSLETTER = 'template_contact'; // Your newsletter template ID
const EMAILJS_PUBLIC_KEY = 'W5N7iNU70bsXf-1U6'; // Your EmailJS public key

// Initialize EmailJS with error handling
try {
  emailjs.init(EMAILJS_PUBLIC_KEY);
  console.log('EmailJS initialized successfully');
} catch (error) {
  console.error('Failed to initialize EmailJS:', error);
}

// Validate email format
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Check if EmailJS is properly configured
const validateConfig = (): boolean => {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY) {
    console.error('EmailJS configuration is incomplete');
    return false;
  }
  return true;
};

export const sendContactEmail = async (data: ContactFormData): Promise<{
  success: boolean;
  error?: string;
}> => {
  try {
    // Validate configuration
    if (!validateConfig()) {
      return {
        success: false,
        error: 'Email service configuration error'
      };
    }

    // Validate input data
    if (!data.name || !data.email || !data.subject || !data.message) {
      return {
        success: false,
        error: 'All fields are required'
      };
    }

    if (!isValidEmail(data.email)) {
      return {
        success: false,
        error: 'Please enter a valid email address'
      };
    }

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_email: 'dritchwear@gmail.com',
      // Add timestamp for tracking
      timestamp: new Date().toISOString(),
    };

    console.log('Sending contact email with params:', {
      service: EMAILJS_SERVICE_ID,
      template: EMAILJS_TEMPLATE_ID_CONTACT,
      // Don't log sensitive data
      hasData: !!templateParams.from_name
    });

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CONTACT,
      templateParams
    );

    console.log('Contact email response:', response);
    
    if (response.status === 200) {
      return { success: true };
    } else {
      return {
        success: false,
        error: `Email service returned status: ${response.status}`
      };
    }
  } catch (error: any) {
    console.error('Error sending contact email:', error);
    
    // Handle specific EmailJS errors
    if (error.status === 400) {
      return {
        success: false,
        error: 'Invalid email configuration. Please check your EmailJS settings.'
      };
    } else if (error.status === 401) {
      return {
        success: false,
        error: 'Email service authentication failed.'
      };
    } else if (error.status === 404) {
      return {
        success: false,
        error: 'Email template not found.'
      };
    } else if (error.name === 'NetworkError' || error.message?.includes('fetch')) {
      return {
        success: false,
        error: 'Network error. Please check your internet connection.'
      };
    }
    
    return {
      success: false,
      error: 'Failed to send email. Please try again or contact us directly.'
    };
  }
};

export const sendNewsletterEmail = async (data: NewsletterData): Promise<{
  success: boolean;
  error?: string;
}> => {
  try {
    // Validate configuration
    if (!validateConfig()) {
      return {
        success: false,
        error: 'Email service configuration error'
      };
    }

    // Validate email
    if (!data.email || !isValidEmail(data.email)) {
      return {
        success: false,
        error: 'Please enter a valid email address'
      };
    }

    const templateParams = {
      subscriber_email: data.email,
      to_email: 'dritchwear@gmail.com',
      timestamp: new Date().toISOString(),
    };

    console.log('Sending newsletter email with params:', {
      service: EMAILJS_SERVICE_ID,
      template: EMAILJS_TEMPLATE_ID_NEWSLETTER,
      hasEmail: !!templateParams.subscriber_email
    });

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_NEWSLETTER,
      templateParams
    );

    console.log('Newsletter email response:', response);
    
    if (response.status === 200) {
      return { success: true };
    } else {
      return {
        success: false,
        error: `Email service returned status: ${response.status}`
      };
    }
  } catch (error: any) {
    console.error('Error sending newsletter email:', error);
    
    // Handle specific EmailJS errors
    if (error.status === 400) {
      return {
        success: false,
        error: 'Invalid email configuration. Please check your EmailJS settings.'
      };
    } else if (error.status === 401) {
      return {
        success: false,
        error: 'Email service authentication failed.'
      };
    } else if (error.status === 404) {
      return {
        success: false,
        error: 'Email template not found.'
      };
    } else if (error.name === 'NetworkError' || error.message?.includes('fetch')) {
      return {
        success: false,
        error: 'Network error. Please check your internet connection.'
      };
    }
    
    return {
      success: false,
      error: 'Failed to subscribe. Please try again.'
    };
  }
};

// Test function to verify EmailJS configuration
export const testEmailJSConnection = async (): Promise<{
  success: boolean;
  error?: string;
}> => {
  try {
    // Send a test email with minimal data
    const testParams = {
      test: 'true',
      timestamp: new Date().toISOString(),
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CONTACT,
      testParams
    );

    return {
      success: response.status === 200,
      error: response.status !== 200 ? `Test failed with status: ${response.status}` : undefined
    };
  } catch (error: any) {
    return {
      success: false,
      error: `Connection test failed: ${error.message || 'Unknown error'}`
    };
  }
};