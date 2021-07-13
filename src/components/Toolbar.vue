<template>
  <div>
    <h4>Microsoft To Do</h4>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
  background: rgb(56, 56, 56);
  h4 {
    padding: 5px;
    color: rgb(255, 255, 255);
    text-align: center;
  }
}
</style>
