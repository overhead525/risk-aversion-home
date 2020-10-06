import * as React from "react";
import { graphql } from "gatsby";
import { SingleBlogPostQueryResponse } from "../components/genericBlogPage";

import GenericBlogPage from "../components/genericBlogPage";

interface Props {
    data: SingleBlogPostQueryResponse;
}

const UserInterfacePage: React.FC<Props> = ({ data }) => {
    return <GenericBlogPage documentData={data} />;
};

export const query = graphql`
    query UserInterfacePostQuery {
        contentfulBlogPost(title: { eq: "User Interface" }) {
            body {
                json
            }
            title
        }
    }
`;

export default UserInterfacePage;
