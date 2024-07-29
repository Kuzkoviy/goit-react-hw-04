import css from '../ImageCard/ImageCard.module.css'


function ImageCard({link, alt, openModal, full}) {
  
  return (
      <li className={css.listItem}>
        <img src={link} alt={alt} className={css.img} onClick={() => openModal(full)}/>
      </li>
  )
}

export default ImageCard