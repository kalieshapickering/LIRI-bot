require("dotenv").config();
var fs = require("fs")
var moment = require("moment");
var request = require("request");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);


var programRun= process.argv[2]
var action = process.argv[3]

switch (programRun){
    case "concert-this":
    concert(action);
    break;
    case "spotify-this-song":
    spotifySong(action);
    break;
    case "movie-this":
    movie(action);
    break;
    case "do-what-it-says":
    doWhatItSays(action);
    break;
    default:
    console.log("that is not a valid command! Try again!");
}

function spotifySong(song){
    if (song){
        var query = song
    } else{
        var query = "The Sign"
    }
    spotify.search({ type: 'track', query: query }, function(err, data){
        if (err) throw err;
        console.log("Artists: " + data.tracks.items[0].artists[0].name);
        console.log("Track Name: " + data.tracks.items[0].name);
        console.log("Spotify Link: " + data.tracks.items[0].external_urls.spotify);
        console.log("Album: " + data.tracks.items[0].album.name);

    });
};

function movie(title){
    request("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy", function (err, res, body){
        if (err || res.statusCode !== 200) {
            console.log(err)
        } else {
            var body = JSON.parse(body);
            console.log("Movie Title: " + body.Title);
            console.log("Year Movie Released: " + body.Year);
            console.log("Rotten Tomates Rating: " + body.Ratings[1].Value);
            console.log("IMDB Rating: " + body.imdbRating);
            console.log("Orign: " + body.Country);
            console.log("Language: " + body.Language);
            console.log("Movie Plot: " + body.Plot);
            console.log("Actors: " + body.Actors);
        }
    });
};

function concert(artist){
    request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function (err, res, body){
        if (err) throw err;
    
        var body = JSON.parse(body);
        console.log("Venue Name: " + body[0].venue.name);
        console.log("Venue Location: " + body[0].venue.city + " " + body[0].venue.region);
        console.log("Concert Date: " + body[0].datetime);
    });
};

function doWhatItSays(searchterm, queryterm) {
    fs.readFile("random.txt","utf8", function(err ,data){
        if (err) throw err;
        var array = data.split(",")
        console.log (array)
        var program = array[0]
        var action = array[1]
        if (program ==="spotify-this-song"){
            spotifySong(action)
        }
    });
};

