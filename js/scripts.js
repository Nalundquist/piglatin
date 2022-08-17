// Business Logic
function firstVowel(e) {
  //make a for statement that would go down the line of the word and stop when we hit a vowel
  for (i=0; i < e.length; i++) {
    if (e[i] === "a" || e[i] === "e" || e[i] === "i" || e[i] === "o" || e[i] === "u") {
      return e[i]
    } else {
      return "no vowels"
    }
  }


}


function pLTranslator(e){
	let pLSplit = e.split(" ");
  vTester = []
  pLSplit.forEach(function(e) {
    vTester.push(firstVowel(e))
  })
  return pLSplit;
}

// User Interface Logic
function submitHandler(event) {
  event.preventDefault();
	const pLInput = document.getElementById("inputPigLatin").value;
	const pLOutput = pLTranslator(pLInput);
	const p = document.createElement("p");
	const div = document.querySelector("div#pLOutput");
  console.log("p: " + typeof(p) + "div: " + typeof(div) + "pLInput: " + typeof(pLInput) + "pLOutput: " + typeof(pLOutput));
	div.append(p);
	p.append(pLOutput)
}

//


window.addEventListener("load", function() {
  document.getElementById("pLForm").addEventListener("submit", submitHandler);
  console.log("page load function worked");
});


