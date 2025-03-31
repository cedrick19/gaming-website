import { Block, Page, Popup } from "framework7-react";

export const CustomModal = ({
  id,
  opened,
  children,
  className,
  onOpen,
  onClose,
}: {
  id: string;
  opened: boolean;
  children?: React.ReactNode;
  className?: string;
  onOpen?: () => void;
  onClose?: () => void;
}) => {
  return (
    <Popup
      id={id}
      className={className}
      opened={opened}
      onPopupClose={onClose}
      onPopupOpen={onOpen}
    >
      <Page>
        <Block>{children}</Block>
      </Page>
    </Popup>
  );
};
