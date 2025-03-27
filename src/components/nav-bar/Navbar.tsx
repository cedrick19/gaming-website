import { Link } from "framework7-react";

const Header = () => {
  return (
    <div className="navbar bg-white shadow-sm">
      <div className="navbar-bg"></div>
      <div className="navbar-inner px-4 py-3">
        {/* Left Section */}
        <div className="left flex items-center space-x-6">
          <div className="flex items-center">
            <div className="mr-2">
              <div className="h-10 w-10 rounded-full bg-blue-500 text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-10 w-10"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
              </div>
            </div>
            <div>
              <span className="text-lg font-bold text-gray-800">U8.COM</span>
              <div className="text-xs text-gray-500">chingchong</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="title flex-1">
          <nav className="hidden md:block">
            <ul className="flex items-center justify-center space-x-6">
              <li>
                <Link
                  href="/lottery/"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Lottery
                </Link>
              </li>
              <li>
                <Link
                  href="/sports/"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link
                  href="/video/"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Video
                </Link>
              </li>
              <li>
                <Link
                  href="/electronic/"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Electronic
                </Link>
              </li>
              <li>
                <Link
                  href="/chess/"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Chess and Cards
                </Link>
              </li>
              <li>
                <Link
                  href="/fishing/"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Fishing
                </Link>
              </li>
              <li>
                <Link
                  href="/lottery/"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Lottery
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
