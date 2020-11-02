<template>
  <div id="app">
    <div class="page-wrapper">
      <!-- HEADER DESKTOP-->
      <CoolBookNav />
      <!-- END HEADER DESKTOP-->
      <router-view></router-view>
      <!-- PAGE CONTENT-->
    </div>
  </div>
</template>

<script>
import CoolBookNav from "./components/CoolBookNav.vue";

export default {
  name: "App",
  components: {
    CoolBookNav,
  },
};
</script>

<style></style>
