import { Block, Link, Navbar, NavRight, NavTitle, Page, Popup } from "framework7-react";

export const CustomModal = ({
  id,
  title,
  children,
  className,
  onOpen,
  onClose,
  isNavbar
}: {
  id: string;
  title?: string;
  children?: React.ReactNode;
  className?: string;
  onOpen?: () => void;
  onClose?: () => void;
  isNavbar?: boolean
}) => {
  return (
    <Popup id={id} className={className} onPopupClose={onClose} onPopupOpen={onOpen}>
      <Page>
        {isNavbar && (
          <Navbar>
            <NavTitle>
              {title}
            </NavTitle>
            <NavRight>
              <Link popupClose>Close</Link>
            </NavRight>
          </Navbar>
        )}
        <Block>{children}</Block>
      </Page>
    </Popup>
  );
};
