// Description
//   A hubot script to motivate you
//
// Configuration:
//   Install the ruby gem: motivator
//     gem install motivator
//
// Commands:
//   hubot motivate me - <motivates you>
//
// Notes:
//   Depends on the motivator executable to be in your path.
//
// Author:
//   Arvid Gerstmann <dev@arvid-g.de>


var exec = require('child_process').exec;

module.exports = function (robot) {
  return robot.respond(/(motivate).*/i, function (res) {
    var cmd = 'motivator --motivate';
    exec(cmd, function (error, stdout, stderr) {
      if (error) { return robot.logger.error(stderr); }

      stdout = stdout.replace(/(\[.+?\m)/gm, "");
      return res.send(stdout);
    });
  });
};
