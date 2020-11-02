<template>
  <div class="container">
    <h1 class="title-4">Mes livres</h1>
    <br />

    <div class="row">
      <div class="col-3" style="background-color:#C7C1C0">
        <h3 class="title-5">Mes types</h3>
        <li style="color:black" v-for="genre in allGenres" :key="genre.id">
          <ul
            style="background-color:#959393"
            @click="getSortedByGenre(genre.id)"
          >
            {{
              genre.label
            }}
          </ul>
        </li>
      </div>

      <div class="col-1"></div>
      <div class="col-8">
        <h3 class="title-5">Mes livres</h3>
        <div
          v-for="book in allBooks"
          :key="book.id"
          class="card mb-3"
          style="max-width: 640px;"
        >
          <div class="row no-gutters">
            <div class="col-md-4">
              <img :src="book.coverUri" class="card-img" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ book.title }}</h5>
                <p class="card-text">{{ book.author }}</p>
                <p class="card-text">
                  <small class="text-muted">{{ book.year }}</small>
                </p>
                <p class="card-button">
                  <button
                    type="button"
                    class="btn btn-info"
                    @click="goToOneBook(book.id)"
                  >
                    Consulter
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const API_BOOKS_ENDPOINT = "  http://localhost:3000/";

export default {
  name: "CoolBookGetBooks",
  props: {},
  data: () => ({
    allBooks: [],
    filteredBooks: [],
    allGenres: [],
  }),
  methods: {
    async fetchAllBooks() {
      let books = await axios.get(`${API_BOOKS_ENDPOINT}books`);
      this.allBooks = books.data;
      console.log(this.allBooks);
    },
    async fetchAllGenres() {
      let genres = await axios.get(`${API_BOOKS_ENDPOINT}genres`);
      this.allGenres = genres.data;
      console.log(this.allGenres);
    },
    goToOneBook(bookId) {
      this.$router.push({ name: "bookDetail", params: { bookId } });
    },
    async getSortedByGenre(idGenre) {

      await this.fetchAllBooks()

      this.allBooks = this.allBooks.filter((book) => book.genre.id === idGenre);
      
    


    },
  },
  async created() {
    this.fetchAllBooks();
    this.fetchAllGenres();
  },
};
</script>

<style></style>
