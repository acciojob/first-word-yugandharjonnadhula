function firstWord(s) {
  // your code here
	const trimmedtr=s.trim();
	const words=trimmedtr.split(" ");
	return words.length > 0 ? words[0] : trimmedtr;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
