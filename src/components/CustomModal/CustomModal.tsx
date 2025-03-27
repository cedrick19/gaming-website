import { Block, Page, Popup } from "framework7-react";

export const CustomModal = ({ id, children }: { id: string, children?: React.ReactNode }) => {
    return (
        <Popup id={id}>
            <Page>
                <Block>
                    {children}
                </Block>
            </Page>
        </Popup>
    )
}