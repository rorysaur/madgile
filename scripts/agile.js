// Description:
//   Provides agile inspiration when relevant to the conversation.
//
// Dependencies:
//   "markov": "0.0.7" 
//
// Commands:
//   agile - Returns a markov-chained sentence from agile sauce text.

var fs = require('fs');
var markov = require('markov');
var m = markov();

var stream = fs.createReadStream(__dirname + '../sauce/agile.txt');

module.exports = function(robot) {
  m.seed(stream, function() {
    robot.hear(/^.*agile.*$/i, function(msg) {
      msg.send(m.respond(msg.match[0]), 16).join(' ');
    });
  });
};