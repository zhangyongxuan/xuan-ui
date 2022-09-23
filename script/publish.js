const fs = require('fs');
const path = require('path');

const [execPath, filePath, ...rest] = process.argv;

const publish = async () => {
    try {
        const packageJSON = await new Promise((resolve, reject) => {
            fs.readFile(path.resolve(execPath),'utf-8', (err, ...restArgv) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(restArgv);
                }
            })
        });
  
        console.log(packageJSON);
    } catch (error) {
        console.error(error);
    }


}

publish();