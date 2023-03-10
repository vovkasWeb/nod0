const path = require('path');

console.log("Cкленить участки пути", path.join(__dirname,"..",'..'));
const fullpath = path.resolve(__dirname,'first','second.js');
console.log('Парсинг пути',path.parse(fullpath));
console.log('paзделить в OC',path.sep)
console.log('Проверка на абсалютый путь',path.isAbsolute(fullpath));
// сonsole.log("названеия файла", path.basename(fullpath));
// console.log("розшерения файла",path.extname(fullpath))

//---------------------

const siteUrl = 'http://localhost:8080/users?id=5123';
const url = new URL(siteUrl);
console.log(url);