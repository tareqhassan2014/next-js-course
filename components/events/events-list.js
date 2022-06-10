import EventItem from './event-item';

export default function EventsList(props) {
    return (
        <div>
            {props.events.map((event) => (
                <EventItem
                    key={event._id}
                    id={event._id}
                    title={event.title}
                    date={event.date}
                    location={event.location}
                    image={event.image}
                />
            ))}
        </div>
    );
}
