<template>
  <div class="home">
    <div class="menu_bar">
      <div class="menu">
        <input type="radio" id="one" value= 1 v-model="picked">
        <label for="one"> One </label>
        <input type="radio" id="two" value= 2 v-model="picked">
        <label for="two"> Two </label>
        <input type="radio" id="three" value= 3 v-model="picked">
        <label for="three"> Three </label>
        <button v-on:click="createboard = !createboard"> Create new board </button>
      </div>
    </div>
    <br>
    <div class="board" v-if="createboard">
      <Board v-bind:Difficulty="picked"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue';
//import axios from 'axios';
import Board from '../components/Board.vue';

export default {
  name: 'Home',
  components: {
    //HelloWorld,
    Board
  },

  data(){
    return {
      board: [],
      picked:1,
      createboard: false
    }
  },
  methods: {

  },
}
</script>

<style scoped>
.menu{
  background-color:#00B118;
  padding: 10px;
  max-width: 50%;
  display: inline;
  border-width: 10px;
  border-style: dashed;
  border-color: #00FF22;

}
</style>
