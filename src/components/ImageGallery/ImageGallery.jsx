import ImageCard from "../ImageCard/ImageCard"


function ImageGallery({images}) {


  console.log(images);
  return (
    <div>
      <ul>
        {images.map((img) => {
          return(
            <li
              key={img.id}
            >
              <ImageCard onLink={img.urls} onAlt={img.alt_description} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ImageGallery