
// http://stackoverflow.com/questions/7988476/listening-for-youtube-event-in-javascript-or-jquery/7988536#7988536



function getFrameID(id){
    var elem = document.getElementById(id);
    if (elem) {
        if(/^iframe$/i.test(elem.tagName)) return id; //Frame, OK
        // else: Look for frame
        var elems = elem.getElementsByTagName("iframe");
        if (!elems.length) return null; //No iframe found, FAILURE
        for (var i=0; i<elems.length; i++) {
           if (/^https?:\/\/(?:www\.)?youtube(?:-nocookie)?\.com(\/|$)/i.test(elems[i].src)) break;
        }
        elem = elems[i]; //The only, or the best iFrame
        if (elem.id) return elem.id; //Existing ID, return it
        // else: Create a new ID
        do { //Keep postfixing `-frame` until the ID is unique
            id += "-frame";
        } while (document.getElementById(id));
        elem.id = id;
        return id;
    }
    // If no element, return null.
    return null;
}

// Define YT_ready function.
var YT_ready = (function(){
    var onReady_funcs = [], api_isReady = false;
    /* @param func function     Function to execute on ready
     * @param func Boolean      If true, all qeued functions are executed
     * @param b_before Boolean  If true, the func will added to the first
                                 position in the queue*/
    return function(func, b_before){
        if (func === true) {
            api_isReady = true;
            for (var i=0; i<onReady_funcs.length; i++){
                // Removes the first func from the array, and execute func
                onReady_funcs.shift()();
            }
        }
        else if(typeof func == "function") {
            if (api_isReady) func();
            else onReady_funcs[b_before?"unshift":"push"](func); 
        }
    }
})();
// This function will be called when the API is fully loaded
function onYouTubePlayerAPIReady() {YT_ready(true)}

// Load YouTube Frame API
(function(){ //Closure, to not leak to the scope
  var s = document.createElement("script");
  s.src = "//www.youtube.com/player_api"; /* Load Player API*/
  var before = document.getElementsByTagName("script")[0];
  before.parentNode.insertBefore(s, before);
})();



var ytplayer;


/*
// Core functions defined at http://stackoverflow.com/q/7988536#7988536
//var ytplayer;
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
*/




//####################################################

//ON EVENT FUNCTIONS


	//PLAYER STATES
	/*
    YT.PlayerState.ENDED
    YT.PlayerState.PLAYING
    YT.PlayerState.PAUSED
    YT.PlayerState.BUFFERING
    YT.PlayerState.CUED
	*/

//####################################################

function YouTube_PlayerReady(event) {

	//alert('youtube player is ready');

	/*
	if(zoneObj['videoautostart'] == 'yes') 
	{
		YouTube_PlayVideo();
	}////
	*/


	var browser = detectlib.Browser();
	var dm = detectlib.Mobile();
		var is_mobile = dm['is_mobile'];
		var mobile_agent = dm['mobile_agent'];


	console.log("YouTube_PlayerReady()"
		+"\nMOBILE DETECT: "+is_mobile
		+"\nMOBILE AGENT: "+mobile_agent
		+"\nBROWSER: "+browser

	);


	if(is_mobile && browser.toUpperCase() != "SAFARI") 
		YouTube_PlayVideo();

}


function YouTube_PlayerPlaybackQualityChange(event) {

	//alert('youtube player quality change');

}

function YouTube_PlayerError(event) {

	//alert('youtube player error');

}

var done = false;
function YouTube_PlayerStateChange(event) {


	var is_mobile = zoneObj['mobile_detect'];

	var browser = detectlib.Browser();

	console.log("YouTube_PlayerStateChange()"
		+"\nMOBILE DETECT: "+zoneObj['mobile_detect']
		+"\nMOBILE AGENT: "+zoneObj['mobile_agent']
		+"\nBROWSER: "+browser

	);


	if(event.data == YT.PlayerState.PAUSED)
	{
		if(is_mobile && browser.toUpperCase() != "SAFARI") 
			YouTube_PauseVideo();
	}

	if(event.data == YT.PlayerState.PLAYING)
	{ 
		if(is_mobile && browser.toUpperCase() != "SAFARI") 
			YouTube_PlayVideo();
	}


	if(event.data == YT.PlayerState.BUFFERING) 
	{
	
		//alert('buffering');
	}

	if(event.data == YT.PlayerState.CUED) 
	{
	
		//alert('cued');

	}//

	if(event.data == YT.PlayerState.ENDED) 
	{
		
		YouTube_EndVideo();

	}



}

	




//################################

//YOUTUBE PLAYER FUNCTIONS

//################################
		
function YouTube_StopVideo() {
	ytplayer.stopVideo();
}


function YouTube_PlayVideo() {

	ytplayer.playVideo();//Getting error does not support this function ???
}


function YouTube_PauseVideo() {
	ytplayer.pauseVideo();
}


function YouTube_SeekVideo(num,hold) {

	if(!num) num = 0;
	ytplayer.seekTo(num);

	if(hold) ytplayer.pauseVideo();
}


function YouTube_SeekStopVideo(num) {

	if(!num) num = 0;
	ytplayer.seekTo(num);
	
}


function YouTube_LoadVideo(video_id) {

	//alert('Load Video');

	//var video_id = '_qeF6eWhUn4';
	ytplayer.loadVideoById(video_id,2);
	YouTube_PauseVideo();

}


function YouTube_EndVideo() {


	Next_Video();

}



