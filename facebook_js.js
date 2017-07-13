 $( document ).ready(function() {

 	var url="https://graph.facebook.com/me?fields=id,name,picture.height(400),cover,gender,hometown,age_range,photos{images},first_name,middle_name,last_name,movies{name,picture.height(400)}&&access_token=";
 	//Change access token here
	var at="EAACEdEose0cBAIZBe4rAPyzdpZBxd44321n15lPjOTIGHUvjZAD9e8662ZCYZBUB4RW2bFZCOZBda9mDAUL4GdgLgy2gTIyUPPW7965XN5JhDYzFUtcbtj5f0pFoUfZBrGkJMHfc04pbmTlOjR4ZCNfZBoV7FRRL98eDED8SfVDVXQ0j8Awt8pDDKKDZBziV1Q8cuAZD";
	
	url=url+at;
	var about=0;
	var friend=0;
	var pic=0;
	var feed=0;
	var w1;
	var click_fr=0;
	var click_fe=0;


	//Ajax request for contents of main page
	$.ajax(url,{

	                type:'GET',
	                success : function(response){
	                    console.log(url);
	                    setJumbo(response);
	                    setAbout(response);
	                    setMovies(response);
	                    setPhotos(response);
	                    setPic1Height();
						setMovieHeight();
	
	
	             
	                },
	                error : function(request,errorType,errorMessage){
	                    console.log(request);
	                    console.log(errorType);
	                },
	                timeout:3000
	            }//end argument list s



	        );// end ajax call 

	//Ajax request for contents of about section
function abt_ajax(){
	about=about+1;
	if(about==1)
	{
	var url="https://graph.facebook.com/me?fields=id,sports,birthday,gender,languages,tagged_places,hometown,email,age_range,interested_in,first_name,middle_name,last_name,relationship_status,family{name}&&access_token=";
	url=url+at;
	$.ajax(url,{

	                type:'GET',
	                success : function(response){
	                    console.log(url);
	                    setBasicInfoTable(response);
	                    setContactTable(response);
	                    setFamTable(response);
	                    setPlaceTable(response);
	                    setSportsTable(response);
	                   
	                },
	                error : function(request,errorType,errorMessage){
	                    console.log(request);
	                    console.log(errorType);
	                },
	                timeout:3000
	            }//end argument list s
		);
	}
}

	//Ajax request for contents of friend section
function friend_ajax(){
	friend=friend+1;
	if(friend==1){
	var url="https://graph.facebook.com/me?fields=family{picture.height(400),name}&&access_token=";
	url=url+at;
	$.ajax(url,{

	                type:'GET',
	                success : function(response){
	                    console.log(url);
	                   setFriends(response);
	             		setFriendHeight();
	                },
	                error : function(request,errorType,errorMessage){
	                    console.log(request);
	                    console.log(errorType);
	                },
	                timeout:3000
	            }//end argument list s
);
}
}

	


	//Ajax request for contents of feed page
function feed_ajax(){
	feed++;
	if(feed==1)
	{
	var url="https://graph.facebook.com/me?fields=picture,name,posts{full_picture,name,story,comments.limit(1).summary(true),likes.limit(1).summary(true)}&&access_token=";
	url=url+at;
	$.ajax(url,{

	                type:'GET',
	                success : function(response){
	                  console.log(url);
	                  setFeed(response);
	                  setFeedHeight();
	             
	                },
	                error : function(request,errorType,errorMessage){
	                    console.log(request);
	                    console.log(errorType);
	                },
	                timeout:3000
	            }//end argument list s
);
}
}


	//Adjust div height according to orientation
	$(window).on("orientationchange",function(){

	if($(".photos").is(':visible'))
	{
		setPic1Height();
		setMovieHeight();
	}
	if($(".friends").is(':visible'))
	{
		setFriendHeight();
	}
	if($(".feed").is(':visible'))
	{
		setFeedHeight();
	}
	
	
	
	

});
	

	//Initially hiding all sections except main page
	$(".about-section").hide();
	$("#about-contact").hide();
	$("#about-fam-rel").hide();
	$("#about-places").hide();
	$("#about-sports").hide();
	$(".friends").hide();
	$(".photo").hide();
	$(".feed").hide();


	//On-click for visibility of about section and hiding contents of other sections
	$("#abt").click(function(){

    	$(".aboutnew").hide();
    	$(".photos").hide();
    	$(".movies").hide();
    	$(".friends").hide();
    	$(".photo").hide();
    	$(".feed").hide();
    	$(".about-section").show(1000);
    	$("#about-contact").hide();
		$("#about-fam-rel").hide();
		$("#about-places").hide();
		$("#about-sports").hide();
			$("#basic-info").show(1000);
    	abt_ajax(at);
    	$("#timeline").removeClass("active");
    	$("#abt").addClass("active");
    	$("#fri").removeClass('active');
    	$("#pho").removeClass('active');

	});

	//On-click for visibility of timeline section and hiding contents of other sections
	$("#timeline").click(function(){
    	$("#click-basic-info").addClass("active");$("#click-about-contact").removeClass("active");$("#click-fam-rel").removeClass("active");$("#click-places").removeClass("active");$("#click-sports").removeClass("active");
    	$(".about-section").hide();
    	$(".friends").hide();
    	$(".photo").hide();
    	$(".feed").hide();
    	$(".aboutnew").show(1000);
    	$(".photos").show();
    	$(".movies").show();
    	 setPic1Height();
	     setMovieHeight();
    	$("#abt").removeClass("active");
    	$("#timeline").addClass("active");
    	$("#fri").removeClass('active');
    	$("#pho").removeClass('active');
    	$("#feed").removeClass('active');
	});

	//On-click for visibility of friend section and hiding contents of other sections
		$("#fri").click(function(){
			click_fr++;
			$("#click-basic-info").addClass("active");$("#click-about-contact").removeClass("active");$("#click-fam-rel").removeClass("active");$("#click-places").removeClass("active");$("#click-sports").removeClass("active");
		
		$(".aboutnew").hide();
		$(".photo").hide();
    	$(".photos").hide();
    	$(".feed").hide();
    	$(".about-section").hide();
    	$(".movies").hide();
    	$(".friends").show();
    	friend_ajax();
    	if(click_fr>1)
    		setFriendHeight();
    	$("#timeline").removeClass("active");
    	$("#abt").removeClass("active");
    	$("#fri").addClass('active');
    	$("#pho").removeClass('active');
    	$("#feed").removeClass('active');
    	

	});



	//On-click for visibility of feed section and hiding contents of other sections
		$("#feed").click(function(){
			click_fe++; 
  		$(".friends").hide();
  		$("#click-basic-info").addClass("active");$("#click-about-contact").removeClass("active");$("#click-fam-rel").removeClass("active");$("#click-places").removeClass("active");$("#click-sports").removeClass("active");
    	$(".photos").hide();
    	$(".photo").hide();
    	$(".about-section").hide();
    	$(".movies").hide();
    	$(".aboutnew").show();
    	feed_ajax();
    	$(".feed").show(1000);
    	if(click_fe>1)
    		setFeedHeight();
    	$("#timeline").removeClass("active");
    	$("#abt").removeClass("active");
    	$("#fri").removeClass('active');
    	$("#pho").removeClass('active');

	});

	//On-click for visibility of contents of about section and hiding contents of other sections
	$("#entry0").click(function() {
	
		$("#click-basic-info").addClass("active");$("#click-about-contact").removeClass("active");$("#click-fam-rel").removeClass("active");$("#click-places").removeClass("active");$("#click-sports").removeClass("active");
		$("#about-contact").hide();
		$("#about-fam-rel").hide();
		$("#about-places").hide();
		$("#about-sports").hide();
			$("#basic-info").show(1000);
	});
	$("#entry1").click(function() {
		
		$("#click-about-contact").addClass("active");$("#click-basic-info").removeClass("active");$("#click-fam-rel").removeClass("active");$("#click-places").removeClass("active");$("#click-sports").removeClass("active");
		$("#basic-info").hide();
		$("#about-fam-rel").hide();
		$("#about-places").hide();
		$("#about-sports").hide();
		$("#about-contact").show(1000);
	});
	$("#entry2").click(function() {
		
		$("#click-fam-rel").addClass("active");$("#click-about-contact").removeClass("active");$("#click-basic-info").removeClass("active");$("#click-places").removeClass("active");$("#click-sports").removeClass("active");
		$("#about-contact").hide();
		$("#basic-info").hide();
		$("#about-places").hide();
		$("#about-sports").hide();
		$("#about-fam-rel").show(1000);
	});
	$("#entry3").click(function() {
		
		$("#click-places").addClass("active");$("#click-about-contact").removeClass("active");$("#click-basic-info").removeClass("active");$("#click-fam-rel").removeClass("active");$("#click-sports").removeClass("active");
		$("#about-contact").hide();
		$("#about-fam-rel").hide();
		$("#basic-info").hide();
		$("#about-sports").hide();
		$("#about-places").show(1000);
	});
	$("#click-sports").click(function() {
		
		$("#click-sports").addClass("active");$("#click-about-contact").removeClass("active");$("#click-basic-info").removeClass("active");$("#click-places").removeClass("active");$("#click-fam-rel").removeClass("active");
		$("#about-contact").hide();
		$("#about-fam-rel").hide();
		$("#about-places").hide();
		$("#basic-info").hide();
		$("#about-sports").show(1000);
	});







	//Function for setting jumbotron and profile image
	function setJumbo(response){
		$(".myName").append('<center><a class="navbar-brand" href="#" id="myname"><b>'+response.name+'</a>');
	     $("#name1").html(response.name);
	    $("#myImg").attr("src",response.picture.data.url);
	   	
	     $(".jumbotron").css('background-image','url('+response.cover.source+')');
	}

	//Function for setting info section on main page
	function setAbout(response){
			function setFullName(response){
			var name="";
			if(response.first_name!=undefined)
				name=name+response.first_name;
			if(response.middle_name!=undefined)
				name=name+" "+response.middle_name;
			if(response.last_name!=undefined)
				name=name+" "+response.last_name;
			if(name!=="")
			$("#full-name").text(name);
			else
				$("#full-name").text("-");
			}
			function setGender(g)
			{
				if(g.gender!=undefined)
				{
					function capitalizeFirstLetter(string) {
					    return string.charAt(0).toUpperCase() + string.slice(1);
					}
					var gender=capitalizeFirstLetter(g.gender);
					$("#gender").text(gender);
				}
				else
					$("#gender").text("-");

			}
			function setAge(a){
				if(a.age_range.min!=undefined)
					$("#age").text(a.age_range.min);
				else
					$("#age").text("-");
			}
			

			setFullName(response);
			setGender(response);
			setAge(response);
			$("#home").text(response.hometown.name);
		}


	//Function for setting movies section in main page	
	function setMovies(response){
		function setHead(h){
			var id="";
			for(i in h){
				if(i>2)
					break;
				else
				{

					id="#moviehead"+i;
					$(id).text(h[i].name);
					console.log(id);
				}
			}

		}
		function setMoviePic(mp){
			var id="";
			for(i in mp){
				if(i>3)
					break;
				else
				{

					id="#movieimg"+i;
					$(id).css('background-image','url('+mp[i].picture.data.url+')');
					console.log(mp[i].picture.url);
					console.log(url);
				}
			}

		}
		if(response.movies.data.length===0||response.movies.data==undefined)
		{
			$('#movieimg0').html("<h4>NO MOVIES</h4>");
		}
		else
		{
			setHead(response.movies.data);
			setMoviePic(response.movies.data);
		}
		
	}

	//Function for setting photos in main page
	function setPhotos(p){
		function setPic(sp){
			var id="";
			for(i in sp){
				if(i>3)
					break;
				else
				{

					id="#photoimg"+i;
					$(id).css('background-image','url('+sp[i].images[i].source+')');
					console.log(sp[i].source);
					console.log(id);
				}
			}

		}
		if(p.photos.data.length===0||p.photos.data==undefined)
		{
			$('#photoimg0').html("<h4>NO PHOTOS</h4>");
		}
		else
		{
			setPic(p.photos.data);
		}
		
		
	}

	//Function for setting basic info table in about section
	function setBasicInfoTable(response){
		function setFname(response){
			var name="";
			if(response.first_name!=undefined)
				name=name+response.first_name;
			if(response.middle_name!=undefined)
				name=name+" "+response.middle_name;
			if(response.last_name!=undefined)
				name=name+" "+response.last_name;
			if(name!=="")
			$("#tinfo-body-value-0").text(name);
			else
				$("#tinfo-body-value-0").text("-");
		}

		function setDateOfBirth(d){
			var foo = d.birthday;
			var arr = foo.split("/");
			var str="";
			for(var i=1;i<10;i++)
			{
				if(arr[1]=="0"+i)
					str=str+i;
			}
			if(str=="")
				str=arr[1];
			str=str+" ";
			switch(arr[0]) {
			    case "01":
			        str=str+"January";
			        break;
			    case "02":
			        str=str+"February";
			        break;
			    case "03":
			        str=str+"March";
			        break;
			     case "04":
			        str=str+"April";
			        break;
			    case "05":
			        str=str+"May";
			        break;
			    case "06":
			        str=str+"June";
			        break;
			    case "07":
			        str=str+"July";
			        break;
			    case "08":
			        str=str+"August";
			        break;
			     case "09":
			        str=str+"September";
			        break;
			    case "10":
			        str=str+"October";
			        break;
			    case "11":
			        str=str+"November";
			        break;
			    case "12":
			        str=str+"December";
			        break;
			}
			$("#tinfo-body-value-1").text(str);
			$("#tinfo-body-value-2").text(arr[2]);
		}

		function setGend(g){
			if(g.gender!=undefined)
				{
					function capitalizeFirstLetter(string) {
					    return string.charAt(0).toUpperCase() + string.slice(1);
					}
					var gender=capitalizeFirstLetter(g.gender);
					$("#tinfo-body-value-3").text(gender);
				}
				else
					$("#tinfo-body-value-3").text("-");
		}

		function setLang(l){
			var str="";
			for (i in l)
			{
				if(i!=l.length-1&&i!=l.length-2)
				{
					str=str+l[i].name;
					str=str+",";
				}
				else
				{
					if(i==l.length-2)
					{
					str=str+l[i].name;
					str=str+" ";
					}
				else
					{
					str=str+"and ";
					str=str+l[i].name;
					}
				}
			}
			$("#tinfo-body-value-4").text(str);
			}
		

		setFname(response);
		setGend(response);
		setDateOfBirth(response);
		setLang(response.languages);

	}



	//Function for setting contact table in about section

	function setContactTable(response){
		if(response.email==""||response.email==undefined||!response.hasOwnProperty('email'))
		{
			$("#tcontact-body-value-0").text("-");
		}
		else
		$("#tcontact-body-value-0").text(response.email);

		if(response.hometown.name==""||response.hometown.name==undefined||!response.hasOwnProperty('hometown'))
		{
			$("#tcontact-body-value-1").text("-");
		}
		else
		$("#tcontact-body-value-1").text(response.hometown.name);
	}

	//Function for setting family table in about section
	function setFamTable(response){
		var a=response.interested_in;
		var str="";
		for(i in a)
		{
			function capitalizeFirstLetter(string) {
					    return string.charAt(0).toUpperCase() + string.slice(1);
					}
			str=str+capitalizeFirstLetter(a[i]);
			if(i==0)
			str=str+" and ";
		}
		$("#tfam-body-value-0").text(str);
		$("#tfam-body-value-1").text(response.relationship_status);
		var b=response.family.data;
		str="";
		for(i in b)
		{
			str=str+(b[i].name);
			if(i!=b.length-1&&i!=b.length-2)
			{
				str=str+",";
			}
			else
				if(i==b.length-2)
				{
					str=str+" and ";
				}

		}
		$("#tfam-body-value-2").text(str);

	}


	//Function for setting places table in about section
	function setPlaceTable(response){
		var a=response.tagged_places.data;
		if(a.length===0||!response.hasOwnProperty('tagged_places'))
		{
			$(".table-place").append('-');
		}
		else
		{
		for(i in a)
			{
				$(".table-place").append('<tr><td class="table-bi" >'+a[i].place.name+"</td></tr>");
				console.log(a[i].place.name);
				console.log(a.length);
				console.log(response.tagged_places);
			}
		}
	}


	//Function for setting sports table in about section
	function setSportsTable(response){
		var b=response.sports;
		if(b.length===0||!response.hasOwnProperty('sports'))
		{
			$(".table-sports").append('-');
		}
		else
		{
		for(i in b)
		{
			$(".table-sports").append('<tr><td class="table-bi" >'+b[i].name+"</td></tr>");
		}
		}
		
	}

	//Function for setting friends section
	function setFriends(response){
		var a=response.family.data;
		if(a.length===0||!response.hasOwnProperty('family'))
		{
			$(".friendimg").append('<h3>Nothing to show</h3>');
		}
		else
		{
		var id="";
		for(i in a)
		{
			if(i>2)
				break;
			else
			{
				
				id="#friendimg"+i;
				$(id).append('<p class=" text-white"><b>'+a[i].name+'</b></p>');
				$(id).css('background-image','url('+a[i].picture.data.url+')');
				console.log(id);
			}
			if(i==2)
			{
				$("#friendimg3").append('<button class="btn btn-primary btn-1" type="button">View more</button>');
			}
		}
		}
	}



	

	//Function for setting feed section
	function setFeed(response){
		var a=response.posts.data;
		if(a.length===0||!response.hasOwnProperty('posts'))
		{
			$(".addfeed").append('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 feedvalue slideanim"><h3>No feeds yet</h3></div>');
		}
		else
		{
		var id="";
		var l=a.length;
		console.log("length is "+l);
		if(l%2!=0)
		{
			l--;
		}
		for(i in a)
		{ 
			if(i<l)
			{
			id="#feedimg"+i;
			var lcount=a[i].likes.summary.total_count;
			var ccount=a[i].comments.summary.total_count;
			if(a[i].hasOwnProperty("story"))
			{
			var head=a[i].story.substring(0,15);
			var subhead=a[i].story.substring(16);
			}
			else
			{
				var head=response.name;
				var subhead="";
			}

			$(".addfeed").append('<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 feedvalue slideanim" id="feedcovernow"><img src="" class="feedimg" width="10px" height="10px" id="feedimg'+i+'"><div class="feedhead" ><b>'+head+'</b> '+subhead+'</div><div class="feedcover" id="feedcover'+i+'""></div><div><p><i class="fa fa-thumbs-up" aria-hidden="true"></i>'+lcount+' &emsp;<i class="fa fa-comments" aria-hidden="true"></i> '+ccount+'</p></div></div>');
			$(id).attr("src",response.picture.data.url);
			id="#feedcover"+i;
			$(id).css("background-image",'url('+a[i].full_picture+')');
		}
		}
	}
	}


	//Function for setting height in feed section
	function setFeedHeight(){
		if($( window ).width()>1023)
		{
		var width = document.getElementById('feedcovernow').offsetWidth;
    	console.log("feed"+width);
    	$(".feedcover").css('height', width);
    	}
    	if($( window ).width()<768&&$( window ).width()>480)
    	{
    	var div = $('.feedimg');
        var width = document.getElementById('feedcover0').offsetWidth;
    	console.log("feed"+width);
    	$(".feedcover").css('height', width);
    	}
    	if($( window ).width()<481)
		{
		var width = document.getElementById('feedcover0').offsetWidth;
    	console.log("feed"+width);
    	$(".feedcover").css('height', width);
    	}
    	if($( window ).width()>767&&$( window ).width()<1024)
		{
		var width = document.getElementById('feedcover0').offsetWidth;
    	console.log("feed"+width);
    	$(".feedcover").css('height', width);
    	}
    
    	
    }

    //Function for photo heights in main page
	function setPic1Height(){
		w1=document.getElementById('photoimg0').offsetWidth;
		console.log("photo"+w1);
		$('.photoimg').css('height',w1);
	}

	//Function for setting movie heights in main page
	function setMovieHeight(){
		w1=document.getElementById('movieimg0').offsetWidth;
				$('.movieimg').css('height',w1);
				console.log("movie"+w1);
	}

	//Function for setting friend height in friend section
	function setFriendHeight(){
		w1=document.getElementById('friendimg0').offsetWidth;
		

		$('.friendimg').css('height',w1);
			console.log("friend"+w1);
	}



	$(".navbar a, footer a[href='#myPage']").on('click', function(event) {
  if (this.hash !== "") {

    event.preventDefault();
    var hash = this.hash;
   
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){
      window.location.hash = hash;
      });
    } 
  });



	//Smooth scroll with slide animation
	$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});


//Function to close navbar when clicked
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

});




 var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}