import * as React from "react";
import { Link } from "gatsby";

import "bulma/css/bulma.min.css";
import "./layoutTrue.css";

interface MenuProps {
    activePage: string;
}

const Menu: React.FC<MenuProps> = ({ activePage }) => {
    React.useEffect(() => {
        const choices = document.getElementsByClassName("menu-choice");
        const choice = document.querySelector(`a[id="${activePage}"]`);
        Array.from(choices).forEach((choice) => {
            choice.classList.remove("is-active");
        });
        choice?.classList.add("is-active");
        console.log(choice);
    });

    // create a function that sends an action to the store with the following properties
    /*
        {
            type: MENU_SELECTION,
            payload: 0 || 1 || 2  // Corresponds to the position of the menu selection
        }    
    */
    return (
        <aside className="menu column is-one-fifth">
            <div className="sticky">
                <p className="menu-label">Motivation</p>
                <ul className="menu-list">
                    <li>
                        <Link
                            to="/why-build-this/"
                            className="menu-choice"
                            id="Why Build This?"
                        >
                            Why Build This?
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/who-uses-risk-aversion/"
                            className="menu-choice"
                            id="Who Uses Risk Aversion?"
                        >
                            Who Uses Risk Aversion?
                        </Link>
                    </li>
                </ul>
                <p className="menu-label">Architecture</p>
                <ul className="menu-list">
                    <li>
                        <Link
                            to="/birds-eye-view/"
                            className="menu-choice"
                            id="Bird's Eye View"
                        >
                            Bird's Eye View
                        </Link>
                    </li>
                    <li>
                        <a>Details</a>
                        <ul>
                            <li>
                                <Link
                                    to="/simulation-core/"
                                    className="menu-choice"
                                    id="Simulation Core"
                                >
                                    Simulation Core
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/simulation-request-api/"
                                    className="menu-choice"
                                    id="Simulation Request API"
                                >
                                    Simulation Request API
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/web-application-backend/"
                                    className="menu-choice"
                                    id="Web Application Backend"
                                >
                                    Web Application Backend
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/user-interface/"
                                    className="menu-choice"
                                    id="User Interface"
                                >
                                    User Interface
                                </Link>
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
            </div>
        </aside>
    );
};

export default Menu;
