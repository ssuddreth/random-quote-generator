let button = document.getElementById('button');

let output = document.getElementById('output');

let quote = [
    '"Let me tell you this: I wouldn\'t bet on you."', 
    '"So, better luck next time."',
    '"Eh. Perhaps in a past life you did something terrible to somebody."',
    '"Well, I hope you have somebody to carry on your family name."',
    '"So, you think you\'re getting out of here?"',
    '"Uh. It won\'t go well. It won\'t go well at all."',
    '"Believe me when I tell you I wouldn\'t want to be in your shoes."',
    '"Darling, just close your eyes and hope it\'s over quickly."',
    '"Look at the bright side: maybe it\'ll be quick and painless."',
];

button.addEventListener('click', function() {
    var randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;
})