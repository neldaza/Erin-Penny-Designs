const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pennydesignstest@gmail.com',
    pass: 'pennytest1!'
  }
});

const options = {
  from: 'pennydesignstest@gmail.com',
  to: '5166600764@tmomail.net',
  subject: 'test',
  text: 'it works'
};

transporter.sendMail(options, (err, info) => {
  if (err) {
    console.error(err);
  }

});
