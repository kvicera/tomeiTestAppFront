import './WizardForm.css'
import React from 'react'
import { useState, useRef } from 'react'

import UploadImg from '../assets/Avatar.png'
import ArrowBtn from '../assets/arrow-right.png'

import { ValidateFormData, SubmitForm } from '../model/User'

function WizardForm(props) {
  const inputFile = useRef(null)

  const [imgAvatar, setImgAvatar] = useState(UploadImg)

  const [formName, setName] = useState('')
  const [formEmail, setEmail] = useState('')
  const [formPassword, setPassword] = useState('')
  const [formPasswordConfirm, setPasswordConfirm] = useState('')
  const [formAvatar, setAvatar] = useState('default')

  function handleSubmit(event) {
    const validation = JSON.parse(
      ValidateFormData(formName, formEmail, formPassword, formPasswordConfirm)
    )
    if (validation.status_code === true) {
      SubmitForm(formName, formEmail, formPassword, formAvatar)
    } else {
      let errorData = 'There is issue in form data!\n\nPlease check:\n\n'

      if (validation.error.nameCheck === 'failed') {
        errorData += 'Name.\n'
      }
      if (validation.error.emailCheck === 'failed') {
        errorData += 'Email.\n'
      }
      if (validation.error.passCheck === 'failed') {
        errorData += 'Password Length(min 8 characters).\n'
      }
      if (validation.error.passMatchCheck === 'failed') {
        errorData += 'Password does not match.\n'
      }
      alert(errorData)
    }
    event.preventDefault()
  }
  function handleUpload() {
    inputFile.current.click()
  }
  function updateAvatar (e){
    setAvatar(e.target.files[0])
    setImgAvatar(URL.createObjectURL(e.target.files[0]))
  }
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
              <img className="AvatarPreview" src={imgAvatar} alt="avatar"></img>
              <input
                ref={inputFile}
                type="file"
                className="AvatarInput"
                onChange={(e) => updateAvatar(e) }
              />
              <button
                onClick={handleUpload}
                className="UploadButton"
                type="file"
              >
                Upload
              </button>
            </div>
            <div className="FormInputsHolder">
              <div className="FormRow1">
                <div className="Row">
                  <label className="FormLabel">NAME</label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className="FormInput"
                    type="text"
                  ></input>
                </div>
                <div className="Row">
                  <label className="FormLabel">EMAIL</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="FormInput"
                  ></input>
                </div>
                <div className="Row">
                  <label className="FormLabel">PASSWORD</label>
                  <input
                    type="password"
                    className="FormInput"
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
                <div className="Row">
                  <label className="FormLabel">CONFIRM PASSWORD</label>
                  <input
                    type="password"
                    className="FormInput"
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="FormFooter">
            <button className="Button" onClick={handleSubmit}>
              <span className="SubmitBtnLabel">SAVE & NEXT</span>
              <img className="SubmitBtnImg" src={ArrowBtn} alt="arrowBtn"></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default WizardForm
