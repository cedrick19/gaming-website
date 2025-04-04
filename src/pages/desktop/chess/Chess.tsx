import React from "react";
import { Page, Navbar } from "framework7-react";
import Layout from "@/layout/layout";

const Chess: React.FC = () => {
  return (
    <Page>
      <Layout>
        <Navbar title="This is Chess" />
        <p className="text-center">Welcome to the Chess page!</p>
      </Layout>
    </Page>
  );
};

export default Chess;
