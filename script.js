/*
EXERCICE OCR : https://openclassrooms.com/fr/courses/5543061-ecrivez-du-javascript-pour-le-web/5577591-recuperez-des-donnees-dun-service-web


script : 

const div = document.getElementById("hello-result");


const askHello = () => {
    fetch("https://mockbin.com/request?greetings=salut")
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            console.log(value);
            div.innerHTML = `${value.queryString.greetings}`
        })
        .catch(function(err) {
            // Une erreur est survenue
        });

};


document.getElementById("ask-hello").addEventListener("click", askHello)


const filmApi = () => {
    fetch("http://www.omdbapi.com/?apikey=[9b882dd0]&")
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            console.log(value);
            // div.innerHTML = `${value.queryString.greetings}`
        })
        .catch(function(err) {
            // Une erreur est survenue
        });

};

filmApi();
*/


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



    fetch(`http://www.omdbapi.com/?s=${input.value}&apikey=${APIKey}`)
        //fetch(`http://www.omdbapi.com/?s=${input.value}&apikey=${APIKey}&page=1`)
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