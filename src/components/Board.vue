<template>
    <div class="Board">
        <table>
            <tbody>
                <tr>
                    <td v-bind:key="square.id" v-for="square in squares.squares.slice(0,9)">
                        <Square v-bind:square="square"/>
                    </td>
                </tr>
                <tr>
                    <td v-bind:key="square.id" v-for="square in squares.squares.slice(9,18)">
                        <Square v-bind:square="square"/>
                    </td>
                </tr>
                <tr>
                    <td v-bind:key="square.id" v-for="square in squares.squares.slice(18,27)">
                        <Square v-bind:square="square"/>
                    </td>
                </tr>
                <tr>
                    <td v-bind:key="square.id" v-for="square in squares.squares.slice(27,36)">
                        <Square v-bind:square="square"/>
                    </td>
                </tr>
                <tr>
                    <td v-bind:key="square.id" v-for="square in squares.squares.slice(36,45)">
                        <Square v-bind:square="square"/>
                    </td>
                </tr>
                <tr>
                    <td v-bind:key="square.id" v-for="square in squares.squares.slice(45,54)">
                        <Square v-bind:square="square"/>
                    </td>
                </tr>                
                <tr>
                    <td v-bind:key="square.id" v-for="square in squares.squares.slice(54,63)">
                        <Square v-bind:square="square"/>
                    </td>
                </tr>                
                <tr>
                    <td v-bind:key="square.id" v-for="square in squares.squares.slice(63,72)">
                        <Square v-bind:square="square"/>
                    </td>
                </tr>               
                <tr>
                    <td v-bind:key="square.id" v-for="square in squares.squares.slice(72,81)">
                        <Square v-bind:square="square"/>
                    </td>
                </tr>    
            </tbody>
        </table>
        <button><h2>Check</h2></button>
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

<style>
table{
    display: inline;
}
</style>>