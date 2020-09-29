import React from 'react'

class Component1 extends React.Component {
	constructor(props) {
  	super(props)
    this.backgrounds = this.props.backgrounds
    this.state = { backgroundIndex: 0 }
    
    this.changeBackground = this.changeBackground.bind(this)
  }

  componentDidMount () {
    this.timeout = setTimeout(
      this.changeBackground,
      this.props.animDuration * 1000
    )
  }
  
  componentWillUnmount() {
  	if (this.timeout) clearTimeout(this.timeout)
  }

  changeBackground () {
    this.setState(function ({ backgroundIndex }) {
      const nextBackgroundIndex = ++backgroundIndex % this.backgrounds.length

      return { backgroundIndex: nextBackgroundIndex }
    }, function () {
      this.timeout = setTimeout(
        this.changeBackground,
        this.props.animDuration * 1000
      )
    })
  }

  render () {
    return (
      <div>
        <img src={ this.backgrounds[this.state.backgroundIndex] } />
      </div>
    )
  }
}

export default Component1