(function () {
    function Movie(options) {
        this.id = options.ID;
        this.title = options.Title;
        this.rating = options.Rating;
        this.releaseYear = options.OpeningDate;
        this.genre = options.GenreId;
        this.country = options.SynopsisAlt;
        this.translation = options.TwitterTag;
        this.duration = options.RunTime;
        this.synopsis = options.Synopsis;
        this.producerName = options.producerName;
        this.actorsList = options.actorsList;
        this.trailerUrl = options.TrailerUrl;
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
    window.Movie = Movie;
}());


