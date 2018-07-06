let add= function(x,y){
	return x+y;
}

let multiply= function(x,y){
	return x*y;
}

let calc = function(x,y,callback){

	return callback(x,y);

}


console.log(calc(2,3,add));
