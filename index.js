require('dotenv').config({path: __dirname + '/.env'})
​
const NEXMO_API_KEY = process.env.NEXMO_API_KEY
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET
const TO_NUMBER = process.env.NEXMO_TO_NUMBER
const NEXMO_FROM_NUMBER = process.env.NEXMO_FROM_NUMBER
​
const Nexmo = require('nexmo')
​
const nexmo = new Nexmo({
  apiKey: NEXMO_API_KEY,
  apiSecret: NEXMO_API_SECRET
})
const from = NEXMO_FROM_NUMBER
const to = TO_NUMBER
const text = 'A text message sent using the Nexmo SMS API'
​
nexmo.message.sendSms(447451288842, 447547113295, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})
