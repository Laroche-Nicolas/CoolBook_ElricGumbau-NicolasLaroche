<template>
  <div class="container">
    <div class="form-group">
      <label for="exampleInputEmail1">Label</label>
      <input type="text" class="form-control" v-model="newGenre.label" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Icon</label>
      <input type="text" class="form-control" v-model="newGenre.icon" />
    </div>

    <button type="submit" class="btn btn-primary" @click="addGenre">
      Ajouter
    </button>
  </div>
</template>

<script>
import axios from "axios";

const API_ENDPOINT = "http://localhost:3000/genres";

export default {
  name: "CoolBookAdminGenresNew",
  data: function() {
    return {
      newGenre: {
        label: "",
        icon: "",
      },
    };
  },
  methods: {
    async addGenre() {
      let tryToInsert = await axios.post(API_ENDPOINT, this.newGenre);
      if (tryToInsert.status === 201) {
        this.$router.push({ name: "admin" });
      } else {
        console.log("cannot insert !");
      }
    },
  },
};
</script>

<style></style>
