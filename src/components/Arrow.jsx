import './componentStyles/Arrow.css'

export default function ArrowLeft({ direction }) {
  if (direction === 'right') {
    return (
      <>
        <span className="arrow-top right"></span>
        <span className="arrow-bottom right"></span>
      </>
    )
  } else {
    return (
      <>
        <span className="arrow-top left"></span>
        <span className="arrow-bottom left"></span>
      </>
    )
  }
}
