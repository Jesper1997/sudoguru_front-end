<template>
    <div class="Board">
        <div  v-bind:key="square.id" v-for="square in squares.squares" >
            <Square v-bind:square="square"/>
        </div>
    </div>
</template>

<script>
import Square from '../components/Square.vue';
import axios from 'axios';
export default {
    name: "Board",
    components:{
        Square,
    },
    //props: ["squares"],
    data(){
        return {
            squares: []
        }
    },
      created(){
        axios.get('https://localhost:44390/GenerateSudoku/GetSudoku/9&2')
      .then(res => this.squares = res.data)
      .catch(err => console.log(err))
      console.log("FuckYou")
  }
}
</script>