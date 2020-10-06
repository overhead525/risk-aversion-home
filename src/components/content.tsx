import * as React from "react";
import { Link } from "gatsby";

import "bulma/css/bulma.min.css";

interface ContentProps {
    content: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ content }: ContentProps) => {
    // derive content from contentful graphql request data (probably rich text)
    console.log(content);

    return (
        <div className="column is-four-fifths">
            {content ? content : <h1>Hello</h1>}
        </div>
    );
};

export default Content;
