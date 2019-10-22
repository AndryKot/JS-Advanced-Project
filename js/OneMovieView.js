
function OneMovieView(film){
    this.film = film;
    this.movie_section = document.createElement('div');
    this.movie_section.className = "movie-section_view";
    this.movie_section.innerHTML = `<div class="movie-section__poster">
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


                    </ol>
                </div>`;

    document.querySelector("body > div > main > div.main-content").insertAdjacentElement("afterbegin",this.movie_section);
}
OneMovieView.prorotype ={
    render : function()
    {
        return document.body.append(this.movie_section);
    }
};

