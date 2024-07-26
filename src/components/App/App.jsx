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
    const [loadMore, setLoadMore] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [topic, setTopic] = useState('');

    
   async function handleSearch(newTopic) {
        // setLoading(true);
        setImages([]);
        setTopic(newTopic);
        // const data = await fetchGallery(newTopic, currentPage);
        // setImages(data.results);
   };

    function handleLoadMore() {
      setCurrentPage(currentPage + 1);
    }

    useEffect(() => {
      async function getImages() {
       try {
        setLoading(true);
        setError(false);
        const data = await fetchGallery(topic, currentPage);
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
        {loading && <Loader/>}
        {images.length > 0 && <ImageGallery images = {images}/>}
        {error && <ErrorMessage/>}
        <LoadMoreBtn onClick = {handleLoadMore}/>

    </div>
  )
}

export default App