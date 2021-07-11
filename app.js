var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("Error occured ", error);
}

var a = "dont click twice";
function clickEventHandler(){
    fetch(getTranslationURL(txtInput.value))
    .then(response => response.json())
    .then(json => txtOutput.innerText = (json.contents.translated))
    .catch(errorHandler)

};

btnTranslate.addEventListener("click" , clickEventHandler);