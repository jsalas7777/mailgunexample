// Initialize Mailgun client
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);

// Set Mailgun domain and API key
const DOMAIN = "yourdomain.com"; // Replace with your Mailgun domain
const API_KEY = 'your-mailgun-api-key'; // Replace with your Mailgun API key

// Create Mailgun client
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || API_KEY});

// Function to send email
const sendEmail = async (recipient, message, subject) => {
  try {
    const response = await mg.messages.create(DOMAIN, {
      from: "Email address <mailgun@yourdomain.com>",
      to: [recipient],
      subject: subject,
      text: message,  // You can include a plain-text version of the message
      html: message   // The message is passed as HTML
    });
    console.log("Email sent successfully:", response);
    return response;
  } catch (err) {
    console.error("Error sending email:", err);
    throw err;
  }
};

// Export the function to use in other files
module.exports = sendEmail;


sendEmail("test@test.com","Hello how are you","This is a test");