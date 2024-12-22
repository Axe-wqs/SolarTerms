<!-- src/components/SolarTermDetail.vue -->
<template>
    <div class="solar-term-detail">
      <h2>{{ term.name }}</h2>
      <img :src="getImagePath(term.name)" alt="节气图片" />
      <p><strong>日期:</strong> {{ term.date }}</p>
      <p><strong>气候特点:</strong> {{ term.climate }}</p>
      <p><strong>农事活动:</strong> {{ term.agriculture }}</p>
      <p><strong>传统习俗:</strong> {{ term.customs }}</p>
  
      <!-- 新增活动部分 -->
      <div v-if="term.activities">
        <h3>相关活动</h3>
        <div v-if="term.activities.welcomingSpring">
          <h4>{{ term.activities.welcomingSpring.title }}</h4>
          <p>{{ term.activities.welcomingSpring.description }}</p>
        </div>
        <div v-if="term.activities.whipSpringOx">
          <h4>{{ term.activities.whipSpringOx.title }}</h4>
          <p>{{ term.activities.whipSpringOx.description }}</p>
        </div>
      </div>
  
      <!-- 新增养生建议部分 -->
      <div v-if="term.health">
        <h3>养生建议</h3>
        <p><strong>建议:</strong> {{ term.health.tips }}</p>
        <p><strong>传统医学:</strong> {{ term.health.traditionalMedicine }}</p>
      </div>
  
      <!-- 新增古诗部分 -->
      <div v-if="term.poetry && term.poetry.length > 0">
        <h3>相关古诗</h3>
        <ul>
          <li v-for="(poem, index) in term.poetry" :key="index">
            <strong>{{ poem.title }}</strong> - {{ poem.author }}: "{{ poem.content }}"
          </li>
        </ul>
      </div>
    </div>
  </template>

<script>
import {pinyin} from 'pinyin-pro';



export default {
    props: {
        term: {
            type: Object,
            required: true
        }
    },
    methods: {
        getImagePath(termName) {
            const pinYin = pinyin(termName, { toneType: 'none' }).toLowerCase().replace(/\s+/g, '');
            return `/images/solar-terms/${pinYin}.jpg`;
            // const pinYin = pinyin(termName, { style: pinyin.STYLE_NORMAL }).join('');
            //return `../../public/images/solar-terms/${pinYin.toLowerCase()}.jpg`;
            //return `../../public/images/solar-terms/${termName.toLowerCase().replace(/ /g,'-')}.jpg`;
        },
    },
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
