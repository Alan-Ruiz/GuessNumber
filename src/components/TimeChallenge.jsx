import { useState } from 'react';
export default function TimeChallenge({ title, targetTime }) {
  const [buttonTitle, setButtonTitle] = useState("Start Challenge")

  function handleClick() {
    console.log(start)
    if (buttonTitle === "Start Challenge") {
      setButtonTitle("Stop")
      let end = new Date().getTime();
      let time = end - start;
      console.log(time)
    } else {
      let start = new Date().getTime();
      setButtonTitle("Start Challenge")
    }
  };

  function startCount() {
    setButtonTitle("Stop")
    let start = new Date().getTime();
    return start
  }

  function running(buttonTitle) {
    if (buttonTitle === "Start Challenge") {
      false
    } else {
      true
    }
  };

  return <section className="challenge">
    <h2>{title}</h2>
    <p className="challenge-time">
      {targetTime} second{targetTime > 1 ? 's' : ''}
    </p>
    <p>
      <button onClick={handleClick}>
        {buttonTitle}
      </button>
    </p>
    <p className="">
      Time is running... / Timer inactive
    </p>
  </section>
}