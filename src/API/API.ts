import axios from "axios";
import {GetResponse} from "../store/reducer";

export const searchAPI = {
    getBooks(value: string, currentPage: number) {
        return axios
          .get<GetResponse>(`https://openlibrary.org/search.json?q=${value}&page=${currentPage}&limit=5`)
    }
}


