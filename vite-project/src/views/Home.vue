<template>
  <div class="about">
    <h1>Age of Dogs that bit people</h1>
  </div>
  <img
    class="present"
    alt="A picture of Pitbull the rapper"
    src="https://m.media-amazon.com/images/I/51BT+vl+KYL.jpg"
  />
  <div class="chart">
    <Bar
      v-if="load"
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </div>

  <button class="button" @click="Chart1">Change Chart</button>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "ActualBar",
  components: { Bar },
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
  methods: {
    Chart1: async function () {
      try {
        const response = await fetch(
          "https://data.cityofnewyork.us/resource/rsgh-akpg.json"
        );
        const dogs = await response.json();
        const filtered = dogs.filter((x) => {
          return x.spayneuter !== undefined;
        });
        const spay = filtered.filter((e) => {
          return e.spayneuter.includes(true);
        });
        const neuter = filtered.filter((e) => {
          return e.spayneuter.includes(false);
        });

        this.chartData = {
          labels: [Spayed / Neutered, Genitals],
          datasets: [
            {
              label: "Balls or No Balls",
              backgroundColor: ["#E46651"],
              data: [spay.length, neuter.length],
            },
          ],
        };
        this.load = true;
        console.log(this.load);
      } catch (e) {
        console.log(e);
      }
    },
  },
  async mounted() {
    try {
      const response = await fetch(
        "https://data.cityofnewyork.us/resource/rsgh-akpg.json"
      );
      const dogs = await response.json();
      const filtered = dogs.filter((x) => {
        return x.age !== undefined;
      });
      const age1 = filtered.filter((e) => {
        return e.age.includes(1);
      });
      const age2 = filtered.filter((e) => {
        return e.age.includes(2);
      });
      const age3 = filtered.filter((e) => {
        return e.age.includes(3);
      });
      const age4 = filtered.filter((e) => {
        return e.age.includes(4);
      });
      const age5 = filtered.filter((e) => {
        return e.age.includes(5);
      });
      const age6 = filtered.filter((e) => {
        return e.age.includes(6);
      });
      const age7 = filtered.filter((e) => {
        return e.age.includes(7);
      });
      const age8 = filtered.filter((e) => {
        return e.age.includes(8);
      });
      const age9 = filtered.filter((e) => {
        return e.age.includes(9);
      });
      const age10 = filtered.filter((e) => {
        return e.age.includes(10);
      });

      this.chartData = {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [
          {
            label: "Number of Dogs",
            backgroundColor: ["#E46651"],
            data: [
              age1.length,
              age2.length,
              age3.length,
              age4.length,
              age5.length,
              age6.length,
              age7.length,
              age8.length,
              age9.length,
              age10.length,
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
  max-height: 50rem;
  max-width: 50rem;
  border: solid white 1rem;
  border-radius: 2rem;
}
</style>
