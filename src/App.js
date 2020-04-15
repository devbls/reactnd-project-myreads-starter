import React, { useEffect, useState } from 'react';
import './App.css';

import { getAll, update } from './services/BooksAPI';

import Routes from './routes';

export default function BooksApp() {
  const [books, setBooks] = useState([]);

  async function loadBooks() {
    const response = await getAll();

    setBooks(response);

    return response;
  }

  async function updateBooks(book, shelf) {
    await update(book, shelf);
  }

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div className="app">
      <Routes books={books} loadBooks={loadBooks} updateBooks={updateBooks} />
    </div>
  );
}
