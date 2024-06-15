// quotes data
const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    quoter: "Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    quoter: "Walt Disney",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life.",
    quoter: "Steve Jobs",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    quoter: "Eleanor Roosevelt",
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    quoter: "Oprah Winfrey",
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    quoter: "James Cameron",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    quoter: "John Lennon",
  },
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    quoter: "Mother Teresa",
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    quoter: "Franklin D. Roosevelt",
  },
  {
    quote:
      "Always remember that you are absolutely unique. Just like everyone else.",
    quoter: "Margaret Mead",
  },
];
// DOM elements
const quoteEl = document.querySelector('.quote')
const personEl = document.querySelector('.person')
const btnEl = document.getElementById('new-quote')
console.log(quoteEl, personEl, btnEl);
 
// process
//create a function that picks a random quote from the array
// the function will recieve the array as an arg

// this function will take an array and return an object of quotes randomly selected
function quoteGenerator(arr){
    const arrLen = arr.length
    const random = Math.floor(Math.random()*arrLen)
    return arr[random]
}

//quote displayer
// call the quotegen function with the arr of quotes
//set the quoteEl text content with the quotegen quote and set the the personEl content with quoter
function quoteDisplay(){
    const quoteObj = quoteGenerator(quotes)
    quoteEl.textContent = quoteObj.quote
    personEl.textContent = quoteObj.quoter
}
quoteDisplay()
// add event listner to btnEl
btnEl.addEventListener('click', quoteDisplay)

