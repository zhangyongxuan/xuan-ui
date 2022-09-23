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

const commitCode = async(m)=>{
    try {
        await exec('git add .');
        await exec(`git commit -m '${commitMsg}'`);
        await exec(`git push origin master`);
        await exec(`git push gitee master`);
    } catch (error) {
        console.error(error);
    }
}

commitCode(commitMsg);
// git add . ;git commit -m 'update';git push origin master;git push gitee master