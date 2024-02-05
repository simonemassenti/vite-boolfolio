<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Portfolios</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse e-auto" id="navbarNav">
      <ul class=" ms-auto navbar-nav">
        <li class="nav-item">
          <router-link :to="{name: 'home'}" class="btn btn-primary" >Home</router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{name: 'about'}" class="btn btn-primary mx-2">About Us</router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{name: 'portfolios'}" class="btn btn-primary">Portfolios List</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>

<style lang="scss" scoped>
</style>