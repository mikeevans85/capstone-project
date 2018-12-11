<template>
	<div id="app">
		<div id="nav" class="container-fluid headerbar">
			<div class="container clearfix">
				<!--Header-->
				<header>
					<nav class="navbar navbar-fixed-top">
						<div class="row">
							<div class="navbar-header">
								<a class="navbar-brand" href="#">
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

<style></style>
