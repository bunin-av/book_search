import axios from "axios";

export const searchAPI = {
    getBooks(value: string, currentPage: number) {
        return axios
          .get(`http://openlibrary.org/search.json?q=${value}&page=${currentPage}&limit=5`)
    }
}


