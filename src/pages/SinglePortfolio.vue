<script>
import { store } from '../store';
import axios from 'axios';

export default {
    data() {
        return {
            store,
            portfolio: [],
            loading: false,
        }
    },
    created() {
        this.loading = true;
        console.log(this.$route.params.slug);
        axios
            .get(`${store.base_url}/api/portfolios/${this.$route.params.slug}`)
            .then((resp) => {
                console.log(resp);
                if(resp.data.success){
                  this.portfolio = resp.data.result;  
                } else {
                    this.$router.push({name: 'not-found'});
                }
                
            })
            .finally(() => {
                this.loading = false;
            })
    }
}
</script>

<template>
    <div v-if="loading">
        <h2 class="text-center mt-3">Loading...</h2>
    </div>

    <div v-else>
        <h2 class="text-center mt-3">Portfolio: "{{ portfolio.title }}"</h2>
        <div class="card m-auto my-5" style="width: 25rem;">
            <div class="card-body">
                <h5 class="card-title text-center">{{ portfolio.title }}</h5>
                <p class="card-text">{{ portfolio.description }}</p>
                <p class="card-text"><h6 class="d-inline">ID:</h6> {{ portfolio.id }}</p>
                <p class="card-text">
                    <h6 class="d-inline">Slug:</h6> {{ portfolio.slug }}</p>
                <div v-if="portfolio.type">
                    <h6>Type: <span class="badge bg-primary">{{ portfolio.type.name }}</span></h6>
                </div>
                <div v-if="portfolio.technologies.length > 0">
                    <h6>Tech: <span v-for="tech in portfolio.technologies" class="badge me-1" :style="{'background-color': tech.hex_color}">{{ tech.name }}</span></h6>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>