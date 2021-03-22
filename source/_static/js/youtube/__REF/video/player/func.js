//#####################
//PREV
//#####################

function Prev_Video(){




}//
//#####



//#####################
//NEXT
//#####################

function Next_Video(){


	//alert('next video');





	
	//==========================================================
	
	var hierarchy = zoneObj['address_obj']['hierarchy'];
	var params_obj = zoneObj['address_obj']['params_obj'];
	var query_obj = zoneObj['address_obj']['query_obj'];
	
	var params_obj = ParseIt(params_obj);
	var query_obj = ParseIt(query_obj);

	//============================================================

	var is_mobile = zoneObj['mobile_detect'];

	//============================================================

	//============================================================
				
	var COOKIE_REC = zoneObj['result']['cookie_record'][0];
	var USR = zoneObj['result']['usr_record'][0];
	var REC = zoneObj['result']['rec'][0];
	var REX = zoneObj['result']['rex'];
				
	//============================================================


	//============================================================

	var record_id = params_obj[0];
	var record_id = record_id.replace(/\//g,"");


	//============================================================



	//=============================================================
	//VIDEO DATA
	//=============================================================

	switch(query_obj['from'])
	{
	case'evideo':

		var firstindx = query_obj['i'];
		var secondindx = query_obj['j'];

		var ENTRY = ParseIt(REC['data']);
	
		var INFORMATION = ENTRY['description'][0]['data'];
	
			var TYPE = INFORMATION['type'];
			var NAME = INFORMATION['name'];
			var IMAGE = INFORMATION['image'];
			var CAPTION = INFORMATION['caption'];
	
		var files = ENTRY['description'][firstindx]['data'];

		var file_num = secondindx;

		var requestid = files[file_num];


	break;
	case'video':

		var ENTRY = ParseIt(REC['data']);
	
		var INFORMATION = ENTRY['description'][0]['data'];
	
			var TYPE = INFORMATION['type'];
			var NAME = INFORMATION['name'];
			var IMAGE = INFORMATION['image'];
			var CAPTION = INFORMATION['caption'];
	
		var files = ENTRY['description'][1]['data'];

		var file_num = query_obj['i'];

		var requestid = files[file_num];


	break;
	case'ytchannel':



		//========================================================

		var jstr = zoneObj['ytc_obj']['jstr'];
		var obj = ParseIt(jstr);

	
		/*
		var alrt = '';
		for(var prop in obj)
		{
			alrt += prop+": "+obj[prop];
			alrt += "\n";
		}//for
		//####
		alert(alrt);
		*/
		
		//=========================================================

		var kind = obj['kind']; 
		var etag = obj['etag']; 
		var prevpagetoken = obj['prevPageToken']; 
		var nextpagetoken = obj['nextPageToken']; 
		var totalresults = obj['pageInfo']['totalResults']; 
		var resultsperpage = obj['pageInfo']['resultsPerPage'];

		//=========================================================

		//alert(prevpagetoken +"<>"+ nextpagetoken);
		//alert(totalresults +"---"+ resultsperpage);


		//=========================================================

		var totalitems = obj['items'].length;


		//=========================================================

		var totalpages = 1;
		if(totalresults > resultsperpage)
		{
			var totalpages = totalresults / resultsperpage;
			var totalpages = Math.floor(totalpages); 

		}//#

		//========================================================


		var results_loop = resultsperpage - 5;
		if(results_loop < 25)
		{
			var results_loop = totalitems;
		}//#


		if(results_loop > totalitems) 
		{
			var results_loop = totalitems;
		}//#


		//========================================================

		var pon = false;
		var prevnext_loop = 2;

			if(!prevpagetoken 
			|| prevpagetoken == undefined
			)
			{
		
				var prevnext_loop = 1;
				var pon = 'next';
		
			}//#
		
			if(!nextpagetoken 
			|| nextpagetoken == undefined
			)
			{
		
				var prevnext_loop = 1;
				var pon = 'prev';
		
			}//#


			if(results_loop == totalitems 
			)
			{
				var prevnext_loop = 1;
				var pon = 'prev';
		
			}//#



		if(totalresults < resultsperpage) var prevnext_loop = 0;


		//=========================================================

		if(pon && pon == 'prev') 
		{
			var pagenumber = totalpages;
			zoneObj['ytc_obj']['pagenumber'] = pagenumber;
		}
		else 
		if(pon && pon == 'next') 
		{
			var pagenumber = 1;
			zoneObj['ytc_obj']['pagenumber'] = pagenumber;

		}//#


		//=========================================================

		switch(zoneObj['ytc_obj']['prevnext'])
		{
		case'prev':


			if(parseInt(zoneObj['ytc_obj']['pagenumber']) > 1)
			{
				var pagenumber = zoneObj['ytc_obj']['pagenumber'];
				zoneObj['ytc_obj']['pagenumber'] = pagenumber - 1; 
			}//#

		break;
		case'next':

			if(parseInt(zoneObj['ytc_obj']['pagenumber']) <  totalpages - 1)
			{
				var pagenumber = zoneObj['ytc_obj']['pagenumber'];
				zoneObj['ytc_obj']['pagenumber'] = pagenumber + 1; 
			}//#

		break;
		}//#


		//=========================================================


		/*
		var alrt = '';
			alrt += "\nTOTALPAGES         : "+totalpages;
			alrt += "\nTOTAL RESULTS      : "+totalresults;
			alrt += "\nRESULTS PER PAGE   : "+resultsperpage;
			alrt += "\nTOTALT ITEMS       : "+totalitems;
			alrt += "\nRESULTS LOOP       : "+results_loop;
			alrt += "\nPREVNEXT LOOP      : "+prevnext_loop;
			alrt += "\nPREV PAGE TOKEN    : "+prevpagetoken;
			alrt += "\nNEXT PAGE TOKEN    : "+nextpagetoken;
			alrt += "\nPAGE NUMBER        : "+pagenumber;
		alert(alrt);
		*/


		//=========================================================

		var itmz = obj['items'];

		//=========================================================



	break;
	}//switch
	//=======
	//=============================================================
	//VIDEO DATA
	//=============================================================






	//=============================================================
	//VIDEO TITLE
	//=============================================================
	switch(query_obj['from'])
	{
	case'evideo':
	case'video':


		//=====================================================

		var curr_indx = file_num;
		var prev_indx = parseInt(curr_indx) - 1;
		var next_indx = parseInt(curr_indx) + 1;

		var total_numof = files.length;
		var total_numof = parseInt(total_numof); //make integer
		
		if(prev_indx < 0 
		)
		{
			var prev_indx = total_numof - 1;
		}

		if(next_indx == total_numof 
		|| next_indx > total_numof
		)
		{
			var next_indx = 0;
		}


		//============================================================

		var curr_id = files[curr_indx];
		var prev_id = files[prev_indx];
		var next_id = files[next_indx];

		//============================================================

/*
		var alrt = "\n=========== INDXS/IDS =============";

			alrt += "\nCURR INDX: "+curr_indx;
			alrt += "\nPREV INDX: "+prev_indx;
			alrt += "\nNEXT INDX: "+next_indx;

			alrt += "\n";

			alrt += "\nCURR ID: "+curr_id;
			alrt += "\nPREV ID: "+prev_id;
			alrt += "\nNEXT ID: "+next_id;

		console.log(alrt);

*/


		//============================================================

		var VIDEO_TITLE = '';

		var alrt = "\n=========== CURRENT FILE =============";

		var get = {'requestid':curr_id,'rex':REX};				
		var rob = new RecFromRex(get);
		if(rob)
		{
			for(var k in rob)
			{
				alrt += "\n"+k.toUpperCase() + " " + rob[k];
			}	

			var VIDEO_TITLE = rob['name'];				

		}//if rob
		//=======
		console.log(alrt);



		var alrt = "\n=========== PREV FILE =============";

		var get = {'requestid':prev_id,'rex':REX};				
		var rob = new RecFromRex(get);
		if(rob)
		{
			for(var k in rob)
			{
				alrt += "\n"+k.toUpperCase() + " " + rob[k];
			}					

		}//if rob
		//=======
		console.log(alrt);



		var alrt = "\n=========== NEXT FILE =============";

		var get = {'requestid':next_id,'rex':REX};				
		var rob = new RecFromRex(get);
		if(rob)
		{
			for(var k in rob)
			{
				alrt += "\n"+k.toUpperCase() + " " + rob[k];
			}					

		}//if rob
		//=======
		console.log(alrt);
		
		//============================================================

	

		if(!VIDEO_TITLE 
		|| VIDEO_TITLE == '' 
		|| VIDEO_TITLE == undefined
		)
		{
			var VIDEO_TITLE = '';
		}else{
			var VIDEO_TITLE = System_FileDisplay(VIDEO_TITLE);
			var VIDEO_TITLE = System_RemovePath(VIDEO_TITLE);
			var VIDEO_TITLE = System_RemoveExt(VIDEO_TITLE);
		}//##

		//===========================================================


	break;
	case'ytchannel':


		//this is the opposite of the system video gallery


		var curr_indx = query_obj['j'];//i = page j = video
		var next_indx = parseInt(curr_indx) - 1;
		var prev_indx = parseInt(curr_indx) + 1;

		var total_numof = itmz.length;
		var total_numof = parseInt(total_numof); //make integer


		if(next_indx < 0 
		)
		{
			var next_indx = total_numof - 1;
		}

		if(prev_indx == total_numof 
		|| prev_indx > total_numof
		)
		{
			var prev_indx = 0;
		}



		var alrt = "";
		for(var i=0; i < itmz.length; i++)
		{
			var itm = itmz[i];

			


			if(curr_indx == i)
			{

				alrt += "\n========== CURRENT ITM ===========";
				for(var k in itm)
				{


	
					if(k == 'id')
					{
						var curr_id = itm[k]['videoId'];
					}
					else
					if(k == 'snippet')
					{
						
						var pubat = itm[k]['publishedAt'];
						var channelid = itm[k]['channelId'];

						var title = itm[k]['title'];
						var descr = itm[k]['description'];

						var dimage = itm[k]['thumbnails']['default']['url'];
						var mimage = itm[k]['thumbnails']['medium']['url'];
						var himage = itm[k]['thumbnails']['high']['url'];

						var image = mimage;

						var channeltitle = itm[k]['channelTitle'];


						var VIDEO_TITLE = title;



						var snip = itm['snippet'];
						for(var key in snip)
						{
							alrt += "\n"+k.toUpperCase() + " " + snip[key];
						}
						alrt += "\n";



					}else{

						alrt += "\n"+k.toUpperCase() +" "+itm[k];
					}
				}
				alrt += "\n";

			}//#



			//===============================================================================

			if(prev_indx == i
			) 
			{

				alrt += "\n========== PREVIOUS ITM ===========";
				for(var k in itm)
				{

					if(k == 'id')
					{
						var prev_id = itm[k]['videoId'];
					}
					else
					if(k == 'snippet')
					{
						
						var pubat = itm[k]['publishedAt'];
						var channelid = itm[k]['channelId'];

						var title = itm[k]['title'];
						var descr = itm[k]['description'];

						var dimage = itm[k]['thumbnails']['default']['url'];
						var mimage = itm[k]['thumbnails']['medium']['url'];
						var himage = itm[k]['thumbnails']['high']['url'];

						var image = mimage;

						var channeltitle = itm[k]['channelTitle'];


				

						var snip = itm['snippet'];
						for(var key in snip)
						{
							alrt += "\n"+k.toUpperCase() + " " + snip[key];
						}
						alrt += "\n";



					}else{

						alrt += "\n"+k.toUpperCase() +" "+itm[k];
					}

				}
				alrt += "\n";

			}//#



			//========================================================================

			if(next_indx == i
			) 
			{

				alrt += "\n========== NEXT ITM ===========";
				for(var k in itm)
				{


					if(k == 'id')
					{
						var next_id = itm[k]['videoId'];
					}
					else
					if(k == 'snippet')
					{
						
						var pubat = itm[k]['publishedAt'];
						var channelid = itm[k]['channelId'];

						var title = itm[k]['title'];
						var descr = itm[k]['description'];

						var dimage = itm[k]['thumbnails']['default']['url'];
						var mimage = itm[k]['thumbnails']['medium']['url'];
						var himage = itm[k]['thumbnails']['high']['url'];

						var image = mimage;

						var channeltitle = itm[k]['channelTitle'];


				

						var snip = itm['snippet'];
						for(var key in snip)
						{
							alrt += "\n"+k.toUpperCase() + " " + snip[key];
						}
						alrt += "\n";



					}else{

						alrt += "\n"+k.toUpperCase() +" "+itm[k];
					}

				}
				alrt += "\n";

			}//#



		}
		console.log(alrt);



		//============================================================


	


	break;
	}//switch
	//=======
	//===================================================================
	//VIDEO TITLE
	//===================================================================





	//===================================================================
	//window location 
	//===================================================================

	switch(query_obj['from'])
	{
		case'evideo':


			var url = zoneObj['http_main_domain'] + record_id + "/";
			url += "?from=evideo";
			url += "&i="+query_obj['i'];
			url += "&j="+next_indx;
			

		break;
		case'video':

			var url = zoneObj['http_main_domain'] + record_id + "/";
			url += "?from=video";
			url += "&i="+next_indx;
			//url += "&j="+query_obj['j'];
				

		break;
		case'ytchannel':

			
			var url = zoneObj['http_main_domain'] + record_id + "/";
			url += "?from=ytchannel";
			url += "&id="+next_id;
			url += "&i="+query_obj['i'];
			url += "&j="+next_indx;
			url += "&cid="+query_obj['cid'];
			url += "&pubat="+query_obj['pubat'];

		
		
		break;
	}//switch
	//=======

	window.location.href = url;

	//===================================================================
	//window location
	//===================================================================



}//
//#####




//#####################
//NEXT
//#####################

function End_Video(){


	Next_Video();


}//
//#####



