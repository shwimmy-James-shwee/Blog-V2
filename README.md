NOTES:
- this project is intended to represent my thought process in resolving problems and development. You'll find a lot of comments throughout the code.
  - (note I am a one man army for this project, with my aim to avoid overusing external resources for this project some of the code may be slightly unorthadox, however is a truer representation of may brains approach to development)
- as this project is meant to be a pure display of my natural ability (as of 2022), the vast majority of it is written straight from my brain, with support of documentation where needed, and with very little use of 'tutorials' or sources in which large amounts of code are provided. Each area where I have seeked a more significant level of help/guidance is listed below:
  - The home page carrousal leveraged a tutorial for the CSS elements of the annimation
  - the custom drop down box on the post list used reference code and pseudo code (although in retrospect I would rather edit the native drop down functionality)
  - the light/dark mode toggle utilised significant input from documentation and other websites 

  Once I'm happy with the MVP for this project I will likely start another where I lean far more in to leveraging the community for best practices and cleaner code.


USED PACKAGES:
- React
- React-Redux
- React-Router-dom
- use-local-storage
- ExpressJS
- Knex
- MySQL
- + Dependencies

INSTRUCTIONS:
1. clone the repo and navigate to the client folder ("cd client")
2. "npm install"
3. navigate back to root ("cd ..")
4. "npm install"
5. "npm run knex migrate:latest" - this creates our db 'Posts' tables
6. "npm run knex seed:run" - this loads our Posts table with data
7. open two seperate consoles (one for the server, one for clientside)
8. in one console, at the root, run "npm start" (this starts our Express JS server on the 'server')
9. in the other console, "cd client", run "npm start" (this starts our react app on a seperate port, linked via a proxy)
10. the Express JS server sits on localhost:5000 and is bare bones (not for human eyes!), our react app sits on localhost:3000, the server should be started before the react app




TO DO:
- ~~update logic for the home page carrousel and list to access posts from the db~~
- ~~add dynamic banners to displayed posts to display and explain depricated posts~~
- ~~implement a loading symbol for when accessing the db~~
- ~~implement motion background to pages~~
- ~~add link to my Github and linkedin on the navbar~~
- ~~add 404 page~~
- ~~move DB setup scripts to the root package.json - file structure refactor task~~
- ~~add in the custom 'mini-projects' and link them to their posts~~

- create page for adding new posts to the DB (requires restricting access to admins)
- create similar page for editing existing posts (requires restricting access to admins)

- automated tests
- mobile support/view




BUGS:
- ~~dynamic image rendering as part of the universal post rendering framework no longer works, this was caused by the file structure refactor to accomodate ExpressJS~~
- ~~about section image does not render after refactor~~
- ~~NavBar items are off centre~~
- ~~background video overlaps About page~~
- ~~background video does not cover whole screen on smaller displays~~
- The home page carrousel does not appropriately resize its cards based on the users window size, this results in some of the cards being cut off
- ~~rows in the post list become out of line on smaller displays~~ (partial fix in place)
- background video appears low res


