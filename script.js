function firstWord(s) {
  // your code here
	let arr = s.split(" ");
	if(arr.length>0) return arr[0];
	else return '';
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
