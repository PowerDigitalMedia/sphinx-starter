
//#####################################################################

//REMOVE SWF

//######################################################################

function RemoveSwf_Video(call){


	var PREFIX = call;



	//##################################

	//REMOVE SWF
	//- use the created id or name of the swf 
	//- use the id or name set during embed in attributes 
	//- good practice to keep the name and id the same

	//#################################################

	
	swfobject.removeSWF(PREFIX+'flashswf_vidplayer');



	//###########################
	//CLEAR  
	//###########################


	//REMOVE THE FLASH ID
	if(document.getElementById(PREFIX+"flashswf_vid"))
	{
		var element = document.getElementById(PREFIX+"flashswf_vid");
		element.parentNode.removeChild(element);
	}//




	//############################
	//CLEAR  
	//###########################

	if(document.getElementById(PREFIX+'flashswf_vidplayer'))
	{
        var d = document.getElementById(PREFIX+"vidflash");
        var c = document.getElementById(PREFIX+'flashswf_vidplayer');
        d.removeChild(c);
	}//





}//END
//####





//#####################################################################

//CREATE SWF

//######################################################################

function CreateSwf_Video(call){


	RemoveSwf_Video(call);


	var PREFIX = call;


	var path_to_flash = zoneObj['path_to_flash'];
	var vid_width = zoneObj['vid_width'];
	var vid_height = zoneObj['vid_height'];



	//###############################
	//CHECK VIDEO TYPE / SET VARS
	//###############################

	var playback_boolean = false;


	//var random_number = Math.floor(Math.random()*9999);

    var videoplayertype  = zoneObj['videoplayertype'];//standard or youtube
	switch(videoplayertype)
	{
        case 'standard':

			var playback_boolean = true;
  
			var movie_name = "Standard Video Player";

			if(zoneObj['mainvideo_call'] == 'reply')
			{//RECORDED VIDEO

				var video_source = zoneObj['path_to_episode']+'replies/videos/'+zoneObj['videofile'];

            	//var video_source = '<?php echo $http_domain."controlpad/_userbin/".$pxl_User;?>/episode_video.flv';
    
			}
			else
			{
            	var video_source = zoneObj['videofile'];
			}//###




        break;
        case 'youtube':


			var playback_boolean = true;

            var xStr = zoneObj['videofile'];
            var xArr = xStr.split('-xplit-');
			var xVidPath = xArr[0];
			var xVidName = xArr[1];
			var xVidId = xArr[2];
			var xVidCall = xArr[3];

			var video_id = xVidId;
            
			var movie_name = "YouTube Video Player";

			var video_source = zoneObj['videofile'];


			//alert("YOUTUBE: "+video_source);


        break;
	}//END switch







	if(playback_boolean)
	{//TRUE

        //###########################
        //POSITION FLASH WRAPPER
        //###########################
    
       	document.getElementById(PREFIX+'vidflash').style.backgroundColor = 'black';
        document.getElementById(PREFIX+'vidflash').style.width = vid_width+'px';
        document.getElementById(PREFIX+'vidflash').style.height = vid_height+'px';
        //document.getElementById('vidflash').style.top = '0px';//for absolute divs
        //document.getElementById('vidflash').style.right = '0px';//for absolute divs
    
    
    
    
    
    /**/
        //#############################
        //CREATE FLASHSWF CONTAINER
        //#############################
    
       
        if(!document.getElementById(PREFIX+"flashswf_vidplayer")) 
        {
            var d = document.createElement("div");
            d.setAttribute("id", PREFIX+"flashswf_vidplayer");
    
            document.getElementById(PREFIX+"vidflash").appendChild(d);
    
        }//
		//####


    
        //###########################
        //SET SWF VARIABLES
        //###########################

		if(!zoneObj['videoautostart']) 
		{
			var auto_start = "no";
		}else{
			var auto_start = zoneObj['videoautostart'];
		}/////


		var current_time = zoneObj['current_time'];

		//alert("AUTO START: "+auto_start+"\nCURRENT TIME: "+current_time);


		var vSwf = path_to_flash;
        var vDiv = PREFIX+'flashswf_vidplayer';
		var vSwf_W = vid_width;
		var vSwf_H = vid_height;
		var vSwf_Name = PREFIX+'flashswf_vid';
		var vSwf_Id = PREFIX+'flashswf_vid';




/*
        var alrt = 'MOVIE NAME: '+movie_name+".....\n";
			alrt += 'VIDEO SOURCE: '+video_source+"\n";
			alrt += 'SWF: '+vSwf+"\n";
			alrt += 'WIDTH: '+vSwf_W+"\n";
			alrt += 'HEIGHT: '+vSwf_H+"\n";
			alrt += 'NAME: '+vSwf_Name+"\n";
			alrt += 'ID: '+vSwf_Id+"\n";
		alert(alrt);

*/



        var att = {
            data:vSwf, 
            width:vSwf_W, 
            height:vSwf_H,
            allowFullScreen:"true", 
            bgcolor:"000000",
			name:vSwf_Name,
			id:vSwf_Id

        };
        var par = {
            wmode:"opaque",
            flashvars:"MovieName="+movie_name+"&VideoSource="+video_source+"&AutoStart="+auto_start+"&CurrentTime="+current_time
        };
        var id = vDiv;

    
   
    
        //#######################################
        //RUN CREATE SWF FUNCTION
        //#######################################
    
        swfobject.createSWF(att, par, id);


	}//END if playback_boolean



	
}//END 
//####











