<script>
export default {
    props: {
        portfolios: Object
    },
    data() {
        return {

        }
    },
    methods: {
        cutText(text) {
            if (text.length > 55) {
                text = text.substr(0, 55) 
                return text + '...'
            }
            return text
        }
    }
}
</script>

<template>
    <div class="container my-4">
        <div class="row row-cols-4 g-3">
            <div v-for="portfolio in portfolios" class="col" >
                <div class="card" style="height: 12rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{ portfolio.title }}</h5>
                        <p class="card-text">{{ cutText(portfolio.description) }}</p>
                        <div class="position-absolute bottom-0 start-0 p-2">
                           <router-link :to="{name: 'single-portfolio', params: {slug: portfolio.slug }}" class="btn btn-primary">Dettagli</router-link> 
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>