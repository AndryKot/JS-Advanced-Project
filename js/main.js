var list = new window.MovieListView(moviesArr);
window.movieList.getAll(function(data) {
    movieListView.render(data, document.querySelector('.movielist-container'));
    window.movieListData = data;
});




//mov.render();






//
//
// movieList.searchMovieByTitle("ПОЛІНА І ТАЄМНИЦЯ КІНОСТУДІЇ");
// movieList.searchMovieById("HO00000205");
// // movieList.seeList();
// // movieList.deleteMovie("HO00000283");
// // movieList.addMovie(testmovie);
// // movieList.seeList();
// var film = new Movie(testmovie);

//console.log(film);
// console.log("============");
// console.log(movieList.sortByTitle());
// console.log("============");
//
// console.log("############");
// console.log(movieList.sortByReleaseYear());
// console.log("############");
//
// console.log("------------");
// console.log(movieList.sortByRating());
// console.log("------------");

// movieList.getByPopular();
//
// movieList.getPopularMovies();
//
// movieList.getUncomingMovies();
//
// movieList.getTopRatedMovies();




