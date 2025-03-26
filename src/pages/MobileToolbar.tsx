import React from "react";
import { Toolbar, Link } from "framework7-react";

const MobileToolbar = () => {
  return (
    <Toolbar
      tabbar
      icons
      bottom
      className="bg-white text-white border-t border-gray-700 block md:hidden"
    >
      <Link
        tabLink="#view-home"
        tabLinkActive
        iconIos="f7:house_fill"
        iconMd="material:home"
        text="Home"
        className="flex flex-col items-center text-sm hover:text-blue-400"
      />
      <Link
        tabLink="#view-catalog"
        iconIos="f7:square_list_fill"
        iconMd="material:view_list"
        text="Catalog"
        className="flex flex-col items-center text-sm hover:text-blue-400"
      />
      <Link
        tabLink="#view-settings"
        iconIos="f7:gear"
        iconMd="material:settings"
        text="Settings"
        className="flex flex-col items-center text-sm hover:text-blue-400"
      />
    </Toolbar>
  );
};

export default MobileToolbar;
