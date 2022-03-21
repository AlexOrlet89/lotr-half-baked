import './App.css';
import React from 'react';
import Main from './views/Main/Main';
import { fetchFilms } from './services/films';
import { BrowserRouter, Switch } from 'react-router-dom';

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    //fetchFilms page-load
    const fetchData = async () => {
      const data = await fetchFilms();
      setFilms(data);
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route>
            <Main />
          </Route>
        </Switch>
        <Switch>
          <Route>
            <Books />
          </Route>
        </Switch>
        <Switch>
          <Route>
            <Characters />
          </Route>
        </Switch>
        <Switch>
          <Route>
            <Films />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
