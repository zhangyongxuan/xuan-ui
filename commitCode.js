
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
        await execCommand('git add .');
        await execCommand(`git commit -m '${commitMsg}'`);
        await execCommand(`git push origin master`);
        await execCommand(`git push gitee master`);
    } catch (error) {
        console.error(error);
    }
}

commitCode(commitMsg);