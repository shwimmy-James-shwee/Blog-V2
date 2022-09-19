import './componentStyles/CarouselPostCard.css'

export default function CarouselPostCard({ post }) {
  const postType = post.postType

  return (
    <div className="Carousel-Item" post-type={postType}>
      <div className="Carousel-Card-Header">
        <div className="Carousel-Card-Title">{post.name} </div>
        <div className="Carousel-Card-Date">{post.datePublished}</div>
      </div>

      <div className="Carousel-Card-Blurb">{post.blurb}</div>

      <div className="Carousel-Card-Footer">
        {post.tags.new === true && (
          <div className="Carousel-Card-Tag new">New</div>
        )}
        {post.tags.depricated === true && (
          <div className="Carousel-Card-Tag depricated">Depricated</div>
        )}
      </div>
    </div>
  )
}
