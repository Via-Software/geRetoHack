<template>
  <div id="app">
    <div id="nav">
      <router-view name="header"></router-view>
    </div>
    <div id="route">
      <router-view/>
    </div>
    <!-- <div id="footer">
        <router-view name="footer"></router-view>
    </div> -->
  </div>
</template>
<script>

export default {
  components:{
    // Header
  }
}
</script>


<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
