import { useState, useEffect } from "react"
import {fetchGallery} from '../../unsplash-api'
import ImageGallery from '../ImageGallery/ImageGallery'


function App() {

    const [images, setImages] = useState([]);


    useEffect(() => {
        async function getPhotos() {
            const data = await fetchGallery('cat');
            setImages(data);
        }

        getPhotos();
    }, [])






  return (
    <div>
        {images.length && <ImageGallery images = {images}/>}
    </div>
  )
}

export default App