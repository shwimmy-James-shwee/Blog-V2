import Arrow from './Arrow'
import './componentStyles/Carousel.css'
import CarouselPostCard from './CarouselPostCard.jsx'

export default function Carousel({ postArr }) {
  function handleClick(direction) {
    const carousel = document.getElementById('Carousel-body') //find the carousel in the DOM
    const carouselIndex = parseInt(
      getComputedStyle(carousel).getPropertyValue('--carousel-index') //retrieve CSS variable
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
  let bufferedPostsList = [...postArr]
  const additionalRequiredPosts =
    Math.ceil(postArr.length / 5) * 5 - postArr.length
  for (let x = 1; x <= additionalRequiredPosts; x++) {
    bufferedPostsList.push(postArr[x - 1])
  }

  return (
    <div className="Carousel-wrapper">
      <div className="button-wrapper" onClick={(e) => handleClick('left', e)}>
        <Arrow direction="left"></Arrow>
      </div>
      <div className="Carousel-body-container">
        <div className="Carousel-body" id="Carousel-body">
          {bufferedPostsList.map((post, index) => (
            <CarouselPostCard key={index} post={post} />
          ))}
        </div>
      </div>
      <div className="button-wrapper" onClick={(e) => handleClick('right', e)}>
        <Arrow direction="right"></Arrow>
      </div>
    </div>
  )
}
