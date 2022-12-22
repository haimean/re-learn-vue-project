<template>
  <h1>Transaction Detail</h1>
  <div class="transaction-detail" v-if="transaction">
    <h1>{{ transaction.name }}</h1>
    <h4>{{ transaction.price }}</h4>
  </div>
  <div class="transaction-detail" v-else>
    <h3>Loading data...</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transaction: null,
    };
  },
  created() {
    fetch("http://localhost:3000/transactions/" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => {
        this.transaction = data;
      });
  },
};
</script>

<style scoped>
.transactions {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.transaction-detail {
  background: #d4cfcf;
  margin: 2rem;
}
</style>
