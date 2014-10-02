// Description:
//   Provides agile inspiration when relevant to the conversation.
//
// Dependencies:
//   None
//
// Commands:
//   agiles inspire me - Returns a sentence from agile sauce text.

var fs = require('fs');

module.exports = function(robot) {
  fs.readFile('sauce/agile.txt', 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }

    var sentences = data.split('\n');
    var count = sentences.length;
    console.log(count + ' sentences read in agile.txt.');
    
    robot.hear(/agiles inspire me/i, function(msg) {
      var idx = Math.floor(Math.random() * (count - 1));
      var response = sentences[idx];
      msg.send(response);
    });
  });
};
