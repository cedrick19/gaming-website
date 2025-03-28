import React from "react";
import { Page, Navbar } from "framework7-react";
import Layout from "@/layout/layout";

const Electronic: React.FC = () => {
  return (
    <Page>
      <Layout>
        <Navbar title="This is Electronic" />
        <p className="text-center">Welcome to the Electronic page!</p>
      </Layout>
    </Page>
  );
};

export default Electronic;
