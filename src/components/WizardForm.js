import './WizardForm.css'

import UploadImg from '../assets/Avatar.png'
import ArrowBtn from '../assets/arrow-right.png'

function WizardForm(props) {
  return (
    <div className="WizardForm">
      <div className="FormHeader">
        <label className="FormHeaderTitle">CREATE YOUR ACCOUNT</label>
      </div>
      <div className="FormPadding">
        <div>
          <p className="FormDescription">
            Because there will be documents that you need to prepare to apply
            for the loan, let's start off by creating a password so that you can
            login to your account once you have these document ready.
          </p>
        </div>
        <div>
          <div className="FormInputs">
            <div className="AvatarUpload">
              <img src={UploadImg} alt="avatar"></img>
              <button class="UploadButton">Upload</button>
            </div>
            <div className="FormInputsHolder">
              <div className="FormRow1">
                <div className="Row">
                  <label className="FormLabel" htmlFor="fname">
                    NAME
                  </label>
                  <input
                    className="FormInput"
                    type="text"
                    id="fname"
                    name="fname"
                  ></input>
                </div>
                <div className="Row">
                  <label className="FormLabel" htmlFor="fname">
                    EMAIL
                  </label>
                  <input
                    type="text"
                    className="FormInput"
                    id="fname"
                    name="fname"
                  ></input>
                </div>
                <div className="Row">
                  <label className="FormLabel" htmlFor="fname">
                    PASSWORD
                  </label>
                  <input
                    type="password"
                    className="FormInput"
                    id="fname"
                    name="fname"
                  ></input>
                </div>
                <div className="Row">
                  <label className="FormLabel" htmlFor="fname">
                    CONFIRM PASSWORD
                  </label>
                  <input
                    type="password"
                    className="FormInput"
                    id="fname"
                    name="fname"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="FormFooter">
            <button class="Button">
              <span class="SubmitBtnLabel">SAVE & NEXT</span>
              <img class="SubmitBtnImg" src={ArrowBtn} alt="arrowBtn"></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default WizardForm
