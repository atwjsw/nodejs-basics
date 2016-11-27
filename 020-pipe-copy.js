var fs = require('fs');

fs.createReadStream('IMG_1850.JPG').pipe(fs.createWriteStream('1-pipe.jpg'));