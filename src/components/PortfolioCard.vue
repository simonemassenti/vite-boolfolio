<script>
export default {
    props: {
        portfolios: Object
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="container my-4">
        <div class="row row-cols-4 g-3">
            <div v-for="portfolio in portfolios" class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ portfolio.title }}</h5>
                        <p class="card-text">{{ portfolio.description }}</p>
                        <router-link :to="{name: 'single-portfolio', params: {slug: portfolio.slug }}" class="btn btn-primary">Dettagli</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>