import * as React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Layout from "../components/layout";
import ContentfulRichText from "../components/contentfulRichText";
import SEO from "../components/seo";

type Props = {
    location?: {
        state: any;
    };
};

interface Document {
    id: string;
    title: string | null | undefined;
    json: any;
}

interface SingleBlogPostQueryResponse {
    contentfulBlogPost: {
        body: {
            json: any;
        };
        title: string;
    };
}

/*
const tackyMenuSolution = (target: string) => {
    if (target === "Why Build This?")
        return (
            <StaticQuery
                query={graphql`
                    query SingleBlogPostQuery1 {
                        contentfulBlogPost(title: { eq: "Why Build This?" }) {
                            body {
                                json
                            }
                            title
                        }
                    }
                `}
                render={(response: SingleBlogPostQueryResponse) => {
                    console.log(response);
                    return (
                        <Layout
                            pageName={response.contentfulBlogPost.title}
                            content={
                                <ContentfulRichText
                                    document={
                                        response.contentfulBlogPost.body.json
                                    }
                                />
                            }
                        >
                            <SEO title={response.contentfulBlogPost.title} />
                        </Layout>
                    );
                }}
            />
        );
    else if (target === "Who Uses Risk Aversion?")
        return (
            <StaticQuery
                query={graphql`
                    query SingleBlogPostQuery2 {
                        contentfulBlogPost(
                            title: { eq: "Who Uses Risk Aversion?" }
                        ) {
                            body {
                                json
                            }
                            title
                        }
                    }
                `}
                render={(response: SingleBlogPostQueryResponse) => {
                    console.log(response);
                    return (
                        <Layout
                            pageName={response.contentfulBlogPost.title}
                            content={
                                <ContentfulRichText
                                    document={
                                        response.contentfulBlogPost.body.json
                                    }
                                />
                            }
                        >
                            <SEO title={response.contentfulBlogPost.title} />
                        </Layout>
                    );
                }}
            />
        );
    else if (target === "Bird's Eye View")
        return (
            <StaticQuery
                query={graphql`
                    query SingleBlogPostQuery3 {
                        contentfulBlogPost(title: { eq: "Bird's Eye View" }) {
                            body {
                                json
                            }
                            title
                        }
                    }
                `}
                render={(response: SingleBlogPostQueryResponse) => {
                    console.log(response);
                    return (
                        <Layout
                            pageName={response.contentfulBlogPost.title}
                            content={
                                <ContentfulRichText
                                    document={
                                        response.contentfulBlogPost.body.json
                                    }
                                />
                            }
                        >
                            <SEO title={response.contentfulBlogPost.title} />
                        </Layout>
                    );
                }}
            />
        );
    else if (target === "Simulation Core")
        return (
            <StaticQuery
                query={graphql`
                    query SingleBlogPostQuery4 {
                        contentfulBlogPost(title: { eq: "Simulation Core" }) {
                            body {
                                json
                            }
                            title
                        }
                    }
                `}
                render={(response: SingleBlogPostQueryResponse) => {
                    console.log(response);
                    return (
                        <Layout
                            pageName={response.contentfulBlogPost.title}
                            content={
                                <ContentfulRichText
                                    document={
                                        response.contentfulBlogPost.body.json
                                    }
                                />
                            }
                        >
                            <SEO title={response.contentfulBlogPost.title} />
                        </Layout>
                    );
                }}
            />
        );
    else if (target === "Simulation Request API")
        return (
            <StaticQuery
                query={graphql`
                    query SingleBlogPostQuery5 {
                        contentfulBlogPost(
                            title: { eq: "Simulation Request API" }
                        ) {
                            body {
                                json
                            }
                            title
                        }
                    }
                `}
                render={(response: SingleBlogPostQueryResponse) => {
                    console.log(response);
                    return (
                        <Layout
                            pageName={response.contentfulBlogPost.title}
                            content={
                                <ContentfulRichText
                                    document={
                                        response.contentfulBlogPost.body.json
                                    }
                                />
                            }
                        >
                            <SEO title={response.contentfulBlogPost.title} />
                        </Layout>
                    );
                }}
            />
        );
    else if (target === "Web Application Backend")
        return (
            <StaticQuery
                query={graphql`
                    query SingleBlogPostQuery6 {
                        contentfulBlogPost(
                            title: { eq: "Web Application Backend" }
                        ) {
                            body {
                                json
                            }
                            title
                        }
                    }
                `}
                render={(response: SingleBlogPostQueryResponse) => {
                    console.log(response);
                    return (
                        <Layout
                            pageName={response.contentfulBlogPost.title}
                            content={
                                <ContentfulRichText
                                    document={
                                        response.contentfulBlogPost.body.json
                                    }
                                />
                            }
                        >
                            <SEO title={response.contentfulBlogPost.title} />
                        </Layout>
                    );
                }}
            />
        );
    else if (target === "User Interface")
        return (
            <StaticQuery
                query={graphql`
                    query SingleBlogPostQuery7 {
                        contentfulBlogPost(title: { eq: "User Interface" }) {
                            body {
                                json
                            }
                            title
                        }
                    }
                `}
                render={(response: SingleBlogPostQueryResponse) => {
                    console.log(response);
                    return (
                        <Layout
                            pageName={response.contentfulBlogPost.title}
                            content={
                                <ContentfulRichText
                                    document={
                                        response.contentfulBlogPost.body.json
                                    }
                                />
                            }
                        >
                            <SEO title={response.contentfulBlogPost.title} />
                        </Layout>
                    );
                }}
            />
        );
};
*/

const BlogPage: React.FC<Props> = ({ location }) => {
    return (
        <StaticQuery
            query={graphql`
                query SingleBlogPostQuery2 {
                    contentfulBlogPost(
                        title: { eq: "Who Uses Risk Aversion?" }
                    ) {
                        body {
                            json
                        }
                        title
                    }
                }
            `}
            render={(response: SingleBlogPostQueryResponse) => {
                console.log(response);
                return (
                    <Layout
                        pageName={response.contentfulBlogPost.title}
                        content={
                            <ContentfulRichText
                                document={response.contentfulBlogPost.body.json}
                            />
                        }
                    >
                        <SEO title={response.contentfulBlogPost.title} />
                    </Layout>
                );
            }}
        />
    );
};

export default BlogPage;
