<template>
<div class="home">
    <h1>二十四节气</h1>
    <img src="../../public/images/menhu.jpg" alt="门户" class="header-image" />
    
    <div class="solar-term-timeline">
    <SolarTermCard
        v-for="term in solarTerms"
        :key="term.id"
        :term="term"
    />
    </div>

    <div class="chart">
    <canvas ref="temperatureChart" width="400" height="200"></canvas>
    </div>

    <!-- 收集表单 -->
    <div class="form-container">
    <h2>反馈表单</h2>
    <form @submit.prevent="submitForm">
        <div class="form-group">
        <label for="name">姓名:</label>
        <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div class="form-group">
        <label for="email">邮箱:</label>
        <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div class="form-group">
        <label for="message">留言:</label>
        <textarea id="message" v-model="formData.message" required></textarea>
        </div>
        <button type="submit">提交</button>
    </form>
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
components: {
    SolarTermCard
},
computed: {
    solarTerms() {
    return this.$store.state.solarTerms;
    }
},
setup() {
    const temperatureChart = ref(null);
    const formData = ref({
    name: '',
    email: '',
    message: ''
    });

    onMounted(() => {
    const ctx = temperatureChart.value.getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
        labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        datasets: [{
            label: '温度变化',
            data: [2, 4, 8, 15, 20, 25, 30, 29, 24, 18, 10, 5], // 示例温度数据 borderColor: 'rgba(75, 192, 192, 1)',
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

    const submitForm = () => {
    // 处理表单提交逻辑
    console.log('表单数据:', formData.value);
    // 清空表单 formData.value = { name: '', email: '', message: '' };
    alert('感谢您的反馈！');
    };

    return {
    temperatureChart,
    formData,
    submitForm
    };
}
}
</script>

<style scoped>
.home {
text-align: center;
padding: 20px;
}

.header-image {
width: 100%;
max-width: 600px;
margin: 20px auto;
border-radius: 8px;
transition: transform 0.3s;
}

.header-image:hover {
transform: scale(1.05);
}

.solar-term-timeline {
display: flex;
flex-wrap: wrap;
gap: 16px;
justify-content: center;
margin: 20px 0;
}

.chart {
margin: 20px auto;
}

.form-container {
margin-top: 40px;
padding: 20px;
border: 1px solid #ccc;
border-radius: 8px;
background-color: #f9f9f9;
}

.form-group {
margin-bottom: 15px;
}

label {
display: block;
margin-bottom: 5px;
}

input, textarea {
width: 100%;
padding: 10px;
border: 1px solid #ccc;
border-radius: 4px;
}

button {
padding: 10px 15px;
background-color: #4CAF50;
color: white;
border: none;
border-radius: 4px;
cursor: pointer;
}

button:hover {
background-color: #45a049;
}
</style>
