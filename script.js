
// Function to display messages in the chatbox
function displayMessage(sender, message) {
    const chatbox = document.getElementById("chatbox");
    const newMessage = document.createElement("div");
    newMessage.textContent = sender + ": " + message;
    chatbox.appendChild(newMessage);
}

// Function to handle user input and display messages
function sendMessage() {
    const userInput = document.getElementById("userInput");
    const userMessage = userInput.value.trim();
    if (userMessage !== "") {
        displayMessage("You", userMessage);
    }
    userInput.value = "";
}



