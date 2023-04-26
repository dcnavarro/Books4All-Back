const { transporter } = require("../mailer");
const { MAIL } = process.env;

const notificationSuccessPayment = async (user, cart) => {
  await transporter.sendMail({
    from: `"Books4All: Purchase successful"<${MAIL}>`, //.env
    to: `${user.email}`,
    subject: `Your payment was successful!`,
    html: `<div>you purchased: ${cart}.</div>  `,
  });
};

module.exports = { notificationSuccessPayment };
