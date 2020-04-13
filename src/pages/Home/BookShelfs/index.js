import React from 'react';

export default function BookShelfs({ books, handleChange }) {
  const shelves = ['currentlyReading', 'wantToRead', 'read'];
  const shelveNames = ['Currently Reading', 'Want To Read', 'Read'];

  return (
    <div className="list-books-content">
      <div>
        {shelves.map((shelf, index) => (
          <div key={index} className="bookshelf">
            <h2 className="bookshelf-title">{shelveNames[index]}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books
                  .filter((book) => book.shelf === shelf)
                  .map((book) => (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
                            }}
                          />
                          <div className="book-shelf-changer">
                            <select
                              value={
                                book.shelf !== undefined ? book.shelf : 'none'
                              }
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
                          {book.authors.join(', ')}
                        </div>
                      </div>
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
