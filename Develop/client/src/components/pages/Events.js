import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_EVENTS } from '../../utils/queries/queries';



function Events() {

    const { loading, data } = useQuery(QUERY_EVENTS);
    const events = data?.allEvents || [];

    return (
        <main>
            <div>
                <div className="allEvents">
                        <div className="e">
                            {events.map((event,i) => (
                            <div className="event1">
                                <h2>{event.eventName}</h2> 
                                <p>{event.eventSummary}</p>
                                <h3>{event.date}</h3>
                                <h3>{event.volunteers}</h3>
                            </div>
                            ))}
                        </div>
                        
                    </div>
                </div>
        </main>
        );
}


export default Events;