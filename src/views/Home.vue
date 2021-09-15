<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Board/>
    <!--<Board v-bind:Board="squares"/>
    {{board}}-->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios';
import Board from '../components/Board.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Board
  },

  data(){
    return {
      board: []
    }
  },
  methods: {
    GetSudoku(){
      axios.get('http://localhost:60651/GenerateSudoku/GetSudoku/9&2')
      .then(res => this.board = res.data)
      .catch(err => console.log(err))
      console.log(123)
    }

  },
  /*created(){
    axios.get('https://localhost:44390/GenerateSudoku/GetSudoku/9&2')
      .then(res => this.board = res.data)
      .catch(err => console.log(err))
      console.log(123)
  }*/
}
</script>
