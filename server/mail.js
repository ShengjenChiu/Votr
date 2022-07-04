
//require the module 
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);

//Setup Client: instantiate a mailgun client
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere'});

/*

https://www.npmjs.com/package/mailgun.js?utm_source=recordnotfound.com

 If used in the browser, a proxy is required to communicate with the Mailgun api due to cors limitations. Also, do not publish your private api key in frontend code.
*/

