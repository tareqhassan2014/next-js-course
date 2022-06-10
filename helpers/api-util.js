export async function getFeaturedEvents() {
    const response = await fetch(
        'https://next-js-events-server.herokuapp.com/api/v1/events?isFeatured=true'
    );
    const data = await response.json();
    return data.data.data;
}

export async function getAllEvents() {
    const response = await fetch(
        'https://next-js-events-server.herokuapp.com/api/v1/events'
    );
    const data = await response.json();
    return data.data.data;
}

export async function getEventById(id) {
    const response = await fetch(
        'https://next-js-events-server.herokuapp.com/api/v1/events/' + id
    );
    const data = await response.json();
    return data.data.data;
}

export async function getFilteredEvents(filter) {
    const response = await fetch(
        'https://next-js-events-server.herokuapp.com/api/v1/events/?' + filter
    );
    const data = await response.json();
    return data?.data?.data;
}
