<template>
     <div class="static"
        v-bind:class="{ active: isActive, 'text-danger': hasError }" @click="move()">
    </div>
</template>
<style  scoped>
    .active {
	width: 100px;
	height: 100px;
	background: green;
    border-radius: 50px;
    }
    .text-danger {
        background: red;
        position: relative;
        top: 30px;
    }
</style>
<script>
export default {
    data() {
        return{
            isActive : true,
            hasError : false,
        }
    },
    methods:{
        move: function(){
           this.hasError = !this.hasError
        }
    }
}
</script>

