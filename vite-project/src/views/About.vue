<script setup></script>

<template>
  <div class="about">
    <h1>About</h1>
  </div>
  <Doughnut
    id="my-chart-id"
    v-if="loaded"
    :options="chartOptions"
    :data="chartData"
  />
  <button @click="getpost">ggg</button>
</template>
<script>
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "BarChart",
  components: { Doughnut },
  data() {
    return {
      chartData: false,
      chartOptions: null,
      responsive: false,
    };
  },
  mountChart: function () {
    let x = ["40", "60"];
    this.chartData = {
      labels: ["Pitbulls", "Anything Else", "Cats"],
      datasets: [{ backgroundColor: ["blue,green"], data: this.x }],
    };
    this.chartOptions = {
      responsive: true,
    };
    this.loaded = true;
  },
  methods: {
    getpost: async function () {
      const response = await fetch(
        "https://data.cityofnewyork.us/resource/rsgh-akpg.json"
      );
      const dogs = await response.json();
      dogs.forEach((e) => {
        console.log(e.breed);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
