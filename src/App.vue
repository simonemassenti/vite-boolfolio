<script>
import axios from 'axios';
import PortfolioCard from './components/PortfolioCard.vue';

export default{
    data() {
        return {
            base_url: "http://127.0.0.1:8000",
            portfolios: []
        };
    },
    created() {
        axios
            .get(`${this.base_url}/api/portfolios`)
            .then((resp) => {
            console.log(resp);
            this.portfolios = resp.data.results;
        });
    },
    components: { PortfolioCard }
}

</script>

<template>
    <h1 class="text-center mt-3">All Portfolios</h1> 
    
    <PortfolioCard :portfolios="portfolios"/>
    
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;

</style>