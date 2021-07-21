import React from 'react';
//import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import { WelcomeSection } from './components/WelcomeSection'
import { NavBar } from './components/NavBar'
import ContactInfoAndFooter from './components/ContactInfoAndFooter'
//import ProjectsPages from './components/ProjectsPages'
import ProjectPage1 from './components/ProjectPage1'
import ProjectPage2 from './components/ProjectPage2'
import ProjectPage3 from './components/ProjectPage3'
import Helmet from 'react-helmet'


//Redux:

const RC = "RC";
const LC = "LC";

const rightClick = () => {
  return {
    type: RC,
    current: store.getState().current,
    array: store.getState().array
  };
};

const leftClick = () => {
  return {
    type: LC,
    current: store.getState().current,
    array: store.getState().array
  };
};

const compChngReducer = (state, action) => {

  switch (action.type) {

    case RC:
      console.log("case RC");
      if (action.current >= action.array.length - 1) {
        return { ...state, current: 0 };
      } else {
        return { ...state, current: action.current + 1 };
      }

    case LC:
      if (action.current <= 0) {
        return { ...state, current: action.array.length - 1 };
      } else {
        return { ...state, current: action.current - 1 };
      }

    default:
      console.log("Reducer default case")
      return {
        array: ["a", "b", "c"],
        current: 1
      };
  }
};

export const store = createStore(
  compChngReducer,
  (state = { array: ["a", "b", "c"], current: 2 }) => state
);

const mapStateToProps = (status) => {
  return {
    array: ["a", "b", "c"],
    current: 1
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    leftClickR: () => dispatch(leftClick()),
    rigthClickR: () => dispatch(rightClick())
  };
};

// React:

function Portfolio() {

  return (
    <Router>
      <Helmet>
        <link rel="stylesheet" href="App.module.css" />
      </Helmet>
      <Provider store={store} exact route="/">
        <div className="App">
          <NavBar />
          <WelcomeSection />
          <div id="projectsstand"></div>
          <ProjectsStand />
          <ContactInfoAndFooter />
        </div >
      </Provider>
    </Router>
  );
}


const ProjectsPages = (props) => {

  const handleRightClick = () => {
    console.log(store.getState());
    props.rigthClickR();
    console.log(store.getState());
  };

  const handleLeftClick = () => {
    console.log(store.getState());
    props.leftClickR();
    console.log(store.getState());
  };

  switch (store.getState().array[store.getState().current]) {
    case "a":
      return (
        <ProjectPage2
          handleLeftClick={handleLeftClick}
          handleRightClick={handleRightClick}
        />
      );
    case "b":
      return (
        <ProjectPage1
          handleLeftClick={handleLeftClick}
          handleRightClick={handleRightClick}
        />
      );
    case "c":
      return (
        <ProjectPage3
          handleLeftClick={handleLeftClick}
          handleRightClick={handleRightClick}
        />
      );
    default:
      return (
        <ProjectPage1
          handleLeftClick={handleLeftClick}
          handleRightClick={handleRightClick}
        />
      );
  }
}

const ProjectsStand = connect(mapStateToProps, mapDispatchToProps)(ProjectsPages);

export const PrtflAppWrapper = () => {
  return (
    <section id="PrtflAppWrapper" >
      <Portfolio />
    </section>
  );
}

export default PrtflAppWrapper;

{/* 
  
  template for objects from .JSON file,
  {
    img: "project img link"
    name: "project name"
    id:
    projectLink:      
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
