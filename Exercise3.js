
 
function currentDate() {
	
	var date = new Date();
	var MM = date.getMonth() + 1;
	var DD = date.getDate();
	var YYYY = date.getFullYear();
		document.write(MM + "/" + DD + "/" + YYYY);
}

