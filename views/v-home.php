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
			<div id="banner-wrp" > 
				<div class="inner-banner" >

				<!-- 	<div class="box-wrp">
						<div class="content-wrp">
							<a href="#" class="c-btn content-wrp" id="recolor" >Click me</a>
						</div>
					</div> -->
				<img src="images/banner-skyline.jpg">

				</div>
			</div>
			<div class="c-banner-heading">
				<h1>Fun, Opportunity, and Friends</h1>
				<h3 class="sans">International College Students in NYC</h3>
			</div>
		</section>


<!-- CONTENT AREA -->
<div class="page-content-wrp">

	<section class="c-home-search">
		<div class="container ">

<!-- search box -->
			<form class="c-home-searchbox row" role="search">
				<span class="form-group">
					<input type="text" class="form-control" placeholder=":Search for Events | Topics | Tags">
				</span>
			  	<span class="submit_wrp" >
			 		<button type="submit" class="c-btn c-search"><i class="fa fa-search"></i></button>
				</span>
			</form>
		</div>
	</section>

<!-- event slides -->
	<?php include_once("includes/i-home-events.html"); ?>

<!-- topics -->
	<?php include_once("includes/i-home-topics.html"); ?>
	<?php include_once("includes/t-home-topics.html"); ?>

<!-- groups -->
	<?php include_once("includes/i-home-groups.html"); ?>

<!-- register form -->
	<?php include_once("includes/i-home-register.html"); ?>
		

<!-- partners -->
		<section class="c-home-partners"></section>


</div>


<!-- INCLUDE footer -->
	<?php include_once("includes/footer.html"); ?>

	</div><!--End_.page-wrp home  -->