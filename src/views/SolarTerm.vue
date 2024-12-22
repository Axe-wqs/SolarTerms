<template>
<div class="solar-term-detail">
    <SolarTermDetail :term="term" />
    <router-link to="/" class="back-link">返回</router-link>
</div>
</template>

<script>
import SolarTermDetail from '@/components/SolarTermDetail.vue';

export default {
name: 'SolarTerm',
components: {
    SolarTermDetail
},
data() {
    return {
    term: {}
    };
},
created() {
    const id = this.$route.params.id;
    this.term = this.getSolarTermById(id);
    if (!this.term) {
    console.error('Term not found for id:', id);
    }
},
methods: {
    getSolarTermById(id) {
    const terms = this.$store.state.solarTerms;
    return terms.find(term => term.id === parseInt(id)); // 确保 id 是数字 }
        }
    }
}
</script>

<style scoped>
.solar-term-detail {
padding: 20px;
background-color: #f9f9f9; /* 更柔和的背景色 */
border-radius: 8px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
margin: 20px;
max-width: 800px; /* 限制最大宽度 */
margin: 20px auto; /* 居中显示 */
}

.back-link {
display: inline-block;
margin-top: 20px;
padding: 10px 15px;
background-color: #4CAF50; /* 按钮背景色 */
color: white;
border-radius: 4px;
text-decoration: none;
transition: background-color 0.3s;
}

.back-link:hover {
background-color: #45a049; /* 悬停效果 */
}
</style>
