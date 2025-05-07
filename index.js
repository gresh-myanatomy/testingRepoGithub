
const button = document.getElementById('changeTextButton');
const message = document.getElementById('message');

// Change the message text when the button is clicked
button.addEventListener('click', function() {
  message.textContent = "You clicked the button! ð";
});
