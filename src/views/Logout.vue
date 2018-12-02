<template>
  <div class="logout">
    <h1>You have successfully logged out.</h1>
    <a href="/">Home</a>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    // this.$router.push("/");
  }
};
</script>
