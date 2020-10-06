import * as React from "react";
import { graphql } from "gatsby";

import "bulma/css/bulma.min.css";

import { SingleBlogPostQueryResponse } from "../components/genericBlogPage";

import GenericBlogPage from "../components/genericBlogPage";

interface Props {
    data: SingleBlogPostQueryResponse;
}

const IndexPage: React.FC<Props> = ({ data }) => {
    return <GenericBlogPage documentData={data} />;
};

export const query = graphql`
    query HomePagePostQuery {
        contentfulBlogPost(title: { eq: "Home Page" }) {
            body {
                json
            }
            title
        }
    }
`;

export default IndexPage;
