import React from 'react';
import MovieCard from './MovieCard';

function MovieCardsList (props) {
    const usersByMovie = {};

    props.profiles.forEach(profile => {
      const movieID = profile.favoriteMovieID;

      if (usersByMovie[movieID]) {
        usersByMovie[movieID].push(profile.userID);
      } else {
        usersByMovie[movieID] = [profile.userID];
      }
    });

    const movieCards = Object.keys(props.movies).map(id => (
      <MovieCard
        key={id}
        users={props.users}
        usersWhoLikedMovie={usersByMovie[id]}
        movieInfo={props.movies[id]}
      />
    ));

    /*
    Return JSX
    */
    return <ul>{movieCards}</ul>;
}

export default MovieCardsList;
