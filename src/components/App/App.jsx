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
    const [page, setPage] = useState(1);
    const [topic, setTopic] = useState('');

    
   async function handleSearch(newTopic) {
      try {
        setLoading(true);
        setImages([]);
        setTopic(newTopic);
        const data = await fetchGallery(newTopic, page);
        setImages(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    function handleLoadMore() {
      setPage(page + 1);
    }

    useEffect(() => {
      async function getImages() {
       try {
        setLoading(true);
        setError(false);
        const data = await fetchGallery(topic, page);
        setImages(data.results);
        setImages((prevImages) => {
          return [...prevImages, data.results]
        })
       } catch (error) {
        setError(true);
       } finally {
        setLoading(false);
       }
      }

      getImages();
    }, [page, topic]);
    

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