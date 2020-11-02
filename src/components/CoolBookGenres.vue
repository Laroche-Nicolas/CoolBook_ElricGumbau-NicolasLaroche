<template>
  <div class="container">
    <h1 class="title-4">Mes genres</h1>
    <br />

    <ul v-for="genre in allGenres" :key="genre.id" class="list-group">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{ genre.label }}
        <span class="badge badge-primary badge-pill">Nombre de livres : {{
          countByGenre(genre.id)
        }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

const API_GENRES_ENDPOINT = "  http://localhost:3000/genres/";
const API_BOOKS_ENDPOINT = "  http://localhost:3000/books/";
export default {
  name: "CoolBookGenre",
  props: {},
  data: () => ({
    allGenres: [],
    allBooks: [],
  }),
  methods: {
    async fetchAllGenres() {
      let genres = await axios.get(`${API_GENRES_ENDPOINT}`);
      this.allGenres = genres.data;
    },
    async fetchAllBooks() {
      let books = await axios.get(`${API_BOOKS_ENDPOINT}`);
      this.allBooks = books.data;
    },
    countByGenre(idGenre) {
      let nbBookPerGenre = [];
      
      this.allBooks.map((book) => {
        if ((book.genre.id === idGenre)) {
          nbBookPerGenre.push(book);
        }
        return 1
      });
      return nbBookPerGenre.length;
    },
  },
  created() {
    this.fetchAllGenres();
    this.fetchAllBooks();
  },
  
};
</script>

<style></style>
