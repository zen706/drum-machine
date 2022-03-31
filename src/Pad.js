import React from 'react'

class Pad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }

    this.playSound = this.playSound.bind(this)
    this.playSound = this.playSound.bind(this)
    this.playSound = this.playSound.bind(this)
  }
  // console.log(this.props)

  playSound = () => {
    // console.log(audio)
    if (this.props.power) {
      // console.log(this.props.power)
      const audio = document.getElementById(this.props.keyTrigger)
      audio.volume = this.props.volume
      // console.log(audio.volume)

      audio.currentTime = 0
      audio.play()

      const display = document.querySelector('#display')
      // console.log(display)
      const sound = audio.parentNode.id
      display.textContent = sound

      this.setState({
        active: !this.state.active,
      })
      setTimeout(() => {
        this.setState({
          active: !this.state.active,
        })
      }, 300)
    }
  }

  handlePress = (e) => {
    if (e.key === this.props.keyTrigger.toLowerCase()) {
      this.playSound()
    }
  }

  componentDidMount() {
    window.document.addEventListener('keydown', (e) => {
      this.handlePress(e)
    })
  }

  componentWillUnmount() {
    window.document.removeEventListener('keydown', (e) => {
      this.handlePress(e)
    })
  }

  render() {
    console.log(this.state.active)
    return (
      <div
        className={`drum-pad ${this.state.active && 'active'} `}
        id={this.props.id}
        onClick={this.playSound}
      >
        {this.props.keyTrigger}
        <audio
          src={this.props.url}
          className='clip'
          id={this.props.keyTrigger}
          data-id={this.props.keyCode}
        ></audio>
      </div>
    )
  }
}

export default Pad