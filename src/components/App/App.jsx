import { useState, useEffect } from "react"
import {fetchGallery} from '../../unsplash-api'
import ImageGallery from '../ImageGallery/ImageGallery'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import SearchBar from "../SearchBar/SearchBar"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import toast, {Toaster} from "react-hot-toast"
import ImageModal from '../ImageModal/ImageModal'
import Modal from 'react-modal';


function App() {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [topic, setTopic] = useState('');
    const [totalPages, setTotalPages] = useState(0);
    const [currentImage, setCurrentImage] = useState('');
    const [isOpenModal, setIsOpenModal] = useState(false);
 

    Modal.setAppElement('#root');

   async function handleSearch(newTopic) {
    if(newTopic.trim() === '') {
      toast.error('Field cannot be empty', {position: 'top-right'});
      return;
    }
        setImages([]);
        setCurrentPage(1);
        setTopic(newTopic);
   }

    function handleLoadMore() {
      setCurrentPage(currentPage + 1);
    }

    useEffect(() => {
      if(topic.trim() === '') return;

      async function getImages() {
       try {
        setLoading(true);
        setError(false);
        const data = await fetchGallery(topic, currentPage);
        setTotalPages(data.total_pages);
        setImages(prevImages => {
          return [...prevImages, ...data.results];
        });
        if(data.total_pages <= currentPage) {
          toast.error('You reached the end of results', {position: 'top-right'});
        }
       } catch (error) {
        toast.error('Some error happend, please reload the page', {position:'top-right'});
       } finally {
        setLoading(false);
       }
      }
      getImages();
    }, [currentPage, topic]);
    

    // const handleOpenModal = item => {
    //   setOpenModal(true);
    //   setModalImg(item);
    //   document.body.style.overflow = 'hidden';
    // };
  
    // const openCloseModal = () => {
    //   setOpenModal(false);
    //   setModalImg(null);
    //   document.body.style.overflow = 'auto';
    // };


    const openModal = (thisImage) => {
    setIsOpenModal(true);
    setCurrentImage(thisImage);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };
    

  return (
    <div>
        <SearchBar onSearch={handleSearch}/>
        {error && <ErrorMessage/>}
        {loading && <Loader/>}
        {images.length > 0 && (<ImageGallery images = {images} onModal ={openModal}/>)}
        {isOpenModal && (
        <ImageModal
          isOpen={isOpenModal}
          onRequestClose={closeModal}
          images={images}
          currentImage={currentImage}
          preventScroll={true}
        />
      )}
        {images.length > 0  && totalPages > currentPage && <LoadMoreBtn onClick = {handleLoadMore}/>}
        <Toaster/>
    </div>
  )
}

export default App