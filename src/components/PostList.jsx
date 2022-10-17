import './componentStyles/PostList.css'

export default function PostList() {
  return (
    <div className="listWrapper">
      <div className="listBody">
        <div className="listHeader">
          <h2>All Posts</h2>
        </div>
        <div className="listFilter">
          <h3>filter</h3>
          <label htmlFor="titleQuery">Title</label>
          <input type="text" id="titleQuery" />
        </div>
        <div className="listContent">{/* loop over Data and display */}</div>
      </div>
    </div>
  )
}
