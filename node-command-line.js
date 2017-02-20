var exec = require('child_process').exec,
    Promise = require('bluebird');

var nodeCommandline={
  run:executeCommand
};

function executeCommand(command){
  return new Promise(function(resolve, reject) {
    exec(command, function(error, stdout, stderr) {
      if(error) {
        console.error(error.message);
        return resolve();
      }
      console.log(stdout);
      return resolve();
    });
  });
}

module.exports=nodeCommandline;