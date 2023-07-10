// const fs = require('fs');
// const path = require('path');

// const dirPath = path.join(__dirname, 'crud');
// const filePath = path.join(dirPath, 'apple.txt');

// // Create the directory if it doesn't exist
// if (!fs.existsSync(dirPath)) {
//   fs.mkdirSync(dirPath);
//   console.log('Directory created:', dirPath);
// }

// // Create the file with the content
// fs.writeFileSync(filePath, 'This is a simple text file');
// console.log('File created:', filePath);


// fs.readFile(filePath,(err,item) =>{
//     console.log(item)
// })

// fs.readFile(filePath,'utf-8',(err,item) =>{
//     console.log(item)
// })

// fs.appendFile(filePath,' and my file is a apple.txt',(err)=>{
// if(!err) console.log("file is updated")
// }) 

// Rename the file
// fs.rename(filePath, 'diyang.txt', (err) => {
//     if (err) {
//     console.error(err);
//     return;
//             }
// console.log('File name is updated');
// });



const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'crud');
const filePath = path.join(dirPath, 'apple.txt');


// Use the dirPath variable in CRUD operations
fs.writeFileSync(`${dirPath}/apple.txt`, 'This is a simple text file');
fs.unlinkSync(`${dirPath}/diyang.txt`);

console.log('CRUD operations completed!');















