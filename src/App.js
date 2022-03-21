import './App.css';
import React, { useEffect, useState } from 'react';
import Main from './views/Main/Main';
import { fetchFilms } from './services/films';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Films from './views/Films/films';
import { fetchBooks } from './services/books';
import Books from './views/Books/books';

function App() {
  const [films, setFilms] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    //fetchFilms page-load
    const fetchData = async () => {
      const data = await fetchFilms();
      setFilms(data);
      console.log('film data', data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    //fetchFilms page-load
    const fetchData = async () => {
      const data = await fetchBooks();
      setBooks(data);
      console.log('book data', data);
    };
    fetchData();
  }, []);

  console.log('films', films);
  console.log('books', books);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/main">
            <Main />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/books">
            <Books books={books} />
          </Route>
        </Switch>
        <Switch>
          <Route>{/* <Characters /> */}</Route>
        </Switch>
        <Switch>
          <Route exact path="/films">
            <Films movies={films} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
