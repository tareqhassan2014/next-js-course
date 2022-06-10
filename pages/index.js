import EventsList from '../components/events/events-list';
import { getFeaturedEvents } from '../helpers/api-util';

export default function Home({ events }) {
    return (
        <div>
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
