<template>
  <div>
    <canvas id="canvas"></canvas>
    <div class="avatar">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      >
      <span>Rain UI</span>
    </div>
    <div class="intro">
      <h1>Rain UI</h1>
      <p>一套基于vue2.x的UI组件库</p>
      <ul>
        <li>
          <NavLink
            style="color:white;"
            :item="actionLink"
          />
        </li>
        <li>
          <svg class="r-icon" fill="white">
            <use xlink:href="#r-github-fill"></use>
          </svg>
          <NavLink
            style="color:white;"
            :item="githubLink"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import Particles from '../util/particles'
export default {
  name: 'Home',

  components: { NavLink },

  computed: {
    data() {
      return this.$page.frontmatter
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    },
    githubLink () {
      return {
        link: 'https://github.com/raind33/rain-ui',
        text: 'GitHub'
      }
    }
  },
  mounted() {
    this.initCanvas()
  },
  methods: {
    initCanvas() {
      new Particles()
    }
  }
}
</script>

<style lang="scss">
#canvas {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
.avatar {
  position: absolute;
  left: 100px;
  top: 20px;
  display: flex;
  align-items: center;
  img {
    width: 50px;

    border-radius: 50%;
    display: block;
  }
  span {
    margin-left: 10px;
    color:white;
  }
}
.intro {
  position: absolute;
  color: white;
  left: 100px;
  top: 20%;
  h1 {
    font-size: 30px;
  }
  ul{
    display: flex;
    align-items: center;
    padding: 0;
    svg {
      width: 14px;
      height: 14px;
      margin-right: 5px;
    }
    li {
      display: flex;
      width: 120px;
      height: 35px;
      background: #409eff;
      cursor: pointer;
      border-radius: 20px;
      margin-right: 10px;
      justify-content: center;
      align-items: center;
      &:hover{
        background: #66b1ff;
        border-color: #66b1ff;
      }
    }
  }
}

</style>
