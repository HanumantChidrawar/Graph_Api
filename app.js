 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

	   $(".feedSection").hide(); //Initially hiding the feed section.


     function getFacebookInfo(){       // function to get the facebook data using access token.

	      var myFacebookToken = $("#token").val();
	       $("#token").val("");        // resetting the input field after taking the value.

         $.ajax('https://graph.facebook.com/me?fields=id,name,cover,work,education,email,hometown,posts{message,full_picture}&access_token='+myFacebookToken,{

                success : function(response,status){  // success function to display the fetched data.

		                $("#name").html('<p>Name: '+response.name+'<br><br>ID: '+response.id+'</p>'); //Displays data in Name & ID panel.
		                $("#panel1-heading").css({"background-color":"green","color":"white"});       // css for showing the success in fetching data.

		                if (response.hometown === undefined && response.email=== undefined){  //conditional statement to check non-empty data.
			                   $("#home-town").html('<p>No access to required Data. </p>');
			                   $("#panel2").css({"border-color":"red","color":"red"});
			                   $("#panel2-heading").css({"background-color":"red","color":"white"});
		                  }else if(response.hometown === undefined || response.email=== undefined){
			                   $("#home-town").html('<p>No access to complete required Data. </p>');
			                   $("#panel2-heading").css({"background-color":"red","color":"white"});
			                   $("#panel2").css({"border-color":"red","color":"red"});
		                  }else{
                         $("#home-town").html('<p>Home Town: '+response.hometown.name+'<br><br>Email: '+response.email+'</p>').css("border-color","green");
			                   $("#panel2").css({"border-color":"green","color":"green"});
			                   $("#panel2-heading").css({"background-color":"green","color":"white"});
		                  }

		                  if(response.education === undefined){     //conditional statement to check non-empty data.
			                   $("#education").html('<p>No access to required Data.</p>');
			                   $("#panel3").css({"border-color":"red","color":"red"});
			                   $("#panel3-heading").css({"background-color":"red","color":"white"});
		                  }else{
		                     $("#education").html('<p>Institute: '+response.education[0].school.name+'<br><br>Type of Institute: '+response.education[0].type+'</p>');
			                   $("#panel3").css({"border-color":"green","color":"green"});
			                   $("#panel3-heading").css({"background-color":"green","color":"white"});
		                  }

		                  if(response.work === undefined){         //conditional statement to check non-empty data.
		                     $("#work").html('<p>No access to required Data.</p>');
			                   $("#panel4").css({"border-color":"red","color":"red"});
			                   $("#panel4-heading").css({"background-color":"red","color":"white"});
		                  }else{
		                     $("#work").html('<p>Works At: '+response.work[0].employer.name+'<br><br>Designation: '+response.work[0].position.name+'</p>');
			                   $("#panel4").css({"border-color":"green","color":"green"});
			                   $("#panel4-heading").css({"background-color":"green","color":"white"});
		                  }

                      if(response.cover === undefined){     //conditional statement to check non-empty data.
			                   $("#cover").html('<p>No access to required Data.</p>');
			                   $("#panel5").css({"border-color":"red","color":"red"});
			                   $("#panel5-heading").css({"background-color":"red","color":"white"});
                      }else{
		                     $("#cover").html('<img src="'+response.cover.source+'"class="img-thumbnail" alt="FB Cover" >');
			                   $("#panel5").css({"border-color":"green","color":"green"});
			                   $("#panel5-heading").css({"background-color":"green","color":"white"});
                      }

		                  if(response.posts === undefined){     //conditional statement to check non-empty data for feeds.
			                   $("#post1").html('<p>No access to required Data.</p>');
			                   $("#feedPanel1").css({"border-color":"red","color":"red"});
			                   $("#feedPanel1-heading").css({"background-color":"red","color":"white"});

			                   $("#post2").html('<p>No access to required Data.</p>');
			                   $("#feedPanel2").css({"border-color":"red","color":"red"});
			                   $("#feedPanel2-heading").css({"background-color":"red","color":"white"});

			                   $("#post3").html('<p>No access to required Data.</p>');
			                   $("#feedPanel3").css({"border-color":"red","color":"red"});
			                   $("#feedPanel3-heading").css({"background-color":"red","color":"white"});

			                   $("#post4").html('<p>No access to required Data.</p>');
			                   $("#feedPanel4").css({"border-color":"red","color":"red"});
			                   $("#feedPanel4-heading").css({"background-color":"red","color":"white"});

			                   $("#post5").html('<p>No access to required Data.</p>');
			                   $("#feedPanel5").css({"border-color":"red","color":"red"});
			                   $("#feedPanel5-heading").css({"background-color":"red","color":"white"});

                     }else{

		                     $("#post1").html('<img src="'+response.posts.data[7].full_picture+'"class="img-thumbnail" alt="FB Post" ><p>'+response.posts.data[7].message +'</p>');
			                   $("#feedPanel1").css({"border-color":"green","color":"green"});
			                   $("#feedPanel1-heading").css({"background-color":"green","color":"white"});

			                   $("#post2").html('<img src="'+response.posts.data[2].full_picture+'"class="img-thumbnail" alt="FB Post" ><p>'+response.posts.data[2].message+'</p>');
			                   $("#feedPanel2").css({"border-color":"green","color":"green"});
			                   $("#feedPanel2-heading").css({"background-color":"green","color":"white"});

                    		 $("#post3").html('<img src="'+response.posts.data[3].full_picture+'"class="img-thumbnail" alt="FB Post" ><p>'+response.posts.data[3].message+'</p>');
                    		 $("#feedPanel3").css({"border-color":"green","color":"green"});
                    		 $("#feedPanel3-heading").css({"background-color":"green","color":"white"});

                		  	$("#post4").html('<img src="'+response.posts.data[4].full_picture+'"class="img-thumbnail" alt="FB Post" ><p>'+response.posts.data[4].message+'</p>');
                			  $("#feedPanel4").css({"border-color":"green","color":"green"});
                			  $("#feedPanel4-heading").css({"background-color":"green","color":"white"});

                  			$("#post5").html('<img src="'+response.posts.data[5].full_picture+'"class="img-thumbnail" alt="FB Post" ><p>'+response.posts.data[5].message+'</p>');
                  			$("#feedPanel5").css({"border-color":"green","color":"green"});
                  			$("#feedPanel5-heading").css({"background-color":"green","color":"white"});
                   }
                }//end of success function
                ,
            error: function(xhr,status,error) {
                        console.log(status);
                        $(".row").hide();
                        var txt2=$("<p></p>").text("Invalid Access Token. Please get a valid Access Token").css({"border-color":"white","color":"red"});
                        $("body").append(txt2);
            }
            }//end argument list
         );// end ajax call
       }// end get facebook info

    $("#go").on('click',getFacebookInfo);
    $("#myFeed").on('click',showFeed);

	function showFeed(){
		$(".feedSection").toggle(); //Show the feed section.
	}


  });
