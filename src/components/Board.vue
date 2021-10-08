<template>
    <div class="Board">
        <table>
            <tbody>
                <tr>
                    <td v-bind:key="square.id" v-for="square in BoardViewModel.squares.slice(0,9)">
                        <Square v-bind:square="square"/>
                    </td>
                </tr>
                <tr>
                    <td v-bind:key="square.id" v-for="square in BoardViewModel.squares.slice(9,18)">
                        <Square v-bind:square="square"/>
                    </td>
                </tr>
                <tr>
                    <td v-bind:key="square.id" v-for="square in BoardViewModel.squares.slice(18,27)">
                        <Square v-bind:square="square"/>
                    </td>
                </tr>
                <tr>
                    <td v-bind:key="square.id" v-for="square in BoardViewModel.squares.slice(27,36)">
                        <Square v-bind:square="square"/>
                    </td>
                </tr>
                <tr>
                    <td v-bind:key="square.id" v-for="square in BoardViewModel.squares.slice(36,45)">
                        <Square v-bind:square="square"/>
                    </td>
                </tr>
                <tr>
                    <td v-bind:key="square.id" v-for="square in BoardViewModel.squares.slice(45,54)">
                        <Square v-bind:square="square"/>
                    </td>
                </tr>                
                <tr>
                    <td v-bind:key="square.id" v-for="square in BoardViewModel.squares.slice(54,63)">
                        <Square v-bind:square="square"/>
                    </td>
                </tr>                
                <tr>
                    <td v-bind:key="square.id" v-for="square in BoardViewModel.squares.slice(63,72)">
                        <Square v-bind:square="square"/>
                    </td>
                </tr>               
                <tr>
                    <td v-bind:key="square.id" v-for="square in BoardViewModel.squares.slice(72,81)">
                        <Square v-bind:square="square"/>
                    </td>
                </tr>    
            </tbody>
        </table>
        <button v-on:click="ExcuteCheck()"><h2>Check</h2></button>
    </div>
</template>

<script>
NoSolution: Boolean = false;
import Square from '../components/Square.vue';
import axios from 'axios';
export default {
    name: "Board",
    components:{
        Square,
    },
    data(){
        return {            
            BoardViewModel: [],
            Solution: [],
            BasicCheckResults:[]
        }
    },
     async created(){
        await axios.get('https://localhost:44390/GenerateSudoku/GetSudoku/9&2')
      .then(res => this.BoardViewModel = res.data)
      .catch(err => console.log(err))
       await axios({
           method: 'POST',
           url:'https://localhost:44313/Sudoku/CreateSolution',
           data: this.BoardViewModel,
           headers: {
               'content-type': 'application/json',
           },
        })
      .then(res => this.Solution = res.data)
      .catch(err => console.log(err))
  },
      methods:{
          async ExcuteCheck()
          {
              console.log("begin check"+ this.Solution.length)
              if(Array.isArray(this.Solution)|| this.NoSolution)
              {
                  this.NoSolution = true;
                  console.log("Nothing in Solution");
                  await axios({
                      method: 'POST',
                      url:'https://localhost:44313/Sudoku/BasicCheck',
                      data: this.BoardViewModel,
                      headers:{
                          'content-type': 'application/json',
                        },
                    })
                  .then(res => this.Solution = res.data)
                  .catch(err => console.log(err))
                  if(Array.isArray(this.BasicCheckResults))
                  {
                      for(let x = 0; x < this.BasicCheckResults.length; x++)
                      {
                          this.BoardViewModel[x].correct = this.BasicCheckResults[x].correct
                      }
                  }
              }
              else{
                  console.log("There somthing in solution")
                  for(let x = 0; x < this.BoardViewModel.squares.length; x++)
                  {
                      console.log(x)
                      if(this.BoardViewModel.squares[x] != this.Solution.sudokuSquares[x].value && this.BoardViewModel.squares.value != 0)
                      {
                          this.BoardViewModel.squares[x].correct = false;
                      }
                  }
                  console.log("end check")
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
}
</style>>