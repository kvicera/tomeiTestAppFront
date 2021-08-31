import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'
import isEmpty from 'validator/lib/isEmpty'

import axios from 'axios'

function ValidateFormData(name, email, password, repassword, avatar) {
  if (
    !isEmpty(name) &&
    isEmail(email) &&
    isLength(password, { min: 6, max: undefined }) &&
    password === repassword
  ) {
    return JSON.stringify({ status_code: true, error: undefined })
  } else {
    return JSON.stringify({
      status_code: false,
      error: {
        nameCheck: !isEmpty(name) === true ? 'passed' : 'failed',
        emailCheck: isEmail(email) === true ? 'passed' : 'failed',
        passCheck:
          isLength(password, { min: 6, max: undefined }) === true
            ? 'passed'
            : 'failed',
        passMatchCheck: password === repassword ? 'passed' : 'failed',
      },
    })
  }
}

function SubmitForm(name, email, password, avatar) {
  const formData = new FormData()
  formData.append('avatar', avatar)
  axios
    .post('/profile', formData)
    .then(function (response) {
      console.log(response)

      if (response.status === 200) {
        axios
          .post('/form/sendData', {
            name: name,
            email: email,
            password: password,
            avatar: response.data.filename,
          })
          .then(function (response) {
            if (response.status === 200) {
              alert('Account created successfully!')
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}

export { ValidateFormData, SubmitForm }
