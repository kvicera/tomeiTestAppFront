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
