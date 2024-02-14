import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

const sendgridAPIKey = process.env.SEND_GRID_API;
sgMail.setApiKey(sendgridAPIKey);

const sendConfirmation = (
  email,
  name,
  pickupAddress,
  pickupDate,
  pickupTime,
  destination,
  fare
) => {
  const pickupAddressCaps = pickupAddress.toUpperCase();
  const destinationCaps = destination.toUpperCase();

  const message = {
    to: email,
    from: `info@oldalexhub.com`,
    subject: "Your Booking Confirmation",
    text: `Hello ${name},\n\nThank you for booking with Kemet Transportation. Here are your booking details:\n\n- Pickup Address: ${pickupAddress}\n- Pickup Date: ${pickupDate}\n- Pickup Time: ${pickupTime}\n- Destination: ${destination}\n- Fare: ${fare}\n\nWe are looking forward to serving you and making your journey comfortable and enjoyable.\n\nBest,\nThe Kemet Transportation Team`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h1 style="color: #005a87;">Your Booking Confirmation</h1>
        <p>Hello ${name},</p>
        <p>Thank you for booking with <strong>Kemet Transportation</strong>. We are eagerly awaiting to make your journey comfortable and enjoyable. Here are the details of your booking:</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Pickup Address</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${pickupAddressCaps}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Pickup Date</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${pickupDate}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Pickup Time</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${pickupTime}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Destination</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${destinationCaps}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Fare</td>
            <td style="padding: 8px; border: 1px solid #ddd;">$${fare}</td>
          </tr>
        </table>
        <p>If you have any questions or need further assistance, please do not hesitate to contact us. We are here to help!</p>
        <p>Best wishes,</p>
        <p><strong>The Kemet Transportation Team</strong></p>
      </div>
    `,
  };

  sgMail.send(message);
};

export default sendConfirmation;
