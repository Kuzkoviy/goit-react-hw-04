import { useState, useEffect } from "react"
import {fetchGallery} from '../../unsplash-api'
import ImageGallery from '../ImageGallery/ImageGallery'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'


function App() {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        async function getPhotos() {
           try {
            setLoading(true);
            const data = await fetchGallery('plane');
            setImages(data.results);
           } catch (error) {
            console.log(error);
            setError(true);
           } finally {
            setLoading(false);
           }
          }

        getPhotos();
    }, [])






  return (
    <div>
        {images.length > 0 && <ImageGallery images = {images}/>}
        {loading && <Loader/>}
        {error && <ErrorMessage/>}

    </div>
  )
}

export default App