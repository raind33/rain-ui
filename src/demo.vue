<template>
  <div>
    <r-nav :selected.sync="selected" vertical>
      <r-nav-item name="home">首页</r-nav-item>
      <r-sub-nav name="about">
        <template slot="title">关于</template>
        <r-nav-item name="culture">企业文化</r-nav-item>
        <r-nav-item name="developers">开发团队</r-nav-item>
        <r-sub-nav name="contacts">
          <template slot="title">联系方式</template>
          <r-nav-item name="wechat">微信</r-nav-item>
          <r-nav-item name="qq">QQ</r-nav-item>
          <r-sub-nav name="phone">
            <template slot="title">手机</template>
            <r-nav-item name="cm">移动</r-nav-item>
            <r-nav-item name="cu">联通</r-nav-item>
            <r-nav-item name="cn">电信</r-nav-item>
          </r-sub-nav>
        </r-sub-nav>

      </r-sub-nav>
      <r-nav-item name="hire">招聘</r-nav-item>
    </r-nav>
    <p>你好，我是中文</p>
  </div>
</template>
<script>
import RNav from './nav/nav.vue'
import RNavItem from './nav/nav-item.vue'
import RSubNav from './nav/sub-nav.vue'

export default {
  name: 'demo',
  components: { RNav, RNavItem, RSubNav },
  data () {
    return {
      selected: 'home'
    }
  }
}
</script>
<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
</style>
