import axios from 'axios';

export const fetchImages = async (query, page) => {
  const API_KEY = '35451173-bb19ec1b965d97389129df6e3';
  const perPage = 12;
  const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};