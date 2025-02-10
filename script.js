var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Spotify%20Charts/Top%2050%20USA.csv"
var position = getColumn(url,1);
var songName = getColumn(url,2)
var artists = getColumn(url,3)
var popularity = getColumn(url,4)
console.log(position)

var genres = [
"R&B",
"Rap",
"Rap",
"Pop",
"Rap",
"Rap",
"R&B",
"Pop",
"Pop",
"Pop",
"R&B",
"R&B",
"R&B",
"Country",
"Pop",
"R&B",
"Country",
"R&B",
"Country",
"Pop",
"R&B",
"R&B",
"Rap",
"Rap",
"Country",
"Pop",
"R&B",
"Pop",
"Pop",
"Rap",
"Pop",
"Pop",
"R&B",
"R&B",
"Pop",
"Country",
"Rap",
"Country",
"Pop",
"R&B",
"R&B",
"Rap",
"Pop",
"Pop",
"Pop",
"Pop",
"Pop",
"R&B",
"Pop",
];

function setGenre(genre){
    //how you save information across two different pages
    sessionStorage.setItem("Genre", genre);
    console.log(sessionStorage.getItem("Genre"));
    location.replace("answer.html");
}



function getSongs(genre){
    var matches = [];
    for( var i = 0; i < genres.length; i++){
        if(genres[i] == genre && !matches.includes(artists[i])){
            matches.push(artists[i]);
        }
    }

    document.getElementById("results").innerHTML= matches.join("<br>");
}

