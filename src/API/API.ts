import axios from "axios";

export const searchAPI = {
    getBooks(value: string, currentPage: number) {
        return axios
          .get(`https://openlibrary.org/search.json?q=${value}&page=${currentPage}&limit=5`)
    }
}


