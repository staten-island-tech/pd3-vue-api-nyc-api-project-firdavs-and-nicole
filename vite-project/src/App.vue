<script setup></script>

<template>
  <div class="holder">
    <router-link class="link" to="/">Pitbulls</router-link>
    <div></div>
    <router-link class="link" to="/about">Moar Pitbulls</router-link>
  </div>
  <router-view></router-view>
</template>

<style scoped>
router-link {
}
.holder {
  display: flex;
  text-align: center;
  justify-content: center;
  background: white;
  max-height: 20rem;
  max-width: 20rem;
  border: solid white 1rem;
  border-radius: 1rem;
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
