import { useRouter } from 'next/router';
import { Fragment } from 'react';
import EventsList from '../../components/events/events-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
import { getFilteredEvents } from '../../dummy-data';

export default function FilterEventPage(props) {
    const router = useRouter();

    const filteredData = router.query.slug;

    if (!filteredData) {
        return <p className="center">Loading....</p>;
    }

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

    const filteredEvents = getFilteredEvents({ year, month });

    if (!filteredEvents || filteredEvents.length === 0) {
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

    const date = new Date(year, month - 1);

    return (
        <>
            <ResultsTitle date={date} />
            <EventsList events={filteredEvents} />
        </>
    );
}
