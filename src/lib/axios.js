import axios from "axios";

export const axiosInstance=axios.create({
  baseURL:"https://world.openfoodfacts.org"
})