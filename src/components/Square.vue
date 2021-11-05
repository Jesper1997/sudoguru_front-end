<template>
    <div b-col lg="4" class="pub-2">
        <b-button v-on:click="AddValue" v-bind:class="{wrongbutton: !this.square.correct,button: Darkercolor, otherbutton: !Darkercolor}"><h3>{{square.value}}</h3></b-button>
    </div>
</template>

<script>
export default {
    data(){
        
        return{
            Darkercolor: false
        }
    },
    name : "Square",
    props:["square","value"],


    created(){
        if((this.square.x <= 2 || this.square.x >= 6)&&(this.square.y <= 2 || this.square.y >= 6)||(this.square.x > 2 && this.square.x < 6 && this.square.y > 2 && this.square.y < 6))
        {
            this.Darkercolor = true;
        }
        else{
            this.Darkercolor = false;
        }
    },

    methods:{
        AddValue(){
            console.log(this.value)
            this.square.value = this.value
            /*console.log("addvalue");
            if(this.square.value == 9)
            {
                this.square.value = 0
            }
            else{
                this.square.value += 1;
            }*/  
        },

    }
}
</script>

<style scoped>
.button{
    background-color: #00B118 /*rgb(0, 177, 24)*/;
}
.otherbutton{
    background-color: #00FF22 /*rgb(0, 255, 34)*/;
}
.wrongbutton{
    color: white;
    background-color:red;
    
}

button{
    padding: 6px;
    min-width: 50px;    
}
button:hover{
    transform: scale(1.10);
}
</style>