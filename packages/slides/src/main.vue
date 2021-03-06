<template>
  <div class="r-slides" @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div class="r-slides-window" ref="window">
      <div class="r-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="r-slides-dots">
      <span @click="onClickPrev" data-action="prev">
        <r-icon name="left"></r-icon>
      </span>
      <span v-for="n in childrenLength" :class="{active: selectedIndex === n-1}"
        :key="n" :data-index="n-1"
        @click="select(n-1)">
        {{n}}
      </span>
      <span @click="onClickNext" data-action="next">
        <r-icon name="right"></r-icon>
      </span>
    </div>
  </div>
</template>

<script>
import RIcon from '../../icon'
export default {
  name: 'RSlides',
  components: { RIcon },
  props: {
    selected: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    autoPlayDelay: {
      type: Number,
      default: 3000
    }
  },
  data () {
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined,
      timerId: undefined,
      startTouch: undefined
    }
  },
  mounted () {
    this.updateChildren()
    if (this.autoPlay) {
      this.playAutomatically()
    }
    this.childrenLength = this.items.length
  },
  updated () {
    this.updateChildren()
  },
  beforeDestroy () {
    this.pause()
  },
  computed: {
    selectedIndex () {
      const index = this.names.indexOf(this.selected)
      return index === -1 ? 0 : index
    },
    names () {
      return this.items.map(vm => vm.name)
    },
    items () {
      return this.$children.filter(vm => vm.$options.name === 'RSlidesItem')
    }
  },
  methods: {
    onMouseEnter () {
      this.pause()
    },
    onMouseLeave () {
      this.playAutomatically()
    },
    onTouchStart (e) {
      this.pause()
      if (e.touches.length > 1) { return }
      this.startTouch = e.touches[0]
    },
    onTouchEnd (e) {
      const endTouch = e.changedTouches[0]
      const { clientX: x1, clientY: y1 } = this.startTouch
      const { clientX: x2, clientY: y2 } = endTouch

      const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
      const deltaY = Math.abs(y2 - y1)
      const rate = distance / deltaY
      if (rate > 2) {
        if (x2 > x1) {
          this.select(this.selectedIndex - 1)
        } else {
          this.select(this.selectedIndex + 1)
        }
      }
      this.$nextTick(() => {
        this.playAutomatically()
      })
    },
    onClickPrev () {
      this.select(this.selectedIndex - 1)
    },
    onClickNext () {
      this.select(this.selectedIndex + 1)
    },
    playAutomatically () {
      if (this.timerId) { return }
      const run = () => {
        const index = this.names.indexOf(this.getSelected())
        const newIndex = index + 1
        this.select(newIndex) // 告诉外界选中 newIndex
        this.timerId = setTimeout(run, this.autoPlayDelay)
      }
      this.timerId = setTimeout(run, this.autoPlayDelay)
    },
    pause () {
      window.clearTimeout(this.timerId)
      this.timerId = undefined
    },
    select (newIndex) {
      this.lastSelectedIndex = this.selectedIndex
      if (newIndex === -1) { newIndex = this.names.length - 1 }
      if (newIndex === this.names.length) { newIndex = 0 }
      this.$emit('update:selected', this.names[newIndex])
    },
    getSelected () {
      const first = this.items[0]
      return this.selected || first.name
    },
    updateChildren () {
      const selected = this.getSelected()
      this.items.forEach((vm) => {
        let reverse = !(this.selectedIndex > this.lastSelectedIndex)
        if (this.timerId) {
          if (this.lastSelectedIndex === this.items.length - 1 && this.selectedIndex === 0) {
            reverse = false
          }
          if (this.lastSelectedIndex === 0 && this.selectedIndex === this.items.length - 1) {
            reverse = true
          }
        }
        vm.reverse = reverse
        this.$nextTick(() => {
          vm.selected = selected
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .r-slides {
    &-window {overflow: hidden;}
    &-wrapper {
      position: relative;
    }
    &-dots {
      padding: 8px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      > span {
        width: 20px;
        height: 20px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background: #ddd;
        border-radius: 50%;
        margin: 0 8px;
        font-size: 12px;
        &:hover {
          cursor: pointer;
        }
        &.active {
          background: black;
          color: white;
          &:hover {
            cursor: default;
          }
        }
      }
    }
  }
</style>
