import React from 'react';

export default function Search({ searchError, books, handleChange }) {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {books !== undefined && books.length >= 1
          ? books.map((book) => (
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
                        onChange={(e) => handleChange(e, book)}
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
                  <div className="book-authors">
                    {book.authors ? book.authors.join(', ') : ''}
                  </div>
                </div>
              </li>
            ))
          : null}
        {searchError ? (
          <div className="bookshelf">
            <h1>No books found.</h1>
          </div>
        ) : null}
      </ol>
    </div>
  );
}
