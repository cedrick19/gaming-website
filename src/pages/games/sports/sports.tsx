import Layout from "@/layout/layout";
import { Page, Navbar, Block, List, ListItem, Button } from "framework7-react";

const Sports = () => {
  const sportsEvents = [
    { id: 1, name: "Football - Premier League", time: "Today, 8:00 PM" },
    { id: 2, name: "Basketball - NBA Finals", time: "Tomorrow, 9:30 PM" },
    { id: 3, name: "Tennis - Wimbledon", time: "Saturday, 5:00 PM" },
    { id: 4, name: "Cricket - World Cup", time: "Sunday, 3:00 PM" },
  ];

  return (
    <Page name="sports">
      {/* Navbar */}

      {/* Wrap content inside Layout for mx-auto effect */}
      <Layout>
        <Navbar title="🏆 Sports Events" />
        {/* Categories */}
        <Block strong className="text-center">
          <Button fill small className="margin-right">
            Live
          </Button>
          <Button outline small className="margin-right">
            Upcoming
          </Button>
          <Button outline small>
            Results
          </Button>
        </Block>

        {/* Sports List */}
        <List strong inset dividers>
          {sportsEvents.map((event) => (
            <ListItem
              key={event.id}
              title={event.name}
              after={event.time}
              link="#"
            />
          ))}
        </List>
      </Layout>
    </Page>
  );
};

export default Sports;
