import './componentStyles/Loading.css'
import loading from '../Images/loading.gif'

export default function Loading() {
  return (
    <div className="loading">
      <div className="loadingSymbol">
        <img src={loading} alt=""></img>
        <h2>Loading...</h2>
      </div>
    </div>
  )
}
