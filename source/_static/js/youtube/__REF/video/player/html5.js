


//###########################################

//KILL HTML5 VIDEO

//###########################################

function Html5_KillVideo(call){



	var PREFIX = call;



	if(document.getElementById(PREFIX+'html5_vid'))
	{
		var vid_file = '';
		var vid = document.getElementById(PREFIX+'html5_vid');
		vid.src = vid_file;

		var vid = document.getElementById(PREFIX+'vidhtml5_standard');
		var vidtag = document.getElementById(PREFIX+'html5_vid');
		vid.removeChild(vidtag);
	
	}/////
	if(document.getElementById(PREFIX+'vidhtml5_standard'))
	{
		document.getElementById(PREFIX+'vidhtml5_standard').style.display = 'none';
	}/////
		


	if(document.getElementById(PREFIX+'vidhtml5_youtube'))
	{

	
		/*
		var blank_video_id = "Kp-is_yTtjU";
		var youtube_src = 'http://www.youtube.com/embed/'+blank_video_id;
		var youtube_iframe = document.getElementById(PREFIX+'youtube_iframe');
		youtube_iframe.src = youtube_src;
*/

		//YouTube_StopVideo();


		if(document.getElementById(PREFIX+"youtube_iframe"))
		{
			var vid = document.getElementById(PREFIX+'vidhtml5_youtube');
			var ifrm = document.getElementById(PREFIX+"youtube_iframe");
			vid.removeChild(ifrm);
		}//


		document.getElementById(PREFIX+'vidhtml5_youtube').style.display = 'none';

	}/////







};//END




//############################################

//HTML5 VIDEO

//############################################



function Html5_Video(call){


	Html5_KillVideo(call);


	var PREFIX = call;


	//alert(PREFIX);


/*
	if(call == 'mainvideo_')
	{
		var vid_width = '349';
		var vid_height = '246';

	}else{
		var vid_width = '500';
		var vid_height = '300';
	}/////
*/
	var vid_width = zoneObj['vid_width'];
	var vid_height = zoneObj['vid_height'];

	var vid_width = '100%';
	var vid_height = '100%';




	var video_type = zoneObj['videoplayertype'];
	//var video_title = zoneObj['videotitle'];




	if(video_type == 'standard')
	{//STANDARD

		//alert("Standard video use html5 player\n"+zoneObj['videofile']);

		//##################
		//SET VARS
		//##################

		//var vid_src = '<?php echo $amzn_AcctPath;?>inventory/'+zoneObj['videofile'];
		//var vid_src = zoneObj['amzn_acct_path']+'inventory/'+zoneObj['videofile'];
		//var vid_src = 'http://www.demo.pxl.tv/show/_frmwrk/video/gizmo.mp4';

		var vid_src = zoneObj['videofile'];
		var vid_src = vid_src.replace(/\.json/gi,".mp4");



		//#################
		//CLEAR VIDEO
		//#################

		if(document.getElementById(PREFIX+'html5_vid'))
		{
			var vid = document.getElementById(PREFIX+'vidhtml5_standard');
			var vidtag = document.getElementById(PREFIX+'html5_vid');
			vid.removeChild(vidtag);
		
		}/////


		//#################
		//SET VIDEO
		//#################

		var vid = document.getElementById(PREFIX+'vidhtml5_standard');
		vid.style.display = 'inline';



			//=====================
			//VIDEO TAG
			//=====================
			var vidtag = document.createElement("video");
			vidtag.setAttribute('id',PREFIX+'html5_vid');
		
			if(zoneObj['autoplay_video'] 
			&& zoneObj['autoplay_video'] != undefined
			&& zoneObj['autoplay_video'] != null
			) 
			{
				vidtag.setAttribute('autoplay','autoplay');
			}//==

			vidtag.setAttribute('controls','controls');
			vidtag.setAttribute('width',vid_width);
			vidtag.setAttribute('height',vid_height);

	
		vid.appendChild(vidtag);

			
				//====================
				//VIDEO SOURCE
				//====================
				var vidsrc = document.createElement("source");
				vidsrc.setAttribute('id','html5_vidsrc');
				vidsrc.setAttribute('src',vid_src);
				vidsrc.setAttribute('type','video/mp4');
			
			
			vidtag.appendChild(vidsrc);
			//vidtag.src = vid_file;
			
			if(zoneObj['auto_next_video'] 
			&& zoneObj['auto_next_video'] != undefined
			&& zoneObj['auto_next_video'] != null
			) 
			{
				vidtag.addEventListener("ended", function() {Next_Video();});
			}//==





	}
	else
	{//YOUTUBE


		Html5_KillVideo(call);

		//alert(zoneObj['videofile']);

		//document.getElementById(PREFIX+'vidhtml5_youtube').style.display = 'inline';

		//#################
		//YOUTUBE SRC
		//#################

		var youtube_src = '//www.youtube.com/embed/'+zoneObj['videofile'];
		youtube_src += "?wmode=transparent";
		youtube_src += "&autoplay=1";
		youtube_src += "&enablejsapi=1";
		youtube_src += "&playerapiid=ytplayer";
		youtube_src += "&modestbranding=1";
		youtube_src += "&showinfo=0";
		youtube_src += "&rel=0";



/*
		var youtube_src = 'http://www.youtube.com/embed/'+xVidId+"?";
		youtube_src += "?rel=0";
		youtube_src += "&wmode=transparent";
		youtube_src += "&autoplay=0";
		youtube_src += "&modestbranding=1";
		youtube_src += "&showinfo=0";
		youtube_src += "&autohide=1";
		youtube_src += "&version=3";
		youtube_src += "&enablejsapi=1";
		youtube_src += "&playerapiid=ytplayer";
		youtube_src += "origin=http://www.zshows.pxl.tv";
*/









		//#################
		//PREBUILT IFRAME
		//#################
/*
		var youtube_iframe = document.getElementById(PREFIX+'youtube_iframe');
		youtube_iframe.src = youtube_src;
		youtube_iframe.width = vid_width;
		youtube_iframe.height = vid_height;
*/

		//#################
		//BUILD IFRAME
		//#################

		var vid = document.getElementById(PREFIX+'vidhtml5_youtube');
		vid.style.display = 'inline';


			if(document.getElementById(PREFIX+"youtube_iframe"))
			{
				var ifrm = document.getElementById(PREFIX+"youtube_iframe");
				vid.removeChild(ifrm);
			}//


		var vid_width = '100%';
		var vid_height = '100%';

			var ifrm = document.createElement("iframe");
			ifrm.setAttribute("id", PREFIX+"youtube_iframe");
			ifrm.setAttribute("type", "text/html");
			ifrm.setAttribute("frameborder", "0");
			ifrm.setAttribute("allowfullscreen","allowfullscreen");
			ifrm.setAttribute("mozallowfullscreen", "mozallowfullscreen");
			//ifrm.setAttribute("webkitallowfullscreen", "webkitallowfullscreen");
			ifrm.setAttribute("width", vid_width);
			ifrm.setAttribute("height", vid_height);
   			ifrm.setAttribute("src", youtube_src);


		//APPEND TO DOCUMENT
		vid.appendChild(ifrm);


		//SIZE IFRAME
		var ifrm = document.getElementById(PREFIX+"youtube_iframe");
  		//ifrm.style.width = vid_width+"px";
   		//ifrm.style.height = vid_height+"px"; 
  		ifrm.style.width = vid_width;
   		ifrm.style.height = vid_height; 


		//########################################
		//CHECK FOR IFRAME AND INITIALIZE PLAYER
		//########################################


		//NOTE - ytplayer must be set on the youtube_iframe_functions.js
		YT_ready(function(){
			var frameID = getFrameID(PREFIX+"youtube_iframe");
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


	}////END if
	//#########




};// END
//######



/*

<iframe src="your_page_url" 
			allowfullscreen="allowfullscreen" 
			mozallowfullscreen="mozallowfullscreen"
			 msallowfullscreen="msallowfullscreen" 
			oallowfullscreen="oallowfullscreen"
			 webkitallowfullscreen="webkitallowfullscreen"> 
</iframe> 


*/



