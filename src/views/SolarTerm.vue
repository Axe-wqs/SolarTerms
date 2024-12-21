<template>
    <div class="solar-term-detail">
      <h2>{{ term.name }}</h2>
      <p><strong>日期:</strong> {{ term.date }}</p>
      <p><strong>气候特点:</strong> {{ term.climate }}</p>
      <p><strong>农事活动:</strong> {{ term.agriculture }}</p>
      <p><strong>传统习俗:</strong> {{ term.customs }}</p>
   <div class="chart">
        <canvas ref="temperatureChart" width="400" height="200"></canvas>
      </div>
   <router-link to="/">返回</router-link>
    </div>
</template>

<script>
  import { ref, onMounted } from 'vue';
  import { Chart, registerables } from 'chart.js';

  Chart.register(...registerables);

  export default {
    name: 'SolarTerm',
    data() {
      return {
        term: {}
      };
    },
    setup() {
      const temperatureChart = ref(null);

      onMounted(() => {
        const ctx = temperatureChart.value.getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            datasets: [{
              label: '温度变化',
              data: [0, 2, 8, 15, 20, 25, 30, 28, 20, 15, 5, 0], // 示例数据 borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              fill: true,
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: '温度 (°C)'
                }
              },
              x: {
                title: {
                  display: true,
                  text: '月份'
                }
              }
            }
          }
        });
      });

      return {
        temperatureChart };
    },

    methods: {
    getSolarTermById(id) {
      const terms = this.$store.state.solarTerms;
      return terms.find(term => term.id === id);
    },
    notifyUser() {
      // 发送通知的逻辑
    }
  },
    created() {
      const id = this.$route.params.id;
      this.term = this.getSolarTermById(id); // 获取节气数据 this.notifyUser(); // 发送通知 },
      this.notifyUser ()
      // methods: {
    //   getSolarTermById(id) {
    //     const terms = this.$store.state.solarTerms;
    //     return terms.find(term => term.id === id);
    //   }
    //   notifyUser() {
    //     if (Notification.permission === 'granted') {
    //       new Notification(`今天是${this.term.name}`, {
    //         body: `今天是${this.term.name}，${this.term.customs}。`,
    //       });
    //     }
    //   }
    // }
  }
}
</script>
  
<style scoped>
.solar-term-detail {
padding: 20px;
background-color: #fff;
border-radius: 8px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
margin: 20px;
}

.chart {
margin-top: 20px;
}

h2 {
color: #333;
}

p {
font-size: 16px;
line-height: 1.5;
}
</style>
