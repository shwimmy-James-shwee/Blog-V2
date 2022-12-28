import './componentStyles/Post.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { images } from '../Images/images.js'

// const returnedPost = {
//   id: 1,
//   name: 'My Values, Strengths, and Limitations',
//   datePublished: '15/04/2021',
//   postType: 'Emotional',
//   blurb:
//     'An informal discussion of some of my current personal characteristics',
//   tags: {
//     new: false,
//     depricated: true,
//   },
//   content: [
//     {
//       type: 'text',
//       heading: 'Introduction',
//       isSubHeading: false,
//       body: [
//         'When asked to reflect on the values, strengths, and limitations that ultimately form the basis of who I am, I tend to find myself digging quite deep into the rabbit hole of how these characteristics affect both my every day and work life, and most notably how these individual characteristics affect one another. This often means that through reflection I notice how one set of circumstances can result in a personal characteristic being a strength, whereas in a different set of circumstances I would perceive that personal characteristic to be a limitation (I.E. the characteristic being somewhat of a double edged sword). Because of this I have decided to not necessarily follow a standard layout for this reflection that many of my cohort may utilise, such as where one may list all their strengths and then subsequently all their weaknesses afterwards. Instead, you will likely notice me taking a blended approach and reflecting on a specific personal characteristic in regard to how it strengthens me and then discussing how that same characteristic can also limit me, this blended approach to values, strengths, and weakness’ may not be apparent for all the points I will discuss but I believe is a better display of my thought process around reflecting on this topic.',
//       ],
//     },
//     {
//       type: 'text',
//       heading: 'Values',
//       isSubHeading: false,
//       body: [],
//     },
//     {
//       type: 'text',
//       heading: 'Mindfulness',
//       isSubHeading: true,
//       body: [
//         'More recently the idea of self and mindfulness has become somewhat of an important part of our household. While I would say mindfulness is somewhat of a never-ending journey, so far it has taught me (at some times more than others) to take a step back and reflect on a reaction, a thought, or a feeling towards something and allows me to dig down to the root cause for that thought/feeling/reaction in an attempt to understand it, and myself better. One common quote that I heard somewhere years ago that ended up sticking in my mind was “ignorance is bliss”, I would think about how much energy it took up digging to these root causes and the effort required to rationalise them compared to those who would take a thought, reaction, or feeling as a whole truth and then simply move on without a second guess (whether the response was right/justified or not). It took me a while to appreciate how these mindfulness approaches to understanding oneself could allow me to grow and evolve as a person. I wouldn’t specifically say that this value is influenced by my culture more so influenced by my environment, I would however say my environment is influenced by the practices and some aspects of the religions of western Asia.',
//       ],
//     },
//     {
//       type: 'text',
//       heading: 'Clarity in Communication',
//       isSubHeading: true,
//       body: [
//         'For a while now I have been passionate about clarity and accuracy in communication as we’ve all experienced a scenario where someone has tried to convey a message (either poorly or accurately) yet has been interpreted by someone else in a completely different way, and in worse scenarios, having that recipient getting hung up or confused with a meaning that was not intended. While areas of communication such as this are the origin to my fixation on clarity, now I find that I’m mindful of it all the time, often meaning that I have to pause and think mid-sentence about how I am going to convey my message. I also use this clarity idea to support myself in having fruitful and deeper conversations, ones where both parties have true understanding of each other’s messages',
//         'As a side note, tying closely to mindfulness and self-awareness, I also believe clarity in communication is larger than just having a conversation with someone else but also how you communicate with yourself. Emphasising which thought’s you choose to hold on to and believe and which you choose to let pass, and ultimately what you tell yourself.',
//       ],
//     },
//     {
//       type: 'text',
//       heading: 'Rationality',
//       isSubHeading: true,
//       body: [
//         'I would call myself a very rational thinker, especially as my experiences with the rationality align quite closely with my mindfulness journey and my fixation on clarity in communication. Being rational in my thoughts and approaches towards things is something that most of the time I can’t avoid, and often influences how I learn. One thing I struggled with at university was learning something that wasn’t described to me in a logical way, many of the “I’m not going to explain why (because its outside the scope of the course or similar reasoning) but trust me this is the right way to do this” explanations from tutors and teachers was something I always struggled to retain. I think that rationality and logic also play a part in why some things take longer for me to grasp than expected, because I need to make those logical connections that A = B and B is C so C = B (hopefully that makes sense).',
//       ],
//     },
//     {
//       type: 'text',
//       heading: 'Strengths and Limitations',
//       isSubHeading: false,
//       body: [],
//     },
//     {
//       type: 'text',
//       heading: 'A Driven Work Ethic... Most of the Time',
//       isSubHeading: true,
//       body: [
//         'After studying through university while living at home for roughly 4 years my mother has seen me undertake a large number of assignments and prepare for numerous tests/exams, one thing that she has reiterated multiple times over those years is my ability to stay motivated and driven towards the completion of my work. This however is going to be one of the first double edged swords mentioned in the introduction as i find that my motivation and drive towards learning and work in general comes from two places:',
//         'Like many, one is a passion for what I am doing. In situations where I enjoy the work or learning that I am undertaking then I find it quite easy spending an extra several hours perfecting my task towards the best it could be, this was apparent throughout my time at university (you can see an example of my performance in classes I was interested in against one I wasn’t below). Several courses at university such as Advertising and Promotion would spark an unknown interest and enjoyment which ultimately led to higher engagement and naturally an increased amount of effort in my work and learning, as expected this would also lead to a better grade by the end of the semester. The second factor that drives my motivation is deadlines. If I have a mandatory piece of work or learnings to achieve by a set date then I am certain that I can adequately plan my time to achieve my task to a sufficient degree (rarely to the same degree as work I enjoy however), the interesting thing I have noticed over my studies however is the fact that if I would achieve a good grade for a piece of work or a course that I enjoyed (such as an A for example) and also received the same grade for a piece of work or a course I did not enjoy as much, I would feel far more rewarded and greater satisfaction towards the grade for the enjoyable work/course over the dull work/course.',
//       ],
//     },
//     {
//       type: 'image',
//       ref: './grade-snippet.png',
//       annotation:
//         "Course structure and teaching staff had a lot to do with my lack of engagement in Enterprise systems, which was sad because the general topic's were quite interesting",
//     },
//     {
//       type: 'text',
//       heading: '',
//       isSubHeading: true,
//       body: [
//         'The caveat to these leading factors of my motivation and drive is what happens when neither are apparent (this caveat does not usually relate to my work life rather my personal life). In situations like this, where something does not particularly engage me and does not have a finite time limit to complete, then I would consider myself to be as lazy and procrastinating as possible. The most evident example of this would be getting my drivers license, or rather lack of. As I have always lived as a central city boy and have no immediate desire to drive, I have no immediate motivation to get my license, some would say that is fair justification and reasoning towards not having a license however I know that one day I will want a license and at that point be stuck behind a several month wall before I can move on to the next stage towards a full license rather than restricted. Thankfully, I do not think this caveat will apply to my learnings here at dev academy, because like most teaching institutions we do have deadlines for our work, but more importantly tech related learning is generally quite interesting for me.',
//       ],
//     },
//     {
//       type: 'text',
//       heading: 'Working With Others and Leadership',
//       isSubHeading: true,
//       body: [
//         'Starting in high school through theorising and creating multiple pieces of drama and acting work, and then in university through the relatively reinforced group work model, I’ve learned that I tend to thrive when working with others compared to working individually. There is something about having several people working towards a common goal, where ideas and information can be bounced off of one another that I’ve found allows for a degree of learning that I could not achieve individually. Assuming that I had a team in university that had a remotely similar work ethic rather than someone trying to ‘cruise through’ off the work of other people (which sadly would happen from time to time in randomly assigned university groups), I would likely see a drastic rise in my engagement and commitment to the work that we were undertaking. Although I do not have any evidence of this as I no longer have access to any of my team/peer reviews after finishing university, I know that the likelihood of producing outstanding work would drastically increase when placed in a team environment. One example of this that I am proud of from university was within a group of four others where our class was given six weeks to produce and then present a three-year marketing plan for McDonalds (our classes client which would change every semester), provided with real statistics and guidance from the McDonalds head of marketing our group was able to produce a sustainability campaign and a top 3 result within the class. Coincidentally several of our ideas from our campaign showed up in a McDonald’s marketing campaign six months later. Subsequently this class was also Advertising and promotion mentioned in the previous strength.',
//         'My love of teamwork environments over the years has also naturally led me to develop some valuable leadership skills that have also been recognised (again with no evidence due limited access to previous university files/material). While several times throughout university I would be elected as a group leader for bodies of work, I would describe leadership as way of acting and participating rather than a designated role (everyone can display leadership regardless of role or rank). Simply put some of these skills revolve around: being inviting towards discussion and ensuring everyone gets opportunities to convey their ideas or points of view, playing the devils advocate when trying to pinpoint potential holes in our own ideas/concepts, being able to step back and view a problem from perspectives beyond your own, ensuring that each member is on the same page and caught up, as well as general organisation skills.',
//         'One limitation that I have developed over some of these experiences is through struggling to align with different work ethics. Once or twice in my experiences within group work we have had a group member who I would consider to have a relatively laissez-faire approach to work, one that favours minimal planning and sometimes leaving work to the last minute (yet may still produce bodies of work in equal quality to mine). There is no right or wrong way in producing an outcome in some of these group environments and there have been times when my need for organisation (due to heavy workload over that period or something else) has clashed with their laid-back approach. I think some issues I’ve had around this however derive from the group not initially being on the same page regarding how we want to conduct our work and ultimately run our group and could have easily been avoided, at the time however these were overcome through a decent one on one discussion which allowed both of us to see our dilemma from the others perspective and resulted in a compromise of both approaches that would suit all parties within the group.',
//       ],
//     },
//     {
//       type: 'text',
//       heading: 'Task Organisation and Analysis',
//       isSubHeading: false,
//       body: [
//         'Now before I get into organisation as a strength of mine, I would like to give a disclaimer that when I say organisation I’m talking about in my work, not necessarily outside of that. Whether it’s a mild case of undiagnosed OCD or not, I enjoy the aspect of being organised towards my work, it’s something that I wouldn’t say I’m the best at as everyone would conduct their organising differently but the amount of clarity it can bring to me is valuable enough for me to state it as my last strength. Specifically, when working in a group environment where there is potentially a lot going on I gain a lot of satisfaction from sitting down with the team and breaking our task down on a whiteboard (or two). Tying into my value of rationality and logic, separating a task and analysing the different subcomponents of that task, whether through simple brainstorm or something more elaborate, I find brings a lot of clarity to a team and really allows us to be on the same page about our approach. As stated, one limitation to this is that it sadly doesn’t stem out into my personal life very much but for the sake of my work life its invaluable. The only other potential limitation I find with this skill is that the depth of my organisation is much larger when working in a group compared to individually, while it would likely be of great benefit to myself to go as deep when working on my own, I find that the extra level of depth apparent in a group environment stems from the greater need to have everybody in sync with one another.',
//       ],
//     },
//   ],
// }

export default function Post() {
  const { id } = useParams()

  const [returnedPost, setPost] = useState({}) // capture the retrieved post in state

  useEffect(() => {
    function getPost(id) {
      try {
        fetch(`/api/post/${id}`) // call ExpressJS server side end point to access db
          .then((res) => res.json())
          .then((post) => {
            setPost(post[0]) // response is wrapped in array, take first
          })
      } catch (err) {
        console.error(err)
      }
    }
    getPost(id)
  }, [id])

  // add logic to wait (do a loading screen) until returnedPosts or another flag states the value has been retrieved
  if (!returnedPost.id) {
    return <div>LOADING..................................</div>
  } else {
    return (
      <div className="postWrapper">
        <div className="postTitle">
          {/* conditionally display a depricated banner - need to JSON.parse the tags*/}
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
}
