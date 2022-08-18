const textArea = document.querySelector("textarea");

textArea.addEventListener('input', function (){

    const characterValue = textArea.value.length;
    document.getElementById("result").innerHTML = (characterValue) + " caracteres";

})