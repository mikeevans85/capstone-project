<template>
  <div id="sources">
    <div class="container">
      <div class="row">
        <!-- {{translatedArticles}} -->
        <div v-for="source in sources" class="col-md-4">
          <section class="section-block-v2">
          <!-- HEADLINE -->
            <div class="headline-row">
              <h1 class="section-title caticon sbx">{{ source.name }}</h1>
              <br>
               <toggle-button @change="toggleSource(source)" id="button" v-model="source.subscribed" :sync="true" :labels="true"/>
            </div>
            <div class="row">
            <!-- SOURCE CARD -->
              <div class="col">
                <article class="post post-spacer thumb-large">
                  <div class="entry-header">
                    <img class="img-responsive" v-bind:src="source.image_url" height="250" width="250" alt="Post img">
                    <!-- Post content -->
                    <div class="post-content">
                      <div class="entry-title">
                        <div style="font-size: 500px">
                          <p><flag :iso="source.source_language" />{{ source.place_of_pub }}</p>
                        </div>
                        <p class="visible-md visible-lg visible-sm visible-xs">{{ source.description }}</p>
                        <toggle-button @change="translateSource(source)"  id="translateButton" width="130" :sync="true" :labels="{checked: 'Source Translated!', unchecked: 'Translate!!'}" /> 
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style>
</style>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      message: "You have not selected any sources. Click on the sidebar to add sources to your feed!",
      sources: [],
      usersources: [],
      inputTitle: "",
      inputDescription: "",
      translatedArticles: []
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/sources").then(
      function(response) {
        // console.log(response.data);
        this.sources = response.data;
      }.bind(this));
  },
  methods: {
    toggleSource: function(source) {
      var params = {
        source_id: source.id
      };
      if (source.subscribed) {
        console.log("Create new");
        axios.post("http://localhost:3000/api/sources", params).then(
          function(response) {
            // console.log(response.data);
          }.bind(this));
      } else {
        console.log("Delete");
        axios.delete("http://localhost:3000/api/sources/" + source.id).then(
          function(response) {
            // console.log(response.data);
            this.$router.push("/sources");
          }.bind(this));
      }
    },
    translateSource: function(source) {
      var params = source.id;
      axios.patch("http://localhost:3000/api/update" + params)
        .then(
          function(response) {
            console.log(response.data);
            this.posts.push(response.data);
          }.bind(this)
        )
        .catch(
          function(error) {
            console.log(error.response.data);
            this.Errors = error.response.data.errors;
          }.bind(this)
        );
      // const foundSources = this.usersources.filter(s => s.source.id === source.api_url);
      // console.log(foundSources);
      // const filteredSources = foundSources.map(s => {
      //   return {title: s.title, description: s.description};
      // });
      // filteredSources.forEach(s =>{
      //   axios.get("http://localhost:3000/api/feed?api_url=" + apiUrl).then(
      //     function(response) {
      //       this.translatedArticles.push(response.data);
      //     }.bind(this)
      //   );
      // });

      // this.usersources.forEach(usersource => {
      //   console.log(source);
      //   var source = this.sources.filter(source => source.api_url === usersource.source.id)[0].api_url;
      //   console.log("Hello", source);
      //   var sourceLanguage = source.source_language;
      //   var params = {

      //     title: usersource.title,
      //     description: usersource.description
      //   };
      //   axios.post("http://localhost:3000/api/translater", params).then(
      //     function(response) {
      //       console.log(response.data);
      //       this.translatedArticles = response.data;
      //     }.bind(this)
      //   );
      // });
      // }.bind(this)
      // );
    }
  }
};
</script>