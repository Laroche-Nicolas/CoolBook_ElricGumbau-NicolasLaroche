<template>
  <div class="page-content--bgf7">
    <!-- WELCOME-->
    <section class="welcome p-t-10">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="title-4">Admin</h1>
            <hr class="line-seprate" />
          </div>
        </div>
      </div>
    </section>
    <!-- END WELCOME-->

    <!-- Content -->
    <section class="container">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Books</h5>
          <router-link to="/admin/books/new" class="card-link"> Ajouter</router-link>
          <router-link to="/admin/books" class="card-link"> Editer & Supprimer</router-link>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Genres</h5>
          <router-link to="/admin/genres/new" class="card-link">Ajouter</router-link>

        </div>
      </div>
    </section>
    <!-- END STATISTIC CHART-->
  </div>
</template>

<script>
export default {};
</script>

<style></style>
