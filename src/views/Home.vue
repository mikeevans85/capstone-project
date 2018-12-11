<template>
  <div class="home">
    <div class="container">
      <img src="https://www.freeiconspng.com/uploads/news-icon-13.png" height="350" width="350" alt="Image not found" />
      <h1><strong>Welcome to Newsy!</strong></h1>
      <h3><a id="link" href="/#/signup">Sign Up!</a></h3>
      <h3><a id="link" href="/#/login">Login!</a></h3>
    </div>
  </div>
</template>

<style>
.home {
  background-color: #008f54;
  text-align: center;
}

#link {
  color: black;
}
</style>

<script>
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};
</script>
