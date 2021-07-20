

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      
      input: placeholder
      }
    this.handleChange = this.handleChange.bind(this);
    }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });    
  } 
    render () {
      const classes = this.state.editorMaximized
      ? ['editorWrap maximized', 'previewWrap hide', 'fa fa-compress']
      : this.state.previewMaximized
        ? ['editorWrap hide', 'previewWrap maximized', 'fa fa-compress']
        : ['editorWrap', 'previewWrap', 'fa fa-arrows-alt']
      return (
        <section id="MDPreviewer">
          <div className={classes[0]} id="editorContainer">
          <Toolbar icon={classes[2]} 
            text="Editor" />
          <Editor 
            value={this.state.input}                         onChange={this.handleChange}  
           />
          </div>
          <div className={classes[0]} >
          <Toolbar 
            icon={classes[2]} 
            text="Previewer" 
            />
          <Preview markDown={this.state.input} />
            </ div>
        </section>
      )
   }    
}

const Editor = props => {  
    return (
      <textarea
        id="editor"
        name="input"         
        value={props.value}
        onChange=                   {props.onChange}
        >
      </textarea>
    );  
}

const Preview = props => {
  function markItUp(a) {
    return {__html: a};
  }  
    return (
      <div
      id="preview"       dangerouslySetInnerHTML = {markItUp(marked(props.markDown))}
         />
    );  
}
 
const Toolbar = props => {
  return (
    <div className='toolbar'>
      <i className='fa fa-free-code-camp' title='no-stack-dub-sack' />
      {props.text}
      <i className={props.icon} onClick={props.onClick} />
    </div>
  );
};

// Class component
class AppWrapper extends React.Component {  
  render () {
    return (
      <section id="AppWrapper">
        <MarkdownPreviewer /> 
      </section>  
    );
  }  
}

ReactDOM.render(<AppWrapper />, document.getElementById("App"));

$(document).ready( function (){
  $("#App").css("color", "black");
  $("h2").css("fontSize", "50px");  
})


  
  //const { input } = this.state; /function of this line?
      // const markdown = marked(input);
 

// render MP =
    //const { input } = this.state; /function of this line?
 // const markdown = marked(input);