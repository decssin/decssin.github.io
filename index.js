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

let data = [
    {
        today: '2021-02-17',
        workout: '00:00:00',
        learned: false
    },
];