<template>
  <div class="Board">
    <div class="RightSidebar">
      <b-sidebar id="sidebar" title="Options" shadow>
        <br />
        <b-container>
          <b-row>
            <b-col>
              <b-button variant="success" v-on:click="SaveSudoku()"
                ><b-icon icon="upload" /> save</b-button
              >
            </b-col>
            <b-col>
              <b-button variant="outline-success" v-on:click="LoadSudoku()"
                ><b-icon icon="download" />Load</b-button
              >
            </b-col>
          </b-row>
        </b-container>
        <div v-if="errorMessage != null">
          <p class="text-danger">{{ this.errorMessage }}</p>
        </div>
      </b-sidebar>
    </div>
    <div class="leftsidebar">
      <b-sidebar id="sidebar-right" title="Pick a number" right shadow>
        <div class="px-3 py-2">
          <b-container class="bv">
            <b-row
              v-for="number in allnumbers"
              :key="number"
              v-on:click="SetPickedNumber(number)"
            >
              <b-button pill v-if="number % 2 == 0" variant="outline-success">{{
                number
              }}</b-button>
              <b-button pill v-else variant="success">{{ number }}</b-button>
            </b-row>
            <br />
            <div class="checkbutton">
              <b-button
                pill
                variant="outline-success"
                v-on:click="ExcuteCheck()"
                ><h2>Check</h2></b-button
              >
            </div>
          </b-container>
        </div>
      </b-sidebar>
    </div>
    <b-container>
      <b-row>
        <b-col>
          <table>
            <tbody>
              <tr>
                <td
                  v-bind:key="square.id"
                  v-for="square in BoardViewModel.squares.slice(0, 9)"
                >
                  <Square v-bind:square="square" v-bind:value="pickednumber" />
                </td>
              </tr>
              <tr>
                <td
                  v-bind:key="square.id"
                  v-for="square in BoardViewModel.squares.slice(9, 18)"
                >
                  <Square v-bind:square="square" v-bind:value="pickednumber" />
                </td>
              </tr>
              <tr>
                <td
                  v-bind:key="square.id"
                  v-for="square in BoardViewModel.squares.slice(18, 27)"
                >
                  <Square v-bind:square="square" v-bind:value="pickednumber" />
                </td>
              </tr>
              <tr>
                <td
                  v-bind:key="square.id"
                  v-for="square in BoardViewModel.squares.slice(27, 36)"
                >
                  <Square v-bind:square="square" v-bind:value="pickednumber" />
                </td>
              </tr>
              <tr>
                <td
                  v-bind:key="square.id"
                  v-for="square in BoardViewModel.squares.slice(36, 45)"
                >
                  <Square v-bind:square="square" v-bind:value="pickednumber" />
                </td>
              </tr>
              <tr>
                <td
                  v-bind:key="square.id"
                  v-for="square in BoardViewModel.squares.slice(45, 54)"
                >
                  <Square v-bind:square="square" v-bind:value="pickednumber" />
                </td>
              </tr>
              <tr>
                <td
                  v-bind:key="square.id"
                  v-for="square in BoardViewModel.squares.slice(54, 63)"
                >
                  <Square v-bind:square="square" v-bind:value="pickednumber" />
                </td>
              </tr>
              <tr>
                <td
                  v-bind:key="square.id"
                  v-for="square in BoardViewModel.squares.slice(63, 72)"
                >
                  <Square v-bind:square="square" v-bind:value="pickednumber" />
                </td>
              </tr>
              <tr>
                <td
                  v-bind:key="square.id"
                  v-for="square in BoardViewModel.squares.slice(72, 81)"
                >
                  <Square v-bind:square="square" v-bind:value="pickednumber" />
                </td>
              </tr>
            </tbody>
          </table>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button v-b-toggle.sidebar title="leftsidebar" variant="success"
            ><b-icon icon="gear-fill" aria-hidden="true" /> options</b-button
          >
          <b-button
            v-b-toggle.sidebar-right
            title="rightsidebar"
            variant="outline-success"
            ><b-icon icon="sort-numeric-down" aria-hidden="true" />Select
            number</b-button
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Square from "../components/Square.vue";
import GenerateSudokuDataservice from "../Service/GenerateSudokuDataServices";
import SolutionDataService from "../Service/SolutionDataService";
import SaveLoadDataService from "../Service/SaveLoadDataService";
export default {
  name: "Board",
  components: {
    Square,
  },
  data() {
    return {
      BoardViewModel: [],
      Solution: [],
      BasicCheckResults: [],
      allnumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      pickednumber: 0,
      errorMessage: null,
    };
  },
  props: ["Difficulty"],
  async created() {
    await GenerateSudokuDataservice.GenerateNewSudoku(this.Difficulty)
      .then((res) => (this.BoardViewModel = res.data))
      .catch((err) => console.log(err));

    await SolutionDataService.GenerateASolution(this.BoardViewModel)
      .then((res) => (this.Solution = res.data))
      .catch((err) => console.log(err));
  },
  methods: {
    SetPickedNumber(number) {
      this.pickednumber = number;
      console.log(number);
    },

    async ExcuteCheck() {
      if (Array.isArray(this.Solution)) {
        this.NoSolution = true;
        console.log("Nothing in Solution");
        await SolutionDataService.ExecuteBasicCheck(this.BoardViewModel)
          .then((res) => (this.BasicCheckResults = res.data))
          .catch((err) => console.log(err));
        if (Array.isArray(this.BasicCheckResults)) {
          for (let x = 0; x < this.BasicCheckResults.length; x++) {
            this.BoardViewModel[x].correct = this.BasicCheckResults[x].correct;
            console;
          }
        }
      } else {
        for (let x = 0; x < this.BoardViewModel.squares.length; x++) {
          if (
            this.BoardViewModel.squares[x].value !=
              this.Solution.sudokuSquares[x].value &&
            this.BoardViewModel.squares[x].value != 0
          ) {
            console.log();
            this.BoardViewModel.squares[x].correct = false;
          }
        }
      }
      console.log("update");
      this.$forceUpdate();
    },

    async SaveSudoku() {
      console.log("save");
      SaveLoadDataService.SaveSudoku(this.BoardViewModel)
        .then()
        .catch(
          (this.errorMessage =
            "There went something wrong whilest saving the board, please contact tech support")
        );
    },

    async LoadSudoku() {
      SaveLoadDataService.LoadSudoku(1)
        .then((res) => (this.BoardViewModel = res.data))
        .catch(
          (this.errorMessage =
            "There went something worng whilest loading the board, please contact tech support")
        );
    },
  },
};
</script>

<style>
table {
  display: inline;
  padding: 10px;
}
.check_button {
  display: inline;
  padding: 10px;
  width: 50px;
}
</style>