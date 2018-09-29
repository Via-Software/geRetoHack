<template>
    <div>
        <button type="button" class="btn btn-primary btn-lg btn-block" @click.prevent="check">Checar rutas</button>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </div>
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
            var that=this;
            axios.get('/buses')
            .then(function (response) {  
                var buses=JSON.stringify(response.data);
                buses=JSON.parse(buses)
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
        },
    },
    mounted(){
        
    }
}
</script>
