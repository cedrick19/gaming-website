import Layout from "@/layout/layout";
import { PageData } from "@/ts/PageData";
import { Page, Block, List, ListItem } from "framework7-react";

const GamesIndexPage = () => {
  return (
    <Page name="game-index">
      <Layout>
        <Block>
          This is a test for games page for mobile! Feel free to access these
          sites:
        </Block>
        <List>
          {PageData.filter((page) => page.name !== "Home" && page.name !== "Preferential Activities" && page.name !== "Profile").map(
            ({ name, path }, index) => (
              <ListItem key={index} title={`Play ${name}`} link={path} />
            ),
          )}
        </List>
      </Layout>
    </Page>
  );
};

export default GamesIndexPage;
