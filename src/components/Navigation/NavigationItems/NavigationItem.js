import React from 'react';
import classes from './NavigationItem.css';
import IndiNavigationItem from './IndividualNavItems/IndividualNavItems';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <IndiNavigationItem link="/" active>Burger Builder</IndiNavigationItem>
        <IndiNavigationItem link="/">Checkout</IndiNavigationItem>
    </ul>
)

export default navigationItems