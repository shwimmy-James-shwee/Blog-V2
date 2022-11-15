import './componentStyles/Post.css'
import { Link, useParams } from 'react-router-dom'

const returnedPost = {
  id: 3,
  name: 'Emotional Intelligence',
  datePublished: '26/04/2021',
  postType: 'Emotional',
  blurb:
    "A brief explanation of Emotional Intelligence (EQ) and it's importance",
  tags: {
    new: false,
    depricated: false,
  },
  content: [
    {
      type: 'text',
      heading: 'What Is Emotional Intelligence',
      isSubHeading: false,
      body: [
        'When describing EQ (Emotional Quotient or commonly Emotional Intelligence) I would often describe it as sibling to IQ (Intelligence Quotient). Emotional intelligence is apparent in the building of all strong relationships with others but is also equally apparent in helping strengthen the relationship you have with yourself and your own emotions or feelings, ultimately fostering the ability to rationalise these emotions in order to make informed decisions and more closely align action with intention. Specifically, EQ guides us to understand, use, and manage one’s own emotions, foster effective communication, diffuse conflict, overcome challenges, relieve stress, and to show empathy.',
      ],
    },
    {
      type: 'orderedList',
      preText:
        "As stated by HelpGuide's mental health article on the topic, Emotional Intelligence is often defined by four attributes:",
      items: [
        'Self-Management or the ability to control and manage impulsive feelings and emotions in a healthy way, take initiative, honour commitments, and adapt to external changes.',
        'Self-Awareness regarding the recognition of one’s own emotions and their effect on thought and behaviour, self-confidence, and recognition of strengths and weaknesses.',
        'Social Awareness with focus on empathy, understanding the needs, concerns, and emotions of others, awareness of emotional cues, social comfort, and recognition of group power dynamics.',
        'Relationship Management towards developing and maintaining good relationships, clarity in communication, ability to inspire, managing conflict, and working with others.',
      ],
    },
    {
      type: 'text',
      heading: '',
      isSubHeading: true,
      body: [
        'Something regarding soft or human skills that I have stated in previous blog posts to varying degrees is how the development of these skills have no end, continual improvement is a factor that will always be apparent in your journey, a journey in which combinations of new people and environments will never cease to present themselves. Because of this I personally believe that, while it is important to reflect on how you yourself display the above attributes towards others, an equal amount of learning can come from reflecting on how others display these attributes towards you.',
      ],
    },
    {
      type: 'text',
      heading: 'How Is It Different To IQ?',
      isSubHeading: false,
      body: [
        'While IQ is concerned with how ‘smart’ someone is in their ability to solve problems, use logic, or communicate complex ideas, EQ is a measure of ability in recognizing emotion within yourself and others, and the ability to rationalise and use your awareness of them to guide decisions. EQs ability to identify, evaluate, control, and express emotions is not an alternative to IQs ability to determine academic capabilities, rather intended to co-exist and be built off of one another.',
      ],
    },
    {
      type: 'text',
      heading: 'Why Is It Important',
      isSubHeading: false,
      body: [
        'Whether you describe being successful as success around the workplace or by having a fulfilling life built from fruitful relationships one’s IQ will only ever be one part of the puzzle, with emotional intelligence being the other as a just as vital component with numerous flow-on effects across an individual’s life.',
        'Emotional intelligence effects your work or school performance through its ability to assist in the navigation of your environment’s social complexities and its ability to enable you to motivate and lead others. EQ effects your physical health due to the ability to manage emotions, and in turn manage your stress, which if left un-managed can lead to serious health implications such as raised blood pressure, supressed immune system etc. similarly to physical health, EQ is also important for your mental health. Its common knowledge how unchecked emotions and stress impact mental health which then make you more vulnerable to mental illnesses such as anxiety and depression. An inability to understand these emotions can also leave you with feelings of loneliness and isolation and further develop any mental health problems if they start to impact your ability to form and maintain relationships. EQ is also important for your relationships through enabling better expression of how you feel and the ability to understand how others are feeling, this goes hand in hand with also allowing for effective communication within those relationships.',
      ],
    },
  ],
}

export default function Post() {
  const { id } = useParams()

  //database query based on parm ID
  // loading symbol until returned

  return (
    <div className="postWrapper">
      <div className="postTitle">
        {/* conditionally display a depricated banner */}
        <h2>{returnedPost.name}</h2>
      </div>
      <div className="postContent">
        {returnedPost.content.map((contentBlock, index) => {
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
            const ref = contentBlock.ref
            const annotation = contentBlock.annotation

            return (
              <div className="contentBlock imageBlock" key={index}>
                <image ref={ref} />

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
                {preText !== '' && preText !== undefined && <p>{preText}</p>}

                <ol>
                  {listItems &&
                    listItems.map((item, liIndex) => {
                      return <li key={liIndex}>{item}</li>
                    })}
                </ol>
              </div>
            )
          } else if (contentBlock.type === 'unOrderedList') {
            const preText = contentBlock.preText
            const listItems = contentBlock.items

            return (
              <div className="contentBlock uListBlock" key={index}>
                {preText !== '' && preText !== undefined && <p>{preText}</p>}

                <ul>
                  {listItems &&
                    listItems.map((item, liIndex) => {
                      return <li key={liIndex}>{item}</li>
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
