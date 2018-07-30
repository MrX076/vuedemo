<template>
    <div>
        千米：<input type="text" v-model="kilometers">
        米：  <input type="text" v-model="meters">
    </div>
</template>
<script>
export default {
    name: "watch",
     data() {
         return{
             kilometers : 0,
               meters:0
         }
               
            },
    watch : {
        kilometers: function(val){
            this.kilometers = val;
            this.meters = val*1000;
        },
        meters : function(val){
            this.meters = val;
            this.kilometers = val/1000;
        }
    
    }
}
</script>
