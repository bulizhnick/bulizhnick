import React from 'react';
import { Link } from '@reach/router';
import { Routes } from 'config/routes';

const AppComponent = () => (
  <>
    <header>
      <Link to="/">Домашняя</Link>
      <Link to="/books">Коллекция</Link>
      <Link to="/books/123">Книга</Link>
      <Link to="/books/add">Новая книга</Link>
      <Link to="/users/profile">Профиль</Link>
    </header>
    <main>
      <Routes />
    </main>
    <footer>Футер</footer>
  </>
);

export { AppComponent };
