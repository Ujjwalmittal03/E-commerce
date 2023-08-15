const Mailjet = require("node-mailjet");
const mailjet = new Mailjet({
  apiKey: "29a5c2f9358b4e4910684b067437cb38",
  apiSecret: "d4bc117aaf9aea3594a5d5f5a6e446ef",
});

module.exports.sendverifymail = async function (email, Subject, body) {
  return await mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "ujjwalmittal1033@gmail.com",
          Name: "Ujjwal Mittal",
        },
        To: email,
        Subject: Subject,
        HTMLPart: body,
      },
    ],
  });
};
