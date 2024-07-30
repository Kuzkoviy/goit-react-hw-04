import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images, onModal }) {
  return (
    <ul className={css.galleryList}>
      {images.map((image) => (
        <li
          key={image.id}
          onClick={() => {
            onModal(image);
          }}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
}