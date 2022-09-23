
const exec = require('child_process').exec;
const [path, filePath, ...rest] = process.argv;
const commitMsg = rest.join(',');
// console.log(commitMsg);
// exec(` git add . `, (error, stdout, stderr) => {

//     if (error) {
//         console.error('error: ' + error);
//         return;
//     }
//     exec(`git commit -m '${commitMsg}'`, (error1) => {
//         if (error1) {
//             console.error('error: ' + error1);
//             return;
//         }
//         exec(`git push origin master`, (error2) => {

//             if (error2) {
//                 console.error('error: ' + error2);
//                 return;
//             }
//             exec(`git push gitee master`, (error3) => {
//                 if (error3) {
//                     console.error('error: ' + error3);
//                     return;
//                 }
//             })
//         })
//     })
// })
const execCommand = (cmd) => {
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            } else if (stderr) {
                reject(stderr);
            } else {
                resolve(stdout);
            }
        })
    })
};

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