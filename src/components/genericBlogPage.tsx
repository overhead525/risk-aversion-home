import * as React from "react";
import { graphql } from "gatsby";
import Layout from "./layout";
import ContentfulRichText from "./contentfulRichText";
import SEO from "./seo";

type Props = {
    documentData: SingleBlogPostQueryResponse;
};

interface Document {
    id: string;
    title: string | null | undefined;
    json: any;
}

export interface SingleBlogPostQueryResponse {
    contentfulBlogPost: {
        body: {
            json: any;
        };
        title: string;
    };
}

const GenericBlogPage: React.FC<Props> = ({ documentData }) => (
    <Layout
        pageName={documentData.contentfulBlogPost.title}
        content={
            <ContentfulRichText
                document={documentData.contentfulBlogPost.body.json}
            />
        }
    >
        <SEO title={documentData.contentfulBlogPost.title} />
    </Layout>
);

export default GenericBlogPage;
