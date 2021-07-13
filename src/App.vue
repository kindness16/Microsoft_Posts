<template>
  <div class="main">
    <Toolbar />
    <Header />
    <div class="flex">
      <Navbar />
      
    </div>
  </div>
</template>

<script>
import Toolbar from "./components/Toolbar";
import Header from "./components/Header";
import Navbar from "./components/Navbar.vue";
import "./index.scss";
export default {
  name: "App",
  components: {
    Toolbar,
    Header,
    Navbar,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
</style>
