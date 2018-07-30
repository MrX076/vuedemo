<template>
    <div>
        <p>{{ msg + num*3}}</p>
        <p>{{ msg.split('').reverse().join('') }}</p>
        <p>{{ remsg+"nihao" }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return{
            msg : "你是一个好人。",
            num : 15
        }
    },
    computed: {
        remsg : function(){
            return this.msg.split('').reverse().join('');
        }
    }
}
</script>
