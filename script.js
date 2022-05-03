


const input = document.getElementById("movie-choice");
const listResult = document.getElementById("articlesList");
const searchMax = document.getElementById("totalSearch");
let page;
let pageMax;
let p = 2;
let a = 0;

const movieInit = () => {
    listResult.innerHTML = ""
    searchMax.innerHTML = "";



    fetch(`https://www.omdbapi.com/?s=${input.value}&apikey=${APIKey}`)
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            // console.log(value.Search);
            searchMax.innerHTML += `${value.totalResults} movies finded`;


            movieDisplayer(value);
            intObs(value);


        })
        .catch(function(err) {
            searchMax.innerHTML = "";
            searchMax.innerHTML = "no results";
            // Une erreur est survenue
        });

};






document.getElementById("lets search").addEventListener("click", movieInit)
