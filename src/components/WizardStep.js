import './WizardStep.css'

function WizardStep(props) {
  return (
    <div className="WizardStep">
      <img className="StepImage" src={props.stepImg} alt={props.alt} />
      <div className="HideOnSmall">
        <p className={props.activeStep ? 'StepLabelBoldActive' : 'StepLabelBold'}>
          STEP {props.stepNum}:{' '}
        </p>
        <p
          className={
            props.activeStep ? 'StepLabelSemiBoldActive' : 'StepLabelSemiBold'
          }
        >
          {props.stepDescription}
        </p>
      </div>
    </div>
  )
}
export default WizardStep
