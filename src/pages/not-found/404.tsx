import { PageContainer } from "@/components/PageContainer";
import { Page, Navbar } from "framework7-react";

const NotFoundPage = () => (
  <Page>
    <Navbar title="Not found" backLink="Back" />
    <PageContainer>
      <p>Sorry</p>
      <p>Requested content not found.</p>
    </PageContainer>
  </Page>
);

export default NotFoundPage;
