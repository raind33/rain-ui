<template>
  <svg class="r-icon" @click="$emit('click', $event)">
    <use :xlink:href="`#r-${name}`"></use>
  </svg>
</template>
<script>
import '../../svg.js'
export default {
  name: 'RIcon',
  props: ['name']
}
</script>
<style lang="scss" scoped>
  .r-icon {width: 1em; height: 1em; }
</style>
