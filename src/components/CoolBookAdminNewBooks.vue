<template>
  <div class="container">
    <div class="form-group">
      <label for="exampleInputEmail1">Titre</label>
      <input type="text" class="form-control" v-model="newBook.title" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Auteur</label>
      <input type="text" class="form-control" v-model="newBook.author" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Année</label>
      <input type="text" class="form-control" v-model="newBook.year" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Résumé</label>
      <input type="text" class="form-control" v-model="newBook.resume" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Genre</label>
      <select class="form-control" v-model="newBook.genre">
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
      <input type="text" class="form-control" v-model="newBook.coverUri" />
    </div>
    <div class="form-group">
      <div class="form-check">
        <input
          type="checkbox"
          class="form-check-input"
          v-model="newBook.ebooks"
        />
        <label class="form-check-label" for="exampleCheck1">Ebooks ?</label>
      </div>
    </div>

    <button class="btn btn-primary " @click="insertBookData">Ajouter</button>
  </div>
</template>

<script>
import axios from "axios";

const API_ENDPOINT_GENRE = "http://localhost:3000/genres";
const API_ENDPOINT_BOOKS = "http://localhost:3000/books";

export default {
  name: "CoolBookAdminNewBooks",
  data: function() {
    return {
      newBook: {
        title: "",
        author: "",
        resume: "",
        coverUri: "",
        year: "",
        ebooks: false,
        genre: {},
      },
      genresData: {},
    };
  },
  methods: {
    async insertBookData() {
      let tryToInsert = await axios.post(API_ENDPOINT_BOOKS, this.newBook);
      if (tryToInsert.status === 201) {
        this.$router.push({ name: "admin" });
      } else {
        console.log('cannot insert !');
      }
    },
    async fetchGenreData() {
      const response = await axios.get(API_ENDPOINT_GENRE);
      const { data } = response;
      this.genresData = data;
    },
  },
  async created() {
    await this.fetchGenreData();
  },
};
</script>

<style></style>
