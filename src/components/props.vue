<template>
    <div id="prop">
	<div>
	  <input v-model="parentMsg">
	  <br>
	  <child v-bind:message="parentMsg"></child>
	</div>
</div>
</template>
<script>
import Vue from "vue"
export default {
  name: "Props",
  data (){
      return{
          parentMsg: "你好牛逼",
      }
  },
}
// 注册
Vue.component('child', {
  // 声明 props
  props: ['message'],
  // 同样也可以在 vm 实例中像 “this.message” 这样使用
  template: '<span>{{ message }}</span>'
})


</script>
