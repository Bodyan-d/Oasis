function shuffle(array){
    let currentIndex = array.length, randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[currentIndex], array[currentIndex],];
    }
    return array;
  }
  
  function spin(){
    const box = document.getElementById("box")
    const element = document.getElementById("mainbox")
    let SelectItem = "";
  
    let Bonus1 = shuffle([1890, 2250, 2260])
    let Tryagain1 = shuffle([1850, 2210, 2570])
    let Bonusdep1 = shuffle([1770, 2170, 2530])
    let Tryagain2 = shuffle([1810, 2170, 2530])
    let Bonus2 = shuffle([1750, 2110, 2470])
    let Tryagain3 = shuffle([1630, 1990, 2350])
    let Bonusdep2 = shuffle([1570, 1930, 2290])
  
    let results = shuffle([
        Bonus1[0],
        Tryagain1[0],
        Bonusdep1[0],
        Tryagain2[0],
        Bonus2[0],
        Tryagain3[0],
        Bonusdep2[0],
    ])
  
    if(Bonus1.includes(results[0])) SelectItem = "BONUS 250 FS";
    if(Tryagain1.includes(results[0])) SelectItem = "TRY AGAIN";
    if(Bonusdep1.includes(results[0])) SelectItem = "BONUS 150% FOR DEPOSIT";
    if(Tryagain2.includes(results[0])) SelectItem = "TRY AGAIN";
    if(Bonus2.includes(results[0])) SelectItem = "BONUS 250 FS";
    if(Tryagain3.includes(results[0])) SelectItem = "TRY AGAIN";
    if(Bonusdep2.includes(results[0])) SelectItem = "BONUS 150% FOR DEPOSIT";
  
    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + results[0] + "deg)";
    element.classList.remove("animate");

    setTimeout(function () {
        element.classList.add("animate")
    })
  
    setTimeout(function () {
        // alert
    })
    setTimeout(function () {
        box.style.setProperty("transition", "initial")
        box.style.transform = "rotate(90deg)"
    }, 6000)
  }
