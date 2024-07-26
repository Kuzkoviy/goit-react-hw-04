import ImageCard from "../ImageCard/ImageCard"
import css from '../ImageGallery/ImageGallery.module.css'


function ImageGallery({images}) {


  console.log(images);
  return (
    <div className={css.galleryWrapper}>
      <ul className={css.galleryList}>
        {images.map((img) => {
          return(
            <li
              key={img.id}
            >
              <ImageCard onLink={img.urls.small} onAlt={img.alt_description} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ImageGallery


