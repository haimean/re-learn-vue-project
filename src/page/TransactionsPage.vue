<template>
  <h1>Transactions</h1>
  <div class="transactions" v-if="transactions">
    <div
      class="transaction-detail"
      v-for="transaction in transactions"
      :key="transaction.id"
    >
      <router-link :to="`/transaction/${transaction.id}`">
        <h1>{{ transaction.name }}</h1>
      </router-link>
      <h4>{{ transaction.price }}</h4>
    </div>
  </div>
  <div class="transaction-detail" v-else>
    <h3>Loading data...</h3>
  </div>
</template>
<script>
export default {
  setup(props) {
    console.log(props);
  },
  data() {
    return {
      transactions: null,
    };
  },
  created() {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => {
        this.transactions = data;
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
