import React from 'react'
//import styles from '../pagesstyles/DrumMachine.module.css'
import Helmet from 'react-helmet'

const soundsOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const soundsTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

export function DrumMachine() {

  //Initializing state using Hooks
  const [bank, setBank] = React.useState(soundsTwo);
  const [notes, setNotes] = React.useState("Notes for user");
  const [on, setOn] = React.useState(false)

  // Handling Power off and on button
  const Power = () => {
    if (on === true) {
      setOn(false);
      setNotes("Off");
    } else {
      if (on === false) {
        setOn(true);
        setNotes("On");
      }
    }
    console.log(on)
  }

  // Handler for changing Banks button
  const changeBanks = () => {
    if (on === true) {
      if (bank === soundsOne) {
        setBank(soundsTwo);
        setNotes("Smooth Piano")
        console.log(bank[1].id);
      } else {
        if (bank === soundsTwo) {
          setBank(soundsOne);
          setNotes("Heaters")
          console.log(bank[1].id);
        }
      }
    } else { setNotes("Off") }
  }

  return (
    <div id="drum-machine" className="container pt-5" >
      <Helmet>
        <link rel="stylesheet" href='../pagesstyles/SurveyPage.module.css' />
      </Helmet>
      <div id="display" className="text-center">
        <h2>Drum Machine</h2>
        <SoundButtons
          on={on}
          setNotes={setNotes}
          Bank={bank}
          Power={Power}
        />
        <ChangingSounds id="ChangingSounds"
          Power={Power}
          changeBanks={changeBanks}
          notes={notes}
          on={on}
        />
      </div>
    </div>
  );
}

function SoundButtons(props) {

  return (
    <div>
      {props.Bank.map((tone) => (
        <SoundButton

          on={props.on}
          setNotes={props.setNotes}
          id="soundButton"
          key={tone.id}
          tone={tone}
          Power={props.Power}
        />
      ))}
    </div>
  )
}

function SoundButton(props) {
  React.useEffect(() => {
    document.addEventListener
      ("keydown", handleKeyPress);
    return () => {
      document.removeEventListener
        ("keydown", handleKeyPress);
    };
  }, [props.on]);

  const handleKeyPress = (e) => {
    if (e.keyCode === props.tone.keyCode) {
      playSound();
    }
  };

  const playSound = () => {
    if (props.on === true) {
      const audioTag = document.getElementById(props.tone.keyTrigger);
      audioTag.currentTime = 0;
      audioTag.play();
      props.setNotes(props.tone.id);
      console.log(props.tone.id)
    } else {
      props.setNotes("Off")
      console.log("props.on: " + props.on)
    }
  }

  return (
    <button
      id="audio"
      className="drum-pad lm-2 p-3"
      onClick={playSound}
    >
      <audio
        className="clip"
        id={props.tone.keyTrigger}
        src={props.tone.url}
      />
      {props.tone.keyTrigger}
    </button>
  );
}

function ChangingSounds(props) {
  const notes = props.notes;

  return (
    <div id="ChangingSounds">

      <button
        className="PowerButton"
        onClick={props.Power}
      >Power
      </button>

      <div id="soundinfo">

        <button className="BankButton" onClick={props.changeBanks}>Bank</button>
        <div id="notes">{notes}</div>

      </div>

    </div>
  )
}

export class DMAppWrapper extends React.Component {
  render() {
    return (
      <section id="DMAppWrapper" >
        <DrumMachine  />
      </section>
    );
  }
}

// className={styles}

export default DMAppWrapper;
