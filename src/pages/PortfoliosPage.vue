<script>
import PortfolioCard from '../components/PortfolioCard.vue';
import axios from 'axios';
export default {
    data() {
        return {
            base_url: "http://127.0.0.1:8000",
            portfolios: [],
            loading: false
        };
    },
    created() {
        this.loading = true;
        axios
            .get(`${this.base_url}/api/portfolios`)
            .then((resp) => {
                console.log(resp);
                this.portfolios = resp.data.results;
            }).finally(() => {
                this.loading = false;
            })
    },
    components: { PortfolioCard }
}
</script>

<template>
    <h1 class="text-center my-3">My Portfolios</h1>

    <div v-if="loading">
        <h3 class="text-center mt-3">Loading...</h3>
    </div>
    <div v-else>
        <PortfolioCard :portfolios="portfolios" />
    </div>
</template>

<style lang="scss" scoped></style>