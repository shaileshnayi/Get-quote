// Get the elements from the DOM
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteButton = document.getElementById("New-quote");
const tweetQuoteButton = document.getElementById("tweet-quote");

// Fetch quotes from the API
function fetchQuotes() {
  fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Select a random quote from the data
      const randomIndex = Math.floor(Math.random() * data.length);
      const quote = data[randomIndex];

      // Update the quote text and author in the DOM
      quoteText.textContent = quote.text;
      quoteAuthor.textContent = quote.author || "Unknown";
    })
    .catch(function(error) {
      console.log("Error fetching quotes:", error);
    });
}

// Tweet the current quote
function tweetQuote() {
  const tweetText = `${quoteText.textContent} - ${quoteAuthor.textContent}`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    tweetText
  )}`;
  window.open(tweetUrl);
}

// Event Listeners
newQuoteButton.addEventListener("click", fetchQuotes);
tweetQuoteButton.addEventListener("click", tweetQuote);

// Initial Quote display
fetchQuotes();
