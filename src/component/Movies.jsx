import { Movie } from "./Movie";

function Movies(props) {
  const { movies } = props;

  return (
    <div className="list">
      {movies.map((movie) => (
        <Movie {...movie} />
      ))}
    </div>
  );
}
export { Movies };
