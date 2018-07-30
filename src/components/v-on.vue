<template>
    <div>
        <button @click="say('hi')">Say hi</button>
        <button v-on:click="say('what')">Say what</button>
    </div>
</template>
<script>
export default {
    name: "von",
    methods:{
         say: function (message) {
            alert(message)
        }
    }
}
</script>

