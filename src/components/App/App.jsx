import { useState, useEffect } from "react"
import {fetchGallery} from '../../unsplash-api'
import ImageGallery from '../ImageGallery/ImageGallery'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import SearchBar from "../SearchBar/SearchBar"


function App() {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    // useEffect(() => {
    //     async function getPhotos() {
    //        try {
    //         setLoading(true);
    //         const data = await fetchGallery('plane');
    //         setImages(data.results);
    //        } catch (error) {
    //         console.log(error);
    //         setError(true);
    //        } finally {
    //         setLoading(false);
    //        }
    //       }

    //     getPhotos();
    // }, [])
    
   async function handleSearch(newTopic) {
      try {
        setLoading(true);
        setImages([]);
        const data = await fetchGallery(newTopic);
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

    </div>
  )
}

export default App