import Arrow from './Arrow'
import './componentStyles/Carousel.css'

const carouselItems = [
  {
    id: 1,
    name: 'test carousel item 1',
    datePublished: '01/01/2021',
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
    blurb:
      'this is a test of displaying a short description for carousel item 2',
    tags: {
      new: true,
      depricated: true,
    },
  },
  {
    id: 3,
    name: 'test carousel item 3',
    datePublished: '01/01/2020',
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
    blurb:
      'this is a test of displaying a short description for carousel item 4',
    tags: {
      new: true,
      depricated: true,
    },
  },
  {
    id: 4,
    name: 'test carousel item 4',
    datePublished: '01/01/2021',
    blurb:
      'this is a test of displaying a short description for carousel item 4',
    tags: {
      new: true,
      depricated: true,
    },
  },
  {
    id: 4,
    name: 'test carousel item 4',
    datePublished: '01/01/2021',
    blurb:
      'this is a test of displaying a short description for carousel item 4',
    tags: {
      new: true,
      depricated: true,
    },
  },
  {
    id: 4,
    name: 'test carousel item 4',
    datePublished: '01/01/2021',
    blurb:
      'this is a test of displaying a short description for carousel item 4',
    tags: {
      new: true,
      depricated: true,
    },
  },
  {
    id: 4,
    name: 'test carousel item 4',
    datePublished: '01/01/2021',
    blurb:
      'this is a test of displaying a short description for carousel item 4',
    tags: {
      new: true,
      depricated: true,
    },
  },
  {
    id: 4,
    name: 'test carousel item 4',
    datePublished: '01/01/2021',
    blurb:
      'this is a test of displaying a short description for carousel item 4',
    tags: {
      new: true,
      depricated: true,
    },
  },
]

function Post({ post }) {
  return <div className="Carousel-Item"> {post.name} </div>
}

export default function Carousel() {
  function handleClick(direction) {
    const carousel = document.getElementById('Carousel-body') //find the carousel in the DOM
    const carouselIndex = parseInt(
      getComputedStyle(carousel).getPropertyValue('--carousel-index')
    )

    if (direction === 'left') {
      carousel.style.setProperty('--carousel-index', carouselIndex - 1)
    } else if (direction === 'right') {
      carousel.style.setProperty('--carousel-index', carouselIndex + 1)
    }
  }

  return (
    <div className="Carousel-wrapper">
      <div className="button-wrapper" onClick={(e) => handleClick('left', e)}>
        <Arrow direction="left"></Arrow>
      </div>
      <div className="Carousel-body-container">
        <div className="Carousel-body" id="Carousel-body">
          {carouselItems.map((post) => (
            <Post key={post.id.toString()} post={post} />
          ))}
        </div>
      </div>
      <div className="button-wrapper" onClick={(e) => handleClick('right', e)}>
        <Arrow direction="right"></Arrow>
      </div>
    </div>
  )
}
