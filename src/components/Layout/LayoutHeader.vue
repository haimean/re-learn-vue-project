<template>
  <nav>
    <router-link v-for="route in routers" :key="route.name" :to="route.path">{{
      route.name
    }}</router-link>
  </nav>
</template>
<script>
export default {
  name: "LayoutHeader",
  data() {
    return {
      routers: [
        {
          path: "/",
          name: "Home",
        },
        {
          path: "/about",
          name: "About",
        },
        {
          path: "/transactions",
          name: "Transactions",
        },
      ],
    };
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
