let currentMusic = 0;

let songs = [
    {
        name: 'Valentine',
        path: 'music/valentine.mp3',
        artist: 'Laufey'
    },
    {
        name: 'Overslept ft. mei ehara',
        path: 'music/overslept.mp3',
        artist: 'Faye Webster'
    },
    {
        name: 'Kingston',
        path: 'music/kingston.mp3',
        artist: 'Faye Webster'
    },
    {
        name: 'best version of La Valse',
        path: 'music/lavalse.mp3',
        artist: 'best  pianist (PHILLIP SHI)'
    }
];

const music = document.querySelector('#audio');

const cd = document.querySelector('#cd');
const songName = document.querySelector('#song-name');
const artistName = document.querySelector('#artist-name');
const progress = document.querySelector('#progress');
const backwardBtn = document.querySelector('#backBtn');
const playBtn = document.querySelector('#playBtn');
const forwardBtn = document.querySelector('#forwardBtn');

playBtn.addEventListener('click', ()=>{
    if(playBtn.classList.contains('fa-play')){
        cd.classList.add('play');
        music.play();
        playBtn.classList.remove('fa-play');
        playBtn.classList.add('fa-pause');
    }
    else {
        cd.classList.remove('play');
        music.pause();
        playBtn.classList.remove('fa-pause');
        playBtn.classList.add('fa-play');
    }
});

const setMusic = (i) => {
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
}

setMusic(0);

setInterval(() => {
    progress.max = music.duration;
    progress.value = music.currentTime;
}, 500)

progress.onchange = function(){
    music.currentTime = progress.value;
}

const playNextSong = ()=>{
    if(currentMusic >= songs.length - 1){
        currentMusic = 0;
    }
    else {
        currentMusic++;
    }
    setMusic(currentMusic);
    music.play();
    playBtn.classList.remove('fa-play');
    playBtn.classList.add('fa-pause');
    cd.classList.add('play');
};

forwardBtn.addEventListener("click", playNextSong);
music.addEventListener("ended", playNextSong);

backwardBtn.addEventListener("click", ()=>{
    if(currentMusic <= 0){
        currentMusic = songs.length - 1;
    }
    else {
        currentMusic--;
    }
    setMusic(currentMusic);
    music.play();
    playBtn.classList.remove('fa-play');
    playBtn.classList.add('fa-pause');
    cd.classList.add('play');
});
