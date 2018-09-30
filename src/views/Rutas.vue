<template>
    <div class="cotainer">
        <!-- <button type="button" class="btn btn-primary btn-lg btn-block" @click.prevent="check">Checar rutas</button> -->
        <b-dropdown id="ddown1" text="Dropdown Button" class="">
            <b-dropdown-item v-for="(ruta, index) in rutas" :key="index">{{ruta}}</b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
import axios from 'axios';
var _ = require('lodash');
export default {
    name:'Rutas',
    data(){
        return{
            rutas: Array(),
            }
    },
    methods:{
        check(){
            // http://192.168.0.146:8080/buses
        },
    },
    mounted(){
        
    },
    created(){
        var that=this;
            axios.get('/buses')
            .then(function (response) {  
                // var buses=JSON.stringify(response.data);
                // buses=JSON.parse(buses)
                var buses=response.data;
                var rutas=Array();
                var ruta="";
                for(var bus in buses){
                    ruta = buses[bus].route.name;
                    if (ruta!="") {
                        rutas.push(ruta)
                    }
                }
                rutas=_.uniq(rutas);
                that.$data.rutas=rutas;
            })
            .catch(function (error) {  
                console.log(error); 
            });
    }
}
</script>
