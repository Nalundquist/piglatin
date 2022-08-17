// Business Logic
function firstVowel(e) {
  //make a for statement that would go down the line of the word and stop when we hit a vowel
 //for (i=0; i < e.length; i++) {
		if (e[0] === "q" && e[1] === "u") {
			let quString = ""
			for (i=2; i < e.length; i++) {
			  quString = quString.concat(e[i])
			}
			quString = quString.concat("quay")
			return quString;
		} else if (e[0] === "a" || e[0] === "e" || e[0] === "i" || e[0] === "o" || e[0] === "u") {
        let vString = ""
        for (i=0; i < e.length; i++) {
          vString = vString.concat(e[i]);
        }
        vString = vString.concat("way")
        return vString
    } else {
      let x
      for (i=0; i <e.length; i++) {
        if (e[i] === "a" || e[i] === "e" || e[i] === "i" || e[i] === "o" || e[i] === "u") {
          x = i
          break
        }
      }
      let cString = ""
      for (i=x; i < e.length; i++) {
        cString = cString.concat(e[i]);
      }
      for (i=0; i < x; i++) {
        cString = cString.concat(e[i]);
      }
      cString = cString.concat("ay")
      return cString

		}
  }
	// return "no vowels"


//}
//(e[i] === "a" || e[i] === "e" || e[i] === "i" || e[i] === "o" || e[i] === "u")


function pLTranslator(e){
	let pLSplit = e.split(" ");
  vTester = []
  pLSplit.forEach(function(e) {
    vTester.push(firstVowel(e))
  })
  return vTester;
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


