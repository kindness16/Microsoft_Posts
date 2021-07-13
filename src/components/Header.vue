<template>
  <div class="header">
    <h3>To Do</h3>
    <div class="search">
      <i class="fas fa-search"></i>
      <input type="text" />
    </div>
    <div class="icons">
      <i class="fas fa-cog"></i>
      <i class="fas fa-question"></i>
      <i class="fas fa-user-circle"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
* {
  background-color: rgb(0, 174, 255);
  color: white;
}
h3{
  font-weight: 200;
}
input {
  color: black;
  border-radius: 3px;
  border: none;
  background-color: white;
  padding: 5px;
  padding-left: 30px;
  outline: none;
}
.search {
  position: relative;
}
.fa-search {
  background-color: white;
  padding: 0 7px 0 7px;
  top: 5px;
  font-size: 15px;
  position: absolute;
  color: rgb(0, 174, 255);
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 14px;
}
.icons {
  display: grid;
  grid-template-columns: 40% 40% 40%;
}
</style>
