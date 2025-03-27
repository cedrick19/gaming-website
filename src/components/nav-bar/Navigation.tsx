import { PageData } from "@/ts/PageData";
import { f7, Link, Navbar, NavLeft, Toolbar, View, Views } from "framework7-react";
import { useAuth } from "../AuthContext";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

export const NavBar = () => {
    const { isLoggedIn } = useAuth();
    const navigate = (path: string) => f7.views.main.router.navigate(path, { animate: false })

    const handleNav = (path: string) => {
        if (isLoggedIn) navigate(path);
        else {
            f7.loginScreen.open("#loginHere", false);
            return null
        }
    }
  };

    return (
        <>
            <Navbar className="hidden md:flex md:justify-center">
                <NavLeft>
                    <span>U8.COM</span>
                </NavLeft>
                {PageData.map(({ id, name, path }) => (
                    <Link
                        key={id}
                        text={name}
                        onClick={() => handleNav(path)}
                        className="text-gray-700 hover:text-blue-500 mx-2"
                    />
                ))}
            </Navbar>
            
            <Views tabs>
                <Toolbar tabbar icons bottom className="flex justify-center md:hidden">
                    {PageData.map(({ id, name, path}, index) => (
                        <Link
                            key={index}
                            tabLink={`#${id}`}
                            text={name}
                            tabLinkActive={id === "view-home"}
                            onClick={() => handleNav(path)}
                        />
                    ))}
                </Toolbar>
                {PageData.map(({ id, path }, index) => (
                    <View
                        key={index}
                        id={id}
                        name={id.replace("view-", "")}
                        tab
                        main={id === "view-home"}
                        tabActive={id === "view-home"}
                        url={path}
                    />
                ))}
            </Views>
        </>
    );
}
 
export default NavBar;
