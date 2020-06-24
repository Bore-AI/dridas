import React, { useCallback } from "react";
import "./App.css";
import { useAudio } from "react-use";
import music from "./music.mp3";

const songs = [
  { start: 0, end: 50, artist: "Kongen På Havet", song: "Intro" },
  {
    start: 50,
    end: 120,
    artist: "Jahn Lengervik",
    song: "Marna Motor",
  },
  {
    start: 110,
    end: 170,
    artist: "Kaptein Sabeltann",
    song: "Sjørøverene kommer!",
  },
  {
    start: 170,
    end: 230,
    artist: "DJ DY",
    song: "Slapp av",
  },
  {
    start: 230,
    end: 290,
    artist: "Scooter",
    song: "God Save The Rave",
  },
  {
    start: 290,
    end: 350,
    artist: "Sabaton",
    song: "Bismarck",
  },
  {
    start: 350,
    end: 410,
    artist: "Tommy & Tigeren",
    song: "Det Æ Bryne Så Æ Lage",
  },
  {
    start: 410,
    end: 470,
    artist: "Staysmann",
    song: "Kaptein Morgan",
  },
  {
    start: 470,
    end: 530,
    artist: "Keiino",
    song: "Spirit In The sky",
  },
  {
    start: 530,
    end: 590,
    artist: "TIX",
    song: "Jævlig",
  },
  {
    start: 590,
    end: 650,
    artist: "Leo",
    song: "Dance Monkey",
  },
  {
    start: 650,
    end: 710,
    artist: "Staysmann",
    song: "Trenger en mann",
  },
  {
    start: 710,
    end: 770,
    artist: "Ylvis",
    song: "Jan Egeland",
  },
  {
    start: 770,
    end: 830,
    artist: "Vestlandsfanden",
    song: "Brenn alle bruer",
  },
  {
    start: 830,
    end: 890,
    artist: "Keiino",
    song: "Spirit In THe sky",
  },
  {
    start: 890,
    end: 950,
    artist: "Guddfaren",
    song: "Piratfest på sunde",
  },
  {
    start: 950,
    end: 1010,
    artist: "Modern Talking, Scooter",
    song: "Win The Race",
  },
  {
    start: 1010,
    end: 1070,
    artist: "Drillos",
    song: "Alt for norge",
  },
  {
    start: 1070,
    end: 1130,
    artist: "Scotty",
    song: "He's a pirate!",
  },
  {
    start: 1130,
    end: 1190,
    artist: "Åsmund Åmli Band",
    song: "Riksveg nr 9",
  },
  {
    start: 1190,
    end: 1250,
    artist: "Gunther",
    song: "Ding Dong Song",
  },
  {
    start: 1250,
    end: 1310,
    artist: "Nephew feat. Landsholdet",
    song: "The Danish Way To Rock",
  },
  {
    start: 1310,
    end: 1370,
    artist: "Kim Larsen",
    song: "Jutlandia",
  },
  {
    start: 1370,
    end: 1430,
    artist: "Nik & Jay",
    song: "Vi vandt i dag",
  },
  {
    start: 1430,
    end: 1490,
    artist: "Leo",
    song: "Zombie",
  },
  {
    start: 1490,
    end: 1550,
    artist: "Volbeat",
    song: "For Evigt",
  },
  {
    start: 1550,
    end: 1610,
    artist: "Rune Rudberg",
    song: "Ut Mot Havet",
  },
  {
    start: 1610,
    end: 1670,
    artist: "Vidar Villa",
    song: "One Night Stand",
  },
  {
    start: 1670,
    end: 1730,
    artist: "Bjørn Hellfuck",
    song: "Krabbeklo",
  },
  {
    start: 1730,
    end: 1790,
    artist: "Lonely Island",
    song: "I'm on a boat",
  },
  {
    start: 1790,
    end: 1850,
    artist: "Kveld på Bygda",
    song: "Hansa og Tuborg",
  },
  {
    start: 1850,
    end: 1910,
    artist: "Herman Flesvig",
    song: "Haugenstua",
  },
  {
    start: 1910,
    end: 1970,
    artist: "Ingenting",
    song: "Sofadagen",
  },
  {
    start: 1970,
    end: 2030,
    artist: "Stevie Starfish",
    song: "Ass 2 Fist",
  },
  {
    start: 2030,
    end: 2090,
    artist: "Vazelina",
    song: "Baller i luften",
  },
  {
    start: 2090,
    end: 2150,
    artist: "Busserulls",
    song: "Øl, øl og mere øl",
  },
  {
    start: 2150,
    end: 2210,
    artist: "Den BB",
    song: "På kroken",
  },
  {
    start: 2210,
    end: 2270,
    artist: "Halvseint",
    song: "Party with beer",
  },
  {
    start: 2270,
    end: 2330,
    artist: "TIX",
    song: "Versace",
  },
  {
    start: 2330,
    end: 2390,
    artist: "Plumbo",
    song: "Typisk Norsk",
  },
  {
    start: 2390,
    end: 2450,
    artist: "Heaven Shall Burn",
    song: "Endzeit",
  },
  {
    start: 2450,
    end: 2510,
    artist: "Rammstein",
    song: "AUSLÂNDER",
  },
  {
    start: 2510,
    end: 2570,
    artist: "Apres Ski 2017",
    song: "Die immer lacht",
  },
  {
    start: 2570,
    end: 2630,
    artist: "DJ Ötzi",
    song: "Sweet Caroline",
  },
  {
    start: 2630,
    end: 2690,
    artist: "Lindemann",
    song: "Frau & Mann",
  },
  {
    start: 2690,
    end: 2750,
    artist: "Mickie Crause",
    song: "Wir Ham St. Anton überlebt",
  },
  {
    start: 2750,
    end: 2810,
    artist: "Rammstein",
    song: "Deutschland",
  },
  {
    start: 2810,
    end: 2870,
    artist: "Tim Toupet",
    song: "Humba Täterä",
  },
  {
    start: 2870,
    end: 2930,
    artist: "Mötley Crüe",
    song: "Kickstart my heart ",
  },
  {
    start: 2930,
    end: 2990,
    artist: "Erik Prydz ",
    song: "Call on me",
  },
  {
    start: 2990,
    end: 3050,
    artist: "Swedish House Mafia",
    song: "Greyhound",
  },
  {
    start: 3050,
    end: 3110,
    artist: "Tix",
    song: "Dommedagen 2020",
  },
  {
    start: 3110,
    end: 3170,
    artist: "Kvelertak",
    song: "Crack of doom",
  },
  {
    start: 3170,
    end: 3230,
    artist: "Gunter ",
    song: "String bikini ",
  },
  {
    start: 3230,
    end: 3290,
    artist: "Lordi",
    song: "Hard Rock Hallelujah",
  },
  {
    start: 3290,
    end: 3350,
    artist: "Wig Wam",
    song: "In My Dreams",
  },
  {
    start: 3350,
    end: 3410,
    artist: "S3RL",
    song: "Genre Police",
  },
  {
    start: 3410,
    end: 3470,
    artist: "Bring Me the Horizon",
    song: "Throne",
  },
  {
    start: 3470,
    end: 3530,
    artist: "Scotty",
    song: "He's a pirate - Harris & Ford REmix",
  },
  {
    start: 3530,
    end: 3590,
    artist: "Europe",
    song: "The Final Countdown",
  },
  {
    start: 3590,
    end: 3650,
    artist: "Queen",
    song: "We Are The Champions",
  },
];

const beers = [
  { number: 0, start: 0, end: 50 },
  { number: 1, start: 50, end: 650 },
  { number: 2, start: 650, end: 1250 },
  { number: 3, start: 1250, end: 1850 },
  { number: 4, start: 1850, end: 2450 },
  { number: 5, start: 2450, end: 3050 },
  { number: 6, start: 3050, end: 3650 },
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
      <h1>Kongen På Havet</h1>
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
      {!state.paused && <button onClick={controls.pause}>Legg til kai</button>}
      {state.paused && <button onClick={controls.play}>Start seilas!</button>}
      <br />
      <br />
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

  if (current) {
    return (
      <div onClick={() => onSongClick(song)}>
        <b>
          {song.artist} - {song.song}
        </b>
      </div>
    );
  } else {
    return (
      <div onClick={() => onSongClick(song)}>
        {song.artist} - {song.song}
      </div>
    );
  }
};

export default App;
