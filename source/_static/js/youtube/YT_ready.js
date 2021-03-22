

//NOTE - ytplayer must be set on the youtube_iframe_functions.js
YT_ready(function(){
    var frameID = getFrameID("youtube_iframe");
    if (frameID) { //If the frame exists
        ytplayer = new YT.Player(frameID, {
            events: {
                'onReady': YouTube_PlayerReady,
                'onPlaybackQualityChange': YouTube_PlayerPlaybackQualityChange,
                'onStateChange': YouTube_PlayerStateChange,
                'onError': YouTube_PlayerError
            }
        });
    }
});