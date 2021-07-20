import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import ProjectPage1 from './App'
import ProjectPage2 from './App'
import ProjectPage3 from './App'


//import { composeWithDevTools } from 'redux-devtools-extension'

// Redux:x  
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

//const store = Redux.createStore(statusReducer, ({array: ["a","b","c"], current: 1}) => state);

const store = createStore(
  compChngReducer,
  (state = { array: ["a", "b", "c"], current: 1 }) => state
);

//const store = Redux.createStore(statusReducer, (state = 0) => state);

// React:

export const ProjectsPages = (props) => {
  
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

// React-Redux
//const Provider = Provider;
//const connect = connect;

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

const Container = connect(mapStateToProps, mapDispatchToProps)(ProjectsPages);

//const Greetings = connect(mapStateToProps, mapDispatchToProps)(Greeting);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

export default AppWrapper;
