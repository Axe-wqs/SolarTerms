<template>
  <div class="home">
    <div class="parallex p3">
      <div class="content">
        <h1>二十四节气</h1>
        <img src="../../public/images/menhu.jpg" alt="门户" class="header-image" />
      </div>
    </div>
  
    <!-- Swiper 轮播图 -->
    <div class="swiper-container">
      <swiper
        :slides-per-view="1"
        :space-between="0"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :modules="modules"
        :pagination="{ clickable: true }"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false
        }"
        navigation
        :loop="true"
      >
        <swiper-slide v-for="(item, index) in images" :key="index">
          <img class="item" :src="item" />
        </swiper-slide>
      </swiper>
    </div>
  
    <div class="parallex p2">
      <div class="content">
        <div class="solar-term-timeline">
          <SolarTermCard
            v-for="term in solarTerms"
            :key="term.id"
            :term="term"
          />
        </div>
      </div>
    </div>
  
    <div class="parallex p1">
      <div class="content">
        <div class="chart">
          <canvas ref="temperatureChart" width="400" height="200"></canvas>
        </div>
      </div>
    </div>
  
    <!-- 收集表单 -->
    <div class="parallex p4">
      <div class="content">
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
    </div>
  </div>
  </template>

<script>
import { ref, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';
import SolarTermCard from '@/components/SolarTermCard.vue';
import { Swiper,SwiperSlide } from 'swiper/vue';
import 'swiper/css'; // 确保样式文件已引入
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// 导入 Swiper 模块
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

Chart.register(...registerables);

export default {
name: 'HomeView',
components: {
    SolarTermCard,
    Swiper,
    SwiperSlide
},
computed: {
    solarTerms() {
    return this.$store.state.solarTerms;
    }
},
setup() {
    const temperatureChart = ref(null);
    const images = ref([
  require('@/assets/banner/static/01.jpg'),
  require('@/assets/banner/static/02.jpg'),
  require('@/assets/banner/static/03.jpg'),
  require('@/assets/banner/static/04.jpg'),
  require('@/assets/banner/static/05.jpg'),
  require('@/assets/banner/static/06.jpg'),
  require('@/assets/banner/static/07.jpg'),
  require('@/assets/banner/static/08.jpg'),
  require('@/assets/banner/static/09.jpg'),
  require('@/assets/banner/static/10.jpg'),
  require('@/assets/banner/static/11.jpg'),
  require('@/assets/banner/static/12.jpg'),
  require('@/assets/banner/static/13.jpg'),
  require('@/assets/banner/static/14.jpg'),
  require('@/assets/banner/static/15.jpg'),
  require('@/assets/banner/static/16.jpg'),
  require('@/assets/banner/static/17.jpg'),
  require('@/assets/banner/static/18.jpg'),
  require('@/assets/banner/static/19.jpg'),
  require('@/assets/banner/static/20.jpg'),
  require('@/assets/banner/static/21.jpg'),
  require('@/assets/banner/static/22.jpg'),
  require('@/assets/banner/static/23.jpg'),
  require('@/assets/banner/static/24.jpg'),
]);
    const formData = ref({
    name: '',
    email: '',
    message: ''
    });

// 注册 Swiper 模块
const modules = [Autoplay, Pagination, Navigation];

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
    submitForm,
    images,
    modules
    };
}
}
</script>


<style scoped>
.home {
  text-align: center;
  padding: 40px 20px;
  background-color: #f0f4f8; /* 背景颜色 */
}

.header-image {
  width: 100%;
  max-width: 600px;
  margin: 40px auto;
  border-radius: 16px;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.header-image:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* 调整swiper容器和图片的样式 */
.swiper-container {
  width: 100%;
  height: 400px; /* 增加轮播图高度 */
  margin: 40px 0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
}

.solar-term-timeline {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  margin: 40px 0;
}

.chart {
  margin: 40px auto;
  width: 90%;
  max-width: 800px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 20px;
  background-color: white;
}

.form-container {
  margin-top: 60px;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
}

button {
  padding: 12px 24px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

.parallex {
  width: 100%;
  height: 80vh;
  position: relative;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  text-align: center;
  backdrop-filter: blur(10px); /* 添加模糊效果 */
}

.p1 {
    background-image: url(../../public/images/solar-terms/chunfen1.jpg);
}
.p2 {
    background-image: url(../../public/images/solar-terms/guyu1.jpg);
}
.p3 {
    background-image: url(../../public/images/solar-terms/shuangjiang1.jpg);
}
.p4 {
    background-image: url(../../public/images/solar-terms/liqiu2.jpg);
}

.p1, .p2, .p3, .p4 {
  background-color: rgba(0, 0, 0, 0.5); /* 添加半透明背景 */
}

@media (max-width: 768px) {
  .header-image {
    max-width: 100%;
    margin: 20px auto;
  }

  .swiper-container {
    height: 300px;
  }

  .form-container {
    padding: 20px;
  }
}
</style>

