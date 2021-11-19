<template>
  <div class="home">
    <b-navbar class="d-flex" toggleable="lg"  variant="success">
      <div class="mx-auto">
        <b-row>
          <b-col>
            <b-navbar-brand>
              <h2>Choose Difficulty:</h2>
            </b-navbar-brand>
          </b-col>
          <b-col>
            <b-navbar-brand>
              <b-button variant="light" v-on:click="SetDifficulty(1)"
                >Easy</b-button
              >
              <b-button variant="secondary" v-on:click="SetDifficulty(2)"
                >Medium</b-button
              >
              <b-button variant="dark" v-on:click="SetDifficulty(3)"
                >Hard</b-button
              >
            </b-navbar-brand>
          </b-col>
          <b-col>
            <b-navbar-brand>
              <h3>{{ Chosen }}</h3>
            </b-navbar-brand>
          </b-col>
          <b-col>
            <b-button
              pill
              variant="outline-light"
              v-on:click="createboard = !createboard"
            >
              Create new board
            </b-button>
          </b-col>
        </b-row>
      </div>
    </b-navbar>
    <br />
    <div class="board" v-if="createboard">
      <Board v-bind:Difficulty="picked" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Board from "../components/Board.vue";

export default {
  name: "Home",
  components: {
    //HelloWorld,
    Board,
  },

  data() {
    return {
      board: [],
      picked: 1,
      createboard: false,
      Difficulties: ["easy", "medium", "hard"],
      Chosen: "easy",
    };
  },
  methods: {
    SetDifficulty(Difficulty) {
      this.picked = Difficulty;
      this.Chosen = this.Difficulties[Difficulty - 1];
    },
  },
};
</script>

<style scoped>
.menu {
  background-color: #00b118;
  padding: 10px;
  max-width: 50%;
  display: inline;
  border-width: 10px;
  border-style: dashed;
  border-color: #00ff22;
}
</style>
