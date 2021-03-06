import React from 'react';
import Facebook from '../../assets/images/facebook.png';
import Instagram from '../../assets/images/instagram.png';
import Twitter from '../../assets/images/twitter.png';
import Auth from '../../utils/auth'

function Header() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };

      if (Auth.loggedIn()) {
    return (
        <header>
            <div className="d-flex justify-content-between header1">
                <div>
                    <h1>CMA Docent</h1>
                </div>
                <div >
                    <a href='https://www.facebook.com/columbusmuseum/' target="_blank"><img className="icon" src={Facebook} alt="Facebook"></img></a>
                    <a href='https://twitter.com/columbusmuseum?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' target="_blank"><img className="icon" src={Twitter} alt="Twitter"></img></a>
                    <a href='https://www.instagram.com/columbusmuseum/?hl=en' target="_blank"><img className="icon" src={Instagram} alt="Instagram"></img></a>
                </div>
            </div>
            <div className="d-flex justify-content-around header2 align-items-center">
                <div>
                    <h2>Volunteer Blog</h2>
                </div>
                <div>
                    <a className="navBtn" href='/'><button className="btn btn-light">Home</button></a>
                    <a className="navBtn" href='/posts'><button className="btn btn-light">Posts</button></a>
                    <a className="navBtn" href='/directory'><button className="btn btn-light">Directory</button></a>
                    <a className="navBtn" href='/events'><button className="btn btn-light">Events</button></a>                    
                    <a className="navBtn" onClick={logout}><button className="btn btn-light">Logout</button></a>

                    
                </div>
            </div>
        </header>
    ) } else {
        return (
            <header>
            <div className="d-flex justify-content-between header1">
                <div>
                    <h1>CMA Docent</h1>
                </div>
                <div >
                    <a href='https://www.facebook.com/columbusmuseum/' target="_blank"><img className="icon" src={Facebook} alt="Facebook"></img></a>
                    <a href='https://twitter.com/columbusmuseum?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' target="_blank"><img className="icon" src={Twitter} alt="Twitter"></img></a>
                    <a href='https://www.instagram.com/columbusmuseum/?hl=en' target="_blank"><img className="icon" src={Instagram} alt="Instagram"></img></a>
                </div>
            </div>
            <div className="d-flex justify-content-around header2 align-items-center">
                <div>
                    <h2>Volunteer Blog</h2>
                </div>
                <div>
                    <a className="navBtn" href='/'><button className="btn btn-light">Home</button></a>
                    <a className="navBtn" href='/posts'><button className="btn btn-light">Posts</button></a>
                    <a className="navBtn" href='/directory'><button className="btn btn-light">Directory</button></a>
                    <a className="navBtn" href='/events'><button className="btn btn-light">Events</button></a>                    
                    <a className="navBtn" href='/login'><button className="btn btn-light">Login</button></a>
                    <a className="navBtn" href='/signup'><button className="btn btn-light">Signup</button></a>

                    
                </div>
            </div>
        </header>
        )}
}

export default Header;