import "./Spinwheel.css";
import React, { useRef, useEffect, useState } from 'react';

const translations = {
  bonus250fs: "BONUS 250 FS",
  tryAgain: "TRY AGAIN",
  bonus150Deposit: "BONUS 150% FOR DEPOSIT",
  noPrize: "WITHOUT PRIZE",
  spinButton: "Spin",
  spinning: "Spinning..."
};

const segments = [
  { angle: 0, label: translations.bonus250fs },
  { angle: 30, label: translations.tryAgain },
  { angle: 60, label: translations.bonus150Deposit },
  { angle: 90, label: translations.noPrize },
  { angle: 120, label: translations.bonus250fs },
  { angle: 150, label: translations.tryAgain },
  { angle: 180, label: translations.bonus150Deposit },
  { angle: 210, label: translations.noPrize },
  { angle: 240, label: translations.bonus250fs },
  { angle: 270, label: translations.tryAgain },
  { angle: 300, label: translations.bonus150Deposit },
  { angle: 330, label: translations.noPrize }
];

const SpinWheel = () => {
  const [rotation, setRotation] = useState(90); // Initial position
  const [selectItem, setSelectItem] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const mainBoxRef = useRef(null);
  const [elementUnderPseudo, setElementUnderPseudo] = useState(null);

  const spin = () => {
    setIsSpinning(true);

    const randomAngle = Math.floor(Math.random() * 360);
    const totalRotation = 3600 + randomAngle; // 10 full rotations plus random angle
    setRotation(rotation + totalRotation);

    const resultAngle = (totalRotation + 90) % 360; // Add initial position offset and get the result angle
    const selectedSegment = segments.find(segment => segment.angle === resultAngle);

    const checkElementUnderPseudo = () => {
      if (mainBoxRef.current) {
        const rect = mainBoxRef.current.getBoundingClientRect();
        const pseudoElementWidth = rect.width * 0.5;
        const pseudoElementLeft = rect.left + rect.width * 0.46;
        const pseudoElementCenterX = pseudoElementLeft + pseudoElementWidth / 2;

        for (let yOffset = 0; yOffset <= 100; yOffset++) {
          const element = document.elementFromPoint(pseudoElementCenterX, rect.top + yOffset);
          if (element && element.tagName === 'h5') {
            setElementUnderPseudo(element);
            break;
          }
        }
      }
    };

    setSelectItem(selectedSegment ? selectedSegment.label : translations.tryAgain);
    setTimeout(() => {
      setTimeout(() => {
        checkElementUnderPseudo();
        setIsSpinning(false);
      }, 1000); // Затримка 1 секунда після зупинки обертання перед оновленням стану
    }, 5000); // Alert after 5 seconds, same as the duration of the transition
  };

  // useEffect(() => {
  //   if (!isSpinning) {
  //     setRotation(90); // Reset to initial position after spinning
  //   }
  // }, [isSpinning]);

  return (
    <>
      <p className="attempts">ATTEMPTS: 2</p>
      <div className="mainbox" id="mainbox" ref={mainBoxRef}>
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
            <span className="font span1"><h5>{translations.bonus250fs}</h5></span>
            <span className="font span2"><h5>{translations.tryAgain}</h5></span>
            <span className="font span3"><h5>{translations.bonus150Deposit}</h5></span>
            <span className="font span4"><h5>{translations.noPrize}</h5></span>
            <span className="font span5"><h5>{translations.bonus250fs}</h5></span>
            <span className="font span6"><h5>{translations.tryAgain}</h5></span>
          </div>
          <div className="box2">
            <span className="font span7"><h5>{translations.bonus150Deposit}</h5></span>
            <span className="font span8"><h5>{translations.noPrize}</h5></span>
            <span className="font span9"><h5>{translations.bonus250fs}</h5></span>
            <span className="font span10"><h5>{translations.tryAgain}</h5></span>
            <span className="font span11"><h5>{translations.bonus150Deposit}</h5></span>
            <span className="font span12"><h5>{translations.noPrize}</h5></span>
          </div>
        </div>
        <button className="spin" onClick={spin} disabled={isSpinning}>
          {translations.spinButton}
        </button>
        {isSpinning ? <p>{translations.spinning}</p> : <p>{elementUnderPseudo ? `Під псевдоелементом зараз: ${elementUnderPseudo.innerText}` : "Елемент не знайдено"}</p>}
      </div>
    </>
  );
};

export default SpinWheel;