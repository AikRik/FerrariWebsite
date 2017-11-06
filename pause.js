function pause(ms){
	var dt= new Date();
	while((new Date()) - dt <= ms){

	}
}

console.log("first")

pause(1000)
console.log("seccond")