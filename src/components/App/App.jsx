import { useState, useEffect } from "react"
import {fetchGallery} from '../../unsplash-api'
import ImageGallery from '../ImageGallery/ImageGallery'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import SearchBar from "../SearchBar/SearchBar"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"



function App() {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [topic, setTopic] = useState('');
    const [totalPages, setTotalPages] = useState(0);
    
   async function handleSearch(newTopic) {
        setImages([]);
        setCurrentPage(1);
        setTopic(newTopic);
   }

    function handleLoadMore() {
      setCurrentPage(currentPage + 1);
    }

    useEffect(() => {
      if(topic === '') return;

      async function getImages() {
       try {
        setLoading(true);
        setError(false);
        const data = await fetchGallery(topic, currentPage);
        setTotalPages(data.total_pages);
        setImages(prevImages => {
          return [...prevImages, ...data.results];
        });
       } catch (error) {
        setError(true);
       } finally {
        setLoading(false);
       }
      }
      getImages();
    }, [currentPage, topic]);
    

  return (
    <div>
        <SearchBar onSearch={handleSearch}/>
        {error && <ErrorMessage/>}
        {loading && <Loader/>}
        {images.length > 0 && (<ImageGallery images = {images}/>)}
        {images.length > 0  && totalPages > currentPage && <LoadMoreBtn onClick = {handleLoadMore}/>}

    </div>
  )
}

export default App