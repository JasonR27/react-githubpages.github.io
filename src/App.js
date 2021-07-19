import React from 'react'
import $ from 'jquery'
import './App.css'

export const App = () => {
  return (
    <div>
      React Github Pages Test App Hola Mundo
    </div>
  )
}
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













