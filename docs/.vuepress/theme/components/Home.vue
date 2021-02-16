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
            :item="actionLink"
          />
        </li>
        <li>
          <svg class="r-icon" fill="white">
            <use xlink:href="#r-github-fill"></use>
          </svg>
          <NavLink
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

<style lang="stylus">
#canvas {
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  z-index -1
}
.avatar
  position absolute
  left 100px
  top 20px
  display flex
  align-items center
  img {
    width 50px

    border-radius 50%
    display: block;
  }
  span {
    margin-left: 10px;
    color:white;
  }
.intro
  position: absolute;
  color white;
  left: 100px;
  top: 20%;
  h1 {
    font-size 30px
  }
  ul{
    display flex
    align-items center
    padding 0
    svg {
      width 14px
      height 14px
      margin-right: 5px;
    }
    li {
      display flex
      width 120px
      height 35px
      background #409eff
      cursor: pointer;
      border-radius 20px
      margin-right 10px
      justify-content center
      align-items center
      &:hover{
        background: #66b1ff;
        border-color: #66b1ff;
      }
    }
  }
.home {
  padding: $navbarHeight 2rem 0;
  max-width: $homePageWidth;
  margin: 0px auto;
  display: block;

  .hero {
    text-align: center;


    h1 {
      font-size: 3rem;
    }

    h1, .description, .action {
      margin: 1.8rem auto;
    }

    .description {
      max-width: 35rem;
      font-size: 1.6rem;
      line-height: 1.3;
      color: lighten($textColor, 40%);
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: $accentColor;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid darken($accentColor, 10%);

      &:hover {
        background-color: lighten($accentColor, 10%);
      }
    }
  }

  .features {
    border-top: 1px solid $borderColor;
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: lighten($textColor, 10%);
    }

    p {
      color: lighten($textColor, 25%);
    }
  }

  .footer {
    padding: 2.5rem;
    border-top: 1px solid $borderColor;
    text-align: center;
    color: lighten($textColor, 25%);
  }
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
