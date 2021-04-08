canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d");
 
 car1_width = 120;
  car1_height = 70; 
  car1_image = "https://www.nicepng.com/png/detail/54-545066_cars-plan-view-png-car-png-top-view.png";
   car1_x = 10;
    car1_y = 10;

	 car2_width = 120;
	  car2_height = 70;
	   car2_image = "https://www.seekpng.com/png/detail/363-3638244_sell-your-car-with-motorsave-derby-car-top.png";
	    car2_x = 10;
		 car2_y = 100;
		  background_image = "https://i.pinimg.com/474x/bd/aa/28/bdaa285dc45aa9d97bd787e91baeaed2.jpg";
		  
		  function adding() {
			   background_imgTag = new Image(); //defining a variable with a new image
			    background_imgTag.onload = uploadBackground;
				background_imgTag.src = background_image; // load image 
				
				car1_imgTag = new Image(); //defining a variable with a 
				 car1_imgTag.onload = uploadcar1; // setting a function, onloading this variable 
				 car1_imgTag.src = car1_image; // load image 
				
				 car2_imgTag = new Image(); //defining a variable with a new image 
				 car2_imgTag.onload = uploadcar2; // setting a function, onloading this variable 
				 car2_imgTag.src = car2_image; // load image 
				}
				 