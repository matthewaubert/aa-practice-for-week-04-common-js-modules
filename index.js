// import giveMessageToMrsPotato from send-messages/give-message-to-mrs-potato.js
const giveMessageToMrsPotato = require("./send-messages/give-message-to-mrs-potato");
// import sayHelloTo from send-messages/say-hello-to.js
const sayHelloTo = require("./send-messages/say-hello-to");
// import msg1, msg2, msg3 from messages/index.js
const { msg1, msg2, msg3 } = require("./messages");

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);