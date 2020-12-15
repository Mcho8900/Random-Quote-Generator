$( document ).ready(function() {
var quote= ["Your limitation—it’s only your imagination. ","Push yourself, because no one else is going to do it for you. ","Great things never come from comfort zones. ", "Dream it, Wish it, Do it. ","Wake up with determination, Go to bed with satisfaction. ", "Sometimes we’re tested not to show our weaknesses, but to discover our strengths. ", "Success doesn’t just find you, You have to go out and get it. "];

console.log(quote.length);

$(".quotes").click(function() {

   var randomQuote= Math.floor(Math.random() * quote.length);



$('.target').text (quote[randomQuote] + " ");

    
    
});

   


console.log(quote[0]);
console.log(quote[1]);
console.log(quote[2]);
console.log(quote[3]);
console.log(quote[4]);
console.log(quote[5]);
console.log(quote[6]);
});


