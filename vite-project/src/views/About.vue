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

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "BarChart", // renaming it crashes the page lol
  components: { Doughnut },
  props: {},
  data() {
    return {
      load: false,
      chartData: {
        labels: ["Pit Bull", "Unknown", "Shih Tzu", "Chihuahua"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#a35cff"],
            data: [],
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  async mounted() {
    const response = await fetch(
      "https://data.cityofnewyork.us/resource/rsgh-akpg.json"
    );
    const dogs = await response.json();
    const pitbull = dogs.filter((e) => {
      e.breed === "Pit Bull";
    });
    this.chartData.datasets[0].data.push(pitbull.length);
    const unknown = dogs.filter((e) => {
      e.breed === "UNKNOWN";
    });
    this.chartData.datasets[0].data.push(unknown.length);
    const shihtzu = dogs.filter((e) => {
      e.breed === "Shih Tzu";
    });
    this.chartData.datasets[0].data.push(shihtzu.length);
    const chihuahua = dogs.filter((e) => {
      e.breed === "Chihuahua";
    });
    this.chartData.datasets[0].data.push(chihuahua.length);

    this.load = true;
  },
};
</script>

<style lang="scss" scoped></style>
