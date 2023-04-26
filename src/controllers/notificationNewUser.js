const { transporter } = require("../mailer");
const { USER } = process.env;

const notificationNewUser = async (email, user) => {
  await transporter.sendMail({
    from: `"Books4All prueba desconocido"<${USER}>`, //.env
    to: /* `${email}` */ "robertoochoa.dev@gmail.com",
    subject: "Books4All: New User",
    html: `<p> The user ${user} has been successfully created.<p/>`,
  });
};

module.exports = { notificationNewUser };
