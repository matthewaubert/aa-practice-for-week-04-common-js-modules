// import sayHelloTo from send-messages/say-hello-to.js
const sayHelloTo = require("../send-messages/say-hello-to.js");

function giveMessageToMrsPotato(message) {
  sayHelloTo("Mrs. Potato");
  console.log(`(Psst... ${message})`)
}

giveMessageToMrsPotato("Hi Buzz");

module.exports = giveMessageToMrsPotato;