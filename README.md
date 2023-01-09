NOTES:
- this project is intended to represent my thought process to resolves problems and developing issues. you'll find a lot of comments throughout the code.
  - (note I am a one man army for this project, with my avoidance of overusing external resources some of the code may be questionable/weird. However is a truer representation of may brains approach to development)
- as this project is meant to be a pure display of my natural ability (as of 2022), the vast majority of it is written straight from my brain, with support of documentation where needed, and with very little use of 'tutorials' or sources in which large amounts of code are provided. Each area where I have seeked a more significant level of help/guidance are listed below 
  - The home page carrousal leveraged a tutorial for the CSS elements of the annimation
  - the custom drop down box on the post list used reference code and pseudo code (although in retrospect I would rather edit the native drop down functionality)
  - the light/dark mode toggle utilised significant input from documentation and other websites 

  Once I'm happy with the MVP for this project I will likely start another where I lean far more in to leveraging the community for best practices and cleaner code.

INSTRUCTIONS:
1. navigate to the client folder ("cd client")
2. "npm install"
3. navigate back to root ("cd ..")
4. "npm install"
5. "npm run knex" - this creates and seeds our DB with initial data
6. open two seperate consoles (weird I know... Don't use Create-React-App if your project requires a bunch of other packages)
7. in one console, at the root, run "npm start" (this starts our Express JS server on the 'server')
8. in the other console, "cd client", run "npm start" (this starts our react app on a seperate port, linked via a proxy)
9. the Express JS server sits on localhost:5000 and is very bare bones (not for human eyes!), our react app sits on localhost:3000





TO DO:
- ~~update logic for the home page carrousel and list to access posts from the db~~
- ~~add dynamic banners to displayed posts to display and explain depricated posts~~
- ~~implement a loading symbol for when accessing the db~~
- implement motion background to pages
- add link to my Github on the navbar
- add 404 page
- move DB setup scripts to the root package.json - file structure refactor task
- add in the custom 'mini-projects' and link them to their posts

- create page for adding new posts to the DB (requires restricting access to admins)
- create similar page for editing existing posts (requires restricting access to admins)

- automated tests
- mobile support/view




BUGS:
- dynamic image rendering as part of the universal post rendering framework no longer works, this was caused by the file structure refactor to accomodate ExpressJS
- The home page carrousel does not appropriately resize its cards based on the users window size, this results in some of the cards being cut off
- NavBar items are off centre
- rows in the post list become out of line on smaller browsers
