# node-command-line
Simple node.js commandline or terminal interface to execute cli commands from node environment with/without promise

using _node-command-line_ you can run commands synchronously/asynchronously and get the output as a promise.



#Examples

Inject the dependencies 

```
var cmd     = require('node-command-line'),
    Promise = require('bluebird');
```

**Execute the single command without wait** 

```
function runSingleCommandWithoutWait() {
  cmd.run('node --version');
  console.log('Executed your command :)');
}
```

In this example run the command `node --version` that will show the node version and also print `Executed your command :)`.
 node version may shown after print `Executed your command :)` because of second command do not wait for executing the first command.

** So output in console like:**
 
```
 Executed your command :)
 
 v6.2.1
 
```

**Execute the single command with wait (using promise)** 

```
function runSingleCommandWithWait() {
  Promise.coroutine(function *() {
    yield cmd.run('node --version');
    console.log('Executed your command :)');
  })();
}
```

In this example run the command `node --version` that will show the node version and also print `Executed your command :)`.
 node version will show before print `Executed your command :)` because of second command will execute after executing the first command.

** So output in console like:**
 
```
 v6.2.1
 
 Executed your command :)
 
```


**Execute the multiple command without wait** 

```
function runMultipleCommandWithoutWait() {
  Promise.coroutine(function *() {
    var commands = ["node --version","npm --version"];
    for(var i=0; i < commands.length; i++) {
      cmd.run(commands[i]);
    }
    console.log('Executed your command :)');
  })();
}
```

In this example run the command `node --version` and `npm --version` that will show the node version and npm version also print `Executed your command :)`.
 node and npm version may shown after print `Executed your command :)` because of `console.log`` do not wait for executing the first two command.

** So output in console like:**
 
```
 Executed your command :)
 
 v6.2.1
 
 3.10.2
 
```

**Execute the multiple command without wait** 

```
function runMultipleCommandWithWait() {
  Promise.coroutine(function *() {
    var commands = ["node --version","npm --version"];
    for(var i=0; i < commands.length; i++) {
      yield cmd.run(commands[i]);
    }
    console.log('Executed your command :)');
  })();
}
```

In this example run the command `node --version` and `npm --version` that will show the node version and npm version also print `Executed your command :)`.
 node and npm version will show before print `Executed your command :)` because of `console.log`` will be waiting  for executing the first two command.

 **So output in console like:**
 
```
 
 v6.2.1
 
 3.10.2
 
 Executed your command :)
 
```