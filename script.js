/*
🎬 Video playlist UI Design like Skillshare With Vanilla JavaScript
👨🏻‍⚕️ By: Coding Design

You can do whatever you want with the code. However if you love my content, you can subscribed my YouTube Channel
🌎link: www.youtube.com/codingdesign
*/

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Derick',
        'name': '1.mp4',
        'duration': '0:37',
    },
    {
        'id': 'a2',
        'title': 'Madelize & Imaan',
        'name': '2.mp4',
        'duration': '2:45',
    },
    {
        'id': 'a3',
        'title': 'Aditi',
        'name': '3.mp4',
        'duration': '24:49',
    },

    {
        'id': 'a4',
        'title': 'Imaan & Franco',
        'name': '4.mp4',
        'duration': '3:59',
    },
    {
        'id': 'a5',
        'title': 'Franco & Madelize',
        'name': '5.mp4',
        'duration': '4:25',
    },
    {
        'id': 'a6',
        'title': 'Aditi MultiBall',
        'name': '6.mp4',
        'duration': '5:33',
    },
    {
        'id': 'a7',
        'title': '7',
        'name': '7.mp4',
        'duration': '0:29',
    },

    {
        'id': 'a8',
        'title': 'Sazi',
        'name': '15.mp4',
        'duration': '1:12',
    },
    {
        'id': 'a9',
        'title': 'Vacation Camp',
        'name': '9.mp4',
        'duration': '3:38',
    },
    {
        'id': 'a10',
        'title': '10',
        'name': '10.mp4',
        'duration': '3:38',
    },
    {
        'id': 'a11',
        'title': 'Private Coaching',
        'name': '11.mp4',
        'duration': '3:38',
    },
    {
        'id': 'a12',
        'title': 'High Performance',
        'name': '12.mp4',
        'duration': '3:38',
    },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
