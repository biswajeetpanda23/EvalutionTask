const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 4000;

// Middleware to parse JSON data from the request body
app.use(express.json());

// Path to the books.json file
const booksFilePath = path.join(__dirname, 'books.json');

// Helper function to read the books from the JSON file
const readBooks = () => {
  const data = fs.readFileSync(booksFilePath);
  return JSON.parse(data);
};

// Helper function to write the updated books data to the JSON file
const writeBooks = (books) => {
  fs.writeFileSync(booksFilePath, JSON.stringify(books, null, 2));
};

// POST API to add a new book
app.post('/books', (req, res) => {
  const { title, author, year, genre } = req.body;

  // Check if title, author, year, and genre are provided
  if (!title || !author || !year || !genre) {
    return res.status(400).json({ message: 'Title, author, year, and genre are required' });
  }

  // Read current books from the file
  const books = readBooks();

  // Create a new book object
  const newBook = {
    id: books.length + 1, // Simple ID generation
    title,
    author,
    year,
    genre
  };

  // Add the new book to the array
  books.push(newBook);

  // Write the updated array to the JSON file
  writeBooks(books);

  // Respond with the newly added book
  res.status(201).json(newBook);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
