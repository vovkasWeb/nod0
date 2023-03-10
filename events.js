const Emitter =require('events');

const emitter = new Emitter();

//emitter.once для гинераци одного раза 
emitter.on('message',(data,second,third)=>{
	console.log('вы прислали собщение ' + data);
	console.log('второй аргумент' +second);
})

const MESSAGE = process.env.message || '000';
if(MESSAGE){
	emitter.emit('message',MESSAGE, 123)
}else{
	emitter.emit("message",'Вы не указали сообщение');
}