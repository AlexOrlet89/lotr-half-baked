export default function Films({ movies }) {
  console.log({ movies });
  console.log(movies);

  return (
    <div>
      Films
      <div>
        {movies.map((movie) => (
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
