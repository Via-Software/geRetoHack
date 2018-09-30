<template>
    <div>
        <GmapMap
        :center="{lat:20.658283, lng:-100.349658}"
        :zoom="14"
        map-type-id="terrain"
        style="width: 500px; height: 300px"
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
export default {
    name:'Trazar',

}
</script>

<style>

</style>
