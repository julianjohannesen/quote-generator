/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Quotes array
const quotes = [
	{
		quote: 'quote 1',
		source: 'person 1',
		citation: '',
		year: ''
	},
	{
		quote: 'quote 2',
		source: 'person 2',
		citation: '',
		year: ''
	},
	{
		quote: 'quote 3',
		source: 'person 3',
		citation: '',
		year: ''
	},
	{
		quote: 'qoute 4',
		source: 'person 4',
		citation: 'place 4',
		year: '2019'
	},
	{
		quote: 'quote 5',
		source: 'person 5',
		citation: '',
		year: ''
	}
];

// Getting references to needed DOM elements
const quoteBox = document.getElementById('quote-box');
const loadQuote = document.getElementById('loadQuote');

let randomNum, prev;

// getRandomQuote generate a random number and returns the quote object at that index
function getRandomQuote(){
	// Generate a random number between 0 and 4, while ensuring that we don't repeat the same number twice in a row
	do {
		randomNum = Math.floor(Math.random() * 5);
	} while (prev === randomNum);
	// Set prev to randomNum in preparation for next call
	prev = randomNum;
	// Return a quote at that index
	return quotes[randomNum];
}

// generateQuoteHTML returns an html string containing a quote, source, and possibly citation and year
// Note: I've separated the process of building the html from the process of adding it to the DOM, so rather than creating an html variable, I'm returning the html string.
function generateQuoteHTML(){
	const quote = getRandomQuote();
	// Note: I'm using string interpolation, so the ternary operators are included in the string, rather than using if statements
	return `
		<p class="quote">${quote.quote}</p>
		<p class="source">${quote.source}
		<span class="citation">${quote.citation ? ', ' + quote.citation : ''}</span>
		<span class="year">${quote.year ? ', ' + quote.year : ''}</span>
		</p>
	`;
}

// printQuote adds the generated html to the quote box, replacing its previous contents
function printQuote(){
	// Note: Setting text content with innHTML is not recommended. It's preferable to get a reference to each paragraph or span and set its textContent
	quoteBox.innerHTML = generateQuoteHTML();
}

// Add a click listener to the loadQuote button, and on click, call printQuote
loadQuote.addEventListener("click", printQuote, false);

// Add a listener to the document and load the first quote on load
document.addEventListener("DOMContentLoaded", printQuote, false);
