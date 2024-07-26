import css from '../ImageCard/ImageCard.module.css'


function ImageCard({onLink, onAlt}) {
  
  return (
    <div>
      <li className={css.listItem}>
        <img src={onLink} alt={onAlt} className={css.img}/>
      </li>
    </div>
  )
}

export default ImageCard