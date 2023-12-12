// ! HTML Elements
var   quoteElement = document.getElementById('quote-text');
var   authorElement = document.getElementById('author');
// $ App Variables
var quotes = [
    {
      
      text: '“Be yourself; everyone else is already taken.”',
      author: '― Oscar Wilde'
    },
    {
      
      text:'“So many books, so little time.”',
      author: '― Frank Zappa'
    },
    {
      
      text:'“A room without books is like a body without a soul.”',
      author: '― Marcus Tullius Cicero'
    },
    {
      
      text:'“You only live once, but if you do it right, once is enough.”',
      author: '― Mae West'
    },
    {
      
      text:'“Be the change that you wish to see in the world.”',
      author: '― Mahatma Gandhi'
    },
    {
      
      text:'“In three words I can sum up everything I have learned about life: it goes on.”',
      author: ' ― Robert Frost'
    },
    {
      
      text:'“If you tell the truth, you donot have to remember anything.”',
      author: '― Mark Twain'
    },
  ];
// * Function

  function getRandomQuote() {
   var    randomIndex = Math.floor(Math.random() * quotes.length);
   
    var randomQuote = quotes[randomIndex];
  
    quoteElement.innerHTML = randomQuote.text;
    authorElement.innerHTML = "" + randomQuote.author;
    
    
  }
  