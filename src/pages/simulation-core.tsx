import * as React from "react";
import { graphql } from "gatsby";
import { SingleBlogPostQueryResponse } from "../components/genericBlogPage";

import GenericBlogPage from "../components/genericBlogPage";

interface Props {
    data: SingleBlogPostQueryResponse;
}

const SimulationCorePage: React.FC<Props> = ({ data }) => {
    return <GenericBlogPage documentData={data} />;
};

export const query = graphql`
    query SimulationCorePostQuery {
        contentfulBlogPost(title: { eq: "Simulation Core" }) {
            body {
                json
            }
            title
        }
    }
`;

export default SimulationCorePage;
