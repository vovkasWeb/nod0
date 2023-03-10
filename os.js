/** @format */

const os = require("os");
const cluster = require("cluster");
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);
// if (cluster.isMaster) {
//   for (let i = 0; i < os.cpus().length - 2; i++) {
//    cluster.fork();
//   }
//   cluster.on('exit',(worker,code,signal)=>{
// 	console.log(`Воркер с pin = ${worker.process.pid} умер`)
// 	if(code ===){
// 	cluster.fork()
// 	}else{
// 		console.log('Воркер умер....')
// 	}
//   })
// } else {
// 	console.log(`Воркер с pin = ${process.pid} запущен`)
// setInterval(()=>{
// 	console.log(`Воркер c pid= ${process.pid} eщё работает`)
// },5000)
// }
// const cpus = os.cpus();

// for (let i = 0; i < cpus.length - 2; i++) {
//   const CPUcore = cpus[i];
//   console.log("Запустить ещё одно поле js процессора");
// }

// console.log(process.pid);
