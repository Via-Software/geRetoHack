<template>
  <div class="home">
    <h4>que pedo</h4>
    <div class="container" id="bodyHome"> 
      <button type="button" class="btn btn-primary btn-lg btn-block" @click="check">Rutas</button>
      <button type="button" class="btn btn-primary btn-lg btn-block">Trazar Ruta</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  methods:{
    check(){
      
    }
  }
}
</script>

<style scoped>
  #bodyHome{
    padding-bottom: 0%
  }
</style>