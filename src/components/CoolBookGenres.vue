<template>
<div class="container">
  <h1 class="title-4">Mes genres</h1>
  <br>

  <ul v-for="genre in allGenres" :key="genre.id" class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    {{genre.label}}
    <span class="badge badge-primary badge-pill">{{countByGenre(genre.id)}}</span>
  </li>
</ul>

</div>

</template>

<script>
import axios from "axios";

const API_GENRES_ENDPOINT = '  http://localhost:3000/genres/'
const API_BOOKS_ENDPOINT = '  http://localhost:3000/books/'
export default {
name: 'CoolBookGenre',
  props: {
  },
  data:()=>({
    allGenres:[],
    allBooks:[],
  }),
  methods:{
    async fetchAllGenres(){
      let genres = await axios.get(`${API_GENRES_ENDPOINT}`);
      this.allGenres = genres.data
      console.log(this.allGenres)
    },
    async fetchAllBooks(){
      let books = await axios.get(`${API_BOOKS_ENDPOINT}`);
      this.allBooks = books.data
      console.log(this.allBooks)
    },
    countByGenre(idGenre){
      let nbBookPerGenre= [];
      nbBookPerGenre = this.allBooks.filter((book)=>{
       book.genre.id = idGenre
      })
      console.log(nbBookPerGenre)
      return "1"

    }
    
  },
    created(){
      this.fetchAllGenres(),
      this.fetchAllBooks(),
      this.countByGenre()
  },
  computed:{
    
  }
}

</script>

<style>
</style>