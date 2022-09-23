
const exec = require('child_process').exec;
const utils = require('./utils');

const {execCommand} = utils;


const [path, filePath, ...rest] = process.argv;
const commitMsg = rest.join(',');


const commitCode = async (m) => {
    try {
        const msg = await execCommand('git add .');
        console.log(msg);
        const msg1 = await execCommand(`git commit -m '${commitMsg}'`);
        console.log(msg1);
        const msg2 = await execCommand(`git push origin master`);
        console.log(msg2);
        const msg3 = await execCommand(`git push gitee master`);
        console.log(msg3);
    } catch (error) {
        console.error(error);
    }
}

commitCode(commitMsg);