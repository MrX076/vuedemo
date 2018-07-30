<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div>
    <router-link to="/hello"> <a>hello</a> </router-link>
    <router-link to="/props"> <a>props</a> </router-link>
    <router-link to="/von"> <a>v-on</a> </router-link>
    <router-link to="/watch"> <a>watch</a> </router-link>
    <router-link to="/style"> <a>style</a> </router-link>
    <router-link to="/animate"> <a>animate</a> </router-link>
    <router-link to="/computed"> <a>computed</a> </router-link>

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Animate from "animate"
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a{
  font-size: 18px;
  color: blue ;
  padding: 4px;
  text-decoration: none;
}
</style>
