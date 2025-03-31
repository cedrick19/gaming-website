import { Block } from "framework7-react";
import { ReactNode } from "react";

interface LayoutProps {
  style?: string
  children: ReactNode;
}

const Layout = ({ style, children }: LayoutProps) => {
  return <Block className={`${style} container mx-auto`}>{children}</Block>;
};

export default Layout;
