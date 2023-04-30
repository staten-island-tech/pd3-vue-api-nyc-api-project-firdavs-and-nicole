<script setup></script>

<template>
  <div class="about">
    <h1>About</h1>
  </div>
  <Doughnut
    v-if="load"
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>
<script>
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ref, reactive } from "vue";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "BarChart", // renaming it crashes the page lol
  components: { Doughnut },
  props: {},
  data() {
    return {
      load: false,
      chartData: null,
      chartOptions: {
        responsive: true,
      },
    };
  },

  async mounted() {
    try {
      const response = await fetch(
        "https://data.cityofnewyork.us/resource/rsgh-akpg.json"
      );
      const dogs = await response.json();
      const pitbull = dogs.filter((e) => {
        e.breed === "Pit Bull";
      });
      const unknown = dogs.filter((e) => {
        e.breed === "UNKNOWN";
      });
      const shihtzu = dogs.filter((e) => {
        e.breed === "Shih Tzu";
      });
      const chihuahua = dogs.filter((e) => {
        e.breed === "Chihuahua";
      });
      this.chartData = {
        labels: ["Pit Bull", "Unknown", "Shih Tzu", "Chihuahua"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#a35cff"],
            data: [
              pitbull.length,
              unknown.length,
              shihtzu.length,
              chihuahua.length,
            ],
          },
        ],
      };
      this.load = true;
      console.log(this.load);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style scoped></style>
