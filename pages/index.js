import Head from 'next/head';
import EventsList from '../components/events/events-list';
import { getFeaturedEvents } from '../helpers/api-util';

export default function Home({ events }) {
    return (
        <div>
            <Head>
                <title>Next js Events</title>
                <meta
                    name="description"
                    content="find a lot of events that allow you evolve"
                />
            </Head>
            <EventsList events={events} />
        </div>
    );
}

export async function getStaticProps() {
    const events = await getFeaturedEvents();

    return {
        props: {
            events,
        },
        revalidate: 60,
    };
}
