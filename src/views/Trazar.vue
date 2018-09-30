<template>
    <div>
    </div>
</template>

<script>
import axios from 'axios'
// var _ = require('lodash');
export default {
    name:'Trazar',
    data(){
        return{
            busesID: Array(),

        }
    },
    created(){
        var that=this;
        axios.get('/buses').then(function (response) {  
            var buses=JSON.stringify(response.data);
            buses=JSON.parse(buses)
            for(var bus in buses){
                that.busesID.push(buses[bus].id);
            }
            console.log(that.busesID);
        })
    }
}
</script>
<style>

</style>
