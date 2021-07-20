import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  const [projectspage, setProjectspage] = React.useState(true)
  
    const handleClick = () => {
      
    }
    
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg" id="Navbar" className="NavbarRJ">
          <Navbar.Brand href="#home" id="name">Rob Jeison</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#welcome-section" id="navButton">- Welcome Section -</Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="#projectsstand" id="navbutton"> See Stand </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Javascript Calculator</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Drum Machine</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Random Quote Machine</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Markdown Previewer</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Landing Page</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Survey Page</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Technical Documentation Page</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#Contact_Info" >Make a Request</NavDropdown.Item>
                <Nav.Link href="#Contact_Info">Go to Collection in Codepen.io</Nav.Link>
              </NavDropdown>
              <Nav.Link href="#Contact_Info" id="navButton">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <WelcomeSection />
        <div id="projectsstand"></div>
        <ProjectPages projectspage={projectspage} setprojectspage={(projects) => setProjectspage(projects)} />
        <Route path="/project1" component={ProjectPage1} ></Route>
        <Route path="/project2" component={ProjectPage2} ></Route>
        <Route path="/project3" component={ProjectPage3} ></Route>
        < button onClick={handleClick()} />
        <ContactInfoAndFooter />
      </div >
    </Router>
  );
}

const WelcomeSection = () => {
  return (
    <div id="welcome-section">
      <h1>Hey I am Rob Jeison</h1>
      <p>a Freelancer</p>
    </div>
  )
}

const ProjectPages = (props) => {

  console.log("props.projectspage: " + props.projectspage)

  switch (props.projectspage) {
    case true:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
      return (
        <ProjectPage1 setprojectspage={(projects) => props.setprojectspage(projects)} />
      )
      break;
    case false:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
      return (
        <ProjectPage2 setprojectspage={(projects) => props.setprojectspage(projects)} />
      )
      break;

    default:
      //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
      return (
        <ProjectPage1 setprojectspage={(projects) => props.setprojectspage(projects)} />
      )
      break;
  }
}

const ProjectPage1 = (props) => {

  return (
    <section id="projects">
      <h3>These are some of my projects</h3>
      <ul>
        <li>
          <div class="project-tile"><a href="../projects/HTML-CSS-only/Tribute-Page/index.html" target="blank" rel="noreferrer" >

            <img id="project_imgs" src="https://assets.codepen.io/3857943/internal/screenshots/pens/gOwjymO.default.png" target="_blank">

            </img>

            <p>Tribute Page</p>

          </a></div>
        </li><li>
          <div class="project-tile"><a
            href="https://codepen.io/jasonr27/debug/RwGYdPZ"><img id="project_imgs" src="https://assets.codepen.io/3857943/internal/screenshots/pens/RwGYdPZ.default.png" target="_blank"></img>

            <p>Landing Page</p>

          </a></div>
        </li><li>
          <div class="project-tile"><a href="https://codepen.io/jasonr27/debug/PoGxgdL"><img id="project_imgs" src="https://assets.codepen.io/3857943/internal/screenshots/pens/PoGxgdL.default.png"></img>

            <p>Technical Documentation Page</p>

          </a></div>
        </li><li>
          <div class="project-tile"><a href="https://codepen.io/jasonr27/debug/vYXzGdy"><img id="project_imgs" src="https://assets.codepen.io/3857943/internal/screenshots/pens/vYXzGdy.default.png"></img>

            <p>Survey Page</p>

          </a></div>
        </li><li>
          <div class="project-tile"><a href="#Contact_Info"><img id="project_imgs" src="https://www.publichealthnotes.com/wp-content/uploads/2020/03/project-planning-header@2x-678x381.png"></img>

            <p>Tribute Page</p>

          </a></div>
        </li><li>
          <div class="project-tile"><a href="#Contact_Info"><img id="project_imgs" src="https://www.publichealthnotes.com/wp-content/uploads/2020/03/project-planning-header@2x-678x381.png"></img>

            <p>Tribute Page</p>

          </a></div>
        </li>
      </ul>

      <button  >Show All</button>

    </section>
  )
}

const ProjectPage2 = (props) => {

  return (
    <section id="projects">
      <h3>These are some of my projects</h3>
      <ul>
        <li>
          <div class="project-tile"><a
            href="https://codepen.io/jasonr27/debug/RwGYdPZ"><img id="project_imgs" src="https://assets.codepen.io/3857943/internal/screenshots/pens/RwGYdPZ.default.png" target="_blank"></img>

            <p>Landing Page</p>

          </a></div>
        </li>
        <li>
          <div class="project-tile"><a href="https://codepen.io/jasonr27/debug/gOwjymO">
            <img id="project_imgs" src="https://assets.codepen.io/3857943/internal/screenshots/pens/gOwjymO.default.png" target="_blank">

            </img>

            <p>Tribute Page</p>

          </a></div>
        </li><li>
          <div class="project-tile"><a href="https://codepen.io/jasonr27/debug/PoGxgdL"><img id="project_imgs" src="https://assets.codepen.io/3857943/internal/screenshots/pens/PoGxgdL.default.png"></img>

            <p>Technical Documentation Page</p>

          </a></div>
        </li><li>
          <div class="project-tile"><a href="https://codepen.io/jasonr27/debug/vYXzGdy"><img id="project_imgs" src="https://assets.codepen.io/3857943/internal/screenshots/pens/vYXzGdy.default.png"></img>

            <p>Survey Page</p>

          </a></div>
        </li><li>
          <div class="project-tile"><a href="#Contact_Info"><img id="project_imgs" src="https://www.publichealthnotes.com/wp-content/uploads/2020/03/project-planning-header@2x-678x381.png"></img>

            <p>Tribute Page</p>

          </a></div>
        </li><li>
          <div class="project-tile"><a href="#Contact_Info"><img id="project_imgs" src="https://www.publichealthnotes.com/wp-content/uploads/2020/03/project-planning-header@2x-678x381.png"></img>

            <p>Tribute Page</p>

          </a></div>
        </li>
      </ul>

      <button  >Show All</button>

    </section>
  )
}

const ProjectPage3 = () => {
  return (
    <section id="projects">
      <h3> are projects right</h3>
      <ul>
        <li>
          <div class="project-tile"><a href="https://codepen.io/jasonr27/debug/gOwjymO">
            <img id="project_imgs" src="https://assets.codepen.io/3857943/internal/screenshots/pens/gOwjymO.default.png" target="_blank">

            </img>

            <p>Tribute Page</p>

          </a></div>
        </li><li>
          <div class="project-tile"><a
            href="https://codepen.io/jasonr27/debug/RwGYdPZ"><img id="project_imgs" src="https://assets.codepen.io/3857943/internal/screenshots/pens/RwGYdPZ.default.png" target="_blank"></img>

            <p>Landing Page</p>

          </a></div>
        </li><li>
          <div class="project-tile"><a href="https://codepen.io/jasonr27/debug/PoGxgdL"><img id="project_imgs" src="https://assets.codepen.io/3857943/internal/screenshots/pens/PoGxgdL.default.png"></img>

            <p>Technical Documentation Page</p>

          </a></div>
        </li><li>
          <div class="project-tile"><a href="https://codepen.io/jasonr27/debug/vYXzGdy"><img id="project_imgs" src="https://assets.codepen.io/3857943/internal/screenshots/pens/vYXzGdy.default.png"></img>

            <p>Survey Page</p>

          </a></div>
        </li><li>
          <div class="project-tile"><a href="#Contact_Info"><img id="project_imgs" src="https://www.publichealthnotes.com/wp-content/uploads/2020/03/project-planning-header@2x-678x381.png"></img>

            <p>Tribute Page</p>

          </a></div>
        </li><li>
          <div class="project-tile"><a href="#Contact_Info"><img id="project_imgs" src="https://www.publichealthnotes.com/wp-content/uploads/2020/03/project-planning-header@2x-678x381.png"></img>

            <p>Tribute Page</p>

          </a></div>
        </li>
      </ul>

      <button>Show All</button>

    </section>
  )
}


const projectsmap = () => {
  return (
    <li>
      <div class="project-tile"><a href="https://codepen.io/jasonr27/debug/gOwjymO"><img id="project_imgs" src="https://assets.codepen.io/3857943/internal/screenshots/pens/gOwjymO.default.png" target="_blank"></img>

        <p>Tribute Page</p>

      </a></div>
    </li>
  )

}


const ContactInfoAndFooter = () => {
  return (
    <div id="contactInfoAndFooter">
      <ContactInfo />
      <Footer />
    </div>
  )
}

const ContactInfo = () => {
  return (
    <div id="Contact_Info">
      <h4>Let's work together</h4>
      <p>how do you take your cofee?</p>
      <ul>
        <li>
          <a href="www.Upwork.com" rel="noreferrer" target="_blank">
            <div id="icon"><i class="fab fa-facebook-square"></i>
              Upwork</div>
          </a>
        </li>
        <li>
          <a href="www.github.com" rel="noreferrer" target="_blank" id="profile-link">
            <div id="icon"><i class="fab fa-github"></i>GitHub</div>
          </a>
        </li>
        <li>
          <a href="www.LinkedIn.com" rel="noreferrer" target="_blank">
            <div id="icon"><i class="fab fa-twitter"></i>freeCodeCamp.org</div>
          </a>
        </li>
        <li>
          <a href="www.LinkedIn.com" rel="noreferrer" target="_blank">
            <div id="icon"><i class="fab fa-twitter"></i>LinkedIn</div>
          </a>
        </li>
        <li>
          <a href="www.gmail.com" rel="noreferrer" target="_blank">
            <div id="icon"><i class="fas fa-at"></i>Send an email</div>
          </a>
        </li>
        <li>
          <a href="google.com" rel="noreferrer" target="_blank">
            <div id="icon"><i class="fas fa-mobile-alt"></i>Call me</div>
          </a>
        </li>
      </ul>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <footer>
        <p>Check all the projects... let me know what kind of work you're looking for</p>
        <div><i class="far fa-copyright"></i>
          <p>Created for <a href="https://www.freecodecamp.com/" target="_blank" rel="noreferrer"
          >freeCodeCamp <i class="fab fa-free-code-camp"></i></a></p>
        </div>
      </footer>
    </div>
  )
}

export default App;


{/* 
  
  template for objects from .JSON file,
  {
    img: "project img link"
    name: "project name"
    id:     
  }
  
  future project component = {projects.JSON.map((project) => (
                        <div
                            className="project-tile"
                            id={project.name}                                                
                            key={project.name + " key"}
                        ><img src={project.img}></img>
                        <p>{project.name}</p>
                        </div>
                    ))} */}
