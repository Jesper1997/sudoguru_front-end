import axios from "axios";

const SaveLoad_API_URL = "https://localhost:44313/SaveLoadSudoku/"

class SaveLoadDataService{

    SaveSudoku(boardViewModel)
    {
        return axios.post(`${SaveLoad_API_URL}save`, boardViewModel);
    }

    LoadSudoku(id)
    {
        return axios.get(`${SaveLoad_API_URL}load/${id}`)
    }

}

export default new SaveLoadDataService()