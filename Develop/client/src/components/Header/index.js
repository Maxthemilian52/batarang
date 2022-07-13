import React from 'react';

function Header() {
    return (
        <header>
            <div>
                <div>
                    <h1>CMA Docent</h1>
                </div>
                <div>
                    <a href=''><button><i facebook></i></button></a>
                    <a href=''><button><i Twitter></i></button></a>
                    <a href=''><button><i Instagram></i></button></a>
                </div>
            </div>
            <div>
                <div>
                    <h2>Volunteer Blog</h2>
                </div>
                <div>
                    <a href='/home'><button>Home</button></a>
                    <a href='/posts'><button>Posts</button></a>
                    <a href='/directory'><button>Directory</button></a>
                    <a href='/events'><button>Events</button></a>

                </div>
            </div>
        </header>
    )
}

export default Header;