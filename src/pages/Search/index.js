/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { search } from '../../services/BooksAPI';

import './styles.css';
import SearchList from './SearchList';

export default function Search({ booksOnShelf, updateBooks, loadBooks }) {
  const [books, setBooks] = useState([]);
  const [querySearch, setQuerySearch] = useState('');
  const [searchError, setSearchError] = useState(false);

  async function searchBooks(query) {
    if (query.length === 0) {
      setQuerySearch('');
      setBooks([]);
    } else {
      setQuerySearch(query);

      try {
        const response = await search(query);

        const filteredBooks = response.filter((item) =>
          booksOnShelf
            .filter((book) => book.id === item.id)
            .map((book) => (item.shelf = book.shelf))
        );

        console.log(filteredBooks);

        setBooks(filteredBooks);
        setSearchError(false);
      } catch (error) {
        setBooks([]);
        setSearchError(true);
      }
    }
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
        <SearchList
          searchError={searchError}
          books={books}
          handleChange={onHandleChange}
        />
      </div>
    </div>
  );
}
