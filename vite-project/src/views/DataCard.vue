<template>
  <div id="container">
    <CardData
      v-for="bite in bites"
      :key="bite.uniqueid"
      :id="bite.uniqueid"
      :date="bite.dateofbite"
      :gender="bite.gender"
      :breed="bite.breed"
      :neuter="bite.spayneuter"
    ></CardData>
  </div>
</template>

<script setup>
import CardData from "../components/CardData.vue";
import { ref, onMounted } from "vue";
const bites = ref("");
async function getdata() {
  let response = await fetch(
    "https://data.cityofnewyork.us/resource/rsgh-akpg.json"
  );
  let bitedata = await response.json();
  let bitefilter = bitedata.filter((x) => {
    return x.breed !== undefined;
  });
  bites.value = bitefilter;
}
onMounted(() => {
  getdata();
});
</script>

<script>
export default {
  name: "DataCard",
  components: { CardData },
};
</script>

<style scoped>
#container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 1rem;
}
</style>
