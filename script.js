// script.js
const trailer = document.getElementById("trailer");
window.onmousemove = (e) => {
    const x = e.clientX - trailer.offsetWidth / 2;
    const y = e.clientY - trailer.offsetHeight / 2;

    // Correct usage of transform: translate
    const keyframes = {
        transform: `translate(${x}px, ${y}px)`
    };

    trailer.animate(keyframes, {
        duration: 800,
        fill: "forwards"
    });
};
// Sample song data
const songs = [
    // (your song data here)
    { 
        title: "King Shit Mp3 Song", 
        poster: "https://www.pagalworld.com.sb/siteuploads/thumb/c/310_4.jpg",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/68730/1.mp3?1"
    },
    { 
        title: "YODHA: Tere Sang Ishq Hua (Song) Sidharth Malhotra, Raashii Khanna,Arijit Singh,Neeti,Tanishk,Kunaal", 
        poster: "https://djmaza.live/siteuploads/thumb/sft34/16891_resize2x_200x200.webp",
        audio: "https://www.pagalworld.com.sb/files/download/type/64/id/70413/1.mp3?1"
    },
    { 
        title: "Tauba Tauba | Bad Newz | Vicky Kaushal | Triptii Dimri | Karan Aujla | In cinemas 19th July", 
        poster: "https://djmaza.live/siteuploads/thumb/sft34/16912_resize2x_200x200.webp",
        audio: "https://www.pagalworld.com.sb/files/download/type/64/id/71712/1.mp3?1"
    },
    { 
        title: "Tum Kya Mile - Rocky Aur Rani Kii Prem Kahaani | Ranveer | Alia | Pritam | Amitabh | Arijit | Shreya", 
        poster: "https://djmaza.live/siteuploads/thumb/sft30/14943_resize2x_200x200.webp",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/66932/1.mp3?1"
    },
    { 
        title: "JATT DA MUQABALA Video Song | Sidhu Moosewala | Snappy | New Songs 2018", 
        poster: "https://djmaza.live/siteuploads/thumb/sft6/2739_resize2x_200x200.webp",
        audio: "https://djmaza.live/files/download/id/2739"
    },
    { 
        title: "YADAV BRAND 2 - Sunny Yaduvanshi ft.AK Rok I Nitesh Ujoli I Flame Music I Latest haryanvi songs 2022", 
        poster: "https://djmaza.live/siteuploads/thumb/sft32/15801_resize2x_200x200.webp",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/68103/1.mp3?1"
    },
    { 
        title: "Baaton Ko Teri - Arijit Singh Song", 
        poster: "https://djmaza.live/siteuploads/thumb/sft12/5920_resize2x_200x200.webp",
        audio: "https://pagalworld.com.im/files/download/id/1843"
    },
    { 
        title: "Udaarian Mp3 Song", 
        poster: "https://www.pagalworld.com.sb/siteuploads/thumb/sft144/71744_4.jpg",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/71744/1.mp3?1"
    },
    { 
        title: "Old Skool - Sidhu Moose Wala Song", 
        poster: "https://djmaza.live/siteuploads/thumb/sft15/7022_resize2x_200x200.webp",
        audio: "https://djmaza.live/files/download/id/7022"
    },
    { 
        title: "Kabira Full Song Yeh Jawaani Hai Deewani | Pritam | Ranbir Kapoor, Deepika Padukone", 
        poster: "https://djmaza.live/siteuploads/thumb/c/432_resize2x_200x200.webp",
        audio: "https://djmaza.live/files/download/id/6177"
    },
    { 
        title: "Rafta Rafta - Official Music Video | Raj Ranjodh | Atif Aslam Ft. Sajal Ali | Tarish Music", 
        poster: "https://djmaza.live/siteuploads/thumb/sft18/8592_resize2x_200x200.webp",
        audio: "https://djmaza.live/files/download/id/8592"
    },
    { 
        title: "Jeena Sikha De (Slowed Reverb) Mp3 Song ", 
        poster: "https://www.pagalworld.com.sb/siteuploads/thumb/sft143/71092_4.jpg",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/71092/1.mp3?1"
    },
    { 
        title: "Khairiyat Remix - DJ Baddiee Mp3 Song", 
        poster: "https://www.pagalworld.com.sb/siteuploads/thumb/sft142/70911_4.jpg",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/70911/1.mp3?1"
    },
    { 
        title: "Dekhte Dekhte Full Song | Batti Gul Meter Chalu | Atif Aslam | Shahid K Shraddha K | Nusrat Saab", 
        poster: "https://djmaza.live/siteuploads/thumb/c/95_resize2x_200x200.webp",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/67403/1.mp3?1"
    },
    { 
        title: "Rangreza : Atif Aslam (Tu Na Kariyo Fer Bhi - Full Video) Guri - Punjabi Song - Geet MP3", 
        poster: "https://djmaza.live/siteuploads/thumb/sft7/3415_resize2x_200x200.webp",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/6322/1.mp3?1"
    },
    { 
        title: "Shubh - Elevated (Official Music Video)", 
        poster: "https://djmaza.live/siteuploads/thumb/sft6/2984_resize2x_200x200.webp",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/67232/1.mp3?1"
    },
    { 
        title: "Shubh - Cheques (Official Music Video) Slowed and Reverb", 
        poster: "https://djmaza.live/siteuploads/thumb/sft32/15888_resize2x_200x200.webp",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/67813/1.mp3?1"
    },
    { 
        title: "Drippy Sidhu Mosse wala Song", 
        poster: "https://www.pagalworld.com.sb/siteuploads/thumb/sft140/69970_4.jpg",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/69970/1.mp3?1"
    },
    { 
        title: "O Bedardeya (Slowed Reverb) Mp3 Song", 
        poster: "https://www.pagalworld.com.sb/siteuploads/thumb/sft133/66093_4.jpg",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/66093/1.mp3?1"
    },
    { 
        title: "So High | Official Music Slowed and Reverb | Sidhu Moose Wala ft. BYG BYRD | Humble Music", 
        poster: "https://djmaza.live/siteuploads/thumb/sft8/3958_resize2x_200x200.webp",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/67872/1.mp3?1"
    },
    { 
        title: "PANIYON SA Full Song | Satyameva Jayate | John Abraham | Aisha Sharma | Tulsi Kumar | Atif Aslam", 
        poster: "https://djmaza.live/siteuploads/thumb/c/122_resize2x_200x200.webp",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/6127/1.mp3?1"
    },
    { 
        title: "Bewafa Tera Masoom Chehra Lofi Mix Mp3 Song", 
        poster: "https://www.pagalworld.com.sb/siteuploads/thumb/sft1/128_4.jpg",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/70482/1.mp3?1"
    },
    { 
        title: "Ruaan Full Song Slowed and Reverb | Tiger 3 | Salman Khan, Katrina Kaif | Pritam, Arijit Singh, Irshad Kamil, New Song", 
        poster: "https://djmaza.live/siteuploads/thumb/sft33/16457_resize2x_200x200.webp",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/68309/1.mp3?1"
    },
    { 
        title: "Tu Hi Hai Aashiqui Song", 
        poster: "https://djmaza.live/siteuploads/thumb/sft19/9042_resize2x_200x200.webp",
        audio: "https://mixjio.com/files/download/id/18836"
    },
    { 
        title: "Heeriye (Official Video) Jasleen Royal ft Arijit Singh| Dulquer Salmaan| Aditya Sharma |Taani Tanvir", 
        poster: "https://www.pagalworld.com.sb/siteuploads/thumb/sft143/71197_4.jpg",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/67444/1.mp3?1"
    },
    { 
        title: "FIGHTER: Heer Aasmani Hrithik Roshan, Deepika, Anil, Vishal-Sheykhar, Bpraak, Kumaar", 
        poster: "https://djmaza.live/siteuploads/thumb/sft34/16608_resize2x_200x200.webp",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/68804/1.mp3?1"
    },
    { 
        title: "Dunki: O Maahi | Shah Rukh Khan | Taapsee Pannu | Pritam | Arijit Singh | Irshad Kamil", 
        poster: "https://djmaza.live/siteuploads/thumb/sft34/16582_resize2x_200x200.webp",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/68671/1.mp3?1"
    },
    { 
        title: "Sajni (Song): Arijit Singh, Ram Sampath | Laapataa Ladies | Aamir Khan Productions", 
        poster: "https://djmaza.live/siteuploads/thumb/sft34/16731_resize2x_200x200.webp",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/71229/1.mp3?1"
    },
    { 
        title: "JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | Atlee | Anirudh | Arijit S, Shilpa R | Kumaar", 
        poster: "https://djmaza.live/siteuploads/thumb/sft31/15021_resize2x_200x200.webp",
        audio: "https://www.pagalworld.com.sb/files/download/id/69236//1.mp3?1"
    },
    { 
        title: "Alec Benjamin - Let Me Down Slowly [Official Music]", 
        poster: "https://djmaza.live/siteuploads/thumb/sft12/5655_resize2x_200x200.webp",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/5350/1.mp3?1"
    },
    { 
        title: "Ve Kamleya | Rocky Aur Rani Kii Prem Kahaani | Ranveer | Alia | Pritam | Amitabh | Arijit | Shreya", 
        poster: "https://djmaza.live/siteuploads/thumb/sft30/14802_resize2x_200x200.webp",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/67123/1.mp3?1"
    },
    { 
        title: "GOAT (Full Video) Sidhu Moose Wala | Wazir Patar | Sukh Sanghera | Moosetape", 
        poster: "https://djmaza.live/siteuploads/thumb/sft6/2813_resize2x_200x200.webp",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/3116/1.mp3?1"
    },
    { 
        title: "Sanam Re - Title Track Song", 
        poster: "https://djmaza.live/siteuploads/thumb/c/343_resize2x_200x200.webp",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/2818/1.mp3?1"
    },
    { 
        title: "Teri Galiyon Se Mp3 Song", 
        poster: "https://www.pagalworld.com.sb/siteuploads/thumb/sft14/6935_4.jpg",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/6935/1.mp3?1"
    },
    { 
        title: "Bedardi Se Pyar Ka Sahara Na Mila Song..", 
        poster: "https://www.pagalworld.com.sb/siteuploads/thumb/sft6/2580_4.jpg",
        audio: "https://www.pagalworld.com.sb/files/download/type/320/id/2580/1.mp3?1"
    },
    { 
        title: "Dekha Tenu Pehli Pehli Baar Ve Song ", 
        poster: "https://www.pagalworld.com.sb/siteuploads/thumb/sft143/71251_4.jpg",
        audio: "https://www.pagalworld.com.sb/files/download/type/64/id/71251/1.mp3?1"
    },
    { 
        title: "Power Sidhu Moose Wala Song", 
        poster: "https://www.pagalworld.com.sb/siteuploads/thumb/sft7/3081_4.jpg",
        audio: "https://www.pagalworld.com.sb/files/download/type/64/id/3081/1.mp3?1"
    },
    { 
        title: "295 Sidhu Moose Wala Song ", 
        poster: "https://www.pagalworld.com.sb/siteuploads/thumb/sft6/2995_4.jpg",
        audio: "https://www.pagalworld.com.sb/files/download/type/64/id/2995/1.mp3?1"
    },
    { 
        title: "MVP Subha Song", 
        poster: "https://www.pagalworld.com.sb/siteuploads/thumb/sft143/71143_4.jpg",
        audio: "https://www.pagalworld.com.sb/files/download/type/64/id/71143/1.mp3?1"
    },
    { 
        title: "Wafa Na Raas Aayee Mp3 Song ", 
        poster: "https://www.pagalworld.com.sb/siteuploads/thumb/sft5/2005_4.jpg",
        audio: "https://www.pagalworld.com.sb/files/download/type/64/id/2005/1.mp3?1"
    },
    
    
];

let currentSongIndex = 0;
let audioElement = new Audio(songs[currentSongIndex].audio);
let isRepeat = false;

// Function to render songs
function renderSongs(filteredSongs = songs) {
    const songsContainer = document.querySelector('.songs');
    songsContainer.innerHTML = '';

    filteredSongs.forEach((song, index) => {
        const songElement = document.createElement('div');
        songElement.classList.add('song');
        
        songElement.innerHTML = `
            <img class="song-poster" src="${song.poster}" alt="${song.title} poster">
            <div class="song-info">
                <h3 class="song-title">${song.title}</h3>
            </div>
        `;

        songElement.addEventListener('click', () => {
            playSong(index);
        });

        songsContainer.appendChild(songElement);
    });
}

// Function to play a song
function playSong(index) {
    currentSongIndex = index;
    audioElement.src = songs[index].audio;
    audioElement.play();
    updateNowPlaying();
    updatePlayButton();
}

// Function to update the play button
function updatePlayButton() {
    const playButton = document.getElementById('play');
    if (audioElement.paused) {
        playButton.innerHTML = '<img class="play" src="icons8-play-50.png" alt="Play">Play';
    } else {
        playButton.innerHTML = '<img class="pause" src="icons8-pause-30.png" alt="">Pause';
    }
}

// Function to update the now playing song title
function updateNowPlaying() {
    const nowPlayingTitle = document.getElementById('now-playing-title');
    nowPlayingTitle.innerText = songs[currentSongIndex].title;
}

// Function to update the seek bar and timer
function updateSeekBar() {
    const seekBar = document.getElementById('seek-bar');
    const currentTimeElement = document.getElementById('current-time');
    const durationElement = document.getElementById('duration');
    
    seekBar.max = audioElement.duration;
    seekBar.value = audioElement.currentTime;
    
    currentTimeElement.innerText = formatTime(audioElement.currentTime);
    durationElement.innerText = formatTime(audioElement.duration);
}

// Function to format time in mm:ss
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Function to seek to a specific time in the song
function seekSong() {
    const seekBar = document.getElementById('seek-bar');
    audioElement.currentTime = seekBar.value;
}

// Function to increase volume
function volumeUp() {
    audioElement.volume = Math.min(audioElement.volume + 0.1, 1);
}

// Function to decrease volume
function volumeDown() {
    audioElement.volume = Math.max(audioElement.volume - 0.1, 0);
}

// Function to toggle repeat
function toggleRepeat() {
    isRepeat = !isRepeat;
    audioElement.loop = isRepeat;
    document.getElementById('repeat').classList.toggle('active', isRepeat);
}

// Function to toggle search bar
function toggleSearchBar() {
    const searchBar = document.getElementById('search-bar');
    searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
}

// Function to search songs
function searchSongs() {
    const searchBar = document.getElementById('search-bar');
    const query = searchBar.value.toLowerCase();
    const filteredSongs = songs.filter(song => song.title.toLowerCase().includes(query));
    renderSongs(filteredSongs);
}

// Event listeners for player controls
document.getElementById('play').addEventListener('click', () => {
    if (audioElement.paused) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
    updatePlayButton();
});

document.getElementById('prev').addEventListener('click', () => {
    if (currentSongIndex > 0) {
        playSong(currentSongIndex - 1);
    } else {
        playSong(songs.length - 1);
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentSongIndex < songs.length - 1) {
        playSong(currentSongIndex + 1);
    } else {
        playSong(0);
    }
});

document.getElementById('volume-up').addEventListener('click', volumeUp);
document.getElementById('volume-down').addEventListener('click', volumeDown);
document.getElementById('repeat').addEventListener('click', toggleRepeat);

// Event listener for the seek bar
document.getElementById('seek-bar').addEventListener('input', seekSong);

// Update the seek bar as the song plays
audioElement.addEventListener('timeupdate', updateSeekBar);

// Event listener for the search button
document.querySelector('.btn1').addEventListener('click', toggleSearchBar);

// Event listener for the search bar
document.getElementById('search-bar').addEventListener('input', searchSongs);

// Event listener for account button to open the account modal
document.querySelector('.btn2').addEventListener('click', () => {
    const accountModal = new bootstrap.Modal(document.getElementById('accountModal'));
    accountModal.show();
});

// Event listener for login button in the account modal
document.getElementById('loginBtn').addEventListener('click', () => {
    const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    loginModal.show();
    const accountModal = bootstrap.Modal.getInstance(document.getElementById('accountModal'));
    accountModal.hide();
});

// Event listener for signup button in the account modal
document.getElementById('signupBtn').addEventListener('click', () => {
    const signupModal = new bootstrap.Modal(document.getElementById('signupModal'));
    signupModal.show();
    const accountModal = bootstrap.Modal.getInstance(document.getElementById('accountModal'));
    accountModal.hide();
});

// Call the function to render songs
renderSongs();



// For slider 
const videos = [
    'https://www.youtube.com/embed/TH0SELA9taA', // First video
];
let currentVideoIndex = 0;

const videoPlayer = document.getElementById('videoPlayer');

function loadVideo(index) {
    videoPlayer.src = videos[index];
}

prevVideoButton.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    loadVideo(currentVideoIndex);
});

nextVideoButton.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    loadVideo(currentVideoIndex);
});

// Load the first video initially
loadVideo(currentVideoIndex);

const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Hourly";
    }, 0);
    setTimeout(() => {
        text.textContent = "Weekly";
    }, 0);
    setTimeout(() => {
        text.textContent = "Monthly";
    }, 0); //1s = 1000 milliseconds
}
textLoad();
setInterval(textLoad, 2000);







