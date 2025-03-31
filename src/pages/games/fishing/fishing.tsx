import React from "react";
import { Page, Navbar } from "framework7-react";
import Layout from "@/layout/layout";

const Fishing: React.FC = () => {
  return (
    <Page>
      <Layout>
        <Navbar title="This is fishing" />
        <p className="text-center">Welcome to the Fishing page!</p>
      </Layout>
    </Page>
  );
};

export default Fishing;
