let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");
let txtOutput = document.querySelector("#txt-output");

let serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

const getTranslationURL = (text) => {
  return serverURL + "?" + "text=" + text;
};

const errorHandler = (error) => {
  console.log("Error occured ", error);
};

let a = "dont click twice";
const clickEventHandler = () => {
  fetch(getTranslationURL(txtInput.value))
    .then((response) => response.json())
    .then((json) => (txtOutput.innerText = json.contents.translated))
    .catch(errorHandler);
};

btnTranslate.addEventListener("click", clickEventHandler);
