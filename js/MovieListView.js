function MovieListView(moviesArr){
    this.films = moviesArr;
    this.films.forEach(function(movie){
        let see = new MovieView(movie);
    });


}
MovieListView.prorotype ={
    render : function()
    {
        return document.body.append(this.movie_section);
    }
};