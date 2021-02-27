<template>
  <div >
    <r-input v-model="value"></r-input>
    <div>
      value: {{value}}
    </div>
  </div>
</template>
<script>
  import RInput from '../../../packages/input/'

  export default {
    components: {RInput},
    data () {
      return {
        value: 'hahela'
      }
    }
  }
</script>
