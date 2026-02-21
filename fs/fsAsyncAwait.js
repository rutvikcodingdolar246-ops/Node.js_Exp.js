

const fs = require("fs").promises;   // ✅ Use promises
const path = require("path");

const fileName = "asyncFile.txt";
const filePath = path.join(__dirname, fileName);

// const filePath1 = __dirname;


// fs.promises

// .readdir(filePath1)
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

// const readFolder = async () =>{
//     try{
//     const rs = await fs.promises.readdir(filePath1)
//     console.log(rs);
    
//     }catch(error){
//         console.error(error);
        
//     }
// }
// readFolder();


 //* fsPromises.writeFile() : Writes data to a file asynchronously. If the file exists, it overwrites the content.
// //! syntax: fsPromises.writeFile(path, data, options);

// //? path: The file path to write to.
// //? data: The content to write to the file.
// //? options: Optional. Specifies encoding (e.g., 'utf8'), mode, or flags.

// const writeFileExample = async () => {
//     try {
//         await fs.writeFile(filePath, "This is the initial Data", "utf-8");
//         console.log("File created successfully!");
//     } catch (error) {
//         console.error(error);
//     }
// };

// writeFileExample();

//* Reading a File: fsPromises.readFile() : Reads the contents of a file asynchronously.
//! syntax: fsPromises. readFile(path, options);
//? path: The file path to read.
//? options: Optional. Can specify encoding (e.g., 'utf8') or return a Buffer if no encoding is provided.



// const readFileExample = async () =>{
//     try{
//    const rs =  await fs.readFile(filePath,"utf-8")
//     console.log(rs);
    
//     }catch(error){
//       console.error(error);
      
//     }
// }
// readFileExample();


// //* Appending Data: fsPromises.appendFile() : Adds content to the end of a file. If the file does not exist, it creates a new
// one.
// //! syntax: fsPromises.appendFile(path, data, options);

// //? path: The file path to read.
// //? options: Optional. Can specify encoding (e.g., 'utf8') or return a Buffer if no encoding is provided.



// const appendFileExample = async () =>{
//     try{
//  await fs.appendFile(filePath ,"\nthis data updated ","utf-8")
//      console.log("file is a updated successfully")
     
//     }catch(error){
//         console.error(error);
        
//     }
// }
// appendFileExample();


// const deleteFileExaple = async()=>{
//     try{
//    const rs =  await fs.unlink(filePath)
//    console.log(rs);
   
//     }catch(error){
//          console.error(error);
          
//     }

// }
// deleteFileExaple();          