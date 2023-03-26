import axios from "axios";

const BASE_URL = `https://youtube-v31.p.rapidapi.com`;
export async function getData(url: string) {
  const options = {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_APP_RAPID_API_HOST,
    },
  };

  const endPoint = `${BASE_URL}${url}`;

  console.log(endPoint);

  const response = await axios.get(endPoint, options);
  const data = await response.data;

  return data;
}
