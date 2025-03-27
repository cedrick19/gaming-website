import { PageData } from "@/ts/PageData";
import { f7, Link, Navbar, NavLeft, NavRight } from "framework7-react";
import { useAuth } from "../AuthContext";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const NavBar = () => {
  const { isLoggedIn } = useAuth();
  const navigate = (path: string) => f7.views.main.router.navigate(path, { animate: false });

  const handleNav = (path: string) => {
    if (isLoggedIn) navigate(path);
    else {
      f7.loginScreen.open("#loginHere", false);
    }
  };

  return (
    <Navbar className="flex justify-between">
      <NavLeft>
        <span>U8.COM</span>
      </NavLeft>
      <div className="flex space-x-4">
        {PageData.map(({ id, name, path }) => (
          <Link
            key={id}
            text={name}
            onClick={() => handleNav(path)}
            className="text-gray-700 hover:text-blue-500 mx-2"
          />
        ))}
      </div>
      <NavRight>
        <LanguageSwitcher />
      </NavRight>
    </Navbar>
  );
};

export default NavBar;
