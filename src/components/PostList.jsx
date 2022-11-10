import './componentStyles/PostList.css'
import DropDown from './DropDown'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const postTypeOptions = ['Technical', 'Emotional', 'Mini-Project']
const postTagOptions = ['New', 'Depricated']

const postsTemp = [
  {
    id: 1,
    name: 'My Values, Strengths, and Limitations',
    datePublished: '15/04/2021',
    postType: 'Emotional',
    blurb:
      'An informal discussion of some of my current personal characteristics',
    tags: {
      new: false,
      depricated: true,
    },
    content: [
      {
        type: 'text',
        heading: 'Introduction',
        isSubHeading: false,
        body: [
          'When asked to reflect on the values, strengths, and limitations that ultimately form the basis of who I am, I tend to find myself digging quite deep into the rabbit hole of how these characteristics affect both my every day and work life, and most notably how these individual characteristics affect one another. This often means that through reflection I notice how one set of circumstances can result in a personal characteristic being a strength, whereas in a different set of circumstances I would perceive that personal characteristic to be a limitation (I.E. the characteristic being somewhat of a double edged sword). Because of this I have decided to not necessarily follow a standard layout for this reflection that many of my cohort may utilise, such as where one may list all their strengths and then subsequently all their weaknesses afterwards. Instead, you will likely notice me taking a blended approach and reflecting on a specific personal characteristic in regard to how it strengthens me and then discussing how that same characteristic can also limit me, this blended approach to values, strengths, and weakness’ may not be apparent for all the points I will discuss but I believe is a better display of my thought process around reflecting on this topic.',
        ],
      },
      {
        type: 'text',
        heading: 'Values',
        isSubHeading: false,
        body: [],
      },
      {
        type: 'text',
        heading: 'Mindfulness',
        isSubHeading: true,
        body: [
          'More recently the idea of self and mindfulness has become somewhat of an important part of our household. While I would say mindfulness is somewhat of a never-ending journey, so far it has taught me (at some times more than others) to take a step back and reflect on a reaction, a thought, or a feeling towards something and allows me to dig down to the root cause for that thought/feeling/reaction in an attempt to understand it, and myself better. One common quote that I heard somewhere years ago that ended up sticking in my mind was “ignorance is bliss”, I would think about how much energy it took up digging to these root causes and the effort required to rationalise them compared to those who would take a thought, reaction, or feeling as a whole truth and then simply move on without a second guess (whether the response was right/justified or not). It took me a while to appreciate how these mindfulness approaches to understanding oneself could allow me to grow and evolve as a person. I wouldn’t specifically say that this value is influenced by my culture more so influenced by my environment, I would however say my environment is influenced by the practices and some aspects of the religions of western Asia.',
        ],
      },
      {
        type: 'text',
        heading: 'Clarity in Communication',
        isSubHeading: true,
        body: [
          'For a while now I have been passionate about clarity and accuracy in communication as we’ve all experienced a scenario where someone has tried to convey a message (either poorly or accurately) yet has been interpreted by someone else in a completely different way, and in worse scenarios, having that recipient getting hung up or confused with a meaning that was not intended. While areas of communication such as this are the origin to my fixation on clarity, now I find that I’m mindful of it all the time, often meaning that I have to pause and think mid-sentence about how I am going to convey my message. I also use this clarity idea to support myself in having fruitful and deeper conversations, ones where both parties have true understanding of each other’s messages',
          'As a side note, tying closely to mindfulness and self-awareness, I also believe clarity in communication is larger than just having a conversation with someone else but also how you communicate with yourself. Emphasising which thought’s you choose to hold on to and believe and which you choose to let pass, and ultimately what you tell yourself.',
        ],
      },
      {
        type: 'text',
        heading: 'Rationality',
        isSubHeading: true,
        body: [
          'I would call myself a very rational thinker, especially as my experiences with the rationality align quite closely with my mindfulness journey and my fixation on clarity in communication. Being rational in my thoughts and approaches towards things is something that most of the time I can’t avoid, and often influences how I learn. One thing I struggled with at university was learning something that wasn’t described to me in a logical way, many of the “I’m not going to explain why (because its outside the scope of the course or similar reasoning) but trust me this is the right way to do this” explanations from tutors and teachers was something I always struggled to retain. I think that rationality and logic also play a part in why some things take longer for me to grasp than expected, because I need to make those logical connections that A = B and B is C so C = B (hopefully that makes sense).',
        ],
      },
      {
        type: 'text',
        heading: 'Strengths and Limitations',
        isSubHeading: false,
        body: [],
      },
      {
        type: 'text',
        heading: 'A Driven Work Ethic... Most of the Time',
        isSubHeading: true,
        body: [
          'After studying through university while living at home for roughly 4 years my mother has seen me undertake a large number of assignments and prepare for numerous tests/exams, one thing that she has reiterated multiple times over those years is my ability to stay motivated and driven towards the completion of my work. This however is going to be one of the first double edged swords mentioned in the introduction as i find that my motivation and drive towards learning and work in general comes from two places:',
          'Like many, one is a passion for what I am doing. In situations where I enjoy the work or learning that I am undertaking then I find it quite easy spending an extra several hours perfecting my task towards the best it could be, this was apparent throughout my time at university (you can see an example of my performance in classes I was interested in against one I wasn’t below). Several courses at university such as Advertising and Promotion would spark an unknown interest and enjoyment which ultimately led to higher engagement and naturally an increased amount of effort in my work and learning, as expected this would also lead to a better grade by the end of the semester. The second factor that drives my motivation is deadlines. If I have a mandatory piece of work or learnings to achieve by a set date then I am certain that I can adequately plan my time to achieve my task to a sufficient degree (rarely to the same degree as work I enjoy however), the interesting thing I have noticed over my studies however is the fact that if I would achieve a good grade for a piece of work or a course that I enjoyed (such as an A for example) and also received the same grade for a piece of work or a course I did not enjoy as much, I would feel far more rewarded and greater satisfaction towards the grade for the enjoyable work/course over the dull work/course.',
        ],
      },
      {
        type: 'image',
        ref: '',
        annotation:
          "Course structure and teaching staff had a lot to do with my lack of engagement in Enterprise systems, which was sad because the general topic's were quite interesting",
      },
      {
        type: 'text',
        heading: '',
        isSubHeading: true,
        body: [
          'The caveat to these leading factors of my motivation and drive is what happens when neither are apparent (this caveat does not usually relate to my work life rather my personal life). In situations like this, where something does not particularly engage me and does not have a finite time limit to complete, then I would consider myself to be as lazy and procrastinating as possible. The most evident example of this would be getting my drivers license, or rather lack of. As I have always lived as a central city boy and have no immediate desire to drive, I have no immediate motivation to get my license, some would say that is fair justification and reasoning towards not having a license however I know that one day I will want a license and at that point be stuck behind a several month wall before I can move on to the next stage towards a full license rather than restricted. Thankfully, I do not think this caveat will apply to my learnings here at dev academy, because like most teaching institutions we do have deadlines for our work, but more importantly tech related learning is generally quite interesting for me.',
        ],
      },
      {
        type: 'text',
        heading: 'Working With Others and Leadership',
        isSubHeading: true,
        body: [
          'Starting in high school through theorising and creating multiple pieces of drama and acting work, and then in university through the relatively reinforced group work model, I’ve learned that I tend to thrive when working with others compared to working individually. There is something about having several people working towards a common goal, where ideas and information can be bounced off of one another that I’ve found allows for a degree of learning that I could not achieve individually. Assuming that I had a team in university that had a remotely similar work ethic rather than someone trying to ‘cruise through’ off the work of other people (which sadly would happen from time to time in randomly assigned university groups), I would likely see a drastic rise in my engagement and commitment to the work that we were undertaking. Although I do not have any evidence of this as I no longer have access to any of my team/peer reviews after finishing university, I know that the likelihood of producing outstanding work would drastically increase when placed in a team environment. One example of this that I am proud of from university was within a group of four others where our class was given six weeks to produce and then present a three-year marketing plan for McDonalds (our classes client which would change every semester), provided with real statistics and guidance from the McDonalds head of marketing our group was able to produce a sustainability campaign and a top 3 result within the class. Coincidentally several of our ideas from our campaign showed up in a McDonald’s marketing campaign six months later. Subsequently this class was also Advertising and promotion mentioned in the previous strength.',
          'My love of teamwork environments over the years has also naturally led me to develop some valuable leadership skills that have also been recognised (again with no evidence due limited access to previous university files/material). While several times throughout university I would be elected as a group leader for bodies of work, I would describe leadership as way of acting and participating rather than a designated role (everyone can display leadership regardless of role or rank). Simply put some of these skills revolve around: being inviting towards discussion and ensuring everyone gets opportunities to convey their ideas or points of view, playing the devils advocate when trying to pinpoint potential holes in our own ideas/concepts, being able to step back and view a problem from perspectives beyond your own, ensuring that each member is on the same page and caught up, as well as general organisation skills.',
          'One limitation that I have developed over some of these experiences is through struggling to align with different work ethics. Once or twice in my experiences within group work we have had a group member who I would consider to have a relatively laissez-faire approach to work, one that favours minimal planning and sometimes leaving work to the last minute (yet may still produce bodies of work in equal quality to mine). There is no right or wrong way in producing an outcome in some of these group environments and there have been times when my need for organisation (due to heavy workload over that period or something else) has clashed with their laid-back approach. I think some issues I’ve had around this however derive from the group not initially being on the same page regarding how we want to conduct our work and ultimately run our group and could have easily been avoided, at the time however these were overcome through a decent one on one discussion which allowed both of us to see our dilemma from the others perspective and resulted in a compromise of both approaches that would suit all parties within the group.',
        ],
      },
      {
        type: 'text',
        heading: 'Task Organisation and Analysis',
        isSubHeading: false,
        body: [
          'Now before I get into organisation as a strength of mine, I would like to give a disclaimer that when I say organisation I’m talking about in my work, not necessarily outside of that. Whether it’s a mild case of undiagnosed OCD or not, I enjoy the aspect of being organised towards my work, it’s something that I wouldn’t say I’m the best at as everyone would conduct their organising differently but the amount of clarity it can bring to me is valuable enough for me to state it as my last strength. Specifically, when working in a group environment where there is potentially a lot going on I gain a lot of satisfaction from sitting down with the team and breaking our task down on a whiteboard (or two). Tying into my value of rationality and logic, separating a task and analysing the different subcomponents of that task, whether through simple brainstorm or something more elaborate, I find brings a lot of clarity to a team and really allows us to be on the same page about our approach. As stated, one limitation to this is that it sadly doesn’t stem out into my personal life very much but for the sake of my work life its invaluable. The only other potential limitation I find with this skill is that the depth of my organisation is much larger when working in a group compared to individually, while it would likely be of great benefit to myself to go as deep when working on my own, I find that the extra level of depth apparent in a group environment stems from the greater need to have everybody in sync with one another.',
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Display: inline VS inline-block VS block',
    datePublished: '23/04/2021',
    postType: 'Technical',
    blurb:
      'A brief explanation of the differences between display: inline, inline-block, and block',
    tags: {
      new: false,
      depricated: false,
    },
    content: [
      {
        type: 'text',
        heading: 'Introduction',
        isSubHeading: false,
        body: [
          'As a disclaimer I first must mention, considering that I have only been coding in HTML and CSS for one week at the time of writing this, most of the content in this blog entry is not first-hand knowledge (being that I knew about it prior to writing). Rather most of the information has been researched and gathered from external sources. i should also note the example code used to aid my explanation originated from w3schools',
          'Within CSS, the display: inline, inline-block, and block statement have several similarities with one another, all being used to format the display of boxes in alignment with the CSS box model (you can read more about that here) . Because these aforementioned statements only focus on the formatting and display of boxes many of the aspects that would be applied to the box model such as border and background colour can still be applied in the same way they normally would. However, one of the main differences between inline, inline-block, and block, besides their general format/display characteristics, is how they interact with given padding and margin statements.',
        ],
      },
      {
        type: 'text',
        heading: 'Display: inline',
        isSubHeading: false,
        body: [
          'Using display: inline, will produce the elements it is applied to “inline” or alongside other elements that surround it. This can be seen below in the placeholder text where “Aliquam” and “veneatis” are both applied to their own box, inline with one another and the rest of the text (the code used to create this can also be seen below).',
        ],
      },
      {
        type: 'iFrame',
        src: 'https://codepen.io/james-pearce-the-scripter/embed/ExZGmKg?height=265&theme-id=dark&default-tab=html%2Cresult&user=james-pearce-the-scripter&slug-hash=ExZGmKg&pen-title=ExZGmKg&name=cp_embed_1',
        annotation: '',
      },
      {
        type: 'text',
        heading: '',
        isSubHeading: true,
        body: [
          'you might have also noticed that within the span.a class the width and height have been set at 100px yet the output does not display this (this is also the same with top and bottom margins), this is one of the characteristics of using display: inline, often meaning that the element can overlap with other text above or below (depending on the texts/other elements spacing and margin)',
        ],
      },
      {
        type: 'text',
        heading: 'Display: inline-block',
        isSubHeading: false,
        body: [
          'Using display: inline-block combines the best of both worlds, allowing one to keep elements “inline” or alongside others, as well as allowing for a set of more precise characteristics such as width and height as well as margins and padding. Below you will notice that the class span.b is identical to span.a, yet now the height and width elements have been honoured and applied.',
        ],
      },
      {
        type: 'iFrame',
        src: 'https://codepen.io/james-pearce-the-scripter/embed/yLgGMdd?height=311&theme-id=dark&default-tab=html%2Cresult&user=james-pearce-the-scripter&slug-hash=yLgGMdd&pen-title=yLgGMdd&name=cp_embed_2',
        annotation: '',
      },
      {
        type: 'text',
        heading: '',
        isSubHeading: true,
        body: [
          'One common use for inline-block is to display a list of items horizontally instead of vertically, such as horizontal navigation links at the top of a website. This can be seen below.',
        ],
      },
      {
        type: 'iFrame',
        src: 'https://codepen.io/james-pearce-the-scripter/embed/oNBJWLe?height=271&theme-id=dark&default-tab=html%2Cresult&user=james-pearce-the-scripter&slug-hash=oNBJWLe&pen-title=oNBJWLe&name=cp_embed_3',
        annotation: '',
      },
      {
        type: 'text',
        heading: 'Display: block',
        isSubHeading: false,
        body: [
          'Display: block is identical to inline-block except excludes the inline elements, meaning that a line-break is added after the element so that no other element will sit next to it. This can be seen below.',
        ],
      },
      {
        type: 'iFrame',
        src: 'https://codepen.io/james-pearce-the-scripter/embed/QWdzvGX?height=265&theme-id=dark&default-tab=html%2Cresult&user=james-pearce-the-scripter&slug-hash=QWdzvGX&pen-title=QWdzvGX&name=cp_embed_4',
        annotation: '',
      },
    ],
  },
  {
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
  },
  {
    id: 4,
    name: 'JavaScript and the DOM',
    datePublished: '01/05/2021',
    postType: 'Technical',
    blurb: 'A brief explanation of JavaScript and the DOM',
    tags: {
      new: false,
      depricated: false,
    },
    content: [
      {
        type: 'text',
        heading:
          'An analogy to help describe the relation of HTML and CSS to JavaScript',
        isSubHeading: false,
        body: [
          'In order to understand JavaScript, and after that the DOM, one must first have a grasp of the relationship between HTML and CSS. In layman’s terms, if someone were building a house then we would consider HTML to be the basic structure of that house, ultimately being made up of the foundations, the walls, the floors, and the ceiling. Within that structure CSS would then be used to beautify and flesh out the house by applying paint to the walls, skirting boards, windows, and setting furniture. In short, HTML provides us with the bare structure while CSS is responsible for making it all look nice and homely.',
          'From here we can then introduce JavaScript, which could be described as all the ‘cool’ features of the house. in regard to the house analogy this could be having spinning ceiling fans, under-floor heating, having the ability to rearrange furniture, or even the ability to renovate the property and remove/add walls.',
        ],
      },
      {
        type: 'text',
        heading: 'The DOM and how you interact with it',
        isSubHeading: false,
        body: [
          'Sticking with the same house analogy for the moment, the DOM or Document Object Model could be likened to a form of blueprint of the house. this blueprint would not show where each component of the house is meant to go yet would rather act as an ordered list of all the resources or components of the house and how they relate to each other. An MS paint example of this can be seen below (I am evidently not renowned for my art capabilities) followed by an actual layout of the DOM.',
        ],
      },
      {
        type: 'image',
        ref: '',
        annotation: '',
      },
      {
        type: 'image',
        ref: '',
        annotation: '',
      },
      {
        type: 'text',
        heading: '',
        isSubHeading: true,
        body: [
          'Moving away from the house analogy, you can see in the photo above the tree like structure of the Document Object Model and the types of nodes within it. While in the context of this blog and the extent of my learning it would be fair to say that there is a direct relationship between the DOM and JavaScript in the way that JavaScript code can manipulate the structure and contents of the DOM and its nodes (whether directly via the console or imbedded in a websites code), in reality it would be best described as a polyamorous relationship. This is because the DOM can be manipulated by other languages such as python in way near equal to JavaScript. This ability to manipulate the DOM is where the magic of JavaScript comes from as it allows aspects of a web page to be modified and manipulated based on a variety of triggers such as clicking or hovering the mouse over an element, and most importantly, without having to reload the page. In the context of the house analogy, this could be compared to being able to move a window or a wall without having to build a whole new house.',
        ],
      },
      {
        type: 'text',
        heading: 'Control flow and loops within JavaScript',
        isSubHeading: false,
        body: [
          'Two important concepts of JavaScript that can’t be ignored is control flow and loops. Control flow can simply be described as the order in which code is executed, a lot of the time this is as simple as code being executed left to right and top to bottom, however at many points in JavaScript one might only want to execute a section of code under certain circumstances. This is known as an if or if/else statement, this would follow the rule that if Y happens then do ABC, or else if X happens then do XYZ. Trying to keep in line with the house analogy for simplicity, an example could be if you were about to leave the house you might first look outside and if it were raining then you would get a coat or else you would get your keys and leave.',
          'Another way that control flow can be manipulated is through loops. As the name “loops” sounds it is concerned with doing an action (or executing code) over and over until a certain condition is met. Again, keeping in line with the house analogy, if you couldn’t find your keys but you know you left them in a jacket pocket then you could use a for loop to say that for each jacket, assuming my keys are not found, then search the jacket, if the “keys are not found” condition is still true then pick up another jacket and repeat. While the application of a for loop in reality is a tad more complex, this is the best way I could describe it to someone not concerned with that reality, I should also note that there is also several more types of loops that differ slightly in their execution and conditions.',
        ],
      },
      {
        type: 'text',
        heading: 'The difference between arrays and objects',
        isSubHeading: false,
        body: [
          'Within JavaScript, in order to store information, one can use arrays and objects. Both of these types of data storage are considered “mutable” which means they can be changed once initially set and they can both also store a collection of data rather than just a single piece. This however is where the similarities stop.',
          'One difference is how objects tend to focus on a specific ‘thing’ that has several properties of its own, each individual property is known as a “key”, and each key has a “value”. For example, the object of pet will have a key of name (with a value of “Rex”), a key of species (with a value of “border collie”), and perhaps a key of interests (with a value of “chasing birds”). Compared to this, Arrays tend to focus on more of a list format, commonly ones that are ordered but can also be used for unordered lists. For example, if I had a list of goals over the holiday’s then I could add “climb a mountain”, “get my license”, “go to the gym”.',
          'When retrieving or modifying data, these two approaches to information storage also differ. In the instance you want to find the value of “name” from the pet object, one would need to use bracket or dot notation such as pet.name or pet[‘name’] (which would return “Rex”). If someone wanted to change that name to fluffy they could enter pet.name = “fluffy”.',
          'Accessing data form arrays on the other hand relies on the concept of zero-based indexing, which refers to counting starting with zero instead of one. Using our array list of “goals” above we would consider “climb a mountain” to be entry zero, while “get my license” would be entry one, respectively these values would be pulled using the name of the array followed by the entry number in closed brackets such as goals[0] or goals[1]. Items within an array can be added or removed from the beginning or end of its list by using push (‘entry’) to add items from the back, pop (‘entry’) to remove from the back, unshift (‘entry’) to add an item to the front, and shift (‘entry’) to remove one from the front (where ‘entry’ is replaced with the information you’re adding or removing).',
        ],
      },
      {
        type: 'text',
        heading: 'Functions and why they are useful',
        isSubHeading: false,
        body: [
          'A Function within JavaScript refers to a section of code that has been designed to perform a specific task but is also only executed when it is “called” or activated by another piece of code or an action. Writing the syntax of a function is relatively simple, starting with the word “function” followed by what you want to call that function, such as “Function1”, and then any data that will be passed from where the function is called from into functions code in parentheses immediately afterwards (with the functions code itself following wrapped in curly brackets). This example would read “Function Function1(data1, data2) {the code to be executed}”. The usefulness of functions and their reusability shines from its acceptance of different data from the calling location, for example in the function above if we were to execute the code “data1 + data2” then data1 and data2 could be replaced with any numbers each time the function is called and thus produce a unique result without having to “hard code” those numbers in.',
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Neuroplasticity and Growith Mindset',
    datePublished: '03/05/2021',
    postType: 'Emotional',
    blurb:
      "Neuroplasticity's benefits and practice, a summary of Growth Mindset, and how they affect me",
    tags: {
      new: false,
      depricated: false,
    },
    content: [
      {
        type: 'text',
        heading: 'Neuroplasticity',
        isSubHeading: false,
        body: [],
      },
      {
        type: 'text',
        heading: 'How Understanding Neuroplasticity Can Benefit People',
        isSubHeading: true,
        body: [
          'There are many advantages of brain neuroplasticity for those that can understand and practice its principles, ultimately unlocking and allowing your brain to adapt, change, and be malleable to new information or teachings. As stated by VeryWellMind, being able to harness the power of neuroplasticity can help promote:',
        ],
      },
      {
        type: 'unOrderedList',
        preText: '',
        items: [
          'The ability to learn new things through allowing neural pathways to make new connections.',
          'The ability to enhance your existing cognitive capabilities through helping cement and reinforce those neural pathways.',
          'Strengthening areas where functions are lost or in decline such as in the case of a traumatic brain injury or stroke by teaching the brain to rewire functions so a healthy section of the brain can compensate for the damaged part.',
          'Improvements that can promote brain fitness and memory abilities.',
        ],
      },
      {
        type: 'text',
        heading: 'How To Engage With And Increase Neuroplasticity',
        isSubHeading: true,
        body: [],
      },
      {
        type: 'unOrderedList',
        preText:
          'PositivePsychology have also recommended several ways in which neuroplasticity can be enhanced, these include:',
        items: [
          'Intermittent fasting: by increasing synaptic adaptation, promoting neuron growth, and improving overall cognitive function.',
          'Traveling: by exposing your brain to novel stimuli and new environments your brain can open up new pathways and activity in the brain.',
          'Using mnemonic devices: memory training can enhance connectivity in the prefrontal parietal network and prevent some age-related memory loss.',
          'Learning an instrument: which can increase connectivity between different brain regions and help form new neural networks.',
          'Non-dominant hand exercises: in order to form new neural pathways and strengthen the connectivity between neurons.',
          'Reading fiction: increases and enhances connectivity in the brain.',
          'Expanding vocabulary: which activates the visual and auditory processes as well as memory processing.',
          'Creating artwork: can enhance the connectivity of the brain at rest, which can boost introspection, memory, empathy, attention, and focus.',
          'Dancing (my favourite): reduces the risk of Alzheimer’s and increases neural connectivity.',
          'Sleeping: encourages learning retention via the growth of the dendritic spines which act as a connection between neurons and help transfer information across cells.',
        ],
      },
      {
        type: 'text',
        heading: 'Growth Mindset',
        isSubHeading: false,
        body: [],
      },
      {
        type: 'text',
        heading: 'What Is A Growth Mindset And Why Is It Relevant?',
        isSubHeading: true,
        body: [
          '"Why waste time proving over and over how great you are, when you could be getting better?" - Carol Dweck, Mindset',
          'Starting with the more traditional perspective on the mind (and the opposite to a growth mindset), a fixed mindset is a state of mind in which an individual deems there is no capability to improve and the knowledge that you have is finite and set in stone. People with a mindset like these tend to react negatively when faced with seemingly un-conquerable challenges as they perceive no potential avenue to overcome it, and ultimately tend to give up more easily rather than persevere. The opposite to this, which is closely aligned with neuroplasticity is a growth mindset, this mindset takes all these unfavourable characteristics of a fixed mindset and flips them on its head. This is a mindset in which one believes in themself and most importantly embraces the ability to change, learn, develop, and grow as a person. Like with many things having a growth mindset is not a simple yes or no question, rather more of continuum based on mental thought processes and more so how they translate into action. Assuming perfect alignment between an individual and the theories/concepts of a growth mindset one would face the same challenges deemed as un-conquerable by others with excitement and drive to utilise that challenge as a chance to improve and grow through hard work and practice.',
          'Within the research world of the growth mindset, a large number of studies have been conducted within school students. From these it has been found (in accordance with information from Mightifier) that the process in which fixed and growth mindset students process challenges is vastly different. Those with a fixed mindset were afraid to fail or make a mistake often meaning they would get scared to even try, as an opposite those with a growth mindset approached challenges as a natural part of learning and would attempt to process their mistakes and make correction.',
          'Growth mindset has massive relevance to all regardless of age or occupation with learning and personal development being a never-ending process, there will always be new ways to work and interact in our quickly changing world and a growth mindset allows us to catch those changes as they’re thrown at us, put them in our back pocket, and run with them. Praise the process not the outcome.',
        ],
      },
      {
        type: 'text',
        heading: 'How These Will Affect Me and My Learning Journey',
        isSubHeading: false,
        body: [
          'Personally, one of the most evident ways I have unknowingly taken a growth mindset-like approach during my time at EDA and throughout learning web development is by looking back on what I’ve achieved after each week. For example, after the second sprint on learning HTML and CSS I looked back at the website I had made and thought “wow, I couldn’t have done any of this a week ago, look how far I’ve come in just a week”. I believe that thought processes like this help me focus and continue my learning, knowing that the next week I’ll be learning JavaScript and then might be able to do even more cool things, and from that hopefully allow me to continue that pattern of continually trumping myself.',
          'Beyond the concept of a growth mindset, I think one element of the research for this blog post that will have a notable influence on me is the idea of “not yet” and its application around times I am stuck or facing a block in what I’m doing. At times like this when I may have spent over an hour trying to get a piece of code to work, and more so when this starts to frustrate me, I can reflect on the progress I’ve made and tell myself that while it doesn’t work, it more importantly doesn’t work “yet”. A change in language around how I speak to myself gives a subtle nudge to remind me that my code might not work now, but importantly doesn’t mean it won’t work in the future, especially with all the avenues for support I have around me.',
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'Problem Solving',
    datePublished: '07/05/2021',
    postType: 'Emotional',
    blurb:
      'Some of my experiences with problem solving and my confidence in problem solving techniques',
    tags: {
      new: false,
      depricated: true,
    },
    content: [
      {
        type: 'text',
        heading: 'One of my experiences with problem solving',
        isSubHeading: false,
        body: [
          'One example of my experiences with problem solving, specifically in regard to a relatively simple problem, was during this web development course’s early weeks of foundations in which we had just started learning HTML and CSS. the problem faced was that a section of code, which was not technically wrong or error producing, didn’t achieve what I had intended. At this point in my learning journey my ability to reflect on a relatively large section of code was very rudimentary and time consuming, this along with lack of error message initially resulted in me taking a brute force trial and error approach of incrementally changing, commenting out, and rethinking lines of code. Through this method I managed to narrow down my troublesome code to several lines which I then meticulously read over and over until realising that I had misspelled a class within an element, one simple correction and everything worked perfectly!',
          'Not having a thorough understanding of the code I was writing at the time brought a sense of frustration through knowing I would potentially have to comb over larger sections of code to find the mistakes origin. If anything, this taught me the importance of formatting code with comments, indentations, and spacing, if I had done that adequately I am sure finding the relevant line of code would have been far easier.',
        ],
      },
      {
        type: 'text',
        heading: 'Another experience with problem solving',
        isSubHeading: false,
        body: [
          'Another problem-solving experience I have, one slightly more elegant and not relating to coding was during my previous job. During one of my shifts a customer had come in with a faulty product and rightfully wanted to get it replaced under warranty, the catch however was that the moment they entered the store they were already rather disgruntled and furthermore weren’t happy when informed that the warranty procedure could take 3 to 5 working days to complete. While initially at the time it would appear that the problem in this scenario was the faulty product, after a series of listening and looping with the customer I found that in reality the real problem for the customer was that they would have to go 3 to 5 days without the product, which was something they weren’t prepared for.',
          'With this problem not being within the world of coding, many of the resolution techniques discussed below didn’t apply. That being said in a similar fashion to conferring with peers or coaches, and after putting in considerable effort to try and diagnose the products faults and see if they were fixable on the spot, I ultimately discussed the issue with my colleague and any options available to reduce the warranty process. After several iterations of toing and froing the product was ultimately replaced an hour later.',
          'Ultimately, while it was my job, it was a lot of effort going the extra mile to get this problem resolved sooner rather than later. that being said, being able to see the mood of the customer change from grumpy and disgruntled on arrival to being thankful for my effort after explaining, attempting, and achieving to shorten the process was rewarding. This is what I think made this problem resolution elegant, the fact that given the negative circumstances when the customer entered the store, by the time they left the outcome was the best it could be.',
          'Tying this back to coding, and problem solving in general, id say the main thing I took out of this experience was that a problem is not always as it seems. As stated, on arrival it would be easy to say the problem was the faulty product, which in part it was, however more importantly was that the faulty product was a driver of the larger problem of the customer having to go without it for an extended period of time. Being able to understand this driver meant that not only the initially apparent problem was resolved but more importantly its root cause, emphasizing the need to sometimes take a step back from a problem, look at the whole picture, and decipher whether you are looking at the problem, or just the portion of it that is being presented.',
        ],
      },
      {
        type: 'text',
        heading: 'My confidence and experience with problem solving techniques',
        isSubHeading: false,
        body: [],
      },
      {
        type: 'text',
        heading: 'Pseudocode',
        isSubHeading: true,
        body: [
          'Currently I would consider my use of pseudocode to be minimal, and when it is used it is not used for problem solving per say. The scenarios I use pseudocode tend to be where im leaving my code unfinished or buggy for a period of time (such as if I decided to finish for the day and pick it up again tomorrow), because of this its more used as a book mark for my thought processes before stopping work so that I can refresh and pick those up when I come back to it later without having to dig through the code and try and figure out where I was going or what I was up to.',
        ],
      },
      {
        type: 'text',
        heading: 'The rubber ducky method',
        isSubHeading: true,
        body: [
          'The rubber duck method is something up to this point that I’ve never used, and also never heard of before researching it for this course. From that research I understand the rubber duck method to be a form of “sound/black board” where you talk out aloud your thought process or code step by step in order to try find any holes in your thinking or logically where bugs may be arising from. As stated, if never used this concept for problem solving, however during several of my experiences in learning JavaScript I would do a similar practice of reading line by line out loud to try and understand what the sample or “teachers” code was doing.',
        ],
      },
      {
        type: 'text',
        heading: 'Reading error messages',
        isSubHeading: true,
        body: [
          'Reading error messages is something I tend to look at very rarely at the moment, mainly being an avenue of exploration when other methods aren’t working out for me. Reading error messages is also often used along side a google search in order to understand what the message actually means, as with my level of expertise, the vast majority of error messages shoot right over my head and I have no clue what they mean.',
        ],
      },
      {
        type: 'text',
        heading: 'Console.logging',
        isSubHeading: true,
        body: [
          'Console logging would be one of my lesser used tactics for problem solving, however used more often than error messages. Most of my use of console.log is more often oriented towards just checking that my function or query outputs what I want it to output before I code that output to be sent to or returned to wherever its needed. Because of this I wouldn’t necessarily say that I use this feature as a way to problem solve, more so as a way to ensure that I don’t have to problem solve now or later.',
        ],
      },
      {
        type: 'text',
        heading: 'Googling',
        isSubHeading: true,
        body: [
          'Googling would be one of the first things I do when approaching a small problem that I know (or expect) google will answer quickly and simply. The types of problems I use google to help overcome are usually small such as googling a specific piece of code to check I have the correct syntax (like whether it uses ‘:’ or ‘=’, or ‘[]’ instead of ‘()’). Besides that, I would also use google to search for new code statements I haven’t used yet but can easily explain such as searching “JavaScript code to detect a left click”. Most of the time these simple searches can produce a quick and accurate result.',
        ],
      },
      {
        type: 'text',
        heading: 'Trying something',
        isSubHeading: true,
        body: [
          'Trial and error is one of the more common ways I approach a problem in circumstances where i have several ideas regarding how I could go about solving that problem. This trial and error approach would first see me trying most or all of my potential approaches before moving on to another problem solving technique if nothing came from that.',
        ],
      },
      {
        type: 'text',
        heading: 'Asking peers or coaches for help',
        isSubHeading: true,
        body: [
          'While I would definitely consider asking peers and coaches for help, I must say this is one of approaches to problem solving I use the least. My lack of using these support avenues is not out of fear or anything similar but rather about efficiency. I tend to save using these avenues for problems that can’t be overcome by any of the other methods mentioned in this blog post, while the quality of support is greater than alternatives, it’s a very time dependent option in which ill need to wait for a peer or coach to get a grasp on my problem, and then wait for a response after that. The way I see it is that If I can get the solution I need faster, and without disturbing someone else, then I will use that avenue, and then return to these options if that doesn’t work out. Much of my approach to this technique relates around the current remote work environment, in a scenario where I have a peer or coach available, and in close proximity (such as on campus or in the office), then I am much more inclined to incorporate this technique earlier rather than later.',
        ],
      },
      {
        type: 'text',
        heading: 'Using reflection to improve my process',
        isSubHeading: true,
        body: [
          'The majority of my reflections around a process I’ve undertaken don’t relate to a problem-solving process, rather a reflection towards an overall work process regarding work that’s been completed or is to be completed. For example, while learning technical aspects of this course I often realised in retrospect that a specific task has taken longer and been harder than expected, from this reflection I then attempt to adapt how I plan my future daily or weekly work process in order to accommodate for these variances, and ultimately allow myself some extra time to work through tasks if that scenario were to arise again. This also helps prevent frustration I often face when a task does in fact take significantly longer than expected.',
        ],
      },
    ],
  },
  {
    id: 7,
    name: 'Reflection of Foundations Core Teachings',
    datePublished: '14/05/2021',
    postType: 'Emotional',
    blurb:
      'A reflection of my journey through the core teachings of foundations',
    tags: {
      new: false,
      depricated: false,
    },
    content: [
      {
        type: 'text',
        heading:
          'Three things I have learned about myself and my ego from the core learning',
        isSubHeading: false,
        body: [
          'I think I have deepened my understanding of my erratic thought processes around the quality of work and comparing myself with others, often looking at others work who have prior coding experience and comparing it to mine (in which prior to this course, I had zero coding experience) and somewhat belittling or undermining myself and my work.',
          "leading on from the first point, being able to identify when my self-conscious thoughts are bouncing all over the place and taking a moment to reflect and rationalise these thoughts has been something I've further developed, in the case above this would be seen as trying to remove my peers work from my mind and comparison all together and instead focusing on how far I've come and how much I have achieved in such a little time. In other words, comparing my past self with my current self instead of my peers with my current self.",
          'something I\'ve learned that is completely new rather than built upon a pre-existing foundation is the concepts around neuroplasticity and growth mindset. One thing I\'ve specifically taken out of these teachings is the growth mindset idea of "not yet". This idea is something that I have thought about several times throughout dealing with challenging or troublesome code, which has helped me divert my thinking away from a concrete view of "this code doesn\'t work" towards "it doesn\'t work yet". This change in mindset often has acted as a mini energy booster, allowing me to push a little bit harder as in many situations, there has only been one small aspect of my code not working that retrospectively was quite an easy fix.',
        ],
      },
      {
        type: 'text',
        heading:
          'The role of values, empathy and self awareness in learning and programming',
        isSubHeading: false,
        body: [
          "I think that programming in general (and definitely my approach towards it) has strong collaboration elements to it, whether that is working directly with others within your team to develop a specific application or through communicating and discussing with your client or boss about how an application should be made or its required features. Because of this, there is a strong need for human interaction where I think understanding ones (and potentially others) values and having an ability to empathise with them is vital in order to foster a projects success and ease in navigating its creation process. I feel like some (and perhaps me to a degree at some point in time) view coding like some hacker sitting in the dark with five monitors furiously smashing their keyboard for hours on end when in reality, this is far from the truth. I believe that self-awareness and the ability to reflect in contexts such as this are also vital, self-awareness being around how effective a teams dynamics may be or how your approach to interactions and collaboration blends with someone else's. Reflection is also crucial so that one can look back and reevaluate all of the above in a context outside where it has been implemented.",
        ],
      },
      {
        type: 'text',
        heading: 'What has surprised me the most about the core learning',
        isSubHeading: false,
        body: [
          "If I had to sum up what I was surprised about core learning, I would say that I was surprised with how much I was surprised. Coming into this course I had expected a lot of the core teachings to be around concepts that I was already relatively strong in and knew about, while this was true for much of the teachings, the number of things I didn't know, and more notable the amount of stuff I clearly needed reminding and reinforcing of were greater than expected and often allowed those concepts to be developed with greater understanding. some of these for example, were around mindfulness and aspects of the practice I had forgotten.",
        ],
      },
      {
        type: 'text',
        heading: 'The most challenging aspects of the core learning',
        isSubHeading: false,
        body: [
          "I wouldn't say a lot of the core learnings were challenging at all for me. If anything, I would say the research towards mindfulness was closest to this as my personal journey with mindfulness had definitely seen the definitition of what i conisder to be mindfulness to somewhat warp around my personal use of it and my circumstances, taking a step back to reevaluate what mindfulness is truly defined as meant that it had a certain degree of clashing with my own definition and perhaps required a little bit of overwriting.",
        ],
      },
      {
        type: 'text',
        heading:
          'Why i think a web development bootcamp is spending so much time focusing on core learning',
        isSubHeading: false,
        body: [
          "It is vital! It's virtually impossible to go about your work within a business without interacting with others, and the degree of technicality that comes with the role often means that these interactions and collaborations have to be well refined to ensure a whole party is on the same page. Technical skills are much easier to develop than these core skills once in the job, so having a foundation of core skills gives an invaluable edge into the effectiveness of a team.",
        ],
      },
      {
        type: 'text',
        heading:
          'Does the time spent studying core learning feel like a waste of time? Should I have just used that time to practising programming instead?',
        isSubHeading: false,
        body: [
          "Not at all. As stated, I felt I had a relatively decent grasp on many of the emphasised core skills before coming into this course. Because of this, I undoubtedly knew the benefits and importance of having these skills within the workplace. These skills were also something I had been developing throughout university, when working in groups with others who didn't necessarily have such a firm grasp on these skills, there was a clear impact on the flow of collaboration.",
        ],
      },
    ],
  },
  {
    id: 8,
    name: 'My Learning Plan',
    datePublished: '16/05/2021',
    postType: 'Emotional',
    blurb: 'A breakdown of how I handled learning while at EDA',
    tags: {
      new: false,
      depricated: true,
    },
    content: [
      {
        type: 'text',
        heading: 'Pre-Bootcamp Learning Plan',
        isSubHeading: false,
        body: [],
      },
      {
        type: 'text',
        heading: 'Long-term goals/Career pathway',
        isSubHeading: true,
        body: [
          'While I have no specific destination or job I hope to land post dev academy, one of the most important things for my future pathway is ensuring personal development. A part of myself holds a lack of confidence in being able to dive headfirst into a coding heavy role which I believe is based on fear originating from my failure to learn coding in the past and my self conscious comparisons with other peers within the course regarding the quality of their outputs. My studies at university had geared me up towards a more strategic and design approach to the tech sector rather than a hands-on coder. Based on this, part of me wants to use these dev academy skills to help facilitate that approach, however, with past failure to find a job in this realm for someone with no experience, I feel I must reevaluate my approach and perhaps face my fears of getting my foot in the door through the more hands on coding approach. Ultimately I do hope that my time on campus with course staff and peers will help me discover the avenues i have open to me.',
        ],
      },
      {
        type: 'text',
        heading: 'Estimated biggest strengths and limitations in Bootcamp',
        isSubHeading: true,
        body: [
          'Quite similarly to my learning plan at the start of foundations (found below), I still believe my strongest set of skills throughout Bootcamp will be my ability to work with others and collaborate, its a skill that has been recognised in the past and one I hope to utilise and build on throughout bootcamp. With my struggle to learn coding at university in the past (all be it, in a vastly different learning environment), I fear that a limitation of mine will be keeping up with others technical ability. While reflecting on this fear I can rationalise that that is not likely to be the case, my previous experiences do hold a somewhat firm grasp on the preconception i have of myself. This idea of "keeping up with others" is not regarding getting behind on course work, more so in environments such as peer coding where my approach to a section of code may be unorthodox or more complicated than it needs to be, or perhaps I may get simple syntax wrong which slows down the coding process.',
        ],
      },
      {
        type: 'text',
        heading: 'Estimated biggest non-technical challenge in Bootcamp',
        isSubHeading: true,
        body: [
          "I think one of the more likely challenges I will face is aligning my style of collaboration and group work with others, as it is something that has tripped me up in the past at university. However, considering my peers (as far as I can tell from foundations) are far more engaged than some of my peers were at university, I believe that this, on top of ensuring we kick group work off all on the same page, won't be a significant issue.",
        ],
      },
      {
        type: 'text',
        heading: 'Human skills I would like to see developed through bootcamp',
        isSubHeading: true,
        body: [],
      },
      {
        type: 'text',
        heading: '',
        isSubHeading: true,
        body: [
          'As stated in my initial learning plan, I would still like to develop my public speaking skills as I feel they have become a tad rusty in the last year or two. Besides this, I would also like to further develop my articulation skills when conveying ideas to others, stripping the filler to create clear, concise conversation. Self-awareness would be another skill I hope to hone as I feel confident when self-awareness is focussed solely on myself but less so when practising self-awareness in contexts of interacting with others.',
        ],
      },
      {
        type: 'text',
        heading: 'Expectations from the Bootcamp team',
        isSubHeading: true,
        body: [
          'I think patience is something I would expect and value from the Bootcamp team along with an understanding of students different capabilities. I also think this goes hand in hand with the ability to listen (like in our listening and looping exercises) to our queries or concerns and assist in whatever way feasible to overcome our challenges.',
        ],
      },
      {
        type: 'text',
        heading: 'Expectations of myself through Bootcamp',
        isSubHeading: true,
        body: [
          'I would expect timeliness and punctuality from myself, being on time and ready to learn when the time comes. Furthermore, starting and completing work as soon as possible in order to allow a buffer period for work taking longer than expected. I would also expect myself to have my full attention towards my learnings, meaning that I am well-rested, nourished, and am on top of my well being to the best of my ability.',
        ],
      },
      {
        type: 'text',
        heading: 'Pre-Foundations Learning Plan',
        isSubHeading: false,
        body: [
          'My long-term goal in a nutshell would be working in a personally enriching role with a company that cared about my personal development. By personally enriching I mean a job/role that worked towards delivering multiple types of projects, with a decent amount of variation, variation that would allow me to apply and learn skills in different contexts. The best example I could think of to help me explain my thinking would be along the lines of a consulting job, or working on projects alongside a project manager, one where I would have different challenges placed in front me, and more importantly one that didn’t have me heading into the office to compete the same work from 9-5 for 5 years. Personal development is another important factor for a career path, I want to know that through my time with a company I will be able to grow as a person for the better.',
        ],
      },
      {
        type: 'text',
        heading: 'Long-Term Goals',
        isSubHeading: true,
        body: [],
      },
      {
        type: 'text',
        heading: 'My View Towards How I Learn (Strengths/Limitation)',
        isSubHeading: true,
        body: [
          'Discussed more in depth in my values, strengths, and limitations blog post, my strengths around learning would be my commitment to excel when I’m interested and engaged in what I’m doing. For example, I really enjoy creating my website and happily spend hours on end trying to get it closer to what I envision for it. On the other hand, tasks like “spend 10 hours learning HTML and CSS” present them selves as a massive daunting hill to climb and after several hours started to become tedious and less engaging. these scenarios are definitely less likely to produce work that I would consider I exceled at, yet I also have a strong commitment towards completing the work in the given time frame regardless (really driven by a deadline), just perhaps not to a standard as high as if I were engaged.',
          'Another skill I would say I have is knowing when to reach out for help. I am comfortable to research and perceiver for a while in an attempt to overcome what I’m stuck on but equally I have no trouble reaching out when that doesn’t produce any results, the way I see it is why would I spend two hours trying to overcome a problem if I can reach out to my peers/teaching staff and discuss the problem with them. In the worst-case scenario, I would do both, and conduct my research while I wait for a reply.',
          'One of my main limitations relates quite closely to the first strength I talked about. That being procrastination when I am not engaged and have deadline further away than the time it will take to complete the task. There is actually a term for this known as Parkinson’s law which states that the time to complete work expands to fill the time allotted. In my case however, when not engaged in the task, this rarely means it will be completed to a higher standard and instead incorporates more procrastination.',
        ],
      },
      {
        type: 'text',
        heading: 'What Im Looking To Get Out Of The Course',
        isSubHeading: true,
        body: [
          'Without patting myself on the back too much I would actually say that I am quite strong in the human skills front. I have always excelled in work when that includes working with others (evident through my feedback and grades from school and university), which was ultimately built off of my relatively extensive involvement in the performing arts through my later high school years. My family’s journey with mindfulness had also incorporated a decent amount of focus on emotional quotient (intelligence) which I think has been a great asset in this field. That being said these skills are ones of continual improvement with no limit so naturally I believe this will develop for the better throughout my time at EDA. If I was to give a specific skill however I would probably like to build on my presentation/public speaking abilities as I feel these have become a bit rusty recently.',
          'The main focus for myself at EDA is definitely the technical skills as from my experience my lack of experience within the tech sector (at the lower entry level end rather than my skills based on strategic and design studies) have been a limiting factor in my ability to find work, which is at the most basic level, is the reason I signed up to EDA.',
        ],
      },
      {
        type: 'text',
        heading: "How I Will Manage Workload, And What Happens If I Can't",
        isSubHeading: true,
        body: [
          'I think firstly it’s important to understand the weeks workload and plan my Monday to Friday in accordance with that, this naturally allows a buffer of the weekend if anything is taking longer than expected or I’m struggling with work. having a broken-down plan like this helps enforce a routine to ensure that I’m eating well, getting enough sleep, and ultimately have the best chance physically to work productively and safely. I also imagine, based on experience, that when bootcamp starts and we are on campus surrounded by like-minded individuals and ‘more direct’ or easily accessed support avenues that my main limitation of lack of engagement will diminish.',
          'At the point that I deem my workload to be building to more than I can handle then I will reach out within 24 hours of making that decision. If I decided the workload was building too much and I didn’t have access to speak in person (for example it was the weekend) then I would reach out via email. Preferably if circumstances allowed then I would meet in person either on the same day or next day so that a more thorough discussion of my work and workload can be discussed.',
        ],
      },
      {
        type: 'text',
        heading: 'What I Expect From The Team',
        isSubHeading: true,
        body: [
          'At the point of reaching out I would expect compassion and understanding from the facilitation team if my work has been building up (assuming the explanation is reasonable), and more importantly would expect the focus of any discussion around the topic to steer towards how we move on from here, and how I can be supported. I would also expect follow ups over the weeks towards how a decided plan of action is working out and whether any further methods or plans to overcome the obstacle need to be put in place.',
        ],
      },
      {
        type: 'text',
        heading: 'Commitments Outside EDA',
        isSubHeading: true,
        body: [
          'I have no planned commitments that may clash with scheduling, however any unplanned activities that must be undertaken (such as bereavement or medical appointments) will be communicated on my part at the earliest I can. I would also expect support regarding catching up or structuring work around these commitments.',
        ],
      },
    ],
  },
  {
    id: 9,
    name: 'Calculator',
    datePublished: '20/05/2021',
    postType: 'Mini-Project',
    blurb: 'A simple calculator',
    tags: {
      new: false,
      depricated: true,
    },
    content: [],
  },
  {
    id: 10,
    name: 'Cursor Art',
    datePublished: '16/05/2021',
    postType: 'Mini-Project',
    blurb:
      'A small art project that allows you to paint the colours of the rainbow',
    tags: {
      new: false,
      depricated: true,
    },
    content: [],
  },
]

export default function PostList() {
  const [posts, setPosts] = useState(postsTemp) //store posts in state for filtering

  const [open, setOpen] = useState({
    //track whether drop downs are open or closed
    postTypeOpen: false,
    postTagOpen: false,
  })
  const [selection, setSelection] = useState({
    // track filter parameters
    postTypeSelection: '',
    postTagSelection: '',
    searchQuery: '',
  })

  const handleOpen = (dropDownTitle) => {
    const key = dropDownTitle.includes('Post Type')
      ? 'postTypeOpen'
      : 'postTagOpen'

    setOpen({
      ...open,
      [key]: !open[key],
    })
  }

  const handleSelection = (option, dropDownTitle) => {
    const key = dropDownTitle.includes('Post Type')
      ? 'postTypeSelection'
      : 'postTagSelection'

    setSelection({
      ...selection,
      [key]: option,
    })
    setOpen({
      postTypeOpen: false,
      postTagOpen: false,
    })
  }

  const clearSelection = () => {
    setSelection({
      postTypeSelection: '',
      postTagSelection: '',
      searchQuery: '',
    })
    setOpen({
      postTypeOpen: false,
      postTagOpen: false,
    })
    document.getElementById('searchQuery').value = ''
  }

  const filteredPosts = posts.filter((post) => {
    const name = post.name.toLowerCase() // THROWS ERRORS
    const blurb = post.blurb.toLowerCase()
    const id = post.id.toString()
    const date = post.datePublished
    const postType = post.postType
    const postNew = post.tags.new
    const postDepricated = post.tags.depricated

    const queryStr = selection.searchQuery.toLowerCase()
    const typeFilter = selection.postTypeSelection
    const tagFilter = selection.postTagSelection

    let strCond = false // block evaulates an entered string filter condition
    if (queryStr === '') {
      strCond = true
    } else if (
      name.includes(queryStr) ||
      blurb.includes(queryStr) ||
      id.includes(queryStr) ||
      date.includes(queryStr)
    ) {
      strCond = true
    } else {
      strCond = false
    }

    let typeCond = false // block evaulates an entered type filter condition
    if (typeFilter === '') {
      typeCond = true
    } else if (postType === typeFilter) {
      typeCond = true
    } else {
      typeCond = false
    }

    let tagCond = false // block evaulates an entered tag filter condition
    if (tagFilter === '') {
      tagCond = true
    } else if (
      (postNew === true && tagFilter === 'New') ||
      (postDepricated === true && tagFilter === 'Depricated')
    ) {
      tagCond = true
    } else {
      tagCond = false
    }

    return tagCond && typeCond && strCond ? true : false
  })

  return (
    <div className="listWrapper">
      <div className="listBody">
        <div className="listHeader">
          <h2>All Posts</h2>
        </div>
        <div className="listFilter">
          {/* <h3>filter</h3> */}

          <div className="FilterSelector">
            <label htmlFor="searchQuery">Search: </label>
            <input
              type="search"
              id="searchQuery"
              placeholder="Enter a query"
              onChange={(e) =>
                setSelection({ ...selection, searchQuery: e.target.value })
              }
            />

            <DropDown //could have just used HTML select?
              handleSelection={handleSelection}
              selection={selection.postTypeSelection}
              handleOpen={handleOpen}
              open={open.postTypeOpen}
              options={postTypeOptions}
              defaultTitle="Post Type &#11167;"
            />

            <DropDown
              handleSelection={handleSelection}
              selection={selection.postTagSelection}
              handleOpen={handleOpen}
              open={open.postTagOpen}
              options={postTagOptions}
              defaultTitle="Post Tag &#11167;"
            />
          </div>

          <button onClick={clearSelection}>Clear Filter</button>
        </div>
        <div className="listContent">
          {filteredPosts.length === 0 && <h4>No posts found...</h4>}

          {filteredPosts.length !== 0 &&
            filteredPosts.map((post, index) => {
              const urlParm =
                post.postType === 'Mini-Project' ? 'Mini-Project' : 'post'
              return (
                <NavLink
                  to={`/${urlParm}/${post.id}`}
                  className="postRow"
                  key={index}
                  post-type={post.postType}
                >
                  <span className="postRowID">{post.id}</span>
                  <h4>{post.name}</h4>
                  <p>{post.blurb}</p>
                  <p>{post.datePublished}</p>
                </NavLink>
              )
            })}
        </div>
      </div>
    </div>
  )
}
