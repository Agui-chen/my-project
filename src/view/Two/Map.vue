<template>
  <div>
    <baidu-map
      class="map"
      :center="{lng: 120.62 , lat: 31.32}"
      :zoom="14"
      :scroll-wheel-zoom="true"
    >
    </baidu-map>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style scoped>
.map {
  width: 100%;
  height: 695px;
}
</style>