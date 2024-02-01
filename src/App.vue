<script>
import axios from 'axios';

export default{
    data() {
        return {
            base_url: "http://127.0.0.1:8000",
            portfolios: []
        }
    },
    created() {
        axios
        .get(`${this.base_url}/api/portfolios`)
        .then((resp) => {
            console.log(resp);
        })
    }
}

</script>

<template>
    <h1>All Portfolios</h1> 

    
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;

</style>