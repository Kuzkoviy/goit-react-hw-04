


function ImageCard({onLink, onAlt}) {


  
  const link = onLink.small;
  return (
    <div>
        <img src={link} alt={onAlt} />
    </div>
  )
}

export default ImageCard