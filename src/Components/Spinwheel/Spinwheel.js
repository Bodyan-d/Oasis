import "./Spinwheel.css";
import React, { useState } from 'react';


const SpinWheel = () => {
  const [showModal, setShowModal] = useState(false);
  const [SelectedItem, setSelectedItem] = useState("");
  const [disabled, setDisabled] = useState(false);
  let [attempts, setAttempts] = useState(2);

  function shuffle(array){
    let currentIndex = array.length, randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // eslint-disable-next-line no-self-assign
      [array[currentIndex], array[randomIndex]] = [array[currentIndex], array[currentIndex],];
    }
    return array;
  }
  
  function spin(){
    setDisabled(true)
    const box = document.getElementById("box")
    const element = document.getElementById("mainbox")
  
    let Bonus1 = shuffle([1880, 1570, 1930])
    let Tryagain1 = shuffle([2350, 1980])
    let Bonusdep1 = shuffle([1870, 2170, 2370])
    let Tryagain2 = shuffle([2490, 2130])
    let Bonus2 = shuffle([1950, 2310, 2290])
    let Tryagain3 = shuffle([2110, 1900])
    let Bonusdep2 = shuffle([2010, 2390, 2380])
  
    let results = shuffle([
        Bonus1[0],
        Tryagain1[0],
        Bonusdep1[0],
        Tryagain2[0],
        Bonus2[0],
        Tryagain3[0],
        Bonusdep2[0],
    ])
  
    if(Bonus1.includes(results[0])) setSelectedItem("BONUS 250 FS");
    if(Tryagain1.includes(results[0]))setSelectedItem( "WITHOUT PRIZE");
    if(Bonusdep1.includes(results[0])) setSelectedItem("BONUS 150% FOR DEPOSIT");
    if(Tryagain2.includes(results[0])) setSelectedItem( "TRY AGAIN");
    if(Bonus2.includes(results[0])) setSelectedItem("BONUS 250 FS");
    if(Tryagain3.includes(results[0])) setSelectedItem( "TRY AGAIN");
    if(Bonusdep2.includes(results[0])) setSelectedItem("BONUS 150% FOR DEPOSIT");
  
    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + results[0] + "deg)";
    element.classList.remove("animate");
    setAttempts(()=>{
      return attempts - 1;
    })
  
    setTimeout(function () {
        element.classList.add("animate")
    }, 5000)
  
    setTimeout(function () {
      setDisabled(false)
      setShowModal(true)
    },6000)
    setTimeout(function () {
        box.style.setProperty("transition", "initial")
        box.style.transform = "rotate(90deg)"
    }, 6000)
  }

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <p className="attempts">ATTEMPTS: {attempts}</p>
      <div className="mainbox" id="mainbox" >
        <div className="sercule"></div>
        <div className="box" id="box">
          <div className="box1">
            <span className="font span1"><h5>BONUS 250 FS</h5></span> 
            <span className="font span2"><h5>WITHOUT PRIZE</h5></span>
            <span className="font span3"><h5>BONUS 150% FOR DEPOSIT</h5></span>
            <span className="font span4"><h5>TRY AGAIN</h5></span> 
            <span className="font span5"><h5>BONUS 250 FS</h5></span>
          </div>
          <div className="box2">
          <span className="font span1"><h5>TRY AGAIN</h5></span>
            <span className="font span2"><h5>BONUS 150% FOR DEPOSIT</h5></span>
            <span className="font span3"><h5>WITHOUT PRIZE</h5></span>
            <span className="font span4"><h5>BONUS 250 FS</h5></span>
            <span className="font span5"><h5>TRY AGAIN</h5></span>

          </div>
        </div>
        <button disabled={disabled}  className="spin" onClick={spin}>SPIN</button>

        {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Congratulations!</h2>
            <p>You won a {SelectedItem}</p>
            <button onClick={closeModal}>Spin More</button>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default SpinWheel;