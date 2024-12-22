<!-- SolarTerm.vue -->
<template>
    <div class="solar-term-detail">
        <SolarTermDetail :term="term" />
        <router-link to="/">返回</router-link>
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
            return terms.find(term => term.id === parseInt(id)); // 确保 id 是数字
        }
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
</style>