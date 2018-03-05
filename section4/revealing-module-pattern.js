var message = 'Hello I\'m greet';

function showMessage() {
    console.log(message);
}

function editMessage(newMessage) {
    message = newMessage;
}

module.exports = {
    showMessage: showMessage,
    editMessage: editMessage
}
