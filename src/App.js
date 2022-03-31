import React from 'react'
import Pad from './Pad'

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
]

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
  },
]
// this do not pass  fcc test
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      power: true,
      bank: true,
      volume: 0.5,
      display: '',
    }

    this.bankToggle = this.bankToggle.bind(this)
    this.powerToggle = this.powerToggle.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  // document.addEventListener('keydown', (e) => {
  //   // console.log(state.power)
  //   const id = e.key.toUpperCase()
  //   const audio = document.getElementById(id)
  //   if (audio && state.power) {
  //     audio.volume = state.volume
  //     // console.log(audio.volume)

  //     audio.currentTime = 0
  //     audio.play()

  //     const display = document.querySelector('#display')
  //     // console.log(display)
  //     const sound = audio.parentNode.id
  //     display.textContent = sound

  //     const parent = audio.parentNode
  //     parent.classList.add('active')
  //     setTimeout(() => {
  //       parent.classList.remove('active')
  //     }, 300)
  //   }
  // })

  bankToggle = () => {
    if (this.state.power) {
      this.setState({
        bank: !this.state.bank,
      })
    }
  }

  powerToggle = () => {
    this.setState({
      display: '',
      power: !this.state.power,
    })
  }

  handleChange = (e) => {
    if (this.state.power) {
      this.setState({
        volume: e.target.value,
        display: `Volume: ${Math.floor(this.state.volume * 100)}`,
      })
      setTimeout(() => {
        this.setState({
          display: '',
        })
      }, 1000)
    }
  }

  render() {
    const padElements = (this.state.bank ? bankOne : bankTwo).map((obj) => {
      return (
        <Pad
          keyCode={obj.keyCode}
          keyTrigger={obj.keyTrigger}
          id={obj.id}
          url={obj.url}
          {...this.state}
        />
      )
    })

    return (
      <div className='container'>
        <div id='drum-machine'>
          <div className='drum-pad-container'>{padElements}</div>
          <div className='control'>
            <div className='switch-container' onClick={this.powerToggle}>
              Power
              <div className='switch-box'>
                <div
                  className='switch'
                  style={{ float: this.state.power ? 'right' : 'left' }}
                ></div>
              </div>
            </div>
            <div id='display'>
              {this.state.volume === 0.5 || this.state.display}
            </div>
            <div className='volume'>
              <input
                className='volume-input'
                type='range'
                value={this.state.volume}
                max='1'
                min='0'
                step='0.01'
                onChange={this.handleChange}
              />
            </div>
            <div className='switch-container' onClick={this.bankToggle}>
              Bank
              <div className='switch-box'>
                <div
                  className='switch'
                  style={{ float: this.state.bank ? 'right' : 'left' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}




export default App