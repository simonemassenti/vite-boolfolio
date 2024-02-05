<script>
import AppHeader from './components/AppHeader.vue';

export default{
    data() {
        return { 
        };
    },
    
    components: { AppHeader }
}

</script>

<template>
    <AppHeader/>
    
    <router-view></router-view>
    
    
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;
@use "@fortawesome/fontawesome-free/css/all.css" as *;
</style>