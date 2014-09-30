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

fs.readFile('../sauce/agile.txt', 'utf8', function(err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data.split(' ').length + ' words read in agile.txt.');
});

var stream = fs.createReadStream(__dirname + '../sauce/agile.txt');

module.exports = function(robot) {
  m.seed(stream, function() {
    console.log('seeded');
    robot.hear(/^.*agile.*$/i, function(msg) {
      console.log(m.respond(msg.match[0], 16));
      msg.send('lol');
      msg.send(m.respond(msg.match[0], 16).join(' '));
    });
  });
};