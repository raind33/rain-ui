<template>
  <transition name="slide">
    <div
      class="r-aside"
      v-if="visible"
    >
      <slot></slot>
      <r-button v-if="closeVisible" @click="visible=false">close</r-button>
    </div>
  </transition>
</template>
<script>
import Button from '../../button'
export default {
  name: 'RAside',
  props: {
    closeVisible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    RButton: Button
  },
  data () {
    return {
      visible: true
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.r-aside {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
.slide-enter,
.slide-leave-to {
  margin-left: -200px;
}
</style>
