(function () {
    function MovieListView(moviesArr){
        this.films = moviesArr;
        this.filmsContainer = document.createElement('div');
        this.filmsContainer.setAttribute('class', 'movie-section');
        this.counter = document.querySelector('.main-content');

        if (this.films.length > 1) {
            this.counter.textContent = this.films.length + ' items';
        }

        this.films.forEach(film => {
            var film = new window.MovieView(film);
            // this.filmsContainer.append(film.getElementById());
        });
    }
    MovieListView.prorotype ={
        render : function(container)
        {
            // this.filmsContainer = document.createElement('div');
            // this.filmsContainer.setAttribute('class', 'movie-section');
            // this.counter = document.querySelector('.main-content');
            //
            // if (this.films.length > 1) {
            //     this.counter.textContent = this.films.length + ' items';
            // }
            //
            // this.films.forEach(function(film){
            //     var film = new window.MovieView(film);
            //     this.filmsContainer.append(film.getElementById());
            // });
            //return document.body.append(this.movie_section);
            container.append(this.filmsContainer);
        }
    };
    window.MovieListView = MovieListView;
}());



