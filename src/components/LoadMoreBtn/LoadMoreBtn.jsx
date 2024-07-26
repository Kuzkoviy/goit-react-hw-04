import css from '../LoadMoreBtn/LoadMoreBtn.module.css'

function LoadMoreBtn({onClick}) {
  return (
    <div className={css.loadBtnWrap}>
        <button type="button" onClick={onClick} className={css.loadBtn}>Load More</button>
    </div>
  )
}

export default LoadMoreBtn