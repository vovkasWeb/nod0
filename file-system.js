const fs = require('fs');

const path = require('path');

// fs.mkdirSync(path.resolve(__dirname,'dir','die2','dir3'),{recursive:true})

// console.log('Started')
// fs.mkdir(path.resolve(__dirname, "dir"), (err)=>{
// if(err){
// 	console.log(err);
// 	return;
// } 
// console.log('папка создана');
// });
// console.log("end");

// fs.rmdir(path.resolve(__dirname,'dir'),(err)=>{
// 	if(err){
// 		throw err;
// 	}
// })

// fs.writeFile(path.resolve(__dirname,'tesxt.txt'),'jkjkjkjklk',(err)=>{
// 	if(err){
// 		throw err;
// 	}
// 	console.log('файл записан');
// })

// fs.appendFile(path.resolve(__dirname, "tesxt.txt"), " 202020020202002", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("файл записан");
// });


// const writeFileAnsync = async (path,data)=>{
// return new Promise((resolve, reject) =>
//   fs.writeFile(path,data, (err) => {
//     if (err) {
//       return reject(err.message);
//     }
//     resolve();
//   })
// );
// }


// const appendFileAsync = async (path,data) => {
//   return new Promise((resolve, reject) =>fs.appendFile(path,data), (err) => {
//       if (err) {
//         return reject(err.message);
//       }
//       resolve();
//     })
// 	}

// 	writeFileAnsync(path.resolve(__dirname,'text.txt'),'data')
// 	.then(()=>appendFileAsync(path.resolve(__dirname,'text.txt'),'1234'))
// 	.catch(err => console.log(err));

// const text = process.env.TEXT || 'jkjjkjj lklkkllklk klkllklk klkkl';

// fs.writeFileAsync(path.resolve(__dirname, "text.txt"), text)
//   .then(() => fs.readFileASync(path.resolve(__dirname, "text.txt")))
//   .then((data) => data.split(" "), length)
//   .then((count) =>
//     writeFileAsync(path.resolve(__dirname, "count.txt"), `Кол-во слов ${count}`)
//   );