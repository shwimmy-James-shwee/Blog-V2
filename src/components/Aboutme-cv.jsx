import './componentStyles/Aboutme-cv.css'

export default function AboutCV() {
  return (
    <div className="cv-wrapper">
      <div className="cv-contacts">
        <p>P: 021 121 3551</p>
        <p>E: james010@live.com</p>
        <p>GitHub: /shwimmy-james-shwee</p>
      </div>

      <div className="cv-body">
        <div id="personalStatement" className="personalStatement">
          <h2>Personal Statement</h2>
          <p>
            I am a technology consultant at KPMG working as a developer for the
            ServiceNow PaaS. In 2020 I completed a degree in Information Systems
            at Auckland University, followed by a four-month intensive web
            development bootcamp at Enspiral Dev Academy.
          </p>
          <p>
            While my time working with ServiceNow has allowed me to strike a
            balance between the skills I learned in both my degree and at the
            Dev Academy bootcamp, my real passion is in web and software
            development, and coding, and I am now seeking opportunities that
            will allow me to fully immerse myself in web development.
          </p>
          <p>
            I am looking for a role that will challenge me, allow me to learn
            and develop new skills, as well as build upon those gained through
            Enspiral Dev Academy, and work with others in a team that places a
            strong emphasis on culture and collaboration.
          </p>
          <br />
        </div>

        <div id="coreSkills">
          <h2>Core Skills</h2>
          <ul>
            <li>
              Industry experience in HTML, CSS, JavaScript, Angular, jQuery,
              RESTful APIs, and Agile projects
            </li>
            <li>
              Practical learning experience in React, MySQL, GIT, Node,
              Express.js, JEST, and various CSS frameworks
            </li>
            <li>
              Keen and fast learner, eager approach to learning new concepts
            </li>
            <li>Outgoing, confident and personable</li>
            <li>
              Strong communication skills - written and verbal - with
              well-developed leadership and interpersonal skills
            </li>
            <li>Project Management</li>
            <li>
              Entrepreneurial – enjoy problem solving, self-driven / motivated
              and like to challenge myself
            </li>
          </ul>
          <br />
        </div>

        <div id="relevantExperience">
          <h2>Relevant Experience</h2>

          <div id="kpmg">
            <span className="experienceTitle">
              <h3>Technology Consultant & ServiceNow Developer – KPMG</h3>
              <h3>September 2021–Present</h3>
            </span>
            <p>
              Part of KPMG’s graduate programme working with the ServiceNow
              PaaS. Promoted to ‘Adviser 2’ within six months.
            </p>
            <p>
              This role included applying skills learned from my Information
              Systems degree across various projects such as: System
              architecture design; database design and management; user
              interface and user experience design; and process analysis and
              design. These skills were used in conjunction with my practical
              web development skills and understanding of CSS and Angular,
              JavaScript, jQuery, REST APIs, and algorithm development across a
              number of significant projects:
            </p>

            <ul>
              <li>
                Developed a custom-built task and incident management tool for
                Guardians of New Zealand Superannuation Fund’s investment
                operations team. This included writing algorithms to process,
                handle, and sort inbound and outbound emails against their
                related bodies of work with the purpose of providing visibility
                of team members’ workloads and allow for better management of
                information overload. This work included extensive algorithm
                development, process design, UI/UX design, and the use of jQuery
                APIs, AJAX, and event handling.
              </li>
              <li>
                I was responsible for the technical aspects of the rebranding of
                Tuatahi First Fibre’s ServiceNow websites involving CSS and
                Angular, working closely with their branding team.
              </li>
              <li>
                As part of a larger project with Tuatahi First Fibre, I was
                responsible for a REST API integration between ServiceNow and
                Optical Network Terminals (ONT’s) installed at customer
                addresses for the purposes of on-demand network diagnostic
                information. This work included managing the OAuth
                authentication of multiple ServiceNow websites, implementing
                triggers for GET and POST requests within ServiceNow, and the
                development of an algorithm to process, interpret, store, and
                display the returned payload.
              </li>
              <li>
                Through the skillset I brought to the team I was quickly
                recognised for my strong affinity towards coding, often chosen
                to work on ‘code-heavy’ engagements.
              </li>
              <li>
                Beyond my technical role, I had significant input in Agile
                project management including; organising and running client
                stand-ups, workshops, trainings, and retrospective sessions, as
                well as writing system documentation, writing and sizing user
                stories, and facilitating ongoing software support and BAU
                practices
              </li>
            </ul>
            <br />
          </div>

          <div id="eda">
            <span className="experienceTitle">
              <h3>
                Web development intensive vocational bootcamp – Enspiral Dev
                Academy
              </h3>
              <h3>April 2021–August 2021</h3>
            </span>

            <p>
              I enrolled at the Enspiral Dev Academy in order to learn the
              hands-on technical skills of web development required to become a
              junior developer and complement my existing understanding of and
              passion for technology
            </p>

            <ul>
              <li>
                Learnt every aspect of web development that I’ve used in my role
                at KPMG as well as React, MySQL, GIT, Node, Express.js, JEST,
                various CSS frameworks, test driven development, and DOM
                manipulation.
              </li>
              <li>
                As part of the final assessment, worked in a small team to
                develop a react-native app, “Leshgo”, which provides users
                visibility of the carbon emissions of different travel options.
                We harnessed the Google maps API alongside a vehicle model API
                that returned emission data for over 5,000 vehicle models. From
                this we were able to calculate the kilograms of CO2 emissions
                for a user's trip entered in to google maps, across multiple
                routes, taking in to account their vehicle model, traffic
                conditions, and speed limits.{' '}
              </li>
              <li>
                Completed a number of various small projects focusing on
                specific web development related skills as well as independent
                projects. A key take away from Dev Academy was understanding how
                I learn best, which has improved my ability to quickly pick up
                new concepts and my confidence in doing so
              </li>
            </ul>
          </div>
          <br />
        </div>

        <div id="references">
          <h2>References available on request</h2>
        </div>
      </div>
    </div>
  )
}
