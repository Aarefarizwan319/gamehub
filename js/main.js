export const quotes = [
  "Stories are the wildest things of all. — Patrick Ness",
  "A single dream is more powerful than a thousand realities. — J.R.R. Tolkien",
  "The world is shaped by two things — stories told and the memories they leave behind. — Vera Nazarian",
  "Imagination is the only weapon in the war against reality. — Lewis Carroll",
  "There is no friend as loyal as a book. — Ernest Hemingway",
  "Every great story seems to begin with a snake. — Nicolas Cage",
  "You can make anything by writing. — C.S. Lewis"
];

export function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}