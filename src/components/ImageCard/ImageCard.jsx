import css from '../ImageCard/ImageCard.module.css'


function ImageCard({onLink, onAlt}) {


  
  const link = onLink.small;
  return (
    <div>
      <li className={css.listItem}>
        <img src={link} alt={onAlt} />
      </li>
    </div>
  )
}

export default ImageCard