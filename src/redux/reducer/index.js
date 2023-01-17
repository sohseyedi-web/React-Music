import {createSlice} from "@reduxjs/toolkit";
import { artists } from './../../data/data';

const initialState = {
    song: {},
    dataItem: artists,
};

const musicReducer = createSlice({
    name: "music",
    initialState,
    reducers: {
        playMusic: (state, action) => {
            const song = [...state.dataItem];
            const songIndex = song.findIndex((i) => i.id === action.payload.id);

            if (song[songIndex].isPlaying === true) {
                song[songIndex].isPlaying = false
            } else {
                song.forEach((i) => {
                    i.isActive = false;
                    i.isPlaying = false
                })
                song[songIndex].isActive = true
                song[songIndex].isPlaying = true
            }

            state.song = song[songIndex]
        },
        addItemFav: (state, action) => {
            const fav = [...state.dataItem];
            const favIndex = fav.findIndex((m) => m.id === action.payload.id);
            if (fav[favIndex].isFavorite === true) {
                fav[favIndex].isFavorite = false;
            } else {
                fav[favIndex].isFavorite = !fav[favIndex].isFavorite;
            }
        },
        nextMusic: (state, action) => {
            const music = [...state.dataItem];
            const musicIndex = music.findIndex((i) => i.id === action.payload.id);
            music.forEach((item) => {
                item.isActive = false;
                item.isPlaying = false;
            });
            if (music[musicIndex].id >= music.length) {
                music[0].isActive = true;
                music[0].isPlaying = true;
                state.song = music[0];
            } else {
                music[musicIndex + 1].isActive = true;
                music[musicIndex + 1].isPlaying = true;
                state.song = music[musicIndex + 1];
            }
        },
        prevMusic: (state, action) => {
            const music = [...state.dataItem];
            const musicIndex = music.findIndex((i) => i.id === action.payload.id);
            music.forEach((item) => {
                item.isActive = false;
                item.isPlaying = false;
            });
            if (music[musicIndex].id <= 1) {
                music[music.length - 1].isActive = true;
                music[music.length - 1].isPlaying = true;
                state.song = music[music.length - 1];
            } else {
                music[musicIndex - 1].isActive = true;
                music[musicIndex - 1].isPlaying = true;
                state.song = music[musicIndex - 1];
            }
        },
        randomMusic: (state, action) => {
            const random = [...state.dataItem];
            const randomNumber = Math.floor(Math.random() * random.length);
            random.forEach((item) => {
                item.isPlaying = false;
                item.isActive = false;
            });
            random[randomNumber].isActive = true;
            random[randomNumber].isPlaying = true;
            state.song = random[randomNumber];
        },
    },
});

export const {addItemFav, nextMusic, playMusic, prevMusic, randomMusic} =
    musicReducer.actions;

export default musicReducer.reducer;