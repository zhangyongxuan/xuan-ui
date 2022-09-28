
const utils = require('./utils');

const {execCommand} = utils;


const [path, filePath, ...rest] = process.argv;
const commitMsg = rest.join(',');


const commitCode = async (m) => {
    try {
        const msg = await execCommand('git add .');
        console.log(msg,1);
        const msg1 = await execCommand(`git commit -m '${commitMsg}'`);
        console.log(msg1,2);
        const msg2 = await execCommand(`git push origin master`);
        console.log(msg2,3);
        const msg3 = await execCommand(`git push gitee master`);
        console.log(msg3,4);
    } catch (error) {
        console.error(error);
    }
}

commitCode(commitMsg);