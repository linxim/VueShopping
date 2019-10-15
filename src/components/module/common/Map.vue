<template>
  <baidu-map :center="{lng:104.06,lat:30.67}" :zoom="57" :scroll-wheel-zoom="true">
   <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-overview-map>
   <bm-map-type :map-types="['BMAP_NORMAL_MAP','BMAP_HYBRID_MAP']"></bm-map-type>

  </baidu-map>

</template>
<script>
export default {
  data () {
    return {

    
    }
  },
  methods: {
    update (e) {
      this.points = e.target.cornerPoints
    }
  }
}
</script>