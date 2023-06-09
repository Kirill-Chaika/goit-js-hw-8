
import throttle from 'lodash.throttle';

const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe'); 
const player = new Vimeo.Player(iframe);

const onPlay = function(data) {
    localStorage.setItem(STORAGE_KEY, data.seconds);
 };

player.on('timeupdate', throttle(onPlay, 1000));

const saveCurrentTime = localStorage.getItem(STORAGE_KEY); 
    if (saveCurrentTime) { 
    player.setCurrentTime(saveCurrentTime); 
};