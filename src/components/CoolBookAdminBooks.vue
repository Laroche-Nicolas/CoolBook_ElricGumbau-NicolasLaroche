<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Titre</th>
          <th scope="col">Auteur</th>
          <th scope="col">Années</th>
          <th scope="col">Modification</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, idx) in booksData" :key="idx">
          <th scope="row">{{ book.id }}</th>
          <th scope="row">{{ book.title }}</th>
          <th scope="row">{{ book.author }}</th>
          <th scope="row">{{ book.year }}</th>
          <th scope="row">
            <button type="button" class="btn btn-secondary" @click="editBook(book)">edit</button> &nbsp;
            <button
              type="button"
              class="btn btn-primary"
              @click="deleteBook(book)"
            >
              delete
            </button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

const API_ENDPOINT = "http://localhost:3000/books";

export default {
  name: "CoolBookAdminBooks",
  data: function() {
    return {
      booksData: [],
    };
  },
  methods: {
    async fetchBooksData() {
      const response = await axios.get(API_ENDPOINT);
      const { data } = response;
      this.booksData = data;
    },
    async deleteBook(book) {
      let tryToDelete = await axios.delete(`${API_ENDPOINT}/${book.id}`, book);
      if (tryToDelete.status === 200) {
        location.reload();
      } else {
        console.log("cannot delete");
      }
    },
    editBook(book) {
      this.$router.push({name : 'adminBooksEdit' , params : {id : book.id}})
    }
  },
  async created() {
    await this.fetchBooksData();
  },
};
</script>

<style></style>
