const tracks = document.querySelectorAll('audio');

tracks.forEach(track => {
    track.addEventListener('play', () => {
        tracks.forEach(tr => {
            if (tr !== track) {
                tr.pause();
                tr.currentTime = 0;
            }
        });
    });
});