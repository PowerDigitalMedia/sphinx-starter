
	//###########################################

    function YTCDet_Init(){


		//alert('yt init');

		zoneObj['ytc_obj']['prevnext'] = 'init';

		zoneObj['ytc_obj']['search_type'] = 'channel';

		/*
		//zoneObj['channel_id'] = 'N/A';
		//zoneObj['channel_title'] = 'N/A';

	
		var query = document.getElementById("query");
		query.value = zoneObj['init_query'];//SEE initialize.js
		query.style.fontStyle='italic';
		query.style.color='#999';
		*/

		YTCDet_KeywordSearch();



    }//###






	//###########################################

    function YTCDet_KeywordSearch(){

		//alert('ytc_keywordsearch');

    	gapi.client.setApiKey('AIzaSyDyVHdwD6sDk37ttzaH3pjpcnCmxmm4rJM');
 		gapi.client.load('youtube', 'v3', function() {

			YTCDet_Request();

		});

    }//###



	//###########################################

    function YTCDet_Request(pagetoken,channelid) {

		//alert('request');



		//==========================================================
		
		var hierarchy = zoneObj['address_obj']['hierarchy'];
		var params_obj = zoneObj['address_obj']['params_obj'];
		var query_obj = zoneObj['address_obj']['query_obj'];
		
		var params_obj = ParseIt(params_obj);
		var query_obj = ParseIt(query_obj);

		//==========================================================
			


		//=============================================================
		// https://developers.google.com/youtube/v3/docs/videos/list
		// show options for the request
		//=============================================================


			/*

			//################################################
		
			zoneObj['search_type'] = 'general';
			var exitchannel_display = 'none';
			if(channelid)
			{ 
				zoneObj['search_type'] = 'channel';
				var exitchannel_display = 'inline';
			}//###
			document.getElementById('exitchannel').style.display = exitchannel_display;

			//#################################################
			*/


			

			/*
            var query = $('#query').val();
			if(query != zoneObj['query']) 
			{
				zoneObj['query'] = query;
			}//###

			if(query == zoneObj['init_query']) var query = '';
			*/


			//alert(zoneObj['query']+"===="+zoneObj['init_query']);
		


	

			if(!pagetoken) var pagetoken = '';

		
			//alert("SEARCH TYPE: "+zoneObj['search_type']+"\nQUERY: "+query+"\nPAGETOKEN: "+pagetoken+"\nCHANNELID: "+channelid);


			
			if(!channelid) var channelid = zoneObj['ytc_obj']['channel_id'];
			//alert(channelid);


			var order = 'date';



			var pub_before = query_obj['pubat'];



			/*
			string
			The order parameter specifies the method that will be used to order resources in the API response. 
			The default value is relevance.
			
			Acceptable values are:
			
				date � Resources are sorted in reverse chronological order based on the date they were created.
				rating � Resources are sorted from highest to lowest rating.
				relevance � Resources are sorted based on their relevance to the search query. This is the default value for this parameter.
				title � Resources are sorted alphabetically by title.
				videoCount � Channels are sorted in descending order of their number of uploaded videos.
				viewCount � Resources are sorted from highest to lowest number of views. 
							For live broadcasts, videos are sorted by number of concurrent 
							viewers while the broadcasts are ongoing.

			*/
			
		

			if(channelid)
			{
				var request = gapi.client.youtube.search.list({
	
					part: 'snippet', 
					maxResults: 30,
					order:order,
					publishedBefore:pub_before,
					channelId:channelid,
					pageToken:pagetoken
	
				});

			}else{
	
				var request = gapi.client.youtube.search.list({
	
					q: query,
					part: 'snippet', 
					maxResults: 30,
					order:order,
					pageToken:pagetoken
	
				});

			}//###




            request.execute(function(response){

            	//var obj = response.result;
            	var jstr = JSON.stringify(response.result);
           		//$('#search-container').html('<pre>' + jstr + '</pre>');

				//YTCDet_Show(jstr);


				zoneObj['ytc_obj']['jstr'] = jstr;



				//============================================

				var scrn = document.getElementById('scrn');

				var is_mobile = zoneObj['mobile_detect'];
					
				var scrn_w_threshold = 1200;

				//=============================================

				if(scrn.offsetWidth < scrn_w_threshold)
					var above_threshold = false;
				else
					var above_threshold = true;
					
					
				if(scrn.offsetWidth < 1040) 
					var above_mobi_threshold = false;
				else 
					var above_mobi_threshold = true;
				
				//=============================================

				if(is_mobile 
				|| !above_mobi_threshold
				)
				{
					zoneObj['use_html5'] = true;

					var packet = zoneObj['details_packet'];
					ShowVideo_Mobi(packet);
				}else{
					zoneObj['use_html5'] = true;

					var packet = zoneObj['details_packet'];
					ShowVideo_Web(packet);
				}//#

				//==============================================


            });

    }//###



	//###########################################


    function YTCDet_Prev() {

		zoneObj['ytc_obj']['prevnext'] = 'prev';

		var pagetoken = zoneObj['ytc_obj']['prevpagetoken'];

		switch(zoneObj['ytc_obj']['search_type'])
		{
		case'general':

			YTCDet_Request(pagetoken);
		break;
		case'channel':

			var channelid = zoneObj['ytc_obj']['channel_id'];
			YTCDet_Request(pagetoken,channelid);
		break;
		}//switch
		//#######

	}//###


    function YTCDet_Next() {

		zoneObj['ytc_obj']['prevnext'] = 'next';

		var pagetoken = zoneObj['ytc_obj']['nextpagetoken'];

		switch(zoneObj['ytc_obj']['search_type'])
		{
		case'general':

			YTCDet_Request(pagetoken);
		break;
		case'channel':


			var channelid = zoneObj['ytc_obj']['channel_id'];
			YTCDet_Request(pagetoken,channelid);
		break;
		}//switch
		//#######


	}//###


