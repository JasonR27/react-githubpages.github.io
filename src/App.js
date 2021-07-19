import React from 'react'
import './App.css'

/**export const App = () => {
  return (
    <div>
      React Github Pages Test App Hola Mundo
    </div>
  )
}*/

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      author: "",
      data: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() { 
    // componentDidMount() is called after react first renders
    // if editing state and rerendering, how does it avoid loops?
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    let ran = Math.floor(Math.random() * data.length);
    this.setState({
      text: data[ran].text,
      author: data[ran].author,
      data: data
    });   
  }

  async handleClick() {
    // Improvements for next vs,
    // how to avoid fetching again with every click
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    let ran = Math.floor(Math.random() * data.length);
    this.setState({
      text: this.state.data[ran].text,
      author: this.state.data[ran].author
    });
    
    const quotecolor = [
      "#36486b",
      "#618685",
      "#4040a1",
      "#f18973",
      "#bc5a45",
      "#50394c",
      "#80ced6",
      "#ffef96",
      "#405d27",
      "#b5e7a0",
      "#feb236",
      "#d64161",
      "#ff7b25"
    ];
    
    const ran2 = Math.floor(Math.random() * (quotecolor.length - 1 - 0) + 0);
    
    const rancolor = quotecolor[ran2];    

    $(function(){
      $("body").css("background-color", rancolor);
      $("#quotestand").css("color", rancolor);
      $("button").css("background-color", rancolor);
      $("button").css("color", "white");
      $("#icons").css("color", rancolor);
      $("#tw-icon").css("color", rancolor); 
      $("#tb-icon").css("color", rancolor);
      $("h2").css("fontSize", "50px");
    });
  
  
  }  
  
  render() {
    return (
      <section id="sectionContainer">
        <div id="quote-box">
          <QuotePage
            id="QuotePage"
            text={this.state.text}
            author={this.state.author}
            NQButton={this.handleClick}
          />
        </div>
        <p id="sign">
          by jasonr27 for freeCodeCamp.org Front End Certification
        </p>
      </section>
    );
  }
}

const QuotePage = (props) => {
  return (
    <div id="quotestand">
      <h1 id="text">{props.text}</h1>
      <p id="author">{"--- " + props.author}</p>
      <div id="iconsButtonLine">
        <div id="icons">
          <a id="tweet-quote" href="twitter.com/intent/tweet">
            <i id="tw-icon" className="fab fa-twitter"></i>
          </a>
          <a href="tumblr.com">
            <i id="tb-icon" className="fab fa-tumblr-square"></i>
          </a>
        </div>
        <button id="new-quote" className="btn" onClick={props.NQButton}>
          New Quote
        </button>
      </div>
    </div>
  );
};


class AppWrapper extends React.Component {
  render() {
    return (
      <section id="AppWrapper">
        <App id="RQM" />
      </section>
    );
  }
}

export default AppWrapper













