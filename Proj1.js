alert('Hello, world!');
var video_url = 'youtube.com/watch?v=eOrNdBpGMv8&feature=youtube_gdata';
ytid(video_url);

var button = document.querySelector('.button');

button.addEventListener('click', function(video_url) {
    var video_id = video_url.split('v=')[1];
    var ampersandPosition = video_id.indexOf('&');
    if (ampersandPosition != -1) { video_id = video_id.substring(0, ampersandPosition); }
    alert('5');
    video_id
    return video_id;
})