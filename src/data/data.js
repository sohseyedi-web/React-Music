import { v4 as uuidv4 } from "uuid";
import Leito from "../assets/artists/leito.jpg";
import Sadeghi from "../assets/artists/rez-sadeghi.jpg";
import Sohmj from "../assets/artists/sohmj.jpg";
import Hidden from "../assets/artists/hidden.jpg";
import Shajarian from "../assets/artists/homayoun.jpg";
import Mohsen from "../assets/artists/mohsen.jpg";
import Ghorbani from "../assets/artists/ghorbani.jpg";
import Arman from "../assets/artists/arman.jpg";
import Khashy from "../assets/artists/khashy.jpg";
import Esfahani from "../assets/artists/esfahani.jpg";
import Shayan from "../assets/artists/shayan.jpg";


//songs
import Alighorbani from "../assets/music/Alireza Ghorbani-Khiale Khosh.mp3";
import ArmanGar from "../assets/music/Arman Garshasbi-Shab.mp3";
import behLeito from "../assets/music/Behzad Leito - Oomadam Too Shahr.mp3";
import mehradhidden from "../assets/music/Hidden - Kalaghpar.mp3";
import homa from "../assets/music/Homayoun Shajaryan - Yek Nafas Arezooye To.mp3";
import mohamadesfa from "../assets/music/Mohammad-Esfahani-Havamo-Nadashti.mp3";
import mohsennn from "../assets/music/Mohsen Yeganeh - Nadaramet.mp3";
import khashyy from "../assets/music/Payiz-Catchybeatz.mp3";
import rezasadeghii from "../assets/music/Reza-Sadeghi-Bemoni-Baram.mp3";
import shayanone from "../assets/music/Shayan Eshraghi-Dige Hichja Mese Inja Nist.mp3";
import shayantwo from "../assets/music/Shayan Eshraghi - Shayad Bargarde.mp3";
import soh from "../assets/music/Sohrab MJ -  Az Tehran Montenaferan.mp3";
//cover


import Shayan1 from "../assets/cover/shayan.jpg";
import Shayan2 from "../assets/cover/shayan_eshraghi.jpg";
import lei from "../assets/cover/lei-omadam.jpg";
import mohesfahani from "../assets/cover/محمد-اصفهانی-دلدادگان.jpg";
import sohmj from "../assets/cover/sohrab-tehran.jpg";
import payiiiz from "../assets/cover/payiz.jpg";
import hidden from "../assets/cover/hidden.jpg";
import homayounsh from "../assets/cover/Homayoun-Shajarian-Yek-Nafas-Arezouye-To.jpg";
import mohsenn from "../assets/cover/mohsen-nadaramet.jpg";
import shabarman from "../assets/cover/Arman Garshasbi - Shab.jpg";
import khial from "../assets/cover/alireza_ghorbani_khiale_khosh.jpg";
import rezabemoni from "../assets/cover/reza-bemoni.jpg";

export const artists = [
  {
    id: uuidv4(),
    number: 5,
    isFavorite: false,
    isActive: false,
    isPlaying: false,
    track: "Oomadam to shahr",
    name: "Behzad Leito",
    profile: Leito,
    cover: lei,
    music: behLeito,
  },
  {
    id: uuidv4(),
    number: 1,
    isFavorite: false,
    isActive: false,
    isPlaying: false,
    track: "Bemoni baram",
    name: "Reza Sadeghi",
    profile: Sadeghi,
    cover: rezabemoni,
    music: rezasadeghii,
  },
  {
    id: uuidv4(),
    number: 8,
    isFavorite: false,
    isActive: false,
    isPlaying: false,
    track: "Az Tehran Motenaferan",
    name: "Sohrab Mj",
    profile: Sohmj,
    cover: sohmj,
    music: soh,
  },
  {
    id: uuidv4(),
    number: 2,
    isFavorite: false,
    isActive: false,
    isPlaying: false,
    track: "Kalagh par",
    name: "Mehrad Hidden",
    profile: Hidden,
    cover: hidden,
    music: mehradhidden,
  },
  {
    id: uuidv4(),
    number: 3,
    isFavorite: false,
    isActive: false,
    isPlaying: false,
    track: "Yek Nafas Arezouye To",
    name: "homayoun Shajarian",
    profile: Shajarian,
    cover: homayounsh,
    music: homa,
  },
  {
    id: uuidv4(),
    number: 9,
    isFavorite: false,
    isActive: false,
    isPlaying: false,
    track: "Khial Khosh",
    name: "Alireza Ghorbani",
    profile: Ghorbani,
    cover: khial,
    music: Alighorbani,
  },
  {
    id: uuidv4(),
    number: 4,
    isFavorite: false,
    isActive: false,
    isPlaying: false,
    track: "Nadaramet",
    name: "Mohsen Yeganeh",
    profile: Mohsen,
    cover: mohsenn,
    music: mohsennn,
  },
  {
    id: uuidv4(),
    number: 11,
    isFavorite: false,
    isActive: false,
    isPlaying: false,
    track: "Shab",
    name: "Arman Garshasbi",
    profile: Arman,
    cover: shabarman,
    music: ArmanGar,
  },
  {
    id: uuidv4(),
    number: 10,
    isFavorite: false,
    isActive: false,
    isPlaying: false,
    track: "Payiz",
    name: "Khashy Sr",
    profile: Khashy,
    cover: payiiiz,
    music: khashyy,
  },
  {
    id: uuidv4(),
    number: 7,
    isFavorite: false,
    isActive: false,
    isPlaying: false,
    track: "Deldadegan",
    name: "Mohamad Esfahani",
    profile: Esfahani,
    cover: mohesfahani,
    music: mohamadesfa,
  },
  {
    id: uuidv4(),
    number: 6,
    isFavorite: false,
    isActive: false,
    isPlaying: false,
    track: "Shayad Bargardeh",
    name: "Shayan Eshraghi",
    profile: Shayan,
    cover: Shayan1,
    music: shayanone,
  },
];
