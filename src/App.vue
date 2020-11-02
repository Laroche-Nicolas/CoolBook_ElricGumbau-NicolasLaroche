<template>
  <div id="app">

    <div class="page-wrapper">
        <!-- HEADER DESKTOP-->
        <CoolBookNav />
        <!-- END HEADER DESKTOP-->

        <!-- PAGE CONTENT-->
        <div class="page-content--bgf7">
            <router-view></router-view>
            <!-- WELCOME-->
            <section class="welcome p-t-10">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1 class="title-4">Titre de la section
                            </h1>
                            <hr class="line-seprate">
                        </div>
                    </div>
                </div>
            </section>
            <!-- END WELCOME-->


            <!-- Content -->
            <section class="container">






            </section>
            <!-- END STATISTIC CHART-->


        </div>

    </div>




  </div>
</template>

<script>

import CoolBookNav from './components/CoolBookNav.vue'


export default {
  name: 'App',
  components: {
      CoolBookNav
  }
}
</script>

<style>

</style>
