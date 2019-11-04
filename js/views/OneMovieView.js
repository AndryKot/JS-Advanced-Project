(function () {
    function OneMovieView(id){
        this.id = id;
        this.movie_section = document.createElement('div');
        this.movie_section.className = "movie-section_view";
        this.film = movieList.getById(this.id);
        var movieHtml = `<div class="movie-section__poster">
                    <a href="https://image.tmdb.org/t/p/w300_and_h450_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" class="no_click-progres" data-sizes="auto">
                        <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" alt="${this.film.Title}">
                    </a>
                </div>
                <div class="movie-section__info">
                    <div class="wrapper">
                        <div class="flex">
                            <p><a class="titles" href="#">${this.film.Title}</a><span class="release_date">(${this.film.OpeningDate}) </span></p>
                            <p class="country">Country: <span>${this.film.country}</span></p>
                            <p class="duration">Runtime: <span>${this.film.RunTime}</span></p>
                            <p class="rating">Rating: <span>${this.film.Rating}</span> / 10</p>

                        </div>
                    </div>

                    <p class="overview_show"><b>Overview</b><br><br>${this.film.synopsis}</p>
                    <h3 class="featured" dir="auto">Featured Crew</h3>
                    <ol class="people-no_image">

                        <li class="profile">
                            <p><a href="#">${this.film.producerName}</a></p>
                            <p class="character">Director, Writer</p>
                        </li>

                        <li class="profile">
                            <p><a href="#">${this.film.actorsList}</a></p>
                            <p class="character">Actors:</p>
                        </li>
                        <li>
                            <button type="button" id="play-button" class="btn btn-promo btn-lg pl-4 pr-4 movie__trailer-button"><span>Watch trailer</span></button>
                            <button type="button" id="edit-button" data-popup-close class="btn btn-casual btn-lg pl-4 pr-4 movie__edit-button"><span>Edit</span>
                        </li>

                    </ol>
                </div>`;

        this.movie_section.insertAdjacentHTML('beforeend', movieHtml);
    }
    OneMovieView.prorotype ={
        render : function()
        {
            return this.movie_section;
        },
        renderModal : function () {
            var modal = new window.ModalView(this.render());
            modal.showModal();

            var editBtn = document.querySelector('#edit-button');

            editBtn.addEventListener('click', function (e) {
                e.preventDefault();

                var movie = new MovieEditView(this.movie);
                movie.renderModal();
            }.bind(this));
        }
    };
    window.OneMovieView = OneMovieView;
}());


