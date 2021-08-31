import './Wizard.css'
import React from 'react'
// redux
// import { connect } from 'react-redux'
// import { startAction } from '../redux/actions/startAction'
// import { stopAction } from '../redux/actions/stopAction'

import WizardStep from './WizardStep'
import WizardForm from './WizardForm'

import step1Img from '../assets/Wizard-Step1.png'
import step2Img from '../assets/Wizard-Step2.png'
import step3Img from '../assets/Wizard-Step3.png'
import step4Img from '../assets/Wizard-Step4.png'
import step5Img from '../assets/Wizard-Step5.png'

function Wizard(props) {
  
  return (
    <div className="container">
      <div
        className="Wizard"
      >
        <div className="connecting-line"></div>
        <div className="BarBar"></div>
        <WizardStep
          activeStep={true}
          stepNum={1}
          stepDescription="CREATE YOUR ACCOUNT PASSWORD"
          stepImg={step1Img}
          alt="step1"
        />
        <WizardStep
          stepNum={2}
          stepDescription="PERSONAL INFORMATION"
          stepImg={step2Img}
          alt="step2"
        />
        <WizardStep
          stepNum={3}
          stepDescription="EMPLOYMENT DETAILS"
          stepImg={step3Img}
          alt="step3"
        />
        <WizardStep
          stepNum={4}
          stepDescription="UPLOAD DOCUMENTS"
          stepImg={step4Img}
          alt="step4"
        />
        <WizardStep
          stepNum={5}
          stepDescription="COMPLETE"
          stepImg={step5Img}
          alt="step5"
        />
      </div>
      <div>
        <WizardForm />
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   ...state,
// })

// const mapDispatchToProps = (dispatch) => ({
//   startAction: () => dispatch(startAction),
//   stopAction: () => dispatch(stopAction),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Wizard)
export default Wizard
