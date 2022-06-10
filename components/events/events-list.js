import React from 'react';
import EventItem from './event-item';

export default function EventsList(props) {
    return (
        <div>
            {props.events.map((event) => (
                <EventItem
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    date={event.date}
                    location={event.location}
                    image={event.image}
                />
            ))}
        </div>
    );
}
