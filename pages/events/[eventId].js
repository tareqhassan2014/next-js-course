import { useRouter } from 'next/router';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import ErrorAlert from '../../components/ui/error-alert';
import { getEventById } from '../../dummy-data';

export default function EventDetailPage(props) {
    const router = useRouter();

    const event = getEventById(router.query.eventId);

    if (!event) {
        return (
            <ErrorAlert>
                <p>No events found !</p>
            </ErrorAlert>
        );
    }

    return (
        <div>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </div>
    );
}
