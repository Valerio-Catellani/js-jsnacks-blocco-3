
//input
const userInput = document.getElementById("user-input");
//buttons
const sendButton = document.getElementById("send-button");
const cancelButton = document.getElementById("cancel-button");
//outout
const response = document.getElementById("response");







sendButton.addEventListener('click', function () {
    if (!isNaN(userInput.value)) {
        response.innerHTML = "";
        let i = 0;
        while (i < userInput.value) {
            generateArray(i);
            i++;
        }
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

cancelButton.addEventListener('click', function () {
    response.innerHTML = "";
})
