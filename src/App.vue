<template>
 <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
    <icon></icon>
    <svg-icon></svg-icon>
  </div>
</template>

<style>
 @import "./assets/css/base.css";

#app {
  position: relative;
}


</style>
<script>
import MainTabBar from './components/content/mainTabbar/MainTabBar'
export default {
  name:'App',
  components:{
    MainTabBar
  }
}
</script>