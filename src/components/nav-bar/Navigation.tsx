import { PageData } from "@/ts/PageData";
import { f7, Link, Navbar, NavLeft } from "framework7-react";
import { useAuth } from "../AuthContext";

const NavBar = () => {
    const { isLoggedIn } = useAuth();
    const navigate = (path: string) => f7.views.main.router.navigate(path, { animate: false })

    const handleNav = (path: string) => {
        if (isLoggedIn) {
            navigate(path);
        }
        else {
            f7.loginScreen.open("#loginHere");
        }
    }

    return (
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
    );
}
 
export default NavBar;