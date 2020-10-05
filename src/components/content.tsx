import * as React from "react";
import { Link } from "gatsby";

import "bulma/css/bulma.min.css";

interface ContentProps {}

const Content: React.FC = () => {
    // derive content from contentful graphql request data (probably rich text)
    return (
        <div className="column is-four-fifths">
            <h1>Hello</h1>
        </div>
    );
};

export default Content;
