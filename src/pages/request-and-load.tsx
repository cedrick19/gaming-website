import React from "react";
import { Page, Navbar, Block, List, ListItem } from "framework7-react";

interface Link {
  url: string;
  title: string;
}

interface User {
  firstName: string;
  lastName: string;
  about: string;
  links: Link[];
}

interface RequestAndLoadProps {
  user: User;
}

const RequestAndLoad: React.FC<RequestAndLoadProps> = ({ user }) => {
  return (
    <Page>
      <Navbar title={`${user.firstName} ${user.lastName}`} backLink="Back" />
      <Block strong inset>
        {user.about}
      </Block>
      <List strong inset dividersIos>
        {user.links.map((link, index) => (
          <ListItem
            key={index}
            link={link.url}
            title={link.title}
            external
            target="_blank"
          />
        ))}
      </List>
    </Page>
  );
};

export default RequestAndLoad;
