const { exec } = require('child_process');
const { promisify } = require('util');

const execPromise = promisify(exec);

async function run(command,  doPrint=true) {
  // Sanitize and escape the command before executing
  const sanitizedCommand = command.replace(/[;<>&|"'$`\\]/g, '');
  try {
    const { stdout, stderr } = await execPromise(sanitizedCommand);
    if(doPrint) {
      console.log(stdout);
    }
    return { success: true, message: stdout, stdErr: stderr };
  } catch (error) {
    if(doPrint) {
      console.error(error.message);
    }
    return { success: false, error: error.message, stdErr: error.stderr };
  }
}

module.exports = { run };
