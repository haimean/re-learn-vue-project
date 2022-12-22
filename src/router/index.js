import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../page/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../page/AboutView.vue"),
  },
  {
    path: "/transaction/:id",
    name: "Transaction Detail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../page/TransactionDetails.vue"),
  },
  {
    path: "/transactions",
    name: "Transactions",
    component: () =>
      import(/* webpackChunkName: "about" */ "../page/TransactionsPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
