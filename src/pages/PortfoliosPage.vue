<script>
import PortfolioCard from '../components/PortfolioCard.vue';
import axios from 'axios';
import { store } from '../store';
export default {
    data() {
        return {
            store,
            portfolios: [],
            loading: false,
            curPage: 1,
            lastPage: 1
        };
    },
    created() {
        this.changePage(this.curPage);
    },
    methods: {
        changePage(newPage) {
            this.loading = true;
        axios
            .get(`${this.store.base_url}/api/portfolios`, {
                params: {
                    page: newPage
                }
            })
            .then((resp) => {
                console.log(resp);
                this.portfolios = resp.data.results.data;
                this.lastPage = resp.data.results.last_page;
                console.log(this.lastPage);
            }).finally(() => {
                this.loading = false;
                this.curPage = newPage;
            })
        }
    },
    components: { PortfolioCard }
}
</script>

<template>
    <div class="container">
        <h1 class="text-center my-3">My Portfolios</h1>

        <div v-if="loading">
            <h3 class="text-center mt-3">Loading...</h3>
        </div>
        <div v-else>
            <PortfolioCard :portfolios="portfolios" />
        </div>

        <div class="mb-2 d-flex justify-content-center">
            <!-- Preview Button -->
            <button :disabled="curPage === 1" class="btn btn-primary" @click="changePage(curPage-1)">
                <i class="fa-solid fa-caret-left"></i>
            </button>

            <button v-for="num in lastPage" class="btn btn-primary mx-2" :class="{'btn-warning': num === curPage}" :disabled="num === curPage" @click="changePage(num)">{{ num }}</button>

            <!-- Next Button -->
            <button :disabled="curPage === lastPage" class="btn btn-primary" @click="changePage(curPage+1)">
                <i class="fa-solid fa-caret-right"></i>
            </button>
        </div>

    </div>
</template>

<style lang="scss" scoped></style>