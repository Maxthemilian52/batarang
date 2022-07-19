import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_EVENTS } from '../../utils/queries/queries';



function Events() {

    const { loading, data } = useQuery(QUERY_EVENTS);
    const events = data?.allEvents || [];

    return (
        <main>
            <div>
                <div className="allEvents d-flex justify-content-center">
                        <div className="card postCard outlineCard">
                        <div className='d-flex justify-content-center'>
                            <h2>Events</h2>
                        </div>
                            {events.map((event,i) => (
                            <div className="card w-100">
                                <div className='card-header d-flex justify-content-between w-100'><h4>{event.eventName}</h4><h6>Start Date: {event.date}</h6></div> 
                                <p>{event.eventSummary}</p>
                                <h5>Volunteers: {event.volunteers}</h5>
                            </div>
                            ))}
                        </div>
                        
                    </div>
                </div>
        </main>
        );
}


export default Events;