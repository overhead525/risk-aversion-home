import * as React from "react";
import { graphql } from "gatsby";
import { SingleBlogPostQueryResponse } from "../components/genericBlogPage";

import GenericBlogPage from "../components/genericBlogPage";

interface Props {
    data: SingleBlogPostQueryResponse;
}

const SimulationRequestAPIPage: React.FC<Props> = ({ data }) => {
    return <GenericBlogPage documentData={data} />;
};

export const query = graphql`
    query SimulationRequestAPIPostQuery {
        contentfulBlogPost(title: { eq: "Simulation Request API" }) {
            body {
                json
            }
            title
        }
    }
`;

export default SimulationRequestAPIPage;
