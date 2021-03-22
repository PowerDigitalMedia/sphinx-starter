//###############################################################################
//###############################################################################
//###############################################################################




function YTCDet_Show(jstr){



	//========================================================

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

	zoneObj['ytc_obj']['prevpagetoken'] = prevpagetoken;
	zoneObj['ytc_obj']['nextpagetoken'] = nextpagetoken;

	zoneObj['ytc_obj']['results_per_page'] = resultsperpage;

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


	if(results_loop < 1) 
	{
		YT_Init();
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


	var scrn = document.getElementById('scrn');

	var grd_id = zoneObj['ytc_obj']['grd_id'];
	var grd = document.getElementById(grd_id);

	var parent_id = zoneObj['ytc_obj']['cel_id'];
	var parent = document.getElementById(parent_id);


	var indx = zoneObj['ytc_obj']['indx'];

	//=========================================================
	
	var A_threshold = zoneObj['ytc_obj']['thresh_obj']['threshold_1'];
	var B_threshold = zoneObj['ytc_obj']['thresh_obj']['threshold_2'];
	var C_threshold = zoneObj['ytc_obj']['thresh_obj']['threshold_3'];

	var above_threshold = A_threshold;
	var above_mobi_threshold = C_threshold;

	var above_cap_threshold = true;
	if(scrn.offsetWidth < 850) var above_cap_threshold = false;
	
	var above_inner_threshold = true;
	if(scrn.offsetWidth < 700) var above_inner_threshold = false;


	var max_w_int = 1200;
	var max_w_dif = 0;

	var scrn_w_threshold = max_w_int;

	//========================================================


	if(!A_threshold)
	{
		grd.style.width = "100%";
		grd.style.marginLeft = 0 + "px";
		//grd.style.backgroundColor = 'blue';

		//parent.style.backgroundColor = 'aqua';


	}//#


	//========================================================
	



	var itmz = obj['items'];



	//=========================================================
	//=========================================================
	//CMP

	var cmp_id = parent_id + "_" + "cmp";
	var cmp_cls = 'yt-channel';

		if(document.getElementById(cmp_id))	
		{
			var cmp = document.getElementById(cmp_id);
			parent.removeChild(cmp);
		}//
		
		var cmp = document.createElement("div");
		cmp.setAttribute("class", cmp_cls);
		cmp.setAttribute("id", cmp_id);

	parent.appendChild(cmp);




	var cmp = document.getElementById(cmp_id);
	//cmp.style.backgroundColor = 'pink';





	//=========================================================
	//=========================================================
	//CBAR

	var cbar_id = cmp_id + "_" + "cbar";
	var cbar_cls = 'cntrl-bar';
		
		var cbar = document.createElement("div");
		cbar.setAttribute("class", cbar_cls);
		cbar.setAttribute("id", cbar_id);

	cmp.appendChild(cbar);



		var label_id = cbar_id + "_" + "label";
		var label_cls = 'label';
			
			var label = document.createElement("div");
			label.setAttribute("class", label_cls);
			label.setAttribute("id", label_id);
	
		cbar.appendChild(label);


				var text = "YouTube Channel: "+zoneObj['ytc_obj']['channel_title'];

					var charlen = 32;
					var use_dots = true;

				var text = stringlib.LimitString(text,charlen,use_dots); 
				var node = document.createTextNode(text);


			label.appendChild(node);



	
		var shuttle_id = cbar_id + "_" + "shuttle";
		var shuttle_cls = 'shuttle';
			
			var shuttle = document.createElement("div");
			shuttle.setAttribute("class", shuttle_cls);
			shuttle.setAttribute("id", shuttle_id);
	
		cbar.appendChild(shuttle);
	




		//=============================================
	
		for(var j=0; j < prevnext_loop; j++)
		{
	

			if(prevnext_loop == 1)
			{

				switch(pon)
				{
				case 'prev':
		
					var text = "< PREV";
					var onclick = "YTCDet_Prev();";
				break;
				case 'next':
		
					var text = "NEXT >";
					var onclick = "YTCDet_Next();";
				break;
				}//switch
				//=======


			}else{

				switch(j)
				{
				case 0:
		
					var text = "< PREV";
					var onclick = "YTCDet_Prev();";
				break;
				case 1:
		
					var text = "NEXT >";
					var onclick = "YTCDet_Next();";
				break;
				}//switch
				//=======
	
			}//#



	
			var btn_id = shuttle_id + "_" + "btn" + j;
			var btn_cls = 'prevnext-btn';



				var bgcolor_over = "white";
				var bgcolor_out = "white";

				var txtcolor_over = "#0060BF";
				var txtcolor_out = "black";
				
				var onover = "javascript:overout.SimpleBtn('over','"+btn_id+"','"+bgcolor_over+"','"+txtcolor_over+"');";	
				var onout = "javascript:overout.SimpleBtn('out','"+btn_id+"','"+bgcolor_out+"','"+txtcolor_out+"');";

			
				var btn = document.createElement("div");
				btn.setAttribute("class", btn_cls);
				btn.setAttribute("id", btn_id);
				btn.setAttribute("onmouseover",onover);
				btn.setAttribute("onmouseout",onout);
				btn.setAttribute("onclick",onclick);
		
			shuttle.appendChild(btn);
	
					var node = document.createTextNode(text);
	
				btn.appendChild(node);
	

			var btn = document.getElementById(btn_id);
			//btn.style.backgroundColor = "black";
	
	
		}//for
		//====




	//===========================================
	//style

	var cbar = document.getElementById(cbar_id);
	cbar.style.marginTop = 15 + "px";

		//var shuttle = document.getElementById(shuttle_id);
		//shuttle.style.marginRight = 10 + "px";

	
	//=========================================================
	//=========================================================








	//=========================================================
	//=========================================================
	//ITMZ
	

	for(j=0; j < results_loop; j++)
	{


		//============================================================

		var itm = itmz[j];
		for(var k in itm)
		{
			if(k == 'id')
			{
				var id = itm[k]['videoId'];
			}//###
	
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


			}//###
	
	
		}//for in
		//#######



		//#######################################################
		//#######################################################

		// default quality = 120 x 90
		// default quality channel image = 88 x 88



		// medium quality video image = 320 x 180
		// medium quality channel image = 240 x 240
				
		// high quality = 480 x 320
		// hign quality channel image = 800 x 800


		//###########################
		//IMG VARS

		var width = 320;
		var height = 180;

		var divWidth = 200;
		var divHeight = (70/100) * divWidth;


		if(!A_threshold)
		{
			var divWidth = 100;
			var divHeight = (70/100) * divWidth;

		}//#



	
		var mod = 'fill_div';
	
		var imgarr = ImgVars(mod,divWidth,divHeight,width,height);
		var img_width = imgarr[0];
		var img_height = imgarr[1];
		var adjust_vars = imgarr[2];
	

		if(image && image != '' && image != null && image != undefined) 
			var show_image = true;
		else 
			var image = '';

		var img_src = image;
		if(img_src != '' && img_width != '' && img_height != '') var show_image = true;
	
	

				

		//===========================================================================
		//===========================================================================
		//===========================================================================
		//CENT
				
				
		var cent_id = cmp_id+"_cent"+j;
				
			var cent = document.createElement("div");
			cent.setAttribute("class", "cent");
			cent.setAttribute("id", cent_id);
					
		cmp.appendChild(cent);
				
				

			//######################################################
			//######################################################
			//RECID


/*

			//###################
			//VID TITLE

			var input_id = cent_id + "_vidtitle";
	
				var elInput = document.createElement("input");
				elInput.setAttribute("type","hidden");
				elInput.setAttribute("name","vidtitle");//Set with no index number to reference checkboxes
				elInput.setAttribute("id",input_id);
				elInput.setAttribute("value",title);
	
			cent.appendChild(elInput);
	


			//###################
			//VID ID

			var input_id = cent_id + "_vidid";
	
				var elInput = document.createElement("input");
				elInput.setAttribute("type","hidden");
				elInput.setAttribute("name","vidid");//Set with no index number to reference checkboxes
				elInput.setAttribute("id",input_id);
				elInput.setAttribute("value",id);
	
			cent.appendChild(elInput);




			//###################
			//VID URL

			var input_id = cent_id + "_vidurl";
	
				var elInput = document.createElement("input");
				elInput.setAttribute("type","hidden");
				elInput.setAttribute("name","vidurl");//Set with no index number to reference checkboxes
				elInput.setAttribute("id",input_id);
				elInput.setAttribute("value",watch_url);
	
			cent.appendChild(elInput);


*/




			//######################################################
			//######################################################
			//MASK
							
			var clear_id = cent_id + "_clear";


				//==============================================================

				var url = zoneObj['http_main_domain'] + zoneObj['ytc_obj']['record_id'] + "/";
				url += "?from=ytchannel";
				url += "&id="+id;
				url += "&i="+indx;
				url += "&j="+j;
				
				var onclick = "javascript:window.location.href = '"+url+"';";
	
				//===============================================================

					
					//"white_color":"#FFF",
					//"yellow_color":"#FF9",
					//"green_color":"#D9FFD9",
					//"blue_color":"#D5E6FF",
		
			
					//"mask_green_color":"#00FF00",
					//"mask_blue_color":"#0060BF",
					//"mask_trans_color":"transparent"


					var bgcolor_over = '#DDE9F0';
					//var bgcolor_over = '#D6E6EF';
					//var bgcolor_over = '#DEE6EF';

					var bgcolor_out = 'white';

				var onover = "javascript:Over_YTCel('"+cent_id+"','"+bgcolor_over+"');";
				var onout = "javascript:Out_YTCel('"+cent_id+"','"+bgcolor_out+"');";


								
				var elClear = document.createElement("div");
				elClear.setAttribute("class","clear");
				elClear.setAttribute("id",clear_id);
				elClear.setAttribute("onmouseover",onover);
				elClear.setAttribute("onmouseout",onout);
				elClear.setAttribute("onclick",onclick);
	
			cent.appendChild(elClear);






	
			//######################################################
			//######################################################
			//MASK
							
			var mask_id = cent_id + "_mask";
			
				var elMask = document.createElement("div");
				elMask.setAttribute("class","mask");
				elMask.setAttribute("id",mask_id);
				elMask.setAttribute("onmouseover",onover);
				elMask.setAttribute("onmouseout",onout);
				elMask.setAttribute("onclick",onclick);
	
			cent.appendChild(elMask);






		
	
			//######################################################
			//######################################################
			//SPRITE

/*
							
			var sprite_id = cent_id + "_sprite";
								
				var elSprite = document.createElement("div");
				elSprite.setAttribute("class","sprite");
				elSprite.setAttribute("id",sprite_id);
				//elSprite.setAttribute("onmouseover",onmouseover);
				//elSprite.setAttribute("onmouseout",onmouseout);
				//elSprite.setAttribute("onclick",onclick);
		
			cent.appendChild(elSprite);

*/
		
	
	
			//######################################################
			//######################################################
			//MAIN
							
			var main_id = cent_id + "_main";
								
				var elMain = document.createElement("div");
				elMain.setAttribute("class","main");
				elMain.setAttribute("id",main_id);
	
			cent.appendChild(elMain);
		



	
	
	
	
				//######################################################
				//######################################################
				//THMB
		
					var thmb_cls = "thmb";
					var thmb_id = cent_id+"_thmb";
	
					//var url = 'https://www.youtube.com/watch?v='+id;
			
					var elThmb = document.createElement("a");
					elThmb.setAttribute("class", thmb_cls);
					elThmb.setAttribute("id", thmb_id);
					//elThmb.setAttribute("href",url);
					//elThmb.setAttribute("target","_blank");
		
				elMain.appendChild(elThmb);



		
					var THUMB_IMG_ID = cent_id+"_img";
				
						var elImg = document.createElement("img");
						elImg.setAttribute("id", THUMB_IMG_ID);
						elImg.setAttribute("src", img_src);
						elImg.setAttribute("width", img_width);
						elImg.setAttribute("height", img_height);
						elImg.setAttribute("border", '0');
		
					elThmb.appendChild(elImg);
							
								
			
		
				//######################################################
				//######################################################
				//WRDS
		
		
					var wrdz_cls = "wrdz";
					var wrdz_id = cent_id+"_wrdz";
									
					var elWrdz = document.createElement("div");
					elWrdz.setAttribute("class", wrdz_cls);
					elWrdz.setAttribute("id", wrdz_id);
							
				elMain.appendChild(elWrdz);
			
			
						var _cls = "title";
						var _id = cent_id+"_title";
										
						var elem = document.createElement("div");
						elem.setAttribute("class", _cls);
						elem.setAttribute("id", _id);
								
					elWrdz.appendChild(elem);
		
							var node = document.createTextNode(title);
		
						elem.appendChild(node);
		
		
		
/*		
		
					//##################################
					//CHANNEL DATA
		
		
					switch(zoneObj['ytc_obj']['search_type'])
					{
					case'general':
							

						var onclick = "javascript:Make_Request(false,'"+channelid+"');";
											
			
							var _cls = "ank";
							var _id = cel_id+"_channel";
			
				
							var elem = document.createElement("div");
							elem.setAttribute("class", _cls);
							elem.setAttribute("id", _id);
							elem.setAttribute("onclick",onclick);
			
									
						elWrdz.appendChild(elem);
			
			
							var _cls = "ankr";
							var _id = _id+"_ankr";
			
			
								var ankr = document.createElement("a");
								ankr.setAttribute("class", _cls);
								ankr.setAttribute("id", _id);
								ankr.setAttribute("onclick",onclick);
				
							elem.appendChild(ankr);
				
									var node = document.createTextNode("SEE CHANNEL VIDEOS ( "+channeltitle+" ) ");
				
								ankr.appendChild(node);






					break;
					case'channel':
		
		
							var _cls = "line";
							var _id = cent_id+"_channel";
											
							var elem = document.createElement("div");
							elem.setAttribute("class", _cls);
							elem.setAttribute("id", _id);
									
						elWrdz.appendChild(elem);
		
		
								if(channeltitle == '') var channeltitle = "N/A";
								var node = document.createTextNode("CHANNEL NAME: "+channeltitle);
			
							elem.appendChild(node);
		
		
		
					break;
					}//switch
					//#######


*/
			
		
		
		
		
				//#################################
				//DESCR
		
				var _cls = "dline";
				var _id = cent_id+"_descr";
										
					var elem = document.createElement("div");
					elem.setAttribute("class", _cls);
					elem.setAttribute("id", _id);
								
				elWrdz.appendChild(elem);

		
						var node = document.createTextNode("DESCRIPTION: "+descr);
		
					elem.appendChild(node);
		
		
	
	
	



		//######################################################
		//######################################################
		//REPOSIDTION IMAGES 
				
		if(show_image)
		{
	
				
			var arr = adjust_vars.split('|');
			var call = arr[0];
			var top_margin = arr[1];
			var left_margin = arr[2];
					
			//alert(j+"---"+key+"----"+adjust_vars);
								
			if(call != 'none')
			{
				switch(call)
				{
				case'custom_aspect':
				case'readjust':
						
					document.getElementById(THUMB_IMG_ID).style.marginTop = top_margin+"px";
				break;
				case'too_wide':
				case'too_narrow':
						
					document.getElementById(THUMB_IMG_ID).style.marginLeft = left_margin+"px";
				break;
				case'fill_div':
						
					document.getElementById(THUMB_IMG_ID).style.marginTop = top_margin+"px";
					document.getElementById(THUMB_IMG_ID).style.marginLeft = left_margin+"px";
				break;
				}//###
			
			}//###
			
			
		}//if show_image
		//################






		//==========================================================================
		//style
		//==========================================================================


	
		var cent = document.getElementById(cent_id);
		
	
			var mask = document.getElementById(mask_id);
			mask.style.width = divWidth + "px";
			mask.style.height = divHeight + "px";
				
			
			var main = document.getElementById(main_id);
	
				var thmb = document.getElementById(thmb_id);
				thmb.style.width = divWidth + "px";
				thmb.style.height = divHeight + "px";
				
			
				var wrdz = document.getElementById(wrdz_id);
				wrdz.style.width = (main.offsetWidth - thmb.offsetWidth)-(30) + "px";
				wrdz.style.height = 'auto';
				//wrdz.style.backgroundColor = 'yellow';


		cent.style.height = main.offsetHeight + 10 + "px";
		
		
		if(j == results_loop - 1)
		{

			var cent = document.getElementById(cent_id);
			cent.style.marginBottom = "25px";


		}//#




			

	
	}//for j
	//######


	//=========================================================
	//=========================================================








	//=========================================================
	//=========================================================
	//CBAR

	var cbar_id = cmp_id + "_" + "cbar_b";
	var cbar_cls = 'cntrl-bar';
		
		var cbar = document.createElement("div");
		cbar.setAttribute("class", cbar_cls);
		cbar.setAttribute("id", cbar_id);

	cmp.appendChild(cbar);



		var label_id = cbar_id + "_" + "label";
		var label_cls = 'label';
			
			var label = document.createElement("div");
			label.setAttribute("class", label_cls);
			label.setAttribute("id", label_id);
	
		cbar.appendChild(label);


				var text = "YouTube Channel: "+zoneObj['ytc_obj']['channel_title'];

					var charlen = 32;
					var use_dots = true;

				var text = stringlib.LimitString(text,charlen,use_dots); 
				var node = document.createTextNode(text);

			label.appendChild(node);





	
		var shuttle_id = cbar_id + "_" + "shuttle";
		var shuttle_cls = 'shuttle';
			
			var shuttle = document.createElement("div");
			shuttle.setAttribute("class", shuttle_cls);
			shuttle.setAttribute("id", shuttle_id);
	
		cbar.appendChild(shuttle);
	




		//=============================================

	
		for(var j=0; j < prevnext_loop; j++)
		{
	
	
			if(prevnext_loop == 1)
			{

				switch(pon)
				{
				case 'prev':
		
					var text = "< PREV";
					var onclick = "YTC_Prev();";
				break;
				case 'next':
		
					var text = "NEXT >";
					var onclick = "YTC_Next();";
				break;
				}//switch
				//=======


			}else{

				switch(j)
				{
				case 0:
		
					var text = "< PREV";
					var onclick = "YTC_Prev();";
				break;
				case 1:
		
					var text = "NEXT >";
					var onclick = "YTC_Next();";
				break;
				}//switch
				//=======
	
			}//#

	
			var btn_id = shuttle_id + "_" + "btn" + j;
			var btn_cls = 'prevnext-btn';


				var bgcolor_over = "white";
				var bgcolor_out = "white";

				var txtcolor_over = "#0060BF";
				var txtcolor_out = "black";
				
				var onover = "javascript:overout.SimpleBtn('over','"+btn_id+"','"+bgcolor_over+"','"+txtcolor_over+"');";	
				var onout = "javascript:overout.SimpleBtn('out','"+btn_id+"','"+bgcolor_out+"','"+txtcolor_out+"');";

			
				var btn = document.createElement("div");
				btn.setAttribute("class", btn_cls);
				btn.setAttribute("id", btn_id);
				btn.setAttribute("onmouseover",onover);
				btn.setAttribute("onmouseout",onout);
				btn.setAttribute("onclick",onclick);
		
			shuttle.appendChild(btn);
	
					var node = document.createTextNode(text);
	
				btn.appendChild(node);
	
		
			var btn = document.getElementById(btn_id);
			//btn.style.backgroundColor = "black";
			


	
		}//for
		//====




	//===========================================
	//style

	var cbar = document.getElementById(cbar_id);
	cbar.style.marginBottom = 7 + "px";

		//var shuttle = document.getElementById(shuttle_id);
		//shuttle.style.marginRight = 10 + "px";

	
	//=========================================================
	//=========================================================






//#######################################################################################################
//#######################################################################################################
//#######################################################################################################





	if(grd.offsetHeight < 400)
	{
		var grd_h = "400px";
		grd.style.height = grd_h;
	
	}else{
		grd.style.height = 'auto';
	}//##



//#######################################################################################################
//#######################################################################################################
//#######################################################################################################



	var scrol = document.getElementById('scrol');
	scrol.scrollTop = 0;



}//func
//=====