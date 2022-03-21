import './App.css';
import React, { useEffect, useState } from 'react';
import Main from './views/Main/Main';
import { fetchFilms } from './services/films';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Films from './views/Films/films';

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    //fetchFilms page-load
    const fetchData = async () => {
      const data = await fetchFilms();
      setFilms(data);
      console.log('data', data);
    };
    fetchData();
  }, []);

  console.log('films', films);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/main">
            <Main />
          </Route>
        </Switch>
        <Switch>
          <Route>{/* <Books /> */}</Route>
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
