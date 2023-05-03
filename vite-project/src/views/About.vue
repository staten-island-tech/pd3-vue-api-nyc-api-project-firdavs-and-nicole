<script setup></script>

<template>
  <div class="about">
    <h1>Pitbull Data</h1>
    <h3>Least Homicidal Pitbull</h3>
    <img
      class="present"
      alt="A Picture of Pit Bull saying 'Waiter! Waiter! More toddlers please!'"
      src="https://pbs.twimg.com/media/FpwPu39aIAAUR1H.jpg"
    />
  </div>
  <div class="chart">
    <Doughnut
      v-if="load"
      id="my-chart"
      :options="chartOptions"
      :data="chartData"
    />
  </div>
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
      const filtered = dogs.filter((x) => {
        return x.breed !== undefined;
      });
      const pitbull = filtered.filter((e) => {
        return e.breed.includes("Pit Bull");
      });
      const unknown = filtered.filter((e) => {
        return e.breed.includes("UNKNOWN");
      });
      const shihtzu = filtered.filter((e) => {
        return e.breed.includes("Shih Tzu");
      });
      const chihuahua = filtered.filter((e) => {
        return e.breed.includes("Chihuahua");
      });
      const german = filtered.filter((e) => {
        return e.breed.includes("German Shepherd");
      });
      this.chartData = {
        labels: [
          "Pit Bull",
          "Unknown",
          "German Shepherd",
          "Shih Tzu",
          "Chihuahua",
        ],
        datasets: [
          {
            backgroundColor: [
              "#41B883",
              "#E46651",
              "#fff533",
              "#00D8FF",
              "#a35cff",
            ],
            data: [
              pitbull.length,
              unknown.length,
              german.length,
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

<style scoped>
.present {
  height: 20rem;
  width: 20rem;
  border: solid black 1rem;
}
.chart {
  background: white;
  height: 30rem;
  width: 30rem;
  border: solid white 1rem;
  border-radius: 2rem;
}
.chart {
  margin: auto;
  align-items: center;
}
</style>
