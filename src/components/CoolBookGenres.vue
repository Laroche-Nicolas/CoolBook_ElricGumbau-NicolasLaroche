<template>
<div class="container">
  <h1 class="title-4">Mes genres</h1>
  <br>

  <ul v-for="genre in allGenres" :key="genre.id" class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    {{genre.label}}
    <span class="badge badge-primary badge-pill">14</span>
  </li>
</ul>

</div>

</template>

<script>
import axios from "axios";

const API_BOOKS_ENDPOINT = '  http://localhost:3000/genres/'
export default {
name: 'CoolBookGenre',
  props: {
  },
  data:()=>({
    allGenres:[]
  }),
  methods:{
    async fetchAllGenres(){
      let genres = await axios.get(`${API_BOOKS_ENDPOINT}`);
      this.allGenres = genres.data
      console.log(this.allGenres)
    },
  },
    created(){
      this.fetchAllGenres()
  }
}

</script>

<style>
</style>