<template>
	<div id="app">
		<div id="nav" class="container-fluid headerbar">
			<div class="container clearfix">
				<!--Header-->
				<header>
					<nav class="navbar navbar-fixed-top">
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
							</div>
							<div id="navbar" class="navbar-collapse collapse">
								<ul class="nav navbar-nav">
									<li><a href="#/">Home</a></li>
									<li><a href="#/usersources">Feed</a></li>
									<li><a href="#/sources">Sources</a></li>
									<li><a href="#/login">Login</a></li>
									<li><a href="#/signup">Sign Up!</a></li>
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
				<div class="col-md-3 col-sm-6 col-xs-12">
					<a class="navbar-brand" href="#">
						<img alt="Newsy Logo" src="https://www.freeiconspng.com/uploads/news-icon-13.png" height="70" width="70">
					</a>
					<ul class="nav navbar-nav">
					  <li><a href="#" class="demo-icon icon-gplus social-icons"></a></li>
					  <li><a href="#" class="demo-icon icon-pinterest social-icons"></a></li>
					  <li><a href="#" class="demo-icon icon-facebook social-icons"></a></li>
					  <li><a href="#" class="demo-icon icon-twitter social-icons"></a></li>
					  <li><a href="#" class="demo-icon icon-vimeo social-icons"></a></li>
					  <li><a href="#" class="demo-icon icon-rss social-icons"></a></li>
					</ul>
					<p>Subscribe to Newsy!</p>
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
	.nav {
		background-color: #008f54;
	}
	.router-view {
		margin-bottom: 50px;
	}
	.container-fluid section-footer-bar {
		margin-top: -50px;
	}
</style>
