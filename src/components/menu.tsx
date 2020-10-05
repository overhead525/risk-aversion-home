import * as React from "react";
import { Link } from "gatsby";

import "bulma/css/bulma.min.css";

interface MenuProps {
    activePage: string;
}

const Menu: React.FC = () => {
    // create a ref for each menu component
    // create a function that sends an action to the store with the following properties
    /*
        {
            type: MENU_SELECTION,
            payload: 0 || 1 || 2  // Corresponds to the position of the menu selection
        }    
    */
    return (
        <aside className="menu column is-one-fifth">
            <p className="menu-label">Motivation</p>
            <ul className="menu-list">
                <li>
                    <a>Why Build This?</a>
                </li>
                <li>
                    <a>Who Uses Risk Aversion?</a>
                </li>
            </ul>
            <p className="menu-label">Architecture</p>
            <ul className="menu-list">
                <li>
                    <a>Bird's Eye View</a>
                </li>
                <li>
                    <a>Details</a>
                    <ul>
                        <li>
                            <a>Simulation Core</a>
                        </li>
                        <li>
                            <a>Simulation Request API</a>
                        </li>
                        <li>
                            <a>Web Application Backend</a>
                        </li>
                        <li>
                            <a>User Interface</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <p className="menu-label">Engineering Highlights</p>
            <ul className="menu-list">
                <li>
                    <a>Coming Soon...</a>
                </li>
            </ul>
        </aside>
    );
};

export default Menu;
