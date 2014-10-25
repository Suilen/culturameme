// $(document).ready(function(){

  $(window).scroll(function(){
    if($(document).scrollTop() > 65)
  {
          $('#primary-nav').animate({
              height:'50px'
          },250);        
          
          $('#primary-nav .navbar-brand').animate({
              'margin-top': '-7px'
          },250);

          $(' #c-nav-links>li> a').animate({
              'padding-top': '15px','padding-bottom': '15px'
          },250);

           $(' #signin, #signup').animate({
              'margin-top': '4px'
          },250);

           $('.navbar-default .navbar-toggle').animate({
              'margin-top': '2px'
          },250);


  }
  else
    {
          
          $('#primary-nav').animate({
              height:'65px'
          },200);

         $('#primary-nav .navbar-brand').animate({
              'margin-top': '0'
          },200);

          $('#c-nav-links>li>a').animate({
              'padding-top': '25px','padding-bottom': '20px'
          },200);

          $(' #signin, #signup').animate({
              'margin-top': '13px'
          },200);

          $('.navbar-default .navbar-toggle').animate({
              'margin-top': '8px'
          },200);
         

    }
  });

// });

