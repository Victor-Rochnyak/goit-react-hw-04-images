// import axios from "axios";
import { API_KEY, BASE_URL } from 'components/Constants/Constants';

const perPage = 12;
function fetchImages(name, page = 1) {
  const url = `${BASE_URL}/?key=${API_KEY}&q=${name}
  &image_type=photo&orientation=horizontal&&page=${page}
  &per_page=${perPage}`;

  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Whoops, something went wrong: ${name}`));
  });
}

const api = { fetchImages, perPage };

export default api;
