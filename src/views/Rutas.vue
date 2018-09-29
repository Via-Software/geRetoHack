<template>
    <div>
        <button type="button" class="btn btn-primary btn-lg btn-block" @click.prevent="check">Checar rutas</button>
    </div>
</template>

<script>
import axios from 'axios';
var _ = require('lodash');
export default {
    name:'Rutas',
    data(){
        return{
            rutas:{},

        }
    },
    methods:{
        check(){
            // https://jsonplaceholder.typicode.com/todos
            // http://192.168.0.146:8080/buses
            axios.get('/buses')
            .then(function (response) {  
                var buses=JSON.stringify(response.data);
                buses=JSON.parse(buses)
                var rutas=Array();
                var ruta="";
                // console.log(buses[0].route.name
                for(var bus in buses){
                    // console.log(buses[bus].route.name)
                    ruta = buses[bus].route.name;
                    if (ruta!="") {
                        rutas.push(ruta)
                    }
                }
                rutas=_.uniq(rutas)
                console.log(rutas);
                
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
