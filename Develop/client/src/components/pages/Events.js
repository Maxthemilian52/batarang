import React from 'react';
import Header from '../Header'



function Events() {
    return (
        <body>
        <Header></Header>
            <div>
                <div class="allEvents">
                        <div class="eventColumn1">
                            <div class="event1">
                            <h3>First Event</h3>
                            </div>
                            <div class="event2">
                            <h3>Second Event</h3>
                            </div>
                            <div class="event3">
                            <h3>Third Event</h3>
                            </div>
                        </div>
                        <div class="eventColumn2">
                            <div class="event1">
                            <h3>Fourth Event</h3>
                            </div>
                            <div class="event2">
                            <h3>Fifth Event</h3>
                            </div>
                            <div class="event3">
                            <h3>Sixth Event</h3>
                            </div>
                        </div>
                        
                    </div>
                    <div class="pageSelector1">
                    <div class="pageSelector">Page <div><a href="">1</a></div><div><a href="">2</a></div><div><a href="">3</a></div><div><a href="">4</a></div><div><a href="">5</a></div></div>
                    </div>
                </div>
                
            
        </body>


        );
}


export default Events;