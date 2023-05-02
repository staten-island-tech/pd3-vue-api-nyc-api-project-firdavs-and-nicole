<script setup>
import DataCard from "./views/DataCard.vue";
</script>

<template>
  <div class="holder">
    <div>
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/doughnut">Pitbulls</router-link>
      <router-link class="link" to="/bar">Moar Pitbulls</router-link>
    </div>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.holder {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  background: white;
  border: solid white 1rem;
  border-radius: 1rem;
  margin: auto;
}
.link {
  margin: 0 1rem;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em yellow);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
