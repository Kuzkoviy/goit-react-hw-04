import css from '../ImageCard/ImageCard.module.css'


function ImageCard({onLink, onAlt}) {
  
  return (
      <li className={css.listItem}>
        <img src={onLink} alt={onAlt} className={css.img}/>
      </li>
  )
}

export default ImageCard