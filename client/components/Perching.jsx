import React from 'react'
import BirdHeader from './BirdHeader'
import BirdGrid from './BirdGrid'
import MainFooter from './MainFooter'
import fetch from '../api/birds'

class Perching extends React.Component {
  state = {
    birds: [],
    found: 0
  }

  componentDidMount () {
    fetch()
      .then(birds => {
        this.setState({
          birds,
          found: this.counter(birds)
        })
      })
  }

  counter = (birds) => birds.reduce((found, bird) => {
    if (bird.found) {
      found++
    } return found
  }, 0)

  render () {
    return (
      <>
      <BirdHeader />
      <BirdGrid birds={this.props.birds}/>
      <MainFooter birds={this.props.birds} found={this.state.found}/>
      </>
    )
  }
}

export default Perching
