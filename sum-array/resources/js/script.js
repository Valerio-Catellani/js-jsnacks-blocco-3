const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const response = document.getElementById("response");




let array = [];

let sum = 0;
while (sum < 50) {
    let promptInput = parseInt(prompt("inserisci un numero"))
    if (!isNaN(promptInput)) {
        array.push(promptInput);
        sum += promptInput;
    }
}
response.innerHTML += `I numeri inseriti sono [${array}]. La loro somma vale ${sum}`





// sendButton.addEventListener('click', function () {
//   let number = parseInt(userInput.value);
//   array.push(number)
//   while()
// })

// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.


