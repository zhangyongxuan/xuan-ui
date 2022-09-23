const exec = require('child_process').exec;
const [path, filePath, ...rest] = process.argv;
const commitMsg = rest.join(',');
console.log(commitMsg);
exec(` git add . `, (error, stdout, stderr) => {

    if (error) {
        console.error('error: ' + error);
        return;
    }
    exec(`git commit -m '${commitMsg}'`, (error1) => {
        if (error1) {
            console.error('error: ' + error1);
            return;
        }
        exec(`git push origin master`, (error2) => {

            if (error2) {
                console.error('error: ' + error2);
                return;
            }
            exec(`git push gitee master`, (error3) => {

                if (error3) {
                    console.error('error: ' + error3);
                    return;
                }
            })
        })
    })
})




// git add . ;git commit -m 'update';git push origin master;git push gitee master