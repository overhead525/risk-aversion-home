import * as React from "react";
import { graphql } from "gatsby";
import { SingleBlogPostQueryResponse } from "../components/genericBlogPage";

import GenericBlogPage from "../components/genericBlogPage";

interface Props {
    data: SingleBlogPostQueryResponse;
}

const WhoUsesRiskAversionPage: React.FC<Props> = ({ data }) => {
    return <GenericBlogPage documentData={data} />;
};

export const query = graphql`
    query WhoUsesRiskAversionPostQuery {
        contentfulBlogPost(title: { eq: "Who Uses Risk Aversion?" }) {
            body {
                json
            }
            title
        }
    }
`;

export default WhoUsesRiskAversionPage;
