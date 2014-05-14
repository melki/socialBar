  	function social(media,url){
  		$("body").prepend('<div id="fb-root"></div>'+
	'<script>(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];'+
  'if (d.getElementById(id)) return;'+
  'js = d.createElement(s); js.id = id;'+
  'js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&appId=593301434090920&version=v2.0";'+
  'fjs.parentNode.insertBefore(js, fjs);'+
'}(document, \'script\', \'facebook-jssdk\'));</script>'+
  		"<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>"+
  		'<script src="https://apis.google.com/js/plusone.js"></script>');


		$(".paper").prepend("<div class='social_top'></div>");
	  	for (var i = 0; i < media.length; i++) {
	  		$(".social_top").append('<a '+ linkContent(i) +' ><div  class="social_logo"></div></a>');
	  	};

	  	$(".social_logo").each(function(i){

	  		$(this).css("background-color",color(i)).html("<img src='img/icon/"+media[i]+".png' class='social_img' />")

	  	});

	function linkContent(i){
		if(media[i]=="fb")
		{
			return 'rel:gt_act="share/facebook/share" type="box_count" target="_new" onclick="var sTop = window.screen.height/2-(218); var sLeft = window.screen.width/2-(313);window.open(this.href,\'sharer\',\'toolbar=0,status=0,width=626,height=256,top=\'+sTop+\',left=\'+sLeft);fbSharePixel();return false;" href="http://www.facebook.com/sharer.php?u='+url+'"';
		}
		if(media[i]=="tw")
		{
			return 'href=http://twitter.com/home?status='+encodeURI('Claim your Free Tarot reading today !')+'+'+encodeURI(url)+'';
		}
			if(media[i]=="gp")
		{
			return 'href="https://plus.google.com/share?url='+encodeURI(url)+'"';
		}
		if(media[i]=="pint")
		{
			return 'href="http://pinterest.com/pin/create/bookmarklet/?media='+encodeURI("http://www.trustedtarot.com/img2/tarot-header.gif")+'&url='+encodeURI(url)+'&is_video=false&description='+encodeURI('Claim your Free Tarot reading today !')+'"';
		}
		if(media[i]=="st")
		{
			return 'href="http://www.stumbleupon.com/submit?url='+encodeURI(url)+'&title='+encodeURI('Claim your Free Tarot reading today !')+'"';
		}
		if(media[i]=="mail")
		{
			return 'href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site '+encodeURI(url)+'" title="Share by Email"';
		}
	}  	

	function color (i) {
		if(media[i]=="pint")
		{
			return "cb2026";
		}
		if(media[i]=="fb")
		{
			return "3b5997";
		}
		if(media[i]=="tw")
		{
			return "00aced";
		}
		if(media[i]=="gp")
		{
			return "30c139";
		}
		if(media[i]=="mail")
		{
			return "008080";
		}
		if(media[i]=="wa")
		{
			return "58cb3f";
		}	
		if(media[i]=="st")
		{
			return "eb4924";
		}
	}

	 $(function () {
	 		 var smallIcons = false;	
             var $window = $(window);
             $window.scroll(function () {
                if($window.scrollTop()>=100 && smallIcons == false)
                {
                	smallIcons = true;
                	addSmallIcons(media);
                }
                if($window.scrollTop()<100 && smallIcons == true)
                {
                	smallIcons = false;
                	deleteSmallIcons();
                }

                 
             });

         });

	 function addSmallIcons (media) {
	 	$("body").append("<div class='small_container'></div>");
	 	for (var i = 0; i < 4; i++) {
	  		$(".small_container").append("<a "+ linkContent(i) +" ><div class='small_social_logo'></div></a>");
	  		$(".small_social_logo").each(function(i){

	  		$(this).css("background-color",color(i)).html("<img src='img/icon/"+media[i]+".png' class='small_social_img' />");

	  		});

	  	};
	  	$(".small_container").append("<div id='close_button'></div>");
	  	$("#close_button").html("<img src='img/icon/close.png' class='close' />").css("background-color","grey");
            $(".close").click(function(){
            	deleteSmallIcons();
            });
	 }
            	
            

	 function deleteSmallIcons()
	 {
	 	$(".small_container").remove();
	 }
	}