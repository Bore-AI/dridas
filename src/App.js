import React, { useCallback } from "react";
import "./App.css";
import { useAudio } from "react-use";
import music from "./music.mp3";

const songs = [
  { start: 0, end: 50, artist: "Kongen På Havet", song: "Intro" },
  {
    start: 50,
    end: 110,
    artist: "Jahn Lengervik",
    song: "Marna Motor",
  },
  {
    start: 110,
    end: 177,
    artist: "Kaptein Sabeltann",
    song: "Sjørøverene kommer!",
  },
  {
    start: 177,
    end: 235,
    artist: "DJ DY",
    song: "Slapp av",
  },
  {
    start: 235,
    end: 276,
    artist: "Scooter",
    song: "God Save The Rave",
  },
  {
    start: 276,
    end: 342,
    artist: "Sabaton",
    song: "Bismarck",
  },
  {
    start: 342,
    end: 398,
    artist: "Tommy & Tigeren",
    song: "Det Æ Bryne Så Æ Lage",
  },
  {
    start: 398,
    end: 455,
    artist: "Staysmann",
    song: "Kaptein Morgan",
  },
  {
    start: 455,
    end: 530,
    artist: "Keiino",
    song: "Spirit In The sky",
  },
  {
    start: 530,
    end: 587,
    artist: "TIX",
    song: "Jævlig",
  },
  {
    start: 587,
    end: 656,
    artist: "Leo",
    song: "Dance Monkey",
  },
  {
    start: 656,
    end: 716,
    artist: "Staysmann",
    song: "Trenger en mann",
  },
  {
    start: 716,
    end: 790,
    artist: "Ylvis",
    song: "Jan Egeland",
  },
  {
    start: 790,
    end: 860,
    artist: "Vestlandsfanden",
    song: "Brenn alle bruer",
  },
  {
    start: 860,
    end: 937,
    artist: "Keiino",
    song: "Spirit In THe sky",
  },
  {
    start: 937,
    end: 988,
    artist: "Guddfaren",
    song: "Piratfest på sunde",
  },
  {
    start: 988,
    end: 1053,
    artist: "Modern Talking, Scooter",
    song: "Win The Race",
  },
  {
    start: 1053,
    end: 1079,
    artist: "Drillos",
    song: "Alt for norge",
  },
  {
    start: 1079,
    end: 1132,
    artist: "Scotty",
    song: "He's a pirate!",
  },
  {
    start: 1132,
    end: 1214,
    artist: "Åsmund Åmli Band",
    song: "Riksveg nr 9",
  },
  {
    start: 1214,
    end: 1259,
    artist: "Gunther",
    song: "Ding Dong Song",
  },
  {
    start: 1259,
    end: 1318,
    artist: "Nephew feat. Landsholdet",
    song: "The Danish Way To Rock",
  },
  {
    start: 1318,
    end: 1384,
    artist: "Kim Larsen",
    song: "Jutlandia",
  },
  {
    start: 1384,
    end: 1449,
    artist: "Nik & Jay",
    song: "Vi vandt i dag",
  },
  {
    start: 1449,
    end: 1525,
    artist: "Leo",
    song: "Zombie",
  },
  {
    start: 1525,
    end: 1565,
    artist: "Volbeat",
    song: "For Evigt",
  },
  {
    start: 1565,
    end: 1631,
    artist: "Rune Rudberg",
    song: "Ut Mot Havet",
  },
  {
    start: 1631,
    end: 1675,
    artist: "Ava Max",
    song: "Kings & Queens",
  },
  {
    start: 1675,
    end: 1752,
    artist: "Bjørn Hellfuck",
    song: "Krabbeklo",
  },
  {
    start: 1752,
    end: 1794,
    artist: "Lonely Island",
    song: "I'm on a boat",
  },
  {
    start: 1794,
    end: 1854,
    artist: "Kveld på Bygda",
    song: "Hansa og Tuborg",
  },
  {
    start: 1854,
    end: 1908,
    artist: "Herman Flesvig",
    song: "Haugenstua",
  },
  {
    start: 1908,
    end: 1979,
    artist: "Ingenting",
    song: "Sofadagen",
  },
  {
    start: 1979,
    end: 2047,
    artist: "Stevie Starfish",
    song: "Ass 2 Fist",
  },
  {
    start: 2047,
    end: 2101,
    artist: "Vazelina",
    song: "Baller i luften",
  },
  {
    start: 2101,
    end: 2171,
    artist: "Busserulls",
    song: "Øl, øl og mere øl",
  },
  {
    start: 2171,
    end: 2241,
    artist: "Den BB",
    song: "På kroken",
  },
  {
    start: 2241,
    end: 2314,
    artist: "Halvseint",
    song: "Party with beer",
  },
  {
    start: 2314,
    end: 2357,
    artist: "TIX",
    song: "Versace",
  },
  {
    start: 2357,
    end: 2412,
    artist: "Plumbo",
    song: "Typisk Norsk",
  },
  {
    start: 2412,
    end: 2465,
    artist: "Heaven Shall Burn",
    song: "Endzeit",
  },
  {
    start: 2465,
    end: 2527,
    artist: "Rammstein",
    song: "AUSLÂNDER",
  },
  {
    start: 2527,
    end: 2586,
    artist: "Apres Ski 2017",
    song: "Die immer lacht",
  },
  {
    start: 2586,
    end: 2653,
    artist: "DJ Ötzi",
    song: "Sweet Caroline",
  },
  {
    start: 2653,
    end: 2731,
    artist: "Lindemann",
    song: "Frau & Mann",
  },
  {
    start: 2731,
    end: 2761,
    artist: "Mickie Crause",
    song: "Wir Ham St. Anton überlebt",
  },
  {
    start: 2761,
    end: 2829,
    artist: "Rammstein",
    song: "Deutschland",
  },
  {
    start: 2829,
    end: 2880,
    artist: "Tim Toupet",
    song: "Humba Täterä",
  },
  {
    start: 2880,
    end: 2948,
    artist: "Mötley Crüe",
    song: "Kickstart my heart ",
  },
  {
    start: 2948,
    end: 3004,
    artist: "Erik Prydz ",
    song: "Call on me",
  },
  {
    start: 3004,
    end: 3068,
    artist: "Swedish House Mafia",
    song: "Greyhound",
  },
  {
    start: 3068,
    end: 3118,
    artist: "Tix",
    song: "Dommedagen 2020",
  },
  {
    start: 3118,
    end: 3176,
    artist: "Kvelertak",
    song: "Crack of doom",
  },
  {
    start: 3176,
    end: 3231,
    artist: "Gunter ",
    song: "String bikini ",
  },
  {
    start: 3231,
    end: 3311,
    artist: "Lordi",
    song: "Hard Rock Hallelujah",
  },
  {
    start: 3311,
    end: 3367,
    artist: "Wig Wam",
    song: "In My Dreams",
  },
  {
    start: 3367,
    end: 3414,
    artist: "S3RL",
    song: "Genre Police",
  },
  {
    start: 3414,
    end: 3479,
    artist: "Bring Me the Horizon",
    song: "Throne",
  },
  {
    start: 3479,
    end: 3534,
    artist: "Scotty",
    song: "He's a pirate - Harris & Ford REmix",
  },
  {
    start: 3534,
    end: 3630,
    artist: "Europe",
    song: "The Final Countdown",
  },
  {
    start: 3630,
    end: 4000,
    artist: "Queen",
    song: "We Are The Champions",
  },
];

const beers = [
  { number: 0, start: 0, end: 50 },
  { number: 1, start: 50, end: 658 },
  { number: 2, start: 658, end: 1259 },
  { number: 3, start: 1259, end: 1855 },
  { number: 4, start: 1855, end: 2465 },
  { number: 5, start: 2465, end: 3068 },
  { number: 6, start: 3068, end: 4000 },
];

const getSongAtTime = (time) => {
  return songs.find((song) => song.start <= time && song.end > time);
};

const getBeerAtTime = (time) => {
  return beers.find((beer) => beer.start <= time && beer.end > time);
};

function App() {
  const [audio, state, controls] = useAudio({
    src: music,
    autoPlay: false,
  });

  const onSongClick = useCallback(
    (song) => {
      console.log(song);
      controls.seek(song.start);
    },
    [controls]
  );

  const currentBeer = getBeerAtTime(state.time);
  const currentSong = getSongAtTime(state.time);

  return (
    <div className="App">
      {audio}
      <div className="sticky">
        <div className="header">Kongen På Havet</div>
        <progress id="kongen" value={state.time - 50} max={3650} />
        <h3>Øl nr. {currentBeer.number}</h3>
        {currentBeer.number > 0 && (
          <progress
            id="øl"
            value={state.time - currentBeer.start}
            max={currentBeer.end - currentBeer.start}
          />
        )}
        <br />
        <br />
        {!state.paused && (
          <button onClick={controls.pause}>Legg til kai</button>
        )}
        {state.paused && <button onClick={controls.play}>Start seilas!</button>}
      </div>
      <SongList currentSong={currentSong} onSongClick={onSongClick} />
    </div>
  );
}

const SongList = (props) => {
  const { currentSong, onSongClick } = props;

  const songList = songs.map((song, index) => {
    if ((index - 1) % 10 === 0) {
      return (
        <>
          <br />
          <div>
            <b>Øl {(index - 1) / 10 + 1}</b>
          </div>
          <Song
            key={song.artist + song.song}
            song={song}
            current={song === currentSong}
            onSongClick={onSongClick}
          />
        </>
      );
    } else {
      return (
        <Song
          key={song.artist + song.song}
          song={song}
          current={song === currentSong}
          onSongClick={onSongClick}
        />
      );
    }
  });

  return <div>{songList}</div>;
};

const Song = (props) => {
  const { song, current, onSongClick } = props;

  return (
    <div
      onClick={() => onSongClick(song)}
      className={`song ${current ? "song-selected" : ""}`}
    >
      {song.artist} - {song.song}
    </div>
  );
};

export default App;
