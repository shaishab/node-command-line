# node-command-line
Simple node.js commandline or terminal interface to execute cli commands from node environment with/without promise

using _node-command-line_ you can run commands synchronously/asynchronously and get the output as a promise.

##### npm info :    
![node-command-line npm version](https://img.shields.io/npm/v/node-command-line.svg) ![total npm downloads for node-command-line](https://img.shields.io/npm/dt/node-command-line.svg) ![monthly npm downloads for node-command-line](https://img.shields.io/npm/dm/node-command-line.svg) ![npm licence for node-command-line](https://img.shields.io/npm/l/node-command-line.svg)

##### GitHub Info:
![node-command-line GitHub Release](https://img.shields.io/github/release/shaishab/node-command-line.svg) ![GitHub license node-command-line license](https://img.shields.io/github/license/shaishab/node-command-line.svg) ![open issues for node-command-line on GitHub](https://img.shields.io/github/issues/shaishab/node-command-line.svg)

## Install the package
```
$ npm install --save node-command-line
```

## Method

| method | argument | functionality |
|--------|----------|---------------|
| run | command, true/false | run command synchronously/asynchronously based on using await and pass second parameter true or false to print from library or not. Default vaue is true.|



### **Note: 

`I've added a basic sanitization step that removes characters commonly associated with shell command injection attacks. This helps prevent unwanted characters from being executed within the shell command.`


## Examples

Inject the dependencies 

```
var cmd     = require('node-command-line')
```

**Ex1: Execute the single command without wait** 

```
function runSingleCommandWithoutWait() {
  cmd.run('node --version');
  console.log('Executed your command :)');
}
```

In this example run the command `node --version` that will show the node version and also print `Executed your command :)`.
 node version may shown after print `Executed your command :)` because of second command do not wait for executing the first command.

 I've added a basic sanitization step that removes characters commonly associated with shell command injection attacks. This helps prevent unwanted characters from being executed within the shell command.

**Output in console like:**
 
```
 Executed your command :)
 
 v16.15.1
 
```

**Ex2: Execute command and pass second parameter true/false to print from library or not** 

```
function runSingleCommandWithoutWait() {
  cmd.run('node --version', false); // Will not print output from library
  console.log('Executed your command :)');
}
```

In this example run the command `node --version` that will not sow the node version but print `Executed your command :)`.
 node version won't show after print `Executed your command :)` because the second parameter passed false.

**Output in console like:**
 
```
 Executed your command :)
 
```

**Ex3: Execute the single command with wait (using promise)** 

```
async function runSingleCommandWithWait() {
  await cmd.run('node --version');
  console.log('Executed your command :)');
}
```

In this example run the command `node --version` that will show the node version and also print `Executed your command :)`.
 node version will show before print `Executed your command :)` because of second command will execute after executing the first command.

**Output in console like:**
 
```
 v16.15.1
 
 Executed your command :)
 
```


**Ex4: Execute the multiple command without wait** 

```
async function runMultipleCommandWithoutWait() {
  var commands = ["node --version", "npm --version"];
  for (var i = 0; i < commands.length; i++) {
    cmd.run(commands[i]);
  }
  console.log('Executed your command :)');
}
```

In this example run the command `node --version` and `npm --version` that will show the node version and npm version also print `Executed your command :)`.
 node and npm version may shown after print `Executed your command :)` because of `console.log`` do not wait for executing the first two command.

**Output in console like:**
 
```
 Executed your command :)
 
 v16.15.1
 
 9.8.1
 
```

**Ex5: Execute the multiple command without wait** 

```
async function runMultipleCommandWithWait() {
  var commands = ["node --version", "npm --version"];
  for (var i = 0; i < commands.length; i++) {
    await cmd.run(commands[i]);
  }
  console.log('Executed your command :)');
}
```

In this example run the command `node --version` and `npm --version` that will show the node version and npm version also print `Executed your command :)`.
 node and npm version will show before print `Executed your command :)` because of `console.log`` will be waiting  for executing the first two command.

**Output in console like:**
 
```
 
 v16.15.1
 
 9.8.1
 
 Executed your command :)
 
```

**Ex6: Execute the single command with async wait and get response** 

```
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
```

**Output in console like:**
 
```
 
 Executed your command :)
 
```
