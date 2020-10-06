import * as React from "react";
import { graphql } from "gatsby";
import { SingleBlogPostQueryResponse } from "../components/genericBlogPage";

import GenericBlogPage from "../components/genericBlogPage";

interface Props {
    data: SingleBlogPostQueryResponse;
}

const WebApplicationBackendPage: React.FC<Props> = ({ data }) => {
    return <GenericBlogPage documentData={data} />;
};

export const query = graphql`
    query WebApplicationBackendPostQuery {
        contentfulBlogPost(title: { eq: "Web Application Backend" }) {
            body {
                json
            }
            title
        }
    }
`;

export default WebApplicationBackendPage;
