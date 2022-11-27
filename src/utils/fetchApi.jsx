import { Notify } from 'notiflix';
import axios from 'axios';



export const fetchImages = async query => {
  if (query.trim() === '') {
    return Notify.info('Sorry, Please enter a more specific query');
  }

const response = await axios.get(
  `https://pixabay.com/api/?q=${query}&page=1&key=30849691-d4b4d8699eb6bab45d758087e&image_type=photo&orientation=horizontal&per_page=12`
);

  return response.data;
};

export const fetchMoreImages = async (query, page) => {
  const moreImages = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=30849691-d4b4d8699eb6bab45d758087e&image_type=photo&orientation=horizontal&per_page=12`
  );

  return moreImages.data;
};

