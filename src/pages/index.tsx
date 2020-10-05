import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Content from "../components/content";
import Menu from "../components/menu";

import "bulma/css/bulma.min.css";

const IndexPage: React.FC = () => (
    <Layout>
        <SEO title="Home" />
        <section className="hero">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        Learn About the <strong>Risk Aversion</strong> Project
                    </h1>
                </div>
            </div>
        </section>
        <div className="columns">
            <Menu />
            <Content />
        </div>
        <ul>
            <li>
                <Link to="/page-2/">Go to page 2</Link>
            </li>
            <li>
                <Link to="/blogPosts/">
                    Go to blog posts (Source: Contentful)
                </Link>
            </li>
        </ul>
    </Layout>
);

export default IndexPage;
