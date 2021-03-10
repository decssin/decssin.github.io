// noscript-check
document.body.style.overflow = 'visible';
document.body.style.pointerEvents = 'auto';
// ie-check
if (document.documentMode) {
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
        '03' : {
            '02': {workout:'01:47:47',learned:true},
            '03': {workout:'01:15:23',learned:false},
            '04': {workout:'01:31:08',learned:false},
            '05': {workout:'01:32:36',learned:false},
            '06': {workout:'00:31:54',learned:false},
            '08': {workout:'01:46:23',learned:false},
            '09': {workout:'01:53:17',learned:false},
            '11': {workout:'01:44:12',learned:false},
        },
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
            '18': {workout:'01:58:07',learned:true},
            '19': {workout:'02:03:27',learned:false},
            '20': {workout:'01:44:50',learned:false},
            '22': {workout:'01:38:30',learned:true},
            '23': {workout:'01:44:13',learned:false},
            '25': {workout:'01:33:39',learned:true},
            '26': {workout:'01:43:58',learned:false},
            '27': {workout:'01:24:51',learned:false},
        },
        '01' : {
            '01' : {workout:'00:37:56',learned:false},
            '02' : {workout:'01:46:30',learned:false},
            '03' : {workout:'00:00:00',learned:false},
            '04' : {workout:'01:46:54',learned:false},
            '05' : {workout:'01:12:25',learned:false},
            '06' : {workout:'00:00:00',learned:false},
            '07' : {workout:'01:35:32',learned:false},
            '08' : {workout:'01:42:32',learned:false},
            '09' : {workout:'01:41:59',learned:false},
            '10' : {workout:'00:00:00',learned:false},
            '11' : {workout:'01:40:38',learned:false},
            '12' : {workout:'01:51:01',learned:false},
            '13' : {workout:'00:00:00',learned:false},
            '14' : {workout:'01:41:48',learned:false},
            '15' : {workout:'01:52:29',learned:false},
            '16' : {workout:'01:36:25',learned:false},
            '17' : {workout:'00:00:00',learned:false},
            '18' : {workout:'01:33:28',learned:false},
            '19' : {workout:'01:30:09',learned:false},
            '20' : {workout:'00:00:00',learned:false},
            '21' : {workout:'02:00:42',learned:false},
            '22' : {workout:'01:32:46',learned:false},
            '23' : {workout:'00:00:00',learned:false},
            '24' : {workout:'00:00:00',learned:false},
            '25' : {workout:'02:01:03',learned:false},
            '26' : {workout:'01:43:32',learned:false},
            '27' : {workout:'00:00:00',learned:false},
            '28' : {workout:'02:04:26',learned:false},
            '29' : {workout:'01:31:05',learned:false},
            '30' : {workout:'02:15:56',learned:false}
        }
    }
};