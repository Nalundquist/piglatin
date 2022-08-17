description: pLTranslator(text)

test: takes text and returns a result
code: const text = "I am TEXT";
pLTranslator(text);
expected output = "I am TEXT"

test: break up the text into an array for later testing
code:
const text = "I am TEXT";
pLTranslator(text);
expected output: ["I", "am", "TEXT"]



Describe: firstVowel(text)

test: determine the first vowel in each word
code:
const text = "apple banana water bloom"
pLTranslator(text);
expected output: [a, a, a, o]