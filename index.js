// noscript-check
document.body.style.overflow = 'visible';
document.body.style.pointerEvents = 'auto';
// ie-check
if (document['documentMode']) {
    document.body.innerHTML = "<div id='internetexplorer'><span>My blog no longer supports this web browser. <a href='microsoft-edge:https://jiwon.io'>Click here to launch the site in the MS Edge browser</a></span></div>";
}
// load-animation
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('svg-loader').style.opacity = 0;
        document.getElementById('svg-circle').style.opacity = 0;
        document.getElementById('svg-loader').style.visibility = 'hidden';
        document.getElementById('svg-circle').style.visibility = 'hidden';
    }, 500);
});

let data = {
    '2021': {
        '02' : {
            '01': {workout:'02:05:22',learned:true},
            '02': {workout:'01:09:59',learned:true},
            '03': {workout:'00:00:00',learned:false},
            '04': {workout:'02:03:17',learned:true},
            '05': {workout:'00:45:52',learned:true},
            '06': {workout:'02:07:18',learned:true},
            '07': {workout:'00:00:00',learned:true},
            '08': {workout:'01:38:18',learned:true},
            '09': {workout:'02:04:29',learned:true},
            '10': {workout:'00:00:00',learned:false},
            '11': {workout:'02:02:59',learned:false},
            '12': {workout:'02:06:54',learned:false},
            '13': {workout:'01:57:10',learned:true},
            '14': {workout:'00:00:00',learned:false},
            '15': {workout:'01:00:06',learned:true},
            '16': {workout:'01:39:22',learned:true},
            '17': {workout:'00:00:00',learned:false},
            '18': {workout:'01:58:07',learned:true}
        } 
    }
};