<template>
    <div id="navbar">
    <router-link to="/"><i class="fas fa-sun"></i> My day</router-link>
    <router-link to="/important"><i class="far fa-star"></i> Important</router-link>
    <router-link to="/planed"><i class="far fa-calendar-alt"></i> Planed</router-link>
    <router-link to="/all"><i class="fas fa-infinity"></i> All</router-link>
    <router-link to="/todo"><i class="fas fa-home"></i> ToDo</router-link>
  </div>
  <router-view />
</template>

<script>
import '../index.scss'

export default {
    name: 'Navbar'
}
</script>

<style>

</style>