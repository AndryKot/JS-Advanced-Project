'use strict';
var urlka= 'youtube.com';
function createGetFn(urlka) {
    return function () {
        return[urlka,'data', 'from', 'server'];
    }
}

var getMovies =createGetFn('/movies');
console.log(getMovies);

console.log(getMovies());
