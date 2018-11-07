import React from 'react';
import { Router } from '@reach/router';
import { Catalog } from 'components/Catalog/Catalog';
import { Book } from 'components/Book/Book';
import { Profile } from 'components/Profile/Profile';
import { AddNewBook } from 'components/AddNewBook/AddNewBook';
import { NotFound } from 'components/NotFound/NotFound';

export const Routes = () => (
  <Router>
    <Catalog path="/" />
    <Catalog path="books" />
    <AddNewBook path="books/add" />
    <Book path="books/:id" />
    <Profile path="users/profile" />
    <NotFound default />
  </Router>
);
