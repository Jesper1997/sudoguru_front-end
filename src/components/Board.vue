<template>
    <div class="Board">
        <div class="sidebar">
            <b-sidebar id="sidebar-right" title="sidebar" right shadow>
                <div class="px-3 py-2">
                    <b-container class="bv">
                        <b-row v-for="number in allnumbers" :key=number v-on:click="SetPickedNumber(number)">
                            <b-button>{{number}}</b-button>

                        </b-row>
                    </b-container>
                    <p>help me</p>
                </div>
            </b-sidebar>
        </div>
        <table>
            <tbody>
                <tr>
                    <td v-bind:key="square.id" v-for="square in BoardViewModel.squares.slice(0,9)">
                        <Square v-bind:square="square" v-bind:value="pickednumber"/>
                    </td>
                </tr>
                <tr>
                    <td v-bind:key="square.id" v-for="square in BoardViewModel.squares.slice(9,18)">
                        <Square v-bind:square="square" v-bind:value="pickednumber"/>
                    </td>
                </tr>
                <tr>
                    <td v-bind:key="square.id" v-for="square in BoardViewModel.squares.slice(18,27)">
                        <Square v-bind:square="square" v-bind:value="pickednumber"/>
                    </td>
                </tr>
                <tr>
                    <td v-bind:key="square.id" v-for="square in BoardViewModel.squares.slice(27,36)">
                        <Square v-bind:square="square" v-bind:value="pickednumber"/>
                    </td>
                </tr>
                <tr>
                    <td v-bind:key="square.id" v-for="square in BoardViewModel.squares.slice(36,45)">
                        <Square v-bind:square="square" v-bind:value="pickednumber"/>
                    </td>
                </tr>
                <tr>
                    <td v-bind:key="square.id" v-for="square in BoardViewModel.squares.slice(45,54)">
                        <Square v-bind:square="square" v-bind:value="pickednumber"/>
                    </td>
                </tr>                
                <tr>
                    <td v-bind:key="square.id" v-for="square in BoardViewModel.squares.slice(54,63)">
                        <Square v-bind:square="square" v-bind:value="pickednumber"/>
                    </td>
                </tr>                
                <tr>
                    <td v-bind:key="square.id" v-for="square in BoardViewModel.squares.slice(63,72)">
                        <Square v-bind:square="square" v-bind:value="pickednumber"/>
                    </td>
                </tr>               
                <tr>
                    <td v-bind:key="square.id" v-for="square in BoardViewModel.squares.slice(72,81)">
                        <Square v-bind:square="square" v-bind:value="pickednumber"/>
                    </td>
                </tr>    
            </tbody>
        </table>
        <b-button v-b-toggle.sidebar-right title="sidebar"><p>Select number</p></b-button>
        <div class="checkbutton">
            <button v-on:click="ExcuteCheck()"><h2>Check</h2></button>
        </div>
    </div>
</template>

<script>
import Square from '../components/Square.vue';
import axios from 'axios';
import GenerateSudokuDataservice from '../Service/GenerateSudokuDataServices'
import SolutionDataService from '../Service/SolutionDataService'
export default {
    name: "Board",
    components:{
        Square,
    },
    data(){
        return {       
            BoardViewModel: [],
            Solution: [],
            BasicCheckResults:[],
            BaseUrl: 'https://localhost:44313/Sudoku/',
            allnumbers :[1,2,3,4,5,6,7,8,9],
            pickednumber: 0,
        }
    },
    props:["Difficulty"],
     async created(){
        await GenerateSudokuDataservice.GenerateNewSudoku(this.Difficulty)
      .then(res => this.BoardViewModel = res.data)
      .catch(err => console.log(err))
       /*await axios({
           method: 'POST',
           url:this.BaseUrl+'CreateSolution',
           data: this.BoardViewModel,
           headers: {
               'content-type': 'application/json',
           },
        })*/
        await SolutionDataService.GenerateASolution(this.BoardViewModel)
      .then(res => this.Solution = res.data)
      .catch(err => console.log(err))
  },
      methods:{
          SetPickedNumber(number)
          {
              this.pickednumber = number
              console.log(number)
          },

          async ExcuteCheck()
          {
              if(Array.isArray(this.Solution))
              {
                  this.NoSolution = true;
                  console.log("Nothing in Solution");
                  await axios({
                      method: 'POST',
                      url:this.BaseUrl+'BasicCheck',
                      data: this.BoardViewModel,
                      headers:{
                          'content-type': 'application/json',
                        },
                    })
                  .then(res => this.BasicCheckResults = res.data)
                  .catch(err => console.log(err))
                  if(Array.isArray(this.BasicCheckResults))
                  {
                      for(let x = 0; x < this.BasicCheckResults.length; x++)
                      {
                          this.BoardViewModel[x].correct = this.BasicCheckResults[x].correct
                          console
                      }
                  }
              }
              else{
                  for(let x = 0; x < this.BoardViewModel.squares.length; x++)
                  {
                      if(this.BoardViewModel.squares[x].value != this.Solution.sudokuSquares[x].value && this.BoardViewModel.squares[x].value != 0)
                      {
                          console.log()
                          this.BoardViewModel.squares[x].correct = false;
                      }
                  }
              }
              console.log("update")
              this.$forceUpdate();
          }
      }
}
</script>

<style>
table{
    display: inline;
    padding: 10px;
}
.check_button{
    display: inline;
    padding: 10px;
    width: 50px;
}
</style>