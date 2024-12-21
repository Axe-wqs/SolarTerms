<!-- SolarTermCard.vue -->
<template>
  <div class="solar-term-card" @click="goToDetail">
    <h2>{{ term.name }}</h2>
    <p>{{ term.date }}</p>
    <p>{{ term.description }}</p>
  </div>
</template>

<script>
export default {
    props: {
        term: {
            type: Object,
            required: true
        }
    },
    methods: {
        goToDetail(){
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