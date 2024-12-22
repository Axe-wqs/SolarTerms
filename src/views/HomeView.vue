<!-- HomeView.vue -->
<template>
    <div class="home">
        <h1>二十四节气</h1>
        <div class="solar-term-timeline">
            <SolarTermCard
                v-for="term in solarTerms"
                :key="term.id"
                :term="term"
            />
        </div>
    </div>
</template>

<script>
import SolarTermCard from '@/components/SolarTermCard.vue';

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