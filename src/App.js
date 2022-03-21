import './App.css';
import React from 'react';
import Main from './views/Main/Main';
import { fetchFilms } from './services/films';
import { BrowserRouter } from 'react-router-dom';

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
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
