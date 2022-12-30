import './componentStyles/Home.css'
import Carousel from './Carousel.jsx'
import PostList from './PostList.jsx'
import Loading from './Loading'
import { useState, useEffect } from 'react'

export default function Home() {
  const [allPosts, setAllPosts] = useState([]) // capture the retrieved posts in state
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getAllPosts() {
      try {
        await fetch(`/api/allPosts`) // call ExpressJS server side end point to access db
          .then((res) => res.json())
          .then((posts) => {
            setAllPosts(posts)
          })
      } catch (err) {
        console.error(err)
      }
    }
    getAllPosts()

    setTimeout(() => {
      // just so you get to see the cool loading screen :)
      setIsLoading(false)
    }, 500)
  }, [])

  if (isLoading) return <Loading />

  return (
    <>
      <Carousel postArr={allPosts} />
      <PostList postArr={allPosts} />
    </>
  )
}
