const quoteEl = document.getElementById('joke'); // Renamed for clarity
const quoteBtn = document.getElementById('jokeBtn');

quoteBtn.addEventListener('click', generateQuote);

generateQuote();

async function generateQuote() {
  const res = await fetch("https://type.fit/api/quotes");
  const data = await res.json(); 

  // Select a random quote
  const randomIndex = Math.floor(Math.random() * data.length);
  let randomQuote = data[randomIndex];

  // Robust filtering of "type.fit" at the end
  if (randomQuote.text.endsWith("type.fit")) {
    randomQuote.text = randomQuote.text.slice(0, -8); // Remove the last 8 characters 
  }

  quoteEl.innerHTML = randomQuote.text + (randomQuote.author ? " - " + randomQuote.author : ""); 
}
