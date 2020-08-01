import React from 'react';
import Aux from '../../hoc/Aaux';
import CssClass from '../Layout/Layout.css';

const layout = (props) => (
    <Aux>
        <div>Toolbar,SideDrawer,Backdrop</div>
        <main className={CssClass.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;