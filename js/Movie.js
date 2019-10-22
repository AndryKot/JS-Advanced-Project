
function Movie(movie) {
    this.id = movie.ID ;
    this.title = movie.Title;
    this.rating = movie.Rating;
    this.releaseYear = movie.OpeningDate;
    this.genre = movie.GenreId;
    this.country = movie.SynopsisAlt;
    this.translation = movie.TwitterTag;
    this.duration = movie.RunTime;
    this.synopsis = movie.Synopsis;
    this.producerName = movie.producerName;
    this.actorsList = movie.actorsList;
    this.trailerUrl = movie.TrailerUrl;
}
Movie.prototype ={
    add: function (key, value) {
        this[key] = value;
    },
    edit: function (key, value) {
        this[key] = value;
    },
    remove: function (key) {
        delete this[key];
    }
};
