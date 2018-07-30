<template>
    <div>
        <button @click="change">touch me ！</button>    
    <div class="static" v-bind:class="{ 'active': isActive}"></div>
            
    </div>
</template>
<style scoped>
    .static{
        margin-top: 50px;
        width:100px;
        height:100px;
        background:rgb(0, 255, 242);
    }
    .active
        {        
            position:relative;
            animation:mymove 5s infinite;
            -webkit-animation:mymove 5s infinite; /*Safari and Chrome*/
        }

    @keyframes mymove
        {
            0% {left:0px;transform: rotateZ(0deg)}
            50% {left:200px; transform: rotateZ(90deg)}
            100% {left:0px;transform: rotateZ(0deg)}
        }

    @-webkit-keyframes mymove /*Safari and Chrome*/
        {
             0% {left:0px;transform: rotateZ(0deg)}
            50% {left:200px;transform: rotateZ(90deg)}
            100% {left:0px;transform: rotateZ(0deg)}
        }
</style>

<script>
import animate from "animate";
export default {
    data(){
        return{
            isActive:true,
        }
    },
    methods:{
        change(){
            this.isActive = !this.isActive;
        }
    }
}
</script>
