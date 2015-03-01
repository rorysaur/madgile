// Description:
//   Embular
//
// Dependencies:
//   None
//
// Commands:
//   responds to sentences containing the words angular && ember


module.exports = function(robot) {

  var technologies = ['C', 'PHP', 'vanilla javascript', 'jQuery', 'scraps of newspaper', 'a waffle iron', 'rspec', 'the hip hop virtual machine', 'java', 'Paul Graham\'s implementation of LISP'];
  var cssess = ['twitter bootstrap', 'imageMagick', 'adobe photoshop', 'wordpress', 'a can-do attitude', 'plain CSS', 'windows XP', 'surrealism', 'ruby on rails', 'a fresh pot of coffee'];

  robot.hear(/(angular.*ember|ember.*angular)/i, function(msg) {
    response = 'angular? ember? have we considered building our front-end with '+technologies[~~(Math.random() * technologies.length)]+' and '+cssess[~~(Math.random() * cssess.length)]+'? :bike: ';
    msg.send(response);
  });
};
