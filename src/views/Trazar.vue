<template>
    <div>
        <GmapMap
        :center="{lat:20.658283, lng:-100.349658}"
        :zoom="14"
        map-type-id="terrain"
        style="width: 100%; height: 500px"
        >
        <!-- <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
        /> -->
        <google-marker :position="position" :clickable="true"></google-marker>
        </GmapMap>
    </div>
</template>

<script>
export default {
    name:'Trazar',
    data(){
        return{
            center: {
                lat:20.658283, 
                lng:-100.349658
            },
            markers:[{
                position: {
                    lat:20.658283, 
                    lng:-100.349658
                }
            }
            ]
        }
    }
}
</script>

<style>

</style>
