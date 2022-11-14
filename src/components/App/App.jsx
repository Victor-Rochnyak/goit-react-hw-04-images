import { useState, useEffect } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import ImageError from 'components/ImageError/ImageError';
import Notification from 'components/Notification/Notification';
import API from 'components/api/api';
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import ImageGalleryList from 'components/ImageGalleryList/ImageGalleryList';
import SearchBar from 'components/SearchBar/SearchBar';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [error] = useState(null);
  const [status, setStatus] = useState('idle');
  const [isLoading] = useState(true);
  const [loadBtnIsShown, setLoadBtnIsShown] = useState(false);

  useEffect(() => {
    if (!inputValue) {
      return;
    }
    setStatus('pending');

     API.fetchImages(inputValue, page)
      .then(results => {
        if (results.hits.length === 0) return setStatus('empty');

        setImages(images => [...images, ...results.hits]);
        const remainingPages = getRemainingPages(results.totalHits);

        if (remainingPages > 0) {
          setLoadBtnIsShown(true);
        } else {
          setLoadBtnIsShown(false);
        }
        setStatus('resolved');
      })
      .catch(() => {
        setStatus('rejected');
        toast.error('Whoops, something went wrong');
      });
  }, [inputValue, page]);

  const handleFormSubmit = inputValue => {
    setInputValue(inputValue);
    setImages([]);
    setPage(1);
  };
  const loadMore = () => {
    setPage(page => page + 1);
  };
  const getRemainingPages = totalImages => {
    return Math.ceil(totalImages / API.perPage) - page;
  };

  return (
    <div>
      <SearchBar onSubmit={handleFormSubmit} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        theme="dark"
      />
      {status === 'empty' && (
        <Notification notification={'images not found . Please try again'} />
      )}
      {status === 'idle' && <h1>Please, enter your request</h1>}
      {status === 'rejected' && <ImageError message={error.message} />}
      {status === 'resolved' && (
        <ImageGalleryList images={images} isLoading={isLoading} />
      )}
      {loadBtnIsShown && <ButtonLoadMore onClick={loadMore} />}
    </div>
  );
}
