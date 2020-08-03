import React from 'react';
import classes from './IndividualNavItems.css';

const indiNavigationItem = (props) => (
    <li className={classes.IndiNavigationItem}>
        <a
            href={props.link}
            className={props.active ? classes.active : null}>{props.children}</a>
    </li>
)

export default indiNavigationItem;