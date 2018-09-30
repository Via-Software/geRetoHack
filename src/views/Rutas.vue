<template>
    <div class="cotainer">
        <button type="button" class="btn btn-primary btn-lg btn-block" @click.prevent="check">Checar rutas</button>
        <b-dropdown id="ddown1" text="Dropdown Button" class="">
            <b-dropdown-item></b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
import axios from 'axios';

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
                console.log(response.data);
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
