<template>
  <div
    ref="parent"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @wheel="onMousewheel"
    class="r-scroll-wrapper"
  >
    <div
      ref="child"
      :style="{transform: `translateY(${contentY}px)`}"
      class="r-scroll"
    >
      <slot></slot>
    </div>
    <div class="r-scroll-bar-wrapper"   v-show="scrollBarVisible">
      <div
        @mousedown="onMousedownScrollBar"
        @selectstart="onselectStartBar"
        class="r-scroll-bar"
        ref="bar"
      >
        <div class="r-scroll-bar-inner"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { css } from '../../utils'
export default {
  name: 'RScroll',
  data () {
    return {
      scrollBarVisible: false,
      isScrolling: false,
      startPosition: undefined,
      endPosition: undefined,
      scrollBarY: 0,
      scrollBarX: 0,
      parentHight: undefined,
      childHeight: undefined,
      barHeight: undefined,
      contentY: 0
    }
  },
  mounted () {
    this.listenToDocument()
    const parent = this.$refs.parent
    const child = this.$refs.child
    const { height: childHeight } = child.getBoundingClientRect()
    const { height: parentHight } = parent.getBoundingClientRect()
    this.parentHight = parentHight
    this.childHeight = childHeight
    this.updateScrollBar()
  },
  computed: {
    maxScrollHeight () {
      return this.parentHight - this.barHeight
    }
  },
  beforeDestroy () {
    document.removeEventListener('mousemove', this.onMousemoveScrollBar)
    document.removeEventListener('mouseup', this.onMouseupScrollBar)
  },
  methods: {
    listenToDocument () {
      document.addEventListener('mousemove', this.onMousemoveScrollBar)
      document.addEventListener('mouseup', this.onMouseupScrollBar)
    },
    onMousewheel (e) {
      const maxHeight = this.getMaxContentY()

      if (e.deltaY > 20) {
        this.contentY -= 20 * 3
      } else if (e.deltaY < 20) {
        this.contentY -= -20 * 3
      } else {
        this.contentY -= e.deltaY * 3
      }
      if (this.contentY > 0) {
        this.contentY = 0
      } else if (this.contentY < -maxHeight) {
        this.contentY = -maxHeight
      } else {
        e.preventDefault()
      }
      // css(child, 'translateY', this.contentY)
      this.updateScrollBar()
    },
    getMaxContentY () {
      let {
        borderTopWidth,
        borderBottomWidth,
        paddingBottom,
        paddingTop
      } = getComputedStyle(this.$refs.parent)
      borderTopWidth = parseInt(borderTopWidth)
      borderBottomWidth = parseInt(borderBottomWidth)
      paddingBottom = parseInt(paddingBottom)
      paddingTop = parseInt(paddingTop)
      const maxHeight =
      this.childHeight -
      this.parentHight +
      borderTopWidth +
      borderBottomWidth +
      paddingBottom +
      paddingTop

      return maxHeight
    },
    onMousedownScrollBar (e) {
      this.isScrolling = true
      const { screenX, screenY } = e
      this.startPosition = {
        x: screenX,
        y: screenY
      }
    },
    onMouseupScrollBar () {
      this.isScrolling = false
    },
    onMousemoveScrollBar (e) {
      if (!this.isScrolling) return
      const { screenX, screenY } = e
      this.endPosition = {
        x: screenX,
        y: screenY
      }
      const delta = {
        x: this.endPosition.x - this.startPosition.x,
        y: this.endPosition.y - this.startPosition.y
      }
      this.scrollBarX = parseInt(this.scrollBarX) + delta.x
      this.scrollBarY = parseInt(this.scrollBarY) + delta.y
      if (this.scrollBarY < 0) {
        this.scrollBarY = 0
      } else if (this.scrollBarY > this.maxScrollHeight) {
        this.scrollBarY = this.maxScrollHeight
      }
      this.contentY = -(this.childHeight * this.scrollBarY / this.parentHight)
      this.startPosition = this.endPosition
      this.$refs.bar.style.transform = `translate(0px, ${this.scrollBarY}px)`
    },
    onselectStartBar (e) {
      e.preventDefault()
    },
    updateScrollBar () {
      const parentHight = this.parentHight
      const childHeight = this.childHeight
      this.barHeight = Math.pow(parentHight, 2) / childHeight
      const bar = this.$refs.bar
      css(bar, 'height', this.barHeight)
      this.scrollBarY = -(parentHight * this.contentY) / childHeight
      css(bar, 'translateY', this.scrollBarY)
    },
    onMouseEnter () {
      this.scrollBarVisible = true
    },
    onMouseLeave () {
      this.scrollBarVisible = false
      this.isScrolling = false
    }

  }
}
</script>

<style lang="scss" scoped>
.r-scroll {
  border: 1px solid green;
  transition: transform 1s ease;
  &-wrapper {
    border: 1px solid red;
    overflow: hidden;
    position: relative;
  }
  &-bar {
    position: absolute;
    top: -1px;
    left: 50%;
    height: 40px;
    width: 8px;
    margin-left: -4px;
    padding: 4px 0;
    &-wrapper {
      position: absolute;
      height: 100%;
      top: 0;
      right: 0;
      background: #fafafa;
      border-left: 1px solid #e8e7e8;
      opacity: 0.9;
      width: 14px;
    }
    &-inner {
      height: 100%;
      border-radius: 4px;
      background: #c2c2c2;
      &:hover {
        background: #7d7d7d;
      }
    }
  }
}
</style>
