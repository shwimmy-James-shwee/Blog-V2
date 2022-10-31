import './componentStyles/PostList.css'
import DropDown from './DropDown'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const postTypeOptions = ['Technical', 'Emotional', 'Mini-Project']
const postTagOptions = ['New', 'Depricated']

const postsTemp = [
  {
    id: 1,
    name: 'test carousel item 1',
    datePublished: '01/01/2021',
    postType: 'Technical',
    blurb:
      'this is a test of displaying a short description for carousel item 1',
    tags: {
      new: true,
      depricated: true,
    },
  },
  {
    id: 2,
    name: 'test carousel item 2',
    datePublished: '01/01/2011',
    postType: 'Emotional',
    blurb:
      'this is a test of displaying a short description for carousel item 2',
    tags: {
      new: true,
      depricated: true,
    },
  },
  {
    id: 3,
    name: 'test carousel item ',
    datePublished: '01/01/2020',
    postType: 'Mini-Project',
    blurb:
      'this is a test of displaying a short description for carousel item 3',
    tags: {
      new: true,
      depricated: true,
    },
  },
  {
    id: 4,
    name: 'test carousel item 4',
    datePublished: '01/01/2021',
    postType: 'Technical',
    blurb:
      'this is a test of displaying a short description for carousel item 4',
    tags: {
      new: true,
      depricated: true,
    },
  },
  {
    id: 5,
    name: 'test carousel item 5',
    datePublished: '01/01/2021',
    postType: 'Emotional',
    blurb:
      'this is a test of displaying a short description for carousel item 4',
    tags: {
      new: true,
      depricated: true,
    },
  },
  {
    id: 6,
    name: 'test carousel item 6',
    datePublished: '01/01/2021',
    postType: 'Mini-Project',
    blurb:
      'this is a test of displaying a short description for carousel item 4',
    tags: {
      new: true,
      depricated: true,
    },
  },
  {
    id: 7,
    name: 'test carousel item 7',
    datePublished: '01/01/2021',
    postType: 'Technical',
    blurb:
      'this is a test of displaying a short description for carousel item 4',
    tags: {
      new: false,
      depricated: false,
    },
  },
  {
    id: 8,
    name: 'test carousel item 8',
    datePublished: '01/01/2021',
    postType: 'Technical',
    blurb:
      'this is a test of displaying a short description for carousel item 4',
    tags: {
      new: true,
      depricated: false,
    },
  },
  {
    id: 9,
    name: 'test carousel item 9',
    datePublished: '01/01/2021',
    postType: 'Mini-Project',
    blurb:
      'this is a test of displaying a short description for carousel item 4',
    tags: {
      new: true,
      depricated: false,
    },
  },
]

export default function PostList() {
  const [posts, setPosts] = useState(postsTemp) //store posts in state for filtering

  const [open, setOpen] = useState({
    //track whether drop downs are open or closed
    postTypeOpen: false,
    postTagOpen: false,
  })
  const [selection, setSelection] = useState({
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

  const filteredPosts = posts.filter((post) => {
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
      strCond = true
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
      typeCond = true
    } else if (postType === typeFilter) {
      typeCond = true
    } else {
      typeCond = false
    }

    let tagCond = false // block evaulates an entered tag filter condition
    if (tagFilter === '') {
      tagCond = true
    } else if (
      (postNew === true && tagFilter === 'New') ||
      (postDepricated === true && tagFilter === 'Depricated')
    ) {
      tagCond = true
    } else {
      tagCond = false
    }

    return tagCond && typeCond && strCond ? true : false
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
          {filteredPosts.map((post, index) => {
            return (
              <NavLink
                to={`/post/${post.id}`}
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
