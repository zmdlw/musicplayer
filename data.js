let songs = [
    {
        name: 'song 1',
        path: 'assets/musics/Song 1.mp3',
        artist: 'artist 1',
        cover: 'assets/images/cover 1.png'
    },
    {
        name: 'song 2',
        path: 'assets/musics/Song 2.mp3',
        artist: 'artist 2',
        cover: 'assets/images/cover 2.png'
    },
    {
        name: 'song 3',
        path: 'assets/musics/Song 3.mp3',
        artist: 'artist 3',
        cover: 'assets/images/cover 3.png'
    },
    {
        name: 'song 4',
        path: 'assets/musics/Song 4.mp3',
        artist: 'artist 4',
        cover: 'assets/images/cover 4.png'
    },
    {
        name: 'song 5',
        path: 'assets/musics/Song 5.mp3',
        artist: 'artist 5',
        cover: 'assets/images/cover 5.png'
    },
    {
        name: 'song 6',
        path: 'assets/musics/Song 6.mp3',
        artist: 'artist 6',
        cover: 'assets/images/cover 6.png'
    },
    {
        name: 'song 7',
        path: 'assets/musics/Song 7.mp3',
        artist: 'artist 7',
        cover: 'assets/images/cover 7.png'
    },
    {
        name: 'song 8',
        path: 'assets/musics/Song 8.mp3',
        artist: 'artist 8',
        cover: 'assets/images/cover 8.png'
    }
]
let currentMusic = 0;

const music = document.querySelector('#audio-source');

const seekBar = document.querySelector('.music-seek-bar');
const songName = document.querySelector('.current-song-name');
const artistName = document.querySelector('.artist-name');
const coverImage = document.querySelector('.cover');
const currentMusicTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.duration');

const queue = [...document.querySelectorAll('.queue')];

// select all buttons here

const forwardBtn = document.querySelector('i.fa-forward');
const backwardBtn = document.querySelector('i.fa-backward');
const playBtn = document.querySelector('i.fa-play');
const pauseBtn = document.querySelector('i.fa-pause');
const repeatBtn = document.querySelector('span.fa-redo');
const volumeBtn = document.querySelector('span.fa-volume-up');
const volumeSlider = document.querySelector('.volume-slider');