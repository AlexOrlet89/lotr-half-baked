import './App.css';
import Main from './views/Main/Main';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Films from './views/Films/films';
import Books from './views/Books/books';
import Characters from './views/Characters/characters';

function App() {
  // console.log('films', films);
  // console.log('books', books);

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
            <Characters />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/films">
            <Films />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
