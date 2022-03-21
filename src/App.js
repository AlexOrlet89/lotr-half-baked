import './App.css';
import React, { useEffect, useState } from 'react';
import Main from './views/Main/Main';
import { fetchFilms } from './services/films';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Films from './views/Films/films';
import { fetchBooks } from './services/books';
import Books from './views/Books/books';
import { fetchCharacters } from './services/characters';
import Characters from './views/Characters/characters';

function App() {
  const [films, setFilms] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [race, setRace] = useState('All');

  useEffect(() => {
    //fetchFilms page-load
    const fetchData = async () => {
      const data = await fetchFilms();
      setFilms(data);
      // console.log('film data', data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    //fetchCharacters page-load
    const fetchData = async () => {
      const data = await fetchCharacters(`${race}`, '');
      setCharacters(data);
      console.log('character data', data);
    };
    fetchData();
  }, [race]);

  // console.log('films', films);
  // console.log('books', books);
  console.log('characters', characters);

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
            <Books />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/characters">
            <Characters characters={characters} race={race} setRace={setRace} />
          </Route>
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
