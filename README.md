# LIRI-bot

LIRI has four commands: `concert-this`, `spotify-this-song`, `movie-this`, and `do-what-it-says`.

To choose a command and parameter, type `node liri.js concert-this Drake` in to a terminal in this respository's corresponding directory. The filename `liri.js` must be followed by one of the four commands, then by an artist's name, a song name, a movie name, or nothing based on the command given.

### concert-this

1.Takes an artist's name as its parameter
2.Returns that artist's next concert information including the:
* Name of the venue
* City location of the venue
* Date of the event

### spotify-this-song

1.Takes a song's name as its parameter
2.Returns that song's information including the:
* The artist(s)
* Song's name
* A Spotify link to the song
* The album name

### movie-this

1.Takes a movie name as its paramter
2.Returns that movie's information including the:
* Movie Title
* Year of release
* Rotten Tomatoes Rating
* IMDB Rating
* Country of origin
* Plot
* Main Actors

### do-what-it-says

1.This command reads the content of the directory's file named random.txt
