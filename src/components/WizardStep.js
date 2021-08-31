import './WizardStep.css'

function WizardStep(props) {
  return (
    <div className="WizardStep">
      <img className="StepImage" src={props.stepImg} alt={props.alt} />
      <div class="HideOnSmall">
        <p class={props.activeStep ? 'StepLabelBoldActive' : 'StepLabelBold'}>
          STEP {props.stepNum}:{' '}
        </p>
        <p
          class={
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
