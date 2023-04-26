<script setup></script>

<template>
  <div class="about">
    <h1>About</h1>
  </div>
  <Doughnut id="my-chart-id" :options="chartOptions" :data="chartData" />
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
      chartData: {
        labels: ["January", "February", "March"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [40, 20, 12],
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
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
