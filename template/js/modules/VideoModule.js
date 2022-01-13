export default function VideoModule() {
    var player = fluidPlayer(
        'my-video', {
        "layoutControls": {
            "autoPlay": false,
            "mute": true,
            "allowTheatre": true,
            "playPauseAnimation": true,
            "playbackRateEnabled": true,
            "allowDownload": false,
            "playButtonShowing": true,
            "fillToContainer": false,
            "primaryColor": "#1791E1",
            "posterImage": ""
        },
        }
    );
}