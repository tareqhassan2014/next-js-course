import { useRouter } from 'next/router';
import EventsList from '../../components/events/events-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../helpers/api-util';

export default function AllEventsPage({ events }) {
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

export async function getStaticProps() {
    const events = await getAllEvents();

    return {
        props: {
            events,
        },
        revalidate: 5,
    };
}
