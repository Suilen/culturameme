<body>


<link rel="stylesheet" href="css/lib/idangerous.swiper.css">
<link rel="stylesheet" href="css/lib/idangerous.swiper.scrollbar.css">
<link rel="stylesheet" href="css/lib/idangerous.swiper.3dflow.css">
<link rel="stylesheet" type="text/css" href="css/_meme-home.css">	

	<div class="page-wrp home">

<!-- INCLUDE mainNav -->
<?php include_once("includes/mainNav.html"); ?>


	
<!--HOME banner area -->
		<section class="c-home-banner">
			<div id="banner-wrp" style="background-image: url(images/nyc-skyline0.png);"> 
				<div class="inner-banner" >

				<!-- 	<div class="box-wrp">
						<div class="content-wrp">
							<a href="#" class="c-btn content-wrp" id="recolor" >Click me</a>
						</div>
					</div> -->

				</div>
			</div>
		</section>

<!-- CONTENT AREA -->
<div class="page-content-wrp">

	<section class="c-home-search">
		<div class="container ">

<!-- search box -->
			<form class="c-home-searchbox row" role="search">
				<span class="form-group col-lg-11 col-md-11 col-sm-11 col-xs-11">
					<input type="text" class="form-control" placeholder=":Search for Events | Topics | Tags">
				</span>
			  	<span class="col-lg-1 col-md-1 col-sm-1 col-xs-1" >
			 		<button type="submit" class="c-btn c-search"><i class="fa fa-search"></i></button>
				</span>
			</form>
		</div>
	</section>

<!-- event slides -->
	<?php include_once("includes/i-home-events.html"); ?>


<!-- topics -->
	<?php include_once("includes/i-home-topics.html"); ?>

<!-- groups -->
		<section class="c-home-groups"></section>

<!-- register form -->
		<form class="c-home-registerform">

		</form>

<!-- partners -->
		<section class="c-home-partners"></section>


</div>


<!-- INCLUDE footer -->
	<?php include_once("includes/footer.html"); ?>

	</div><!--End_.page-wrp home  -->