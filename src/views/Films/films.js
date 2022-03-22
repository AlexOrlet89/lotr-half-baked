import { useEffect, useState } from 'react';
import { fetchFilms } from '../../services/films';

export default function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    //fetchFilms page-load
    const fetchData = async () => {
      const data = await fetchFilms();
      setFilms(data);
      // console.log('film data', data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Films</h1>
      <div>
        {films.map((movie) => (
          <h4 key={movie.title}>{movie.title}</h4>
          //   <h4 key={movie.academy}>{movie.academy}</h4>
          //   <h4 key={movie.id}>{movie.title}</h4>
          //   <h4 key={movie.id}>{movie.title}</h4>
          //   <h4 key={movie.id}>{movie.title}</h4>
        ))}{' '}
      </div>
    </div>
  );
}
