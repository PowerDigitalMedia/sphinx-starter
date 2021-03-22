

//###########################################



//BROWSER COMMUNICATION



//###########################################   




/**/
//######################
//TO FLASH
//######################
function ToFlash_PlayMaxVid() {

	var PREFIX = zoneObj['prefix'];
	

	Flash_Obj(PREFIX+"flashswf_vid").FromBrowser_PlayMaxVid();

};//



/**/
//############################

//TO FROM MAIN VID FUNC

//############################

function ToFlash_MainVidFunc() {

	var PREFIX = zoneObj['prefix'];

	if(zoneObj['maxvid_is_on'])
	{
		Flash_Obj(PREFIX+"flashswf_vid_max").FromBrowser_MainVidFunc();
	}else{
		Flash_Obj(PREFIX+"flashswf_vid").FromBrowser_MainVidFunc();
	}

};


function FromFlash_MainVidFunc(playertype,currtime) {

	//alert('PLAYERTYPE: '+playertype+'\nVID TIME: '+currtime);
	var PREFIX = zoneObj['prefix'];

	zoneObj['current_time'] = currtime;



	if(zoneObj['maxvid_is_on'])
	{
	
		zoneObj['maxvid_is_on'] = false;//use to clear max video on comp_showhide.php
		zoneObj['maxoff'] = true;
		
		RemoveSwf_VidMax(PREFIX);
		
		var top_controls = document.getElementById("top_controls");
		top_controls.style.display = "none";
		top_controls.style.backgroundColor = 'transparent';
		top_controls.style.zIndex = '103';
		
		var viewer_controls = document.getElementById("viewer_controls");
		viewer_controls.style.display = "inline";
		viewer_controls.style.backgroundColor = 'transparent';
		viewer_controls.style.backgroundImage = 'url('+zoneObj['PATH_TO_MASTERSTYLE']+'viewer/controls/images/background.png)';
		viewer_controls.style.zIndex = '103';
		viewer_controls.style.width = '975px';
		viewer_controls.style.left = '0px';
		
		var viewer_controls_left = document.getElementById("viewer_controls_left");
		viewer_controls_left.style.display = "inline";
		viewer_controls_left.style.width = '284px';
		
		var viewer_controls_right = document.getElementById("viewer_controls_right");
		viewer_controls_right.style.display = "inline";
		viewer_controls_right.style.width = '281px';
		
		var max_screen = document.getElementById("max_screen");
		max_screen.style.display = 'inline';
		max_screen.style.top = '-750px';
		max_screen.style.zIndex = '101';	
		max_screen.style.backgroundColor = 'black';
	
	}//////////////////////
	
	

	//#################
	//TO SCROLLBOX
	//#################


	switch(PREFIX)
	{
	case'mainvideo_':

		zoneObj['yesno_mainvideo_max']='no';
		HideMax_TxtReplies();
		Hide_MainVideo();

		var indexnum = zoneObj['indexnum'];
		Show_MainVideo(indexnum);
	break;
	}//END



};
//########






//##########################
//FULLSCREEN
//##########################

function FromFlash_Max(playertype,currtime) {


	//alert("PLAYER TYPE: "+playertype+"\nCURRENT TIME: "+currtime);

	var PREFIX = zoneObj['prefix'];

	zoneObj['maxvid_is_on'] = true;//use to clear max video on comp_showhide.php
	zoneObj['current_time'] = currtime;

	RemoveSwf_Vid(PREFIX);


	var max_screen = document.getElementById("max_screen");
	max_screen.style.display = "inline";

	//CreateSwf_VidMax(PREFIX);

	Prepare_MaxVideo();


}//
//##################



//##########################
//FULLSCREEN
//##########################

function FromFlash_MaxOff(playertype,currtime) {

	//alert("PLAYER TYPE: "+playertype+"\nCURRENT TIME: "+currtime);


	var PREFIX = zoneObj['prefix'];


	zoneObj['maxvid_is_on'] = false;//use to clear max video on comp_showhide.php
	zoneObj['maxoff'] = true;


	switch(PREFIX)
	{
	case'mainvideo':

		zoneObj['current_time'] = currtime;
	break;
	case'video_':
	case'mm_video_':
	case'mp_video_':

		//zoneObj['current_time'] = '0';
		delete zoneObj['current_time'];
	break;
	default:
		zoneObj['current_time'] = currtime;
	break;
	}//END




	RemoveSwf_VidMax(PREFIX);


	var top_controls = document.getElementById("top_controls");
	top_controls.style.display = "none";
	top_controls.style.backgroundColor = 'transparent';
	top_controls.style.zIndex = '103';

	var viewer_controls = document.getElementById("viewer_controls");
	viewer_controls.style.display = "inline";
	viewer_controls.style.backgroundColor = 'transparent';
	viewer_controls.style.backgroundImage = 'url('+zoneObj['PATH_TO_MASTERSTYLE']+'viewer/controls/images/background.png)';
	viewer_controls.style.zIndex = '103';
	viewer_controls.style.width = '975px';
	viewer_controls.style.left = '0px';

	var viewer_controls_left = document.getElementById("viewer_controls_left");
	viewer_controls_left.style.display = "inline";
	viewer_controls_left.style.width = '284px';

	var viewer_controls_right = document.getElementById("viewer_controls_right");
	viewer_controls_right.style.display = "inline";
	viewer_controls_right.style.width = '281px';

	var max_screen = document.getElementById("max_screen");
	max_screen.style.display = 'inline';
	max_screen.style.top = '-750px';
	max_screen.style.zIndex = '101';	
	max_screen.style.backgroundColor = 'black';


/*
	//#################
	//TO MID SCREEN
	//#################

	switch(PREFIX)
	{
	case'mainvideo_':

	break;
	case'video_':

		var indexnum = zoneObj['indexnum'];
		Show_VideoDetails(indexnum);
	break;
	case'mm_video_':

		var inum = zoneObj['mm_inum'];
		var jnum = zoneObj['mm_jnum'];
		var side = zoneObj['mm_side'];

		ShowVideo_MM(inum,jnum,side);
	break;
	}//END

*/


	//#################
	//TO SCROLLBOX
	//#################


	switch(PREFIX)
	{
	case'mainvideo_':

		zoneObj['yesno_mainvideo_max']='no';
		HideMax_TxtReplies();
		Hide_MainVideo();

		/*
		var indexnum = zoneObj['indexnum'];
		var file = zoneObj['mainvideo_file'];
		Zone_MainVideo(indexnum,file,'reg');
		*/


		var indexnum = zoneObj['indexnum'];
		Show_MainVideo(indexnum);


	break;
	case'video_':

		Hide_VideoDetails();
	break;
	case'mm_video_':

		HideVideo_MM();
	break;
	case'mp_video_':

		HideVideo_MP();
	break;
	}//END



}//
//##################





//##########################
//RESET MOVIE
//##########################

function FromFlash_ResetVideoPlayer(playertype,currtime,regormax) {

	alert(playertype+"\n"+currtime+"\n"+regormax);

	zoneObj['current_time'] = currtime;


	switch(regormax)
	{
		case'reg':

			CreateSwf_Vid();
		break;
		case'max':

			CreateSwf_VidMax();
		break;
	}//



}//
//##################




//#############################
//VIEWEE BAR
//#############################

function FromFlash_ViewerControls(display){


	//TOP CONTROLS
	if(zoneObj['hold_maxvid_controls'] || zoneObj['txtreplies_is_open'])
	{

		var top_controls = document.getElementById("top_controls");
		top_controls.style.display = 'inline';
		top_controls.style.backgroundImage = 'url('+zoneObj['PATH_TO_MASTERSTYLE']+'viewer/controls/images/top_controls.png)';
	}else{
		var top_controls = document.getElementById("top_controls");
		top_controls.style.display = display;
		top_controls.style.backgroundImage = 'url('+zoneObj['PATH_TO_MASTERSTYLE']+'viewer/controls/images/top_controls.png)';
	}//


	//VIEWER CONTROLS
	var viewer_controls = document.getElementById("viewer_controls");
	viewer_controls.style.display = display;
	viewer_controls.style.backgroundImage = 'url('+zoneObj['PATH_TO_MASTERSTYLE']+'viewer/controls/images/background_max_video.png)';



}//







//########################################################################################



//PREVIOUS AND NEXT FUNCTIONS



//########################################################################################



//##########################
//PREV VIDEO
//##########################

function FromFlash_PrevVid(videotype,regormax) {


	

	var PREFIX = zoneObj['prefix'];

	switch(PREFIX)
	{
	//###################


	//MAINVIDEO


	//###################
	case'mainvideo_':



		var indexnum = zoneObj['indexnum'];
	
	
	
		//alert("CURRENT VIDEO...\n\tINDEXNUM:"+video_indexnum+"\n\tTYPE:"+videotype+"\n\tREG-OR-MAX:"+regormax);
	
	
	
		//#################################
		//SET VARIABLES / ARRAYS
		//#################################
	
		var mainvideo_vidreplies = zoneObj['mainvideo_vidreplies'];
		var filesArr = mainvideo_vidreplies.split('~');
		
		var numof = filesArr.length-1;
		zoneObj['numof_mv'] = numof;//used for thumbslider
	
	

		//alert("INDEXNUM: "+indexnum+"\nNUM OF: "+numof);


	
		if(indexnum == 'mainvideo')
		{
			
			var prev_video_indexnum = parseInt(numof)-1;

		}
		else
		{

			if(parseInt(indexnum) < parseInt(numof)) 
				var prev_video_indexnum = parseInt(indexnum)-1;
	

			//IF FIRST NUMBER
			if(parseInt(indexnum) == 0)
			{ 
				//alert('prev going to mainvideo');
				var prev_video_indexnum = 'mainvideo';
			}

		}//
	
	
		if(prev_video_indexnum == 'mainvideo')
		{
	
			zoneObj['indexnum'] = 'mainvideo';

			var theFile = zoneObj['init_mainvideo_file'];

			Zone_MainVideo('mainvideo','mainvideo',regormax);


			var str = theFile;
			var regex = /-xplit-/gi;
			var xplitMatch = str.match(regex);
		
		
			if(xplitMatch)
			{//YOUTUBE VIDEO
		
				//var file = "nofolder/-xplit-"+theFile;
				var file = theFile;
		
				zoneObj['videoplayertype'] = 'youtube';
				zoneObj['videofile'] = file;
				zoneObj['videoautostart'] = 'yes';
				zoneObj['path_to_flash'] = zoneObj['virtual_rootpath']+"_masterflash/video/ytvideoplayer.swf";
			}
			else
			{//STANDARD VIDEO
		
				var file = theFile;
	
				zoneObj['videoplayertype'] = 'standard';
				zoneObj['videofile'] = file;
				zoneObj['videoautostart'] = 'yes';
				zoneObj['path_to_flash'] = zoneObj['virtual_rootpath']+"_masterflash/video/videoplayer.swf";
						
			}//END xplit 
		
		}
		else
		{
	
			var theFile = filesArr[prev_video_indexnum];

			Zone_MainVideo(prev_video_indexnum,theFile,regormax);

		
			var str = theFile;
			var regex = /-xplit-/gi;
			var xplitMatch = str.match(regex);
		
		
			if(xplitMatch)
			{//YOUTUBE VIDEO
		

				//var file = "nofolder/-xplit-"+theFile;
				var file = theFile;
		
				zoneObj['videoplayertype'] = 'youtube';
				zoneObj['videofile'] = file;
				zoneObj['videoautostart'] = 'yes';
				zoneObj['path_to_flash'] = zoneObj['virtual_rootpath']+"_masterflash/video/ytvideoplayer.swf";
	
				
		
			}
			else
			{//STANDARD VIDEO
		
	
				var file = theFile;
		
				zoneObj['videoplayertype'] = 'standard';
				zoneObj['videofile'] = file;
				zoneObj['videoautostart'] = 'yes';
				zoneObj['path_to_flash'] = zoneObj['virtual_rootpath']+"_masterflash/video/videoplayer.swf";
					
		
			}//END xplit 
		
	

		}// if mainvideo



	
		//alert("INDEXNUM:"+indexnum+"\nREG-OR-MAX:"+regormax+"\nFILE: "+file);
	
	
		
		zoneObj['indexnum'] = prev_video_indexnum;
		zoneObj['current_time'] = '0';
		
		
		//alert("CURRENT VIDEO...\n\tINDEXNUM:"+next_video_indexnum+"\n\tTYPE:"+zoneObj['videoplayertype']+"\n\tREG-OR-MAX:"+regormax);
		
		switch(regormax)
		{
			case'reg':
	
				//CreateSwf_Video();
				var indexnum = prev_video_indexnum;
				Show_MainVideo(indexnum);
			break;
			case'max':
		
				Prepare_MaxVideo();
			break;
		}////

	break;
	//###################


	//VIDEO


	//###################
	case'video_':

		var indexnum = zoneObj['indexnum'];
		var numof = zoneObj['numof'];
		var files = zoneObj['files'];
		var filesArr = files.split('~');
	
	
		if(indexnum < numof) var prev_video_indexnum = parseInt(indexnum)-1;
		if(parseInt(indexnum) == 0) var prev_video_indexnum = parseInt(numof)-1;
		
	
		var theFile = filesArr[prev_video_indexnum];

	
		//alert("INDEXNUM: "+indexnum+"\nFILE: "+theFile);



		var str = theFile;
		var regex = /-xplit-/gi;
		var xplitMatch = str.match(regex);
	
	
		if(xplitMatch)
		{//YOUTUBE VIDEO
	
			/*
			var xStr = theFile;
			var xArr = xStr.split('-xplit-');
			var xVidName = xArr[0];
			var xVidId = xArr[1];			
			var xVidCall = xArr[1];
			*/
	

			var file = "nofolder/-xplit-"+theFile;
		
			zoneObj['videoplayertype'] = 'youtube';
			zoneObj['videofile'] = file;
			zoneObj['videoautostart'] = 'yes';
			zoneObj['path_to_flash'] = zoneObj['virtual_rootpath']+"_masterflash/video/ytvideoplayer.swf";
	
		}
		else
		{//STANDARD VIDEO
	

			var file = theFile;
	
			/*
			var fileArr = vFile.split('.');
			var video_name = fileArr[0];
			var video_ext = fileArr[1];
			*/
	
			zoneObj['videoplayertype'] = 'standard';
			zoneObj['videofile'] = file;
			zoneObj['videoautostart'] = 'yes';
			zoneObj['path_to_flash'] = zoneObj['virtual_rootpath']+"_masterflash/video/videoplayer.swf";
					
	
		}//END xplit 
	


		//alert("INDEXNUM:"+indexnum+"\nREG-OR-MAX:"+regormax+"\nFILE: "+file);


	
		zoneObj['indexnum'] = prev_video_indexnum;
		zoneObj['current_time'] = '0';
	
	
		//alert("CURRENT VIDEO...\n\tINDEXNUM:"+next_video_indexnum+"\n\tTYPE:"+zoneObj['video_type']+"\n\tREG-OR-MAX:"+regormax);
	
		switch(regormax)
		{
			case'reg':

				//CreateSwf_Video();
				var indexnum = prev_video_indexnum;
				Show_VideoDetails(indexnum);
			break;
			case'max':
	
				Prepare_MaxVideo();
			break;
		}////


	break;
	//###################


	//MULTIMEDIA VIDEO


	//###################
	case'mm_video_':

		var inum = zoneObj['mm_inum'];
		var jnum = zoneObj['mm_jnum'];
		var side = zoneObj['mm_side'];

		var indexnum = jnum;
		var numof = zoneObj['numof'];


		//alert("CURRENT VIDEO...\n\tINDEXNUM:"+indexnum+"\n\tTYPE:"+videotype+"\n\tREG-OR-MAX:"+regormax);



		if(indexnum < numof) var prev_video_indexnum = parseInt(indexnum)-1;
		if(parseInt(indexnum) == 0) var prev_video_indexnum = parseInt(numof)-1;
		
		zoneObj['mm_jnum'] = prev_video_indexnum;
		zoneObj['current_time'] = '0';


		switch(regormax)
		{
			case'reg':

				var inum = zoneObj['mm_inum'];
				var jnum = zoneObj['mm_jnum'];
				var side = zoneObj['mm_side'];
		
				ShowVideo_MM(inum,jnum,side)

			break;
			case'max':
	
				Prepare_MaxVideo();
			break;
		}////

	break;
	//###################


	//MEDIA PAGE


	//###################
	case'mp_video_':

		var inum = zoneObj['mm_inum'];
		var jnum = zoneObj['mm_jnum'];
		var side = zoneObj['mm_side'];

		var indexnum = jnum;
		var numof = zoneObj['numof'];


		//alert("CURRENT VIDEO...\n\tINDEXNUM:"+indexnum+"\n\tTYPE:"+videotype+"\n\tREG-OR-MAX:"+regormax);



		if(indexnum < numof) var prev_video_indexnum = parseInt(indexnum)-1;
		if(parseInt(indexnum) == 0) var prev_video_indexnum = parseInt(numof)-1;
		
		zoneObj['mm_jnum'] = prev_video_indexnum;
		zoneObj['current_time'] = '0';


		switch(regormax)
		{
			case'reg':

				var inum = zoneObj['mm_inum'];
				var jnum = zoneObj['mm_jnum'];
				var side = zoneObj['mm_side'];
		
				ShowVideo_MP(inum,jnum,side)

			break;
			case'max':
	
				Prepare_MaxVideo();
			break;
		}////

	break;
	}//END



}//
//#####






//##########################
//NEXT VIDEO
//##########################

function FromFlash_NextVid(videotype,regormax) {



	var PREFIX = zoneObj['prefix'];

	switch(PREFIX)
	{
	//###################

	//MAINVIDEO

	//###################
	case'mainvideo_':



		var indexnum = zoneObj['indexnum'];
	
	
	 //alert("CURRENT VIDEO...\n\tINDEXNUM:"+indexnum+"\n\tTYPE:"+videotype+"\n\tREG-OR-MAX:"+regormax);
	
		//#################################
		//SET VARIABLES / ARRAYS
		//#################################
	
		var mainvideo_vidreplies = zoneObj['mainvideo_vidreplies'];
		var filesArr = mainvideo_vidreplies.split('~');
		
		var numof = filesArr.length-1;
		zoneObj['numof_mv'] = numof;//used for thumbslider

	
		//alert("INDEXNUM: "+indexnum+"\nNUM OF: "+numof);

	
		if(indexnum == 'mainvideo')
		{
			var next_video_indexnum = '0';

		}
		else
		{
			if(parseInt(indexnum) < parseInt(numof)) 
				var next_video_indexnum = parseInt(indexnum)+1;


			//IF LAST NUMBER
			if(parseInt(indexnum) == parseInt(numof)-1) 
			{
				//alert('last number to mainvideo');
				var next_video_indexnum = 'mainvideo';

			}
		}//
			
	
		if(next_video_indexnum == 'mainvideo')
		{//MAINVIDEO

			zoneObj['indexnum'] = 'mainvideo';

			var theFile = zoneObj['init_mainvideo_file'];

			Zone_MainVideo('mainvideo','mainvideo',regormax);


			var str = theFile;
			var regex = /-xplit-/gi;
			var xplitMatch = str.match(regex);
		
		
			if(xplitMatch)
			{//YOUTUBE VIDEO
		
				//var file = "nofolder/-xplit-"+theFile;
				var file = theFile;
		
				zoneObj['videoplayertype'] = 'youtube';
				zoneObj['videofile'] = file;
				zoneObj['videoautostart'] = 'yes';
				zoneObj['path_to_flash'] = zoneObj['virtual_rootpath']+"_masterflash/video/ytvideoplayer.swf";
			}
			else
			{//STANDARD VIDEO
		
				var file = theFile;
	
				zoneObj['videoplayertype'] = 'standard';
				zoneObj['videofile'] = file;
				zoneObj['videoautostart'] = 'yes';
				zoneObj['path_to_flash'] = zoneObj['virtual_rootpath']+"_masterflash/video/videoplayer.swf";
						
			}//END xplit 
		
		}
		else
		{//VIDEO REPLIES
	
	
			var theFile = filesArr[next_video_indexnum];

			Zone_MainVideo(next_video_indexnum,theFile,regormax);


			var str = theFile;
			var regex = /-xplit-/gi;
			var xplitMatch = str.match(regex);
		
		
			if(xplitMatch)
			{//YOUTUBE VIDEO
		
				//var file = "nofolder/-xplit-"+theFile;
				var file = theFile;
		
			
				zoneObj['videoplayertype'] = 'youtube';
				zoneObj['videofile'] = file;
				zoneObj['videoautostart'] = 'yes';
				zoneObj['path_to_flash'] = zoneObj['virtual_rootpath']+"_masterflash/video/ytvideoplayer.swf";
			}
			else
			{//STANDARD VIDEO
		
				var file = theFile;

				var str = theFile;
				var regex = /videos\//gi;
				var inventoryMatch = str.match(regex);

				if(!inventoryMatch)
				{
					zoneObj['mainvideo_call'] = 'reply';
				}else{
					zoneObj['mainvideo_call'] = 'inventory';
				}


	
				zoneObj['videoplayertype'] = 'standard';
				zoneObj['videofile'] = file;
				zoneObj['videoautostart'] = 'yes';
				zoneObj['path_to_flash'] = zoneObj['virtual_rootpath']+"_masterflash/video/videoplayer.swf";




						
			}//END xplit 
		

		}// if mainvideo


		zoneObj['indexnum'] = next_video_indexnum;
		zoneObj['current_time'] = '0';
		
		//alert("INDEXNUM:"+indexnum+"\nREG-OR-MAX:"+regormax+"\nFILE: "+file);
		//alert("CURRENT VIDEO...\n\tINDEXNUM:"+next_video_indexnum+"\n\tTYPE:"+zoneObj['videoplayertype']+"\n\tREG-OR-MAX:"+regormax);
		
		switch(regormax)
		{
			case'reg':
	
				var indexnum = next_video_indexnum;
				Show_MainVideo(indexnum);
			break;
			case'max':
		
				Prepare_MaxVideo();
			break;
		}////


	break;
	//###################


	//VIDEO


	//###################
	case'video_':

		var indexnum = zoneObj['indexnum'];
		var numof = zoneObj['numof'];
		var files = zoneObj['files'];
		var filesArr = files.split('~');
	
	
		if(indexnum < numof) var next_video_indexnum = parseInt(indexnum)+1;
		if(parseInt(indexnum) == parseInt(numof)-1) var next_video_indexnum = 0;
			
	
		var theFile = filesArr[next_video_indexnum];

	
		//alert("INDEXNUM: "+indexnum+"\nFILE: "+theFile);


	
	
		var str = theFile;
		var regex = /-xplit-/gi;
		var xplitMatch = str.match(regex);
	
	
		if(xplitMatch)
		{//YOUTUBE VIDEO
	
			/*
			var xStr = theFile;
			var xArr = xStr.split('-xplit-');
			var xVidName = xArr[0];
			var xVidId = xArr[1];			
			var xVidCall = xArr[1];
			*/
	

			var file = "nofolder/-xplit-"+theFile;
		
	
			zoneObj['videoplayertype'] = 'youtube';
			zoneObj['videofile'] = file;
			zoneObj['videoautostart'] = 'yes';
			zoneObj['path_to_flash'] = zoneObj['virtual_rootpath']+"_masterflash/video/ytvideoplayer.swf";

			
		
	
		}
		else
		{//STANDARD VIDEO
	

			var file = theFile;
	
			/*
			var fileArr = vFile.split('.');
			var video_name = fileArr[0];
			var video_ext = fileArr[1];
			*/


			zoneObj['videoplayertype'] = 'standard';
			zoneObj['videofile'] = file;
			zoneObj['videoautostart'] = 'yes';
			zoneObj['path_to_flash'] = zoneObj['virtual_rootpath']+"_masterflash/video/videoplayer.swf";
					
			
	
		}//END xplit 
	


		//alert("INDEXNUM:"+indexnum+"\nREG-OR-MAX:"+regormax+"\nFILE: "+file);


	
		zoneObj['indexnum'] = next_video_indexnum;
		zoneObj['current_time'] = '0';
	
	
		//alert("CURRENT VIDEO...\n\tINDEXNUM:"+next_video_indexnum+"\n\tTYPE:"+zoneObj['videoplayertype']+"\n\tREG-OR-MAX:"+regormax);
	
		switch(regormax)
		{
			case'reg':

				//CreateSwf_Video();
				var indexnum = next_video_indexnum;
				Show_VideoDetails(indexnum);
			break;
			case'max':
	
				Prepare_MaxVideo();
			break;
		}////


	break;
	//###################


	//MULTIMEDIA VIDEO


	//###################
	case'mm_video_':

		var inum = zoneObj['mm_inum'];
		var jnum = zoneObj['mm_jnum'];
		var side = zoneObj['mm_side'];

		var indexnum = jnum;
		var numof = zoneObj['numof'];


		//alert("CURRENT VIDEO...\n\tINDEXNUM:"+indexnum+"\n\tTYPE:"+videotype+"\n\tREG-OR-MAX:"+regormax);


		if(indexnum < numof) var next_video_indexnum = parseInt(indexnum)+1;
		if(parseInt(indexnum) == parseInt(numof)-1) var next_video_indexnum = 0;
			
	
		
		zoneObj['mm_jnum'] = next_video_indexnum;
		zoneObj['current_time'] = '0';



		switch(regormax)
		{
			case'reg':

				var inum = zoneObj['mm_inum'];
				var jnum = zoneObj['mm_jnum'];
				var side = zoneObj['mm_side'];
		
				ShowVideo_MM(inum,jnum,side)

			break;
			case'max':
	
				Prepare_MaxVideo();
			break;
		}////

	break;
	//###################


	//MEDIA PAGE


	//###################
	case'mp_video_':

		var inum = zoneObj['mm_inum'];
		var jnum = zoneObj['mm_jnum'];
		var side = zoneObj['mm_side'];

		var indexnum = jnum;
		var numof = zoneObj['numof'];


		//alert("CURRENT VIDEO...\n\tINDEXNUM:"+indexnum+"\n\tTYPE:"+videotype+"\n\tREG-OR-MAX:"+regormax);


		if(indexnum < numof) var next_video_indexnum = parseInt(indexnum)+1;
		if(parseInt(indexnum) == parseInt(numof)-1) var next_video_indexnum = 0;
			
	
		
		zoneObj['mm_jnum'] = next_video_indexnum;
		zoneObj['current_time'] = '0';



		switch(regormax)
		{
			case'reg':

				var inum = zoneObj['mm_inum'];
				var jnum = zoneObj['mm_jnum'];
				var side = zoneObj['mm_side'];
		
				ShowVideo_MP(inum,jnum,side)

			break;
			case'max':
	
				Prepare_MaxVideo();
			break;
		}////

	break;
	}//END


}//
//#####





