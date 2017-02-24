/**
 * start command:
 *  ex-1: node example-run.js ex1
 *  ex-2: node example-run.js ex2
 */

var cmd     = require('../node-command-line'),
    Promise = require('bluebird');


if(process.argv[1].indexOf("example-run.js") !== -1) {
  if(process.argv[2] === 'ex1') {
    runSingleCommandWithoutWait();
  } else if(process.argv[2] === 'ex2') {
    runSingleCommandWithWait();
  } else if(process.argv[2] === 'ex3') {
    runMultipleCommandWithoutWait();
  } else if(process.argv[2] === 'ex4') {
    runMultipleCommandWithWait();
  } else {
    runSingleCommandWithoutWait();
  }
}

function runSingleCommandWithoutWait() {
  cmd.run('node --version');
  console.log('Executed your command :)');
}

function runSingleCommandWithWait() {
  Promise.coroutine(function *() {
    yield cmd.run('node --version');
    console.log('Executed your command :)');
  })();
}

function runMultipleCommandWithoutWait() {
  Promise.coroutine(function *() {
    var commands = ["node --version","npm --version"];
    for(var i=0; i < commands.length; i++) {
      cmd.run(commands[i]);
    }
    console.log('Executed your command :)');
  })();
}

function runMultipleCommandWithWait() {
  Promise.coroutine(function *() {
    var commands = ["node --version","npm --version"];
    for(var i=0; i < commands.length; i++) {
      yield cmd.run(commands[i]);
    }
    console.log('Executed your command :)');
  })();
}