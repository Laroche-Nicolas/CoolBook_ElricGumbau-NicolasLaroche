<template>
    <header class="header-desktop3 d-none d-lg-block">
            <div class="section__content section__content--p35">
                <div class="header3-wrap">
                    <div class="header__logo">
                        <a href="#">
                            <router-link to="/">
                            <img src="@/assets/images/icon/logo-white.png" alt="CoolAdmin" />
                            </router-link>
                        </a>
                    </div>
                    <div class="header__navbar">
                        <ul class="list-unstyled">

                            <li>
                                <router-link to="/books"  class="nav-link">
                                <i class="fas fa-book"></i>
                                    <span class="bot-line"></span>Livres</router-link>
                            </li>
                            <li>
                                <router-link to="/genres"  class="nav-link">

                                    <i class="fas fa-copy"></i>
                                    <span class="bot-line"></span>Genre</router-link>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-cogs"></i>
                                    <span class="bot-line"></span>Admin</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </header>
</template>

<script>
export default {
name: 'CoolBookNav',
  props: {
  },
  data:()=>({
  }),
  methods:{
    
  },
    created(){

  }
}
</script>

<style>
</style>