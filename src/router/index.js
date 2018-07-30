import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Props from '../components/props'
import Von from '../components/v-on'
import Watch from '../components/watch'
import Style from '../components/style'
import Animate from '../components/animate'
import Computed from '../components/computed'

Vue.use(Router)

export default new Router({
  routes: [  
    {
      path: '/props',
      name: "Props",
      component: Props
    },
    {
      path: '/hello',
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: '/von',
      name: "Von",
      component: Von
    },
    { path: '/watch',name: "Watch", component: Watch },
    { path: '/style',name: "Style", component: Style },
    { path: '/animate',name: "Animate", component: Animate },
    { path: '/computed',name: "Computed", component: Computed },

    {
      path: '*',
      redirect: "/hellow"
    }
  ]
})
