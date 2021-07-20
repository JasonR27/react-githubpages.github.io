import React from 'react'
import $ from 'jquery'
import '../pagesstyles/RandomQuoteMachine.css'

class RandomQuoteMachine extends React.Component {
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
      "#ADD8E6",
      "#87CEFA",
      "#87CEEB",
      "#00BFFF",
      "#B0C4DE",
      "#1E90FF",
      "#6495ED",
      "#4682B4",
      "#5F9EA0",
      "#7B68EE",
      "#6A5ACD",
      "#483D8B",
      "#4169E1",
      "#0000FF",
      "#0000CD",
      "#00008B",
      "#000080",
      "#8A2BE2",
      "#4B0082"
    ];

    const ran2 = Math.floor(Math.random() * (quotecolor.length - 1 - 0) + 0);

    const rancolor = quotecolor[ran2];

    $(function () {
      $("body").css("background-color", rancolor);
      $("#quotestand").css("color", rancolor);
      $("button").css("background-color", rancolor);
      $("button").css("color", "white");
      $("#icons").css("color", rancolor);
      $("#tw-icon").css("color", rancolor);
      $("#tb-icon").css("color", rancolor);
      $("h2").css("fontSize", "50px");
      $("#text").css("color", rancolor);
      $("#author").css("color", rancolor)      
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

export class RQMAppWrapper extends React.Component {
  render() {
    return (
      <section id="RQMAppWrapper" >
        <RandomQuoteMachine />
      </section>
    );
  }
}

const quotecolor = [
  "#ADD8E6",
  "#87CEFA",
  "#87CEEB",
  "#00BFFF",
  "#B0C4DE",
  "#1E90FF",
  "#6495ED",
  "#4682B4",
  "#5F9EA0",
  "#7B68EE",
  "#6A5ACD",
  "#483D8B",
  "#4169E1",
  "#0000FF",
  "#0000CD",
  "#00008B",
  "#000080",
  "#8A2BE2",
  "#4B0082"
];

const ran = Math.floor(Math.random() * (quotecolor.length - 1 - 0) + 0);

const rancolor = quotecolor[ran];

$(document).ready(function () {
  $("body").css("background-color", rancolor);
  $("#quotestand").css("color", rancolor);
  $("button").css("background-color", rancolor);
  $("button").css("color", "white");
  $("#icons").css("color", rancolor);
  $("#tw-icon").css("color", rancolor);
  $("#tb-icon").css("color", rancolor);
  $("h2").css("fontSize", "50px");
  $("#text").css("color", rancolor);
  $("#author").css("color", rancolor)  
});

export default RQMAppWrapper