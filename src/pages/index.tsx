import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

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
            <aside className="menu column is-one-fifth">
                <p className="menu-label">Motivation</p>
                <ul className="menu-list">
                    <li>
                        <a>Why Build This?</a>
                    </li>
                    <li>
                        <a>Who Uses Risk Aversion?</a>
                    </li>
                </ul>
                <p className="menu-label">Architecture</p>
                <ul className="menu-list">
                    <li>
                        <a>Bird's Eye View</a>
                    </li>
                    <li>
                        <a>Details</a>
                        <ul>
                            <li>
                                <a>Simulation Core</a>
                            </li>
                            <li>
                                <a>Simulation Request API</a>
                            </li>
                            <li>
                                <a>Web Application Backend</a>
                            </li>
                            <li>
                                <a>User Interface</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <p className="menu-label">Engineering Highlights</p>
                <ul className="menu-list">
                    <li>
                        <a>Coming Soon...</a>
                    </li>
                </ul>
            </aside>
            <div className="column is-four-fifths">
                <h1>Hello</h1>
            </div>
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
