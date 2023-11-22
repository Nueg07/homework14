import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from your API
    axios.get('http://localhost:3000/books')
      .then(response => setBooks(response.data.books))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}