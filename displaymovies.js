const movieDisplayer = (value) => {
    (value.Search).forEach(movie => {
        listResult.innerHTML += `
        <div class="col-sm-4 divcard">
            <div class="card lvl2" id="${movie.imdbID}">
                <div class="card-body summerBody">
                    <img src="${movie.Poster}" alt="" class="moviePoster">
                    <p class="titleMovie">${movie.Title} - ${movie.Year}</p>
                </div>
            </div>
        </div>
        `
    });
    listResult.insertAdjacentHTML('beforeend', '<div id="endPage" class="salut"></div>')
    a = 1
}