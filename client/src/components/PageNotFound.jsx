import './componentStyles/PageNotFound.css'
import loading from '../Images/loading.gif'

function PageNotFound() {
  return (
    <div className="page-not-found-wrapper">
      <img src={loading} alt=""></img>
      <h2>Oops... this page doesn't exist</h2>
    </div>
  )
}

export default PageNotFound
