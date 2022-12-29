import './componentStyles/PostList.css'
import DropDown from './DropDown'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const postTypeOptions = ['Technical', 'Emotional', 'Mini-Project']
const postTagOptions = ['New', 'Depricated']

export default function PostList({ postArr }) {
  const [open, setOpen] = useState({
    //track whether drop downs are open or closed
    postTypeOpen: false,
    postTagOpen: false,
  })
  const [selection, setSelection] = useState({
    // should this be one useState?
    // track filter parameters
    postTypeSelection: '',
    postTagSelection: '',
    searchQuery: '',
  })

  const handleOpen = (dropDownTitle) => {
    const key = dropDownTitle.includes('Post Type')
      ? 'postTypeOpen'
      : 'postTagOpen'

    setOpen({
      ...open,
      [key]: !open[key],
    })
  }

  const handleSelection = (option, dropDownTitle) => {
    const key = dropDownTitle.includes('Post Type')
      ? 'postTypeSelection'
      : 'postTagSelection'

    setSelection({
      ...selection,
      [key]: option,
    })
    setOpen({
      postTypeOpen: false,
      postTagOpen: false,
    })
  }

  const clearSelection = () => {
    // clear the filters
    setSelection({
      postTypeSelection: '',
      postTagSelection: '',
      searchQuery: '',
    })
    setOpen({
      postTypeOpen: false,
      postTagOpen: false,
    })
    document.getElementById('searchQuery').value = ''
  }

  const filteredPosts = postArr.filter((post) => {
    const name = post.name.toLowerCase() // THROWS ERRORS
    const blurb = post.blurb.toLowerCase()
    const id = post.id.toString()
    const date = post.datePublished
    const postType = post.postType
    const postNew = post.tags.new
    const postDepricated = post.tags.depricated

    const queryStr = selection.searchQuery.toLowerCase()
    const typeFilter = selection.postTypeSelection
    const tagFilter = selection.postTagSelection

    let strCond = false // block evaulates an entered string filter condition
    if (queryStr === '') {
      strCond = true // return true if empty as no filtering needs to be done
    } else if (
      name.includes(queryStr) ||
      blurb.includes(queryStr) ||
      id.includes(queryStr) ||
      date.includes(queryStr)
    ) {
      strCond = true
    } else {
      strCond = false
    }

    let typeCond = false // block evaulates an entered type filter condition
    if (typeFilter === '') {
      typeCond = true // return true if empty as no filtering needs to be done
    } else if (postType === typeFilter) {
      typeCond = true
    } else {
      typeCond = false
    }

    let tagCond = false // block evaulates an entered tag filter condition
    if (tagFilter === '') {
      tagCond = true // return true if empty as no filtering needs to be done
    } else if (
      (postNew === true && tagFilter === 'New') ||
      (postDepricated === true && tagFilter === 'Depricated')
    ) {
      tagCond = true
    } else {
      tagCond = false
    }

    return tagCond && typeCond && strCond ? true : false // all three filter checks must return true to include the post
  })

  return (
    <div className="listWrapper">
      <div className="listBody">
        <div className="listHeader">
          <h2>All Posts</h2>
        </div>
        <div className="listFilter">
          {/* <h3>filter</h3> */}

          <div className="FilterSelector">
            <label htmlFor="searchQuery">Search: </label>
            <input
              type="search"
              id="searchQuery"
              placeholder="Enter a query"
              onChange={(e) =>
                setSelection({ ...selection, searchQuery: e.target.value })
              }
            />

            <DropDown //could have just used HTML select?
              handleSelection={handleSelection}
              selection={selection.postTypeSelection}
              handleOpen={handleOpen}
              open={open.postTypeOpen}
              options={postTypeOptions}
              defaultTitle="Post Type &#11167;"
            />

            <DropDown
              handleSelection={handleSelection}
              selection={selection.postTagSelection}
              handleOpen={handleOpen}
              open={open.postTagOpen}
              options={postTagOptions}
              defaultTitle="Post Tag &#11167;"
            />
          </div>

          <button onClick={clearSelection}>Clear Filter</button>
        </div>
        <div className="listContent">
          {filteredPosts.length === 0 && <h4>No posts found...</h4>}

          {filteredPosts.length !== 0 &&
            filteredPosts.map((post, index) => {
              const urlParm =
                post.postType === 'Mini-Project' ? 'Mini-Project' : 'post'
              return (
                <NavLink
                  to={`/${urlParm}/${post.id}`}
                  className="postRow"
                  key={index}
                  post-type={post.postType}
                >
                  <span className="postRowID">{post.id}</span>
                  <h4>{post.name}</h4>
                  <p>{post.blurb}</p>
                  <p>{post.datePublished}</p>
                </NavLink>
              )
            })}
        </div>
      </div>
    </div>
  )
}
