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
              <input id="sub-chkbox" type="checkbox" v-on:click="toggleSource(event, source.id)">
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
      event: ""
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
    toggleSource: function(event, id) {
      var subChkbox = document.getElementById('sub-chkbox');
      var params = {
        source_id: id
      };
      if (subChkbox.checked) {
        axios.post("http://localhost:3000/api/sources", params).then(
          function(response) {
            console.log(response.data);
          }.bind(this));
      } else {
        axios.destroy("http://localhost:3000/api/sources" + params).then(
          function(response) {
            console.log(response.data);
            this.sources = response.data;
            this.$router.push("/sources");
          }.bind(this));
      }
    }
  }
};
</script>