import axios from "axios";

const Solution_API_URL = 'https://localhost:44313/Solution/'

class GenerateSudokuDataService {
    GenerateASolution(BoardViewModel) {
        return axios.post(`${Solution_API_URL}CreateSolution`, BoardViewModel)
    }
    ExecuteBasicCheck(BoardViewModel) {
        return axios.post(`${Solution_API_URL}BasicCheck`, BoardViewModel)
    }
}

export default new GenerateSudokuDataService()