const exec = require('child_process').exec;
const execCommand = (cmd) => {
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {

            if (error) {
                reject(error);
            } else {
                resolve({ stderr, stdout });
            }
        })
    })
};
module.exports = {
    execCommand
}