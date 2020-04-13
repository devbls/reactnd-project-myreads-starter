import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { search } from '../../services/BooksAPI';

import './styles.css';

export default function Search({ updateBooks, loadBooks }) {
  const [books, setBooks] = useState([]);
  const [querySearch, setQuerySearch] = useState('');

  async function searchBooks(query) {
    if (query === '') {
      setQuerySearch('');
      setBooks([]);
    } else {
      setQuerySearch(query);
    }

    const response = await search(query);

    setBooks(response);
  }

  async function onHandleChange(event, book) {
    await updateBooks(book, event.target.value);

    loadBooks();
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            value={querySearch}
            onChange={(e) => searchBooks(e.target.value)}
            type="text"
            placeholder="Search by title or author"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books !== undefined && books.length >= 1 ? (
            books.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${
                          book.imageLinks === undefined
                            ? null
                            : book.imageLinks.smallThumbnail
                        })`,
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select
                        value={book.shelf !== undefined ? book.shelf : 'none'}
                        onChange={(e) => onHandleChange(e, book)}
                      >
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                </div>
              </li>
            ))
          ) : (
            <div className="search-books-results">
              <h1>No results</h1>
            </div>
          )}
        </ol>
      </div>
    </div>
  );
}
