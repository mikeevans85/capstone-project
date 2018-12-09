<template>
	<div id="app">
		<div id="nav" class="container-fluid headerbar">
			<div class="container clearfix">
				<header>
					<nav class="navbar navbar-default">
						<div class="row">
							<div class="navbar-header">
								<a class="navbar-brand" href="#">
									<img alt="Newsy Logo" src="https://www.freeiconspng.com/uploads/news-icon-13.png" />
								</a>
							</div>
							<div id="navbar" class="navbar-collapse collapse">
								<ul class="nav navbar-nav">
									<li><a href="#">Home</a></li>
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

		<!--
			<div id="nav">
			<!-- --- links to current pages ---
		-->
		<!--
			<router-link to="/">Home</router-link>
				<router-link to="/logout">Logout</router-link>
				<router-link to="/usersources">Feed</router-link>
				<router-link to="/sources">News Sources</router-link>
			</div>
			<router-view />
		-->
	</div>
</template>

<style>
@import "posted/css/bootstrap.css";
</style>
