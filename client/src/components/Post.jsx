import './componentStyles/Post.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { images } from '../Images/images.js'
import Loading from './Loading'

export default function Post() {
  const { id } = useParams()

  const [returnedPost, setPost] = useState({}) // capture the retrieved post in state
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getPost(id) {
      try {
        await fetch(`/api/post/${id}`) // call ExpressJS server side end point to access db
          .then((res) => res.json())
          .then((post) => {
            setPost(post[0]) // response is wrapped in array, take first
          })
      } catch (err) {
        console.error(err)
      }
    }
    getPost(id)

    setTimeout(() => {
      // just so you get to see the cool loading screen :)
      setIsLoading(false)
    }, 1000)
  }, [id])

  if (isLoading) return <Loading />

  return (
    <div className="postWrapper">
      <div className="postTitle">
        {JSON.parse(returnedPost.tags).depricated === true && ( // display banner if depricated
          <div className="depricatedBanner">
            <h4>This post is depricated</h4>
            <p>
              The content in the post is either outdated or no longer reflects
              my point of view on the topic.
            </p>
          </div>
        )}
        <h2>{returnedPost.name}</h2>
      </div>
      <div className="postContent">
        {JSON.parse(returnedPost.content).map((contentBlock, index) => {
          // loop over each piece of content in the returned post, and dynamically determine and display it in relevant HTMl tags

          // Could split below if else logic in to seperate components
          if (contentBlock.type === 'text') {
            const blockBody = contentBlock.body
            const heading =
              contentBlock.isSubHeading === false ? ( // determine which heading should be used
                <h3>{contentBlock.heading}</h3>
              ) : (
                <h4>{contentBlock.heading}</h4>
              )

            return (
              <div className="contentBlock textBlock" key={index}>
                {contentBlock.heading !== '' && // if a heading is populated, display it
                  contentBlock.heading !== undefined &&
                  heading}

                {blockBody &&
                  blockBody.map((bodyItem, index) => {
                    // if body items exist, loop and display them
                    return (
                      <p className="postBodyItem" key={index}>
                        {bodyItem}
                      </p>
                    )
                  })}
              </div>
            )
          } else if (contentBlock.type === 'image') {
            const src = images[contentBlock.ref]

            const annotation = contentBlock.annotation
            return (
              <div className="contentBlock imageBlock" key={index}>
                <img src={src} alt="" />
                {annotation !== '' && annotation !== undefined && (
                  <em>{annotation}</em> // if an annotation is populated, display it
                )}
              </div>
            )
          } else if (contentBlock.type === 'iFrame') {
            const src = contentBlock.src
            const annotation = contentBlock.annotation

            return (
              <div className="contentBlock iFrameBlock" key={index}>
                <iframe src={src} title={index}></iframe>

                {annotation !== '' && annotation !== undefined && (
                  <em>{annotation}</em> // if an annotation is populated, display it
                )}
              </div>
            )
          } else if (contentBlock.type === 'orderedList') {
            const preText = contentBlock.preText
            const listItems = contentBlock.items

            return (
              <div className="contentBlock oListBlock" key={index}>
                {
                  preText !== '' && preText !== undefined && <p>{preText}</p> // if pretext is found, display it
                }

                <ol>
                  {listItems &&
                    listItems.map((item, liIndex) => {
                      return <li key={liIndex}>{item}</li> // loop over list items if provided and display them
                    })}
                </ol>
              </div>
            )
          } else if (contentBlock.type === 'unOrderedList') {
            const preText = contentBlock.preText
            const listItems = contentBlock.items

            return (
              <div className="contentBlock uListBlock" key={index}>
                {
                  preText !== '' && preText !== undefined && <p>{preText}</p> // if pre text is found, display it
                }

                <ul>
                  {listItems &&
                    listItems.map((item, liIndex) => {
                      return <li key={liIndex}>{item}</li> // loop over and display list items
                    })}
                </ul>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}
