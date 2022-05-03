// const displayOtherPages = (p, pageMax) => {

//     page = (pageMax - pageMax) + p;
//     console.log("displayOtherPages : page");
//     console.log(page);
//     newPage(page);
//     p++;
// }


const newPage = (page, p) => {
    fetch(`https://www.omdbapi.com/?s=${input.value}&apikey=${APIKey}&page=${page}`)
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            console.log("t'es dans new page")
            console.log(`page = ${page}`)
            console.log(`p = ${p}`)
            movieDisplayer(value);
            p = p + 1;
            // value.totalResults = totalResults - 10;
            intObs2(p);
        })
        .catch(function(err) {
            //
        });
}
