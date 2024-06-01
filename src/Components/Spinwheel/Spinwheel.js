import "./Spinwheel.css";
import React, { useState, useEffect } from 'react';

const shuffle = (array) => {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

const SpinWheel = () => {
  const [rotation, setRotation] = useState(90); // Initial position
  const [selectItem, setSelectItem] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);

  const spin = () => {
    setIsSpinning(true);

    const Bonus1 = shuffle([0, 360, 720]);         // BONUS 250 FS
    const Tryagain1 = shuffle([30, 390, 750]);     // TRY AGAIN
    const Bonusdep1 = shuffle([60, 420, 780]);     // BONUS 150% FOR DEPOSIT
    const Tryagain2 = shuffle([90, 450, 810]);     // WITHOUT PRIZE
    const Bonus2 = shuffle([120, 480, 840]);       // BONUS 250 FS
    const Tryagain3 = shuffle([150, 510, 870]);    // TRY AGAIN
    const Bonusdep2 = shuffle([180, 540, 900]);    // BONUS 150% FOR DEPOSIT
    const Tryagain4 = shuffle([210, 570, 930]);    // WITHOUT PRIZE
    const Bonus3 = shuffle([240, 600, 960]);       // BONUS 250 FS
    const Tryagain5 = shuffle([270, 630, 990]);    // TRY AGAIN
    const Bonusdep3 = shuffle([300, 660, 1020]);   // BONUS 150% FOR DEPOSIT
    const Tryagain6 = shuffle([330, 690, 1050]);   // WITHOUT PRIZE

    const results = shuffle([
      Bonus1[0],
      Tryagain1[0],
      Bonusdep1[0],
      Tryagain2[0],
      Bonus2[0],
      Tryagain3[0],
      Bonusdep2[0],
      Tryagain4[0],
      Bonus3[0],
      Tryagain5[0],
      Bonusdep3[0],
      Tryagain6[0],
    ]);

    const newRotation = results[0];

    if (Bonus1.includes(newRotation % 360)) setSelectItem("BONUS 250 FS");
    if (Tryagain1.includes(newRotation % 360)) setSelectItem("TRY AGAIN");
    if (Bonusdep1.includes(newRotation % 360)) setSelectItem("BONUS 150% FOR DEPOSIT");
    if (Tryagain2.includes(newRotation % 360)) setSelectItem("WITHOUT PRIZE");
    if (Bonus2.includes(newRotation % 360)) setSelectItem("BONUS 250 FS");
    if (Tryagain3.includes(newRotation % 360)) setSelectItem("TRY AGAIN");
    if (Bonusdep2.includes(newRotation % 360)) setSelectItem("BONUS 150% FOR DEPOSIT");
    if (Tryagain4.includes(newRotation % 360)) setSelectItem("WITHOUT PRIZE");
    if (Bonus3.includes(newRotation % 360)) setSelectItem("BONUS 250 FS");
    if (Tryagain5.includes(newRotation % 360)) setSelectItem("TRY AGAIN");
    if (Bonusdep3.includes(newRotation % 360)) setSelectItem("BONUS 150% FOR DEPOSIT");
    if (Tryagain6.includes(newRotation % 360)) setSelectItem("WITHOUT PRIZE");

    setRotation(newRotation);

    setTimeout(() => {
      alert(selectItem); // Show the alert with the result
      setIsSpinning(false);
    }, 5000); // Alert after 5 seconds, same as the duration of the transition
  };

  useEffect(() => {
    if (!isSpinning) {
      setRotation(90); // Reset to initial position after spinning
    }
  }, [isSpinning]);
  
  return (
    <div className="mainbox" id="mainbox">
      <div className="circle"></div>
      <div
        className="box"
        id="box"
        style={{
          transition: isSpinning ? "all ease 5s" : "initial",
          transform: `rotate(${rotation}deg)`
        }}
      >
        <div className="box1">
          <span className="font span1"><h5>BONUS 250 FS</h5></span>
          <span className="font span2"><h5>TRY AGAIN</h5></span>
          <span className="font span3"><h5>BONUS 150% FOR DEPOSIT</h5></span>
          <span className="font span4"><h5>WITHOUT PRIZE</h5></span>
          <span className="font span5"><h5>BONUS 250 FS</h5></span>
          <span className="font span6"><h5>TRY AGAIN</h5></span>
        </div>
        <div className="box2">
          <span className="font span7"><h5>BONUS 150% FOR DEPOSIT</h5></span>
          <span className="font span8"><h5>WITHOUT PRIZE</h5></span>
          <span className="font span9"><h5>BONUS 250 FS</h5></span>
          <span className="font span10"><h5>TRY AGAIN</h5></span>
          <span className="font span11"><h5>BONUS 150% FOR DEPOSIT</h5></span>
          <span className="font span12"><h5>WITHOUT PRIZE</h5></span>
        </div>
      </div>
      <button className="spin" onClick={spin} disabled={isSpinning}>
        Spin
      </button>
      {isSpinning ? <p>Spinning...</p> : <p>{selectItem}</p>}
    </div>
  );
};

export default SpinWheel;