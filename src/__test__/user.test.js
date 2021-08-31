import { ValidateFormData } from '../model/User'

test('name is empty should return error code', () => {
  expect(
    JSON.parse(ValidateFormData('', 'test@gmail.com', '123456', '123456'))
      .status_code
  ).toBe(false)
})

test('email is empty should return error code', () => {
  expect(
    JSON.parse(ValidateFormData('test', '', '123456', '123456')).status_code
  ).toBe(false)
})

test('password is empty should return error code', () => {
  expect(
    JSON.parse(ValidateFormData('test', 'test@gmail.com', '', '')).status_code
  ).toBe(false)
})

test('password less than 6 characters should return error code', () => {
  expect(
    JSON.parse(ValidateFormData('test', 'test@gmail.com', '12345', '12345'))
      .error.passCheck
  ).toBe('failed')
})

test('passwords does not match should return error code', () => {
  expect(
    JSON.parse(
      ValidateFormData('test', 'test@gmail.com', '12345abc', '12345efg')
    ).error.passMatchCheck
  ).toBe('failed')
})

test('email is not valid should return error code', () => {
  expect(
    JSON.parse(ValidateFormData('test', 'test', '12345abc', '12345efg')).error
      .emailCheck
  ).toBe('failed')
})
