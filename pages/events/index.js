import { useRouter } from 'next/router';
import EventsList from '../../components/events/events-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../dummy-data';

export default function AllEventsPage() {
    const events = getAllEvents();
    const router = useRouter();

    function findEventHandler(year, month) {
        router.push(`/events/${year}/${month}`);
    }
    return (
        <>
            <EventsSearch onSearch={findEventHandler} />
            <EventsList events={events} />
        </>
    );
}
