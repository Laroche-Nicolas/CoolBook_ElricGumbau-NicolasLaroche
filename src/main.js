import Vue from "vue";
import VueRouter from "vue-router";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "@/assets/css/font-face.css";
import "@/assets/css/all.min.css";

import "@/assets/vendor/font-awesome-4.7/css/font-awesome.min.css";
import "@/assets/vendor/font-awesome-5/css/fontawesome-all.min.css";

import "@/assets/vendor/mdi-font/css/material-design-iconic-font.min.css";

import "@/assets/css/theme.css";

import App from "./App.vue";

Vue.use(VueRouter);

const routes = [


  {
    path: "/",
    name: "home",
    component: () => import("./components/CoolBookHome.vue"),
  },
  {
    path: "/books",
    name: "books",
    component: () => import("./components/CoolBookGetBooks.vue"),
  },
  {
    path: "/books/:bookId",
    name: "bookDetail",
    component: () => import("./components/CoolBookDetailBook.vue"),
  },
  {
    path: "/genres",
    name: "genre",
    component: () => import("./components/CoolBookGenres.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("./components/CoolBookAdmin.vue"),
  },
  {
    path: "/admin/books",
    name: "adminBooks",
    component: () => import("./components/CoolBookAdminBooks.vue"),
  },
  {
    path: "/admin/books/new",
    name: "newBooks",
    component: () => import("./components/CoolBookAdminNewBooks.vue"),
  },
  {
    path: "/admin/books/:id",
    name: "adminBooksEdit",
    component: () => import("./components/CoolBookAdminEditBooks.vue"),
  },
  {
    path: "/admin/genres/new",
    name: "adminGenresNew",
    component: () => import("./components/CoolBookAdminNewGenre.vue"),
  },
];

const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
