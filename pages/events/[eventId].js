import Head from 'next/head';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import ErrorAlert from '../../components/ui/error-alert';
import { getEventById, getFeaturedEvents } from '../../helpers/api-util';

export default function EventDetailPage({ event }) {
    if (!event) {
        return (
            <ErrorAlert>
                <p>No events found !</p>
            </ErrorAlert>
        );
    }

    return (
        <div>
            <Head>
                <title>{event.title}</title>
                <meta name="description" content={event.description} />
            </Head>
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

export async function getStaticProps({ params }) {
    const event = await getEventById(params.eventId);

    return {
        props: {
            event,
        },
        revalidate: 30,
    };
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents();
    const paths = events.map((event) => ({
        params: {
            eventId: event._id,
        },
    }));

    return {
        paths,
        fallback: true,
    };
}
