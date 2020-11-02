<template>
       <div class="card mb-3" style="max-width: 640px;">

<div class="row no-gutters">
          <div class="col-md-4">
            <img :src="oneBook.coverUri" class="card-img" >
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{oneBook.title}}</h5>
              <p class="card-text">{{oneBook.author}}</p>
              <p class="card-text"><small class="text-muted">{{oneBook.year}}</small></p>
              <br><br>
               <p class="card-text">{{oneBook.resume}}</p>

            </div>
          </div>
        </div>
       </div>
</template>

<script>
import axios from "axios";

const API_BOOKS_ENDPOINT = '  http://localhost:3000/books/'

export default {
  name: "CoolBookDetailBook",
  props: {
    oneBook:[],
  },
  data: () => ({}),
  methods: {
    async fectOneBook(bookId){
    let book = await axios.get(`${API_BOOKS_ENDPOINT}${bookId}`);
    this.oneBook = book.data
    }
  },
  created() {
    const {bookId} = this.$route.params
    this.fectOneBook(bookId)
  },
};
</script>

<style>
</style>