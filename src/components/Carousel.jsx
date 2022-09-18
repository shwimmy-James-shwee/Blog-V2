import Arrow from './Arrow'
import './componentStyles/Carousel.css'
import CarouselPostCard from './CarouselPostCard.jsx'

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
    id: 5,
    name: 'test carousel item 5',
    datePublished: '01/01/2021',
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
    blurb:
      'this is a test of displaying a short description for carousel item 4',
    tags: {
      new: true,
      depricated: false,
    },
  },
]

export default function Carousel() {
  function handleClick(direction) {
    const carousel = document.getElementById('Carousel-body') //find the carousel in the DOM
    const carouselIndex = parseInt(
      getComputedStyle(carousel).getPropertyValue('--carousel-index')
    )

    const displayedItemBlocks = Math.ceil(carousel.children.length / 5) // # of sets of items to be displayed when cycling

    if (direction === 'left') {
      if (carouselIndex === 0) {
        carousel.style.setProperty('--carousel-index', displayedItemBlocks - 1) // display last block
      } else {
        carousel.style.setProperty('--carousel-index', carouselIndex - 1) // increase or decrease css variable, multiply variable by the in an x axis transition
      }
    } else if (direction === 'right') {
      if (carouselIndex + 1 >= displayedItemBlocks) {
        carousel.style.setProperty('--carousel-index', 0) // display first block
      } else {
        carousel.style.setProperty('--carousel-index', carouselIndex + 1)
      }
    }
  }

  // add duplicate posts to carousel item array so no gaps are present
  let bufferedPostsList = [...carouselItems]
  const additionalRequiredPosts =
    Math.ceil(carouselItems.length / 5) * 5 - carouselItems.length
  for (let x = 1; x <= additionalRequiredPosts; x++) {
    bufferedPostsList.push(carouselItems[x - 1])
  }

  return (
    <div className="Carousel-wrapper">
      <div className="button-wrapper" onClick={(e) => handleClick('left', e)}>
        <Arrow direction="left"></Arrow>
      </div>
      <div className="Carousel-body-container">
        <div className="Carousel-body" id="Carousel-body">
          {bufferedPostsList.map((post) => (
            <CarouselPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      <div className="button-wrapper" onClick={(e) => handleClick('right', e)}>
        <Arrow direction="right"></Arrow>
      </div>
    </div>
  )
}
