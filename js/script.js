/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Quotes array
const quotes = [
	{
		quote: 'I may not have gone where I intended to go, but I think I have ended up where I needed to be.',
		source: 'Douglas Adams',
		citation: 'The Long Dark Tea-Time of the Soul',
		year: '1988'
	},
	{
		quote: 'I love deadlines. I love the whooshing noise they make as they go by',
		source: 'Douglas Adams',
		citation: 'The Salmon of Doubt',
		year: '2002'
	},
	{
		quote: 'The story so far: In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.',
		source: 'Douglas Adams',
		citation: 'The Restaurant at the End of the Universe',
		year: '1980'
	},
	{
		quote: 'Let\'s think the unthinkable, let\'s do the undoable. Let us prepare to grapple with the ineffable itself, and see if we may not eff it after all.',
		source: 'Douglas Adams',
		citation: 'Dirk Gentley\'s Holistic Detective Agency',
		year: '1987'
	},
	{
		quote: 'For a moment, nothing happened. Then, after a second or so, nothing continued to happen.',
		source: 'Douglas Adams',
		citation: 'The Hitchhiker\'s Guide to the Galaxy',
		year: '1979'
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
