// import AWS from 'aws-sdk';
// // import { config } from 'aws-sdk';
// // import AWSIoTData from 'aws-iot-device-sdk';
// import process from 'process/browser';
// import AWSIoTData from 'aws-iot-device-sdk-browser';
const AWS = require('aws-sdk');
const AWSIoTData = require('aws-iot-device-sdk-browser');
const process = require('process/browser');
// AWS.config.region = 'hminnovance';
AWS.config.update({
    region: 'hminnovance',
    credentials: new AWS.Credentials('AKIA2WQVQJ7RJFJ35AY2', 'Xo8yZoMbWTSNV6ncRfFxGEyArkbIc06h6NtnqrdD'),
  });
  

const mqttClient = AWSIoTData.device({
    region: 'hminnovance',
    host: 'a328gbjpu8026z-ats.iot.ap-south-1.amazonaws.com',
    clientId: 'iotconsole-a57fcbd8-aa6e-42bc-a73b-2f1cfa8d84a2',
    //   protocol: 'mqtt',
    protocol: 'wss',
    maximumReconnectTimeMs: 8000,
    debug: true,
    accessKeyId: 'AKIA2WQVQJ7RJFJ35AY2',
    secretKey: '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',
    sessionToken: 'IQoJb3JpZ2luX2VjEG0aCmFwLXNvdXRoLTEiRzBFAiEA+Odbz6jrvm3+Qpbwq97QpvaHL/CwahGaIpt3/Z0XGLwCIGqDdTw0f4pZTDiUUrcG2vxbaBFqeFAzl1SbKplkvVP2KtMBCGYQABoMNzM1NTU4MjU4NjU4IgzgY2tUnY0kr8CUOu8qsAHwxLM1cDHuga5h7JrI0bEh+c99ybBqCdJdcW5iyed8jbft5SRjd6EEF0Av8gxBZNtKwLj4GwVzS71atqZZt24zS9ZQuCPzUxIm4WtHrGTd4AhcKnO+I6gW4dppWGr/1r/Qjs87wb6eAMTYufq5dsFuXNIqDKiMSI0teNz1EAL4yqYzo3qkCXTtC6IpnjSxm8NIL6ibf57YCGjwXaiE6brDmPyMeMAgTX5OWXPUgXxwwTCjgPyhBjqYAYFX48gZ1MZ4BD2i7lMLdoEzv9mfrjZn7hDwq4O5nvnH9CCiRVKnRgpQB9KXTRX74elEttiLRaxhOaAj+2xk470D8MedG0aeLTjEZdPfRyEWLzVlkUyqCpIfeKd6DnjtgKMV3IP1byafHMC/BdEnKHVCNAr0aHYOTZc6pveQ2Nm8HOKvAaj7eBqmmNhajGvIBgLUby00MLCg',
});

mqttClient.connect();

// mqttClient.on('connect', () => {
//   console.log('Connected to AWS IoT!');
//   mqttClient.subscribe('hm/rate');
// });

// mqttClient.on('message', (topic, payload) => {
//   console.log(`Received message on topic ${topic}: ${payload.toString()}`);
// });

// mqttClient.subscribe('connect', {}, (err, granted) => {
//     if (err) console.log('Subscribe error:', err);
//     else console.log('Subscribed:', granted);
//   });

// mqttClient.on('message', (topic, payload) => {
// console.log('Received message:', payload.toString());
// })
mqttClient.on('connect', function() {
    console.log('Connected to AWS IoT');
  });
  
mqttClient.on('error', function(error) {
console.error('AWS IoT Error:', error);
});

export default function AwsIot() {
  return (
    <div>Hello is this working </div>
  )
}