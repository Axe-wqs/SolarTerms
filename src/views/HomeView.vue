<!-- HomeView.vue -->
<template>
    <div class="home">
        <h1>二十四节气</h1>
        <img src="../../public/images/menhu.jpg" alt="门户">
        <div class="solar-term-timeline">
            <SolarTermCard
                v-for="term in solarTerms"
                :key="term.id"
                :term="term"
            />
            <div class="chart">
            <canvas ref="temperatureChart" width="400" height="200"></canvas>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';
import SolarTermCard from '@/components/SolarTermCard.vue';

Chart.register(...registerables);


export default {
    name: 'HomeView',
    //components 是注册的意思

    components: {
        SolarTermCard
    },
    // 似乎拿到了src/store/index.js这里写的数组
    computed: {
        solarTerms() {
            return this.$store.state.solarTerms;
        }
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
                        data: [2,4,8,15,15,25,25,29,29,18,18,5],//props.term.temperatureData, // 使用 term 的温度数据 borderColor: 'rgba(75, 192, 192, 1)',
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
    }
}
</script>

<style scoped>
.solar-term-timeline {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
}
</style>