<template>
  <div class="home">
    <div class="container">
      <div class="home-container">
        <img
          src="https://www.freeiconspng.com/uploads/news-icon-13.png"
          height="350"
          width="350"
          alt="Image not found"
        />
        <h1><strong>Welcome to Newsy!</strong></h1>
        <h3><a id="link" href="/#/signup">Sign Up!</a></h3>
        <h3><a id="link" href="/#/login">Login!</a></h3>
      </div>
    </div>
  </div>
</template>

<style>
.home {
  /*background-color: #008f54;*/
  text-align: center;
  margin-bottom: 20px;
}

#link {
  color: black;
}

.home-container {
  text-align: center;
  animation: fadein 2s;
  -moz-animation: fadein 2s; /* Firefox */
  -webkit-animation: fadein 2s; /* Safari and Chrome */
  -o-animation: fadein 2s; /* Opera */
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadein {
  /* Firefox */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fadein {
  /* Safari and Chrome */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-o-keyframes fadein {
  /* Opera */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
span img {
  transform: scale(1);
  transition: transform 0.5s;
}
span img :hover {
  transform: scale(2);
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
