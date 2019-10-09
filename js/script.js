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
// Store indecises
let randomIndex, prevIndex;

// Add a listener to the document and load the first quote on load
document.addEventListener("DOMContentLoaded", printQuote, false);

// Add a click listener to the loadQuote button, and on click, call printQuote
loadQuote.addEventListener("click", printQuote, false);


// getRandomQuote generate a random number and returns the quote object at that index
function getRandomQuote(){
	// Generate a random number between 0 and 4, while ensuring that we don't repeat the same number twice in a row
	do {
		randomIndex = Math.floor(Math.random() * 5);
	} while (prevIndex === randomIndex);
	// Set prevIndex to randomIndex in preparation for next call
	prevIndex = randomIndex;
	// Return a quote at randomIndex
	return quotes[randomIndex];
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

// fade uses the web animation API to transition an element from a beginning opacity to an end opacity over a given length of time
function fade(elem, begin, end, duration, time){
	console.log('fade starts at: ', Date.now() - time, 'and the starting opacity is: ', begin)
	elem.animate([
		{opacity: begin},
		{opacity: end}
	], {
		duration: duration
	});
}


// printQuote adds the generated html to the quote box, replacing its prev contents
function printQuote(){
	let time = Date.now()
	console.log('button fires at: ', Date.now() - time)

	// Generate quote when the user clicks the button
	const generatedQuote = generateQuoteHTML();

	// Animation duration
	let duration = 400;

	// Fade out the previous quote 
	fade(quoteBox, 1, 0, duration, time); 
	// Wait for the fade out to take place and only then swap in the new quote
	setTimeout(()=>{
		console.log('quote replace at: ', Date.now() - time)
		insertHTML();
		// Fade in the new quote
		fade(quoteBox, 0, 1, duration, time);
	}, duration - 10);

	// insertHTML replaces quoteBox's innerHTML with the innerHTML of the new quote
	function insertHTML() {
		// Insert the new quote
		quoteBox.innerHTML = generatedQuote;
	}	
}

