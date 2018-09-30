<template>
  <div class="home">
    <h4>que pedo</h4>
    <div class="container" id="bodyHome"> 
      <!-- <button type="button" class="btn btn-primary btn-lg btn-block" @click="check">Rutas</button> -->
      <router-link to="/rutas" class="btn btn-primary btn-lg btn-block" >Rutas</router-link>
      <router-link to="/trazar" class="btn btn-primary btn-lg btn-block" >Maps</router-link>
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

<style>
  #bodyHome{
    position: absolute;
    bottom: 10%;
  }
</style>