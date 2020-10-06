import * as React from "react";
import { graphql } from "gatsby";
import { SingleBlogPostQueryResponse } from "../components/genericBlogPage";

import GenericBlogPage from "../components/genericBlogPage";

interface Props {
    data: SingleBlogPostQueryResponse;
}

const WhyBuildThisPage: React.FC<Props> = ({ data }) => {
    return <GenericBlogPage documentData={data} />;
};

export const query = graphql`
    query WhyBuildThisPostQuery {
        contentfulBlogPost(title: { eq: "Why Build This?" }) {
            body {
                json
            }
            title
        }
    }
`;

export default WhyBuildThisPage;
