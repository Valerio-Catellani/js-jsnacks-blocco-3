const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const response = document.getElementById("response");







sendButton.addEventListener('click', function () {
    let i = 0;
    while (i < userInput.value) {
        generateArray(i);
        i++;
    }

})

function generateArray(number) {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(getRndInteger(1, 100))
    }
    console.log(array);
    response.innerHTML += `<p>L'array numero ${number + 1} è : [${array}]</p>`
    return array
}
