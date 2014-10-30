// Description:
//   Bike Shed - alerts users when they may be shedding bikes
//
// Dependencies:
//   None
//
// Commands:
//   listens for sentences containing the words angular && ember


module.exports = function(robot) {

  var enhancers = ['bar', 'hot tub', 'million users', 'lot of agile synergy', 'continuous integration server built in', 'touch screen interface', 'network of offshore bank accounts', 'test driven API', 'large extended family of other bikesheds', 'lot of fixed gear bicycles all over the place', 'deep sense of civic responsibility', 'secret that it will never discuss with anyone', 'direct line to the governors office'];
  var colors = ['red', 'green', 'blue', 'pink', 'black', 'orange', 'magenta', 'yellow ochre', 'burnt sienna'];


  robot.hear(/(angular.*ember|ember.*angular)/i, function(msg) {
    response = 'I think that the bikeshed should be painted '+colors[~~(Math.random() * colors.length)]+' and have a '+enhancers[~~(Math.random() * enhancers.length)];
    msg.send(response);
  });
};
