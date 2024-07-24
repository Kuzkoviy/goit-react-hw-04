import { useState, useEffect } from "react"
import {fetchGallery} from '../../unsplash-api'
import ImageGallery from '../ImageGallery/ImageGallery'


function App() {

    const [image, setImage] = useState([]);


    useEffect(() => {
        async function getPhotos() {
            const data = await fetchGallery('cat');
            setImage(data);
        }

        getPhotos();
    }, [])






  return (
    <div>
        <ImageGallery items = {image}/>
    </div>
  )
}

export default App