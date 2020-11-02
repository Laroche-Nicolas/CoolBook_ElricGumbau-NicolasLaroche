<template>
  <div class="container">
    <div class="form-group">
      <label for="exampleInputEmail1">Titre</label>
      <input type="text" class="form-control" v-model="bookData.title" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Auteur</label>
      <input type="text" class="form-control" v-model="bookData.author" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Année</label>
      <input type="text" class="form-control" v-model="bookData.year" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Résumé</label>
      <input type="text" class="form-control" v-model="bookData.resume" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Genre</label>
      <select class="form-control" v-model="bookData.genre">
        <option
          v-for="(genre, idx) in genresData"
          :key="idx"
          :value="{ id: genre.id, label: genre.label, icon: genre.icon }"
          >{{ genre.label }}</option
        >
      </select>
    </div>

    <div class="form-group">
      <label for="exampleInputPassword1">Couverture</label>
      <input type="text" class="form-control" v-model="bookData.coverUri" />
    </div>
    <div class="form-group">
      <div class="form-check">
        <input
          type="checkbox"
          class="form-check-input"
          v-model="bookData.ebooks"
        />
        <label class="form-check-label" for="exampleCheck1">Ebooks ?</label>
      </div>
    </div>

    <button class="btn btn-primary" @click="updateBook">Mettre à jour</button>
  </div>
</template>

<script>
import axios from "axios";

const API_ENDPOINT_GENRE = "http://localhost:3000/genres";
const API_ENDPOINT_BOOKS = "http://localhost:3000/books";

export default {
  name: "CoolBookAdminEditBooks",
  data: function() {
    return {
      bookData: [],
      genresData: [],
    };
  },
  methods: {
    async fetchBookData(bookId) {
      const response = await axios.get(`${API_ENDPOINT_BOOKS}/${bookId}`);
      const { data } = response;
      this.bookData = data;
    },
    async fetchGenreData() {
      const response = await axios.get(API_ENDPOINT_GENRE);
      const { data } = response;
      this.genresData = data;
    },
    async updateBook() {
      let tryToUpdate = await axios.put(
        `${API_ENDPOINT_BOOKS}/${this.bookData.id}`,
        this.bookData
      );

      if (tryToUpdate.status === 200) {
        this.$router.push({ name: "adminBooks" });
      } else {
        console.log("cannot insert !");
      }
    },
  },
  async created() {
    let { id } = this.$route.params;
    await this.fetchBookData(id);
    await this.fetchGenreData();
  },
};
</script>

<style></style>
