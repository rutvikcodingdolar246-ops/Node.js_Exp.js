const parth = require("path")


console.log(__dirname);
console.log(__filename);


// school folder / students / data.txt


const filePath = parth.join("folder","students","data.txt");
console.log(filePath)


const parseData = parth.parse(filePath)
const resolvedPath = parth.resolve(filePath)
const extname = parth.extname(filePath)
const basename = parth.basename(filePath)
const dirname = parth.dirname(filePath)


console.log({parseData,resolvedPath,extname,basename,dirname,separator:parth.sep});
