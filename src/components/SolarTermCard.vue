<!-- SolarTermCard.vue -->
<template>
  <div class="solar-term-card" @click="goToDetail">
    <h2>{{ term.name }}</h2>
    <p>{{ term.date }}</p>
    <p>{{ term.description }}</p>
  </div>
</template>

<script>
//`props`：在这个组件中，`term` 是一个属性（prop），它接收父组件传递的数据（在本例中是每个节气的数据）。`required: true` 表示该属性是必传的，父组件必须传递该属性
export default {
    props: {
        term: {
            type: Object,
            required: true
        }
    },
    methods: {
        goToDetail(){
          //`params` 用于向目标路由传递动态参数，允许我们在不同的页面之间传递数据
            this.$router.push({name:'SolarTerm',params:{id:this.term.id}})
        }
    },
}
</script>

<style scoped>
.solar-term-card {
  border: 1px solid #ddd;
  padding: 10px;
  width: 150px;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.solar-term-card:hover {
  background-color: #f9f9f9;
}
</style>