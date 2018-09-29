<template>
    <div>
        <button type="button" class="btn btn-primary btn-lg btn-block" @click.prevent="check">Checar rutas</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'Rutas',
    methods:{
        check(){
            // https://jsonplaceholder.typicode.com/todos
            // http://192.168.0.146:8080/buses
            axios.get('/buses')
            .then(function (response) {  
                console.log(response);
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
