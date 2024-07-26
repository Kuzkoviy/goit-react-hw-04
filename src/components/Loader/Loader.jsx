import { Watch } from "react-loader-spinner"
import css from '../Loader/Loader.module.css'

function Loader() {
  return (
    <div className={css.loaderWrap}>
    <Watch
  visible={true}
  height="80"
  width="80"
  radius="48"
  color="#272ef5cc"
  ariaLabel="watch-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  </div>
  )
}

export default Loader