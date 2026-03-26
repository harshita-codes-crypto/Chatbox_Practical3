function sendMessage() {
    let input = document.getElementById("user-input");
    let message = input.value;

    if (message === "") return;

    let chatBox = document.getElementById("chat-box");

    // Show user message
    chatBox.innerHTML += "<p class='user'>You: " + message + "</p>";

    // Bot reply
    let reply = getBotReply(message);
    chatBox.innerHTML += "<p class='bot'>Bot: " + reply + "</p>";

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(message) {
    message = message.toLowerCase();

    if (message.includes("hello") || message.includes("hi")) {
        return "Hello! 😊";
    } 
    else if (message.includes("how are you")) {
        return "I'm fine! How can I help you?";
    } 
    else if (message.includes("bye")) {
        return "Goodbye! 👋";
    } 
    else {
        return "Sorry, I don't understand.";
    }
}