import axios from "axios";

const BASE_URL = `https://youtube-v31.p.rapidapi.com`;
export async function getData(url: string) {
  const options = {
    headers: {
      "X-RapidAPI-Key": "0e7881138amsh8a0036d702a66a8p1b519bjsn6b2465917ddb",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  const endPoint = `${BASE_URL}${url}`;

  console.log(endPoint);

  const response = await axios.get(endPoint, options);
  const data = await response.data;

  return data;
}
