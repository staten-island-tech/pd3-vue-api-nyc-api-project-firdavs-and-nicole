<template>
  <div class="container">
    <h1>{{ id }}</h1>
    <h2>{{ date }}</h2>
    <p>{{ gender }} {{ breed }}</p>
    <p>Spayed/Neutered? {{ neuter }}</p>
  </div>
</template>

<script>
export default {
  name: "CardData",
  props: {
    id: String,
    date: String,
    gender: String,
    breed: String,
    neuter: Boolean,
  },
};
</script>

<style scoped>
.container {
  background-color: white;
  padding: 1vh;
  margin: 1rem;
  border-radius: 2rem;
}
</style>
