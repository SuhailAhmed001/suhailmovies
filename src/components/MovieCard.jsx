import React from "react";

const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) => {
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : "/np-movies.png";

  return (
    <div className="movie-card bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-auto" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p>Rating: {vote_average}</p>
        <p>Release Date: {release_date}</p>
        <p>Language: {original_language.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default MovieCard;
