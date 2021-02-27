<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'RLayout',
  data () {
    return {
      layoutClass: {
        'is-vertical': true
      }
    }
  },
  mounted () {
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'RAside') {
        this.layoutClass['is-vertical'] = false
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .layout {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    &.is-vertical {
      flex-direction: column;
    }
  }
</style>
