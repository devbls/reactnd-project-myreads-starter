import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import BooksList from '../../components/BooksList';

import './styles.css';
import BookShelfs from './BookShelfs';

export default function Home({ books, updateBooks, loadBooks }) {
  async function onHandleChange(event, book) {
    await updateBooks(book, event.target.value);

    loadBooks();
  }

  return (
    <div className="list-books">
      <Header />
      <div className="list-books-content">
        <BookShelfs books={books} handleChange={onHandleChange} />
      </div>
      <div className="open-search">
        <Link to="/search" />
      </div>
    </div>
  );
}
