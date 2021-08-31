import React from 'react'
import renderer from 'react-test-renderer'

import Header from '../components/Header'
import Wizard from '../components/Wizard'

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Header />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Wizard />).toJSON()
  expect(tree).toMatchSnapshot()
})
