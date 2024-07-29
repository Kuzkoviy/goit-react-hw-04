import ImageCard from "../ImageCard/ImageCard"
import css from '../ImageGallery/ImageGallery.module.css'


function ImageGallery({images, onModal}) {



  console.log(images);
  return (
    <div className={css.galleryWrapper}>
      <ul className={css.galleryList}>
        {images.map((img) => {
          return(
              <ImageCard key={img.id} link={img.urls.small} alt={img.alt_description} full = {img.urls.regular} openModal = {onModal}/>
          )
        })};
      </ul>
    </div>
  )
}

export default ImageGallery


