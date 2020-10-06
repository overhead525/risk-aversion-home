import * as React from "react";
import { graphql } from "gatsby";
import { SingleBlogPostQueryResponse } from "../components/genericBlogPage";

import GenericBlogPage from "../components/genericBlogPage";

interface Props {
    data: SingleBlogPostQueryResponse;
}

const BirdsEyeViewPage: React.FC<Props> = ({ data }) => {
    return <GenericBlogPage documentData={data} />;
};

export const query = graphql`
    query BirdsEyeViewPostQuery {
        contentfulBlogPost(title: { eq: "Bird's Eye View" }) {
            body {
                json
            }
            title
        }
    }
`;

export default BirdsEyeViewPage;
