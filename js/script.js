/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * Here I created my Object of Arrays to contain all my quotes and their properties.
 * I decided to go with a theme for my Random Quote Generator which was Tarantino Movie Quotes! I'm a big fan :)
 * I added the director property for step 1 of Extra Credit. 
***/

const quotes = [
  {
    quote: 'I like the way you die, boy.',
    source: 'Django',
    citation: 'Django Unchained',
    year: '2012',
    director: 'Quentin Tarantino'
  },
  {
    quote: 'If my answers frighten you then you should cease asking scary questions.',
    source: 'Jules Winnfield',
    citation: 'Pulp Fiction',
    year: '1994',
    director: 'Quentin Tarantino'
  },
  {
    quote: 'Are you gonna bark all day, lil\' doggie, or are you gonna bite?',
    source: 'Mr. Blonde',
    citation: 'Reservior Dogs',
    year: '1992',
    director: 'Quentin Tarantino'
  },
  {
    quote: 'Now that, my friend, is a clear-cut case of him or me. And you best believe it ain\'t gonna be me.',
    source: 'Ordell Robbie',
    citation: 'Jackie Brown',
    year: '1997',
    director: 'Quentin Tarantino'
  },
  {
    quote: 'The man who pulls the lever that breaks your neck, will be a dispassionate man. And that dispassion, is the very essence of justice. For justice delivered without dispassion, is always in danger, of not being justice.',
    source: 'Oswaldo Mobray',
    citation: 'The Hateful Eight',
    year: '2015',
    director: 'Quentin Tarantino'
  },
];

/***
 * This is where I created my `getRandomQuote` function using the methods we learned from our Random Number Generator challenge.
 * I excluded the +1 from the end of the Math.floor equation since I was trying to generate a random number from 0 to quotes.length.
***/

function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomNumber];
  return randomQuote;
};

/*** 
 * This is my Background color function for step 2 of Extra Credit.
 * I decided to place this function before my printQuote function becuse I knew I was going to call it inside of that function.
 * I used the methods we learned from our Random Color Generator exercise.  
 ***/

function randomRGB() {
  red = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  RGB = "rgb(" + red + "," + blue + "," + green + ")";

  document.body.style.background = RGB;
  }

/***
 * Below is my setInterval function for step 3 of Extra Credit. I used some Google to find a little more info about how setInterval worked.
 * I found numerous methods on w3schools.com and I decided to store it in a variable and then write my printQuote function.
***/

const myTimer = setInterval(printQuote, 10000);

/***
 * Next up is my `printQuote` function. Inside I create a variable to store the random quote that will display.
 * Then I assign the code snippet provided in the instructions to another variable to display each property.
 * After that I used the final code snippet provided for use and set it equal to the previous variable.
 * Finally I call my randomRGB function to change background color every time the printQuote function runs.
 ***/

function printQuote() {
  const printRandomQuote = getRandomQuote();
  let html = `
<p class="quote"> ${printRandomQuote.quote} </p>
<p class="source"> ${printRandomQuote.source}
  <span class="citation"> ${printRandomQuote.citation} </span>
  <span class="year"> ${printRandomQuote.year} </span>
  <span class="director"> , directed by: <strong>${printRandomQuote.director}</strong> </span>
</p>
`
  document.getElementById('quote-box').innerHTML = html;
  randomRGB();
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);