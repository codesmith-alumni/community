import React from 'react';
import renderer from 'react-test-renderer'
import FeedPage from '../client/containers/FeedPage'
import Review from '../client/containers/Review'
import Feed from '../client/containers/Feed'
import Composer from '../client/containers/Composer'




describe('Review tests', () => {
  it('render correctly', () => {
    const props = {company: 'Google', username: 'Camera', details: 'Crushed it!'}
    const component = renderer.create(<Review {...props}/>)
    .toJSON()
    expect(component).toMatchSnapshot()
  }) 
  
})

describe('Feed tests', () => {
  it('render correctly', () => {
    const posts = [{company: 'Google', username: 'Camera', details: 'Crushed it!'}]
    const component = renderer.create(<Feed posts = {posts} />)
    .toJSON()
    expect(component).toMatchSnapshot()
  })

})

describe('Composer tests', () => {
  it('render correctly', () => {
    const component = renderer.create(<Composer/>)
    .toJSON()
    expect(component).toMatchSnapshot()
  })

})