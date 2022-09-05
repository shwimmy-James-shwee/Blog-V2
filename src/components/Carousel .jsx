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
]

export default function Carousel() {
  return (
    <div className="Carousel-wrapper">
      <div className="button-wrapper">
        <Arrow direction="left"></Arrow>
      </div>
      <div className="Carousel-body"></div>
      <div className="button-wrapper">
        <Arrow direction="right"></Arrow>
      </div>
    </div>
  )
}
