import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';

export default function Routes({ books, loadBooks, updateBooks }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              books={books}
              loadBooks={loadBooks}
              updateBooks={updateBooks}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Search
              booksOnShelf={books}
              loadBooks={loadBooks}
              updateBooks={updateBooks}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}
