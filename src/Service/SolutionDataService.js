import axios from "axios";

const GenerateSudoku_API_URL ='https://localhost:44313/Sudoku/CreateSolution'

class GenerateSudokuDataService{
    GenerateASolution(BoardViewModel){
        return axios.get(`${GenerateSudoku_API_URL}`,BoardViewModel)
    }
}

export default new GenerateSudokuDataService()