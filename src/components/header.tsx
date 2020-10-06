import * as React from "react";
import { Link } from "gatsby";
import { mdiLinkedin } from "@mdi/js";

import "bulma/css/bulma.min.css";

type Props = {
    siteTitle: string;
};

const Header: React.FC<Props> = ({ siteTitle }: Props) => (
    <header
        style={{
            background: `hsl(204, 86%, 53%)`,
            marginBottom: `1.45rem`,
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <div className="columns">
                <h1 className="column is-three-fifths" style={{ margin: 0 }}>
                    <Link
                        to="/"
                        style={{
                            color: `white`,
                            textDecoration: `none`,
                        }}
                    >
                        {siteTitle}
                    </Link>
                </h1>
                <div className="column is-two-fifths">
                    <p>Created by Ritchel Cousar Jr.</p>
                </div>
            </div>
        </div>
    </header>
);

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
