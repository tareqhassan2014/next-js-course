import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import DateIcon from '../icons/date-icon';
import Button from '../ui/button';
import classes from './event-item.module.css';

export default function EventItem({ title, location, date, image, id }) {
    const humanDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    const formateAddress = location.replace(', ', '\n');

    return (
        <li className={classes.item}>
            <img src={'/' + image} alt={title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{humanDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formateAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={'/events/' + id}>
                        <span>Explore Event</span>
                        <span className={classes.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
}
