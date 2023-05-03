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
  width: 20vw;
  padding: 1vh;
  margin: 1rem;
  border: 2px solid grey;
  animation: 0.7s ease-out 0s slideIn;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(25%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
