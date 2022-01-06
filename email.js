const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'pennydesignstest@outlook.com',
    pass: 'pennytests1!'
  }
});

const options = {
  from: 'pennydesignstest@outlook.com',
  to: '5166600764@tmomail.net',
  subject: 'test',
  text: 'I sent this from your website :-)'
};

transporter.sendMail(options, (err, info) => {
  if (err) {
    console.error(err);
  }

});
