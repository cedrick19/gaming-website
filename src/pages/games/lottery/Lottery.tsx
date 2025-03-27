import React from "react";
import { Page, Navbar, Block, List, ListItem, Link } from "framework7-react";
import { getDevice, Router } from "framework7/types";

interface DynamicGameRouteProps {
  f7route: Router.Route;
  f7router: Router.Router;
}

export const GamePage: React.FC<DynamicGameRouteProps> = (props) => {
  const { f7route, f7router } = props;
  const gameId = f7route.params.id;

  const goBack = () => f7router.back();
  const device = getDevice();

  return (
    <Page>
      <Navbar title={`${gameId}`} backLink="Back" />
      <Block strong inset>
        <p>Welcome to {gameId}!</p>
      </Block>

      {device.desktop && (
        <Block>
          <Link onClick={goBack} className="text-blue-500">
            Go back?
          </Link>
        </Block>
      )}
    </Page>
  );
};

const Lottery: React.FC = () => {
  const gameSampleArray = ["Starship Fighters", "Sports Betting", "Poker"];

  return (
    <Page name="lottery">
      <Navbar title="Lottery" className="flex md:hidden" />
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
    </Page>
  );
};

export default Lottery;
