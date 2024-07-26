import ImageCard from "../ImageCard/ImageCard"
import css from '../ImageGallery/ImageGallery.module.css'


function ImageGallery({images}) {


  console.log(images);
  return (
    <div className={css.galleryWrapper}>
      <ul className={css.galleryList}>
        {images.map((img) => {
          return(
              <ImageCard key={img.id} onLink={img.urls.small} onAlt={img.alt_description} />
          )
        })};
      </ul>
    </div>
  )
}

export default ImageGallery


