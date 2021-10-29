import Link from "next/link";
const Header = () => (
  <div className="Header bg-white  shadow">
    <div className="container mx-auto">
      <nav className="flex flex-wrap items-center justify-between p-4 ">
        <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
          <a
            className="text-xl text-indigo-600 font-semibold font-heading"
            href="#"
            data-config-id="brand"
          >
            Cool Tools
          </a>
        </div>
        <div className="block lg:hidden">
          <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
          <Link href="/">
            <a className="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow">
              Home
            </a>
          </Link>
        </div>
      </nav>
    </div>
  </div>
);

export default Header;
