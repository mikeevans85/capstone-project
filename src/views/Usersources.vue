<template>
  <div class="usersources">
    <div class="container">
      <div class="row">
        <template id="SourceCard">
          <div v-if="usersources.length === 0">{{ message }}</div>
          <div v-else v-for="usersource in usersources" class="col">
            <div class="card-body" style="width: 18rem;">
              <img
                class="card-src-img"
                v-bind:src="usersource.source.image_url"
                height="100"
                width="100"
                alt="Source logo"
              />
              <h2 class="card-title">{{ usersource.title }}</h2>
              <p class="card-publishedAt">{{ usersource.publishedAt }}</p>
              <img
                class="card-img-top"
                v-bind:src="
                  usersource.urlToImage
                    ? usersource.urlToImage
                    : 'http://i2.wp.com/www.4motiondarlington.org/wp-content/uploads/2013/06/No-image-found.jpg?zoom=2&fit=300%2C300'
                "
                alt="Card image cap"
              />
              <div class="card-body">
                <p class="card-description">{{ usersource.description }}</p>
                <a v-bind:href="usersource.url">Click for full article</a>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      message: "You have not selected any sources. Click on the sidebar to add sources to your feed!",
      usersources: [],
      inputTitle: "",
      inputDescription: ""
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/sources").then(
      function(response) {
        console.log(response.data);
        this.sources = response.data;
      }.bind(this)
    );
    axios.get("http://localhost:3000/api/feed").then(
      function(response) {
        console.log(response.data);
        this.usersources = response.data;
      }.bind(this)
    );
  },
  methods: {},
  computed: {}
};
</script>
