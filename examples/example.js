/**
 * start command:
 *  ex-1: node example.js ex1
 *  ex-2: node example.js ex2
 */

const cmd = require('../node-command-line');


if (process.argv[1].indexOf("example.js") !== -1) {
  if (process.argv[2] === 'ex1') {
    runSingleCommandWithoutWait();
  } else if (process.argv[2] === 'ex2') {
    runSingleCommandWithWait();
  } else if (process.argv[2] === 'ex3') {
    runMultipleCommandWithoutWait();
  } else if (process.argv[2] === 'ex4') {
    runMultipleCommandWithWait();
  } else if (process.argv[2] === 'ex5') {
    runSingleCommandWithWaitAndGetResponse();
  } else {
    runSingleCommandWithoutWait();
  }
}

function runSingleCommandWithoutWait() {
  cmd.run('node --version');
  console.log('Executed your command :)');
}

async function runSingleCommandWithWait() {
  await cmd.run('node --version');
  console.log('Executed your command :)');
}

async function runMultipleCommandWithoutWait() {
  var commands = ["node --version", "npm --version"];
  for (var i = 0; i < commands.length; i++) {
    cmd.run(commands[i]);
  }
  console.log('Executed your command :)');
}

async function runMultipleCommandWithWait() {
  var commands = ["node --version", "npm --version"];
  for (var i = 0; i < commands.length; i++) {
    await cmd.run(commands[i]);
  }
  console.log('Executed your command :)');
}

async function runSingleCommandWithWaitAndGetResponse() {
  let response = await cmd.run('node --version');
  if(response.success) {
    console.log('Response received===', response.message);
    // do something
    // if success get stdout info in message. like response.message
  } else {
    // do something
    // if not success get error message and stdErr info as error and stdErr. 
    //like response.error and response.stdErr
  }
 console.log('Executed your command :)');
}