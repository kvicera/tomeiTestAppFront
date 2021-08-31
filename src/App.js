import './App.css'

// redux
import { connect } from 'react-redux'
import { startAction } from './redux/actions/startAction'
import { stopAction } from './redux/actions/stopAction'

import Header from './components/Header'
import Wizard from './components/Wizard'

function App(props) {
  return (
    <div className="App">
      <header /* className="App-header"*/>
        {/* <img
          src={logo}
          className={
            'App-logo' + (props.rotating ? '' : ' App-logo-paused')
          }
          alt="logo"
          onClick={
            props.rotating ? props.stopAction : props.startAction
          }
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <Header />
      <Wizard />
    </div>
  )
}

const mapStateToProps = (state) => ({
  ...state,
})

const mapDispatchToProps = (dispatch) => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
