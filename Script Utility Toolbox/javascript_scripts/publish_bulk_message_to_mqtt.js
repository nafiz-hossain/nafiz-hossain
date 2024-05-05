const mqtt = require('mqtt');
const { v4: uuidv4 } = require('uuid');

const brokerUrl = 'brokerUrl'; // Adjust the base path accordingly
const options = {
  clientId: 'clientId',
  transport: 'transport',
  username: 'username',
  password: 'password',
};

const client = mqtt.connect(brokerUrl, options);

client.on('connect', function () {
  console.log('[green] connected with result code');
  client.subscribe('topic', function (err) {
    if (!err) {
      console.log('[green] Subscribed to call_events');
    } else {
      console.error('[red] Error subscribing to call_events:', err);
    }
  });
});

client.on('message', function (topic, message) {
  console.log(`${topic} ${message.toString()}`);
});

const groupId = 'groupId';
const myMessages = ['Hello', 'Samiul'];
const id = ['id'];

try {
  for (let i = 0; i < 10; i++) {
    const aiGuess = Math.floor(Math.random() * 2);

    const ack = {
      // payload
    };

    const value = {
            // payload

    };

    const message = {
            // payload

    };

    const formattedMessage = JSON.stringify(message);

    console.log('#### ', i);
    
    client.publish('topic', formattedMessage);
  }
} catch (error) {
  console.error('[red] An error occurred:', error);
  client.end();
}

