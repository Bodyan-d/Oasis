import "./Spinwheel.css"

function Spinwheel() {

  const spin = ()=>{}
  
    return(
      <div className="mainbox" id="mainbox">
        <div className="box" id="box">
          <div className="box1">
            <span className="font span1"><p>something</p></span>
            <span className="font span2"><p>something</p></span>
            <span className="font span3"><p>something</p></span>
            <span className="font span4"><p>something</p></span>
            <span className="font span5"><p>something</p></span>
            <span className="font span6"><p>something</p></span>
          </div>
          <div className="box2">
            <span className="font span7"><p>something</p></span>
            <span className="font span8"><p>something</p></span>
            <span className="font span9"><p>something</p></span>
            <span className="font span10"><p>something</p></span>
            <span className="font span11"><p>something</p></span>
            <span className="font span12"><p>something</p></span>
          </div>
          <button className="spin" onClick={spin}>SPIN</button></div>
          
      </div>
    )
    ;
}

export default Spinwheel