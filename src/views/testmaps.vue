<template>
  <div class="home">
    <h4>Soy el Mapa</h4>
    <div class="container" id="bodyHome"> 
      <!-- <button type="button" class="btn btn-primary btn-lg btn-block" @click="check">Rutas</button> -->
      <router-link to="/rutas" class="btn btn-primary btn-lg btn-block" >Rutas</router-link>
      <button type="button" class="btn btn-primary btn-lg btn-block">Trazar Ruta</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Maps',
  components: {
    // HelloWorld
  },
  methods:{
    check(){

    }
  }
}
</script>

<style>
  #bodyHome{
    position: absolute;
    bottom: 10%;
  }
</style>