import css from '../ImageCard/ImageCard.module.css'


function ImageCard({onLink, onAlt, openModal, onFull}) {
  
  return (
      <li className={css.listItem}>
        <img src={onLink} alt={onAlt} className={css.img} onClick={() => openModal(onFull)}/>
      </li>
  )
}

export default ImageCard