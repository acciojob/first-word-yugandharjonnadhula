function firstWord(s) {
  // your code here
	const trimmedstr=str.trim();
	const words=trimmedstr.split(" ");
	return words.length > 0 ? words[0] : trimmedstr;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
