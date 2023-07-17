// import sayMessage from messages/say-message.js
const sayMessage = require("../messages/say-message");

function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

sayHelloTo("Woody");

module.exports = sayHelloTo;