import { Watch } from "react-loader-spinner"

function Loader() {
  return (
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
  )
}

export default Loader