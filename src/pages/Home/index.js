import React from 'react';
import { Link } from 'react-router-dom';

import BookShelfs from './BookShelfs';
import Header from '../../components/Header';

import './styles.css';

export default function Home({ books, updateBooks, loadBooks }) {
  async function onHandleChange(event, book) {
    await updateBooks(book, event.target.value);

    loadBooks();
  }

  return (
    <div className="list-books">
      <Header />
      <BookShelfs books={books} handleChange={onHandleChange} />
      <div className="open-search">
        <Link to="/search" />
      </div>
    </div>
  );
}
