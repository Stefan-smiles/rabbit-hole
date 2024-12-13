const Film = ({
  title,
  id,
  overview,
  release_date,
  popularity,
  poster_path,
}) => {
  const IMAGES_API = "https://image.tmdb.org/t/p/w500/";
  return (
    <div key={id}>
      <h3>{title}</h3>
      <img src={IMAGES_API + poster_path} alt={title} />
      <p>{release_date}</p>
      <p>{popularity}</p>
      <p>{overview}</p>
    </div>
  );
};
export default Film;
