import EventItem from './event-item';
import classes from './event-list.module.css';

export default function EventsList(props) {
    return (
        <ul className={classes.list}>
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
        </ul>
    );
}
