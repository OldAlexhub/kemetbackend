import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

const sendgridAPIKey = process.env.SEND_GRID_API;
sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, fname) => {
  const message = {
    to: email,
    from: `info@oldalexhub.com`,
    subject: "Welcome to Egypt!",
    text: `Thank you ${fname} for registering with Kemet Transportation. We are looking forward to serving you!`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h1 style="color: #005a87;">Welcome to Egypt, ${fname}!</h1>
        <p>Thank you for registering with <strong>Kemet Transportation</strong>. We are thrilled to have you on board and look forward to serving you.</p>
        <p>Your journey with us will be filled with great experiences and the best services that we have to offer. We are committed to ensuring your transportation needs are met with the highest standards of quality and comfort.</p>
        <p>Should you have any questions or need assistance, please feel free to reach out to us. Our team is here to support you every step of the way.</p>
        <p>Welcome aboard!</p>
        <p><strong>The Kemet Transportation Team</strong></p>
        <hr>
        <footer>
          <p>Follow us on <a href="http://example.com">our Website</a> and social media.</p>
        </footer>
      </div>
    `,
  };

  sgMail.send(message);
};

export default sendWelcomeEmail;
