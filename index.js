const productNameElement = document.getElementById("productName");
const charactersLeftElement = document.getElementById("charactersLeft");

// let maxAllowedCharacters = parseInt(productName.attributes[3].value);
const maxAllowedCharacters = productNameElement.maxLength;

//! NOTE--1.0 Why we can use const for enteredTextLength? -> This function executes for every key stroke. Once it's done executing all the variables created during the execution and that are stored in memory, because that is where the variables are stored, they are stored in your computers memory. All those variables are THROWN AWAY and DELETED once the execution finishes. Which means that when the function executes the next time for another keystroke, a brand new variables are created. Yes they have the same names as before but they occupy a new part of the computers memory.
const updateRemainingCharacters = (event) => {
  const enteredTextLength = event.target.value.length;

  charactersLeftElement.innerText = maxAllowedCharacters - enteredTextLength;
  if (maxAllowedCharacters - enteredTextLength < 10) {
    charactersLeftElement.classList.add("less-than-10-words");
    productNameElement.classList.add("less-than-10-words");
  } else {
    charactersLeftElement.classList.remove("less-than-10-words");
    productNameElement.classList.remove("less-than-10-words");
  }
};

productNameElement.addEventListener("input", updateRemainingCharacters);
