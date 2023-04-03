import * as react from 'react';
import './Banner.css'
function Banner()
{
return(
    <section id="sec1">
            <div className="banner">
                <h1 className="neon" data-text="Welcome To">Welcome To</h1>
                <div className="logo"><img src="images/ioc-logo.png" alt=""/></div>
                <div className="vector"><img src="images/vector.svg" alt=""/></div>
            </div>
        </section>)
}
export default Banner;
