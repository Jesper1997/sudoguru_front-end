import axios from "axios";

const GenerateSudoku_API_URL ='https://localhost:44390/GenerateSudoku/GetSudoku/9&'

class GenerateSudokuDataService{
    GenerateNewSudoku(difficulty){
        return axios.get(`${GenerateSudoku_API_URL}${difficulty}`)
    }
}

export default new GenerateSudokuDataService()