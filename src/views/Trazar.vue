<template>
    <div>
        <GmapMap
        :center="center"
        :zoom="14"
        map-type-id="terrain"
        style="width: 100%; height: 100%;"
        >
        <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
        />
        </GmapMap>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'Trazar',
    data(){
        return{
            center: {
            lat: 20.658945, 
            lng: -100.348392
            },
            markers: [{
            position: {
                lat: 20.658945, 
                lng: -100.348392
            }
            }, {
            position: {
                lat: 20.658945, 
                lng: -100.348392
            }
            }],
            busesID: Array(),
            coordinates : [
                {lat: 20.664786, lng: -100.400155},
                {lat: 20.666318, lng: -100.399848},
                {lat: 20.661564, lng: -100.387427},
                {lat: 20.662431, lng: -100.376535},
                {lat: 20.659757, lng: -100.352586},
                {lat: 20.660278, lng: -100.347638},
                {lat: 20.657249, lng: -100.349287},
                {lat: 20.656295, lng: -100.349487},
                {lat: 20.656541, lng: -100.348979},
                {lat: 20.660809, lng: -100.346416},
                {lat: 20.657258, lng: -100.343225},
                {lat: 20.656862, lng: -100.343060},
                {lat: 20.660420, lng: -100.343984},
                {lat: 20.662814, lng: -100.377411},
                {lat: 20.663190, lng: -100.391411},
                {lat: 20.666890, lng: -100.403681},
                {lat: 20.667733, lng: -100.404591},
                {lat: 20.667634, lng: -100.405032},
                {lat: 20.666347, lng: -100.401733},
                {lat: 20.664779, lng: -100.400450}
            ],
            }
    },
    methods:{
    },
    created(){
        var that=this;
        axios.get('/buses').then(function (response) {  
            var buses=JSON.stringify(response.data);
            buses=JSON.parse(buses)
            for(var bus in buses){
                var id=buses[bus].id;
                var stops=buses[bus].route.stopList;
                var set="Sin Salida";
                for(var l in stops){
                    if(stops[l].checked!=false){
                        set=stops[l].id;
                    }
                }
                // console.log('valor %s - %s',id,set);
                that.busesID.push({id:id,pos:set})
            }
            console.log(that.busesID);
        })
        .catch(function (error) {  
            console.log(error);
        })
    }
}
</script>
<style>

</style>
