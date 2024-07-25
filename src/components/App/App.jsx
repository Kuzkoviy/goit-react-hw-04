import { useState, useEffect } from "react"
import {fetchGallery} from '../../unsplash-api'
import ImageGallery from '../ImageGallery/ImageGallery'


function App() {

    const [images, setImages] = useState([]);


    useEffect(() => {
        async function getPhotos() {
            const data = await fetchGallery('dog');
            setImages(data.results);
            // try catch next will be added
        }

        getPhotos();
    }, [])






  return (
    <div>
        {images.length > 0 && <ImageGallery images = {images}/>}
    </div>
  )
}

export default App