
export const ProjectPage3 = (props) => {

    return (
      <section id="projects">
        <div id="arrowButtons" className="btnsL" onClick={props.handleLeftClick}><i class="fas fa-arrow-left fa-3x"></i></div>
        <div id="titleProjectsButton">
        <h3>These are some of my projects</h3>
        <ul>
        <li>
            <div class="project-tile"><a href="https://codepen.io/jasonr27/debug/vYXzGdy"><img alt="Descriptive image of the project"  id="project_imgs" src="https://assets.codepen.io/3857943/internal/screenshots/pens/vYXzGdy.default.png"></img>
  
              <p>Survey Page</p>
  
            </a></div>
          </li>
          <li>
            <div class="project-tile"><a href="../projects/HTML-CSS-only/Tribute-Page/index.html" target="blank" rel="noreferrer" >
              <img alt="Descriptive image of the project"  id="project_imgs" src="https://assets.codepen.io/3857943/internal/screenshots/pens/gOwjymO.default.png" target="_blank">
              </img>
  
              <p>Tribute Page</p>
  
            </a></div>
          </li><li>
            <div class="project-tile"><a
              href="https://codepen.io/jasonr27/debug/RwGYdPZ"><img alt="Descriptive image of the project"  alt="Descriptive image of the project" id="project_imgs" src="https://assets.codepen.io/3857943/internal/screenshots/pens/RwGYdPZ.default.png" target="_blank"></img>
  
              <p>Landing Page</p>
  
            </a></div>
          </li><li>
            <div class="project-tile"><a href="https://codepen.io/jasonr27/debug/PoGxgdL"><img alt="Descriptive image of the project"  id="project_imgs" src="https://assets.codepen.io/3857943/internal/screenshots/pens/PoGxgdL.default.png"></img>
  
              <p>Technical Documentation Page</p>
  
            </a></div>
          </li><li>
            <div class="project-tile"><a href="#Contact_Info"><img alt="Visual depiction of the project"   id="project_imgs" src="https://www.publichealthnotes.com/wp-content/uploads/2020/03/project-planning-header@2x-678x381.png"></img>
  
              <p>Tribute Page</p>
  
            </a></div>
          </li><li>
            <div class="project-tile"><a href="#Contact_Info"><img alt="Visual depiction of the project" id="project_imgs" src="https://www.publichealthnotes.com/wp-content/uploads/2020/03/project-planning-header@2x-678x381.png"></img>
  
              <p>Tribute Page</p>
  
            </a></div>
          </li>
        </ul>
      {/**<button>Show All</button>*/}
  
        </div>
        <div id="arrowButtons" className="btnsR" onClick={props.handleLeftClick}><i class="fas fa-arrow-right fa-3x"></i></div>
      </section>
    )
  }

  export default ProjectPage3;