<template>
	<div class="logout"><h1>You have successfully logged out.</h1></div>
</template>

<style>
.login {
	margin-bottom: 15px;
}
</style>

<script>
import axios from "axios";

export default {
	created: function() {
		delete axios.defaults.headers.common["Authorization"];
		localStorage.removeItem("jwt");
	}
};
</script>
