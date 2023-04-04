import * as react from 'react';
import './Banner.css'
import logo from "./images/ioc-logo.png";
import vector from "./images/vector.svg";
function Banner()
{
return(
    <section id="sec1">
            <div className="banner">
                <h1 className="neon" data-text="Welcome To">Welcome To</h1>
                <div className="logo"><img src={logo} alt=""></img></div>
                <div className="vector"><img src={vector} alt=""></img></div>
            </div>
        </section>)
}
export default Banner;
