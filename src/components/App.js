import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Mind Map App</h1>
  </header>
)

const MindMap = (props) => (
  <div className='mindmap'>

    <svg viewBox='0 0 1100 650' >

      <defs>
        <linearGradient x1='100%' y1='0%' x2='0%' y2='100%' id='linearGradient-1'>
            <stop stopColor='#DD8EDA' offset='0%' />
            <stop stopColor='#42A3F9' offset='100%' />
        </linearGradient>
      </defs>
      <g transform='translate(500,300)'>
        <rect width='150' height='44'   rx='22' ry='22' fill='url(#linearGradient-1)' opacity='0.3' 
        onClick={props.lineDraw}/>
        <svg width="150px" height="44px">
          <text x="50%" y="55%" alignmentBaseline="middle" textAnchor="middle" fill='white'> MIND MAP </text>
        </svg>
      </g>
    </svg>



  </div>
)

const Menu = () => (
  <div className='menu'>

      

  </div>
)

class MindMapApp extends Component {
  
  state = {
    
  }



  componentDidMount() {
    
  

  }

  lineDraw = () => {
    console.log('draw');
    
  }


      render () {
    return (
      <div className='App-container'>

        <Menu />
        <MindMap 
          lineDraw={this.lineDraw}
        />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <MindMapApp />

  </div>
)

export default App

