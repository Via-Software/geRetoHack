<template>
  <div class="home">
    <h4>Soy el Mapa</h4>

<div id="map"></div>

    <div class="container" id="bodyHome"> 
      <!-- <button type="button" class="btn btn-primary btn-lg btn-block" @click="check">Rutas</button> -->
      <router-link to="/rutas" class="btn btn-primary btn-lg btn-block" >Rutas</router-link>
      <button type="button" class="btn btn-primary btn-lg btn-block">Trazar Ruta</button>
    </div>
  </div>
</template>


<script>
      var map;
      function initMap() {
        var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
        };);
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
      }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=myMap"></script>

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
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>

<style>
  #bodyHome{
    position: absolute;
    bottom: 10%;
  }
</style>