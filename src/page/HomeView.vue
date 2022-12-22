<template>
  <div class="home">
    <h1>Home is here</h1>
    <ul>
      <li v-for="(customer, index) in customers" :key="index">
        {{ customer }}
      </li>
    </ul>
    <input type="text" v-model="searchText" />
    <ul>
      <li v-for="(customer, index) in customersFilled" :key="index">
        {{ customer }}
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { computed, ref, reactive, watch, watchEffect } from "vue";
export default {
  name: "HomeView",

  setup() {
    const searchText = ref("");
    const customers = reactive([
      "honda",
      "mean",
      "hai",
      "phar",
      "honda",
      "mean",
      "hai",
      "phar",
    ]);
    const customersFilled = computed(() =>
      customers
        .map((customer) => customer.toLowerCase())
        .filter((customer) => customer.includes(searchText.value.toLowerCase()))
    );
    watch(searchText, (value) => {
      console.log(value);
    });
    watchEffect(() => {
      if (searchText.value) {
        console.log("runagain");
      }
    });
    return { searchText, customersFilled: customersFilled, customers };
  },
};
</script>
