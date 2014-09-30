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

module.exports = function(robot) {
  fs.readFile('sauce/agile.txt', 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(data.split(' ').length + ' words read in agile.txt');

    m.seed(data, function() {
      console.log('sauce text seeded.');
      robot.hear(/^.*agile.*$/i, function(msg) {
        msg.send(m.respond(msg.match[0], 16).join(' '));
      });
    });
  });
};