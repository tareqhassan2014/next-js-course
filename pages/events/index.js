import Head from 'next/head';
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
            <Head>
                <title>Next js Events</title>
                <meta
                    name="description"
                    content="find a lot of events that allow you evolve"
                />
            </Head>
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
