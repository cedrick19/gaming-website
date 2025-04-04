import React from "react";
import { Page, Navbar, Block, List, ListItem } from "framework7-react";
import { Router } from "framework7/types";
import Layout from "@/layout/layout";

interface DynamicGameRouteProps {
  f7route: Router.Route;
  f7router: Router.Router;
}

export const GamePage: React.FC<DynamicGameRouteProps> = (props) => {
  const { f7route } = props;
  const gameId = f7route.params.id;

  return (
    <Page>
      <Navbar title={`${gameId}`} backLink="Back" />
      <Layout>
        <Block strong inset>
          <p>Welcome to {gameId}!</p>
        </Block>
      </Layout>
    </Page>
  );
};

const Lottery: React.FC = () => {
  const gameSampleArray = ["Starship Fighters", "Sports Betting", "Poker"];

  return (
    <Page name="lottery">
      <Navbar title="Lottery" className="flex md:hidden" backLink={"Back"} />
      <Layout>
        <Block>
          This is a test page for lottery to test out dynamic routing! Feel free
          to access these sites:
        </Block>
        <List>
          {gameSampleArray.map((game, index) => (
            <ListItem
              key={index}
              title={`Play ${game}`}
              link={`/lottery/${game}`}
            />
          ))}
        </List>
      </Layout>
    </Page>
  );
};

export default Lottery;
