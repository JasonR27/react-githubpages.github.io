
export const ProjectPage1 = (props) => {

    return (
      <section id="projects">
        <div id="arrowButtons" className="btnsL" onClick={props.handleLeftClick}><i class="fas fa-arrow-left fa-3x"></i></div>
        <div id="titleProjectsButton">
        <h3>These are some of my projects</h3>
        <ul>
          <li>
            <div class="project-tile"><a href="/Random-Quote-Machine" target="_blank" rel="noopener noreferrer"><img alt="Descriptive image of the project"  id="project_imgs" src="https://assets.codepen.io/3857943/internal/screenshots/pens/qBqoKrL.default.png"></img>
              <p>Random Quote Machine</p>
            </a></div>
          </li>
          <li>
            <div class="project-tile"><a href="/Javascript-Calculator"  target="_blank" rel="noopener noreferrer"><img alt="Descriptive image of the project"  id="project_imgs" src="https://assets.codepen.io/3857943/internal/screenshots/pens/BaWOzKM.default.png"></img>
  
              <p>Javascript Calculator</p>
  
            </a></div>
          </li>          
          <li>
            <div class="project-tile"><a href="/Survey-Page"  target="_blank" rel="noopener noreferrer"><img alt="Descriptive image of the project"  id="project_imgs" src="https://assets.codepen.io/3857943/internal/screenshots/pens/vYXzGdy.default.png"></img>
  
              <p>Survey Page</p>
  
            </a></div>
          </li>
          <li>
            <div class="project-tile"><a
              href="Landing-Page"  target="_blank" rel="noopener noreferrer"><img alt="Descriptive image of the project"  id="project_imgs" src="https://assets.codepen.io/3857943/internal/screenshots/pens/RwGYdPZ.default.png" target="_blank"></img>
  
              <p>Landing Page</p>
  
            </a></div>
          </li>
          <li>
            <div class="project-tile"><a href="/Drum-Machine" target="blank" rel="noreferrer" >
  
              <img alt="Visual depiction of the project"  id="project_imgs" src="https://assets.codepen.io/3857943/internal/screenshots/pens/wvJXaRL.default.png" target="_blank">
  
              </img>
  
              <p>Drum Machine</p>
  
            </a></div>
          </li>
          <li>
            <div class="project-tile"><a href="Technical-Documentation-Page"  target="_blank" rel="noopener noreferrer"><img alt="Descriptive image of the project"  id="project_imgs" src="https://assets.codepen.io/3857943/internal/screenshots/pens/PoGxgdL.default.png"></img>
  
              <p>Technical Documentation Page</p>
  
            </a></div>
          </li>
        </ul>
      {/**<button>Show All</button>*/}
  
        </div>
        <div id="arrowButtons" className="btnsR" onClick={props.handleLeftClick}><i class="fas fa-arrow-right fa-3x"></i></div>
      </section>
    )
  }

  export default ProjectPage1;