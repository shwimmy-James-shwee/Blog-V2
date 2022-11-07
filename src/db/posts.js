exports.seed = (knex) =>
  knex('posts').insert([
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
  ])

let x = [
  {
    type: 'text',
    heading: '',
    isSubHeading: false,
    body: [],
  },
  {
    type: 'image',
    ref: '',
    annotation: '',
  },
  {
    type: 'iFrame',
    src: 'https://codepen.io/james-pearce-the-scripter/embed/QWdzvGX?height=265&theme-id=dark&default-tab=html%2Cresult&user=james-pearce-the-scripter&slug-hash=QWdzvGX&pen-title=QWdzvGX&name=cp_embed_4',
    annotation: '',
  },
]
