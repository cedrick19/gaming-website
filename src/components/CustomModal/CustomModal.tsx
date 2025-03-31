import { Block, Page, Popup } from "framework7-react";

export const CustomModal = ({
  id,
  children,
  className,
  onOpen,
  onClose,
}: {
  id: string;
  children?: React.ReactNode;
  className?: string;
  onOpen?: () => void;
  onClose?: () => void;
}) => {
  return (
    <Popup id={id} className={className} onPopupClose={onClose} onPopupOpen={onOpen}>
      <Page>
        <Block>{children}</Block>
      </Page>
    </Popup>
  );
};
