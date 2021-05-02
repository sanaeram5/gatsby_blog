import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" keywords="blog,gatsby" />
    <h1>Home Page</h1>
  </Layout>
)

export default IndexPage
