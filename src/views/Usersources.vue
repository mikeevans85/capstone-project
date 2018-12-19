<template>
  <div class="usersources">
    <div class="container">
      <div class="row">
        <div class="col-centered">
          <template id="SourceCard">
            <div v-if="usersources.length === 0">
              <h2>{{ message }}</h2>
            </div>
            <div
              v-else
              v-for="usersource in orderBy(usersources, sortAttribute, -1)"
              v-bind:key="usersources.publishedAt"
              class="col"
            >
              <img class="img-responsive" :src="usersource.source_logo" alt="" style="width: 50px" />
              <div class="card-body" style="width: auto;">
                <!--
                  <img class="img-fluid" v-bind:data-src="logoFinder(usersource.source.name)" alt="Source logo" />
                -->
                <h2 class="card-title">{{ usersource.title }}</h2>
                <p class="card-publishedAt">{{ dateTime(usersource.publishedAt) }}</p>
                <img
                  class="img-responsive"
                  id="card-image"
                  v-bind:src="
                    usersource.urlToImage
                      ? usersource.urlToImage
                      : 'http://i2.wp.com/www.4motiondarlington.org/wp-content/uploads/2013/06/No-image-found.jpg?zoom=2&fit=300%2C300'
                  "
                  height="500"
                  width="700"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-description">{{ usersource.description }}</h5>
                  <a v-bind:href="usersource.url"><strong>Click for full article</strong></a>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card-body {
  margin-bottom: 40px;
}
.container {
  text-align: center;
}

.card-body:hover img {
  opacity: 0.5;
  background: #000;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.col-centered {
  float: none;
  margin: 0 auto;
}
</style>

<script>
/* global moment */
var axios = require("axios");
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      usersources: [],
      message: "You have not selected any sources. Click on 'Sources' to add sources to your feed!",
      inputTitle: "",
      inputDescription: "",
      sortAttribute: "publishedAt",
      url: ""
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
    // this.usersources.forEach(usersource => {
    //   var source = this.sources.filter(source => source.api_url === usersource.source.id)[0];
    //   var sourceLanguage = source.source_language;
    //   var params = {
    //     title: usersource.title,
    //     description: usersource.description
    //   };
    //   console.log(usersource.title, usersource.description, source.source_language);
    //   axios.post("http://localhost:3000/api/translater", params).then(
    //     function(response) {
    //       console.log(response.data);
    //       this.sources = response.data;
    //     }.bind(this)
    //   );
    // });
  },
  methods: {
    dateTime: function(input) {
      var moment = require("moment");
      return moment(input).format("MMMM Do YYYY, h:mm:ss a");
    },

    translateSource: function() {
      axios.get("http://localhost:3000/api/feed").then(
        function(response) {
          console.log(response.data);
          this.usersources = response.data;
        }.bind(this)
      );
      this.usersources.forEach(usersource => {
        var source = this.sources.filter(source => source.api_url === usersource.source.id)[0];
        var sourceLanguage = source.source_language;
        var params = {
          title: usersource.title,
          description: usersource.description
        };
        console.log(usersource.title, usersource.description, source.source_language);
        axios.post("http://localhost:3000/api/translater", params).then(
          function(response) {
            console.log(response.data);
            this.sources = response.data;
          }.bind(this)
        );
      });
    }
  },
  computed: {}
};
</script>
