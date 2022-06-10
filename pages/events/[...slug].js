import { useRouter } from 'next/router';
import { Fragment } from 'react';
import EventsList from '../../components/events/events-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
import { getFilteredEvents } from '../../helpers/api-util';

export default function FilterEventPage({
    events,
    hasError,
    date: { year, month },
}) {
    const router = useRouter();

    if (hasError) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>Invalid filter. Please adjust your values!</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
        );
    }

    if (!events || events.length === 0) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>No events found for the chosen filter!</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
        );
    }

    const NewDate = new Date(year, month - 1);

    return (
        <>
            <ResultsTitle date={NewDate} />
            <EventsList events={events} />
        </>
    );
}

export async function getServerSideProps(context) {
    const filteredData = context.query.slug;

    const year = +filteredData[0];
    const month = +filteredData[1];

    if (
        isNaN(year) ||
        isNaN(month) ||
        year > 2030 ||
        year < 2021 ||
        month < 1 ||
        month > 12
    ) {
        return {
            props: {
                hasError: true,
            },
        };
    }

    // first day of the month
    const firstDay = new Date(year, month - 1, 1).toISOString();
    // last day of the month
    const lastDay = new Date(year, month, 0).toISOString();

    const events = await getFilteredEvents(
        `date[gte]=${firstDay}&date[lte]=${lastDay}`
    );

    return {
        props: {
            events,
            date: {
                year,
                month,
            },
        },
    };
}
