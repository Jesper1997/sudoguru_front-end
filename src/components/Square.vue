<template>
    <div>
        <button class="wrongbutton" key="allbuttons" v-if="square.corret == false" v-on:click="AddValue()"> <h3>{{square.value}}</h3> </button>
        <button class="button" key="allbuttons" v-else-if="(square.x <= 2 || square.x >= 6)&&(square.y <= 2 || square.y >= 6)||(square.x > 2 && square.x < 6 && square.y > 2 &&square.y < 6)"
         v-on:click="AddValue()"><h3>{{square.value}}</h3></button>
         <button class="otherbutton" key="allbuttons" v-else v-on:click="AddValue()"> <h3>{{square.value}}</h3> </button>
    </div>
</template>

<script>
export default {
    name : "Square",
    props:["square"],

    methods:{
        AddValue(){
            if(this.square.value == 9)
            {
                this.square.value = 0
            }
            else{
                this.square.value += 1;
            }
            
        },

    }
}
</script>

<style scoped>
.button{
    background-color: rgb(0, 177, 24);
}
.otherbutton{
    background-color: rgb(0, 255, 34);
}
.wrongbutton{
    background-color: red;
}

button{
    padding: 6px;
    min-width: 60px;    
}
button:hover{
    transform: scale(1.10);
}
</style>