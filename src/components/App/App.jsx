import { useState } from "react"
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

    
   async function handleSearch(newTopic) {
      try {
        setLoading(true);
        setImages([]);
        const data = await fetchGallery(newTopic, 1);
        setImages(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }





  return (
    <div>
        <SearchBar onSearch={handleSearch}/>
        {loading && <Loader/>}
        {images.length > 0 && <ImageGallery images = {images}/>}
        {error && <ErrorMessage/>}
        <LoadMoreBtn/>

    </div>
  )
}

export default App