import image from "../../images/logo1.png"
import "./Header.css"
console.log(image)

function Header(){
    return (
        <header className="header">
          <img className="logo" src={image} alt="logo"/>
          
        </header>
      );
}

export default Header
