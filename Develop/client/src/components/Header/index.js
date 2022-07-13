import React from 'react';
import Facebook from '../../assets/images/facebook.png';
import Instagram from '../../assets/images/instagram.png';
import Twitter from '../../assets/images/twitter.png';

function Header() {
    return (
        <header>
            <div className="d-flex justify-content-between header1">
                <div>
                    <h1>CMA Docent</h1>
                </div>
                <div >
                    <a href=''><img className="icon" src={Facebook}></img></a>
                    <a href=''><img className="icon" src={Twitter}></img></a>
                    <a href=''><img className="icon" src={Instagram}></img></a>
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
                </div>
            </div>
        </header>
    )
}

export default Header;