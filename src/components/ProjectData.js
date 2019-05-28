import headlightsImage from '../images/headlights.jpg'
import realsolutionImage from '../images/realsolution.jpg'
import booksearchImage from '../images/booksearch.jpg'


const projects = [
  {
    id: 1,
    name: "HeadLights",
    description: "Web scraping app that allows user to read and save sports articles. Made with Handlebars, Express, Axios, Cherio, and Mongoose.",
    projectUrl: "https://head-lights.herokuapp.com/",
    repositoryUrl: "https://github.com/cwood89/headLights",
    type: "Web",
    publishedDate: "2019",
    logo: {
      image: {
        name: "HeadLights",
        src: headlightsImage
      }
    }
  }, {
    id: 2,
    name: "Real Solution",
    description: "Real estate investment app made to find the best valued properites based on desired investment yield. Made with React, React- Router, Axios, Express, Express - Session, Bcrypt, and Sequelize.",
    projectUrl: "https://powerful-tor-47566.herokuapp.com/",
    repositoryUrl: "https://github.com/cwood89/RealSolution",
    type: "Web",
    publishedDate: "2019",
    logo: {
      image: {
        name: "Real Solution",
        src: realsolutionImage
      }
    }
  }, {
    id: 3,
    name: "React Book Search",
    description: "Book search app which uses the google books api to search for and save book. Made with the MERN stack.",
    projectUrl: "https://react-book-club-cw.herokuapp.com/",
    repositoryUrl: "https://github.com/cwood89/react-book-search",
    type: "Web",
    publishedDate: "2019",
    logo: {
      image: {
        name: "React Book Search",
        src: booksearchImage
      }
    }
  }
]
export default projects;