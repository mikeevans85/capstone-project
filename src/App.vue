<template>
	<div id="app">
		<div id="nav" class="container-fluid headerbar">
			<div class="container clearfix">
				<!--Header-->
				<header>
					<nav class="navbar navbar-default">
						<div class="row">
							<div class="navbar-header">
								<a class="navbar-brand" href="#/">
									<img
										alt="Newsy Logo"
										src="https://www.freeiconspng.com/uploads/news-icon-13.png"
										width="70"
										height="70"
									/>
								</a>
								<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					              <span class="navbar-toggler-icon"></span>
					              <span class="icon-bar"></span>
					              <span class="icon-bar"></span>
					              <span class="icon-bar"></span>
					            </button>
							</div>
							<div id="navbar" class="navbar-collapse collapse">
								<ul class="nav navbar-nav">
									<li><a href="#/">Home</a></li>
									<li><a href="#/usersources">Feed</a></li>
									<li><a href="#/sources">Sources</a></li>
									<li><a href="#/login">Login</a></li>
									<li><a href="#/signup">Signup!</a></li>
									<li><a href="#/logout">Logout</a></li>
								</ul>
							</div>
							<!-- /.nav-collapse -->
						</div>
						<!-- /.container-fluid -->
					</nav>
				</header>
			</div>
		</div>
		<router-view />
		<!--Footer-->
		<div class="container-fluid section-footer">
		<div class="container">
			<div class="row">
				<!-- ABOUT AND SOCIAL -->
				<div class="col">
					<!-- <a class="navbar-brand" href="#/">
						<img alt="Newsy Logo" src="https://www.freeiconspng.com/uploads/news-icon-13.png" height="50" width="50">
					</a>
					<h1>Newsy!</h1> -->
					<!-- <div class="zoom"> -->
					<ul id="footer" class="nav">
						  <li><span><a href="#" class="demo-icon icon-gplus social-icons"></a></span></li>
						  <li><span><a href="#" class="demo-icon icon-pinterest social-icons"></a></span></li>
						  <li><span><a href="#" class="demo-icon icon-facebook social-icons"></a></span></li>
						  <li><span><a href="#" class="demo-icon icon-twitter social-icons"></a></span></li>
						  <li><span><a href="#" class="demo-icon icon-vimeo social-icons"></a></span></li>
						  <li><span><a href="#" class="demo-icon icon-rss social-icons"></a></span></li>
					</ul>
					<!-- </div> -->
					<!-- <p>Subscribe to Newsy!</p> -->
				</div>
				
				<!-- END -->
			</div>
		</div>
	</div>
		<div class="container-fluid section-footer-bar">
		<div class="container">
			<div class="row">
				<div class="col-md-6 col-xs-6">© OrcasThemes 2016, All rights reserved</div>
				<div class="col-md-6 col-xs-6"><span class="pull-right">Fonts by Google Fonts. Icons by Fontello</span></div>
			</div>
		</div>
	</div>
	</footer>

	</div>
</template>

<style>
	/*.nav {
		background-color: #008f54;
	}*/
	.router-view {
		margin-bottom: 50px;
	}
	.container-fluid section-footer-bar {
		margin-top: -50px;
	}
	#footer li {
/*	  padding: 25px;
	  /*background-color: green;*/
	  /*transition: transform .2s; /* Animation */
	  /*width: 200px;*/
	  /*height: 100px;*/
	  /*margin: 0 auto;*/
	   /*background: lightgrey;*/
  		list-style: none;
  		margin: 5px 0;
	}

	#footer li span {
	  font-size: 10px;
	  opacity: 1;
	  transform: scale(1);
	  transition: all 0.3s ease-in-out 0.2s;
	}

	#footer li:hover span {
	  opacity: 1;
  	  transform: scale(2);
	}

	span {
	  display: inline-block;
	}
	
</style>
