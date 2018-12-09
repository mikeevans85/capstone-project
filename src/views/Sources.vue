<template>
  <div id="sources">
    <div class="container">
      <div class="row">
        <template id="SourceCard">
          <div v-for="source in sources" class="col">
            <div class="card-body" style="width: 18rem;">
              <img class="card-img" v-bind:src="source.image_url" alt="Source logo" />
              <h2 class="card-name">{{ source.name }}</h2>
              <p class="card-publishedAt">{{ source.place_of_pub }}</p>
              <div class="card-body">
              <p class="card-description">{{ source.description }}</p>
              <toggle-button @change="toggleSource(source)" id="button" v-model="source.subscribed" :sync="true" :labels="true"/>
              </div>
            </div>
          </div>
        </template>
      </div>
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
      sources: [],
      inputTitle: "",
      inputDescription: "",
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/sources").then(
      function(response) {
        console.log(response.data);
        this.sources = response.data;
      }.bind(this));
  },
  methods: {
    toggleSource: function(source) {
      // var toggleButton = document.getElementById('button');
      var params = {
        source_id: source.id
      };
      if (source.subscribed) {
        console.log("Create new");
        axios.post("http://localhost:3000/api/sources", params).then(
          function(response) {
            console.log(response.data);
          }.bind(this));
      } else {
        console.log("Delete");
        axios.delete("http://localhost:3000/api/sources/" + source.id).then(
          function(response) {
            console.log(response.data);
            this.$router.push("/sources");
          }.bind(this));
      }
    }
  }
};
</script>